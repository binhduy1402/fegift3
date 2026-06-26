import { ReactNode } from "react";

interface StickyWrapperProps {
  children: ReactNode;
  height?: number;
  className?: string;
  stickyClassName?: string;
}

export default function StickyWrapper({
  children,
  height = 200,
  className = "",
  stickyClassName = "",
}: StickyWrapperProps) {
  return (
    <section
      className={`relative w-full ${className}`}
      style={{
        height: `${height}vh`,
      }}
    >
      <div
        className={`sticky top-0 h-screen overflow-hidden ${stickyClassName}`}
      >
        {children}
      </div>
    </section>
  );
}
