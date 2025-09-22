'use client';

import { useState } from 'react';
import { AppShell } from '@/components/AppShell';
import { Header } from '@/components/Header';
import { ServiceCard } from '@/components/ServiceCard';
import { ProviderCard } from '@/components/ProviderCard';
import { Button } from '@/components/ui/Button';
import { SERVICE_CATEGORIES, MOCK_PROVIDERS } from '@/lib/constants';
import { ServiceType } from '@/lib/types';
import { Search, Filter, Clock } from 'lucide-react';

export default function HomePage() {
  const [selectedService, setSelectedService] = useState<ServiceType | null>(null);
  const [showUrgentOnly, setShowUrgentOnly] = useState(false);

  const filteredProviders = MOCK_PROVIDERS.filter(provider => {
    if (selectedService && !provider.servicesOffered.includes(selectedService)) {
      return false;
    }
    return true;
  });

  const handleServiceSelect = (serviceId: ServiceType) => {
    setSelectedService(serviceId === selectedService ? null : serviceId);
  };

  const handleProviderClick = (providerId: string) => {
    // In a real app, this would navigate to provider details
    console.log('Selected provider:', providerId);
  };

  return (
    <AppShell>
      <Header />
      
      {/* Hero Section */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-neutral-900 mb-2">
          Book to fire of Pay Book
        </h1>
        <p className="text-neutral-500 mb-4">
          Find trusted pet care providers in your area
        </p>
        
        {/* Urgent Booking Toggle */}
        <Button
          variant={showUrgentOnly ? 'primary' : 'outline'}
          size="sm"
          icon={Clock}
          onClick={() => setShowUrgentOnly(!showUrgentOnly)}
          className="mb-4"
        >
          Available Today
        </Button>
      </div>

      {/* Service Categories */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-neutral-900 mb-4">Services</h2>
        <div className="grid grid-cols-2 gap-4">
          {SERVICE_CATEGORIES.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onClick={() => handleServiceSelect(service.id)}
            />
          ))}
        </div>
      </div>

      {/* Filters */}
      <div className="flex items-center gap-2 mb-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-neutral-500" />
          <input
            type="text"
            placeholder="Search providers..."
            className="w-full pl-10 pr-4 py-3 border border-neutral-100 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>
        <Button variant="outline" size="md" icon={Filter}>
          Filter
        </Button>
      </div>

      {/* Selected Service Filter */}
      {selectedService && (
        <div className="mb-4">
          <div className="flex items-center gap-2">
            <span className="text-sm text-neutral-500">Showing providers for:</span>
            <span className="bg-primary text-white px-2 py-1 rounded-sm text-sm font-medium">
              {SERVICE_CATEGORIES.find(s => s.id === selectedService)?.name}
            </span>
            <button
              onClick={() => setSelectedService(null)}
              className="text-neutral-500 hover:text-neutral-900 text-sm"
            >
              Clear
            </button>
          </div>
        </div>
      )}

      {/* Providers List */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-neutral-900">
            Available Providers
          </h2>
          <span className="text-sm text-neutral-500">
            {filteredProviders.length} found
          </span>
        </div>
        
        {filteredProviders.map((provider) => (
          <ProviderCard
            key={provider.providerId}
            provider={provider}
            onClick={() => handleProviderClick(provider.providerId)}
          />
        ))}
        
        {filteredProviders.length === 0 && (
          <div className="text-center py-8">
            <div className="text-4xl mb-2">🔍</div>
            <p className="text-neutral-500">No providers found for your criteria</p>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setSelectedService(null)}
              className="mt-2"
            >
              Clear filters
            </Button>
          </div>
        )}
      </div>

      {/* Bottom Navigation Spacer */}
      <div className="h-20"></div>
    </AppShell>
  );
}
