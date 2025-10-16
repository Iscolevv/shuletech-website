"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Phone,
  MapPin,
  Clock,
  Users,
  Heart,
  Trophy,
  Mail,
  Facebook,
  Instagram,
  MessageCircle,
  Lock,
} from "lucide-react"
import Link from "next/link"
import { MenuModal } from "@/components/menu-modal"
import { useRouter } from "next/navigation"

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const router = useRouter()

  const [menuItems, setMenuItems] = useState<any[]>([])
  const [galleryItems, setGalleryItems] = useState<any[]>([])
  const [visibleGalleryCount, setVisibleGalleryCount] = useState(8)
  const [heroImages, setHeroImages] = useState<any>({
    left: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/files-blob/IMG_20251015_213222-4ohrFMELv87xihGJp9271ZZnVXwdyG.jpg",
    right:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/files-blob/IMG_20251015_213151-nRDLulke6hqB3epgstCiGUhj8HKenB.jpg",
  })

  useEffect(() => {
    const savedMenu = localStorage.getItem("sdgb_menu_items")
    if (savedMenu) {
      setMenuItems(JSON.parse(savedMenu))
    }

    const savedGallery = localStorage.getItem("sdgb_gallery_items")
    if (savedGallery) {
      setGalleryItems(JSON.parse(savedGallery))
    }

    const savedHero = localStorage.getItem("sdgb_hero_images")
    if (savedHero) {
      setHeroImages(JSON.parse(savedHero))
    }

    // Listen for storage changes from admin panel
    const handleStorageChange = () => {
      const savedMenu = localStorage.getItem("sdgb_menu_items")
      if (savedMenu) {
        setMenuItems(JSON.parse(savedMenu))
      }
      const savedGallery = localStorage.getItem("sdgb_gallery_items")
      if (savedGallery) {
        setGalleryItems(JSON.parse(savedGallery))
      }
      const savedHero = localStorage.getItem("sdgb_hero_images")
      if (savedHero) {
        setHeroImages(JSON.parse(savedHero))
      }
    }

    window.addEventListener("storage", handleStorageChange)
    window.addEventListener("sdgb-data-update", handleStorageChange)

    return () => {
      window.removeEventListener("storage", handleStorageChange)
      window.removeEventListener("sdgb-data-update", handleStorageChange)
    }
  }, [])

  const handleCallNow = () => {
    window.open("https://wa.me/254736966605?text=Hi, I would like to inquire about your services", "_blank")
  }

  const handleBookTable = () => {
    window.open(
      "https://wa.me/254736966605?text=Hi, I would like to book a table at Su Cakes & Dusty Grill Bistro",
      "_blank",
    )
  }

  const loadMoreGallery = () => {
    setVisibleGalleryCount((prev) => prev + 8)
  }

  return (
    <div className="min-h-screen bg-background">
      <MenuModal isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="text-2xl font-bold text-[#8B2635]">Su Cakes</div>
              <div className="text-2xl font-bold">&</div>
              <div className="text-2xl font-bold text-[#2C5530]">Dusty Grill</div>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <Link href="#about" className="text-sm font-medium hover:text-[#8B2635] transition-colors">
                About
              </Link>
              <Link href="#menu" className="text-sm font-medium hover:text-[#8B2635] transition-colors">
                Menu
              </Link>
              <Link href="#community" className="text-sm font-medium hover:text-[#8B2635] transition-colors">
                Community
              </Link>
              <Link href="#contact" className="text-sm font-medium hover:text-[#8B2635] transition-colors">
                Contact
              </Link>
              <Button
                onClick={() => router.push("/admin")}
                variant="outline"
                size="sm"
                className="border-[#8B2635] text-[#8B2635] hover:bg-[#8B2635] hover:text-white"
              >
                <Lock className="w-4 h-4 mr-2" />
                Staff Login
              </Button>
            </div>
            <Button onClick={handleCallNow} className="bg-[#8B2635] hover:bg-[#6B1D28] text-white">
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section - Using the colorful night signage photo as background */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{
            backgroundImage:
              "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/files-blob/IMG_20251015_213222-4ohrFMELv87xihGJp9271ZZnVXwdyG.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/95" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-[#8B2635]/10 rounded-full">
                <p className="text-sm font-medium text-[#8B2635]">Chase the Flavor</p>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight text-balance">
                Where Good Vibes & Great Food Meet
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Experience the perfect blend of Su Cakes & Cookies Pastries and Dusty Grill Bistro. From custom cakes to
                grilled delights, we bring flavors that create memories.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  onClick={() => setIsMenuOpen(true)}
                  size="lg"
                  className="bg-[#8B2635] hover:bg-[#6B1D28] text-white"
                >
                  View Menu
                </Button>
                <Button
                  onClick={handleBookTable}
                  size="lg"
                  variant="outline"
                  className="border-[#2C5530] text-[#2C5530] hover:bg-[#2C5530] hover:text-white bg-transparent"
                >
                  Book a Table
                </Button>
              </div>
              <div className="flex items-center gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-[#8B2635]" />
                  <span className="text-sm">Next to Ola Petrol, Acacia, Kitengela</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src={heroImages.left || "/placeholder.svg"}
                  alt="Restaurant interior"
                  className="rounded-2xl shadow-2xl w-full h-64 object-cover"
                />
                <img
                  src={heroImages.right || "/placeholder.svg"}
                  alt="Delicious food"
                  className="rounded-2xl shadow-2xl w-full h-64 object-cover mt-8"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">About Us</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Customer satisfaction is our priority with the highest quality food and excellent service, making us a
              place you and your friends can have a great experience.
            </p>
          </div>

          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">What We Offer</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A complete dining experience with multiple services to make your occasions special
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-2 hover:border-[#8B2635] transition-all hover:shadow-lg">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 rounded-full bg-[#8B2635]/10 flex items-center justify-center">
                  <Users className="w-6 h-6 text-[#8B2635]" />
                </div>
                <h3 className="text-xl font-bold">Restaurant & Bistro</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Dine-in service (breakfast, lunch & dinner)</li>
                  <li>• Takeaway & delivery options</li>
                  <li>• Outside catering for events</li>
                  <li>• Special themed nights</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-[#8B2635] transition-all hover:shadow-lg">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 rounded-full bg-[#8B2635]/10 flex items-center justify-center">
                  <Heart className="w-6 h-6 text-[#8B2635]" />
                </div>
                <h3 className="text-xl font-bold">Su Cakes & Cookies</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Custom cakes for all occasions</li>
                  <li>• Pastries, desserts & specialty bakes</li>
                  <li>• Seasonal/holiday specials</li>
                  <li>• Wedding & birthday cakes</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-[#8B2635] transition-all hover:shadow-lg">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 rounded-full bg-[#2C5530]/10 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-[#2C5530]" />
                </div>
                <h3 className="text-xl font-bold">Events & Catering</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Goat eating events</li>
                  <li>• Picnic menu packages (2-10 pax)</li>
                  <li>• Family luncheons & group dining</li>
                  <li>• Professional photography available</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-[#8B2635] transition-all hover:shadow-lg">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 rounded-full bg-[#2C5530]/10 flex items-center justify-center">
                  <Trophy className="w-6 h-6 text-[#2C5530]" />
                </div>
                <h3 className="text-xl font-bold">Drinks & Bar</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Milkshakes, smoothies & fresh juices</li>
                  <li>• Signature cocktails</li>
                  <li>• Soft drinks & alcoholic beverages</li>
                  <li>• Red Affair Vodka Cocktail</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Venue Showcase - Using the Get Together info photo */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">A Space Designed for Comfort & Joy</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Immerse yourself in our serene garden setting or enjoy our cozy indoor ambiance. With ample parking and
                a vibrant atmosphere, we ensure a hassle-free visit every time.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#2C5530]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-[#2C5530]" />
                  </div>
                  <span>Personalize your buffet experience</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#2C5530]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-[#2C5530]" />
                  </div>
                  <span>Serene garden setting or cosy indoor ambiance</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#2C5530]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-[#2C5530]" />
                  </div>
                  <span>Ample parking ensuring hassle-free visits</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#2C5530]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-[#2C5530]" />
                  </div>
                  <span>Professional photography available @3500/</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/files-blob/IMG_20251015_213027-8Qn53hzdC63erBZnnsAFAjnJ85f7Mi.jpg"
                alt="Su Cakes & Dusty Grill Bistro Venue"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section - Using correct menu photos with accurate descriptions */}
      <section id="menu" className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Menus</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From buffets to special packages - explore our diverse offerings
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuItems.map((item) => (
              <Card key={item.id} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-64">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground mb-4">{item.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-[#8B2635]">{item.price}</span>
                    {item.title.toLowerCase().includes("ala carte") && (
                      <Button
                        onClick={() => setIsMenuOpen(true)}
                        size="sm"
                        variant="outline"
                        className="border-[#8B2635] text-[#8B2635] hover:bg-[#8B2635] hover:text-white"
                      >
                        View Full Menu
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16">
            <h3 className="text-3xl font-bold text-center mb-8">Our Delicious Dishes and Gallery</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {galleryItems.slice(0, visibleGalleryCount).map((item) => (
                <img
                  key={item.id}
                  src={item.url || "/placeholder.svg"}
                  alt={item.alt}
                  className="rounded-lg shadow-md w-full h-48 object-cover hover:scale-105 transition-transform"
                  loading="lazy"
                />
              ))}
            </div>
            {visibleGalleryCount < galleryItems.length && (
              <div className="text-center mt-8">
                <Button
                  onClick={loadMoreGallery}
                  variant="outline"
                  size="lg"
                  className="border-[#8B2635] text-[#8B2635] hover:bg-[#8B2635] hover:text-white bg-transparent"
                >
                  Load More Photos ({galleryItems.length - visibleGalleryCount} remaining)
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Community Impact Section */}
      <section id="community" className="py-16 md:py-24 bg-gradient-to-br from-[#2C5530]/10 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block px-4 py-2 bg-[#2C5530]/10 rounded-full mb-4">
                <p className="text-sm font-medium text-[#2C5530]">Community Impact</p>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Empowering Youth Through Sports</h2>
              <p className="text-lg text-muted-foreground">
                Beyond great food, we're committed to making a difference in our community
              </p>
            </div>

            <Card className="border-2 border-[#2C5530]/20 overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-64 md:h-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#2C5530] to-[#1a3d1f] flex items-center justify-center">
                    <div className="text-center text-white p-8">
                      <Trophy className="w-16 h-16 mx-auto mb-4" />
                      <h3 className="text-3xl font-bold mb-2">S.D.G.B FC</h3>
                      <p className="text-lg opacity-90">Building Champions On & Off The Field</p>
                    </div>
                  </div>
                </div>
                <CardContent className="p-8 md:p-10 space-y-6">
                  <div>
                    <h4 className="text-2xl font-bold mb-3">Our Football Team Initiative</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Su Cakes & Dusty Grill Bistro proudly sponsors <strong>S.D.G.B FC</strong>, a local football team
                      dedicated to empowering youth in Kitengela and surrounding areas.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#2C5530]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Users className="w-4 h-4 text-[#2C5530]" />
                      </div>
                      <div>
                        <h5 className="font-semibold mb-1">Youth Development</h5>
                        <p className="text-sm text-muted-foreground">
                          Providing young people with opportunities to develop teamwork, discipline, and leadership
                          skills
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#2C5530]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Heart className="w-4 h-4 text-[#2C5530]" />
                      </div>
                      <div>
                        <h5 className="font-semibold mb-1">Community Building</h5>
                        <p className="text-sm text-muted-foreground">
                          Creating a positive space where youth can build friendships, and pursue their dreams
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#2C5530]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Trophy className="w-4 h-4 text-[#2C5530]" />
                      </div>
                      <div>
                        <h5 className="font-semibold mb-1">Talent Nurturing</h5>
                        <p className="text-sm text-muted-foreground">
                          Identifying and supporting talented young athletes to reach their full potential
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <p className="text-sm text-muted-foreground italic">
                      "We believe in giving back to the community that supports us. Through S.D.G.B FC, we're not just
                      serving food - we're serving hope and opportunity to the next generation."
                    </p>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Visit Us Today</h2>
              <p className="text-lg text-muted-foreground">
                Come experience the flavors and vibes that make us special
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-8 space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-[#8B2635]/10 flex items-center justify-center flex-shrink-0">
                          <Phone className="w-5 h-5 text-[#8B2635]" />
                        </div>
                        <div>
                          <p className="font-semibold mb-1">Call or WhatsApp</p>
                          <a href="tel:0736966605" className="text-[#8B2635] hover:underline">
                            0736966605
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-[#8B2635]/10 flex items-center justify-center flex-shrink-0">
                          <Mail className="w-5 h-5 text-[#8B2635]" />
                        </div>
                        <div>
                          <p className="font-semibold mb-1">Email</p>
                          <a href="mailto:sudustygrill@gmail.com" className="text-[#8B2635] hover:underline">
                            sudustygrill@gmail.com
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-[#8B2635]/10 flex items-center justify-center flex-shrink-0">
                          <MapPin className="w-5 h-5 text-[#8B2635]" />
                        </div>
                        <div>
                          <p className="font-semibold mb-1">Location</p>
                          <p className="text-muted-foreground">
                            Next to Ola Petrol Station
                            <br />
                            Acacia, Kitengela
                            <br />
                            Nairobi-Namanga Road
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-[#8B2635]/10 flex items-center justify-center flex-shrink-0">
                          <Clock className="w-5 h-5 text-[#8B2635]" />
                        </div>
                        <div>
                          <p className="font-semibold mb-1">Opening Hours</p>
                          <p className="text-muted-foreground">
                            Breakfast, Lunch & Dinner
                            <br />
                            Open Daily
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-border">
                    <p className="text-sm text-muted-foreground mb-4">Follow us on social media</p>
                    <div className="flex items-center gap-4">
                      <a
                        href="https://www.facebook.com/share/1G7CYYsPzg/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-full bg-[#1877F2]/10 hover:bg-[#1877F2] flex items-center justify-center transition-colors group"
                      >
                        <Facebook className="w-6 h-6 text-[#1877F2] group-hover:text-white" />
                      </a>
                      <a
                        href="https://www.instagram.com/sudustygrillbistro?igsh=OTlreWN4NXJ4dmpj"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-full bg-[#E4405F]/10 hover:bg-[#E4405F] flex items-center justify-center transition-colors group"
                      >
                        <Instagram className="w-6 h-6 text-[#E4405F] group-hover:text-white" />
                      </a>
                      <a
                        href="https://wa.me/254736966605"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-full bg-[#25D366]/10 hover:bg-[#25D366] flex items-center justify-center transition-colors group"
                      >
                        <MessageCircle className="w-6 h-6 text-[#25D366] group-hover:text-white" />
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-[#8B2635] to-[#6B1D28] text-white">
                <CardContent className="p-8 h-full flex flex-col justify-center">
                  <h3 className="text-2xl font-bold mb-4">Book Your Experience</h3>
                  <p className="mb-6 opacity-90">
                    Whether it's a family gathering, corporate event, or special celebration, we're here to make it
                    memorable.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-white" />
                      <span>Buffet bookings (minimum 10 people)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-white" />
                      <span>Picnic site reservations</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-white" />
                      <span>Custom cake orders</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-white" />
                      <span>Event catering services</span>
                    </li>
                  </ul>
                  <Button
                    onClick={handleCallNow}
                    size="lg"
                    className="w-full bg-white text-[#8B2635] hover:bg-gray-100"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call to Book: 0736966605
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/50 border-t border-border py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="text-xl font-bold text-[#8B2635]">Su Cakes</div>
              <div className="text-xl font-bold">&</div>
              <div className="text-xl font-bold text-[#2C5530]">Dusty Grill Bistro</div>
            </div>
            <p className="text-sm text-muted-foreground mb-2">Where good vibes and great food meet</p>
            <p className="text-xs text-muted-foreground">© 2025 Su Cakes & Dusty Grill Bistro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
