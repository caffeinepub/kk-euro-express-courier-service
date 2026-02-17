import { Card, CardContent } from '@/components/ui/card';
import { Package, Truck, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: <Package className="h-12 w-12" />,
    title: 'Request Pickup',
    description: 'Schedule a pickup online or by phone. We collect your package from your location.',
  },
  {
    icon: <Truck className="h-12 w-12" />,
    title: 'We Ship',
    description: 'Your package is processed and shipped through our optimized worldwide shipping network to destinations including the UK, USA, Canada, Italy, and more.',
  },
  {
    icon: <CheckCircle className="h-12 w-12" />,
    title: 'Delivered',
    description: 'Safe delivery to the destination with real-time tracking and confirmation.',
  },
];

export default function HowItWorks() {
  return (
    <div className="grid gap-8 md:grid-cols-3">
      {steps.map((step, index) => (
        <div key={index} className="relative">
          <Card className="h-full">
            <CardContent className="pt-6 text-center">
              <div className="mb-4 flex justify-center text-accent">{step.icon}</div>
              <div className="mb-2 flex items-center justify-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-sm font-bold text-accent-foreground">
                  {index + 1}
                </span>
                <h3 className="text-xl font-bold">{step.title}</h3>
              </div>
              <p className="text-muted-foreground">{step.description}</p>
            </CardContent>
          </Card>
          {index < steps.length - 1 && (
            <div className="absolute right-0 top-1/2 hidden h-0.5 w-8 -translate-y-1/2 translate-x-full bg-border md:block" />
          )}
        </div>
      ))}
    </div>
  );
}
