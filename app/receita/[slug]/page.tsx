import { getAllRecipes } from "@/lib/recipes"
import RecipeContent from "./recipe-content"

export async function generateStaticParams() {
  const recipes = await getAllRecipes()
  return recipes.map((recipe) => ({
    slug: recipe.slug,
  }))
}

export default async function RecipePage({
  params,
}: {
  params: { slug: string }
}) {
  const recipes = await getAllRecipes()
  const recipe = recipes.find((r) => r.slug === params.slug)

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

  return <RecipeContent recipe={recipe} />
}
