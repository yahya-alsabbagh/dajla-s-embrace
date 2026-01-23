import { motion } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";

const LocationSection = () => {
  // Placeholder - replace with actual Google Maps link
  const mapsLink = "https://maps.google.com/?q=Baghdad,Iraq";
  
  const venueInfo = {
    name: "قاعة النخيل الكبرى",
    address: "بغداد - المنصور - شارع الأميرات",
    landmark: "بجانب فندق المنصور ميليا",
  };

  return (
    <section className="py-20 px-6 relative">
      <div className="container max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title drop-shadow-sm">موقع الحفل</h2>
          <p className="section-subtitle">نتشرف بقدومكم</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="wedding-card text-center backdrop-blur-md"
        >
          {/* Map Placeholder */}
          <div className="relative h-48 md:h-64 rounded-xl overflow-hidden mb-6 bg-tigris/10">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-tigris mx-auto mb-2" />
                <p className="text-muted-foreground font-medium">خريطة الموقع</p>
              </div>
            </div>
            {/* Decorative borders */}
            <div className="absolute inset-2 border border-accent/30 rounded-lg pointer-events-none" />
          </div>

          {/* Venue Details */}
          <div className="space-y-3 mb-8">
            <h3 className="text-2xl font-bold text-foreground">{venueInfo.name}</h3>
            <p className="text-lg text-foreground/90 font-medium">{venueInfo.address}</p>
            <p className="text-muted-foreground">{venueInfo.landmark}</p>
          </div>

          {/* Map Button */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-tigris to-tigris/80 hover:from-tigris/90 hover:to-tigris/70 text-primary-foreground px-8 py-6 text-lg rounded-xl shadow-lg"
            >
              <a href={mapsLink} target="_blank" rel="noopener noreferrer">
                <Navigation className="w-5 h-5 ml-2" />
                عرض الموقع على الخريطة
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default LocationSection;
