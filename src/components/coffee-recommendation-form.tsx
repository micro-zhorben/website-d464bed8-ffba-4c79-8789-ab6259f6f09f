import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Typography } from "@/components/ui/typography";
import { Coffee, Loader2 } from "lucide-react";

interface CoffeePreferences {
  roastLevel: string;
  brewMethod: string;
  flavorNotes: string;
}

export function CoffeeRecommendationForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [preferences, setPreferences] = useState<CoffeePreferences>({
    roastLevel: "",
    brewMethod: "",
    flavorNotes: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsLoading(false);
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Coffee className="size-6 text-primary" />
          <span>Coffee Recommendation</span>
        </CardTitle>
        <Typography.P className="text-muted-foreground">
          Let our AI find your perfect coffee match
        </Typography.P>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Typography.Small>Roast Level</Typography.Small>
            <Select
              value={preferences.roastLevel}
              onValueChange={(value) =>
                setPreferences({ ...preferences, roastLevel: value })
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Select roast level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light Roast</SelectItem>
                <SelectItem value="medium">Medium Roast</SelectItem>
                <SelectItem value="dark">Dark Roast</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Typography.Small>Brew Method</Typography.Small>
            <Select
              value={preferences.brewMethod}
              onValueChange={(value) =>
                setPreferences({ ...preferences, brewMethod: value })
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Select brew method" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="drip">Drip Coffee</SelectItem>
                <SelectItem value="espresso">Espresso</SelectItem>
                <SelectItem value="french">French Press</SelectItem>
                <SelectItem value="pourover">Pour Over</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Typography.Small>Desired Flavor Notes</Typography.Small>
            <Input
              placeholder="e.g., fruity, chocolate, nutty"
              value={preferences.flavorNotes}
              onChange={(e) =>
                setPreferences({ ...preferences, flavorNotes: e.target.value })
              }
            />
          </div>

          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? (
              <>
                <Loader2 className="mr-2 size-4 animate-spin" />
                Finding your match...
              </>
            ) : (
              "Get Recommendation"
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}