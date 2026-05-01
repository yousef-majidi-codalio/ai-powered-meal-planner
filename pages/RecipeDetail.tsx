import React from "react";
import { AspectRatio } from "../components/ui/aspect-ratio";
import { Badge } from "../components/ui/badge";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "../components/ui/breadcrumb";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Progress } from "../components/ui/progress";
import { ScrollArea } from "../components/ui/scroll-area";
import { Separator } from "../components/ui/separator";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";

export default function RecipeDetail() {
  return (
    <div className="bg-background text-foreground min-h-screen w-full min-w-0 overflow-x-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col gap-6 w-full min-w-0">
          <div className="flex flex-col gap-6">
      <Breadcrumb>
      <BreadcrumbList>
      <BreadcrumbItem><BreadcrumbLink href="/explore">Explore</BreadcrumbLink></BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem>Recipe</BreadcrumbItem>
      </BreadcrumbList>
      </Breadcrumb>

      <Card className="overflow-hidden">
      <div className="bg-muted">
      <AspectRatio ratio={16/9}>
      <img src="https://pixabay.com/get/ge9321e9e2b2580bed72d32e729de9da91b807b63e17c906f13c925c54131c818eb83e3409b0f808ff2bbbdb4a137a0ab996785ac1518a7f1513bb318978382af_640.jpg" alt="Recipe" className="h-full w-full object-cover" />
      </AspectRatio>
      </div>
      <CardHeader>
      <div className="flex items-center justify-between">
      <div>
      <CardTitle>Lemon Herb Chicken</CardTitle>
      <CardDescription>Bright, zesty, and protein‑packed.</CardDescription>
      </div>
      <div className="flex items-center gap-2">
      <Badge>30 min</Badge>
      <Button>Add to plan</Button>
      </div>
      </div>
      </CardHeader>
      <CardContent className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_320px]">
      <div className="flex flex-col gap-4">
      <Tabs defaultValue="ingredients">
      <TabsList>
      <TabsTrigger value="ingredients">Ingredients</TabsTrigger>
      <TabsTrigger value="steps">Steps</TabsTrigger>
      </TabsList>
      <TabsContent value="ingredients">
      <ScrollArea className="max-h-72 rounded-lg border">
      <Table>
      <TableHeader>
      <TableRow>
      <TableHead>Ingredient</TableHead>
      <TableHead>Amount</TableHead>
      </TableRow>
      </TableHeader>
      <TableBody>
      {["Chicken Breast","Lemon","Olive Oil","Garlic","Parsley"].map((ing, i) => (
      <TableRow key={ing}>
      <TableCell>{ing}</TableCell>
      <TableCell>{["2 lbs","1","2 tbsp","2 cloves","1/4 cup"][i]}</TableCell>
      </TableRow>
      ))}
      </TableBody>
      </Table>
      </ScrollArea>
      </TabsContent>
      <TabsContent value="steps">
      <div className="rounded-lg border p-3 text-sm text-muted-foreground space-y-2">
      {["Marinate chicken with lemon, oil, garlic.","Preheat grill to medium‑high.","Grill 5–6 min per side.","Rest, slice, and garnish with parsley."].map((s, i) => (
      <div key={i}>
      <div className="font-medium text-foreground">Step {i+1}</div>
      <div>{s}</div>
      {i < 3 && <Separator className="my-2" />}
      </div>
      ))}
      </div>
      </TabsContent>
      </Tabs>
      </div>
      <div className="flex flex-col gap-4">
      <Card>
      <CardHeader><CardTitle className="text-base">Nutrition facts</CardTitle></CardHeader>
      <CardContent className="space-y-3">
      <div>
      <div className="mb-1 text-sm">Calories</div>
      <Progress value={68} />
      </div>
      <div>
      <div className="mb-1 text-sm">Protein</div>
      <Progress value={72} />
      </div>
      <div>
      <div className="mb-1 text-sm">Fat</div>
      <Progress value={45} />
      </div>
      </CardContent>
      </Card>
      </div>
      </CardContent>
      </Card>
      </div>
      </div>
    </div>
  );
}