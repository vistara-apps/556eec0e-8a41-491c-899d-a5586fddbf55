# PetPal Connect - Base Mini App

Instant, specialized pet care bookings, powered by community.

## Features

- **Urgent Booking Marketplace**: Find available pet providers within 24 hours
- **Specialized Care Matching**: Filter providers by specific pet needs and experience
- **Verified Provider Profiles**: Trust-verified providers with ratings and reviews
- **In-Frame Booking**: Seamless booking within Farcaster frames

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Blockchain**: Base Network
- **Wallet Integration**: MiniKit + OnchainKit
- **Styling**: Tailwind CSS
- **TypeScript**: Full type safety

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Set up environment variables**:
   - Copy `.env.local` and add your OnchainKit API key
   - Get your API key from [Coinbase Developer Platform](https://portal.cdp.coinbase.com/)

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open in Base App**:
   - The app is optimized for Base App's Mini App environment
   - Test in mobile viewport for best experience

## Project Structure

```
├── app/                 # Next.js App Router
├── components/          # Reusable UI components
├── lib/                # Utilities and types
└── public/             # Static assets
```

## Key Components

- **AppShell**: Main layout wrapper
- **ServiceCard**: Service category selection
- **ProviderCard**: Provider profile display
- **Header**: User context and navigation

## Base Mini App Integration

- Uses MiniKitProvider for wallet and social integration
- OnchainKit components for Base network functionality
- Optimized for mobile-first experience
- Social verification through Farcaster identity

## Development

The app follows Base Mini App best practices:
- Mobile-first responsive design
- Proper error boundaries and loading states
- TypeScript for type safety
- Tailwind CSS with custom design tokens

## Deployment

Deploy to Vercel or similar platform with Base network support.
