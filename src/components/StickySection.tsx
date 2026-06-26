import { ReactNode } from "react";

interface StickySectionProps {
  children: ReactNode;
  height?: string;
  className?: string;
  contentClassName?: string;
}

export default function StickySection({
  children,
  height = "200vh",
  className = "",
  contentClassName = "",
}: StickySectionProps) {
  return (
    <section
      className={`relative w-full ${className}`}
      style={{ height }}
    >
      <div
        className={`sticky top-0 h-screen overflow-hidden ${contentClassName}`}
      >
        {children}
      </div>
    </section>
  );
}
