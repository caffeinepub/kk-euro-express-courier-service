import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { ReactNode } from "react";

const colorVariants = [
  { border: "card-rainbow-border-orange", chip: "icon-chip-orange" },
  { border: "card-rainbow-border-teal", chip: "icon-chip-teal" },
  { border: "card-rainbow-border-violet", chip: "icon-chip-violet" },
  { border: "card-rainbow-border-gold", chip: "icon-chip-gold" },
  { border: "card-rainbow-border-red", chip: "icon-chip-red" },
  { border: "card-rainbow-border-blue", chip: "icon-chip-blue" },
];

interface MarketingCardProps {
  icon?: ReactNode;
  title: string;
  description: string;
  className?: string;
  colorIndex?: number;
}

export default function MarketingCard({
  icon,
  title,
  description,
  className = "",
  colorIndex = 0,
}: MarketingCardProps) {
  const variant = colorVariants[colorIndex % colorVariants.length];

  return (
    <Card
      className={`h-full transition-all hover:shadow-soft hover:-translate-y-0.5 ${variant.border} ${className}`}
    >
      <CardHeader>
        {icon && (
          <div
            className={`mb-4 inline-flex items-center justify-center w-14 h-14 rounded-2xl ${variant.chip}`}
          >
            {icon}
          </div>
        )}
        <CardTitle className="text-xl font-display">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base leading-relaxed">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
}
