import CoverageSection from "@/components/site/CoverageSection";
import Section from "@/components/site/Section";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Target, TrendingUp, Users } from "lucide-react";

const values = [
  {
    icon: <Award className="h-8 w-8" />,
    title: "Excellence",
    description:
      "We strive for excellence in every delivery, ensuring the highest standards of service quality.",
    chipClass: "icon-chip-orange",
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Customer Focus",
    description:
      "Our customers are at the heart of everything we do. Your satisfaction is our success.",
    chipClass: "icon-chip-teal",
  },
  {
    icon: <Target className="h-8 w-8" />,
    title: "Reliability",
    description:
      "Dependable service you can count on, with on-time delivery and transparent communication.",
    chipClass: "icon-chip-violet",
  },
  {
    icon: <TrendingUp className="h-8 w-8" />,
    title: "Innovation",
    description:
      "Continuously improving our services with cutting-edge technology and efficient processes.",
    chipClass: "icon-chip-gold",
  },
];

const statColors = [
  { gradient: "gradient-text", label: "Years Experience" },
  { gradient: "gradient-text-teal", label: "Deliveries Monthly" },
  { gradient: "gradient-text-gold", label: "Cities Covered" },
  { gradient: "gradient-text", label: "On-Time Delivery" },
];

const statValues = ["10+", "50K+", "25+", "99%"];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-bg-vibrant relative py-20 md:py-28">
        <div className="container relative z-10 text-center max-w-3xl mx-auto">
          <div
            className="inline-block mb-4 px-4 py-1.5 rounded-full text-sm font-semibold"
            style={{
              background: "oklch(0.55 0.15 195 / 0.15)",
              color: "oklch(0.3 0.14 195)",
              border: "1px solid oklch(0.55 0.15 195 / 0.35)",
            }}
          >
            Our Story
          </div>
          <h1 className="mb-6 font-display text-gray-900">
            About <span className="gradient-text">KK Euro Express</span>
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Your trusted partner for fast, reliable, and secure courier services
            with worldwide shipping to the UK, USA, Canada, Italy, and
            destinations around the globe.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <h2 className="mb-6 font-display">
              Who <span className="gradient-text-teal">We Are</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                KK Euro Express is a leading courier and logistics company
                specializing in fast, reliable deliveries worldwide. With years
                of experience in the industry, we've built a reputation for
                excellence, security, and customer satisfaction.
              </p>
              <p>
                Our extensive network provides worldwide shipping solutions,
                reaching key international destinations including the UK, USA,
                Canada, Italy, and more, enabling us to provide seamless
                shipping solutions for businesses and individuals alike.
              </p>
              <p>
                We combine traditional courier expertise with modern technology
                to offer real-time tracking, flexible delivery options, and
                exceptional customer service.
              </p>
            </div>
          </div>
          <div className="relative">
            <div
              className="absolute -inset-4 rounded-2xl opacity-30"
              style={{
                background:
                  "radial-gradient(ellipse, oklch(0.55 0.15 195 / 0.3), transparent 70%)",
              }}
            />
            <img
              src="/assets/generated/kk-euro-express-hero.dim_1600x900.png"
              alt="KK Euro Express Operations"
              className="relative w-full h-auto rounded-2xl shadow-soft"
            />
          </div>
        </div>
      </Section>

      {/* Mission & Values */}
      <Section className="bg-muted/30">
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-display">
            Our Mission &amp; <span className="gradient-text">Values</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We're committed to delivering excellence through reliability,
            innovation, and customer-focused service.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <Card
              key={value.title}
              className="text-center hover:shadow-soft transition-all hover:-translate-y-0.5"
            >
              <CardContent className="pt-6">
                <div
                  className={`mb-4 inline-flex justify-center items-center w-16 h-16 rounded-2xl ${value.chipClass}`}
                >
                  {value.icon}
                </div>
                <h3 className="mb-2 text-lg font-display font-bold">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Coverage */}
      <Section>
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-display">
            Our <span className="gradient-text-teal">Coverage</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Worldwide shipping network reaching international destinations
            including the UK, USA, Canada, Italy, and more.
          </p>
        </div>
        <CoverageSection />
      </Section>

      {/* Stats */}
      <section className="cta-gradient py-16">
        <div className="container">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 text-center">
            {statValues.map((val, i) => (
              <div key={val} className="space-y-2">
                <div
                  className={`text-5xl font-display font-bold ${statColors[i].gradient}`}
                >
                  {val}
                </div>
                <div className="text-white/90 font-medium">
                  {statColors[i].label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
