import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 px-6 relative">
      <div className="container max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Names */}
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gold-gradient drop-shadow-lg">يحيى</span>
            <span className="text-accent mx-3 drop-shadow-md">♥</span>
            <span className="text-gold-gradient drop-shadow-lg">آية</span>
          </h2>
          
          {/* Message */}
          <p className="text-xl text-foreground/90 mb-8 font-medium drop-shadow-sm">
            شكراً لحضوركم فرحتنا
          </p>

          {/* Decorative element */}
          <div className="decorative-divider mb-8">
            <span className="text-accent text-xl drop-shadow-md">❧</span>
          </div>

          {/* Social/Contact placeholder */}
          <div className="flex justify-center gap-4 mb-8">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="w-12 h-12 rounded-full bg-card/80 backdrop-blur-sm border border-accent/40 flex items-center justify-center cursor-pointer shadow-lg"
            >
              <Heart className="w-5 h-5 text-accent" />
            </motion.div>
          </div>

          {/* Copyright */}
          <p className="text-sm text-foreground/70 font-medium">
            ©2026 يحيى و آية
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
