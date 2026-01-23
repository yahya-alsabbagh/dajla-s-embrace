import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Countdown = () => {
  // Placeholder date - easily editable
  const weddingDate = new Date("2026-03-28T117:00:00");

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const difference = weddingDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { value: timeLeft.days, label: "يوم" },
    { value: timeLeft.hours, label: "ساعة" },
    { value: timeLeft.minutes, label: "دقيقة" },
    { value: timeLeft.seconds, label: "ثانية" },
  ];

  return (
    <section className="py-20 px-6 relative">
      <div className="container max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title drop-shadow-sm">باقي على عرسنا وعيدنا</h2>
          <p className="section-subtitle">لليلة العمر</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center gap-4 md:gap-8 flex-wrap"
        >
          {timeUnits.map((unit, index) => (
            <motion.div
              key={unit.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              className="text-center"
            >
              <div className="wedding-card backdrop-blur-md w-20 h-24 md:w-28 md:h-32 flex flex-col items-center justify-center">
                <span className="text-3xl md:text-5xl font-bold text-gold-gradient drop-shadow-lg">
                  {unit.value.toString().padStart(2, "0")}
                </span>
              </div>
              <p className="mt-3 text-sm md:text-base text-foreground font-semibold drop-shadow-sm">
                {unit.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Decorative Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="decorative-divider">
            <span className="text-accent drop-shadow-md">❧</span>
          </div>
          <p className="text-lg text-foreground/90 italic font-medium drop-shadow-sm">
            وجودكم يكمّل بهجتنا
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Countdown;
