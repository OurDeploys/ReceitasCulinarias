import { ChefHat } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-green-600 via-teal-500 to-emerald-600 text-white py-20">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative container mx-auto px-4 text-center">
        <div className="flex justify-center mb-6">
          <ChefHat className="h-16 w-16" />
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-6">Sabores do Brasil</h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          Descubra receitas deliciosas e tradicionais da culinária brasileira e internacional. Cada prato conta uma
          história, cada sabor desperta uma memória.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
            <Link href="#receitas">Explorar Receitas</Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-green-600 bg-transparent"
          >
            <Link href="/categoria/sobremesas">Ver Sobremesas</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
