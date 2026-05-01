

import { ArrowDownRight, ArrowUpRight, Award, ChevronRight, CreditCard, Gift, Heart, History, Settings } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Progress } from "../components/ui/progress";
import { Separator } from "../components/ui/separator";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table";

import React from "react";
import { useNavigate } from "react-router-dom";

export default function Profile() {
    const navigate = useNavigate();
    const activities = [
      { date: "Oct 12", description: "Completed weekly meal plan", points: 50, type: "earn" },
      { date: "Oct 10", description: "Redeemed $5 Grocery Coupon", points: 500, type: "spend" },
      { date: "Oct 08", description: "Saved 5 new recipes", points: 25, type: "earn" },
      { date: "Oct 05", description: "Generated AI shopping list", points: 10, type: "earn" },
    ];
  return (
   <div className="bg-background text-foreground w-full min-w-0 min-h-screen overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col gap-6 w-full min-w-0">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card className="md:col-span-2 bg-card shadow-sm border-border">
      <CardHeader className="pb-4">
      <CardTitle className="text-xl font-semibold text-foreground">Profile Overview</CardTitle>
      </CardHeader>
      <CardContent>
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
      <Avatar className="w-24 h-24 border-4 border-background shadow-sm">
      <AvatarImage src="https://i.pravatar.cc/150?u=a042581f4e29026704d" alt="User" />
      <AvatarFallback>JD</AvatarFallback>
      </Avatar>
      <div className="flex-1 text-center sm:text-left">
      <h2 className="text-2xl font-bold text-foreground">Jane Doe</h2>
      <p className="text-muted-foreground mb-3">jane.doe@example.com</p>
      <div className="flex flex-wrap justify-center sm:justify-start gap-2 mb-4">
      <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">Pro Member</Badge>
      <Badge variant="outline">Vegetarian</Badge>
      <Badge variant="outline">Gluten-Free</Badge>
      </div>
      <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
      <Button variant="outline" size="sm" onClick={() => navigate("/profile/preferences")}>
      <Settings className="w-4 h-4 mr-2" /> Edit Preferences
      </Button>
      <Button variant="outline" size="sm" onClick={() => navigate("/profile/subscription")}>
      <CreditCard className="w-4 h-4 mr-2" /> Manage Subscription
      </Button>
      </div>
      </div>
      </div>
      </CardContent>
      </Card>

      <div className="flex flex-col gap-6">
      <Card className="bg-card shadow-sm border-border">
      <CardContent className="p-0">
      <div className="flex flex-col">
      <Button variant="ghost" className="justify-between w-full h-14 px-4 rounded-none rounded-t-xl hover:bg-muted/50" onClick={() => navigate("/profile/saved-recipes")}>
      <span className="flex items-center"><Heart className="w-5 h-5 mr-3 text-rose-500" /> Saved Recipes</span>
      <div className="flex items-center">
      <Badge variant="secondary" className="mr-2">42</Badge>
      <ChevronRight className="w-4 h-4 text-muted-foreground" />
      </div>
      </Button>
      <Separator />
      <Button variant="ghost" className="justify-between w-full h-14 px-4 rounded-none hover:bg-muted/50" onClick={() => navigate("/profile/preferences")}>
      <span className="flex items-center"><Settings className="w-5 h-5 mr-3 text-slate-500" /> Dietary Settings</span>
      <ChevronRight className="w-4 h-4 text-muted-foreground" />
      </Button>
      <Separator />
      <Button variant="ghost" className="justify-between w-full h-14 px-4 rounded-none rounded-b-xl hover:bg-muted/50" onClick={() => navigate("/profile/subscription")}>
      <span className="flex items-center"><CreditCard className="w-5 h-5 mr-3 text-emerald-500" /> Billing & Plan</span>
      <ChevronRight className="w-4 h-4 text-muted-foreground" />
      </Button>
      </div>
      </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20 shadow-sm">
      <CardHeader className="pb-2">
      <CardTitle className="text-sm font-semibold flex items-center text-foreground">
      <Award className="w-4 h-4 mr-2 text-primary" />
      Rewards Balance
      </CardTitle>
      </CardHeader>
      <CardContent>
      <div className="flex justify-between items-end mb-2">
      <span className="text-3xl font-bold text-primary">1,250</span>
      <span className="text-xs text-muted-foreground mb-1">pts</span>
      </div>
      <Progress value={65} className="h-2 mb-4 bg-primary/20" />
      <Button className="w-full" size="sm" onClick={() => navigate("/profile/rewards")}>
      <Gift className="w-4 h-4 mr-2" /> View Rewards
      </Button>
      </CardContent>
      </Card>
      </div>
      </div>
  <Card className="bg-card shadow-sm border-border mt-6">
      <CardHeader className="border-b border-border pb-4">
      <CardTitle className="text-lg font-semibold flex items-center text-foreground">
      <History className="w-5 h-5 mr-2 text-primary" />
      Recent Activity
      </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
      <Table>
      <TableHeader className="bg-muted/30">
      <TableRow>
      <TableHead className="w-[100px]">Date</TableHead>
      <TableHead>Description</TableHead>
      <TableHead className="text-right">Points</TableHead>
      </TableRow>
      </TableHeader>
      <TableBody>
      {activities.map((activity, idx) => (
      <TableRow key={idx}>
      <TableCell className="text-muted-foreground text-sm">{activity.date}</TableCell>
      <TableCell className="font-medium text-foreground">{activity.description}</TableCell>
      <TableCell className="text-right">
      <Badge variant={activity.type === 'earn' ? 'default' : 'secondary'} className={activity.type === 'earn' ? 'bg-green-500/10 text-green-600 hover:bg-green-500/20' : ''}>
      <span className="flex items-center gap-1">
      {activity.type === 'earn' ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
      {activity.type === 'earn' ? '+' : '-'}{activity.points}
      </span>
      </Badge>
      </TableCell>
      </TableRow>
      ))}
      </TableBody>
      </Table>
      </CardContent>
      </Card>
      </div>
    </div>
  );
}