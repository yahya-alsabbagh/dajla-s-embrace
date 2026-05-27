import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Heart, Send, X } from "lucide-react";
import { useState } from "react";

type RSVPStatus = "attending" | "not-attending" | "maybe" | null;

const RSVPForm = () => {
  // ✅ ضع رابط Google Apps Script Web App هنا
  const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzsBN62V2DwAs63t5VcCtG0izLCE8OWk-fFFRp8ev0fLJUz6lrSOYZiXn05nwwWZ_IR/exec";

  const [name, setName] = useState("");
  const [guestCount, setGuestCount] = useState("1");
  const [status, setStatus] = useState<RSVPStatus>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const statusToArabic = (s: RSVPStatus) => {
    if (s === "attending") return "آتي";
    if (s === "not-attending") return "لا أستطيع";
    if (s === "maybe") return "ربما آتي";
    return "";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !status) return;

    setIsSending(true);

    // ✅ نرسل فورم-يو آر إل إنكودد (بدون CORS مشاكل)
    const body = new URLSearchParams();
    body.append("name", name);
    body.append("guests", guestCount);
    body.append("status", statusToArabic(status));

    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        body,
      });

      setIsSubmitted(true);

      // تنظيف اختياري
      setTimeout(() => {
        setName("");
        setGuestCount("1");
        setStatus(null);
      }, 400);
    } catch (err) {
      console.error(err);
      alert("صار خطأ بالإرسال، حاول مرة ثانية.");
    } finally {
      setIsSending(false);
    }
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
    <section className="py-6 px-6 relative">
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
                  required
                  className="h-12 text-lg bg-background/50 border-border/50 focus:border-accent"
                />
              </div>

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

              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="pt-4">
                <Button
                  type="submit"
                  disabled={!name || !status || isSending}
                  className="w-full h-14 text-lg bg-gradient-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent/70 text-accent-foreground font-bold rounded-xl shadow-lg disabled:opacity-50"
                >
                  <Send className="w-5 h-5 ml-2" />
                  {isSending ? "جاري الإرسال..." : "إرسال التأكيد"}
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
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-secondary/20 flex items-center justify-center border border-secondary/30">
                <Check className="w-10 h-10 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">
                شكراً لتأكيد حضوركم!
              </h3>
              <p className="text-muted-foreground text-lg">
                تم تسجيل ردّكم بنجاح
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default RSVPForm;


