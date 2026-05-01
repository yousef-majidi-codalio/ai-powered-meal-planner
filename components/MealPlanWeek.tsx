

import { useMemo, useState } from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger } from "./ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

        export default function MealPlanWeek() {
  const days = useMemo(() => ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"], []);
  const meals = useMemo(() => ["Breakfast","Lunch","Dinner"], []);
  const options = useMemo(() => ["Chicken Salad","Tofu Stir-fry","Pasta Primavera","Grilled Salmon","Veggie Bowl"], []);
  const [assignments, setAssignments] = useState<Record<string, Record<string, string>>>({});
  const [view, setView] = useState("week");
  const handleAssign = (day: string, meal: string, recipe: string) => {
  setAssignments((prev) => ({
  ...prev,
  [day]: { ...(prev[day] || {}), [meal]: recipe },
  }));
  };
        return (
            <div className="flex flex-col gap-4">
    <Tabs value={view} onValueChange={setView}>
    <TabsList>
    <TabsTrigger value="week">Week</TabsTrigger>
    <TabsTrigger value="day">Day</TabsTrigger>
    </TabsList>
    <TabsContent value="week">
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
    {days.map((d) => (
    <Card key={d} className="">
    <CardHeader className="pb-2">
    <CardTitle className="text-base">{d}</CardTitle>
    </CardHeader>
    <CardContent className="flex flex-col gap-2">
    {meals.map((m) => (
    <div key={m} className="flex items-center justify-between rounded-lg border p-2">
    <div className="flex items-center gap-2">
    <Badge variant="secondary" className="shrink-0">{m}</Badge>
    <div className="text-sm text-muted-foreground line-clamp-1">{assignments[d]?.[m] || "Pick a recipe"}</div>
    </div>
    <Dialog>
    <DialogTrigger asChild>
    <Button size="sm" variant="outline">Change</Button>
    </DialogTrigger>
    <DialogContent>
    <DialogHeader>
    <DialogTitle>Pick a recipe</DialogTitle>
    <DialogDescription>Assign a recipe to {m} on {d}.</DialogDescription>
    </DialogHeader>
    <Select onValueChange={(v) => handleAssign(d, m, v)}>
    <SelectTrigger className="w-full">Select recipe</SelectTrigger>
    <SelectContent className="bg-popover text-popover-foreground z-50">
    {options.map((o) => (
    <SelectItem key={o} value={o}>{o}</SelectItem>
    ))}
    </SelectContent>
    </Select>
    </DialogContent>
    </Dialog>
    </div>
    ))}
    </CardContent>
    </Card>
    ))}
    </div>
    </TabsContent>
    <TabsContent value="day">
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
    {meals.map((m) => (
    <Card key={m}>
    <CardHeader className="pb-2"><CardTitle className="text-base">{m}</CardTitle></CardHeader>
    <CardContent className="flex items-center justify-between">
    <div className="text-sm text-muted-foreground">{assignments[days[0]]?.[m] || "Pick a recipe"}</div>
    <Button size="sm" variant="outline">Change</Button>
    </CardContent>
    </Card>
    ))}
    </div>
    </TabsContent>
    </Tabs>
    </div>
        );
        }