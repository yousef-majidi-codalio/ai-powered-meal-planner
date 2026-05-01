

import { useState } from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ToggleGroup, ToggleGroupItem } from "./ui/toggle-group";

        export default function PreferenceChips() {
  const options = ["vegetarian", "vegan", "dairy-free", "gluten-free", "keto", "paleo", "high-protein", "low-carb"];
  const [values, setValues] = useState<Array<string>>(["high-protein"]);
        return (
            <div className="grid gap-3">
    <div className="text-sm text-muted-foreground">Tap to toggle your preferences</div>
    <ToggleGroup type="multiple" value={values} onValueChange={(v) => setValues(v)} className="flex flex-wrap gap-2">
    {options.map((o) => (
    <ToggleGroupItem key={o} value={o} className="px-3 py-1 rounded-full border data-[state=on]:bg-secondary data-[state=on]:text-secondary-foreground">
    <span className="capitalize">{o}</span>
    </ToggleGroupItem>
    ))}
    </ToggleGroup>
    <div className="flex items-center gap-2">
    <Button variant="outline" size="sm" onClick={() => setValues([])}>Clear</Button>
    <Button variant="secondary" size="sm" onClick={() => void 0}>Apply</Button>
    </div>
    <div className="flex items-center gap-2 flex-wrap">
    {values.map((v) => (<Badge key={v} variant="secondary" className="capitalize">{v}</Badge>))}
    </div>
    </div>
        );
        }