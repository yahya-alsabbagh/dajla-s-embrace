import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Content - no background image here since it's now global */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        {/* Basmala + Verse (mobile-friendly) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mb-6"
        >
          <div className="text-accent text-lg md:text-xl font-semibold tracking-wide drop-shadow-sm">
            بسم الله الرحمن الرحيم
          </div>

          <div className="mt-2 text-base md:text-lg text-foreground/90 font-medium drop-shadow-sm leading-relaxed">
            <span className="block md:inline">
              (وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا
            </span>
            <span className="block md:inline"> لِّتَسْكُنُوا إِلَيْهَا)</span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4"
        >
          <span className="text-gold-gradient drop-shadow-lg">يحيى</span>
          <span className="text-accent mx-4 text-4xl md:text-5xl drop-shadow-md">
            ✦
          </span>
          <span className="text-gold-gradient drop-shadow-lg">آية</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-xl md:text-2xl text-foreground font-semibold mb-8 drop-shadow-sm"
        >
          بحضوركم تتم أفراحنا
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="decorative-divider"
        >
          <span className="text-accent text-2xl drop-shadow-md">❧</span>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
