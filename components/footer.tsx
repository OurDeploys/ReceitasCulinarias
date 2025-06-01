import { ChefHat, Heart } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-green-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <ChefHat className="h-6 w-6 text-yellow-400" />
              <span className="text-xl font-bold">Sabores do Brasil</span>
            </div>
            <p className="text-green-200">
              Compartilhando receitas deliciosas e tradições culinárias que conectam pessoas e famílias.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Categorias</h3>
            <ul className="space-y-2 text-green-200">
              <li>
                <a href="/categoria/sobremesas" className="hover:text-yellow-400 transition-colors">
                  Sobremesas
                </a>
              </li>
              <li>
                <a href="/categoria/pratos-principais" className="hover:text-yellow-400 transition-colors">
                  Pratos Principais
                </a>
              </li>
              <li>
                <a href="/categoria/aperitivos" className="hover:text-yellow-400 transition-colors">
                  Aperitivos
                </a>
              </li>
              <li>
                <a href="/categoria/bebidas" className="hover:text-yellow-400 transition-colors">
                  Bebidas
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Sobre</h3>
            <p className="text-green-200">
              Este site foi criado com amor para preservar e compartilhar as melhores receitas da culinária brasileira e
              internacional.
            </p>
          </div>
        </div>

        <div className="border-t border-green-700 mt-8 pt-8 text-center">
          <p className="text-green-200 flex items-center justify-center gap-2">
            Feito com <Heart className="h-4 w-4 text-red-400" /> para amantes da boa comida
          </p>
        </div>
      </div>
    </footer>
  )
}
