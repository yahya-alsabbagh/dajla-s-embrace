import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X, Heart, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type RSVPStatus = "attending" | "not-attending" | "maybe" | null;

const RSVPForm = () => {
  const [name, setName] = useState("");
  const [guestCount, setGuestCount] = useState("1");
  const [status, setStatus] = useState<RSVPStatus>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log({ name, guestCount, status });
    setIsSubmitted(true);
  };

  const statusOptions = [
    {
      value: "attending" as RSVPStatus,
      label: "آتي",
      icon: Check,
      color: "text-secondary bg-secondary/10 border-secondary/30",
      selectedColor: "text-secondary bg-secondary/20 border-secondary",
    },
    {
      value: "not-attending" as RSVPStatus,
      label: "لا أستطيع",
      icon: X,
      color: "text-destructive/70 bg-destructive/5 border-destructive/20",
      selectedColor: "text-destructive bg-destructive/10 border-destructive/50",
    },
    {
      value: "maybe" as RSVPStatus,
      label: "ربما آتي",
      icon: Heart,
      color: "text-accent bg-accent/10 border-accent/30",
      selectedColor: "text-accent bg-accent/20 border-accent",
    },
  ];

  return (
    <section className="py-20 px-6 relative">
      <div className="container max-w-xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title drop-shadow-sm">تأكيد الحضور</h2>
          <p className="section-subtitle">نسعد بتأكيد حضوركم</p>
        </motion.div>

        <AnimatePresence mode="wait">
          {!isSubmitted ? (
            <motion.form
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              onSubmit={handleSubmit}
              className="wedding-card space-y-6 backdrop-blur-md"
            >
              {/* Name Field */}
              <div className="space-y-2">
                <Label htmlFor="name" className="text-foreground font-semibold">
                  الاسم الكريم
                </Label>
                <Input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="أدخل اسمك الكريم"
                  required
                  className="h-12 text-lg bg-background/50 border-border/50 focus:border-accent"
                />
              </div>

              {/* Guest Count */}
              <div className="space-y-2">
                <Label htmlFor="guests" className="text-foreground font-semibold">
                  عدد الحاضرين
                </Label>
                <Input
                  id="guests"
                  type="number"
                  min="1"
                  max="10"
                  value={guestCount}
                  onChange={(e) => setGuestCount(e.target.value)}
                  className="h-12 text-lg bg-background/50 border-border/50 focus:border-accent"
                />
              </div>

              {/* Status Selection */}
              <div className="space-y-3">
                <Label className="text-foreground font-semibold">
                  هل ستحضر؟
                </Label>
                <div className="grid grid-cols-3 gap-3">
                  {statusOptions.map((option) => {
                    const Icon = option.icon;
                    const isSelected = status === option.value;
                    return (
                      <motion.button
                        key={option.value}
                        type="button"
                        onClick={() => setStatus(option.value)}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`rsvp-status-btn border-2 ${
                          isSelected ? option.selectedColor : option.color
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                        <span className="font-semibold">{option.label}</span>
                      </motion.button>
                    );
                  })}
                </div>
              </div>

              {/* Submit Button */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="pt-4"
              >
                <Button
                  type="submit"
                  disabled={!name || !status}
                  className="w-full h-14 text-lg bg-gradient-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent/70 text-accent-foreground font-bold rounded-xl shadow-lg disabled:opacity-50"
                >
                  <Send className="w-5 h-5 ml-2" />
                  إرسال التأكيد
                </Button>
              </motion.div>
            </motion.form>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="wedding-card text-center py-12 backdrop-blur-md"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="w-20 h-20 mx-auto mb-6 rounded-full bg-secondary/20 flex items-center justify-center border border-secondary/30"
              >
                <Check className="w-10 h-10 text-secondary" />
              </motion.div>
              <h3 className="text-2xl font-bold text-foreground mb-3">
                شكراً لتأكيد حضوركم!
              </h3>
              <p className="text-muted-foreground text-lg">
                نتطلع للقائكم في ليلتنا المميزة
              </p>
              <div className="decorative-divider mt-8">
                <span className="text-accent text-2xl drop-shadow-md">❧</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default RSVPForm;
