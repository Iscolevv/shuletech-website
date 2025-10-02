import { Button } from "@/components/ui/button"
import { GraduationCap, ArrowRight } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />

      <div className="container mx-auto px-4 lg:px-8 py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8">
            <GraduationCap className="h-4 w-4" />
            <span>Educational Technology Solutions</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 text-balance leading-tight">
            Empowering Education Through <span className="text-primary">Technology</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto text-pretty leading-relaxed">
            We build cutting-edge websites and comprehensive database management systems for educational institutions,
            featuring performance tracking, record management, and fee modules.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="#contact">
              <Button size="lg" className="gap-2 text-base">
                Start Your Project
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="#portfolio">
              <Button size="lg" variant="outline" className="text-base bg-transparent">
                View Our Work
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
