# AI Video Platform 🎬✨

A modern dark mode landing page and dashboard for an AI text-to-video web3 platform. Built with React, Tailwind CSS, Framer Motion, and RainbowKit.

## Features

- 🌙 **Dark Mode Design** - Sleek dark theme with neon accents
- 🎨 **Modern UI** - Clean, responsive design with smooth animations
- 🔗 **Web3 Integration** - Wallet connectivity with RainbowKit
- 🎬 **Video Generation** - AI-powered text-to-video creation interface
- 🖼️ **Video Gallery** - Animated gallery with community videos
- 🗳️ **Governance** - On-chain voting for platform features
- ⚡ **Smooth Animations** - Framer Motion powered interactions
- 📱 **Responsive** - Mobile-first design approach

## Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Web3**: RainbowKit + Wagmi + Viem
- **Build Tool**: Vite
- **Icons**: Lucide React

## Color Palette

- Background: `#121212`
- Cards: `#18181B`
- Text: `#FAFAFA`
- Neon Cyan: `#54D6FF`
- Neon Purple: `#A78BFA`

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd ai-video-platform
```

2. Install dependencies:
```bash
npm install
```

3. Copy environment variables:
```bash
cp .env.example .env
```

4. Update the `.env` file with your configuration:
   - Get a WalletConnect Project ID from [WalletConnect Cloud](https://cloud.walletconnect.com/)
   - Get an Alchemy API key from [Alchemy](https://www.alchemy.com/)

5. Start the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
src/
├── components/
│   ├── ui/              # Reusable UI components
│   ├── layout/          # Layout components (Header, Footer)
│   ├── Hero.tsx         # Hero section
│   ├── VideoGenerator.tsx
│   ├── VideoGallery.tsx
│   ├── VotingSection.tsx
│   └── WalletConnect.tsx
├── pages/
│   └── Landing.tsx      # Main landing page
├── providers/
│   └── Web3Provider.tsx # Web3 configuration
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions
├── types/               # TypeScript type definitions
└── styles/              # Global styles
```

## Key Components

### Hero Section
- Animated hero with neon button effects
- Floating background elements
- Smooth scroll indicators

### Video Generator
- Text prompt input with suggestions
- Style, duration, and aspect ratio options
- Animated generation progress

### Video Gallery
- Responsive grid layout
- Hover effects and video previews
- Filter and sort functionality

### Voting Section
- Community governance interface
- Real-time vote tracking
- Wallet-based voting

### Wallet Integration
- Multi-wallet support via RainbowKit
- Network switching
- Connection state management

## Customization

### Colors
Update the color palette in `tailwind.config.js`:

```js
colors: {
  background: '#121212',
  card: '#18181B',
  text: '#FAFAFA',
  'neon-cyan': '#54D6FF',
  'neon-purple': '#A78BFA',
}
```

### Animations
Modify animations in `src/styles/globals.css` and component files using Framer Motion.

## Deployment

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

MIT License - see LICENSE file for details

## Support

For support and questions, please open an issue in the repository.

---

Built with ❤️ for the future of AI-powered content creation

