import Hero from "@/components/hero"
import RecipeProvider from "@/components/recipe-provider"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-teal-50">
      <Hero />
      <main className="container mx-auto px-4 py-8">
        <RecipeProvider />
      </main>
    </div>
  )
}
