import { Activity, CalendarIcon, ChevronDown, Download, Droplets, Flame, Leaf, Plus, RefreshCw, Share2, Trash2, Utensils } from "lucide-react";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Calendar } from "../components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../components/ui/dialog";
import { Popover, PopoverContent, PopoverTrigger } from "../components/ui/popover";
import { Progress } from "../components/ui/progress";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";

import React, { useState } from "react";

export default function MealPlan() {
  const [week, setWeek] = useState("this-week");
  const [isAddOpen, setIsAddOpen] = useState(false);
  const days = [
    { name: "Mon", date: "Oct 12", meals: [{ type: "Breakfast", recipe: "Oatmeal with Berries", calories: 320, time: "10m" }, { type: "Lunch", recipe: "Grilled Chicken Salad", calories: 450, time: "15m" }, { type: "Dinner", recipe: "Salmon with Quinoa", calories: 600, time: "30m" }] },
    { name: "Tue", date: "Oct 13", meals: [{ type: "Breakfast", recipe: "Avocado Toast", calories: 350, time: "5m" }, { type: "Lunch", recipe: "Turkey Wrap", calories: 400, time: "10m" }, { type: "Dinner", recipe: null }] },
    { name: "Wed", date: "Oct 14", meals: [{ type: "Breakfast", recipe: "Smoothie Bowl", calories: 300, time: "10m" }, { type: "Lunch", recipe: null }, { type: "Dinner", recipe: "Vegetable Stir Fry", calories: 380, time: "25m" }] },
    { name: "Thu", date: "Oct 15", meals: [{ type: "Breakfast", recipe: null }, { type: "Lunch", recipe: null }, { type: "Dinner", recipe: null }] },
    { name: "Fri", date: "Oct 16", meals: [{ type: "Breakfast", recipe: null }, { type: "Lunch", recipe: null }, { type: "Dinner", recipe: null }] },
    { name: "Sat", date: "Oct 17", meals: [{ type: "Breakfast", recipe: null }, { type: "Lunch", recipe: null }, { type: "Dinner", recipe: null }] },
    { name: "Sun", date: "Oct 18", meals: [{ type: "Breakfast", recipe: null }, { type: "Lunch", recipe: null }, { type: "Dinner", recipe: null }] }
  ];

  return (
    <div className="bg-background text-foreground w-full min-w-0 min-h-screen overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col gap-6 w-full min-w-0">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-foreground">Meal Plan</h1>
            <p className="text-muted-foreground mt-1">Manage your weekly meals and nutrition goals.</p>
          </div>
          <div className="flex items-center gap-2">
            <Select defaultValue="this-week" onValueChange={setWeek}>
              <SelectTrigger className="w-[160px]">
                <CalendarIcon className="w-4 h-4 mr-2 text-muted-foreground" />
                <SelectValue placeholder="Select week" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="last-week">Last Week</SelectItem>
                <SelectItem value="this-week">This Week</SelectItem>
                <SelectItem value="next-week">Next Week</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" size="icon">
              <Share2 className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="icon">
              <Download className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-7 gap-4">
          {days.map((day) => (
            <Card key={day.date} className="flex flex-col h-full bg-card shadow-sm border-border">
              <CardHeader className="pb-2 pt-4 px-4 bg-muted/30 border-b border-border">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-sm font-semibold">{day.name}</CardTitle>
                  <span className="text-xs text-muted-foreground">{day.date}</span>
                </div>
              </CardHeader>
              <CardContent className="p-3 flex-1 flex flex-col gap-3">
                {day.meals.map((meal, idx) => (
                  <div key={idx} className="group relative rounded-md border border-border p-3 hover:border-primary/50 transition-colors bg-background">
                    <div className="flex justify-between items-start mb-1">
                      <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">{meal.type}</span>
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity flex gap-1">
                        <Button variant="ghost" size="icon" className="h-6 w-6 text-muted-foreground hover:text-primary">
                          <RefreshCw className="h-3 w-3" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-6 w-6 text-muted-foreground hover:text-destructive">
                          <Trash2 className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                    {meal.recipe ? (
                      <div>
                        <p className="text-sm font-medium leading-tight mb-1 text-foreground">{meal.recipe}</p>
                        <div className="flex gap-2 text-xs text-muted-foreground">
                          <span>{meal.calories} kcal</span>
                          <span>•</span>
                          <span>{meal.time}</span>
                        </div>
                      </div>
                    ) : (
                      <Dialog open={isAddOpen} onOpenChange={setIsAddOpen}>
                        <DialogTrigger asChild>
                          <Button variant="outline" size="sm" className="w-full mt-1 border-dashed text-muted-foreground hover:text-primary hover:border-primary/50">
                            <Plus className="h-4 w-4 mr-1" /> Add Meal
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Add Meal to {day.name}</DialogTitle>
                            <DialogDescription>Select a recipe from your saved list or let AI suggest one.</DialogDescription>
                          </DialogHeader>
                          <div className="py-4">
                            <Select>
                              <SelectTrigger>
                                <SelectValue placeholder="Select a recipe..." />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="r1">Avocado Toast with Egg</SelectItem>
                                <SelectItem value="r2">Grilled Chicken Salad</SelectItem>
                                <SelectItem value="r3">Salmon with Quinoa</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <DialogFooter>
                            <Button variant="outline" onClick={() => setIsAddOpen(false)}>Cancel</Button>
                            <Button onClick={() => setIsAddOpen(false)}>Add Recipe</Button>
                          </DialogFooter>
                        </DialogContent>
                      </Dialog>
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-card shadow-sm border-border">
          <CardHeader className="pb-3 border-b border-border">
            <CardTitle className="text-lg font-semibold flex items-center gap-2">
              <Activity className="w-5 h-5 text-primary" />
              Weekly Nutrition Summary
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-muted-foreground flex items-center gap-1"><Flame className="w-4 h-4 text-orange-500" /> Calories</span>
                  <span className="text-sm font-bold text-foreground">12,400 / 14,000</span>
                </div>
                <Progress value={88} className="h-2 bg-muted" />
                <p className="text-xs text-muted-foreground text-right">88% of weekly goal</p>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-muted-foreground flex items-center gap-1"><Activity className="w-4 h-4 text-blue-500" /> Protein</span>
                  <span className="text-sm font-bold text-foreground">420g / 500g</span>
                </div>
                <Progress value={84} className="h-2 bg-muted" />
                <p className="text-xs text-muted-foreground text-right">84% of weekly goal</p>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-muted-foreground flex items-center gap-1"><Droplets className="w-4 h-4 text-yellow-500" /> Carbs</span>
                  <span className="text-sm font-bold text-foreground">1,100g / 1,400g</span>
                </div>
                <Progress value={78} className="h-2 bg-muted" />
                <p className="text-xs text-muted-foreground text-right">78% of weekly goal</p>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-muted-foreground flex items-center gap-1"><Leaf className="w-4 h-4 text-green-500" /> Fat</span>
                  <span className="text-sm font-bold text-foreground">380g / 450g</span>
                </div>
                <Progress value={84} className="h-2 bg-muted" />
                <p className="text-xs text-muted-foreground text-right">84% of weekly goal</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}