import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Box, Plane, Truck } from "lucide-react";
import MarketingCard from "./MarketingCard";

const services = [
  {
    icon: <Truck className="h-7 w-7" />,
    title: "Express Delivery",
    description:
      "Fast priority delivery for urgent shipments with worldwide shipping to international destinations.",
  },
  {
    icon: <Plane className="h-7 w-7" />,
    title: "International Freight",
    description:
      "Comprehensive air and ground freight solutions for worldwide shipping to the UK, USA, Canada, Italy, and more.",
  },
  {
    icon: <Box className="h-7 w-7" />,
    title: "Standard Shipping",
    description:
      "Cost-effective standard delivery with reliable 3-5 day transit times.",
  },
];

export default function ServicesPreview() {
  return (
    <div className="space-y-8">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
      <div className="flex justify-center">
        <Button
          asChild
          size="lg"
          variant="outline"
          data-ocid="services.secondary_button"
          className="border-2 font-semibold rounded-xl"
          style={{
            borderColor: "oklch(0.38 0.18 270)",
            color: "oklch(0.38 0.18 270)",
          }}
        >
          <Link to="/services">
            View All Services <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
