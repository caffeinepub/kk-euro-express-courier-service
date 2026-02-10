import { Award, Users, Target, TrendingUp } from 'lucide-react';
import Section from '@/components/site/Section';
import CoverageSection from '@/components/site/CoverageSection';
import { Card, CardContent } from '@/components/ui/card';

const values = [
  {
    icon: <Award className="h-8 w-8" />,
    title: 'Excellence',
    description: 'We strive for excellence in every delivery, ensuring the highest standards of service quality.',
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: 'Customer Focus',
    description: 'Our customers are at the heart of everything we do. Your satisfaction is our success.',
  },
  {
    icon: <Target className="h-8 w-8" />,
    title: 'Reliability',
    description: 'Dependable service you can count on, with on-time delivery and transparent communication.',
  },
  {
    icon: <TrendingUp className="h-8 w-8" />,
    title: 'Innovation',
    description: 'Continuously improving our services with cutting-edge technology and efficient processes.',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <Section className="bg-gradient-to-b from-muted/50 to-background">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="mb-6 font-display">About KK Euro Express</h1>
          <p className="text-xl text-muted-foreground">
            Your trusted partner for fast, reliable, and secure courier services across Europe and to international destinations including the UK, USA, Canada, Italy, and more.
          </p>
        </div>
      </Section>

      {/* Company Overview */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <h2 className="mb-6 font-display">Who We Are</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                KK Euro Express is a leading courier and logistics company specializing in fast, reliable deliveries
                across Europe and to international destinations. With years of experience in the industry, we've built a reputation for excellence,
                security, and customer satisfaction.
              </p>
              <p>
                Our extensive network spans Europe and reaches key international destinations including the UK, USA, Canada, Italy, and more, enabling us to provide seamless shipping
                solutions for businesses and individuals alike. From small parcels to large freight, we handle every
                shipment with the utmost care and professionalism.
              </p>
              <p>
                We combine traditional courier expertise with modern technology to offer real-time tracking,
                flexible delivery options, and exceptional customer service. Our team of dedicated professionals
                works around the clock to ensure your packages arrive safely and on time.
              </p>
            </div>
          </div>
          <div>
            <img
              src="/assets/generated/kk-euro-express-hero.dim_1600x900.png"
              alt="KK Euro Express Operations"
              className="w-full h-auto rounded-lg shadow-soft"
            />
          </div>
        </div>
      </Section>

      {/* Mission & Values */}
      <Section className="bg-muted/30">
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-display">Our Mission & Values</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We're committed to delivering excellence through reliability, innovation, and customer-focused service.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => (
            <Card key={index} className="text-center">
              <CardContent className="pt-6">
                <div className="mb-4 flex justify-center text-accent">{value.icon}</div>
                <h3 className="mb-2 text-lg font-bold">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Coverage */}
      <Section>
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-display">Our Coverage</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Extensive network across Europe and to international destinations including the UK, USA, Canada, Italy, and more.
          </p>
        </div>
        <CoverageSection />
      </Section>

      {/* Stats */}
      <Section className="bg-gradient-to-r from-primary to-accent text-primary-foreground">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 text-center">
          <div>
            <div className="mb-2 text-4xl font-bold text-white">10+</div>
            <div className="text-white/90">Years Experience</div>
          </div>
          <div>
            <div className="mb-2 text-4xl font-bold text-white">50K+</div>
            <div className="text-white/90">Deliveries Monthly</div>
          </div>
          <div>
            <div className="mb-2 text-4xl font-bold text-white">25+</div>
            <div className="text-white/90">Cities Covered</div>
          </div>
          <div>
            <div className="mb-2 text-4xl font-bold text-white">99%</div>
            <div className="text-white/90">On-Time Delivery</div>
          </div>
        </div>
      </Section>
    </>
  );
}
