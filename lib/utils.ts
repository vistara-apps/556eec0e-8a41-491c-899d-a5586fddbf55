import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price);
}

export function formatDate(date: string): string {
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  }).format(new Date(date));
}

export function getServiceIcon(serviceType: string): string {
  const icons: Record<string, string> = {
    walking: '🚶‍♂️',
    sitting: '🏠',
    grooming: '✂️',
    boarding: '🏨',
    training: '🎓',
  };
  return icons[serviceType] || '🐾';
}
