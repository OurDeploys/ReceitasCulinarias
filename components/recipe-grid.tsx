"use client"
import type { Recipe } from "@/lib/recipes"
import RecipeCard from "./recipe-card"

interface RecipeGridProps {
  recipes: Recipe[]
}

export default function RecipeGrid({ recipes }: RecipeGridProps) {
  return (
    <section id="receitas" className="py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.slug} recipe={recipe} />
        ))}
      </div>
      {recipes.length === 0 && (
        <div className="text-center py-12">
          <p className="text-brown-600 text-lg">Nenhuma receita encontrada.</p>
        </div>
      )}
    </section>
  )
}
