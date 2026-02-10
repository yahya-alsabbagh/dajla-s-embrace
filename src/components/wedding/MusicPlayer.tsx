// import MajedMp3 from "@/assets/Majed.mp3";
// import { useState, useRef, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Volume2, VolumeX, Music } from "lucide-react";

// const MusicPlayer = () => {
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [showPrompt, setShowPrompt] = useState(true);
//   const audioRef = useRef<HTMLAudioElement>(null);

//   // Placeholder music URL - replace with actual music file
//   const musicUrl = MajedMp3;


//   useEffect(() => {
//     const handleFirstInteraction = () => {
//       setShowPrompt(false);
//       document.removeEventListener("click", handleFirstInteraction);
//     };

//     document.addEventListener("click", handleFirstInteraction);
//     return () => document.removeEventListener("click", handleFirstInteraction);
//   }, []);

//   const toggleMusic = () => {
//     if (audioRef.current) {
//       if (isPlaying) {
//         audioRef.current.pause();
//       } else {
//         audioRef.current.play().catch(console.error);
//       }
//       setIsPlaying(!isPlaying);
//     }
//   };

//   return (
//     <>
//       <audio ref={audioRef} src={musicUrl} loop />
      
//       {/* Music Toggle Button */}
//       <motion.button
//         onClick={toggleMusic}
//         initial={{ opacity: 0, scale: 0 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ delay: 2, type: "spring" }}
//         className="music-btn"
//         aria-label={isPlaying ? "إيقاف الموسيقى" : "تشغيل الموسيقى"}
//       >
//         <AnimatePresence mode="wait">
//           {isPlaying ? (
//             <motion.div
//               key="playing"
//               initial={{ scale: 0 }}
//               animate={{ scale: 1 }}
//               exit={{ scale: 0 }}
//             >
//               <Volume2 className="w-6 h-6 text-accent" />
//             </motion.div>
//           ) : (
//             <motion.div
//               key="muted"
//               initial={{ scale: 0 }}
//               animate={{ scale: 1 }}
//               exit={{ scale: 0 }}
//             >
//               <VolumeX className="w-6 h-6 text-muted-foreground" />
//             </motion.div>
//           )}
//         </AnimatePresence>
        
//         {/* Animated ring when playing */}
//         {isPlaying && (
//           <motion.div
//             className="absolute inset-0 rounded-full border-2 border-accent"
//             animate={{ scale: [1, 1.2, 1], opacity: [1, 0, 1] }}
//             transition={{ duration: 2, repeat: Infinity }}
//           />
//         )}
//       </motion.button>

//       {/* First-time prompt */}
//       <AnimatePresence>
//         {showPrompt && (
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: 20 }}
//             className="fixed bottom-24 left-6 z-50"
//           >
//             <div className="bg-card px-4 py-3 rounded-xl shadow-lg border border-accent/20 flex items-center gap-2">
//               <Music className="w-4 h-4 text-accent" />
//               <span className="text-sm text-foreground">
//                 اضغط لتشغيل الموسيقى
//               </span>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// };

// export default MusicPlayer;

import MajedMp3 from "@/assets/Majed.mp3";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const musicUrl = MajedMp3;

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
      return;
    }

    audioRef.current
      .play()
      .then(() => setIsPlaying(true))
      .catch(() => {
        // بعض الموبايلات تمنع التشغيل قبل تفاعل المستخدم
      });
  };

  return (
    <>
      <audio ref={audioRef} src={musicUrl} loop />

      {/* نفس مكان زر music-btn */}
      <div className="fixed bottom-6 left-6 z-50 w-14 h-14">
        {/* ✅ مستطيل أفقي فوق الزر بالكامل (غير قابل للضغط) */}
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 pointer-events-none select-none">
          <div className="px-4 py-2 rounded-xl bg-card/80 backdrop-blur-md border border-accent/20 shadow-sm whitespace-nowrap">
            <span className="text-xs font-semibold text-foreground/80">
              شغّل الأغنية
            </span>
          </div>
        </div>

        {/* زر السماعة */}
        <motion.button
          onClick={toggleMusic}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2, type: "spring" }}
          className="music-btn relative"
          aria-label={isPlaying ? "إيقاف الموسيقى" : "تشغيل الموسيقى"}
        >
          <AnimatePresence mode="wait">
            {isPlaying ? (
              <motion.div
                key="playing"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
              >
                <Volume2 className="w-6 h-6 text-accent" />
              </motion.div>
            ) : (
              <motion.div
                key="muted"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
              >
                <VolumeX className="w-6 h-6 text-muted-foreground" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* حلقة ناعمة أثناء التشغيل */}
          {isPlaying && (
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-accent/60"
              animate={{ scale: [1, 1.15, 1], opacity: [1, 0.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          )}
        </motion.button>
      </div>
    </>
  );
};

export default MusicPlayer;
