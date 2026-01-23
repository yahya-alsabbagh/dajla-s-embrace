import { useEffect, useMemo, useState } from "react";

type Props = {
  /** مثال: "2026-03-15T19:00:00+03:00" */
  isoDateTime: string;
};

function getTimeLeft(target: Date) {
  const diff = target.getTime() - Date.now();
  const clamped = Math.max(0, diff);

  const days = Math.floor(clamped / (1000 * 60 * 60 * 24));
  const hours = Math.floor((clamped / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((clamped / (1000 * 60)) % 60);
  const seconds = Math.floor((clamped / 1000) % 60);

  return { diff, days, hours, minutes, seconds };
}

function pad(n: number) {
  return String(n).padStart(2, "0");
}

export default function Countdown({ isoDateTime }: Props) {
  const target = useMemo(() => new Date(isoDateTime), [isoDateTime]);

  const [t, setT] = useState(() => getTimeLeft(target));
  const [invalid, setInvalid] = useState(() => Number.isNaN(target.getTime()));

  useEffect(() => {
    const isInvalid = Number.isNaN(target.getTime());
    setInvalid(isInvalid);
    if (isInvalid) return;

    setT(getTimeLeft(target));
    const id = window.setInterval(() => {
      setT(getTimeLeft(target));
    }, 1000);

    return () => window.clearInterval(id);
  }, [target]);

  if (invalid) {
    return (
      <div style={{ padding: 16, border: "1px solid #ddd", borderRadius: 12 }}>
        <b>⚠️ التاريخ غير صالح</b>
        <div style={{ marginTop: 6, fontSize: 14 }}>
          تأكد من صيغة ISO مثل: <code>2026-03-15T19:00:00+03:00</code>
        </div>
      </div>
    );
  }

  return (
    <div style={{ padding: 16, border: "1px solid #ddd", borderRadius: 12 }}>
      <div style={{ fontWeight: 700, marginBottom: 12 }}>العدّاد التنازلي</div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
          gap: 12,
          textAlign: "center",
        }}
      >
        <div style={{ padding: 12, borderRadius: 12, border: "1px solid #eee" }}>
          <div style={{ fontSize: 28, fontWeight: 800 }}>{pad(t.days)}</div>
          <div style={{ fontSize: 13, opacity: 0.8 }}>يوم</div>
        </div>

        <div style={{ padding: 12, borderRadius: 12, border: "1px solid #eee" }}>
          <div style={{ fontSize: 28, fontWeight: 800 }}>{pad(t.hours)}</div>
          <div style={{ fontSize: 13, opacity: 0.8 }}>ساعة</div>
        </div>

        <div style={{ padding: 12, borderRadius: 12, border: "1px solid #eee" }}>
          <div style={{ fontSize: 28, fontWeight: 800 }}>{pad(t.minutes)}</div>
          <div style={{ fontSize: 13, opacity: 0.8 }}>دقيقة</div>
        </div>

        <div style={{ padding: 12, borderRadius: 12, border: "1px solid #eee" }}>
          <div style={{ fontSize: 28, fontWeight: 800 }}>{pad(t.seconds)}</div>
          <div style={{ fontSize: 13, opacity: 0.8 }}>ثانية</div>
        </div>
      </div>

      {t.diff <= 0 && (
        <div style={{ marginTop: 12, fontSize: 14, opacity: 0.85 }}>
          🎉 انتهى العدّاد
        </div>
      )}
    </div>
  );
}
