import { ProviderProfile } from '@/lib/types';
import { formatPrice } from '@/lib/utils';
import { Card } from './ui/Card';
import { Avatar } from './ui/Avatar';
import { Badge } from './ui/Badge';
import { Star, MapPin, Shield } from 'lucide-react';

interface ProviderCardProps {
  provider: ProviderProfile;
  onClick: () => void;
}

export function ProviderCard({ provider, onClick }: ProviderCardProps) {
  return (
    <Card 
      className="cursor-pointer hover:shadow-lg transition-shadow duration-200"
      onClick={onClick}
    >
      <div className="flex items-start gap-3">
        <Avatar
          src={provider.profilePicUrl}
          alt={provider.name}
          size="lg"
          fallback={provider.name.charAt(0)}
        />
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-semibold text-neutral-900 truncate">{provider.name}</h3>
            {provider.verifiedBadge && (
              <Shield className="w-4 h-4 text-accent" />
            )}
          </div>
          
          <div className="flex items-center gap-1 mb-2">
            <Star className="w-4 h-4 text-yellow-500 fill-current" />
            <span className="text-sm font-medium">{provider.rating}</span>
            <span className="text-sm text-neutral-500">({provider.reviewsCount})</span>
          </div>
          
          <div className="flex items-center gap-1 mb-2">
            <MapPin className="w-4 h-4 text-neutral-500" />
            <span className="text-sm text-neutral-500">{provider.location}</span>
          </div>
          
          <p className="text-sm text-neutral-500 mb-3 line-clamp-2">{provider.bio}</p>
          
          <div className="flex flex-wrap gap-1 mb-3">
            {provider.specializations.slice(0, 2).map((spec) => (
              <Badge key={spec} variant="default">
                {spec}
              </Badge>
            ))}
          </div>
          
          <div className="flex items-center justify-between">
            <div className="text-sm">
              <span className="text-neutral-500">From </span>
              <span className="font-semibold text-neutral-900">
                {formatPrice(provider.priceRange.min)}
              </span>
            </div>
            <div className="flex gap-1">
              {provider.servicesOffered.slice(0, 3).map((service) => (
                <span key={service} className="text-lg">
                  {service === 'walking' && '🚶‍♂️'}
                  {service === 'sitting' && '🏠'}
                  {service === 'grooming' && '✂️'}
                  {service === 'boarding' && '🏨'}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
