import { COMPANY_STATS } from "../data";
import { useEffect, useRef, useState } from "react";
import CountUp from "./CountUp";

export default function About() {

const sectionRef = useRef<HTMLElement>(null);
const [startCount, setStartCount] = useState(false);
const [showSection, setShowSection] = useState(false);

useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
        if (entry.isIntersecting) {
          setShowSection(true);
        
          setTimeout(() => {
            setStartCount(true);
          }, 350);
        
          observer.disconnect();
        }
    },
    {
      threshold: 0.45,
    }
  );

  if (sectionRef.current) {
    observer.observe(sectionRef.current);
  }

  return () => observer.disconnect();
}, []);

return (
<section
  ref={sectionRef}
  id="our-story"
  className={`
    bg-[#f8f5f0]
    py-20
    transition-all
    duration-[900ms]
    ease-[cubic-bezier(.19,1,.22,1)]
    will-change-transform
    ${
      showSection
        ? "opacity-100 translate-y-0 scale-100 blur-0"
        : "opacity-0 translate-y-16 scale-95 blur-md"
    }
  `}
>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <div className="reveal text-center mb-14">
      <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#7c142b]">
        NĂNG LỰC THỰC TẾ
      </span>

      <h2 className="mt-3 font-serif text-3xl sm:text-4xl font-bold text-charcoal-text">
        Fesgift Qua Những Con Số
      </h2>

      <p className="mt-4 max-w-2xl mx-auto text-sm leading-relaxed text-charcoal-text/70">
        Những con số tiêu biểu phản ánh năng lực triển khai,
        kinh nghiệm vận hành và mức độ tin tưởng của khách hàng
        doanh nghiệp trên toàn quốc.
      </p>
    </div>

    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {COMPANY_STATS.map((item, index) => (
        <div
          key={item.label}
          style={{
            transitionDelay: `${index * 120}ms`,
          }}
            className="
              premium-card
              p-8
              text-center
            "
        >
        <div className="text-5xl font-bold text-[#7c142b]">
          <CountUp
            value={item.value}
            start={startCount}
          />
        </div>

          <div className="mt-3 text-sm text-charcoal-text/70">
            {item.label}
          </div>
        </div>
      ))}
    </div>

  </div>
</section>
);
}
