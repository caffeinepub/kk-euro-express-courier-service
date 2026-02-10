import { Link } from '@tanstack/react-router';
import { ArrowRight, Truck, Plane, Box } from 'lucide-react';
import { Button } from '@/components/ui/button';
import MarketingCard from './MarketingCard';

const services = [
  {
    icon: <Truck className="h-10 w-10" />,
    title: 'Express Delivery',
    description: 'Fast priority delivery for urgent shipments across Europe and to international destinations.',
  },
  {
    icon: <Plane className="h-10 w-10" />,
    title: 'International Freight',
    description: 'Comprehensive air and ground freight solutions for international shipping to the UK, USA, Canada, Italy, and more.',
  },
  {
    icon: <Box className="h-10 w-10" />,
    title: 'Standard Shipping',
    description: 'Cost-effective standard delivery with reliable 3-5 day transit times.',
  },
];

export default function ServicesPreview() {
  return (
    <div className="space-y-8">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <MarketingCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
      <div className="flex justify-center">
        <Button asChild size="lg" variant="outline">
          <Link to="/services">
            View All Services <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
