
import { useState } from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

import { ChevronLeft, ChevronRight, Shuffle } from "lucide-react";
        export default function MealPlanWeek({ day }) {
  type Day = { date: string; label: string; meal: string; calories: number; selection: string };
  const [week, setWeek] = useState<Array<Day>>(() => {
  const days = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];
  return days.map((d, i) => ({ date: `${i}`, label: d, meal: i % 3 === 0 ? 'breakfast' : i % 3 === 1 ? 'lunch' : 'dinner', calories: 500 + i*37, selection: 'Chef\'s choice' }));
  });
  const suggestions = ["Avocado toast", "Chicken salad", "Pasta primavera", "Grilled salmon", "Veggie bowl", "Smoothie bowl"];
  const updateMeal = (idx: number, meal: string) => {
  setWeek((w) => w.map((d,i) => i === idx ? { ...d, meal } : d));
  };
  const setSuggestion = (idx: number, selection: string) => {
  setWeek((w) => w.map((d,i) => i === idx ? { ...d, selection } : d));
  };
        return (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
    {week.map((day, idx) => (
    <Card key={day.date} className="overflow-hidden">
    <CardHeader className="px-4 pt-4 pb-2">
    <div className="flex items-center justify-between gap-4">
    <CardTitle className="text-base">{day.label}</CardTitle>
    <Badge variant="secondary">{day.calories} kcal</Badge>
    </div>
    </CardHeader>
    <CardContent className="px-4 pt-0 pb-4 grid gap-3">
    <div className="text-sm">
    <div className="flex items-center justify-between gap-4">
    <span className="text-muted-foreground">Meal</span>
    <Select value={day.meal} onValueChange={(v) => updateMeal(idx, v)}>
    <SelectTrigger className="h-8 w-[140px]"><SelectValue placeholder="Meal" /></SelectTrigger>
    <SelectContent className="bg-popover text-popover-foreground">
    <SelectItem value="breakfast">Breakfast</SelectItem>
    <SelectItem value="lunch">Lunch</SelectItem>
    <SelectItem value="dinner">Dinner</SelectItem>
    </SelectContent>
    </Select>
    </div>
    </div>
    <Popover>
    <PopoverTrigger asChild>
    <Button variant="outline" size="sm" className="w-full justify-start"><Shuffle className="h-4 w-4 mr-2"/>Swap suggestion</Button>
    </PopoverTrigger>
    <PopoverContent className="w-64 bg-popover text-popover-foreground">
    <div className="grid gap-2 text-sm">
    {suggestions.slice(0,3).map((s) => (
    <button key={s} className="text-left hover:bg-muted rounded px-2 py-1" onClick={() => setSuggestion(idx, s)}>{s}</button>
    ))}
    </div>
    </PopoverContent>
    </Popover>
    <Dialog>
    <DialogTrigger asChild>
    <Button variant="secondary" size="sm" className="w-full">View day</Button>
    </DialogTrigger>
    <DialogContent>
    <DialogHeader>
    <DialogTitle>{day.label} - {day.meal}</DialogTitle>
    </DialogHeader>
    <div className="text-sm text-muted-foreground">Planned: {day.selection}</div>
    </DialogContent>
    </Dialog>
    </CardContent>
    </Card>
    ))}
    </div>
        );
        }