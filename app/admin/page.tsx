"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Lock, LogOut, Plus, Trash2, Edit, Save, X, ImageIcon, Menu } from "lucide-react"
import { useRouter } from "next/navigation"

interface MenuItem {
  id: string
  title: string
  description: string
  price: string
  image: string
}

interface GalleryItem {
  id: string
  url: string
  alt: string
}

interface MenuModalImage {
  id: string
  url: string
  alt: string
}

const INITIAL_MENU_ITEMS: MenuItem[] = [
  {
    id: "1",
    title: "Buffet Menu",
    description: "Pilau, Chapati, Risibisi Rice, Beef Stew, Chicken Dry Fry, Greens, Dessert & Beverage",
    price: "Ksh. 1,500 Per Person (Min 10)",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/files-blob/IMG_20251015_213012-nchxkzcNaHcZy2Xs8xkYn0u8H0uRxi.jpg",
  },
  {
    id: "2",
    title: "Platter Menu",
    description: "Wanili Platter, Choma Platter, Chef Platter & Fast Food Platter options",
    price: "From Ksh. 1,850 Per Platter",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/files-blob/IMG_20251015_213103-YQ47VHg34UMYY5JYUfRu9cqP83S6os.jpg",
  },
  {
    id: "3",
    title: "Ala Carte Menu",
    description: "Burgers, Chef's Specialties, Steaks, Oriental Selection & Smoke Pit Corner",
    price: "View Full Menu",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/files-blob/IMG_20251015_213402-Tu5j6hss64bUfJu12Jbvp5cVJdzWOw.jpg",
  },
  {
    id: "4",
    title: "Baby Shower Package",
    description: "Celebrate your special day with us! Indoor or garden experience with buffet service",
    price: "Ksh. 1,500 Per Person (Min 10)",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/files-blob/IMG_20251015_213103-YQ47VHg34UMYY5JYUfRu9cqP83S6os.jpg",
  },
  {
    id: "5",
    title: "Graduation Package",
    description: "Personalize your buffet experience with garden or indoor setting. Photography available @3500/",
    price: "=1500/ Per Person",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/files-blob/IMG_20251015_213127-60lbTgLg852IbRqRvzJGKe5GdLoP4o.jpg",
  },
  {
    id: "6",
    title: "Custom Cakes",
    description: "Black Forest, Red Velvet, Chocolate, Fruit Cakes & more. Wedding & birthday cakes available",
    price: "From Ksh. 1,800 Per Kg",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/files-blob/IMG_20251015_213425-l9QPjr7hvDSMaOrOtnKAT1vqPqNimw.jpg",
  },
]

const INITIAL_GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/files-blob/IMG_20251015_213045-lv3uBaiMwVT60x3f01JMfl7z5JEXTi.jpg",
    alt: "Delicious dish",
  },
  {
    id: "g2",
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/files-blob/IMG_20251015_213151-nRDLulke6hqB3epgstCiGUhj8HKenB.jpg",
    alt: "Fresh food",
  },
  {
    id: "g3",
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/files-blob/IMG_20251015_213222-4ohrFMELv87xihGJp9271ZZnVXwdyG.jpg",
    alt: "Tasty meal",
  },
  {
    id: "g4",
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/files-blob/IMG_20251015_213335-3GD0n9b0aviItZvp2adUxnZfk3WzkF.jpg",
    alt: "Grilled specialty",
  },
  {
    id: "g5",
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/files-blob/IMG_20251015_213402-Tu5j6hss64bUfJu12Jbvp5cVJdzWOw.jpg",
    alt: "Signature dish",
  },
  {
    id: "g6",
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/files-blob/IMG_20251015_213425-l9QPjr7hvDSMaOrOtnKAT1vqPqNimw.jpg",
    alt: "Delicious meal",
  },
  {
    id: "g7",
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2025-10-15-22-08-11-693_com.android.chrome-ric2eboMehuwQ11PMMtuJNYNH9bRIk.jpg",
    alt: "Fresh preparation",
  },
  {
    id: "g8",
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/files-blob/IMG_20251015_213027-8Qn53hzdC63erBZnnsAFAjnJ85f7Mi.jpg",
    alt: "Specialty item",
  },
]

const INITIAL_MENU_MODAL_IMAGES: MenuModalImage[] = [
  {
    id: "m1",
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/files-blob/IMG_20251015_213012-nchxkzcNaHcZy2Xs8xkYn0u8H0uRxi.jpg",
    alt: "Buffet Menu",
  },
  {
    id: "m2",
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/files-blob/IMG_20251015_213027-8Qn53hzdC63erBZnnsAFAjnJ85f7Mi.jpg",
    alt: "Get Together Menu",
  },
  {
    id: "m3",
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/files-blob/IMG_20251015_213045-lv3uBaiMwVT60x3f01JMfl7z5JEXTi.jpg",
    alt: "Brunch Buffet",
  },
  {
    id: "m4",
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/files-blob/IMG_20251015_213103-YQ47VHg34UMYY5JYUfRu9cqP83S6os.jpg",
    alt: "Baby Shower Package",
  },
  {
    id: "m5",
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/files-blob/IMG_20251015_213127-60lbTgLg852IbRqRvzJGKe5GdLoP4o.jpg",
    alt: "Graduation Package",
  },
  {
    id: "m6",
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/files-blob/IMG_20251015_213151-nRDLulke6hqB3epgstCiGUhj8HKenB.jpg",
    alt: "Picnic Menu",
  },
  {
    id: "m7",
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/files-blob/IMG_20251015_213335-3GD0n9b0aviItZvp2adUxnZfk3WzkF.jpg",
    alt: "Barister's Corner",
  },
  {
    id: "m8",
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/files-blob/IMG_20251015_213402-Tu5j6hss64bUfJu12Jbvp5cVJdzWOw.jpg",
    alt: "Ala Carte Menu",
  },
  {
    id: "m9",
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/files-blob/IMG_20251015_213425-l9QPjr7hvDSMaOrOtnKAT1vqPqNimw.jpg",
    alt: "Su Cakes Pricelist",
  },
  {
    id: "m10",
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/files-blob/IMG_20251015_213222-4ohrFMELv87xihGJp9271ZZnVXwdyG.jpg",
    alt: "Su Platter Menu",
  },
]

export default function AdminPage() {
  const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  // Menu management
  const [menuItems, setMenuItems] = useState<MenuItem[]>([])
  const [editingItem, setEditingItem] = useState<string | null>(null)
  const [editingValues, setEditingValues] = useState<Partial<MenuItem>>({})
  const [newItem, setNewItem] = useState<Partial<MenuItem>>({})

  // Gallery management
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([])
  const [newGalleryUrl, setNewGalleryUrl] = useState("")
  const [newGalleryAlt, setNewGalleryAlt] = useState("")

  // Menu modal management
  const [menuModalImages, setMenuModalImages] = useState<MenuModalImage[]>([])
  const [editingModalImage, setEditingModalImage] = useState<string | null>(null)
  const [editingModalValues, setEditingModalValues] = useState<Partial<MenuModalImage>>({})
  const [newModalImageUrl, setNewModalImageUrl] = useState("")
  const [newModalImageAlt, setNewModalImageAlt] = useState("")

  const [heroImages, setHeroImages] = useState({
    left: "https://blob.v0.app/Ql8Wd.jpg",
    right:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/files-blob/IMG_20251015_213151-nRDLulke6hqB3epgstCiGUhj8HKenB.jpg",
  })

  useEffect(() => {
    // Check if already logged in
    const auth = localStorage.getItem("sdgb_admin_auth")
    if (auth === "true") {
      setIsAuthenticated(true)
      loadData()
    }
  }, [])

  const loadData = () => {
    const savedMenu = localStorage.getItem("sdgb_menu_items")
    setMenuItems(savedMenu ? JSON.parse(savedMenu) : INITIAL_MENU_ITEMS)

    const savedGallery = localStorage.getItem("sdgb_gallery_items")
    setGalleryItems(savedGallery ? JSON.parse(savedGallery) : INITIAL_GALLERY_ITEMS)

    const savedModalImages = localStorage.getItem("sdgb_menu_modal_images")
    setMenuModalImages(savedModalImages ? JSON.parse(savedModalImages) : INITIAL_MENU_MODAL_IMAGES)

    const savedHero = localStorage.getItem("sdgb_hero_images")
    if (savedHero) {
      setHeroImages(JSON.parse(savedHero))
    }
  }

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (email === "sudustygrill@gmail.com" && password === "12345678") {
      setIsAuthenticated(true)
      localStorage.setItem("sdgb_admin_auth", "true")
      loadData()
      setError("")
    } else {
      setError("Invalid email or password")
    }
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    localStorage.removeItem("sdgb_admin_auth")
    router.push("/")
  }

  const saveMenuItems = (items: MenuItem[]) => {
    localStorage.setItem("sdgb_menu_items", JSON.stringify(items))
    setMenuItems(items)
    window.dispatchEvent(new Event("storage"))
    window.dispatchEvent(new Event("sdgb-data-update"))
  }

  const saveGalleryItems = (items: GalleryItem[]) => {
    localStorage.setItem("sdgb_gallery_items", JSON.stringify(items))
    setGalleryItems(items)
    window.dispatchEvent(new Event("storage"))
    window.dispatchEvent(new Event("sdgb-data-update"))
  }

  const saveMenuModalImages = (items: MenuModalImage[]) => {
    localStorage.setItem("sdgb_menu_modal_images", JSON.stringify(items))
    setMenuModalImages(items)
    window.dispatchEvent(new Event("storage"))
    window.dispatchEvent(new Event("sdgb-data-update"))
  }

  const saveHeroImages = (images: any) => {
    localStorage.setItem("sdgb_hero_images", JSON.stringify(images))
    setHeroImages(images)
    window.dispatchEvent(new Event("storage"))
    window.dispatchEvent(new Event("sdgb-data-update"))
  }

  const handleFileUpload = async (
    e: React.ChangeEvent<HTMLInputElement>,
    type: "menu" | "gallery" | "modal" | "hero-left" | "hero-right",
  ) => {
    const file = e.target.files?.[0]
    if (!file) return

    // Convert file to base64 or blob URL for preview
    const reader = new FileReader()
    reader.onloadend = () => {
      const imageUrl = reader.result as string

      if (type === "menu") {
        setNewItem({ ...newItem, image: imageUrl })
      } else if (type === "gallery") {
        setNewGalleryUrl(imageUrl)
      } else if (type === "modal") {
        setNewModalImageUrl(imageUrl)
      } else if (type === "hero-left") {
        const newHero = { ...heroImages, left: imageUrl }
        saveHeroImages(newHero)
      } else if (type === "hero-right") {
        const newHero = { ...heroImages, right: imageUrl }
        saveHeroImages(newHero)
      }
    }
    reader.readAsDataURL(file)
  }

  const addMenuItem = () => {
    if (newItem.title && newItem.description && newItem.price && newItem.image) {
      const item: MenuItem = {
        id: Date.now().toString(),
        title: newItem.title,
        description: newItem.description,
        price: newItem.price,
        image: newItem.image,
      }
      saveMenuItems([...menuItems, item])
      setNewItem({})
    }
  }

  const deleteMenuItem = (id: string) => {
    if (confirm("Are you sure you want to delete this menu item?")) {
      saveMenuItems(menuItems.filter((item) => item.id !== id))
    }
  }

  const startEditingMenuItem = (item: MenuItem) => {
    setEditingItem(item.id)
    setEditingValues({ ...item })
  }

  const saveEditedMenuItem = () => {
    if (editingItem) {
      saveMenuItems(menuItems.map((item) => (item.id === editingItem ? { ...item, ...editingValues } : item)))
      setEditingItem(null)
      setEditingValues({})
    }
  }

  const addGalleryItem = () => {
    if (newGalleryUrl) {
      const item: GalleryItem = {
        id: Date.now().toString(),
        url: newGalleryUrl,
        alt: newGalleryAlt || "Gallery image",
      }
      saveGalleryItems([...galleryItems, item])
      setNewGalleryUrl("")
      setNewGalleryAlt("")
    }
  }

  const deleteGalleryItem = (id: string) => {
    if (confirm("Are you sure you want to delete this gallery item?")) {
      saveGalleryItems(galleryItems.filter((item) => item.id !== id))
    }
  }

  const addMenuModalImage = () => {
    if (newModalImageUrl) {
      const item: MenuModalImage = {
        id: Date.now().toString(),
        url: newModalImageUrl,
        alt: newModalImageAlt || "Menu image",
      }
      saveMenuModalImages([...menuModalImages, item])
      setNewModalImageUrl("")
      setNewModalImageAlt("")
    }
  }

  const startEditingModalImage = (item: MenuModalImage) => {
    setEditingModalImage(item.id)
    setEditingModalValues({ ...item })
  }

  const saveEditedModalImage = () => {
    if (editingModalImage) {
      saveMenuModalImages(
        menuModalImages.map((item) => (item.id === editingModalImage ? { ...item, ...editingModalValues } : item)),
      )
      setEditingModalImage(null)
      setEditingModalValues({})
    }
  }

  const deleteMenuModalImage = (id: string) => {
    if (confirm("Are you sure you want to delete this menu image?")) {
      saveMenuModalImages(menuModalImages.filter((item) => item.id !== id))
    }
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#8B2635]/10 to-background flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <div className="w-16 h-16 rounded-full bg-[#8B2635]/10 flex items-center justify-center mx-auto mb-4">
              <Lock className="w-8 h-8 text-[#8B2635]" />
            </div>
            <CardTitle className="text-2xl">Staff Login</CardTitle>
            <p className="text-sm text-muted-foreground">Su Cakes & Dusty Grill Bistro</p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="sudustygrill@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              {error && <p className="text-sm text-red-500">{error}</p>}
              <Button type="submit" className="w-full bg-[#8B2635] hover:bg-[#6B1D28]">
                Login
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b border-border bg-background/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-[#8B2635]">SDGB Admin Panel</h1>
            <p className="text-sm text-muted-foreground">Manage your restaurant content</p>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" onClick={() => router.push("/")}>
              View Website
            </Button>
            <Button variant="destructive" onClick={handleLogout}>
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8 space-y-8">
        {/* Landing Page Hero Images */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ImageIcon className="w-5 h-5" />
              Landing Page Hero Images
            </CardTitle>
            <p className="text-sm text-muted-foreground">
              Manage the two images shown on the landing page hero section
            </p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="font-semibold">Left Image</h3>
                <img
                  src={heroImages.left || "/placeholder.svg"}
                  alt="Hero left"
                  className="w-full h-48 object-cover rounded-lg"
                />
                <div className="space-y-2">
                  <Label>Image URL</Label>
                  <Input
                    value={heroImages.left}
                    onChange={(e) => saveHeroImages({ ...heroImages, left: e.target.value })}
                    placeholder="https://example.com/image.jpg"
                  />
                </div>
                <div className="space-y-2">
                  <Label>Or Upload from Device</Label>
                  <Input type="file" accept="image/*" onChange={(e) => handleFileUpload(e, "hero-left")} />
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="font-semibold">Right Image</h3>
                <img
                  src={heroImages.right || "/placeholder.svg"}
                  alt="Hero right"
                  className="w-full h-48 object-cover rounded-lg"
                />
                <div className="space-y-2">
                  <Label>Image URL</Label>
                  <Input
                    value={heroImages.right}
                    onChange={(e) => saveHeroImages({ ...heroImages, right: e.target.value })}
                    placeholder="https://example.com/image.jpg"
                  />
                </div>
                <div className="space-y-2">
                  <Label>Or Upload from Device</Label>
                  <Input type="file" accept="image/*" onChange={(e) => handleFileUpload(e, "hero-right")} />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Menu Modal Images Management */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Menu className="w-5 h-5" />
              Menu Modal Images (View Full Menu Button)
            </CardTitle>
            <p className="text-sm text-muted-foreground">
              Manage the images shown when customers click "View Full Menu"
            </p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="border border-border rounded-lg p-4 space-y-4">
              <h3 className="font-semibold">Add New Menu Image</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="modalImageUrl">Image URL</Label>
                  <Input
                    id="modalImageUrl"
                    placeholder="https://example.com/menu-image.jpg"
                    value={newModalImageUrl}
                    onChange={(e) => setNewModalImageUrl(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="modalImageFile">Or Upload from Device</Label>
                  <Input
                    id="modalImageFile"
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleFileUpload(e, "modal")}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="modalImageAlt">Description</Label>
                <Input
                  id="modalImageAlt"
                  placeholder="Buffet Menu"
                  value={newModalImageAlt}
                  onChange={(e) => setNewModalImageAlt(e.target.value)}
                />
              </div>
              <Button onClick={addMenuModalImage} className="bg-[#8B2635] hover:bg-[#6B1D28]">
                <Plus className="w-4 h-4 mr-2" />
                Add Menu Image
              </Button>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold">Existing Menu Images ({menuModalImages.length})</h3>
              <div className="grid gap-4">
                {menuModalImages.map((item) => (
                  <Card key={item.id}>
                    <CardContent className="p-4">
                      {editingModalImage === item.id ? (
                        <div className="space-y-4">
                          <div className="flex gap-4">
                            <img
                              src={editingModalValues.url || "/placeholder.svg"}
                              alt={editingModalValues.alt}
                              className="w-32 h-32 object-cover rounded-lg"
                            />
                            <div className="flex-1 space-y-2">
                              <Input
                                placeholder="Image URL"
                                value={editingModalValues.url || ""}
                                onChange={(e) => setEditingModalValues({ ...editingModalValues, url: e.target.value })}
                              />
                              <Input
                                placeholder="Description"
                                value={editingModalValues.alt || ""}
                                onChange={(e) => setEditingModalValues({ ...editingModalValues, alt: e.target.value })}
                              />
                              <Input
                                type="file"
                                accept="image/*"
                                onChange={(e) => {
                                  const file = e.target.files?.[0]
                                  if (file) {
                                    const reader = new FileReader()
                                    reader.onloadend = () => {
                                      setEditingModalValues({ ...editingModalValues, url: reader.result as string })
                                    }
                                    reader.readAsDataURL(file)
                                  }
                                }}
                              />
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <Button
                              size="sm"
                              onClick={saveEditedModalImage}
                              className="bg-[#2C5530] hover:bg-[#1a3d1f]"
                            >
                              <Save className="w-4 h-4 mr-2" />
                              Save
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => {
                                setEditingModalImage(null)
                                setEditingModalValues({})
                              }}
                            >
                              <X className="w-4 h-4 mr-2" />
                              Cancel
                            </Button>
                          </div>
                        </div>
                      ) : (
                        <div className="flex items-center gap-4">
                          <img
                            src={item.url || "/placeholder.svg"}
                            alt={item.alt}
                            className="w-32 h-32 object-cover rounded-lg"
                          />
                          <div className="flex-1">
                            <p className="font-medium">{item.alt}</p>
                            <p className="text-sm text-muted-foreground truncate">{item.url}</p>
                          </div>
                          <div className="flex gap-2">
                            <Button size="sm" variant="outline" onClick={() => startEditingModalImage(item)}>
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button size="sm" variant="destructive" onClick={() => deleteMenuModalImage(item.id)}>
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Gallery Management */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ImageIcon className="w-5 h-5" />
              Gallery Management (Our Delicious Dishes and Gallery Section)
            </CardTitle>
            <p className="text-sm text-muted-foreground">
              Manage photos shown in the "Our Delicious Dishes and Gallery" section
            </p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="border border-border rounded-lg p-4 space-y-4">
              <h3 className="font-semibold">Add New Gallery Item</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="galleryUrl">Image/Video URL</Label>
                  <Input
                    id="galleryUrl"
                    placeholder="https://example.com/image.jpg"
                    value={newGalleryUrl}
                    onChange={(e) => setNewGalleryUrl(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="galleryFile">Or Upload from Device</Label>
                  <Input
                    id="galleryFile"
                    type="file"
                    accept="image/*,video/*"
                    onChange={(e) => handleFileUpload(e, "gallery")}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="galleryAlt">Description (Alt Text)</Label>
                <Input
                  id="galleryAlt"
                  placeholder="Delicious burger"
                  value={newGalleryAlt}
                  onChange={(e) => setNewGalleryAlt(e.target.value)}
                />
              </div>
              <Button onClick={addGalleryItem} className="bg-[#2C5530] hover:bg-[#1a3d1f]">
                <Plus className="w-4 h-4 mr-2" />
                Add to Gallery
              </Button>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold">Existing Gallery Items ({galleryItems.length})</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {galleryItems.map((item) => (
                  <div key={item.id} className="relative group">
                    <img
                      src={item.url || "/placeholder.svg"}
                      alt={item.alt}
                      className="w-full h-32 object-cover rounded-lg"
                    />
                    <div className="absolute bottom-2 left-2 right-2 bg-black/70 text-white text-xs p-1 rounded truncate">
                      {item.alt}
                    </div>
                    <Button
                      size="sm"
                      variant="destructive"
                      className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                      onClick={() => deleteGalleryItem(item.id)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Menu Items Management */}
        <Card>
          <CardHeader>
            <CardTitle>Menu Items Management</CardTitle>
            <p className="text-sm text-muted-foreground">
              Manage menu cards shown in the "Our Menus" section. All items can be edited or deleted.
            </p>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Add New Menu Item */}
            <div className="border border-border rounded-lg p-4 space-y-4">
              <h3 className="font-semibold">Add New Menu Item</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Title</Label>
                  <Input
                    placeholder="Buffet Menu"
                    value={newItem.title || ""}
                    onChange={(e) => setNewItem({ ...newItem, title: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Price</Label>
                  <Input
                    placeholder="Ksh. 1,500"
                    value={newItem.price || ""}
                    onChange={(e) => setNewItem({ ...newItem, price: e.target.value })}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label>Description</Label>
                <Textarea
                  placeholder="Describe the menu item..."
                  value={newItem.description || ""}
                  onChange={(e) => setNewItem({ ...newItem, description: e.target.value })}
                />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Image URL</Label>
                  <Input
                    placeholder="https://example.com/image.jpg"
                    value={newItem.image || ""}
                    onChange={(e) => setNewItem({ ...newItem, image: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Or Upload from Device</Label>
                  <Input type="file" accept="image/*" onChange={(e) => handleFileUpload(e, "menu")} />
                </div>
              </div>
              <Button onClick={addMenuItem} className="bg-[#8B2635] hover:bg-[#6B1D28]">
                <Plus className="w-4 h-4 mr-2" />
                Add Menu Item
              </Button>
            </div>

            {/* Existing Menu Items */}
            <div className="space-y-4">
              <h3 className="font-semibold">Existing Menu Items ({menuItems.length})</h3>
              {menuItems.map((item) => (
                <Card key={item.id}>
                  <CardContent className="p-4">
                    {editingItem === item.id ? (
                      <div className="space-y-4">
                        <div className="flex gap-4">
                          <img
                            src={editingValues.image || "/placeholder.svg"}
                            alt={editingValues.title}
                            className="w-24 h-24 object-cover rounded-lg"
                          />
                          <div className="flex-1 space-y-2">
                            <Input
                              value={editingValues.title || ""}
                              onChange={(e) => setEditingValues({ ...editingValues, title: e.target.value })}
                              placeholder="Title"
                            />
                            <Input
                              value={editingValues.price || ""}
                              onChange={(e) => setEditingValues({ ...editingValues, price: e.target.value })}
                              placeholder="Price"
                            />
                          </div>
                        </div>
                        <Textarea
                          value={editingValues.description || ""}
                          onChange={(e) => setEditingValues({ ...editingValues, description: e.target.value })}
                          placeholder="Description"
                        />
                        <Input
                          value={editingValues.image || ""}
                          onChange={(e) => setEditingValues({ ...editingValues, image: e.target.value })}
                          placeholder="Image URL"
                        />
                        <Input
                          type="file"
                          accept="image/*"
                          onChange={(e) => {
                            const file = e.target.files?.[0]
                            if (file) {
                              const reader = new FileReader()
                              reader.onloadend = () => {
                                setEditingValues({ ...editingValues, image: reader.result as string })
                              }
                              reader.readAsDataURL(file)
                            }
                          }}
                        />
                        <div className="flex gap-2">
                          <Button size="sm" onClick={saveEditedMenuItem} className="bg-[#2C5530] hover:bg-[#1a3d1f]">
                            <Save className="w-4 h-4 mr-2" />
                            Save
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => {
                              setEditingItem(null)
                              setEditingValues({})
                            }}
                          >
                            <X className="w-4 h-4 mr-2" />
                            Cancel
                          </Button>
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-start gap-4">
                        <img
                          src={item.image || "/placeholder.svg"}
                          alt={item.title}
                          className="w-24 h-24 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <h4 className="font-semibold">{item.title}</h4>
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                          <p className="text-lg font-bold text-[#8B2635] mt-2">{item.price}</p>
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline" onClick={() => startEditingMenuItem(item)}>
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button size="sm" variant="destructive" onClick={() => deleteMenuItem(item.id)}>
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
