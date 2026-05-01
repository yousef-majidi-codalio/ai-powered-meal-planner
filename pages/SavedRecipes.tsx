

import { Clock, Filter, Flame, Heart, Search, SlidersHorizontal } from "lucide-react";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";

import React, { useState } from "react";

export default function SavedRecipes() {
    const [searchQuery, setSearchQuery] = useState("");
    const [collection, setCollection] = useState("all");
    const recipes = [
      { id: "1", title: "Avocado Toast with Poached Egg", time: "15m", calories: 320, image: "https://pixabay.com/get/g4d8fa7b0a32ec20798828082c6e57c957fc39d6804ea48a1e8d3f6082850ed8ca924c58e9785e6e8fec0de1c684d57efa32c1a53eaea87374a4d8e2eb1386508_640.jpg" },
      { id: "2", title: "Grilled Chicken Salad", time: "20m", calories: 450, image: "https://pixabay.com/get/g147bfb846d9c0d5c6a8e85d9bacf6faafb640fd33996ca653f057e071071686aead870945be5cb54858380ce397e616fca2a584e355bddeec99fdd84f63ab978_640.jpg" },
      { id: "3", title: "Salmon with Quinoa", time: "30m", calories: 600, image: "https://pixabay.com/get/g3902d128f0957729e19c266b9ae2c9928e69e30f6acd0e85805a5ae491b08b1ac99e4e82396c673206a96282e9d2968db4080c9dde2d9aade8bc29b8c686dfb6_640.jpg" },
      { id: "4", title: "Vegetable Stir Fry", time: "25m", calories: 380, image: "https://pixabay.com/get/g05a1afb39cc4f413e018eb02655a62e3d41dd46884cf4e5f0b454b4ff46bb79a74b98fbc225d13da0a0c5235fdd17ebb5446121682835106bb45f92c6e5c4e74_640.jpg" },
      { id: "5", title: "Berry Smoothie Bowl", time: "10m", calories: 300, image: "https://pixabay.com/get/g4bbdae5c51be4b9f17fdc128d2b61a0806674c06543f32b5a465c2a78981dd3587f87efae4e100c6b2e0df8dfef79d6e7671009a99bcbbb28c00b6dff77f97d6_640.jpg" },
      { id: "6", title: "Turkey Wrap", time: "15m", calories: 400, image: "https://pixabay.com/get/ga69624f6932099bbef1f271b27e07a43244aee98c15d46ebbd7fe51a56c00a7aa0db3bfd9aea90a0f63bc646bd77a31b22f3a975f8bf4c68ab11511d4649acca_640.jpg" }
    ];
  return (
   <div className="bg-background text-foreground w-full min-w-0 min-h-screen overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col gap-6 w-full min-w-0">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
      <div>
      <h1 className="text-3xl font-bold tracking-tight text-foreground">Saved Recipes</h1>
      <p className="text-muted-foreground mt-1">Your personal collection of favorite meals.</p>
      </div>

      <div className="flex-1 w-full sm:w-auto flex flex-col sm:flex-row gap-3 justify-end">
      <div className="relative w-full sm:w-64">
      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
      <Input
      placeholder="Search saved recipes..."
      className="pl-9 bg-background border-border"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      />
      </div>
      <Select value={collection} onValueChange={setCollection}>
      <SelectTrigger className="w-full sm:w-[160px]">
      <SelectValue placeholder="All Collections" />
      </SelectTrigger>
      <SelectContent>
      <SelectItem value="all">All Collections</SelectItem>
      <SelectItem value="breakfasts">Breakfasts</SelectItem>
      <SelectItem value="quick-dinners">Quick Dinners</SelectItem>
      <SelectItem value="desserts">Healthy Desserts</SelectItem>
      </SelectContent>
      </Select>
      <Button variant="outline" className="w-full sm:w-auto">
      <SlidersHorizontal className="h-4 w-4 mr-2" />
      Sort
      </Button>
      </div>
      </div>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {recipes.map((recipe) => (
      <Card key={recipe.id} className="overflow-hidden bg-card shadow-sm border-border group cursor-pointer hover:shadow-md transition-all">
      <div className="relative h-48 overflow-hidden">
      <img 
      src={recipe.image} 
      alt={recipe.title} 
      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <Button 
      variant="secondary" 
      size="icon" 
      className="absolute top-3 right-3 h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background text-rose-500"
      >
      <Heart className="h-4 w-4 fill-current" />
      </Button>
      </div>
      <CardHeader className="pb-2">
      <CardTitle className="text-lg line-clamp-1">{recipe.title}</CardTitle>
      </CardHeader>
      <CardContent>
      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
      <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {recipe.time}</span>
      <span className="flex items-center gap-1"><Flame className="w-4 h-4" /> {recipe.calories} kcal</span>
      </div>
      <Button className="w-full" variant="outline">View Recipe</Button>
      </CardContent>
      </Card>
      ))}
      </div>
      </div>
    </div>
  );
}