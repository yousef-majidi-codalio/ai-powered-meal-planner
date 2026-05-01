import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Separator } from "../components/ui/separator";

import { BrainCircuit, CalendarDays, ChevronLeft, ChevronRight, ListChecks, Salad, ShoppingCart, Sparkles } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Landing() {
    const [email, setEmail] = useState("");
    const items = [
      { name: 'Alex P.', quote: 'I save hours every week. The meals are delicious and balanced!' },
      { name: 'Samira K.', quote: 'Shopping list grouping is a game-changer for my Sunday runs.' },
      { name: 'Taylor R.', quote: 'Love the swaps and the macro goals — super easy.' }
    ];
    const [index, setIndex] = useState(0);
    const prev = () => setIndex((i) => (i - 1 + items.length) % items.length);
    const next = () => setIndex((i) => (i + 1) % items.length);
  return (
   <div className="bg-background text-foreground w-full min-w-0 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col gap-6 w-full min-w-0">
          <section className="py-8 sm:py-12">
        <div className="rounded-2xl p-6 sm:p-8 shadow-sm text-white" style={{ backgroundImage: 'var(--gradient-hero)' }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <Badge variant="secondary" className="uppercase tracking-wide/5 bg-white/10 text-white border-white/20">AI Meal Planner</Badge>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">Eat Better, Effortlessly</h1>
              <p className="text-base text-white/90">Get personalized weekly meal plans and smart shopping lists tailored to your goals.</p>
              <div className="flex items-center gap-2">
                <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" className="max-w-xs" />
                <Button asChild>
                  <Link to="/meal-plan/generate">Start free</Link>
                </Button>
              </div>
              <p className="text-xs text-white/75">No credit card required.</p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <img src="https://pixabay.com/get/g3aaef9a32348fef07c5767a972d96be92d10dfa850b1a95208d28c77aafb5c67522847e77e655bf11407684d6ff4f174a71f55faf2ff791e6bc95c93524f3249_640.jpg" alt="meal" className="rounded-lg w-full h-40 sm:h-48 object-cover" />
              <img src="https://pixabay.com/get/g998652dafa83df856425fa2b6931907df74af6f2d905f1e201cb81920cad0aabcf554bdd914e31fbae5ff9c9a632385a5187a9a5ed68499efc4cdd8e3de4605c_640.jpg" alt="meal" className="rounded-lg w-full h-40 sm:h-48 object-cover" />
              <img src="https://pixabay.com/get/gae675d5662e2a9a8d5ddd1c32cd72fc426fdd3569c9734066061a082645f63af64cc7fa464619bd2120960ad9a7a02cdb226ebec04cb3065a73034d30a8a3507_640.jpg" alt="meal" className="rounded-lg w-full h-40 sm:h-48 object-cover" />
              <img src="https://pixabay.com/get/gc1444f280dda56e5bcc2cb68b248caa8ee63dbbd6ac0a3e5e3de08a689ef4b1e207601e44245d21080a4d001d254e1f1ff7587e428de9c5ae0c7d6a04e9e5e9d_640.jpg" alt="meal" className="rounded-lg w-full h-40 sm:h-48 object-cover" />
            </div>
          </div>
        </div>
      </section>
  <section className="py-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <Card>
      <CardHeader>
      <CardTitle className="flex items-center gap-2"><Sparkles className="h-5 w-5 text-primary" /> Personalized Plans</CardTitle>
      </CardHeader>
      <CardContent className="text-sm text-muted-foreground">Our AI learns your tastes and nutrition goals to craft the perfect week.</CardContent>
      </Card>
      <Card>
      <CardHeader>
      <CardTitle className="flex items-center gap-2"><ShoppingCart className="h-5 w-5 text-primary" /> Smart Shopping</CardTitle>
      </CardHeader>
      <CardContent className="text-sm text-muted-foreground">Automatic grocery lists grouped by aisle to save time at the store.</CardContent>
      </Card>
      <Card>
      <CardHeader>
      <CardTitle className="flex items-center gap-2"><Salad className="h-5 w-5 text-primary" /> Balanced Nutrition</CardTitle>
      </CardHeader>
      <CardContent className="text-sm text-muted-foreground">Hit your macros and micronutrients without the spreadsheet headache.</CardContent>
      </Card>
      </div>
      </section>
  <section className="py-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Card>
      <CardHeader>
      <Badge variant="secondary" className="w-fit">Step 1</Badge>
      <CardTitle className="mt-2 flex items-center gap-2"><ListChecks className="h-5 w-5 text-primary"/> Set preferences</CardTitle>
      </CardHeader>
      <CardContent className="text-sm text-muted-foreground">Tell us your dietary needs, goals, and ingredients you love.</CardContent>
      </Card>
      <Card>
      <CardHeader>
      <Badge variant="secondary" className="w-fit">Step 2</Badge>
      <CardTitle className="mt-2 flex items-center gap-2"><BrainCircuit className="h-5 w-5 text-primary"/> Generate plan</CardTitle>
      </CardHeader>
      <CardContent className="text-sm text-muted-foreground">We craft a balanced week of meals and a tidy shopping list.</CardContent>
      </Card>
      <Card>
      <CardHeader>
      <Badge variant="secondary" className="w-fit">Step 3</Badge>
      <CardTitle className="mt-2 flex items-center gap-2"><CalendarDays className="h-5 w-5 text-primary"/> Cook & enjoy</CardTitle>
      </CardHeader>
      <CardContent className="text-sm text-muted-foreground">Swap recipes anytime and track your progress.</CardContent>
      </Card>
      </div>
      </section>
  <section className="py-4">
      <div className="flex items-center justify-between mb-3">
      <h2 className="text-xl font-semibold">What Users Say</h2>
      <div className="flex items-center gap-2">
      <Button variant="outline" size="icon" onClick={prev}><ChevronLeft className="h-4 w-4"/></Button>
      <Button variant="outline" size="icon" onClick={next}><ChevronRight className="h-4 w-4"/></Button>
      </div>
      </div>
      <Card>
      <CardContent className="p-4 flex items-center gap-4">
      <Avatar>
      <AvatarImage src="" alt={items[index].name} />
      <AvatarFallback>{items[index].name.slice(0,2).toUpperCase()}</AvatarFallback>
      </Avatar>
      <div>
      <div className="font-medium">{items[index].name}</div>
      <div className="text-sm text-muted-foreground mt-1">{items[index].quote}</div>
      </div>
      </CardContent>
      </Card>
      </section>
  <section className="py-8 sm:py-12">
      <div className="rounded-xl p-6 sm:p-8 text-center grid gap-3 shadow-sm text-white" style={{ backgroundImage: 'var(--gradient-cta)' }}>
      <Badge variant="secondary" className="mx-auto bg-white/10 text-white border-white/20">Ready to start?</Badge>
      <h3 className="text-2xl sm:text-3xl font-semibold">Your personalized plan is a click away</h3>
      <p className="text-white/90">Tell us a little about you and get a full week of meals in seconds.</p>
      <div>
      <Button asChild size="lg"><Link to="/meal-plan/generate">Generate my plan</Link></Button>
      </div>
      </div>
      </section>
      </div>
    </div>
  );
}