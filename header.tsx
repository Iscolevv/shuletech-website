import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.png" alt="Shule Tech Solutions" width={150} height={40} className="h-8 lg:h-10 w-auto" />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="#services" className="text-sm font-medium hover:text-primary transition-colors">
              Services
            </Link>
            <Link href="#portfolio" className="text-sm font-medium hover:text-primary transition-colors">
              Portfolio
            </Link>
            <Link href="#about" className="text-sm font-medium hover:text-primary transition-colors">
              About
            </Link>
            <Link href="#contact">
              <Button>Get Started</Button>
            </Link>
          </nav>

          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  )
}
