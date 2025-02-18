import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Typography } from "@/components/ui/typography";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

interface CoffeeCardProps {
  name: string;
  roastLevel: string;
  origin: string;
  flavorNotes: string[];
  rating: number;
  imageUrl: string;
}

export function CoffeeCard({
  name,
  roastLevel,
  origin,
  flavorNotes,
  rating,
  imageUrl,
}: CoffeeCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="aspect-[4/3] w-full">
        <img
          src={imageUrl}
          alt={name}
          className="h-full w-full object-cover"
        />
      </div>
      <CardHeader>
        <div className="flex items-start justify-between">
          <CardTitle className="line-clamp-2">{name}</CardTitle>
          <div className="flex items-center gap-1">
            <Star className="size-4 fill-primary text-primary" />
            <Typography.Small>{rating.toFixed(1)}</Typography.Small>
          </div>
        </div>
        <Typography.Small className="text-muted-foreground">
          {origin}
        </Typography.Small>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <Badge variant="secondary">{roastLevel} Roast</Badge>
          <div className="flex flex-wrap gap-1">
            {flavorNotes.map((note) => (
              <Badge key={note} variant="outline">
                {note}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}