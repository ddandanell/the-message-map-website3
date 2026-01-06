# The Massage Map

Your smart shortcut to the best massages in Bali.

## Overview

The Massage Map is a modern web application that helps travelers find the perfect massage spa in Bali. Instead of scrolling through random reviews and outdated blogs, users get a live, curated map of spas and therapists, organized by area, style, budget, and mood.

## Features

✨ **Smart Filtering**
- Filter by area (Ubud, Seminyak, Canggu, Nusa Dua)
- Filter by massage style (Balinese, Thai, Swedish, Deep Tissue, etc.)
- Filter by budget (IDR range)
- Filter by mood (relaxing, luxury, therapeutic, etc.)
- Filter by what it's good for (surf recovery, jet lag, couples, etc.)
- "Open Now" filter to see currently available spas

📍 **Interactive Views**
- Grid view for detailed spa cards
- Map view for location-based browsing

💰 **Transparent Pricing**
- Clear "from IDR" pricing for each spa
- Price ranges displayed upfront

⭐ **Detailed Ratings**
- Hygiene rating
- Ambience rating
- Pressure rating
- Overall rating with review count

💬 **One-Click WhatsApp**
- Direct WhatsApp chat integration for instant booking
- Pre-filled messages for convenience

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI**: React 19

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/ddandanell/the-message-map-website3.git
cd the-message-map-website3
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
the-message-map-website3/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── FilterPanel.tsx    # Filtering interface
│   ├── SpaCard.tsx        # Spa listing card
│   └── SimpleMap.tsx      # Map view component
├── data/                  # Static data
│   └── spas.ts           # Sample spa data
├── types/                 # TypeScript definitions
│   └── index.ts          # Type definitions
└── public/               # Static assets

```

## Data Structure

Each spa listing includes:
- Name, description, and location
- Operating hours and "open now" status
- Pricing information (from/to IDR)
- WhatsApp contact for booking
- Multiple massage styles offered
- "Good for" tags (surf recovery, jet lag, couples, etc.)
- Mood tags (relaxing, luxury, therapeutic, etc.)
- Detailed ratings (hygiene, ambience, pressure)

## Future Enhancements

- Integration with real mapping services (Google Maps, Mapbox)
- User authentication and personalized favorites
- User reviews and ratings
- Real-time availability and booking
- Mobile app version
- Multi-language support
- Advanced search with natural language processing

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

ISC