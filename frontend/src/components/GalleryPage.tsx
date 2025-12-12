import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion, AnimatePresence } from "framer-motion";
import { X, Plus, Upload } from "lucide-react";
import toast from 'react-hot-toast';

// Interface Data
interface GalleryItem {
  _id: string;
  category: string;
  title: string;
  description: string;
  image: string; 
}

export function GalleryPage() {
  // State Data
  const [galleryImages, setGalleryImages] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);

  // State UI
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [filter, setFilter] = useState<string>("all");

  // State Form Upload
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [category, setCategory] = useState("people");

  // 2. Fetch Data
  const fetchGallery = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/gallery');
      const data = await res.json();
      setGalleryImages(data);
      setLoading(false);
    } catch (err) {
      console.error("Gagal load gallery:", err);
      setLoading(false);
    }
  };

  useEffect(() => {
    AOS.init({ duration: 1000, once: true, offset: 100 });
    fetchGallery();
  }, []);

  // 3. Logic Submit dengan Toast Promise
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validasi awal
    if (!file || !title) {
      return toast.error("PLEASE SELECT A PHOTO AND ENTER A TITLE!");
    }

    const uploadPromise = new Promise((resolve, reject) => {
      const formData = new FormData();
      formData.append('image', file);
      formData.append('title', title);
      formData.append('description', desc);
      formData.append('category', category);

      fetch('http://localhost:5000/api/gallery', {
        method: 'POST',
        body: formData 
      })
        .then(res => {
          if (res.ok) {
            // Sukses
            setIsFormOpen(false);
            setTitle(""); setDesc(""); setFile(null); 
            fetchGallery(); 
            resolve("Success");
          } else {
            reject("Upload failed");
          }
        })
        .catch(() => {
          // Gagal koneksi
          reject("Network error");
        });
    });

    // 🔥 Panggil Toast
    await toast.promise(uploadPromise, {
      loading: 'UPLOADING PHOTO...',
      success: 'PHOTO UPLOADED SUCCESSFULLY!',
      error: 'FAILED TO UPLOAD PHOTO.',
    });
  };

  const categories = ["all", "people", "culture", "crafts", "nature"];

  // Filter Logic
  const filteredImages = filter === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  if (loading) return <div className="min-h-screen bg-[#CDDC39] flex items-center justify-center font-bold">Loading Gallery...</div>;

  return (
    <div className="min-h-screen bg-[#CDDC39]">
      {/* Hero Section */}
      <section className="bg-[#1B3A1A] py-20 md:py-32 relative overflow-hidden">
        <motion.div 
          className="absolute inset-0"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          style={{ backgroundImage: 'radial-gradient(circle, #CDDC39 2px, transparent 2px)', backgroundSize: '40px 40px' }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-white uppercase tracking-wider mb-6"
            style={{ fontSize: 'clamp(36px, 5vw, 72px)', fontWeight: 900, letterSpacing: '3px' }}
          >
            PHOTO GALLERY
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[#CDDC39] max-w-3xl mx-auto"
            style={{ fontSize: '20px', lineHeight: '1.7', letterSpacing: '0.5px' }}
          >
            Explore the vibrant life and rich culture of Desa Ceria through our lens
          </motion.p>
        </div>
      </section>

      {/* Filter & Toolbar Section */}
      <section className="py-8 sticky top-20 z-40 bg-[#CDDC39]/95 backdrop-blur-md shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
          
          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter(category)}
                className={`px-6 py-3 rounded-md uppercase transition-all ${
                  filter === category
                    ? 'bg-[#1B3A1A] text-white shadow-lg'
                    : 'bg-white text-[#1B3A1A] hover:bg-gray-100'
                }`}
                style={{ fontWeight: 900, letterSpacing: '0.5px', fontSize: '14px' }}
              >
                {category}
              </motion.button>
            ))}
          </div>

          {/* Tombol Upload */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsFormOpen(true)}
            className="flex items-center gap-2 bg-[#1B3A1A] text-white px-6 py-3 rounded-md font-bold shadow-lg border-2 border-[#1B3A1A] hover:bg-transparent hover:text-[#1B3A1A] transition-colors"
          >
            <Plus size={20} /> SUBMIT PHOTO
          </motion.button>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {filteredImages.length === 0 ? (
            <div className="text-center font-bold opacity-50 text-xl">No photos found. Be the first to submit!</div>
          ) : (
            <AnimatePresence mode="wait">
              <motion.div
                key={filter}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {filteredImages.map((image, index) => (
                  <motion.div
                    key={image._id || index}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    whileHover={{ scale: 1.05, zIndex: 10 }}
                    className="relative group cursor-pointer rounded-lg overflow-hidden shadow-lg aspect-square bg-white border-4 border-white"
                    onClick={() => setSelectedImageIndex(index)}
                  >
                    <div className="relative w-full h-full overflow-hidden">
                      <ImageWithFallback
                        src={image.image}
                        alt={image.title}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                      />
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1B3A1A] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                          <span className="text-[#CDDC39] text-xs font-bold uppercase mb-1 block">{image.category}</span>
                          <h3 className="uppercase" style={{ fontWeight: 900, fontSize: '16px', letterSpacing: '0.5px' }}>
                            {image.title}
                          </h3>
                          <p style={{ fontSize: '13px' }} className="line-clamp-1">{image.description}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          )}
        </div>
      </section>

      {/* --- MODAL FORM UPLOAD --- */}
      <AnimatePresence>
        {isFormOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <motion.div 
              initial={{ scale: 0.9, y: 20 }} 
              animate={{ scale: 1, y: 0 }} 
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white rounded-xl w-full max-w-md p-6 relative shadow-2xl"
            >
              <button onClick={() => setIsFormOpen(false)} className="absolute top-4 right-4 text-gray-500 hover:text-red-500 transition-colors">
                <X size={24} />
              </button>
              
              <h2 className="text-2xl font-black text-[#1B3A1A] mb-6 flex items-center gap-2">
                <Upload size={24} /> UPLOAD PHOTO
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Select Photo</label>
                  <input 
                    type="file" 
                    accept="image/*"
                    className="w-full p-2 border-2 border-gray-200 rounded-lg focus:border-[#1B3A1A] outline-none"
                    onChange={(e) => setFile(e.target.files ? e.target.files[0] : null)}
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Title</label>
                  <input 
                    type="text" 
                    className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-[#1B3A1A] outline-none"
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)} 
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Category</label>
                  <select 
                    className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-[#1B3A1A] outline-none"
                    value={category} 
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    <option value="people">People</option>
                    <option value="culture">Culture</option>
                    <option value="crafts">Crafts</option>
                    <option value="nature">Nature</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Description</label>
                  <textarea 
                    className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-[#1B3A1A] outline-none"
                    rows={3} 
                    value={desc} 
                    onChange={(e) => setDesc(e.target.value)}
                  ></textarea>
                </div>

                <button type="submit" className="w-full bg-[#1B3A1A] text-white font-bold py-3 rounded-lg hover:bg-[#2d5c2a] transition shadow-lg mt-2">
                  UPLOAD NOW
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Lightbox Detail */}
      <AnimatePresence>
        {selectedImageIndex !== null && filteredImages[selectedImageIndex] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImageIndex(null)}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-[#CDDC39] transition-colors"
              onClick={() => setSelectedImageIndex(null)}
            >
              <X size={40} />
            </button>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 20 }}
              className="max-w-6xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <ImageWithFallback
                src={filteredImages[selectedImageIndex].image}
                alt={filteredImages[selectedImageIndex].title}
                className="w-full max-h-[70vh] object-contain rounded-lg mx-auto border-4 border-white shadow-2xl"
              />
              <div className="mt-6 text-center text-white">
                <span className="bg-[#CDDC39] text-[#1B3A1A] px-3 py-1 text-sm font-bold uppercase rounded mb-3 inline-block">
                  {filteredImages[selectedImageIndex].category}
                </span>
                <h3 className="uppercase mb-2" style={{ fontWeight: 900, fontSize: '24px', letterSpacing: '1px' }}>
                  {filteredImages[selectedImageIndex].title}
                </h3>
                <p style={{ fontSize: '16px' }}>{filteredImages[selectedImageIndex].description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}