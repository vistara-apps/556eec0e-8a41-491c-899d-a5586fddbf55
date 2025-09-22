import { ServiceCategory } from './types';

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: 'grooming',
    name: 'Grooming',
    icon: '✂️',
    description: 'Professional pet grooming services',
  },
  {
    id: 'walking',
    name: 'Walking',
    icon: '🚶‍♂️',
    description: 'Daily walks and exercise',
  },
  {
    id: 'sitting',
    name: 'Sitting',
    icon: '🏠',
    description: 'In-home pet sitting and care',
  },
  {
    id: 'boarding',
    name: 'Boarding',
    icon: '🏨',
    description: 'Overnight pet boarding',
  },
];

export const MOCK_PROVIDERS = [
  {
    providerId: '1',
    userId: '1',
    name: 'Sarah Johnson',
    servicesOffered: ['walking', 'sitting'] as const,
    specializations: ['Senior Dogs', 'Anxious Pets'],
    rating: 4.9,
    reviewsCount: 127,
    verifiedBadge: true,
    priceRange: { min: 25, max: 45 },
    location: 'Downtown',
    bio: 'Certified dog trainer with 5+ years experience. Specializing in senior and anxious pets.',
    profilePicUrl: 'https://via.placeholder.com/100x100/FF6B6B/FFFFFF?text=SJ',
  },
  {
    providerId: '2',
    userId: '2',
    name: 'Mike Chen',
    servicesOffered: ['grooming', 'walking'] as const,
    specializations: ['Large Breeds', 'Show Grooming'],
    rating: 4.8,
    reviewsCount: 89,
    verifiedBadge: true,
    priceRange: { min: 35, max: 80 },
    location: 'Midtown',
    bio: 'Professional groomer and dog walker. Expert with large breeds and show preparation.',
    profilePicUrl: 'https://via.placeholder.com/100x100/4ECDC4/FFFFFF?text=MC',
  },
  {
    providerId: '3',
    userId: '3',
    name: 'Emma Rodriguez',
    servicesOffered: ['sitting', 'boarding'] as const,
    specializations: ['Cats', 'Medication Admin'],
    rating: 5.0,
    reviewsCount: 45,
    verifiedBadge: true,
    priceRange: { min: 30, max: 60 },
    location: 'Uptown',
    bio: 'Veterinary assistant offering specialized care for cats and pets requiring medication.',
    profilePicUrl: 'https://via.placeholder.com/100x100/45B7D1/FFFFFF?text=ER',
  },
];
