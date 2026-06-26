export default function StickyGift() {
  return (
    <div
      className="
        fixed
        bottom-8
        right-8
        z-50
        pointer-events-none
        select-none
      "
    >
      <div
        className="
          h-24
          w-24
          rounded-2xl
          border
          border-[#c9a227]/40
          bg-gradient-to-b
          from-[#8b1538]
          to-[#661126]
          shadow-2xl
        "
      >
        {/* Ribbon dọc */}
        <div
          className="
            absolute
            left-1/2
            top-0
            h-full
            w-3
            -translate-x-1/2
            bg-[#d4af37]
          "
        />

        {/* Ribbon ngang */}
        <div
          className="
            absolute
            top-1/2
            left-0
            h-3
            w-full
            -translate-y-1/2
            bg-[#d4af37]
          "
        />

        {/* Nắp hộp */}
        <div
          className="
            absolute
            -top-2
            left-1/2
            h-5
            w-[110%]
            -translate-x-1/2
            rounded-md
            border
            border-[#d4af37]/40
            bg-[#8b1538]
          "
        />
      </div>
    </div>
  );
}
