export interface User {
  userId: string;
  farcasterUsername?: string;
  walletAddress?: string;
  role: 'owner' | 'provider' | 'both';
  profilePicUrl?: string;
  bio?: string;
}

export interface PetProfile {
  petId: string;
  ownerId: string;
  name: string;
  breed: string;
  age: number;
  temperament: string;
  specialNeeds?: string;
  photoUrl?: string;
}

export interface ProviderProfile {
  providerId: string;
  userId: string;
  servicesOffered: ServiceType[];
  specializations: string[];
  availabilityCalendarUrl?: string;
  credentials?: string[];
  rating: number;
  reviewsCount: number;
  verifiedBadge: boolean;
  priceRange: {
    min: number;
    max: number;
  };
  location: string;
  bio: string;
  profilePicUrl?: string;
  name: string;
}

export interface Booking {
  bookingId: string;
  petOwnerId: string;
  petProviderId: string;
  petId: string;
  serviceType: ServiceType;
  dateTime: string;
  duration: number;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  price: number;
  paymentStatus: 'pending' | 'paid' | 'refunded';
}

export type ServiceType = 'walking' | 'sitting' | 'grooming' | 'boarding' | 'training';

export interface ServiceCategory {
  id: ServiceType;
  name: string;
  icon: string;
  description: string;
}
