import Section from "@/components/site/Section";
import ServicesPreview from "@/components/site/ServicesPreview";
import ValueProps from "@/components/site/ValueProps";
import VideoSection from "@/components/site/VideoSection";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles } from "lucide-react";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-bg-vibrant relative py-20 md:py-28 lg:py-36">
        <div className="container relative z-10">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-8 animate-fade-in">
              <div
                className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold"
                style={{
                  background: "oklch(0.68 0.2 48 / 0.15)",
                  color: "oklch(0.42 0.16 48)",
                  border: "1px solid oklch(0.68 0.2 48 / 0.35)",
                }}
              >
                <Sparkles className="h-4 w-4" />
                Fast &amp; Reliable Courier Service
              </div>
              <h1 className="font-display text-gray-900 leading-tight">
                Your Trusted Partner for{" "}
                <span className="gradient-text">Worldwide Shipping</span>
              </h1>
              <p className="text-xl text-gray-700 max-w-xl leading-relaxed">
                KK Euro Express delivers your packages worldwide with express
                priority delivery and international freight solutions. From the
                UK, USA, Canada, Italy to destinations around the globe, we've
                got you covered.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  data-ocid="hero.primary_button"
                  className="btn-gradient-orange text-white font-bold text-base px-8 py-3 rounded-xl shadow-glow hover:shadow-glow transition-all"
                >
                  <Link to="/contact">
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  data-ocid="hero.secondary_button"
                  className="border-gray-400 text-gray-900 bg-white/80 hover:bg-white font-semibold rounded-xl"
                >
                  <Link to="/services">View Services</Link>
                </Button>
              </div>

              {/* Quick stats */}
              <div className="flex flex-wrap gap-8 pt-4">
                <div>
                  <div className="text-2xl font-display font-bold gradient-text-gold">
                    10+
                  </div>
                  <div className="text-sm text-gray-700 font-medium">
                    Years Experience
                  </div>
                </div>
                <div>
                  <div
                    className="text-2xl font-display font-bold"
                    style={{ color: "oklch(0.38 0.15 195)" }}
                  >
                    50K+
                  </div>
                  <div className="text-sm text-gray-700 font-medium">
                    Deliveries Monthly
                  </div>
                </div>
                <div>
                  <div
                    className="text-2xl font-display font-bold"
                    style={{ color: "oklch(0.38 0.15 130)" }}
                  >
                    99%
                  </div>
                  <div className="text-sm text-gray-700 font-medium">
                    On-Time Delivery
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div
                className="absolute -inset-4 rounded-2xl opacity-40"
                style={{
                  background:
                    "radial-gradient(ellipse, oklch(0.68 0.2 48 / 0.2), transparent 70%)",
                }}
              />
              <svg
                viewBox="0 0 800 450"
                width="100%"
                height="auto"
                className="relative w-full h-auto rounded-2xl shadow-soft"
                xmlns="http://www.w3.org/2000/svg"
                aria-label="KK Euro Express animated delivery truck"
                role="img"
              >
                <defs>
                  {/* Sky gradient */}
                  <linearGradient
                    id="skyGrad"
                    x1="0%"
                    y1="0%"
                    x2="0%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#1e293b" />
                    <stop offset="100%" stopColor="#334155" />
                  </linearGradient>
                  {/* Road gradient */}
                  <linearGradient
                    id="roadGrad"
                    x1="0%"
                    y1="0%"
                    x2="0%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#374151" />
                    <stop offset="100%" stopColor="#1f2937" />
                  </linearGradient>
                  {/* Truck body gradient */}
                  <linearGradient
                    id="truckBodyGrad"
                    x1="0%"
                    y1="0%"
                    x2="0%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#f97316" />
                    <stop offset="100%" stopColor="#ea580c" />
                  </linearGradient>
                  {/* Cab gradient */}
                  <linearGradient
                    id="cabGrad"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#0d9488" />
                    <stop offset="100%" stopColor="#0f766e" />
                  </linearGradient>
                  {/* Wheel gradient */}
                  <radialGradient id="wheelGrad" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#6b7280" />
                    <stop offset="60%" stopColor="#374151" />
                    <stop offset="100%" stopColor="#111827" />
                  </radialGradient>
                  {/* Sun glow */}
                  <radialGradient id="sunGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#fde68a" stopOpacity="1" />
                    <stop offset="70%" stopColor="#fbbf24" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
                  </radialGradient>
                  {/* Road dashes clip */}
                  <clipPath id="roadClip">
                    <rect x="0" y="310" width="800" height="140" />
                  </clipPath>
                  <style>{`
                    @keyframes truckDrive {
                      0%   { transform: translateX(-420px); }
                      100% { transform: translateX(850px); }
                    }
                    @keyframes wheelSpin {
                      from { transform-origin: center; transform: rotate(0deg); }
                      to   { transform-origin: center; transform: rotate(360deg); }
                    }
                    @keyframes cloudDrift1 {
                      0%   { transform: translateX(0px); }
                      100% { transform: translateX(-900px); }
                    }
                    @keyframes cloudDrift2 {
                      0%   { transform: translateX(200px); }
                      100% { transform: translateX(-700px); }
                    }
                    @keyframes cloudDrift3 {
                      0%   { transform: translateX(500px); }
                      100% { transform: translateX(-400px); }
                    }
                    @keyframes dashMove {
                      0%   { transform: translateX(0px); }
                      100% { transform: translateX(-80px); }
                    }
                    @keyframes starTwinkle {
                      0%, 100% { opacity: 0.3; }
                      50%       { opacity: 1; }
                    }
                    @keyframes exhaustPuff {
                      0%   { opacity: 0.7; transform: translateX(0) scale(1); }
                      100% { opacity: 0;   transform: translateX(30px) scale(2); }
                    }
                    @keyframes truckBounce {
                      0%, 100% { transform: translateY(0px); }
                      50%       { transform: translateY(-2px); }
                    }
                    @keyframes truckDriveFlipped {
                      0%   { transform: scaleX(-1) translateX(420px); }
                      100% { transform: scaleX(-1) translateX(-850px); }
                    }
                    .truck-group {
                      animation: truckDriveFlipped 4s linear infinite;
                      transform-box: fill-box;
                      transform-origin: center center;
                    }
                    .wheel-front {
                      animation: wheelSpin 0.6s linear infinite;
                      transform-box: fill-box;
                    }
                    .wheel-rear {
                      animation: wheelSpin 0.6s linear infinite;
                      transform-box: fill-box;
                    }
                    .cloud-1 { animation: cloudDrift1 18s linear infinite; }
                    .cloud-2 { animation: cloudDrift2 24s linear infinite; }
                    .cloud-3 { animation: cloudDrift3 30s linear infinite; }
                    .road-dash { animation: dashMove 0.5s linear infinite; }
                    .exhaust-1 { animation: exhaustPuff 0.8s ease-out infinite; }
                    .exhaust-2 { animation: exhaustPuff 0.8s ease-out 0.3s infinite; }
                    .exhaust-3 { animation: exhaustPuff 0.8s ease-out 0.55s infinite; }
                    .star-1 { animation: starTwinkle 2.1s ease-in-out infinite; }
                    .star-2 { animation: starTwinkle 1.7s ease-in-out 0.4s infinite; }
                    .star-3 { animation: starTwinkle 2.5s ease-in-out 0.9s infinite; }
                    .star-4 { animation: starTwinkle 1.9s ease-in-out 1.2s infinite; }
                  `}</style>
                </defs>

                {/* === SKY BACKGROUND === */}
                <rect width="800" height="450" fill="url(#skyGrad)" />

                {/* Stars */}
                <circle
                  cx="60"
                  cy="40"
                  r="1.5"
                  fill="#e2e8f0"
                  className="star-1"
                />
                <circle
                  cx="150"
                  cy="25"
                  r="1"
                  fill="#e2e8f0"
                  className="star-2"
                />
                <circle
                  cx="240"
                  cy="55"
                  r="1.5"
                  fill="#e2e8f0"
                  className="star-3"
                />
                <circle
                  cx="380"
                  cy="20"
                  r="1"
                  fill="#e2e8f0"
                  className="star-4"
                />
                <circle
                  cx="520"
                  cy="45"
                  r="1.5"
                  fill="#e2e8f0"
                  className="star-1"
                />
                <circle
                  cx="640"
                  cy="30"
                  r="1"
                  fill="#e2e8f0"
                  className="star-2"
                />
                <circle
                  cx="730"
                  cy="60"
                  r="1.5"
                  fill="#e2e8f0"
                  className="star-3"
                />
                <circle
                  cx="310"
                  cy="70"
                  r="1"
                  fill="#e2e8f0"
                  className="star-4"
                />

                {/* Sun / Moon glow */}
                <circle cx="680" cy="70" r="50" fill="url(#sunGlow)" />
                <circle cx="680" cy="70" r="26" fill="#fde68a" />
                <circle cx="680" cy="70" r="20" fill="#fef3c7" />

                {/* === CLOUDS === */}
                {/* Cloud group 1 */}
                <g className="cloud-1">
                  <ellipse
                    cx="120"
                    cy="100"
                    rx="55"
                    ry="22"
                    fill="white"
                    fillOpacity="0.18"
                  />
                  <ellipse
                    cx="150"
                    cy="88"
                    rx="38"
                    ry="18"
                    fill="white"
                    fillOpacity="0.22"
                  />
                  <ellipse
                    cx="90"
                    cy="92"
                    rx="30"
                    ry="16"
                    fill="white"
                    fillOpacity="0.18"
                  />
                  <ellipse
                    cx="920"
                    cy="140"
                    rx="65"
                    ry="25"
                    fill="white"
                    fillOpacity="0.15"
                  />
                  <ellipse
                    cx="960"
                    cy="125"
                    rx="45"
                    ry="20"
                    fill="white"
                    fillOpacity="0.18"
                  />
                </g>
                {/* Cloud group 2 */}
                <g className="cloud-2">
                  <ellipse
                    cx="430"
                    cy="75"
                    rx="60"
                    ry="24"
                    fill="white"
                    fillOpacity="0.15"
                  />
                  <ellipse
                    cx="465"
                    cy="62"
                    rx="40"
                    ry="20"
                    fill="white"
                    fillOpacity="0.18"
                  />
                  <ellipse
                    cx="400"
                    cy="68"
                    rx="35"
                    ry="17"
                    fill="white"
                    fillOpacity="0.15"
                  />
                </g>
                {/* Cloud group 3 */}
                <g className="cloud-3">
                  <ellipse
                    cx="200"
                    cy="115"
                    rx="50"
                    ry="20"
                    fill="white"
                    fillOpacity="0.12"
                  />
                  <ellipse
                    cx="230"
                    cy="103"
                    rx="35"
                    ry="16"
                    fill="white"
                    fillOpacity="0.15"
                  />
                </g>

                {/* === HORIZON GLOW === */}
                <rect
                  x="0"
                  y="270"
                  width="800"
                  height="45"
                  fill="#f97316"
                  fillOpacity="0.08"
                />
                <rect
                  x="0"
                  y="290"
                  width="800"
                  height="25"
                  fill="#f97316"
                  fillOpacity="0.05"
                />

                {/* === ROAD === */}
                <rect
                  x="0"
                  y="315"
                  width="800"
                  height="135"
                  fill="url(#roadGrad)"
                />
                {/* Road shoulder line top */}
                <rect
                  x="0"
                  y="315"
                  width="800"
                  height="4"
                  fill="#f97316"
                  fillOpacity="0.5"
                />
                {/* Road texture overlay */}
                <rect
                  x="0"
                  y="315"
                  width="800"
                  height="135"
                  fill="#1f2937"
                  fillOpacity="0.3"
                />

                {/* Center dashes — animated */}
                <g clipPath="url(#roadClip)">
                  <g className="road-dash">
                    {[
                      0, 80, 160, 240, 320, 400, 480, 560, 640, 720, 800, 880,
                    ].map((x) => (
                      <rect
                        key={`dash-${x}`}
                        x={x}
                        y="378"
                        width="50"
                        height="8"
                        rx="4"
                        fill="white"
                        fillOpacity="0.55"
                      />
                    ))}
                  </g>
                </g>

                {/* Road bottom edge highlight */}
                <rect
                  x="0"
                  y="446"
                  width="800"
                  height="4"
                  fill="#f97316"
                  fillOpacity="0.3"
                />

                {/* === KK EURO EXPRESS BRANDING SIGN (roadside) === */}
                <g>
                  <rect
                    x="20"
                    y="225"
                    width="140"
                    height="55"
                    rx="6"
                    fill="#0d9488"
                    fillOpacity="0.9"
                  />
                  <rect
                    x="20"
                    y="225"
                    width="140"
                    height="55"
                    rx="6"
                    fill="none"
                    stroke="#f97316"
                    strokeWidth="2.5"
                  />
                  <text
                    x="90"
                    y="248"
                    textAnchor="middle"
                    fontSize="10"
                    fontWeight="bold"
                    fill="white"
                    fontFamily="sans-serif"
                  >
                    KK EURO EXPRESS
                  </text>
                  <text
                    x="90"
                    y="263"
                    textAnchor="middle"
                    fontSize="9"
                    fill="#fde68a"
                    fontFamily="sans-serif"
                  >
                    COURIER SERVICE
                  </text>
                  <text
                    x="90"
                    y="275"
                    textAnchor="middle"
                    fontSize="8"
                    fill="white"
                    fontFamily="sans-serif"
                  >
                    Worldwide Shipping
                  </text>
                  {/* Sign post */}
                  <rect x="85" y="280" width="10" height="35" fill="#475569" />
                </g>

                {/* === TRUCK GROUP (animates across) === */}
                <g className="truck-group">
                  {/* Exhaust puffs (come from rear/right side of cargo box after flip) */}
                  <circle
                    cx="510"
                    cy="272"
                    r="8"
                    fill="#94a3b8"
                    fillOpacity="0.5"
                    className="exhaust-1"
                  />
                  <circle
                    cx="522"
                    cy="265"
                    r="6"
                    fill="#94a3b8"
                    fillOpacity="0.4"
                    className="exhaust-2"
                  />
                  <circle
                    cx="532"
                    cy="260"
                    r="5"
                    fill="#94a3b8"
                    fillOpacity="0.3"
                    className="exhaust-3"
                  />

                  {/* Truck shadow */}
                  <ellipse
                    cx="390"
                    cy="320"
                    rx="195"
                    ry="10"
                    fill="#000000"
                    fillOpacity="0.25"
                  />

                  {/* ---- CARGO BOX ---- */}
                  {/* Main body */}
                  <rect
                    x="200"
                    y="230"
                    width="300"
                    height="90"
                    rx="4"
                    fill="url(#truckBodyGrad)"
                  />
                  {/* Body top trim */}
                  <rect
                    x="200"
                    y="230"
                    width="300"
                    height="10"
                    rx="4"
                    fill="#fb923c"
                  />
                  {/* Body bottom trim */}
                  <rect
                    x="200"
                    y="310"
                    width="300"
                    height="10"
                    fill="#c2410c"
                  />
                  {/* Body panel lines */}
                  <line
                    x1="280"
                    y1="235"
                    x2="280"
                    y2="315"
                    stroke="#ea580c"
                    strokeWidth="1.5"
                    strokeOpacity="0.5"
                  />
                  <line
                    x1="360"
                    y1="235"
                    x2="360"
                    y2="315"
                    stroke="#ea580c"
                    strokeWidth="1.5"
                    strokeOpacity="0.5"
                  />
                  <line
                    x1="440"
                    y1="235"
                    x2="440"
                    y2="315"
                    stroke="#ea580c"
                    strokeWidth="1.5"
                    strokeOpacity="0.5"
                  />
                  {/* KK logo on cargo box */}
                  <rect
                    x="290"
                    y="252"
                    width="130"
                    height="46"
                    rx="5"
                    fill="white"
                    fillOpacity="0.2"
                  />
                  <text
                    x="355"
                    y="272"
                    textAnchor="middle"
                    fontSize="13"
                    fontWeight="900"
                    fill="white"
                    fontFamily="sans-serif"
                    letterSpacing="1"
                  >
                    KK EURO
                  </text>
                  <text
                    x="355"
                    y="287"
                    textAnchor="middle"
                    fontSize="11"
                    fontWeight="700"
                    fill="#fde68a"
                    fontFamily="sans-serif"
                    letterSpacing="0.5"
                  >
                    EXPRESS
                  </text>
                  <text
                    x="355"
                    y="299"
                    textAnchor="middle"
                    fontSize="8"
                    fill="white"
                    fontFamily="sans-serif"
                  >
                    WORLDWIDE SHIPPING
                  </text>
                  {/* Rear door handle */}
                  <rect
                    x="490"
                    y="270"
                    width="8"
                    height="20"
                    rx="3"
                    fill="#c2410c"
                  />
                  <circle cx="494" cy="280" r="4" fill="#9a3412" />

                  {/* ---- CAB ---- */}
                  {/* Cab body */}
                  <path
                    d="M160 260 L160 320 L210 320 L210 230 L190 230 Q165 230 160 260 Z"
                    fill="url(#cabGrad)"
                  />
                  {/* Cab front curved face */}
                  <path
                    d="M160 260 Q155 290 158 320 L170 320 L170 260 Z"
                    fill="#0f766e"
                  />
                  {/* Windshield */}
                  <path
                    d="M168 242 L200 236 L200 270 L165 274 Z"
                    fill="#7dd3fc"
                    fillOpacity="0.75"
                  />
                  <path
                    d="M168 242 L200 236 L200 270 L165 274 Z"
                    fill="none"
                    stroke="#0d9488"
                    strokeWidth="2"
                  />
                  {/* Windshield glare */}
                  <line
                    x1="172"
                    y1="245"
                    x2="183"
                    y2="242"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeOpacity="0.6"
                  />
                  {/* Side window */}
                  <rect
                    x="162"
                    y="250"
                    width="14"
                    height="20"
                    rx="3"
                    fill="#7dd3fc"
                    fillOpacity="0.6"
                  />
                  {/* Headlight */}
                  <rect
                    x="156"
                    y="290"
                    width="10"
                    height="14"
                    rx="3"
                    fill="#fef3c7"
                  />
                  <rect
                    x="156"
                    y="290"
                    width="10"
                    height="14"
                    rx="3"
                    fill="#fbbf24"
                    fillOpacity="0.5"
                  />
                  {/* Headlight beam */}
                  <polygon
                    points="166,293 200,285 200,300 166,302"
                    fill="#fef3c7"
                    fillOpacity="0.08"
                  />
                  {/* Cab bumper */}
                  <rect
                    x="155"
                    y="313"
                    width="55"
                    height="8"
                    rx="3"
                    fill="#0f766e"
                  />
                  {/* Front grille */}
                  <rect
                    x="155"
                    y="296"
                    width="8"
                    height="15"
                    rx="2"
                    fill="#0a5752"
                  />
                  <line
                    x1="157"
                    y1="299"
                    x2="161"
                    y2="299"
                    stroke="#14b8a6"
                    strokeWidth="1"
                  />
                  <line
                    x1="157"
                    y1="303"
                    x2="161"
                    y2="303"
                    stroke="#14b8a6"
                    strokeWidth="1"
                  />
                  <line
                    x1="157"
                    y1="307"
                    x2="161"
                    y2="307"
                    stroke="#14b8a6"
                    strokeWidth="1"
                  />
                  {/* Side mirror */}
                  <rect
                    x="150"
                    y="253"
                    width="12"
                    height="8"
                    rx="2"
                    fill="#0d9488"
                    stroke="#0f766e"
                    strokeWidth="1"
                  />

                  {/* ---- WHEELS ---- */}
                  {/* Rear wheel (left, under cargo box) */}
                  <g
                    className="wheel-rear"
                    style={{ transformOrigin: "245px 320px" }}
                  >
                    <circle cx="245" cy="320" r="24" fill="url(#wheelGrad)" />
                    <circle cx="245" cy="320" r="18" fill="#1f2937" />
                    <circle cx="245" cy="320" r="7" fill="#4b5563" />
                    {/* Spokes */}
                    <line
                      x1="245"
                      y1="296"
                      x2="245"
                      y2="303"
                      stroke="#6b7280"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    <line
                      x1="245"
                      y1="337"
                      x2="245"
                      y2="344"
                      stroke="#6b7280"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    <line
                      x1="221"
                      y1="320"
                      x2="228"
                      y2="320"
                      stroke="#6b7280"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    <line
                      x1="262"
                      y1="320"
                      x2="269"
                      y2="320"
                      stroke="#6b7280"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    <line
                      x1="228"
                      y1="303"
                      x2="233"
                      y2="308"
                      stroke="#6b7280"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    <line
                      x1="257"
                      y1="332"
                      x2="262"
                      y2="337"
                      stroke="#6b7280"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    <line
                      x1="228"
                      y1="337"
                      x2="233"
                      y2="332"
                      stroke="#6b7280"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    <line
                      x1="257"
                      y1="308"
                      x2="262"
                      y2="303"
                      stroke="#6b7280"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    {/* Tire tread */}
                    <circle
                      cx="245"
                      cy="320"
                      r="24"
                      fill="none"
                      stroke="#111827"
                      strokeWidth="5"
                    />
                    <circle
                      cx="245"
                      cy="320"
                      r="24"
                      fill="none"
                      stroke="#374151"
                      strokeWidth="2"
                      strokeDasharray="6 6"
                    />
                  </g>

                  {/* Rear wheel (right, under cargo box) */}
                  <g
                    className="wheel-rear"
                    style={{ transformOrigin: "455px 320px" }}
                  >
                    <circle cx="455" cy="320" r="24" fill="url(#wheelGrad)" />
                    <circle cx="455" cy="320" r="18" fill="#1f2937" />
                    <circle cx="455" cy="320" r="7" fill="#4b5563" />
                    <line
                      x1="455"
                      y1="296"
                      x2="455"
                      y2="303"
                      stroke="#6b7280"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    <line
                      x1="455"
                      y1="337"
                      x2="455"
                      y2="344"
                      stroke="#6b7280"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    <line
                      x1="431"
                      y1="320"
                      x2="438"
                      y2="320"
                      stroke="#6b7280"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    <line
                      x1="472"
                      y1="320"
                      x2="479"
                      y2="320"
                      stroke="#6b7280"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    <line
                      x1="438"
                      y1="303"
                      x2="443"
                      y2="308"
                      stroke="#6b7280"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    <line
                      x1="467"
                      y1="332"
                      x2="472"
                      y2="337"
                      stroke="#6b7280"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    <line
                      x1="438"
                      y1="337"
                      x2="443"
                      y2="332"
                      stroke="#6b7280"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    <line
                      x1="467"
                      y1="308"
                      x2="472"
                      y2="303"
                      stroke="#6b7280"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    <circle
                      cx="455"
                      cy="320"
                      r="24"
                      fill="none"
                      stroke="#111827"
                      strokeWidth="5"
                    />
                    <circle
                      cx="455"
                      cy="320"
                      r="24"
                      fill="none"
                      stroke="#374151"
                      strokeWidth="2"
                      strokeDasharray="6 6"
                    />
                  </g>

                  {/* Front wheel (under cab) */}
                  <g
                    className="wheel-front"
                    style={{ transformOrigin: "183px 320px" }}
                  >
                    <circle cx="183" cy="320" r="22" fill="url(#wheelGrad)" />
                    <circle cx="183" cy="320" r="16" fill="#1f2937" />
                    <circle cx="183" cy="320" r="6" fill="#4b5563" />
                    <line
                      x1="183"
                      y1="298"
                      x2="183"
                      y2="304"
                      stroke="#6b7280"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    <line
                      x1="183"
                      y1="336"
                      x2="183"
                      y2="342"
                      stroke="#6b7280"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    <line
                      x1="161"
                      y1="320"
                      x2="167"
                      y2="320"
                      stroke="#6b7280"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    <line
                      x1="199"
                      y1="320"
                      x2="205"
                      y2="320"
                      stroke="#6b7280"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    <line
                      x1="168"
                      y1="305"
                      x2="172"
                      y2="309"
                      stroke="#6b7280"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    <line
                      x1="194"
                      y1="331"
                      x2="198"
                      y2="335"
                      stroke="#6b7280"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    <line
                      x1="168"
                      y1="335"
                      x2="172"
                      y2="331"
                      stroke="#6b7280"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    <line
                      x1="194"
                      y1="309"
                      x2="198"
                      y2="305"
                      stroke="#6b7280"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    <circle
                      cx="183"
                      cy="320"
                      r="22"
                      fill="none"
                      stroke="#111827"
                      strokeWidth="4"
                    />
                    <circle
                      cx="183"
                      cy="320"
                      r="22"
                      fill="none"
                      stroke="#374151"
                      strokeWidth="2"
                      strokeDasharray="5 5"
                    />
                  </g>

                  {/* Wheel arch covers */}
                  <path d="M160 296 Q183 270 206 296" fill="#0f766e" />
                  <path d="M219 296 Q245 268 271 296" fill="#ea580c" />
                  <path d="M429 296 Q455 268 481 296" fill="#ea580c" />

                  {/* Undercarriage */}
                  <rect
                    x="160"
                    y="318"
                    width="340"
                    height="6"
                    rx="2"
                    fill="#1e293b"
                  />

                  {/* Speed lines */}
                  <line
                    x1="530"
                    y1="270"
                    x2="560"
                    y2="270"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeOpacity="0.25"
                  />
                  <line
                    x1="535"
                    y1="280"
                    x2="570"
                    y2="280"
                    stroke="white"
                    strokeWidth="1"
                    strokeOpacity="0.18"
                  />
                  <line
                    x1="532"
                    y1="290"
                    x2="565"
                    y2="290"
                    stroke="white"
                    strokeWidth="1"
                    strokeOpacity="0.15"
                  />
                </g>

                {/* === ROAD MARKINGS (bottom layer, not moving) === */}
                {/* Pavement texture dots */}
                {[50, 130, 210, 290, 370, 450, 530, 610, 690, 770].map((x) => (
                  <circle
                    key={`dot-${x}`}
                    cx={x}
                    cy={400}
                    r="1.5"
                    fill="white"
                    fillOpacity="0.07"
                  />
                ))}

                {/* === OVERLAY BRANDING TEXT === */}
                <text
                  x="400"
                  y="440"
                  textAnchor="middle"
                  fontSize="11"
                  fill="#f97316"
                  fillOpacity="0.7"
                  fontFamily="sans-serif"
                  fontWeight="600"
                  letterSpacing="2"
                >
                  KK EURO EXPRESS · WORLDWIDE SHIPPING · PUNJAB, INDIA
                </text>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <Section>
        <div className="mb-12 text-center">
          <div
            className="inline-block mb-3 px-4 py-1.5 rounded-full text-sm font-semibold"
            style={{
              background: "oklch(0.38 0.18 270 / 0.1)",
              color: "oklch(0.32 0.18 270)",
            }}
          >
            Why Choose Us
          </div>
          <h2 className="mb-4 font-display">
            Why Choose{" "}
            <span className="gradient-text-teal">KK Euro Express?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We combine cutting-edge technology with personalized service to
            deliver exceptional results for every shipment.
          </p>
        </div>
        <ValueProps />
      </Section>

      {/* Video Section */}
      <VideoSection />

      {/* Services Preview */}
      <Section className="bg-muted/30">
        <div className="mb-12 text-center">
          <div
            className="inline-block mb-3 px-4 py-1.5 rounded-full text-sm font-semibold"
            style={{
              background: "oklch(0.55 0.15 195 / 0.1)",
              color: "oklch(0.35 0.16 195)",
            }}
          >
            Our Offerings
          </div>
          <h2 className="mb-4 font-display">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive courier solutions tailored to your shipping needs.
          </p>
        </div>
        <ServicesPreview />
      </Section>

      {/* CTA Section */}
      <Section>
        <div className="cta-gradient rounded-3xl p-12 md:p-16 text-center relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
              backgroundSize: "32px 32px",
            }}
          />
          <div className="relative z-10">
            <div className="inline-block mb-4 px-4 py-1.5 rounded-full text-sm font-semibold bg-white/15 text-white">
              Ready to Ship?
            </div>
            <h2 className="mb-4 font-display text-white">
              Ready to Ship with Us?
            </h2>
            <p className="mb-8 text-lg text-white/85 max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust KK Euro Express
              for their delivery needs. Get a quote today and experience the
              difference.
            </p>
            <Button
              asChild
              size="lg"
              data-ocid="cta.primary_button"
              className="bg-white text-violet font-bold text-base px-8 hover:bg-white/90 rounded-xl shadow-lg"
              style={{ color: "oklch(0.28 0.12 270)" }}
            >
              <Link to="/contact">
                Contact Us Now <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
