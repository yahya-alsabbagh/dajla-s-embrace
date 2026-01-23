import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 px-6 relative">
      <div className="pattern-overlay" />
      
      <div className="container max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Names */}
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gold-gradient">يحيى</span>
            <span className="text-accent mx-3">♥</span>
            <span className="text-gold-gradient">آية</span>
          </h2>
          
          {/* Message */}
          <p className="text-xl text-foreground/80 mb-8">
            شكراً لمشاركتنا فرحتنا
          </p>

          {/* Decorative element */}
          <div className="decorative-divider mb-8">
            <span className="text-accent text-xl">❧</span>
          </div>

          {/* Social/Contact placeholder */}
          <div className="flex justify-center gap-4 mb-8">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="w-12 h-12 rounded-full bg-card border border-accent/30 flex items-center justify-center cursor-pointer"
            >
              <Heart className="w-5 h-5 text-accent" />
            </motion.div>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © ٢٠٢٥ يحيى و آية
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
