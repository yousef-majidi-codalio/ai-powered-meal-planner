import React from "react";
import { Avatar, AvatarFallback } from "../components/ui/avatar";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Checkbox } from "../components/ui/checkbox";
import { Input } from "../components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger } from "../components/ui/select";
import { Separator } from "../components/ui/separator";

import { CheckCircle2, Clock, Salad } from "lucide-react";
import { useState } from "react";

export default function Landing() {
    const [goal, setGoal] = useState("");
    const [diet, setDiet] = useState<string | undefined>(undefined);
    const [veggie, setVeggie] = useState(false);
    const [status, setStatus] = useState("");
    const [ready, setReady] = useState(false);
    const generatePlan = () => {
      setReady(false);
      setStatus("Generating your plan…");
      window.setTimeout(() => {
        setReady(true);
        setStatus("Done! Navigate to Meal Plan to view.");
      }, 900);
    };
  return (
   <div className="bg-background text-foreground min-h-screen w-full min-w-0 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col gap-12 w-full min-w-0">
          <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4">
      <div className="inline-flex items-center gap-2">
      <Badge>Smart planning</Badge>
      {ready && <Badge variant="secondary">Plan ready</Badge>}
      </div>
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">Healthy meals planned by AI — tailored to you</h1>
      <p className="text-muted-foreground text-lg max-w-[60ch]">Tell us your goals and preferences. We’ll generate balanced, delicious meal plans and a shopping list in seconds.</p>
      <div className="flex items-center gap-2">
      <Button className="">Get started</Button>
      <Button variant="secondary" asChild>
      <a href="/explore">Explore recipes</a>
      </Button>
      </div>
      <div className="mt-4 grid w-full grid-cols-1 gap-3 rounded-xl border p-3 sm:grid-cols-3">
      <Input value={goal} onChange={(e) => setGoal(e.target.value)} placeholder="Goal e.g. High protein" />
      <Select onValueChange={setDiet}>
      <SelectTrigger>Diet: {diet || "Select"}</SelectTrigger>
      <SelectContent className="bg-popover text-popover-foreground z-50">
      <SelectItem value="balanced">Balanced</SelectItem>
      <SelectItem value="keto">Keto</SelectItem>
      <SelectItem value="mediterranean">Mediterranean</SelectItem>
      <SelectItem value="vegan">Vegan</SelectItem>
      </SelectContent>
      </Select>
      <div className="flex items-center gap-2">
      <Checkbox id="veggie" checked={veggie} onCheckedChange={(v) => setVeggie(!!v)} />
      <label htmlFor="veggie" className="text-sm text-muted-foreground">Vegetarian</label>
      </div>
      <div className="sm:col-span-3 flex items-center gap-2">
      <Button onClick={generatePlan}>Generate plan</Button>
      {status && <span className="text-sm text-muted-foreground">{status}</span>}
      </div>
      </div>
      </div>
      </div>
      <div className="relative">
      <div className="grid grid-cols-3 grid-rows-3 gap-2">
      <img src="https://pixabay.com/get/ge9321e9e2b2580bed72d32e729de9da91b807b63e17c906f13c925c54131c818eb83e3409b0f808ff2bbbdb4a137a0ab996785ac1518a7f1513bb318978382af_640.jpg" alt="food" className="col-span-2 row-span-2 h-48 w-full rounded-lg object-cover sm:h-56 md:h-64" />
      <img src="https://pixabay.com/get/ged3de71f50b377bf4f52845d0762c9e2c9c7b560ae1e868e3277773c161919d7d6791c1fa9a4e8145d2bb6cea9fd562708127650e41e7b2400ae82523fec7c7c_640.jpg" alt="food" className="h-24 w-full rounded-lg object-cover sm:h-28 md:h-32" />
      <img src="https://pixabay.com/get/g76b8cd2e3c1a3da852f2e8d3405798af75a5e5f0a8d0b93f1cecef8bafc40ff3516ffd97f41c655ac6a03756698e220ea5f38f93d6069a16886ed115cfaaf685_640.jpg" alt="food" className="h-24 w-full rounded-lg object-cover sm:h-28 md:h-32" />
      <img src="https://pixabay.com/get/ge9716e46a8a89cc8da9e2e6ef3bd207d041259aa3f777467456f3dd68b63337975c546493f7f77ac8fd5cd563c2628700761605d94cddd49d5edd8de2f002106_640.jpg" alt="food" className="col-span-1 row-span-2 h-48 w-full rounded-lg object-cover sm:h-56 md:h-64" />
      <img src="https://pixabay.com/get/gc94935aa39c1a6331b74db6aee5945aad2da462c0d70fb89688d048dbe056b33dd10d00e7260d85fd057c87305d70e178bdf7508c5d00eb81bd30a4175c4b5c1_640.jpg" alt="food" className="h-24 w-full rounded-lg object-cover sm:h-28 md:h-32" />
      <img src="https://pixabay.com/get/g00335f1be7e04d824fe079e256cf8d5ec229340e3ea25ce44bf83cdd55da104afcd9bd9060e661aafc4142f00d1a8a2e0ab54e091ea65a47d4cb8af495577af8_640.jpg" alt="food" className="h-24 w-full rounded-lg object-cover sm:h-28 md:h-32" />
      </div>
      </div>
  <>
      {[{title:"Save time",desc:"Auto-generate weekly plans and shopping lists.",Icon:Clock},{title:"Eat better",desc:"Nutrition-aware suggestions that fit your goals.",Icon:Salad},{title:"Stay on track",desc:"Smart reminders and pantry tracking.",Icon:CheckCircle2}].map(({title,desc,Icon})=> (
      <Card key={title} className="">
      <CardHeader>
      <div className="flex items-center gap-2">
      <Icon className="h-5 w-5 text-primary" />
      <CardTitle>{title}</CardTitle>
      </div>
      <CardDescription>{desc}</CardDescription>
      </CardHeader>
      <CardContent>
      <Button variant="secondary">Learn more</Button>
      </CardContent>
      </Card>
      ))}
      </>
  <>
      {[{n:1,t:"Set your preferences",c:"Tell us diets, allergens, macros, budget."},{n:2,t:"Generate a plan",c:"Our AI suggests meals for the week."},{n:3,t:"Shop and cook",c:"Get a smart shopping list and cook with ease."}].map((s)=> (
      <Card key={s.n}>
      <CardHeader className="space-y-2">
      <Badge variant="secondary">Step {s.n}</Badge>
      <CardTitle>{s.t}</CardTitle>
      <Separator />
      </CardHeader>
      <CardContent className="text-muted-foreground">{s.c}</CardContent>
      </Card>
      ))}
      </>
  <>
      {["This app took the stress out of weeknights.","I finally hit my protein goal consistently.","Pantry tracking saves me money every month!"].map((quote, i) => (
      <Card key={i}>
      <CardHeader>
      <div className="flex items-center gap-3">
      <Avatar><AvatarFallback>{["AL","BK","CM"][i]}</AvatarFallback></Avatar>
      <div className="flex flex-col">
      <span className="font-medium">{["Alex","Bailey","Camila"][i]}</span>
      <Badge variant="secondary">Verified</Badge>
      </div>
      </div>
      </CardHeader>
      <CardContent className="text-muted-foreground">“{quote}”</CardContent>
      </Card>
      ))}
      </>
  <Card className="bg-gradient-to-br from-primary/10 via-accent/10 to-blue-500/10">
      <CardHeader>
      <CardTitle>Start your first smart meal plan</CardTitle>
      </CardHeader>
      <CardContent className="flex items-center gap-3">
      <Button>Generate now</Button>
      <Button variant="secondary" asChild>
      <a href="/meal-plan">See this week</a>
      </Button>
      </CardContent>
      </Card>
  <div className="flex items-center justify-between text-sm text-muted-foreground">
      <div className="flex items-center gap-2">
      <span>AI-Powered Meal Planner</span>
      <Separator orientation="vertical" className="h-4" />
      <span>Eat better, save time</span>
      </div>
      <div className="flex items-center gap-2">
      <Button variant="link" asChild><a href="/privacy">Privacy</a></Button>
      <Button variant="link" asChild><a href="/terms">Terms</a></Button>
      </div>
      </div>
      </div>
    </div>
  );
}