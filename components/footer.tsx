import { Leaf, MapPin, Phone, Mail, Instagram, Facebook, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <Leaf className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-playfair font-bold">Serenity Spa & Salon</span>
            </div>
            <p className="text-background/80 text-pretty leading-relaxed">
              Where luxury meets wellness. Experience the ultimate in relaxation and beauty treatments in our tranquil
              sanctuary.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-playfair font-semibold">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-background/80">123 Wellness Ave, Serenity City, SC 12345</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-background/80">(555) 123-SERENE</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-background/80">hello@serenityspa.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-playfair font-semibold">Quick Links</h3>
            <div className="space-y-2">
              <a href="#services" className="block text-background/80 hover:text-primary transition-colors">
                Services
              </a>
              <a href="#about" className="block text-background/80 hover:text-primary transition-colors">
                About Us
              </a>
              <a href="#booking" className="block text-background/80 hover:text-primary transition-colors">
                Book Online
              </a>
              <a href="#gift-cards" className="block text-background/80 hover:text-primary transition-colors">
                Gift Cards
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-playfair font-semibold">Stay Connected</h3>
            <p className="text-background/80 text-sm">Subscribe for wellness tips and exclusive offers.</p>
            <div className="flex space-x-2">
              <Input
                placeholder="Your email"
                className="bg-background/10 border-background/20 text-background placeholder:text-background/60"
              />
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Subscribe</Button>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 pt-4">
              <a href="#" className="text-background/80 hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-background/80 hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-background/80 hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8 text-center">
          <p className="text-background/60 text-sm">
            © 2024 Serenity Spa & Salon. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  )
}
