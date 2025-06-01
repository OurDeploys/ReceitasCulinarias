import type { Recipe } from "@/types/recipe"

// Mock data for demonstration - in a real app, this would come from a CMS or API
const mockRecipes: Recipe[] = [
  {
    slug: "brigadeiro",
    title: "Brigadeiro Tradicional",
    description:
      "O doce mais amado do Brasil! Brigadeiro cremoso e irresistível, perfeito para qualquer ocasião especial.",
    image: "/brigadeiro.jpg?height=400&width=600",
    category: "Sobremesas",
    cuisine: "Brasileira",
    prepTime: "20 minutos",
    servings: "30 brigadeiros",
    difficulty: "Fácil",
    tags: ["doce", "festa", "tradicional", "chocolate"],
    ingredients: [
      "1 lata de leite condensado (395g)",
      "1 colher de sopa de manteiga",
      "3 colheres de sopa de chocolate em pó",
      "Chocolate granulado para decorar",
    ],
    instructions: [
      "Em uma panela, misture o leite condensado, a manteiga e o chocolate em pó.",
      "Leve ao fogo médio, mexendo sempre com uma colher de pau.",
      "Cozinhe até que a mistura desgrude do fundo da panela (cerca de 10-15 minutos).",
      "Despeje a mistura em um prato untado com manteiga e deixe esfriar.",
      "Com as mãos untadas, faça bolinhas e passe no chocolate granulado.",
      "Coloque em forminhas de papel e sirva.",
    ],
  },
  {
    slug: "pao-de-acucar",
    title: "Pão de Açúcar",
    description: "Pão doce tradicional brasileiro, macio e saboroso, perfeito para o café da manhã ou lanche da tarde.",
    image: "/paodoce.jpg?height=400&width=600",
    category: "Pães e Bolos",
    cuisine: "Brasileira",
    prepTime: "2 horas",
    servings: "2 pães",
    difficulty: "Médio",
    tags: ["pão", "doce", "café da manhã", "tradicional"],
    ingredients: [
      "500g de farinha de trigo",
      "200ml de leite morno",
      "100g de açúcar",
      "2 ovos",
      "50g de manteiga",
      "10g de fermento biológico seco",
      "1 colher de chá de sal",
      "1 gema para pincelar",
    ],
    instructions: [
      "Dissolva o fermento no leite morno com uma colher de açúcar. Deixe descansar por 10 minutos.",
      "Em uma tigela grande, misture a farinha, o açúcar restante e o sal.",
      "Adicione os ovos, a manteiga derretida e a mistura do fermento.",
      "Sove a massa por 10 minutos até ficar lisa e elástica.",
      "Coloque em uma tigela untada, cubra e deixe crescer por 1 hora.",
      "Divida a massa em duas partes, modele os pães e coloque em formas untadas.",
      "Deixe crescer por mais 30 minutos.",
      "Pincele com gema batida e asse a 180°C por 30-35 minutos.",
    ],
  },
  {
    slug: "feijoada",
    title: "Feijoada Completa",
    description: "O prato mais tradicional do Brasil! Feijoada completa com todos os acompanhamentos clássicos.",
    image: "/feijoada.jpg?height=400&width=600",
    category: "Pratos Principais",
    cuisine: "Brasileira",
    prepTime: "4 horas",
    servings: "8 pessoas",
    difficulty: "Difícil",
    tags: ["tradicional", "festa", "feijão", "carne"],
    ingredients: [
      "500g de feijão preto",
      "300g de carne seca",
      "300g de costela de porco",
      "200g de linguiça calabresa",
      "200g de bacon",
      "150g de paio",
      "2 cebolas grandes",
      "4 dentes de alho",
      "2 folhas de louro",
      "Sal e pimenta a gosto",
      "Óleo para refogar",
    ],
    instructions: [
      "Deixe o feijão de molho na véspera. Dessalgue as carnes salgadas.",
      "Cozinhe o feijão em panela de pressão por 20 minutos.",
      "Em uma panela grande, refogue a cebola e o alho no óleo.",
      "Adicione todas as carnes e doure bem.",
      "Acrescente o feijão com o caldo, as folhas de louro.",
      "Cozinhe em fogo baixo por 2 horas, mexendo ocasionalmente.",
      "Retire algumas conchas de feijão, amasse e retorne à panela para engrossar.",
      "Ajuste o tempero e cozinhe por mais 30 minutos.",
      "Sirva com arroz, couve refogada, farofa e laranja.",
    ],
  },
  {
    slug: "coxinha",
    title: "Coxinha de Frango",
    description: "Salgadinho brasileiro mais famoso! Coxinha crocante por fora e cremosa por dentro.",
    image: "/coxinha.jpg?height=400&width=600",
    category: "Aperitivos",
    cuisine: "Brasileira",
    prepTime: "1 hora e 30 minutos",
    servings: "20 coxinhas",
    difficulty: "Médio",
    tags: ["salgado", "festa", "frango", "frito"],
    ingredients: [
      "2 xícaras de farinha de trigo",
      "2 xícaras de caldo de frango",
      "1 colher de sopa de manteiga",
      "300g de frango desfiado",
      "1 cebola pequena picada",
      "2 dentes de alho",
      "Sal, pimenta e temperos a gosto",
      "2 ovos batidos",
      "Farinha de rosca para empanar",
      "Óleo para fritar",
    ],
    instructions: [
      "Refogue o frango desfiado com cebola, alho e temperos. Reserve.",
      "Ferva o caldo de frango com manteiga e sal.",
      "Adicione a farinha de uma vez e mexa vigorosamente até formar uma massa lisa.",
      "Deixe esfriar e sove até ficar homogênea.",
      "Abra a massa, coloque o recheio e modele as coxinhas.",
      "Passe no ovo batido e depois na farinha de rosca.",
      "Frite em óleo quente até dourar.",
      "Escorra em papel absorvente e sirva quente.",
    ],
  },
  {
    slug: "acai-bowl",
    title: "Açaí Bowl Tradicional",
    description: "Tigela de açaí cremoso com granola, frutas frescas e mel. Perfeito para um café da manhã saudável!",
    image: "/acai.jpg?height=400&width=600",
    category: "Bebidas",
    cuisine: "Brasileira",
    prepTime: "10 minutos",
    servings: "2 bowls",
    difficulty: "Fácil",
    tags: ["saudável", "açaí", "frutas", "café da manhã"],
    ingredients: [
      "200g de polpa de açaí congelada",
      "1 banana congelada",
      "100ml de leite ou leite vegetal",
      "1 colher de sopa de mel",
      "Granola a gosto",
      "Frutas frescas (banana, morango, kiwi)",
      "Coco ralado",
      "Castanhas picadas",
    ],
    instructions: [
      "Bata no liquidificador o açaí, banana congelada e leite até formar um creme espesso.",
      "Adicione mel a gosto e bata mais um pouco.",
      "Despeje em tigelas geladas.",
      "Decore com granola, frutas frescas picadas.",
      "Finalize com coco ralado e castanhas.",
      "Sirva imediatamente com uma colher.",
    ],
  },
]

export async function getAllRecipes(): Promise<Recipe[]> {
  // Simulate async operation
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockRecipes), 100)
  })
}

export async function getRecipeBySlug(slug: string): Promise<Recipe | null> {
  // Simulate async operation
  return new Promise((resolve) => {
    setTimeout(() => {
      const recipe = mockRecipes.find((r) => r.slug === slug)
      resolve(recipe || null)
    }, 100)
  })
}

export async function getCategories(): Promise<string[]> {
  const recipes = await getAllRecipes()
  const categories = [...new Set(recipes.map((recipe) => recipe.category))]
  return categories.sort()
}

export async function getCuisines(): Promise<string[]> {
  const recipes = await getAllRecipes()
  const cuisines = [...new Set(recipes.map((recipe) => recipe.cuisine))]
  return cuisines.sort()
}
