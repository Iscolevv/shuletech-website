"use client"

import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface MenuModalProps {
  isOpen: boolean
  onClose: () => void
}

export function MenuModal({ isOpen, onClose }: MenuModalProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [menuImages, setMenuImages] = useState<Array<{ src: string; title: string }>>([])

  useEffect(() => {
    const loadMenuImages = () => {
      const savedImages = localStorage.getItem("sdgb_menu_modal_images")
      if (savedImages) {
        const images = JSON.parse(savedImages)
        setMenuImages(
          images.map((img: any) => ({
            src: img.url,
            title: img.alt,
          })),
        )
      }
    }

    loadMenuImages()

    // Listen for storage changes from admin panel
    const handleStorageChange = () => {
      loadMenuImages()
    }

    window.addEventListener("storage", handleStorageChange)
    window.addEventListener("sdgb-data-update", handleStorageChange)

    return () => {
      window.removeEventListener("storage", handleStorageChange)
      window.removeEventListener("sdgb-data-update", handleStorageChange)
    }
  }, [isOpen])

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % menuImages.length)
  }

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + menuImages.length) % menuImages.length)
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return

      if (e.key === "ArrowRight") {
        e.preventDefault()
        nextImage()
      } else if (e.key === "ArrowLeft") {
        e.preventDefault()
        prevImage()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isOpen, menuImages.length])

  if (menuImages.length === 0) {
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">Our Full Menu</DialogTitle>
          </DialogHeader>
          <div className="p-6 text-center">
            <p className="text-muted-foreground">No menu images available yet. Please check back later!</p>
          </div>
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] p-0">
        <DialogHeader className="p-6 pb-0">
          <DialogTitle className="text-2xl font-bold">Our Full Menu</DialogTitle>
        </DialogHeader>
        <div className="relative p-6">
          <div className="relative">
            <img
              src={menuImages[currentIndex].src || "/placeholder.svg"}
              alt={menuImages[currentIndex].title}
              className="w-full h-auto max-h-[70vh] object-contain rounded-lg"
            />
            <div className="absolute inset-y-0 left-0 flex items-center">
              <Button variant="outline" size="icon" onClick={prevImage} className="ml-2 bg-white/90 hover:bg-white">
                <ChevronLeft className="w-6 h-6" />
              </Button>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center">
              <Button variant="outline" size="icon" onClick={nextImage} className="mr-2 bg-white/90 hover:bg-white">
                <ChevronRight className="w-6 h-6" />
              </Button>
            </div>
          </div>
          <div className="text-center mt-4">
            <p className="text-sm text-muted-foreground">
              {currentIndex + 1} / {menuImages.length} - {menuImages[currentIndex].title}
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
