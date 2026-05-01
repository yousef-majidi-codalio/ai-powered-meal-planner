

import { Award, CheckCircle2, ChevronRight, Gift, History, Info, ShoppingBag, Utensils } from "lucide-react";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../components/ui/dialog";
import { Progress } from "../components/ui/progress";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table";

import React, { useState } from "react";

export default function Rewards() {
    const userPoints = 1250;
    const [selectedReward, setSelectedReward] = useState<string | null>(null);
    const [isRedeemed, setIsRedeemed] = useState(false);
    const rewards = [
      { id: "r1", title: "$5 Grocery Coupon", description: "Valid at participating local grocery stores.", cost: 500, icon: ShoppingBag, color: "bg-blue-500/10 text-blue-500" },
      { id: "r2", title: "1 Month Pro Access", description: "Unlock premium recipes and advanced planning tools.", cost: 1000, icon: Gift, color: "bg-purple-500/10 text-purple-500" },
      { id: "r3", title: "Exclusive Recipe Book", description: "Digital download of our top 100 healthy recipes.", cost: 1500, icon: Utensils, color: "bg-orange-500/10 text-orange-500" },
    ];
    const handleRedeem = () => {
      setIsRedeemed(true);
      // In a real app, deduct points and record transaction
    };
    const history = [
      { date: "Sep 15, 2023", reward: "$5 Grocery Coupon", status: "Delivered", points: 500 },
      { date: "Aug 02, 2023", reward: "1 Month Pro Access", status: "Active", points: 1000 },
      { date: "Jun 20, 2023", reward: "Digital Recipe Book", status: "Delivered", points: 750 },
    ];
  return (
   <div className="bg-background text-foreground w-full min-w-0 min-h-screen overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col gap-6 w-full min-w-0">
          <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20 shadow-sm relative overflow-hidden">
      <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
      <Award className="w-32 h-32" />
      </div>
      <CardHeader className="pb-2">
      <div className="flex justify-between items-start">
      <CardTitle className="text-xl font-bold text-foreground">Your Rewards</CardTitle>
      <Badge variant="secondary" className="bg-background/50 backdrop-blur-sm">Gold Tier</Badge>
      </div>
      </CardHeader>
      <CardContent>
      <div className="mb-6">
      <div className="flex items-end gap-2 mb-1">
      <span className="text-4xl font-extrabold text-primary">1,250</span>
      <span className="text-sm font-medium text-muted-foreground mb-1">Points</span>
      </div>
      <p className="text-sm text-muted-foreground flex items-center gap-1">
      <Info className="w-3 h-3" /> 250 points expiring on Dec 31
      </p>
      </div>

      <div className="space-y-2 mb-6">
      <div className="flex justify-between text-sm font-medium">
      <span>Progress to Platinum</span>
      <span>1,250 / 2,000</span>
      </div>
      <Progress value={62.5} className="h-3 bg-background/50" />
      </div>

      <div className="flex flex-wrap gap-3">
      <Button className="flex-1 sm:flex-none">
      Redeem Points
      </Button>
      <Button variant="outline" className="flex-1 sm:flex-none bg-background/50">
      How to Earn <ChevronRight className="w-4 h-4 ml-1" />
      </Button>
      </div>
      </CardContent>
      </Card>
  <div className="space-y-4">
      <h3 className="text-xl font-semibold text-foreground">Available Rewards</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {rewards.map((reward) => (
      <Card key={reward.id} className="flex flex-col h-full bg-card shadow-sm border-border">
      <CardHeader className="pb-3">
      <div className="flex justify-between items-start">
      <div className={`p-2 rounded-lg ${reward.color}`}>
      <reward.icon className="w-5 h-5" />
      </div>
      <Badge variant="secondary" className="font-bold">
      {reward.cost} pts
      </Badge>
      </div>
      <CardTitle className="text-lg mt-3">{reward.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col justify-between">
      <p className="text-sm text-muted-foreground mb-4">{reward.description}</p>

      <Dialog open={selectedReward === reward.id} onOpenChange={(open) => setSelectedReward(open ? reward.id : null)}>
      <DialogTrigger asChild>
      <Button 
      variant={userPoints >= reward.cost ? "default" : "secondary"} 
      className="w-full"
      disabled={userPoints < reward.cost}
      >
      {userPoints >= reward.cost ? "Redeem" : `Need ${reward.cost - userPoints} more`}
      </Button>
      </DialogTrigger>
      <DialogContent>
      {isRedeemed ? (
      <div className="py-6 flex flex-col items-center text-center space-y-4">
      <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-2">
      <CheckCircle2 className="w-8 h-8" />
      </div>
      <DialogTitle className="text-2xl">Reward Redeemed!</DialogTitle>
      <p className="text-muted-foreground">You have successfully redeemed {reward.title}. We've sent the details to your email.</p>
      <Button className="mt-4" onClick={() => { setSelectedReward(null); setIsRedeemed(false); }}>Close</Button>
      </div>
      ) : (
      <>
      <DialogHeader>
      <DialogTitle>Confirm Redemption</DialogTitle>
      </DialogHeader>
      <div className="py-4 space-y-4">
      <div className="flex items-center gap-4 p-4 border border-border rounded-lg bg-muted/30">
      <div className={`p-3 rounded-lg ${reward.color}`}>
      <reward.icon className="w-6 h-6" />
      </div>
      <div>
      <h4 className="font-semibold">{reward.title}</h4>
      <p className="text-sm text-muted-foreground">{reward.cost} points</p>
      </div>
      </div>
      <p className="text-sm">Are you sure you want to redeem this reward? Your new balance will be <strong>{userPoints - reward.cost} points</strong>.</p>
      </div>
      <DialogFooter>
      <Button variant="outline" onClick={() => setSelectedReward(null)}>Cancel</Button>
      <Button onClick={handleRedeem}>Confirm Redemption</Button>
      </DialogFooter>
      </>
      )}
      </DialogContent>
      </Dialog>
      </CardContent>
      </Card>
      ))}
      </div>
      </div>
  <Card className="bg-card shadow-sm border-border mt-8">
      <CardHeader className="border-b border-border pb-4">
      <CardTitle className="text-lg font-semibold flex items-center text-foreground">
      <History className="w-5 h-5 mr-2 text-primary" />
      Redemption History
      </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
      <Table>
      <TableHeader className="bg-muted/30">
      <TableRow>
      <TableHead className="w-[120px]">Date</TableHead>
      <TableHead>Reward</TableHead>
      <TableHead>Status</TableHead>
      <TableHead className="text-right">Points</TableHead>
      </TableRow>
      </TableHeader>
      <TableBody>
      {history.map((item, idx) => (
      <TableRow key={idx}>
      <TableCell className="text-muted-foreground text-sm">{item.date}</TableCell>
      <TableCell className="font-medium text-foreground">{item.reward}</TableCell>
      <TableCell>
      <Badge variant="outline" className={item.status === 'Delivered' ? 'text-green-600 border-green-200 bg-green-50' : 'text-amber-600 border-amber-200 bg-amber-50'}>
      {item.status}
      </Badge>
      </TableCell>
      <TableCell className="text-right text-muted-foreground">
      -{item.points}
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