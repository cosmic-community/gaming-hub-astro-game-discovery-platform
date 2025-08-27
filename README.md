# Gaming Hub - Astro Game Discovery Platform

![App Preview](https://imgix.cosmicjs.com/f7797120-a455-11ed-81f2-f50e185dd248-U7NLcNo9NGA.jpg?w=1200&h=300&fit=crop&auto=format,compress)

A lightning-fast game discovery platform built with Astro that showcases your game catalog with exceptional performance and SEO optimization. Browse games by genre, discover new developers, and explore detailed game information with rich media galleries.

## Features

- ⚡ **Lightning Performance** - Astro's static generation for sub-second page loads
- 🎮 **Game Discovery** - Browse extensive game catalog with detailed information
- 🏷️ **Genre Categories** - Color-coded Action, RPG, and Strategy sections
- 🏢 **Developer Profiles** - Comprehensive studio information and portfolios
- 📱 **Responsive Design** - Optimized for mobile, tablet, and desktop
- 🖼️ **Media Galleries** - Featured images and screenshot carousels
- 🔍 **SEO Optimized** - Perfect meta tags and structured data
- 🚀 **Featured Games** - Highlighted top games with special promotion

<!-- CLONE_PROJECT_BUTTON -->

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "build a game based website with hundreads of games"

### Code Generation Prompt

> Set up an Astro website powered by my existing content

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies Used

- **Astro** - Static site generation with optimal performance
- **TypeScript** - Type safety and enhanced development experience
- **Tailwind CSS** - Utility-first styling with responsive design
- **Cosmic CMS** - Headless content management
- **Imgix** - Image optimization and transformation

## Getting Started

### Prerequisites

- Node.js 18+ or Bun
- A Cosmic account with your game content

### Installation

1. Clone this repository
2. Install dependencies:
   ```bash
   bun install
   ```

3. Create a `.env` file in the root directory:
   ```env
   COSMIC_BUCKET_SLUG=your-bucket-slug
   COSMIC_READ_KEY=your-read-key
   COSMIC_WRITE_KEY=your-write-key
   ```

4. Start the development server:
   ```bash
   bun run dev
   ```

5. Open [http://localhost:4321](http://localhost:4321) to view the application.

## Cosmic SDK Examples

### Fetching Games with Relationships
```typescript
import { cosmic } from '../lib/cosmic'

// Get games with genre and developer information
const response = await cosmic.objects
  .find({ type: 'games' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)

const games = response.objects
```

### Filtering by Genre
```typescript
// Get games by specific genre
const rpgGames = await cosmic.objects
  .find({ 
    type: 'games',
    'metadata.genre': genreId
  })
  .depth(1)
```

## Cosmic CMS Integration

This application integrates with three main content types:

- **Games** - Complete game information with featured images, screenshots, genres, developers, ratings, and platforms
- **Genres** - Game categories with descriptions and color coding
- **Developers** - Studio profiles with company information and portfolios

The content model supports:
- Rich media with automatic image optimization
- Genre and developer relationships via object metafields
- Rating systems with select-dropdown values
- Platform support with checkbox arrays
- Featured game flags for promotion

## Deployment Options

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Add environment variables in the Vercel dashboard
3. Deploy automatically on every push

### Netlify
1. Connect your repository to Netlify
2. Set build command: `bun run build`
3. Set publish directory: `dist`
4. Add environment variables in Netlify settings

### Static Hosting
Build static files and deploy to any hosting provider:
```bash
bun run build
```

The built files will be in the `dist` directory.
