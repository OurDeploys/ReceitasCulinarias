"use client"

import { Facebook, Twitter, Share2, LinkIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { toast } from "@/hooks/use-toast"

interface ShareButtonsProps {
  title: string
}

export default function ShareButtons({ title }: ShareButtonsProps) {
  const currentUrl = typeof window !== "undefined" ? window.location.href : ""

  const shareOnFacebook = () => {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`
    window.open(url, "_blank", "width=600,height=400")
  }

  const shareOnTwitter = () => {
    const text = `Confira esta receita deliciosa: ${title}`
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(currentUrl)}`
    window.open(url, "_blank", "width=600,height=400")
  }

  const shareNative = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: title,
          text: `Confira esta receita deliciosa: ${title}`,
          url: currentUrl,
        })
      } catch (error) {
        console.log("Erro ao compartilhar:", error)
      }
    } else {
      copyToClipboard()
    }
  }

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl)
      toast({
        title: "Link copiado!",
        description: "O link da receita foi copiado para a área de transferência.",
      })
    } catch (error) {
      console.log("Erro ao copiar:", error)
    }
  }

  return (
    <div className="flex gap-2 flex-wrap">
      <Button
        variant="outline"
        size="sm"
        onClick={shareOnFacebook}
        className="border-blue-300 text-blue-700 hover:bg-blue-50"
      >
        <Facebook className="h-4 w-4 mr-2" />
        Facebook
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={shareOnTwitter}
        className="border-sky-300 text-sky-700 hover:bg-sky-50"
      >
        <Twitter className="h-4 w-4 mr-2" />
        Twitter
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={shareNative}
        className="border-green-300 text-green-700 hover:bg-green-50"
      >
        <Share2 className="h-4 w-4 mr-2" />
        Compartilhar
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={copyToClipboard}
        className="border-green-300 text-green-700 hover:bg-green-50"
      >
        <LinkIcon className="h-4 w-4 mr-2" />
        Copiar Link
      </Button>
    </div>
  )
}
