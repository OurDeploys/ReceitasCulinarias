"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import Image from "next/image"
import ShareButtons from "@/components/share-buttons"
import { Clock, Users, ChefHat } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import type { Recipe } from "@/lib/recipes"

export default function RecipePage() {
  const params = useParams()
  const [recipe, setRecipe] = useState<Recipe | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadRecipe = async () => {
      try {
        // Import the recipe data dynamically
        const { getRecipeBySlug } = await import("@/lib/recipes")
        const recipeData = await getRecipeBySlug(params.slug as string)
        setRecipe(recipeData)
      } catch (error) {
        console.error("Error loading recipe:", error)
        setRecipe(null)
      } finally {
        setLoading(false)
      }
    }

    if (params.slug) {
      loadRecipe()
    }
  }, [params.slug])

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-teal-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
          <p className="text-green-600">Carregando receita...</p>
        </div>
      </div>
    )
  }

  if (!recipe) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-teal-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-green-800 mb-4">Receita não encontrada</h1>
          <p className="text-green-600 mb-8">A receita que você está procurando não existe.</p>
          <a href="/" className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors">
            Voltar ao início
          </a>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-teal-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-green-800 mb-4">{recipe.title}</h1>
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="secondary" className="bg-green-100 text-green-800">
                {recipe.category}
              </Badge>
              <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
                {recipe.cuisine}
              </Badge>
              {recipe.tags?.map((tag) => (
                <Badge key={tag} variant="outline" className="border-brown-300 text-brown-700">
                  {tag}
                </Badge>
              ))}
            </div>
            <ShareButtons title={recipe.title} />
          </div>

          {/* Image */}
          <div className="relative h-96 mb-8 rounded-lg overflow-hidden shadow-lg">
            <Image src={recipe.image || "/placeholder.svg"} alt={recipe.title} fill className="object-cover" />
          </div>

          {/* Recipe Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <Card className="bg-white/80 backdrop-blur-sm">
              <CardContent className="flex items-center gap-3 p-4">
                <Clock className="h-6 w-6 text-green-600" />
                <div>
                  <p className="font-semibold text-green-800">Tempo de Preparo</p>
                  <p className="text-green-600">{recipe.prepTime}</p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white/80 backdrop-blur-sm">
              <CardContent className="flex items-center gap-3 p-4">
                <Users className="h-6 w-6 text-yellow-600" />
                <div>
                  <p className="font-semibold text-green-800">Rendimento</p>
                  <p className="text-green-600">{recipe.servings}</p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white/80 backdrop-blur-sm">
              <CardContent className="flex items-center gap-3 p-4">
                <ChefHat className="h-6 w-6 text-red-600" />
                <div>
                  <p className="font-semibold text-green-800">Dificuldade</p>
                  <p className="text-green-600">{recipe.difficulty}</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Description */}
          {recipe.description && (
            <Card className="mb-8 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <p className="text-green-700 text-lg leading-relaxed">{recipe.description}</p>
              </CardContent>
            </Card>
          )}

          {/* Ingredients and Instructions */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Ingredients */}
            <Card className="bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-green-800 mb-4">Ingredientes</h2>
                <ul className="space-y-2">
                  {recipe.ingredients.map((ingredient, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-green-700">{ingredient}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Instructions */}
            <Card className="bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-green-800 mb-4">Modo de Preparo</h2>
                <ol className="space-y-4">
                  {recipe.instructions.map((instruction, index) => (
                    <li key={index} className="flex gap-3">
                      <span className="flex-shrink-0 w-8 h-8 bg-yellow-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                        {index + 1}
                      </span>
                      <span className="text-green-700 leading-relaxed">{instruction}</span>
                    </li>
                  ))}
                </ol>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
