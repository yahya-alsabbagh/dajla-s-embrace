import { motion } from "framer-motion";

interface PhotoFrameProps {
  caption?: string;
  className?: string;

  /** رابط الصورة (مثال: `${import.meta.env.BASE_URL}photos/1.jpg`) */
  src?: string;

  /** نص بديل */
  alt?: string;
}

const PhotoFrame = ({ caption, className = "", src, alt = "" }: PhotoFrameProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 30 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className={`relative ${className}`}
    >
      <div className="relative max-w-xs mx-auto">
        {/* Outer glow */}
        <div className="absolute -inset-2 bg-gradient-to-br from-accent/20 via-gold/10 to-accent/20 rounded-2xl blur-lg" />

        {/* Main frame */}
        <div className="relative bg-card/90 backdrop-blur-md p-4 rounded-xl shadow-xl border border-gold/30">
          {/* Photo area */}
          <div className="relative aspect-[4/5] rounded-lg overflow-hidden bg-cream/50">
            {src ? (
              <img
                src={src}
                alt={alt || caption || "صورة"}
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
            ) : (
              // Placeholder content
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-accent/20 flex items-center justify-center border border-accent/30">
                    <span className="text-2xl">📷</span>
                  </div>
                  <p className="text-muted-foreground text-sm font-medium">أضف صورتك هنا</p>
                </div>
              </div>
            )}

            {/* Golden corner decorations */}
            <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-accent/60 rounded-tr-md" />
            <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-accent/60 rounded-tl-md" />
            <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-accent/60 rounded-br-md" />
            <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-accent/60 rounded-bl-md" />
          </div>

          {/* Caption */}
          {caption && (
            <p className="text-center text-foreground/80 mt-3 text-sm font-semibold">{caption}</p>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default PhotoFrame;










// import { motion } from "framer-motion";

// interface PhotoFrameProps {
//   caption?: string;
//   className?: string;
// }

// const PhotoFrame = ({ caption, className = "" }: PhotoFrameProps) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, scale: 0.9, y: 30 }}
//       whileInView={{ opacity: 1, scale: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.7 }}
//       className={`relative ${className}`}
//     >
//       <div className="relative max-w-xs mx-auto">
//         {/* Outer glow */}
//         <div className="absolute -inset-2 bg-gradient-to-br from-accent/20 via-gold/10 to-accent/20 rounded-2xl blur-lg" />
        
//         {/* Main frame */}
//         <div className="relative bg-card/90 backdrop-blur-md p-4 rounded-xl shadow-xl border border-gold/30">
//           {/* Photo area */}
//           <div className="relative aspect-[4/5] rounded-lg overflow-hidden bg-cream/50">
//             {/* Placeholder content */}
//             <div className="absolute inset-0 flex items-center justify-center">
//               <div className="text-center p-6">
//                 <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-accent/20 flex items-center justify-center border border-accent/30">
//                   <span className="text-2xl">📷</span>
//                 </div>
//                 <p className="text-muted-foreground text-sm font-medium">
//                   أضف صورتك هنا
//                 </p>
//               </div>
//             </div>
            
//             {/* Golden corner decorations */}
//             <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-accent/60 rounded-tr-md" />
//             <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-accent/60 rounded-tl-md" />
//             <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-accent/60 rounded-br-md" />
//             <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-accent/60 rounded-bl-md" />
//           </div>
          
//           {/* Caption */}
//           {caption && (
//             <p className="text-center text-foreground/80 mt-3 text-sm font-semibold">
//               {caption}
//             </p>
//           )}
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default PhotoFrame;
