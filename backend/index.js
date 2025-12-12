const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const cors = require('cors');
const path = require('path');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// MIDDLEWARE 
app.use(cors());
app.use(express.json());

app.use('/uploads', express.static(path.join(__dirname, 'public/uploads')));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/uploads');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});
const upload = multer({ storage: storage });


mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ KONEKSI SUKSES'))
  .catch(err => console.error('❌ KONEKSI GAGAL:', err));


const EventSchema = new mongoose.Schema({
  title: String,
  slug: String,
  date: Date,
  location: String,
  attendees: String,
  description: String,
  content: String, 
  image: String,
  category: String,
  isActive: Boolean
});


const EventModel = mongoose.model('events', EventSchema, 'events');

const PotentialSchema = new mongoose.Schema({
  title: String,
  subtitle: String,
  description: String,
  features: [String], 
  image: String,
  details: String
});
const PotentialModel = mongoose.model('potential_page_items', PotentialSchema, 'potentials');

const GallerySchema = new mongoose.Schema({
  title: String,
  description: String,
  category: String, 
  image: String     
});

const GalleryModel = mongoose.model('gallery_items', GallerySchema, 'galerry_items');


//email
const ContactSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  message: String,
  date: { type: Date, default: Date.now }
});
const ContactModel = mongoose.model('contacts', ContactSchema, 'contacts');

// 2. CONFIG EMAIL 
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS  
  }
});
// Cek Server
app.get('/', (req, res) => {
  res.send('Backend Web Desa is Running!');
});

app.get('/api/news', async (req, res) => {
  try {
    const events = await EventModel.find({ isActive: true });
    res.json(events);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// API 2: Ambil Satu Berita (Detail)
app.get('/api/news/:slug', async (req, res) => {
  try {
    const event = await EventModel.findOne({ slug: req.params.slug });
    if (!event) return res.status(404).json({ message: 'Data tidak ditemukan' });
    res.json(event);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
app.get('/api/potential-page', async (req, res) => {
  try {
    const items = await PotentialModel.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
// Gallery (GET)
app.get('/api/gallery', async (req, res) => {
  try {
    const items = await GalleryModel.find();
    res.json(items);
  } catch (err) { res.status(500).json({ error: err.message }); }
});

// Gallery (POST - UPLOAD) --> BAGIAN INI YANG TADI SALAH
// Kita tambah middleware 'upload.single'
app.post('/api/gallery', upload.single('image'), async (req, res) => {
  try {
    // Cek apakah ada file yang dikirim?
    if (!req.file) {
      return res.status(400).json({ message: "Wajib upload gambar!" });
    }

    // Buat URL lengkap gambar
    const imageUrl = `http://localhost:5000/uploads/${req.file.filename}`;

    // Buat object data baru
    const newItem = new GalleryModel({
      title: req.body.title,
      description: req.body.description,
      category: req.body.category,
      image: imageUrl // Simpan URL, bukan file mentah
    });

    // Simpan ke MongoDB
    await newItem.save(); 
    
    console.log("✅ Foto berhasil diupload:", newItem.title);
    res.status(201).json(newItem); 

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    // A. Simpan ke Database
    const newContact = new ContactModel({ name, email, phone, message });
    await newContact.save();

    // B. Kirim Email Notifikasi ke Admin (Kamu)
    const mailOptions = {
      from: email, // Dari email pengirim (user)
      to: 'ziadramadhan570@gmail.com', // Kirim ke email kamu sendiri
      subject: `Pesan Baru dari Web Desa: ${name}`,
      text: `Nama: ${name}\nEmail: ${email}\nHP: ${phone}\n\nPesan:\n${message}`
    };

    // Proses kirim email (Asynchronous)
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log('Gagal kirim email:', error);
        // Tetap return sukses karena data sudah masuk DB
        return res.status(201).json({ message: "Disimpan di DB, tapi gagal email", data: newContact });
      } else {
        console.log('Email terkirim:', info.response);
        return res.status(201).json({ message: "Sukses simpan & kirim email", data: newContact });
      }
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
// Jalankan Server
app.listen(PORT, () => {
  console.log(`🚀 Server Backend nyala di http://localhost:${PORT}`);
});