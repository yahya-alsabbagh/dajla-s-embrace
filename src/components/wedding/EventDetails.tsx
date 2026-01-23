import { motion } from "framer-motion";
import { Calendar, Clock, MapPin } from "lucide-react";

const EventDetails = () => {
  // Placeholder values - easily editable
  const eventDetails = {
    date: "الجمعة ١٥ شوال ١٤٤٦",
    dateGregorian: "٢٠ يونيو ٢٠٢٥",
    time: "٧:٠٠ مساءً",
    venue: "قاعة النخيل الكبرى",
    address: "بغداد - المنصور",
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-20 px-6 relative">
      <div className="pattern-overlay" />
      
      <div className="container max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">تفاصيل الحفل</h2>
          <p className="section-subtitle">يشرفنا حضوركم لمشاركتنا فرحتنا</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6"
        >
          {/* Date Card */}
          <motion.div variants={itemVariants} className="wedding-card text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-tigris/10 flex items-center justify-center">
              <Calendar className="w-8 h-8 text-tigris" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-foreground">التاريخ</h3>
            <p className="text-lg text-foreground/80">{eventDetails.date}</p>
            <p className="text-muted-foreground">{eventDetails.dateGregorian}</p>
          </motion.div>

          {/* Time Card */}
          <motion.div variants={itemVariants} className="wedding-card text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
              <Clock className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-foreground">الوقت</h3>
            <p className="text-lg text-foreground/80">{eventDetails.time}</p>
            <p className="text-muted-foreground">توقيت بغداد</p>
          </motion.div>

          {/* Venue Card */}
          <motion.div variants={itemVariants} className="wedding-card text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-olive/10 flex items-center justify-center">
              <MapPin className="w-8 h-8 text-olive" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-foreground">المكان</h3>
            <p className="text-lg text-foreground/80">{eventDetails.venue}</p>
            <p className="text-muted-foreground">{eventDetails.address}</p>
          </motion.div>
        </motion.div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="decorative-divider">
            <span className="text-accent">✦</span>
          </div>
          <p className="text-xl text-foreground/80 italic max-w-xl mx-auto">
            "الحب ليس أن تجد شخصاً تعيش معه، بل أن تجد شخصاً لا تستطيع العيش بدونه"
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default EventDetails;
