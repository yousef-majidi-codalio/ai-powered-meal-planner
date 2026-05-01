import React from "react";
import { Button } from "../components/ui/button";
import { Checkbox } from "../components/ui/checkbox";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Slider } from "../components/ui/slider";

import RecipeCard from "../components/RecipeCard";

import { useState } from "react";

export default function MealPlanGenerate() {
    const [cal, setCal] = useState(2000);
    const [diet, setDiet] = useState("balanced");
    const [exclude, setExclude] = useState("");
    const [time, setTime] = useState(30);
    const [pref, setPref] = useState({ veggie: true, quick: true, lowcarb: false, highprotein: true });
    const onSubmit = (e: React.FormEvent) => { e.preventDefault(); window.alert('Preview generated! Open the preview below.'); };
    const base = [
      { title: 'Avocado toast with egg', time: '10 min', tags: ['breakfast','quick'] },
      { title: 'Chicken salad bowl', time: '20 min', tags: ['lunch','high-protein'] },
      { title: 'Pasta primavera', time: '30 min', tags: ['dinner','veggie'] },
      { title: 'Tofu stir fry', time: '25 min', tags: ['dinner','vegan'] },
      { title: 'Smoothie bowl', time: '8 min', tags: ['breakfast','healthy'] },
      { title: 'Turkey chili', time: '40 min', tags: ['dinner','low-carb'] }
    ];
    const [items, setItems] = useState(base.slice(0, 6));
    const generate = () => {
      setItems((prev) => prev.slice().sort(() => Math.random() - 0.5));
    };
  return (
   <div className="bg-background text-foreground w-full min-w-0 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col gap-6 w-full min-w-0">
          <section className="py-4">
      <form onSubmit={onSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="grid gap-3">
      <Label htmlFor="cal">Daily calories</Label>
      <Slider id="cal" value={[cal]} min={1200} max={3500} step={50} onValueChange={(v) => setCal(v[0])} />
      <div className="text-sm text-muted-foreground">{cal} kcal/day</div>
      <Label htmlFor="diet" className="mt-2">Diet</Label>
      <Select value={diet} onValueChange={setDiet}>
      <SelectTrigger id="diet"><SelectValue placeholder="Select diet" /></SelectTrigger>
      <SelectContent className="bg-popover text-popover-foreground">
      <SelectItem value="balanced">Balanced</SelectItem>
      <SelectItem value="vegetarian">Vegetarian</SelectItem>
      <SelectItem value="vegan">Vegan</SelectItem>
      <SelectItem value="keto">Keto</SelectItem>
      </SelectContent>
      </Select>
      <div className="grid grid-cols-2 gap-3 mt-2">
      <label className="flex items-center gap-2 text-sm"><Checkbox checked={pref.veggie} onCheckedChange={(c)=>setPref(p=>({...p, veggie: Boolean(c)}))}/>More veggies</label>
      <label className="flex items-center gap-2 text-sm"><Checkbox checked={pref.quick} onCheckedChange={(c)=>setPref(p=>({...p, quick: Boolean(c)}))}/>Quick meals</label>
      <label className="flex items-center gap-2 text-sm"><Checkbox checked={pref.lowcarb} onCheckedChange={(c)=>setPref(p=>({...p, lowcarb: Boolean(c)}))}/>Lower carb</label>
      <label className="flex items-center gap-2 text-sm"><Checkbox checked={pref.highprotein} onCheckedChange={(c)=>setPref(p=>({...p, highprotein: Boolean(c)}))}/>High protein</label>
      </div>
      </div>
      <div className="grid gap-3">
      <Label htmlFor="ex">Exclude ingredients</Label>
      <Input id="ex" placeholder="e.g. mushrooms, olives" value={exclude} onChange={(e)=>setExclude(e.target.value)} />
      <Label htmlFor="time" className="mt-2">Max cook time (min)</Label>
      <Slider id="time" value={[time]} min={10} max={120} step={5} onValueChange={(v) => setTime(v[0])} />
      <div className="text-sm text-muted-foreground">{time} minutes</div>
      <div className="pt-2">
      <Button type="submit">Generate preview</Button>
      </div>
      </div>
      </form>
      </section>
  <section className="py-2 grid gap-4">
      <div className="flex items-center justify-between">
      <h2 className="text-xl font-semibold">Preview</h2>
      <Button onClick={generate}>Regenerate</Button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {items.map((it, i) => (
      <RecipeCard key={i} title={it.title} time={it.time} tags={it.tags} />
      ))}
      </div>
      </section>
      </div>
    </div>
  );
}