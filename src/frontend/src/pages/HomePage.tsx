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
              <img
                src="/assets/generated/kk-euro-express-hero.dim_1600x900.png"
                alt="KK Euro Express Delivery"
                className="relative w-full h-auto rounded-2xl shadow-soft"
              />
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
