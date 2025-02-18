import { CoffeeCard } from "@/components/coffee-card";
import { CoffeeRecommendationForm } from "@/components/coffee-recommendation-form";
import { ModeToggle } from "@/components/mode-toggle";
import { Typography } from "@/components/ui/typography";

const FEATURED_COFFEES = [
  {
    name: "Ethiopian Yirgacheffe",
    roastLevel: "Light",
    origin: "Ethiopia",
    flavorNotes: ["Floral", "Citrus", "Bergamot"],
    rating: 4.8,
    imageUrl: "/placeholder.svg",
  },
  {
    name: "Colombian Supremo",
    roastLevel: "Medium",
    origin: "Colombia",
    flavorNotes: ["Caramel", "Nuts", "Chocolate"],
    rating: 4.6,
    imageUrl: "/placeholder.svg",
  },
  {
    name: "Sumatra Mandheling",
    roastLevel: "Dark",
    origin: "Indonesia",
    flavorNotes: ["Earthy", "Spicy", "Dark Chocolate"],
    rating: 4.7,
    imageUrl: "/placeholder.svg",
  },
];

export function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between">
          <Typography.H3>Smart Brew</Typography.H3>
          <ModeToggle />
        </div>
      </header>

      {/* Hero Section */}
      <section className="container py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <Typography.H1>
              Find Your Perfect Coffee with AI
            </Typography.H1>
            <Typography.Lead>
              Let our advanced AI recommend the perfect coffee based on your unique
              taste preferences and brewing style.
            </Typography.Lead>
          </div>
          <div className="flex justify-center">
            <CoffeeRecommendationForm />
          </div>
        </div>
      </section>

      {/* Featured Coffees */}
      <section className="container py-12">
        <Typography.H2 className="mb-8">Featured Coffees</Typography.H2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURED_COFFEES.map((coffee) => (
            <CoffeeCard key={coffee.name} {...coffee} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-6">
        <div className="container">
          <Typography.Muted className="text-center">
            © 2024 Smart Brew. All rights reserved.
          </Typography.Muted>
        </div>
      </footer>
    </div>
  );
}