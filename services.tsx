import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Globe, Database, BarChart3, FileText, DollarSign, Shield } from "lucide-react"

const services = [
  {
    icon: Globe,
    title: "Website Development",
    description:
      "Modern, responsive websites tailored for educational institutions with intuitive navigation and engaging design.",
  },
  {
    icon: Database,
    title: "Database Management Systems",
    description: "Comprehensive database solutions for efficient data organization, storage, and retrieval.",
  },
  {
    icon: BarChart3,
    title: "Performance Tracking",
    description: "Advanced analytics and reporting tools to monitor student performance and institutional metrics.",
  },
  {
    icon: FileText,
    title: "Record Management",
    description: "Secure digital record-keeping systems for student information, attendance, and academic history.",
  },
  {
    icon: DollarSign,
    title: "Fee Management Modules",
    description: "Automated fee collection, tracking, and reporting systems with payment gateway integration.",
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description:
      "Enterprise-grade security measures to protect sensitive educational data and ensure system reliability.",
  },
]

export function Services() {
  return (
    <section id="services" className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Comprehensive technology solutions designed specifically for educational institutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
