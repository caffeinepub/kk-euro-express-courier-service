import { ReactNode } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface MarketingCardProps {
  icon?: ReactNode;
  title: string;
  description: string;
  className?: string;
}

export default function MarketingCard({ icon, title, description, className = '' }: MarketingCardProps) {
  return (
    <Card className={`h-full transition-shadow hover:shadow-soft ${className}`}>
      <CardHeader>
        {icon && <div className="mb-4 text-accent">{icon}</div>}
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardContent>
    </Card>
  );
}

