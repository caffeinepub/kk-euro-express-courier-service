import HowItWorks from "@/components/site/HowItWorks";
import MarketingCard from "@/components/site/MarketingCard";
import Section from "@/components/site/Section";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Bus, Plane, Truck, Wind } from "lucide-react";

const services = [
  {
    icon: <Plane className="h-8 w-8" />,
    title: "International Courier",
    description:
      "Fast and reliable international shipping services across borders. We handle customs clearance and documentation for seamless global delivery.",
  },
  {
    icon: <Truck className="h-8 w-8" />,
    title: "Domestic Courier",
    description:
      "Swift domestic delivery services within the country. Multiple service speeds available to ensure your packages arrive on time.",
  },
  {
    icon: <Wind className="h-8 w-8" />,
    title: "Vacuum Service",
    description:
      "Specialized vacuum packaging and handling services for delicate items. Perfect for protecting sensitive goods during transit.",
  },
  {
    icon: <Bus className="h-8 w-8" />,
    title: "Indo-Canadian Bus Service",
    description:
      "Convenient bus transportation service connecting Indo-Canadian communities. Reliable passenger and parcel transport with scheduled routes.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-bg-vibrant relative py-20 md:py-28">
        <div className="container relative z-10 text-center max-w-3xl mx-auto">
          <div
            className="inline-block mb-4 px-4 py-1.5 rounded-full text-sm font-semibold"
            style={{
              background: "oklch(0.68 0.2 48 / 0.15)",
              color: "oklch(0.45 0.18 35)",
              border: "1px solid oklch(0.68 0.2 48 / 0.35)",
            }}
          >
            What We Offer
          </div>
          <h1 className="mb-6 font-display text-gray-900">
            Our <span className="gradient-text">Services</span>
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Comprehensive courier and logistics solutions designed to meet all
            your shipping needs. From international delivery to specialized
            services, we deliver excellence every time.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <Section>
        <div className="grid gap-6 sm:grid-cols-2">
          {services.map((service, i) => (
            <MarketingCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              colorIndex={i}
            />
          ))}
        </div>
      </Section>

      {/* How It Works */}
      <Section className="bg-muted/30">
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-display">
            How It <span className="gradient-text-teal">Works</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our streamlined process ensures your packages are delivered quickly
            and safely.
          </p>
        </div>
        <HowItWorks />
      </Section>

      {/* Additional Info */}
      <Section>
        <div className="rounded-2xl border bg-card p-8 md:p-12">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="mb-4 text-2xl font-display font-bold">
                <span className="gradient-text">Custom</span> Solutions
              </h3>
              <p className="text-muted-foreground mb-4">
                Need something specific? We offer customized shipping solutions
                tailored to your unique requirements.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent inline-block" />
                  Dedicated account management
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent inline-block" />
                  Volume discounts available
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent inline-block" />
                  Flexible pickup schedules
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent inline-block" />
                  Custom packaging solutions
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-2xl font-display font-bold">
                <span className="gradient-text-teal">Insurance</span> &amp;
                Tracking
              </h3>
              <p className="text-muted-foreground mb-4">
                Every shipment is protected with comprehensive insurance
                coverage and real-time tracking.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span
                    className="w-2 h-2 rounded-full inline-block"
                    style={{ background: "oklch(0.55 0.15 195)" }}
                  />
                  Full insurance coverage included
                </li>
                <li className="flex items-center gap-2">
                  <span
                    className="w-2 h-2 rounded-full inline-block"
                    style={{ background: "oklch(0.55 0.15 195)" }}
                  />
                  Real-time GPS tracking
                </li>
                <li className="flex items-center gap-2">
                  <span
                    className="w-2 h-2 rounded-full inline-block"
                    style={{ background: "oklch(0.55 0.15 195)" }}
                  />
                  SMS and email notifications
                </li>
                <li className="flex items-center gap-2">
                  <span
                    className="w-2 h-2 rounded-full inline-block"
                    style={{ background: "oklch(0.55 0.15 195)" }}
                  />
                  Proof of delivery with signature
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-muted/30">
        <div className="cta-gradient rounded-3xl p-12 text-center relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
              backgroundSize: "32px 32px",
            }}
          />
          <div className="relative z-10">
            <h2 className="mb-4 font-display text-white">
              Need a Custom Quote?
            </h2>
            <p className="mb-8 text-lg text-white/85 max-w-2xl mx-auto">
              Our team is ready to help you find the perfect shipping solution.
            </p>
            <Button
              asChild
              size="lg"
              data-ocid="services.cta.primary_button"
              className="bg-white font-bold text-base px-8 hover:bg-white/90 rounded-xl"
              style={{ color: "oklch(0.28 0.12 270)" }}
            >
              <Link to="/contact">
                Contact Us for a Quote <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
