import { getCategories, getAllRecipes } from "@/lib/recipes"
import CategoryContent from "./category-content"

export async function generateStaticParams() {
  const categories = await getCategories()
  return categories.map((category) => ({
    category: category.toLowerCase().replace(/\s+/g, "-"),
  }))
}

export default async function CategoryPage({
  params,
}: {
  params: { category: string }
}) {
  const allRecipes = await getAllRecipes()
  const decodedCategory = params.category.replace(/-/g, " ")
  const categoryRecipes = allRecipes.filter(
    (recipe) => recipe.category.toLowerCase() === decodedCategory.toLowerCase()
  )
  const categoryName = categoryRecipes[0]?.category || decodedCategory

  return <CategoryContent recipes={categoryRecipes} categoryName={categoryName} />
}
