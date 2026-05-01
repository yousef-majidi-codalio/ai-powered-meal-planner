import React from "react";
import { Badge } from "../components/ui/badge";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "../components/ui/breadcrumb";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Label } from "../components/ui/label";
import { Progress } from "../components/ui/progress";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Separator } from "../components/ui/separator";
import { Skeleton } from "../components/ui/skeleton";
import { Switch } from "../components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";

import { Download, Flame, Sparkles, TrendingUp } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

export default function PremiumInsights() {
  const [range, setRange] = useState("30d");
  const metrics = useMemo(() => {
    switch (range) {
      case "7d":
        return { calories: 1200, caloriesPct: 40, variety: 72, adherence: 78 };
      case "90d":
        return { calories: 8200, caloriesPct: 82, variety: 86, adherence: 84 };
      default:
        return { calories: 3400, caloriesPct: 68, variety: 80, adherence: 82 };
    }
  }, [range]);
  const [tab, setTab] = useState("macros");
  const [compare, setCompare] = useState(false);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const t = window.setTimeout(() => setLoading(false), 500);
    return () => window.clearTimeout(t);
  }, [tab, compare]);
  const tabTitle = tab === "macros" ? "Macronutrient balance" : tab === "time" ? "Time saved vs. cooking" : "Budget usage";
  const [applied, setApplied] = useState<Record<string, boolean>>({});
  const recs = [
    { id: 'r1', title: 'Swap one red meat dinner', desc: 'Try a legume-based recipe this week', impact: '+6% protein variety' },
    { id: 'r2', title: 'Add veggie side twice', desc: 'Include leafy greens with lunch', impact: '+12% micronutrients' },
    { id: 'r3', title: 'Batch-cook grains', desc: 'Save prep time for busy days', impact: '\u221225 min / week' },
  ];
  const topRecipes = [
    { id: 't1', title: 'Mediterranean Bowl', badge: 'High protein', saves: 280 },
    { id: 't2', title: 'Tofu Stir Fry', badge: 'Low carb', saves: 190 },
    { id: 't3', title: 'Chickpea Curry', badge: 'Fiber rich', saves: 220 },
    { id: 't4', title: 'Grilled Salmon', badge: 'Omega-3', saves: 260 },
  ];
  const applyRec = (id: string) => setApplied((prev) => ({ ...prev, [id]: true }));
  return (
    <div className="bg-background text-foreground w-full min-w-0 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col gap-6 w-full min-w-0">
        <section className="grid gap-4">
          <div className="flex items-center justify-between gap-3">
            <div className="min-w-0">
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Premium Insights</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
              <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
                <Badge variant="secondary">Premium</Badge>
                <span>Data-driven nutrition and planning insights</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Select value={range} onValueChange={setRange}>
                <SelectTrigger className="w-[140px]"><SelectValue placeholder="Range" /></SelectTrigger>
                <SelectContent className="bg-popover text-popover-foreground">
                  <SelectItem value="7d">Last 7 days</SelectItem>
                  <SelectItem value="30d">Last 30 days</SelectItem>
                  <SelectItem value="90d">Last 90 days</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" onClick={() => window.alert(`Exported insights for ${range}`)}>
                <Download className="h-4 w-4 mr-2" /> Export
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-base"><Flame className="h-4 w-4 text-primary" /> Calories saved</CardTitle>
                <CardDescription>vs. baseline</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-semibold">{metrics.calories.toLocaleString()} kcal</div>
                <div className="mt-3">
                  <Progress value={metrics.caloriesPct} />
                  <div className="mt-1 text-xs text-muted-foreground">{metrics.caloriesPct}% towards goal</div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-base"><TrendingUp className="h-4 w-4 text-primary" /> Variety score</CardTitle>
                <CardDescription>Diverse ingredients</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-semibold">{metrics.variety}/100</div>
                <div className="mt-3">
                  <Progress value={metrics.variety} />
                  <div className="mt-1 text-xs text-muted-foreground">Target 80+</div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-base"><Sparkles className="h-4 w-4 text-primary" /> Plan adherence</CardTitle>
                <CardDescription>Completed as planned</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-semibold">{metrics.adherence}%</div>
                <div className="mt-3">
                  <Progress value={metrics.adherence} />
                  <div className="mt-1 text-xs text-muted-foreground">Keep it up!</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
        <section className="grid gap-4">
          <div className="flex items-center justify-between gap-3">
            <Tabs value={tab} onValueChange={(v) => setTab(v)}>
              <TabsList>
                <TabsTrigger value="macros">Macros</TabsTrigger>
                <TabsTrigger value="time">Time saved</TabsTrigger>
                <TabsTrigger value="budget">Budget</TabsTrigger>
              </TabsList>
            </Tabs>
            <div className="flex items-center gap-2">
              <Label htmlFor="compare" className="text-sm text-muted-foreground">Compare period</Label>
              <Switch id="compare" checked={compare} onCheckedChange={(c) => setCompare(Boolean(c))} />
            </div>
          </div>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">{tabTitle}</CardTitle>
            </CardHeader>
            <CardContent>
              {loading ? (
                <div className="grid gap-3">
                  <Skeleton className="h-6 w-40" />
                  <Skeleton className="h-40 w-full" />
                  <div className="grid grid-cols-3 gap-3">
                    <Skeleton className="h-6" />
                    <Skeleton className="h-6" />
                    <Skeleton className="h-6" />
                  </div>
                </div>
              ) : (
                <div className="grid gap-4">
                  <div className="text-sm text-muted-foreground">{compare ? 'Comparing to last period' : 'Current period only'}</div>
                  <Separator />
                  <div className="h-40 w-full rounded-md bg-muted" />
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
                    <div className="rounded-md border border-border p-3">
                      <div className="font-medium">High-protein days</div>
                      <div className="text-muted-foreground">{tab === 'macros' ? 9 : 5}</div>
                    </div>
                    <div className="rounded-md border border-border p-3">
                      <div className="font-medium">Streak (days)</div>
                      <div className="text-muted-foreground">{tab === 'time' ? 6 : 3}</div>
                    </div>
                    <div className="rounded-md border border-border p-3">
                      <div className="font-medium">Delta vs. last</div>
                      <div className="text-muted-foreground">{compare ? '+8%' : '\u2014'}</div>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </section>
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
          <div className="grid gap-3">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Recommendations</h3>
              <Badge variant="secondary">AI</Badge>
            </div>
            <div className="grid gap-3">
              {recs.map((r) => (
                <Card key={r.id}>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base flex items-center justify-between">
                      <span>{r.title}</span>
                      {applied[r.id] && <Badge className="ml-2">Applied</Badge>}
                    </CardTitle>
                    <CardDescription>{r.desc}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex items-center justify-between gap-3">
                    <div className="text-sm text-muted-foreground">Impact: {r.impact}</div>
                    <Button size="sm" variant={applied[r.id] ? 'secondary' : 'default'} onClick={() => applyRec(r.id)}>
                      {applied[r.id] ? 'Applied' : 'Apply'}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="grid gap-3">
            <h3 className="text-lg font-semibold">Top Recipes</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {topRecipes.map((tr) => (
                <Card key={tr.id} className="overflow-hidden">
                  <div className="h-28 w-full bg-muted" />
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">{tr.title}</CardTitle>
                    <CardDescription>{tr.badge}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex items-center justify-between">
                    <div className="text-sm text-muted-foreground">Saves {tr.saves} kcal</div>
                    <Button size="sm" variant="outline">View</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
