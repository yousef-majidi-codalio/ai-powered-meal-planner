import React from "react";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../components/ui/dialog";
import { Input } from "../components/ui/input";
import { Progress } from "../components/ui/progress";
import { ScrollArea } from "../components/ui/scroll-area";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";

import MealPlanWeek from "../components/MealPlanWeek";

import { useState } from "react";

export default function MealPlanCurrent() {
    const [week, setWeek] = useState<number>(24);
    const [cal, setCal] = useState(72);
    const [pro, setPro] = useState(64);
    const [carb, setCarb] = useState(58);
    const [query, setQuery] = useState("");
    const options = ["Avocado toast","Chicken salad","Pasta primavera","Grilled salmon","Veggie bowl","Smoothie bowl","Tofu stir fry","Turkey chili"];
    const filtered = options.filter((o) => o.toLowerCase().includes(query.toLowerCase()));
  return (
   <div className="bg-background text-foreground w-full min-w-0 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col gap-6 w-full min-w-0">
          <section className="py-2 flex flex-col gap-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
      <h1 className="text-2xl font-semibold">Current Week</h1>
      <div className="flex items-center gap-2">
      <Badge variant="secondary">Week {week}</Badge>
      <Select value={String(week)} onValueChange={(v) => setWeek(Number(v))}>
      <SelectTrigger className="w-[120px]"><SelectValue placeholder="Week" /></SelectTrigger>
      <SelectContent className="bg-popover text-popover-foreground">
      {Array.from({length: 52}).map((_,i) => <SelectItem key={i+1} value={String(i+1)}>{`Week ${i+1}`}</SelectItem>)}
      </SelectContent>
      </Select>
      <Button variant="outline" size="sm" onClick={() => setWeek((w) => Math.max(1, w-1))}>Prev</Button>
      <Button size="sm" onClick={() => setWeek((w) => Math.min(52, w+1))}>Next</Button>
      <Button variant="secondary" size="sm">Regenerate</Button>
      </div>
      </div>
      </section>
  <section className="py-2 grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-4 items-start">
      <div className="grid gap-4">
      <MealPlanWeek />
      </div>
      <div className="grid gap-4">
      <Card>
      <CardHeader><CardTitle>Nutrition summary</CardTitle></CardHeader>
      <CardContent className="grid gap-3 text-sm">
      <div className="grid gap-1">
      <div className="flex items-center justify-between"><span>Calories</span><Badge variant="secondary">{cal}%</Badge></div>
      <Progress value={cal} />
      </div>
      <div className="grid gap-1">
      <div className="flex items-center justify-between"><span>Protein</span><Badge variant="secondary">{pro}%</Badge></div>
      <Progress value={pro} />
      </div>
      <div className="grid gap-1">
      <div className="flex items-center justify-between"><span>Carbs</span><Badge variant="secondary">{carb}%</Badge></div>
      <Progress value={carb} />
      </div>
      </CardContent>
      </Card>
      <Dialog>
      <DialogTrigger asChild>
      <Button variant="outline">Open swap dialog</Button>
      </DialogTrigger>
      <DialogContent>
      <DialogHeader><DialogTitle>Swap a meal</DialogTitle></DialogHeader>
      <div className="grid gap-3">
      <Input placeholder="Search recipes" value={query} onChange={(e) => setQuery(e.target.value)} />
      <ScrollArea className="h-48 pr-4">
      <ul className="grid gap-2 text-sm">
      {filtered.map((r) => (<li key={r} className="hover:bg-muted rounded px-2 py-1 cursor-pointer">{r}</li>))}
      </ul>
      </ScrollArea>
      </div>
      </DialogContent>
      </Dialog>
      </div>
      </section>
      </div>
    </div>
  );
}