

import { Info, Save, X } from "lucide-react";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Checkbox } from "../components/ui/checkbox";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Slider } from "../components/ui/slider";
import { Switch } from "../components/ui/switch";
import { Textarea } from "../components/ui/textarea";

import React, { useState } from "react";

export default function Preferences() {
    const [diet, setDiet] = useState("vegetarian");
    const [exclusions, setExclusions] = useState<string[]>(["Peanuts", "Shellfish"]);
    const [newExclusion, setNewExclusion] = useState("");
    const [calories, setCalories] = useState(2000);
    const [quickMeals, setQuickMeals] = useState(true);
    const [batchCooking, setBatchCooking] = useState(false);
    const [isSaving, setIsSaving] = useState(false);
    const addExclusion = () => {
      if (newExclusion.trim() && !exclusions.includes(newExclusion.trim())) {
        setExclusions([...exclusions, newExclusion.trim()]);
        setNewExclusion("");
      }
    };
    const removeExclusion = (item: string) => {
      setExclusions(exclusions.filter(e => e !== item));
    };
    const handleSave = () => {
      setIsSaving(true);
      window.setTimeout(() => setIsSaving(false), 800);
    };
  return (
   <div className="bg-background text-foreground w-full min-w-0 min-h-screen overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col gap-6 w-full min-w-0">
          <Card className="bg-card shadow-sm border-border max-w-3xl mx-auto w-full">
      <CardHeader className="border-b border-border pb-4">
      <CardTitle className="text-2xl font-bold text-foreground">Dietary Preferences</CardTitle>
      <p className="text-muted-foreground text-sm mt-1">Customize your AI meal recommendations.</p>
      </CardHeader>
      <CardContent className="pt-6 space-y-8">

      {/* Diet Type */}
      <div className="space-y-3">
      <Label className="text-base font-semibold">Primary Diet</Label>
      <Select value={diet} onValueChange={setDiet}>
      <SelectTrigger className="w-full sm:w-[300px]">
      <SelectValue placeholder="Select diet type" />
      </SelectTrigger>
      <SelectContent>
      <SelectItem value="anything">Anything</SelectItem>
      <SelectItem value="vegetarian">Vegetarian</SelectItem>
      <SelectItem value="vegan">Vegan</SelectItem>
      <SelectItem value="pescatarian">Pescatarian</SelectItem>
      <SelectItem value="keto">Keto</SelectItem>
      <SelectItem value="paleo">Paleo</SelectItem>
      </SelectContent>
      </Select>
      </div>

      {/* Allergies & Exclusions */}
      <div className="space-y-3">
      <Label className="text-base font-semibold">Allergies & Exclusions</Label>
      <div className="flex flex-wrap gap-2 mb-3">
      {exclusions.map(item => (
      <Badge key={item} variant="secondary" className="px-3 py-1 text-sm bg-destructive/10 text-destructive hover:bg-destructive/20 flex items-center gap-1">
      {item}
      <X className="w-3 h-3 cursor-pointer" onClick={() => removeExclusion(item)} />
      </Badge>
      ))}
      </div>
      <div className="flex gap-2 max-w-md">
      <Input 
      placeholder="Add an ingredient to exclude..." 
      value={newExclusion}
      onChange={(e) => setNewExclusion(e.target.value)}
      onKeyDown={(e) => e.key === 'Enter' && addExclusion()}
      />
      <Button variant="secondary" onClick={addExclusion}>Add</Button>
      </div>
      </div>

      {/* Macros / Calories */}
      <div className="space-y-4">
      <div className="flex justify-between items-center">
      <Label className="text-base font-semibold">Daily Calorie Target</Label>
      <span className="font-bold text-primary">{calories} kcal</span>
      </div>
      <Slider 
      value={[calories]} 
      onValueChange={(val) => setCalories(val[0])} 
      max={4000} 
      min={1200} 
      step={50} 
      className="max-w-md"
      />
      <div className="flex justify-between max-w-md text-xs text-muted-foreground">
      <span>1200</span>
      <span>4000</span>
      </div>
      </div>

      {/* Cooking Preferences */}
      <div className="space-y-4">
      <Label className="text-base font-semibold">Cooking Preferences</Label>
      <div className="grid gap-4 sm:grid-cols-2">
      <div className="flex items-center space-x-2 border border-border p-3 rounded-lg">
      <Switch id="quick-meals" checked={quickMeals} onCheckedChange={setQuickMeals} />
      <Label htmlFor="quick-meals" className="flex-1 cursor-pointer">Prefer Quick Meals (&lt; 30m)</Label>
      </div>
      <div className="flex items-center space-x-2 border border-border p-3 rounded-lg">
      <Switch id="batch-cooking" checked={batchCooking} onCheckedChange={setBatchCooking} />
      <Label htmlFor="batch-cooking" className="flex-1 cursor-pointer">Enable Batch Cooking</Label>
      </div>
      </div>
      </div>

      {/* Additional Notes */}
      <div className="space-y-3">
      <Label className="text-base font-semibold">Additional Notes for AI</Label>
      <Textarea 
      placeholder="e.g., I prefer high protein breakfasts and light dinners..." 
      className="min-h-[100px]"
      />
      <p className="text-xs text-muted-foreground flex items-center gap-1">
      <Info className="w-3 h-3" /> The AI will consider these instructions when generating plans.
      </p>
      </div>

      <div className="pt-4 border-t border-border flex justify-end gap-3">
      <Button variant="outline">Discard Changes</Button>
      <Button onClick={handleSave} disabled={isSaving}>
      {isSaving ? "Saving..." : <><Save className="w-4 h-4 mr-2" /> Save Preferences</>}
      </Button>
      </div>
      </CardContent>
      </Card>
      </div>
    </div>
  );
}