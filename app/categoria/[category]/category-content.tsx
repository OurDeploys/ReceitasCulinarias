"use client"

import RecipeGrid from "@/components/recipe-grid"
import { Badge } from "@/components/ui/badge"
import type { Recipe } from "@/lib/recipes"

interface CategoryContentProps {
  recipes: Recipe[]
  categoryName: string
}

export default function CategoryContent({ recipes, categoryName }: CategoryContentProps) {
  if (recipes.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-teal-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-green-800 mb-4">Categoria não encontrada</h1>
          <p className="text-green-600 mb-8">Não encontramos receitas para esta categoria.</p>
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
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-green-800 mb-4">Receitas de {categoryName}</h1>
          <Badge variant="secondary" className="bg-green-100 text-green-800 text-lg px-4 py-2">
            {recipes.length} receita{recipes.length !== 1 ? "s" : ""}
          </Badge>
        </div>
        <RecipeGrid recipes={recipes} />
      </div>
    </div>
  )
} 