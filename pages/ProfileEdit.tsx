import React from "react";
import { Button } from "../components/ui/button";
import { Checkbox } from "../components/ui/checkbox";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Slider } from "../components/ui/slider";
import { Textarea } from "../components/ui/textarea";

import { useState } from "react";

export default function ProfileEdit() {
    const [name, setName] = useState("Alex");
    const [bio, setBio] = useState("Cooking enthusiast on a health journey.");
    const [diet, setDiet] = useState("balanced");
    const [time, setTime] = useState(30);
    const [likes, setLikes] = useState("");
    const [nuts, setNuts] = useState(false);
    const [shellfish, setShellfish] = useState(false);
    const [eggs, setEggs] = useState(false);
    const [soy, setSoy] = useState(false);
    const onSubmit = (e: React.FormEvent) => { e.preventDefault(); window.alert('Preferences saved (demo).'); };
  return (
   <div className="bg-background text-foreground w-full min-w-0 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col gap-6 w-full min-w-0">
          <section className="py-4">
      <form onSubmit={onSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="grid gap-3">
      <Label htmlFor="name">Name</Label>
      <Input id="name" value={name} onChange={(e)=>setName(e.target.value)} />
      <Label htmlFor="bio" className="mt-2">Bio</Label>
      <Textarea id="bio" value={bio} onChange={(e)=>setBio(e.target.value)} rows={5} />
      <Label className="mt-2">Allergies</Label>
      <div className="grid grid-cols-2 gap-3 text-sm">
      <label className="flex items-center gap-2"><Checkbox checked={nuts} onCheckedChange={(c)=>setNuts(Boolean(c))}/>Nuts</label>
      <label className="flex items-center gap-2"><Checkbox checked={shellfish} onCheckedChange={(c)=>setShellfish(Boolean(c))}/>Shellfish</label>
      <label className="flex items-center gap-2"><Checkbox checked={eggs} onCheckedChange={(c)=>setEggs(Boolean(c))}/>Eggs</label>
      <label className="flex items-center gap-2"><Checkbox checked={soy} onCheckedChange={(c)=>setSoy(Boolean(c))}/>Soy</label>
      </div>
      </div>
      <div className="grid gap-3">
      <Label htmlFor="diet">Diet</Label>
      <Select value={diet} onValueChange={setDiet}>
      <SelectTrigger id="diet"><SelectValue placeholder="Select diet" /></SelectTrigger>
      <SelectContent className="bg-popover text-popover-foreground">
      <SelectItem value="balanced">Balanced</SelectItem>
      <SelectItem value="vegetarian">Vegetarian</SelectItem>
      <SelectItem value="vegan">Vegan</SelectItem>
      <SelectItem value="keto">Keto</SelectItem>
      </SelectContent>
      </Select>
      <Label className="mt-2">Cooking time per day</Label>
      <Slider value={[time]} min={10} max={120} step={5} onValueChange={(v)=>setTime(v[0])} />
      <div className="text-sm text-muted-foreground">{time} minutes</div>
      <Label htmlFor="likes" className="mt-2">Favorite ingredients</Label>
      <Input id="likes" value={likes} onChange={(e)=>setLikes(e.target.value)} placeholder="e.g. salmon, spinach" />
      <div className="pt-2">
      <Button type="submit">Save</Button>
      </div>
      </div>
      </form>
      </section>
      </div>
    </div>
  );
}