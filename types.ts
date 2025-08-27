// Base Cosmic object interface
interface CosmicObject {
  id: string
  slug: string
  title: string
  content?: string
  metadata?: Record<string, any>
  type: string
  created_at: string
  modified_at: string
}

// Game object type
export interface Game extends CosmicObject {
  type: 'games'
  metadata: {
    game_title: string
    description: string
    featured_image?: {
      url: string
      imgix_url: string
    }
    screenshots?: Array<{
      url: string
      imgix_url: string
    }>
    genre?: Genre
    developer?: Developer
    release_date?: string
    rating?: {
      key: string
      value: string
    }
    platform?: string[]
    featured_game?: boolean
  }
}

// Genre object type
export interface Genre extends CosmicObject {
  type: 'genres'
  metadata: {
    genre_name: string
    description?: string
    genre_color?: string
  }
}

// Developer object type
export interface Developer extends CosmicObject {
  type: 'developers'
  metadata: {
    studio_name: string
    about?: string
    founded?: string
    website?: string
    logo?: {
      url: string
      imgix_url: string
    }
  }
}

// API response types
export interface CosmicResponse<T> {
  objects: T[]
  total: number
  limit?: number
  skip?: number
}

// Type guards for runtime validation
export function isGame(obj: CosmicObject): obj is Game {
  return obj.type === 'games'
}

export function isGenre(obj: CosmicObject): obj is Genre {
  return obj.type === 'genres'
}

export function isDeveloper(obj: CosmicObject): obj is Developer {
  return obj.type === 'developers'
}

// Rating type literals - EXACT values from content model
export type GameRating = 'Everyone' | 'Everyone 10+' | 'Teen' | 'Mature 17+'

// Platform type literals - EXACT values from content model
export type GamePlatform = 'PC' | 'PlayStation' | 'Xbox' | 'Nintendo Switch' | 'Mobile'

// Utility types - Fixed the type constraint
export type OptionalMetadata<T extends { metadata?: any }> = Partial<T['metadata']>