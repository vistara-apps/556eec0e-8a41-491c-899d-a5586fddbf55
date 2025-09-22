import { ServiceCategory } from '@/lib/types';
import { Card } from './ui/Card';

interface ServiceCardProps {
  service: ServiceCategory;
  onClick: () => void;
}

export function ServiceCard({ service, onClick }: ServiceCardProps) {
  return (
    <Card 
      className="cursor-pointer hover:shadow-lg transition-shadow duration-200 text-center"
      onClick={onClick}
    >
      <div className="text-3xl mb-2">{service.icon}</div>
      <h3 className="font-semibold text-neutral-900 mb-1">{service.name}</h3>
      <p className="text-sm text-neutral-500">{service.description}</p>
    </Card>
  );
}
