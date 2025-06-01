import Image from "next/image"
import Link from "next/link"
import { Clock, Users } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { Recipe } from "@/lib/recipes"

interface RecipeCardProps {
  recipe: Recipe
}

export default function RecipeCard({ recipe }: RecipeCardProps) {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 bg-white/80 backdrop-blur-sm border-green-200 hover:border-green-300">
      <Link href={`/receita/${recipe.slug}`}>
        <div className="relative h-48 overflow-hidden rounded-t-lg">
          <Image
            src={recipe.image || "/placeholder.svg"}
            alt={recipe.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-2 right-2">
            <Badge variant="secondary" className="bg-green-100 text-green-800">
              {recipe.category}
            </Badge>
          </div>
        </div>
        <CardContent className="p-4">
          <h3 className="font-bold text-lg text-green-800 mb-2 line-clamp-2">{recipe.title}</h3>
          <p className="text-green-700 text-sm mb-3 line-clamp-2">{recipe.description}</p>
          <div className="flex items-center gap-4 text-sm text-green-600">
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{recipe.prepTime}</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="h-4 w-4" />
              <span>{recipe.servings}</span>
            </div>
          </div>
        </CardContent>
        <CardFooter className="p-4 pt-0">
          <div className="flex flex-wrap gap-1">
            {recipe.tags?.slice(0, 2).map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs border-green-300 text-green-600">
                {tag}
              </Badge>
            ))}
          </div>
        </CardFooter>
      </Link>
    </Card>
  )
}
