# Sabores do Brasil - Catálogo de Receitas Culinárias

Um site moderno e responsivo para catalogar e compartilhar receitas culinárias brasileiras e internacionais, construído com Next.js e otimizado para GitHub Pages.

## 🍳 Características

- **Listagem Detalhada**: Receitas com fotos, ingredientes, modo de preparo, tempo e rendimento
- **Busca e Filtros**: Sistema avançado de busca por ingredientes, categorias e tipos de culinária
- **Páginas Dinâmicas**: Categorias geradas automaticamente
- **Compartilhamento**: Botões integrados para redes sociais
- **Design Responsivo**: Adaptado para desktop, tablet e mobile
- **Gerenciamento em Markdown**: Receitas armazenadas em arquivos .md para fácil edição

## 🚀 Deploy Automático

Este projeto está configurado para deploy automático no GitHub Pages usando GitHub Actions.

### Configuração Inicial

1. **Fork ou Clone** este repositório
2. **Ative o GitHub Pages** nas configurações do repositório:
   - Vá em Settings > Pages
   - Source: Deploy from a branch
   - Branch: gh-pages
   - Folder: / (root)

3. **Configure o basePath** (se necessário):
   - Se o repositório não estiver na raiz da organização, edite `next.config.js`
   - Altere `basePath` para o nome do seu repositório

### Deploy Manual

\`\`\`bash
# Instalar dependências
npm install

# Build para produção
npm run build

# O conteúdo estático estará na pasta 'out'
\`\`\`

## 📁 Estrutura do Projeto

\`\`\`
├── app/                    # Páginas Next.js (App Router)
├── components/             # Componentes React reutilizáveis
├── content/recipes/        # Receitas em Markdown
├── lib/                    # Utilitários e funções
├── public/                 # Arquivos estáticos
├── .github/workflows/      # GitHub Actions
└── next.config.js         # Configuração do Next.js
\`\`\`

## 📝 Adicionando Receitas

Crie um novo arquivo `.md` na pasta `content/recipes/` seguindo este formato:

\`\`\`markdown
---
title: "Nome da Receita"
description: "Descrição breve da receita"
image: "/placeholder.svg?height=400&width=600"
category: "Categoria"
cuisine: "Tipo de Culinária"
prepTime: "Tempo de preparo"
servings: "Rendimento"
difficulty: "Fácil/Médio/Difícil"
tags: ["tag1", "tag2", "tag3"]
ingredients:
  - "Ingrediente 1"
  - "Ingrediente 2"
instructions:
  - "Passo 1"
  - "Passo 2"
---
\`\`\`

## 🎨 Personalização

### Cores do Tema

As cores podem ser personalizadas no arquivo `tailwind.config.ts`:

- **Verde**: Tons frescos e naturais
- **Amarelo**: Tons quentes e acolhedores  
- **Marrom**: Tons terrosos
- **Vermelho**: Para destaques

### Adicionando Categorias

As categorias são geradas automaticamente baseadas nas receitas. Para adicionar uma nova categoria, simplesmente use-a no frontmatter de uma receita.

## 🛠️ Tecnologias Utilizadas

- **Next.js 14** - Framework React com App Router
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização utilitária
- **Shadcn/ui** - Componentes de interface
- **Gray Matter** - Parser de frontmatter
- **Lucide React** - Ícones
- **GitHub Actions** - CI/CD automático

## 📱 Funcionalidades Responsivas

- Layout em grade adaptativo
- Menu mobile otimizado
- Imagens responsivas
- Tipografia escalável
- Touch-friendly em dispositivos móveis

## 🔧 Scripts Disponíveis

\`\`\`bash
npm run dev          # Servidor de desenvolvimento
npm run build        # Build para produção
npm run start        # Servidor de produção
npm run lint         # Verificação de código
\`\`\`

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-receita`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova receita'`)
4. Push para a branch (`git push origin feature/nova-receita`)
5. Abra um Pull Request

## 📞 Suporte

Para dúvidas ou sugestões, abra uma issue no repositório do GitHub.

---

Feito com ❤️ para amantes da boa comida!
