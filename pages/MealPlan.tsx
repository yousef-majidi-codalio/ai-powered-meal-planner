import React from "react";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "../components/ui/tabs";

import { useState } from "react";
import { Link } from "react-router-dom";

export default function MealPlan() {
    const [week, setWeek] = useState(24);
  return (
   <div className="bg-background text-foreground w-full min-w-0 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col gap-6 w-full min-w-0">
          <section className="py-4 grid gap-4">
      <div className="flex items-center justify-between">
      <h1 className="text-2xl font-semibold">Your Meal Plan</h1>
      <div className="flex items-center gap-2">
      <Button asChild variant="outline" size="sm"><Link to="/meal-plan/current">Current week</Link></Button>
      <Button asChild variant="outline" size="sm"><Link to="/meal-plan/generate">Generate</Link></Button>
      <Button asChild variant="outline" size="sm"><Link to="/meal-plan/history">History</Link></Button>
      </div>
      </div>
      <Card>
      <CardHeader>
      <CardTitle className="flex items-center justify-between">Overview <Badge variant="secondary">{`Week ${week}`}</Badge></CardTitle>
      </CardHeader>
      <CardContent className="grid gap-3 text-sm text-muted-foreground">
      <div>Total calories target: 13,300</div>
      <div>Favorites this week: 4</div>
      </CardContent>
      <CardFooter className="flex items-center justify-between">
      <div className="flex items-center gap-2">
      <Button size="sm" variant="outline" onClick={() => setWeek((w) => Math.max(1, w - 1))}>Prev</Button>
      <Button size="sm" onClick={() => setWeek((w) => w + 1)}>Next</Button>
      </div>
      <Button asChild size="sm"><Link to="/meal-plan/current">Open current week</Link></Button>
      </CardFooter>
      </Card>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <Card>
      <CardHeader><CardTitle>Quick link</CardTitle></CardHeader>
      <CardContent className="text-sm text-muted-foreground">Update preferences to improve suggestions.</CardContent>
      <CardFooter><Button asChild variant="outline" size="sm"><Link to="/profile/edit">Edit profile</Link></Button></CardFooter>
      </Card>
      <Card>
      <CardHeader><CardTitle>Discover</CardTitle></CardHeader>
      <CardContent className="text-sm text-muted-foreground">Explore recipes tailored to you.</CardContent>
      <CardFooter><Button asChild variant="outline" size="sm"><Link to="/recipes/discover">Discover</Link></Button></CardFooter>
      </Card>
      <Card>
      <CardHeader><CardTitle>Saved</CardTitle></CardHeader>
      <CardContent className="text-sm text-muted-foreground">Revisit favorites anytime.</CardContent>
      <CardFooter><Button asChild variant="outline" size="sm"><Link to="/recipes/saved">Saved recipes</Link></Button></CardFooter>
      </Card>
      </div>
      </section>
      </div>
    </div>
  );
}