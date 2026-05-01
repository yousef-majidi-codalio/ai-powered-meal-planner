import React from "react";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Checkbox } from "../components/ui/checkbox";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "../components/ui/command";
import { Input } from "../components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger } from "../components/ui/select";
import { Sheet, SheetContent, SheetTrigger } from "../components/ui/sheet";

import RecipeCard from "../components/RecipeCard";

import { useMemo, useState } from "react";

export default function Explore() {
    const cuisines = useMemo(() => ["Italian","Mexican","Indian","Japanese","Mediterranean","Thai"], []);
    const [q, setQ] = useState("");
    const [cuisine, setCuisine] = useState<string | undefined>("all");
    const [vegan, setVegan] = useState(false);
    const [submitted, setSubmitted] = useState(false);
  return (
   <div className="bg-background text-foreground min-h-screen w-full min-w-0 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col gap-6 w-full min-w-0">
          <div className="flex flex-col gap-3 rounded-xl border p-3">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-[1fr_200px_200px_auto]">
      <Input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search recipes, ingredients…" />
      <Select value={cuisine} onValueChange={setCuisine}>
      <SelectTrigger>Cuisine: {cuisine || "All"}</SelectTrigger>
      <SelectContent className="bg-popover text-popover-foreground z-50">
      <SelectItem value="all">All</SelectItem>
      {cuisines.map((c) => (
      <SelectItem key={c} value={c}>{c}</SelectItem>
      ))}
      </SelectContent>
      </Select>
      <div className="flex items-center gap-2">
      <Checkbox id="vegan" checked={vegan} onCheckedChange={(v) => setVegan(!!v)} />
      <label htmlFor="vegan" className="text-sm text-muted-foreground">Vegan</label>
      </div>
      <div className="flex items-center gap-2">
      <Button onClick={() => setSubmitted(true)}>Search</Button>
      <Sheet>
      <SheetTrigger asChild>
      <Button variant="secondary">More filters</Button>
      </SheetTrigger>
      <SheetContent side="right" className="bg-popover text-popover-foreground">
      <div className="p-2">
      <h3 className="mb-2 font-medium">Pick cuisines</h3>
      <Command className="rounded-lg border">
      <CommandInput placeholder="Search cuisines…" />
      <CommandList>
      <CommandEmpty>No results.</CommandEmpty>
      <CommandGroup heading="Popular">
      {cuisines.map((c) => (
      <CommandItem key={c} onSelect={() => setCuisine(c)}>{c}</CommandItem>
      ))}
      </CommandGroup>
      </CommandList>
      </Command>
      </div>
      </SheetContent>
      </Sheet>
      </div>
      </div>
      <div className="flex flex-wrap items-center gap-2">
      {submitted && <Badge variant="secondary">Results updated</Badge>}
      {cuisine && cuisine !== "all" && <Badge>{cuisine}</Badge>}
      {vegan && <Badge>Vegan</Badge>}
      {q && <Badge variant="outline">“{q}”</Badge>}
      </div>
      </div>
  <>
  <RecipeCard index={0} image="https://pixabay.com/get/ge9321e9e2b2580bed72d32e729de9da91b807b63e17c906f13c925c54131c818eb83e3409b0f808ff2bbbdb4a137a0ab996785ac1518a7f1513bb318978382af_640.jpg" title="Lemon Herb Chicken" description="Bright and zesty weeknight favorite." badges={["30 min","High protein"]} />
  <RecipeCard index={1} image="https://pixabay.com/get/ged3de71f50b377bf4f52845d0762c9e2c9c7b560ae1e868e3277773c161919d7d6791c1fa9a4e8145d2bb6cea9fd562708127650e41e7b2400ae82523fec7c7c_640.jpg" title="Veggie Grain Bowl" description="Colorful bowl packed with nutrients." badges={["Vegan","Fiber"]} />
  <RecipeCard index={2} image="https://pixabay.com/get/g76b8cd2e3c1a3da852f2e8d3405798af75a5e5f0a8d0b93f1cecef8bafc40ff3516ffd97f41c655ac6a03756698e220ea5f38f93d6069a16886ed115cfaaf685_640.jpg" title="Pasta Primavera" description="Seasonal vegetables and herbs." badges={["Mediterranean"]} />
  <RecipeCard index={3} image="https://pixabay.com/get/ge9716e46a8a89cc8da9e2e6ef3bd207d041259aa3f777467456f3dd68b63337975c546493f7f77ac8fd5cd563c2628700761605d94cddd49d5edd8de2f002106_640.jpg" title="Grilled Salmon" description="Omega‑3 rich and delicious." badges={["Low carb"]} />
  <RecipeCard index={4} image="https://pixabay.com/get/gc94935aa39c1a6331b74db6aee5945aad2da462c0d70fb89688d048dbe056b33dd10d00e7260d85fd057c87305d70e178bdf7508c5d00eb81bd30a4175c4b5c1_640.jpg" title="Berry Yogurt Parfait" description="A fresh start to your day." badges={["Breakfast"]} />
  <RecipeCard index={5} image="https://pixabay.com/get/g00335f1be7e04d824fe079e256cf8d5ec229340e3ea25ce44bf83cdd55da104afcd9bd9060e661aafc4142f00d1a8a2e0ab54e091ea65a47d4cb8af495577af8_640.jpg" title="Tofu Stir‑Fry" description="Crisp veggies, savory sauce." badges={["Vegan","Quick"]} />
  <RecipeCard index={6} image="https://pixabay.com/get/g8ddb240866d8fc298274e9aef1707a371ca7b7bb69a47107d944a9b73f3488296c102a14b1e422467ff89d87264166cecf5d6d92d3a96eac346583d849d28807_640.jpg" title="Caprese Salad" description="Tomatoes, basil, and mozzarella." badges={["Vegetarian"]} />
  <RecipeCard index={7} image="https://pixabay.com/get/gb2bec98a859aa384d32b6884d3dcbe3e379d475ff8711e3fabdfe94405061507a919b0651910d1882f7eccc895ef75264864393d29c0b8c16173acd0513c9daf_640.jpg" title="Shrimp Tacos" description="Spiced shrimp with slaw." badges={["High protein"]} />
  </>
  <>
  <RecipeCard index={0} image="https://pixabay.com/get/ge9321e9e2b2580bed72d32e729de9da91b807b63e17c906f13c925c54131c818eb83e3409b0f808ff2bbbdb4a137a0ab996785ac1518a7f1513bb318978382af_640.jpg" title="Zesty Quinoa Salad" description="Fresh herbs and citrus." badges={["Gluten free"]} />
  <RecipeCard index={1} image="https://pixabay.com/get/ged3de71f50b377bf4f52845d0762c9e2c9c7b560ae1e868e3277773c161919d7d6791c1fa9a4e8145d2bb6cea9fd562708127650e41e7b2400ae82523fec7c7c_640.jpg" title="Roasted Veg Platter" description="Seasonal, simple, satisfying." badges={["Vegan"]} />
  <RecipeCard index={2} image="https://pixabay.com/get/g76b8cd2e3c1a3da852f2e8d3405798af75a5e5f0a8d0b93f1cecef8bafc40ff3516ffd97f41c655ac6a03756698e220ea5f38f93d6069a16886ed115cfaaf685_640.jpg" title="Garlic Butter Shrimp" description="Decadent, fast, crowd‑pleaser." badges={["15 min"]} />
  <RecipeCard index={3} image="https://pixabay.com/get/ge9716e46a8a89cc8da9e2e6ef3bd207d041259aa3f777467456f3dd68b63337975c546493f7f77ac8fd5cd563c2628700761605d94cddd49d5edd8de2f002106_640.jpg" title="Seared Salmon Bowls" description="Wholesome weeknight dinner." badges={["Omega‑3"]} />
  <RecipeCard index={4} image="https://pixabay.com/get/gc94935aa39c1a6331b74db6aee5945aad2da462c0d70fb89688d048dbe056b33dd10d00e7260d85fd057c87305d70e178bdf7508c5d00eb81bd30a4175c4b5c1_640.jpg" title="Berry Oats" description="Breakfast energy boost." badges={["Breakfast"]} />
  <RecipeCard index={5} image="https://pixabay.com/get/g00335f1be7e04d824fe079e256cf8d5ec229340e3ea25ce44bf83cdd55da104afcd9bd9060e661aafc4142f00d1a8a2e0ab54e091ea65a47d4cb8af495577af8_640.jpg" title="Crispy Tofu Bowl" description="Plant‑powered protein." badges={["Vegan","High protein"]} />
  </>
      </div>
    </div>
  );
}