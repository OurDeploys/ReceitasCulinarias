"use client"

import { useState, useEffect, useCallback } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface SearchAndFilterProps {
  categories: string[]
}

export default function SearchAndFilter({ categories }: SearchAndFilterProps) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [search, setSearch] = useState(searchParams.get("search") || "")
  const [category, setCategory] = useState(searchParams.get("category") || "all")
  const [cuisine, setCuisine] = useState(searchParams.get("cuisine") || "all")

  const cuisines = ["Brasileira", "Italiana", "Asiática", "Francesa", "Mexicana"]

  const updateURL = useCallback(
    (searchValue: string, categoryValue: string, cuisineValue: string) => {
      const params = new URLSearchParams()
      if (searchValue) params.set("search", searchValue)
      if (categoryValue !== "all") params.set("category", categoryValue)
      if (cuisineValue !== "all") params.set("cuisine", cuisineValue)

      const queryString = params.toString()
      const newURL = queryString ? `/?${queryString}` : "/"

      // Only update if the URL is actually different
      if (window.location.pathname + window.location.search !== newURL) {
        router.push(newURL)
      }
    },
    [router],
  )

  // Debounced search update
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      updateURL(search, category, cuisine)
    }, 300)

    return () => clearTimeout(timeoutId)
  }, [search, category, cuisine, updateURL])

  const clearFilters = () => {
    setSearch("")
    setCategory("all")
    setCuisine("all")
  }

  const hasActiveFilters = search || category !== "all" || cuisine !== "all"

  return (
    <div className="mb-8 space-y-4">
      <div className="flex flex-col md:flex-row gap-4">
        {/* Search */}
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-400 h-4 w-4" />
          <Input
            placeholder="Buscar receitas ou ingredientes..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10 bg-white/80 backdrop-blur-sm border-green-200 focus:border-green-400"
          />
        </div>

        {/* Category Filter */}
        <Select value={category} onValueChange={setCategory}>
          <SelectTrigger className="w-full md:w-48 bg-white/80 backdrop-blur-sm border-green-200">
            <SelectValue placeholder="Categoria" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todas as categorias</SelectItem>
            {categories.map((cat) => (
              <SelectItem key={cat} value={cat}>
                {cat}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* Cuisine Filter */}
        <Select value={cuisine} onValueChange={setCuisine}>
          <SelectTrigger className="w-full md:w-48 bg-white/80 backdrop-blur-sm border-green-200">
            <SelectValue placeholder="Culinária" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todas as culinárias</SelectItem>
            {cuisines.map((cuis) => (
              <SelectItem key={cuis} value={cuis}>
                {cuis}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* Clear Filters */}
        {hasActiveFilters && (
          <Button
            variant="outline"
            onClick={clearFilters}
            className="border-green-300 text-green-700 hover:bg-green-50"
          >
            Limpar Filtros
          </Button>
        )}
      </div>

      {/* Active Filters */}
      {hasActiveFilters && (
        <div className="flex flex-wrap gap-2">
          {search && (
            <Badge variant="secondary" className="bg-green-100 text-green-800">
              Busca: {search}
            </Badge>
          )}
          {category !== "all" && (
            <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
              Categoria: {category}
            </Badge>
          )}
          {cuisine !== "all" && (
            <Badge variant="secondary" className="bg-red-100 text-red-800">
              Culinária: {cuisine}
            </Badge>
          )}
        </div>
      )}
    </div>
  )
}
