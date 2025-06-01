"use client"

import { useEffect, useState, useMemo } from "react"
import { useSearchParams } from "next/navigation"
import RecipeGrid from "./recipe-grid"
import SearchAndFilter from "./search-and-filter"
import type { Recipe } from "@/lib/recipes"

export default function RecipeProvider() {
  const searchParams = useSearchParams()
  const [allRecipes, setAllRecipes] = useState<Recipe[]>([])
  const [categories, setCategories] = useState<string[]>([])
  const [loading, setLoading] = useState(true)

  // Load initial data
  useEffect(() => {
    const loadData = async () => {
      try {
        const { getAllRecipes, getCategories } = await import("@/lib/recipes")
        const recipes = await getAllRecipes()
        const cats = await getCategories()

        setAllRecipes(recipes)
        setCategories(cats)
      } catch (error) {
        console.error("Error loading recipes:", error)
      } finally {
        setLoading(false)
      }
    }

    loadData()
  }, [])

  // Memoized filtered recipes to prevent unnecessary recalculations
  const filteredRecipes = useMemo(() => {
    const search = searchParams.get("search") || ""
    const category = searchParams.get("category") || "all"
    const cuisine = searchParams.get("cuisine") || "all"

    let filtered = allRecipes

    // Filter by search term
    if (search) {
      filtered = filtered.filter(
        (recipe) =>
          recipe.title.toLowerCase().includes(search.toLowerCase()) ||
          recipe.description.toLowerCase().includes(search.toLowerCase()) ||
          recipe.ingredients.some((ingredient) => ingredient.toLowerCase().includes(search.toLowerCase())) ||
          recipe.tags?.some((tag) => tag.toLowerCase().includes(search.toLowerCase())),
      )
    }

    // Filter by category
    if (category !== "all") {
      filtered = filtered.filter((recipe) => recipe.category.toLowerCase() === category.toLowerCase())
    }

    // Filter by cuisine
    if (cuisine !== "all") {
      filtered = filtered.filter((recipe) => recipe.cuisine.toLowerCase() === cuisine.toLowerCase())
    }

    return filtered
  }, [searchParams, allRecipes])

  if (loading) {
    return (
      <div className="text-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
        <p className="text-green-600">Carregando receitas...</p>
      </div>
    )
  }

  return (
    <>
      <SearchAndFilter categories={categories} />
      <RecipeGrid recipes={filteredRecipes} />
    </>
  )
}
