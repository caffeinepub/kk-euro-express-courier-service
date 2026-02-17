import { MapPin, Globe2 } from 'lucide-react';

export default function CoverageSection() {
  return (
    <div className="grid gap-8 md:grid-cols-2">
      <div className="space-y-4">
        <div className="flex items-start gap-4">
          <div className="rounded-lg bg-accent/10 p-3">
            <Globe2 className="h-6 w-6 text-accent" />
          </div>
          <div>
            <h3 className="mb-2 text-xl font-bold">Worldwide Shipping Network</h3>
            <p className="text-muted-foreground">
              Our extensive network provides worldwide shipping, reaching international destinations including the UK, USA, Canada, Italy, and more, ensuring your packages reach their
              destination quickly and safely. We maintain strategic hubs in key locations to optimize delivery times.
            </p>
          </div>
        </div>
      </div>
      <div className="space-y-4">
        <div className="flex items-start gap-4">
          <div className="rounded-lg bg-accent/10 p-3">
            <MapPin className="h-6 w-6 text-accent" />
          </div>
          <div>
            <h3 className="mb-2 text-xl font-bold">Local Expertise</h3>
            <p className="text-muted-foreground">
              With local teams in each region, we understand the unique requirements and characteristics of every
              area we serve. This ensures smooth operations and efficient last-mile delivery to international destinations worldwide.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
