import { Mail, Phone } from "lucide-react";

export default function ContactTopBar() {
  return (
    <div
      className="w-full text-white text-xs sm:text-sm py-2 px-4"
      style={{
        background:
          "linear-gradient(135deg, oklch(0.22 0.1 250) 0%, oklch(0.28 0.12 270) 40%, oklch(0.35 0.15 35) 100%)",
      }}
    >
      <div className="container flex flex-wrap items-center justify-center gap-x-5 gap-y-1">
        <a
          href="tel:+917973673529"
          className="flex items-center gap-1.5 font-semibold hover:opacity-80 transition-opacity whitespace-nowrap"
          style={{ color: "oklch(0.88 0.18 80)" }}
        >
          <Phone className="h-3.5 w-3.5" />
          79736-73529
        </a>
        <span className="text-white/30 hidden sm:inline">|</span>
        <a
          href="tel:+917508731303"
          className="flex items-center gap-1.5 font-semibold hover:opacity-80 transition-opacity whitespace-nowrap"
          style={{ color: "oklch(0.82 0.15 195)" }}
        >
          <Phone className="h-3.5 w-3.5" />
          75087-31303
        </a>
        <span className="text-white/30 hidden sm:inline">|</span>
        <a
          href="tel:+918283856248"
          className="flex items-center gap-1.5 font-semibold hover:opacity-80 transition-opacity whitespace-nowrap"
          style={{ color: "oklch(0.82 0.18 130)" }}
        >
          <Phone className="h-3.5 w-3.5" />
          82838-56248
        </a>
        <span className="text-white/30 hidden sm:inline">|</span>
        <a
          href="mailto:eurobanga@gmail.com"
          className="flex items-center gap-1.5 font-semibold hover:opacity-80 transition-opacity whitespace-nowrap"
          style={{ color: "oklch(0.85 0.14 48)" }}
        >
          <Mail className="h-3.5 w-3.5" />
          eurobanga@gmail.com
        </a>
      </div>
    </div>
  );
}
