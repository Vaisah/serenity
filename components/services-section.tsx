import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Sparkles, Scissors, Package as Massage, Palette } from "lucide-react"

const services = [
  {
    icon: Massage,
    title: "Spa Treatments",
    description: "Rejuvenating massages, facials, and body treatments designed to restore your inner balance.",
    image: "/luxury-spa-massage-room-with-soft-lighting-and-zen.jpg",
    price: "From $120",
  },
  {
    icon: Scissors,
    title: "Hair Styling",
    description: "Expert cuts, colors, and styling by our master stylists using premium products.",
    image: "/modern-hair-salon-with-elegant-styling-chairs-and-.jpg",
    price: "From $85",
  },
  {
    icon: Sparkles,
    title: "Skincare",
    description: "Advanced facial treatments and skincare solutions for radiant, healthy skin.",
    image: "/luxury-facial-treatment-room-with-modern-skincare-.jpg",
    price: "From $95",
  },
  {
    icon: Palette,
    title: "Beauty Services",
    description: "Professional makeup, nail care, and beauty treatments for special occasions.",
    image: "/elegant-beauty-salon-with-makeup-station-and-nail-.jpg",
    price: "From $65",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-4">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Discover our comprehensive range of luxury spa and salon services, each designed to enhance your natural
            beauty and well-being.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border bg-card">
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                  {service.price}
                </div>
              </div>

              <CardContent className="p-6">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                    <service.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-playfair font-semibold text-foreground">{service.title}</h3>
                </div>

                <p className="text-muted-foreground mb-4 text-pretty leading-relaxed">{service.description}</p>

                <Button
                  variant="outline"
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  )
}
