/**
 * Design Philosophy: Clean Enterprise + Geometric Accent
 * - Spacious layout with breathing room
 * - Geometric shapes for visual interest
 * - Neutral base with one bold color (blue #0066cc)
 * - Hierarchy through size and spacing
 * - Professional, trustworthy aesthetic
 */

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowRight, Lock, Zap, Heart } from "lucide-react";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="container py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-primary">Evora Technologies Global</div>
          <div className="flex items-center gap-6">
            <Link href="/" className="text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/privacy" className="text-foreground hover:text-primary transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="text-foreground hover:text-primary transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Geometric accent bar on the left */}
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary"></div>

        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Text content */}
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
                Mobile Apps
                <span className="block text-primary">Made Simple</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
                Build, deploy, and manage mobile applications with enterprise-grade security and performance. Trusted by thousands of developers worldwide.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                  Get Started <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5">
                  Learn More
                </Button>
              </div>
            </div>

            {/* Right: Hero image */}
            <div className="relative">
              <div className="aspect-square rounded-lg overflow-hidden bg-secondary">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663717102088/WRCa5G2ptVjSaXgVUqPZ8x/hero-mobile-app-1-hvpnfXZRpGNBqq9RE4ees4.webp"
                  alt="Mobile app showcase"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Geometric accent shapes */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-full"></div>
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-primary/5 rounded-sm"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-32 bg-secondary/30">
        {/* Geometric divider */}
        <div className="container mb-16">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-primary rounded-full"></div>
            <div className="flex-1 h-px bg-primary/20"></div>
            <div className="w-8 h-8 bg-primary/50 rounded-sm"></div>
          </div>
        </div>

        <div className="container">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Why Choose Evora Technologies Global?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to build, deploy, and scale mobile applications with confidence.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1: Security */}
            <Card className="p-8 border-border hover:border-primary/50 transition-colors group">
              <div className="mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <img
                    src="https://d2xsxph8kpxj0f.cloudfront.net/310519663717102088/WRCa5G2ptVjSaXgVUqPZ8x/feature-illustration-1-Rm8DiUsxN9AX6ZDVshxvgE.webp"
                    alt="Security"
                    className="w-12 h-12"
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Enterprise Security</h3>
              <p className="text-muted-foreground">
                Bank-level encryption and compliance with GDPR, CCPA, and other international standards.
              </p>
            </Card>

            {/* Feature 2: Performance */}
            <Card className="p-8 border-border hover:border-primary/50 transition-colors group">
              <div className="mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <img
                    src="https://d2xsxph8kpxj0f.cloudfront.net/310519663717102088/WRCa5G2ptVjSaXgVUqPZ8x/feature-illustration-2-8diVA7hjtgBsSJduYTFmqJ.webp"
                    alt="Performance"
                    className="w-12 h-12"
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Lightning Fast</h3>
              <p className="text-muted-foreground">
                Optimized infrastructure ensures your apps load in milliseconds, not seconds.
              </p>
            </Card>

            {/* Feature 3: User Experience */}
            <Card className="p-8 border-border hover:border-primary/50 transition-colors group">
              <div className="mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <img
                    src="https://d2xsxph8kpxj0f.cloudfront.net/310519663717102088/WRCa5G2ptVjSaXgVUqPZ8x/feature-illustration-3-QCXr5edGZnL2YsEEFEjGXv.webp"
                    alt="User Experience"
                    className="w-12 h-12"
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">User Focused</h3>
              <p className="text-muted-foreground">
                Beautiful, intuitive interfaces that users love. Built with accessibility in mind.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-primary text-white">
        <div className="container text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">Ready to Build?</h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Join thousands of developers who are already building amazing mobile apps with Evora Technologies Global.
          </p>
          <Button size="lg" className="bg-white text-primary hover:bg-white/90">
            Start Free Trial <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
