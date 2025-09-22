import type { Metadata } from 'next';
import { Providers } from './providers';
import './globals.css';

export const metadata: Metadata = {
  title: 'PetPal Connect',
  description: 'Instant, specialized pet care bookings, powered by community.',
  openGraph: {
    title: 'PetPal Connect',
    description: 'Instant, specialized pet care bookings, powered by community.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PetPal Connect',
    description: 'Instant, specialized pet care bookings, powered by community.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
