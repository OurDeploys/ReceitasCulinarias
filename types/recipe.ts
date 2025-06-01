export interface Recipe {
  slug: string
  title: string
  description: string
  image: string
  category: string
  cuisine: string
  prepTime: string
  servings: string
  difficulty: string
  ingredients: string[]
  instructions: string[]
  tags?: string[]
}
