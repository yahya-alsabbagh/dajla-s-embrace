import { motion } from "framer-motion";
import frameImage from "@/assets/photo-frame-1.jpg";

interface PhotoFrameProps {
  caption?: string;
  className?: string;
}

const PhotoFrame = ({ caption, className = "" }: PhotoFrameProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`relative ${className}`}
    >
      <div className="photo-frame max-w-sm mx-auto bg-card p-3 rounded-xl shadow-lg">
        {/* Frame border image as background */}
        <div className="relative aspect-square rounded-lg overflow-hidden bg-cream">
          {/* Placeholder - replace with actual photo */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gold/10 flex items-center justify-center">
                <span className="text-3xl">📷</span>
              </div>
              <p className="text-muted-foreground text-sm">
                أضف صورتك هنا
              </p>
            </div>
          </div>
          {/* Golden corner decorations */}
          <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-gold/40 rounded-tr-lg" />
          <div className="absolute top-2 left-2 w-8 h-8 border-t-2 border-l-2 border-gold/40 rounded-tl-lg" />
          <div className="absolute bottom-2 right-2 w-8 h-8 border-b-2 border-r-2 border-gold/40 rounded-br-lg" />
          <div className="absolute bottom-2 left-2 w-8 h-8 border-b-2 border-l-2 border-gold/40 rounded-bl-lg" />
        </div>
        
        {/* Caption */}
        {caption && (
          <p className="text-center text-foreground/70 mt-3 text-sm font-medium">
            {caption}
          </p>
        )}
      </div>
    </motion.div>
  );
};

export default PhotoFrame;
