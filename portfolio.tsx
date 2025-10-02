import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"

const projects = [
  {
    title: "Kitengela Adventist School Website",
    description:
      "A modern, responsive website showcasing the school's programs, facilities, and achievements with an intuitive content management system.",
    tags: ["Website", "CMS", "Responsive Design"],
    image: "/portfolio/kitengela-website.jpg",
  },
  {
    title: "Kitengela Adventist School Management System",
    description:
      "Comprehensive management system featuring student records, performance tracking, attendance management, and automated fee collection modules.",
    tags: ["Database", "Performance Tracking", "Fee Management"],
    image: "/portfolio/kitengela-management.jpg",
  },
  {
    title: "ChapterOne Bookstore Website",
    description:
      "E-commerce platform for educational books and materials with integrated inventory management and online ordering system.",
    tags: ["E-commerce", "Website", "Inventory System"],
    image: "/portfolio/chapterone-bookstore.jpg",
  },
]

export function Portfolio() {
  return (
    <section id="portfolio" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">Our Portfolio</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Successful projects delivered to educational institutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden border-2 hover:border-primary/50 transition-all hover:shadow-lg group"
            >
              <div className="aspect-video overflow-hidden bg-muted">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl flex items-start justify-between gap-2">
                  <span className="text-balance">{project.title}</span>
                  <ExternalLink className="h-5 w-5 text-muted-foreground flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                </CardTitle>
                <CardDescription className="text-base leading-relaxed">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
