import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Separator } from "../components/ui/separator";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table";
import { ToggleGroup, ToggleGroupItem } from "../components/ui/toggle-group";

import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function RecipeDetail() {
    const { id } = useParams();
    const ingredients = [
      { item: 'Olive oil', qty: '2 tbsp' },
      { item: 'Garlic', qty: '2 cloves' },
      { item: 'Cherry tomatoes', qty: '1 cup' },
      { item: 'Basil', qty: 'a few leaves' },
      { item: 'Pasta', qty: '200 g' }
    ];
    const steps = [
      'Boil pasta until al dente and drain.',
      'Sauté garlic in olive oil, add tomatoes.',
      'Toss pasta with sauce and top with basil.'
    ];
    const [rating, setRating] = useState<string | "">("");
    const [week, setWeek] = useState("1");
    const [meal, setMeal] = useState("dinner");
    const [added, setAdded] = useState(false);
  return (
   <div className="bg-background text-foreground w-full min-w-0 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col gap-6 w-full min-w-0">
          <section className="py-4 grid gap-4">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-4 items-start">
      <Card className="overflow-hidden">
      <div className="aspect-video w-full bg-muted overflow-hidden">
      <img src="https://pixabay.com/get/g3aaef9a32348fef07c5767a972d96be92d10dfa850b1a95208d28c77aafb5c67522847e77e655bf11407684d6ff4f174a71f55faf2ff791e6bc95c93524f3249_640.jpg" alt="recipe" className="h-full w-full object-cover" />
      </div>
      <CardHeader className="pb-2">
      <CardTitle className="flex items-center justify-between">
      <span>Recipe #{id}</span>
      <div className="flex items-center gap-2"><Badge>Healthy</Badge><Badge variant="secondary">30 min</Badge></div>
      </CardTitle>
      </CardHeader>
      <CardContent className="text-sm text-muted-foreground">
      A delicious AI-suggested dish tailored to your preferences.
      </CardContent>
      </Card>
      <div className="grid gap-3">
      <div className="grid grid-cols-2 gap-2">
      <img src="https://pixabay.com/get/g998652dafa83df856425fa2b6931907df74af6f2d905f1e201cb81920cad0aabcf554bdd914e31fbae5ff9c9a632385a5187a9a5ed68499efc4cdd8e3de4605c_640.jpg" alt="thumb" className="rounded-lg h-28 w-full object-cover" />
      <img src="https://pixabay.com/get/gae675d5662e2a9a8d5ddd1c32cd72fc426fdd3569c9734066061a082645f63af64cc7fa464619bd2120960ad9a7a02cdb226ebec04cb3065a73034d30a8a3507_640.jpg" alt="thumb" className="rounded-lg h-28 w-full object-cover" />
      </div>
      <Button asChild variant="outline"><Link to="/recipes">Back to recipes</Link></Button>
      </div>
      </div>
      </section>
  <section className="py-2 grid grid-cols-1 lg:grid-cols-2 gap-4 items-start">
      <div className="overflow-x-auto">
      <h3 className="text-lg font-semibold mb-2">Ingredients</h3>
      <Table>
      <TableHeader>
      <TableRow>
      <TableHead>Item</TableHead>
      <TableHead>Qty</TableHead>
      </TableRow>
      </TableHeader>
      <TableBody>
      {ingredients.map((row) => (
      <TableRow key={row.item}>
      <TableCell>{row.item}</TableCell>
      <TableCell>{row.qty}</TableCell>
      </TableRow>
      ))}
      </TableBody>
      </Table>
      </div>
      <div>
      <h3 className="text-lg font-semibold mb-2">Instructions</h3>
      <Accordion type="single" collapsible>
      {steps.map((s, i) => (
      <AccordionItem key={i} value={`s-${i}`}>
      <AccordionTrigger>Step {i+1}</AccordionTrigger>
      <AccordionContent>{s}</AccordionContent>
      </AccordionItem>
      ))}
      </Accordion>
      </div>
      </section>
  <section className="py-2 grid gap-4">
      <div className="grid gap-2">
      <div className="text-sm text-muted-foreground">Rate this recipe</div>
      <ToggleGroup type="single" value={rating} onValueChange={(v)=>setRating(v)} className="flex gap-2">
      {["1","2","3","4","5"].map((n) => (
      <ToggleGroupItem key={n} value={n} className="px-3 py-1 rounded border data-[state=on]:bg-secondary">{n}</ToggleGroupItem>
      ))}
      </ToggleGroup>
      <div className="text-sm">Your rating: {rating || '—'}</div>
      </div>
      <Dialog>
      <DialogTrigger asChild>
      <Button variant="secondary">Add to plan</Button>
      </DialogTrigger>
      <DialogContent>
      <DialogHeader><DialogTitle>Add to week</DialogTitle></DialogHeader>
      <div className="grid gap-3">
      <Select value={week} onValueChange={setWeek}>
      <SelectTrigger><SelectValue placeholder="Select week"/></SelectTrigger>
      <SelectContent className="bg-popover text-popover-foreground">
      {Array.from({length: 6}).map((_,i) => <SelectItem key={i} value={String(i+1)}>{`Week ${i+1}`}</SelectItem>)}
      </SelectContent>
      </Select>
      <Select value={meal} onValueChange={setMeal}>
      <SelectTrigger><SelectValue placeholder="Meal"/></SelectTrigger>
      <SelectContent className="bg-popover text-popover-foreground">
      <SelectItem value="breakfast">Breakfast</SelectItem>
      <SelectItem value="lunch">Lunch</SelectItem>
      <SelectItem value="dinner">Dinner</SelectItem>
      </SelectContent>
      </Select>
      <Button onClick={()=>setAdded(true)}>Add</Button>
      {added && <div className="text-sm text-muted-foreground">Added to week {week} • {meal}</div>}
      </div>
      </DialogContent>
      </Dialog>
      </section>
      </div>
    </div>
  );
}