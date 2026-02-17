import { Link } from '@tanstack/react-router';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Section from '@/components/site/Section';
import ValueProps from '@/components/site/ValueProps';
import ServicesPreview from '@/components/site/ServicesPreview';
import VideoSection from '@/components/site/VideoSection';

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <Section className="hero-background">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium">
              <span className="text-accent">●</span>
              <span className="ml-2">Fast & Reliable Courier Service</span>
            </div>
            <h1 className="font-display">
              Your Trusted Partner for{' '}
              <span className="text-accent">Worldwide Shipping</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              KK Euro Express delivers your packages worldwide with express priority delivery and international freight solutions.
              From the UK, USA, Canada, Italy to destinations around the globe, we've got you covered.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
                <Link to="/contact">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/services">View Services</Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <img
              src="/assets/generated/kk-euro-express-hero.dim_1600x900.png"
              alt="KK Euro Express Delivery"
              className="w-full h-auto rounded-lg shadow-soft"
            />
          </div>
        </div>
      </Section>

      {/* Value Propositions */}
      <Section>
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-display">Why Choose KK Euro Express?</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We combine cutting-edge technology with personalized service to deliver exceptional results for every shipment.
          </p>
        </div>
        <ValueProps />
      </Section>

      {/* Video Section */}
      <VideoSection />

      {/* Services Preview */}
      <Section className="bg-muted/30">
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-display">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive courier solutions tailored to your shipping needs.
          </p>
        </div>
        <ServicesPreview />
      </Section>

      {/* CTA Section */}
      <Section>
        <div className="rounded-2xl bg-gradient-to-r from-primary to-accent p-12 text-center text-primary-foreground">
          <h2 className="mb-4 font-display text-white">Ready to Ship with Us?</h2>
          <p className="mb-8 text-lg text-white/90 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust KK Euro Express for their delivery needs.
            Get a quote today and experience the difference.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link to="/contact">
              Contact Us Now <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </Section>
    </>
  );
}
