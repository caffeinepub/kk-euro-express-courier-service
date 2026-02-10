import { Truck, Plane, Wind, Bus, ArrowRight } from 'lucide-react';
import { Link } from '@tanstack/react-router';
import Section from '@/components/site/Section';
import MarketingCard from '@/components/site/MarketingCard';
import HowItWorks from '@/components/site/HowItWorks';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: <Plane className="h-10 w-10" />,
    title: 'International Courier',
    description:
      'Fast and reliable international shipping services across borders. We handle customs clearance and documentation for seamless global delivery.',
  },
  {
    icon: <Truck className="h-10 w-10" />,
    title: 'Domestic Courier',
    description:
      'Swift domestic delivery services within the country. From same-day to standard shipping, we ensure your packages arrive on time.',
  },
  {
    icon: <Wind className="h-10 w-10" />,
    title: 'Vacuum Service',
    description:
      'Specialized vacuum packaging and handling services for delicate items. Perfect for protecting sensitive goods during transit.',
  },
  {
    icon: <Bus className="h-10 w-10" />,
    title: 'Indo-Canadian Bus Service',
    description:
      'Convenient bus transportation service connecting Indo-Canadian communities. Reliable passenger and parcel transport with scheduled routes.',
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <Section className="bg-gradient-to-b from-muted/50 to-background">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="mb-6 font-display">Our Services</h1>
          <p className="text-xl text-muted-foreground">
            Comprehensive courier and logistics solutions designed to meet all your shipping needs.
            From international delivery to specialized services, we deliver excellence every time.
          </p>
        </div>
      </Section>

      {/* Services Grid */}
      <Section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {services.map((service, index) => (
            <MarketingCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </Section>

      {/* How It Works */}
      <Section className="bg-muted/30">
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-display">How It Works</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our streamlined process ensures your packages are delivered quickly and safely.
          </p>
        </div>
        <HowItWorks />
      </Section>

      {/* Additional Info */}
      <Section>
        <div className="rounded-2xl bg-card border p-8 md:p-12">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="mb-4 text-2xl font-bold">Custom Solutions</h3>
              <p className="text-muted-foreground mb-4">
                Need something specific? We offer customized shipping solutions tailored to your unique requirements.
                Whether you're a small business or a large enterprise, we can design a service package that fits your needs.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Dedicated account management</li>
                <li>• Volume discounts available</li>
                <li>• Flexible pickup schedules</li>
                <li>• Custom packaging solutions</li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-2xl font-bold">Insurance & Tracking</h3>
              <p className="text-muted-foreground mb-4">
                Every shipment is protected with comprehensive insurance coverage and real-time tracking.
                Monitor your packages from pickup to delivery with instant notifications at every step.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Full insurance coverage included</li>
                <li>• Real-time GPS tracking</li>
                <li>• SMS and email notifications</li>
                <li>• Proof of delivery with signature</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Contact CTA Section */}
      <Section className="bg-muted/30">
        <div className="rounded-2xl bg-gradient-to-r from-primary to-accent p-12 text-center text-primary-foreground">
          <h2 className="mb-4 font-display text-white">Need a Custom Quote?</h2>
          <p className="mb-8 text-lg text-white/90 max-w-2xl mx-auto">
            Our team is ready to help you find the perfect shipping solution for your needs.
            Contact us today for a personalized quote and expert advice.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link to="/contact">
              Contact Us for a Quote <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </Section>
    </>
  );
}
