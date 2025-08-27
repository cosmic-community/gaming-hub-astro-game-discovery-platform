import { createBucketClient } from '@cosmicjs/sdk'
import type { Game, Genre, Developer } from '../../types'

export const cosmic = createBucketClient({
  bucketSlug: import.meta.env.COSMIC_BUCKET_SLUG,
  readKey: import.meta.env.COSMIC_READ_KEY,
  writeKey: import.meta.env.COSMIC_WRITE_KEY
})

// Helper function for error handling
function hasStatus(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error
}

// Get all games with relationships
export async function getAllGames(): Promise<Game[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'games' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    const games = response.objects as Game[]
    
    // Sort by featured games first, then by title
    return games.sort((a, b) => {
      if (a.metadata?.featured_game && !b.metadata?.featured_game) return -1
      if (!a.metadata?.featured_game && b.metadata?.featured_game) return 1
      return a.title.localeCompare(b.title)
    })
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch games')
  }
}

// Get featured games
export async function getFeaturedGames(): Promise<Game[]> {
  try {
    const response = await cosmic.objects
      .find({ 
        type: 'games',
        'metadata.featured_game': true
      })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return response.objects as Game[]
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch featured games')
  }
}

// Get single game by slug
export async function getGameBySlug(slug: string): Promise<Game | null> {
  try {
    const response = await cosmic.objects
      .findOne({
        type: 'games',
        slug: slug
      })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    const game = response.object as Game
    
    if (!game || !game.metadata) {
      return null
    }
    
    return game
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null
    }
    throw new Error(`Failed to fetch game: ${slug}`)
  }
}

// Get games by genre
export async function getGamesByGenre(genreId: string): Promise<Game[]> {
  try {
    const response = await cosmic.objects
      .find({ 
        type: 'games',
        'metadata.genre': genreId
      })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return response.objects as Game[]
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch games by genre')
  }
}

// Get all genres
export async function getAllGenres(): Promise<Genre[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'genres' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return response.objects as Genre[]
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch genres')
  }
}

// Get single genre by slug
export async function getGenreBySlug(slug: string): Promise<Genre | null> {
  try {
    const response = await cosmic.objects
      .findOne({
        type: 'genres',
        slug: slug
      })
      .props(['id', 'title', 'slug', 'metadata'])
    
    const genre = response.object as Genre
    
    if (!genre || !genre.metadata) {
      return null
    }
    
    return genre
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null
    }
    throw new Error(`Failed to fetch genre: ${slug}`)
  }
}

// Get all developers
export async function getAllDevelopers(): Promise<Developer[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'developers' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return response.objects as Developer[]
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch developers')
  }
}

// Get single developer by slug
export async function getDeveloperBySlug(slug: string): Promise<Developer | null> {
  try {
    const response = await cosmic.objects
      .findOne({
        type: 'developers',
        slug: slug
      })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    const developer = response.object as Developer
    
    if (!developer || !developer.metadata) {
      return null
    }
    
    return developer
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null
    }
    throw new Error(`Failed to fetch developer: ${slug}`)
  }
}

// Get games by developer
export async function getGamesByDeveloper(developerId: string): Promise<Game[]> {
  try {
    const response = await cosmic.objects
      .find({ 
        type: 'games',
        'metadata.developer': developerId
      })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return response.objects as Game[]
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch games by developer')
  }
}