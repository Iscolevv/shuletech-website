import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"

const features = [
  "Specialized in educational technology solutions",
  "Custom-built systems tailored to your needs",
  "Ongoing support and maintenance",
  "Scalable solutions that grow with your institution",
  "User-friendly interfaces for all skill levels",
  "Data security and privacy compliance",
]

export function About() {
  return (
    <section id="about" className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
              Why Choose Shule Tech Solutions?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We understand the unique challenges faced by educational institutions. Our team specializes in creating
              technology solutions that streamline operations, enhance communication, and improve educational outcomes.
            </p>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-base leading-relaxed">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <Card className="border-2">
            <CardContent className="p-8 lg:p-10">
              <div className="space-y-8">
                <div>
                  <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">5+</div>
                  <div className="text-muted-foreground">Years of Experience</div>
                </div>
                <div>
                  <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">20+</div>
                  <div className="text-muted-foreground">Projects Completed</div>
                </div>
                <div>
                  <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">100%</div>
                  <div className="text-muted-foreground">Client Satisfaction</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
