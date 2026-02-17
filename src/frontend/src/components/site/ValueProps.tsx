import { Clock, Shield, Globe, Zap, Package, HeadphonesIcon } from 'lucide-react';
import MarketingCard from './MarketingCard';

const valueProps = [
  {
    icon: <Zap className="h-10 w-10" />,
    title: 'Lightning Fast',
    description: 'Express delivery options with rapid service to international destinations worldwide.',
  },
  {
    icon: <Shield className="h-10 w-10" />,
    title: 'Secure & Reliable',
    description: 'Your packages are insured and tracked every step of the way with our advanced security protocols.',
  },
  {
    icon: <Globe className="h-10 w-10" />,
    title: 'Worldwide Shipping',
    description: 'Extensive network providing worldwide shipping to international destinations including the UK, USA, Canada, Italy, and more.',
  },
  {
    icon: <Clock className="h-10 w-10" />,
    title: '24/7 Support',
    description: 'Round-the-clock customer service team ready to assist you with any shipping needs or questions.',
  },
  {
    icon: <Package className="h-10 w-10" />,
    title: 'Flexible Solutions',
    description: 'From small parcels to large freight, we offer customized shipping solutions for every need.',
  },
  {
    icon: <HeadphonesIcon className="h-10 w-10" />,
    title: 'Real-Time Tracking',
    description: 'Monitor your shipments in real-time with our advanced tracking system and instant notifications.',
  },
];

export default function ValueProps() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {valueProps.map((prop, index) => (
        <MarketingCard
          key={index}
          icon={prop.icon}
          title={prop.title}
          description={prop.description}
        />
      ))}
    </div>
  );
}
