# GetIA

Corporate website and venture studio portfolio for Getia AS.

## Overview

GetIA is the public-facing website for Getia AS, a Norwegian venture studio based in Oslo. The site showcases the company's portfolio, investment thesis, team, and provides contact points for investors, founders, and talent.

**Website**: [https://getia.no](https://getia.no)

## Features

### Portfolio Showcase
- **Featured Companies** - Showcase of portfolio companies across:
  - Privacy Tech (CookieMonster)
  - PropTech (RoomManager)
  - Analytics (Customer Insights)
  - AdTech (Lead Bidding)
  - Creator Economy (Creator Platform)
  - Travel Tech (TravelBuddy)

### Capabilities
- Product Strategy
- UI/UX Design
- Full-Stack Development
- Growth Marketing
- Data Analytics
- Infrastructure

### Investor Relations
- Investment thesis and Series A information
- Benefits for strategic LPs
- Pro-rata rights for follow-on investments
- Quarterly investor updates

### Team Section
- Core leadership profiles
- Founder & CEO: Andreas Hatlem

### Contact & Newsletter
- Segmented contact form (Investor, Founder, Talent)
- AI Insights Newsletter subscription
- Integration with GetMailer for email delivery

## Tech Stack

- **Framework**: Next.js 16, React 19
- **Styling**: Tailwind CSS, Radix UI
- **Animations**: Framer Motion
- **Email**: Resend, GetMailer integration
- **Fonts**: Outfit (sans), Instrument Serif (accent)

## Design

- **Primary Color**: #c8ff00 (Lime Green)
- **Background**: #050505 (Dark theme)
- **Effects**: Noise textures, gradient blur accents, cursor glow

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm

### Installation

```bash
pnpm install
cp .env.example .env
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## Environment Variables

```bash
GETMAILER_API_URL=
GETMAILER_API_KEY=
EMAIL_FROM=
NEXT_PUBLIC_APP_URL=
```

## Deployment

Deployed on Railway.

## License

Private - All rights reserved.
