import React from "react";
import { Button } from "../components/ui/button";
import { Label } from "../components/ui/label";
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Switch } from "../components/ui/switch";

import { useState } from "react";

export default function ProfileSettings() {
    const [dark, setDark] = useState(false);
    const [units, setUnits] = useState("metric");
    const [diet, setDiet] = useState("balanced");
  return (
   <div className="bg-background text-foreground w-full min-w-0 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col gap-6 w-full min-w-0">
          <section className="py-4 grid gap-6">
      <div className="flex items-center justify-between">
      <div>
      <div className="font-medium">Dark mode</div>
      <div className="text-sm text-muted-foreground">Use a dark theme</div>
      </div>
      <Switch checked={dark} onCheckedChange={(c)=>setDark(Boolean(c))} />
      </div>
      <div className="grid gap-2">
      <Label>Units</Label>
      <RadioGroup value={units} onValueChange={setUnits} className="flex items-center gap-6">
      <label className="flex items-center gap-2"><RadioGroupItem value="metric" id="u-m"/><span>Metric</span></label>
      <label className="flex items-center gap-2"><RadioGroupItem value="imperial" id="u-i"/><span>Imperial</span></label>
      </RadioGroup>
      </div>
      <div className="grid gap-2">
      <Label>Default diet</Label>
      <Select value={diet} onValueChange={setDiet}>
      <SelectTrigger><SelectValue placeholder="Select"/></SelectTrigger>
      <SelectContent className="bg-popover text-popover-foreground">
      <SelectItem value="balanced">Balanced</SelectItem>
      <SelectItem value="vegetarian">Vegetarian</SelectItem>
      <SelectItem value="vegan">Vegan</SelectItem>
      </SelectContent>
      </Select>
      </div>
      <div>
      <Button onClick={()=>window.alert('Settings saved (demo).')}>Save settings</Button>
      </div>
      </section>
      </div>
    </div>
  );
}