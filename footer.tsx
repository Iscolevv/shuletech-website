import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-secondary/50 border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          <div>
            <Image src="/logo.png" alt="Shule Tech Solutions" width={150} height={40} className="h-10 w-auto mb-4" />
            <p className="text-muted-foreground text-sm leading-relaxed">
              Empowering educational institutions through innovative technology solutions.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#services" className="text-muted-foreground hover:text-primary transition-colors">
                  Website Development
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-muted-foreground hover:text-primary transition-colors">
                  Database Systems
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-muted-foreground hover:text-primary transition-colors">
                  Performance Tracking
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-muted-foreground hover:text-primary transition-colors">
                  Fee Management
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#portfolio" className="text-muted-foreground hover:text-primary transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <div className="flex gap-3">
              <a
                href="#"
                className="h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <Facebook className="h-4 w-4 text-primary" />
              </a>
              <a
                href="#"
                className="h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <Twitter className="h-4 w-4 text-primary" />
              </a>
              <a
                href="#"
                className="h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <Linkedin className="h-4 w-4 text-primary" />
              </a>
              <a
                href="mailto:info@shuletechsolutions.com"
                className="h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <Mail className="h-4 w-4 text-primary" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Shule Tech Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
