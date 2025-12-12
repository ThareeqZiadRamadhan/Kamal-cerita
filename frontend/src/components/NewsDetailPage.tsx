import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Calendar, MapPin, ArrowLeft } from "lucide-react";

// 1. KITA DEFINISIKAN DULU BENTUK DATANYA (INTERFACE)
interface NewsItem {
  _id: string;
  title: string;
  slug: string;
  date: string; 
  location: string;
  attendees: string;
  description: string;
  image: string;
  category: string;
  content?: string; // Tanda tanya (?) artinya boleh ada boleh tidak
}

export function NewsDetailPage() {
  // Kita kasih tau params-nya pasti ada string 'slug'
  const { slug } = useParams<{ slug: string }>(); 
  
  // 2. BAGIAN PENTING:
  // Kita bilang: "State ini isinya NewsItem ATAU null"
  const [newsItem, setNewsItem] = useState<NewsItem | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchDetail = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/news/${slug}`);
        if (!response.ok) throw new Error("Data not found");
        
        const data = await response.json();
        setNewsItem(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    if (slug) {
      fetchDetail();
    }
  }, [slug]);

  if (loading) return <div className="min-h-screen flex items-center justify-center font-bold text-xl">Loading Article...</div>;
  
  // 3. TYPE GUARD
  // Kalau newsItem masih null, kita stop disini.
  // Jadi di bawah kode ini, TypeScript yakin newsItem TIDAK null.
  if (!newsItem) return <div className="min-h-screen flex items-center justify-center font-bold text-xl">Event Not Found!</div>;

  return (
    <div className="min-h-screen bg-white">
      {/* Header Image Full Width */}
      <div className="relative h-[60vh] w-full">
        {/* Sekarang TypeScript tidak akan error lagi disini */}
        <img 
          src={newsItem.image} 
          alt={newsItem.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex items-end">
          <div className="max-w-5xl mx-auto px-4 pb-12 w-full">
            <Link to="/news" className="text-white flex items-center gap-2 mb-6 hover:text-[#CDDC39] transition w-fit font-bold">
              <ArrowLeft size={20} /> Back to All Events
            </Link>
            <span className="bg-[#CDDC39] text-[#1B3A1A] px-4 py-1 text-sm font-black tracking-widest uppercase rounded mb-4 inline-block">
              {newsItem.category}
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-wide mb-6 leading-tight">
              {newsItem.title}
            </h1>
            <div className="flex flex-wrap gap-6 text-white/90 font-medium text-lg">
              <div className="flex items-center gap-2">
                <Calendar className="text-[#CDDC39]" size={20} /> 
                {new Date(newsItem.date).toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="text-[#CDDC39]" size={20} /> {newsItem.location}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Body */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="prose prose-lg max-w-none text-gray-800">
           <div dangerouslySetInnerHTML={{ __html: newsItem.content || `<p>${newsItem.description}</p>` }} />
        </div>
      </div>
    </div>
  );
}