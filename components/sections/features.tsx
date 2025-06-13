import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowDownUp, Clock, Heart, Sparkles, Upload, Wand2 } from "lucide-react"

export function FeaturesSection() {
  return (
    <section id="features" className="py-16 md:py-24 bg-secondary/10 scroll-mt-16">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Features & Benefits
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Everything you need to transform your text, designed for maximum productivity
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          <FeatureCard
            icon={<Clock className="h-10 w-10 text-chart-1" />}
            title="Instant Conversion"
            description="Transform your text in real-time with zero delay, perfect for quick edits and formatting"
          />
          <FeatureCard
            icon={<Heart className="h-10 w-10 text-chart-2" />}
            title="Save Favorites"
            description="Keep your commonly used text transformations handy and access them with a single click"
          />
          <FeatureCard
            icon={<ArrowDownUp className="h-10 w-10 text-chart-3" />}
            title="Multiple Case Options"
            description="Choose from a variety of case formats including camelCase, PascalCase, and more"
          />
          <FeatureCard
            icon={<Wand2 className="h-10 w-10 text-chart-4" />}
            title="Spellcheck Assist"
            description="Automatically check your spelling and grammar while converting text cases"
          />
          <FeatureCard
            icon={<Upload className="h-10 w-10 text-chart-5" />}
            title="Import & Export"
            description="Easily import text from files or export your converted text in various formats"
          />
          <FeatureCard
            icon={<Sparkles className="h-10 w-10 text-chart-1" />}
            title="Smart Suggestions"
            description="Get intelligent recommendations based on your text content and conversion patterns"
          />
        </div>
      </div>
    </section>
  )
}

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <Card className="h-full transition-all duration-300 hover:shadow-md">
      <CardHeader>
        <div className="mb-3">{icon}</div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base text-muted-foreground">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  )
}