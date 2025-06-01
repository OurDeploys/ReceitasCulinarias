import Link from "next/link"
import { ChefHat, Home, Search } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="bg-white/90 backdrop-blur-sm border-b border-brown-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <ChefHat className="h-8 w-8 text-green-600" />
            <span className="text-2xl font-bold text-green-800">Sabores do Brasil</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-green-700 hover:text-green-600 transition-colors">
              Início
            </Link>
            <Link href="/categoria/sobremesas" className="text-green-700 hover:text-green-600 transition-colors">
              Sobremesas
            </Link>
            <Link href="/categoria/pratos-principais" className="text-green-700 hover:text-green-600 transition-colors">
              Pratos Principais
            </Link>
            <Link href="/categoria/aperitivos" className="text-green-700 hover:text-green-600 transition-colors">
              Aperitivos
            </Link>
          </nav>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" asChild className="md:hidden">
              <Link href="/">
                <Home className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="ghost" size="sm" asChild className="md:hidden">
              <Link href="/?search=">
                <Search className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
