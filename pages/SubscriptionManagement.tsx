

import { AlertCircle, CheckCircle2, CreditCard, Download, Edit } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "../components/ui/alert";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../components/ui/dialog";
import { Input } from "../components/ui/input";
import { Separator } from "../components/ui/separator";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table";

import React, { useState } from "react";

export default function SubscriptionManagement() {
    const plans = [
      {
        id: "free",
        name: "Basic",
        price: "0",
        description: "For casual meal planners.",
        isCurrent: false,
        features: ["3 AI meal plans per month", "Basic recipe search", "Standard shopping list"]
      },
      {
        id: "pro",
        name: "Pro",
        price: "9",
        description: "For dedicated healthy eaters.",
        isCurrent: true,
        features: ["Unlimited AI meal plans", "Advanced nutritional insights", "Pantry inventory tracking", "Priority support"]
      },
      {
        id: "family",
        name: "Family",
        price: "15",
        description: "For households and families.",
        isCurrent: false,
        features: ["Everything in Pro", "Up to 5 family members", "Shared shopping lists", "Kid-friendly recipe filters"]
      }
    ];
    const [isEditOpen, setIsEditOpen] = useState(false);
    const history = [
      { date: "Oct 12, 2023", description: "Pro Plan - Annual", amount: "$99.00" },
      { date: "Oct 12, 2022", description: "Pro Plan - Annual", amount: "$99.00" },
      { date: "Oct 12, 2021", description: "Pro Plan - Annual", amount: "$89.00" }
    ];
    const handleSave = () => {
      setIsEditOpen(false);
    };
  return (
   <div className="bg-background text-foreground w-full min-w-0 min-h-screen overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col gap-6 w-full min-w-0">
          <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight text-foreground">Subscription & Billing</h1>

      <Card className="bg-card shadow-sm border-border">
      <CardHeader className="pb-4">
      <CardTitle className="text-xl font-semibold text-foreground">Current Plan</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
      <div>
      <div className="flex items-center gap-3 mb-2">
      <h2 className="text-2xl font-bold text-foreground">Pro Plan</h2>
      <Badge variant="secondary" className="bg-green-500/10 text-green-600 hover:bg-green-500/20">Active</Badge>
      </div>
      <p className="text-muted-foreground">You are currently on the Pro plan, billed annually.</p>
      </div>
      <div className="text-left md:text-right">
      <p className="text-3xl font-bold text-foreground">$99<span className="text-lg text-muted-foreground font-normal">/year</span></p>
      <p className="text-sm text-muted-foreground mt-1">Renews on Oct 12, 2024</p>
      </div>
      </div>

      <Separator />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="space-y-2">
      <p className="text-sm font-medium text-foreground">Plan Features:</p>
      <ul className="space-y-2">
      {['Unlimited AI meal plans', 'Advanced nutritional insights', 'Pantry inventory tracking', 'Priority support'].map((feature, i) => (
      <li key={i} className="flex items-center text-sm text-muted-foreground">
      <CheckCircle2 className="w-4 h-4 mr-2 text-primary" /> {feature}
      </li>
      ))}
      </ul>
      </div>
      <div className="flex flex-col justify-end gap-3 md:items-end">
      <Button variant="outline" className="w-full md:w-auto text-destructive hover:text-destructive hover:bg-destructive/10">Cancel Subscription</Button>
      </div>
      </div>
      </CardContent>
      </Card>

      <Alert className="bg-blue-50 border-blue-200 text-blue-800 dark:bg-blue-950/50 dark:border-blue-900 dark:text-blue-200">
      <AlertCircle className="h-4 w-4 text-blue-600 dark:text-blue-400" />
      <AlertTitle>Special Offer</AlertTitle>
      <AlertDescription>
      Upgrade to the Family Plan today and get 2 months free!
      </AlertDescription>
      </Alert>
      </div>
  <div className="space-y-4 mt-8">
      <h3 className="text-xl font-semibold text-foreground">Available Plans</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {plans.map((plan) => (
      <Card 
      key={plan.id} 
      className={`relative flex flex-col h-full bg-card shadow-sm transition-all ${plan.isCurrent ? 'border-primary ring-1 ring-primary' : 'border-border'}`}
      >
      {plan.isCurrent && (
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <Badge className="bg-primary text-primary-foreground">Current Plan</Badge>
      </div>
      )}
      <CardHeader className="text-center pb-4 pt-6">
      <CardTitle className="text-xl">{plan.name}</CardTitle>
      <div className="mt-4 flex justify-center items-baseline text-4xl font-extrabold">
      ${plan.price}
      <span className="text-lg font-medium text-muted-foreground ml-1">/mo</span>
      </div>
      <p className="text-sm text-muted-foreground mt-2">{plan.description}</p>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col justify-between">
      <ul className="space-y-3 mb-6">
      {plan.features.map((feature, i) => (
      <li key={i} className="flex items-start text-sm">
      <CheckCircle2 className="w-4 h-4 mr-3 text-primary shrink-0 mt-0.5" />
      <span className="text-muted-foreground">{feature}</span>
      </li>
      ))}
      </ul>
      <Button 
      variant={plan.isCurrent ? "outline" : "default"} 
      className="w-full"
      disabled={plan.isCurrent}
      >
      {plan.isCurrent ? "Current Plan" : "Upgrade"}
      </Button>
      </CardContent>
      </Card>
      ))}
      </div>
      </div>
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
      <Card className="lg:col-span-2 bg-card shadow-sm border-border">
      <CardHeader className="pb-4 border-b border-border">
      <CardTitle className="text-lg font-semibold text-foreground">Billing History</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
      <Table>
      <TableHeader className="bg-muted/30">
      <TableRow>
      <TableHead>Date</TableHead>
      <TableHead>Description</TableHead>
      <TableHead>Amount</TableHead>
      <TableHead className="text-right">Receipt</TableHead>
      </TableRow>
      </TableHeader>
      <TableBody>
      {history.map((invoice, idx) => (
      <TableRow key={idx}>
      <TableCell className="text-muted-foreground text-sm">{invoice.date}</TableCell>
      <TableCell className="font-medium text-foreground">{invoice.description}</TableCell>
      <TableCell>{invoice.amount}</TableCell>
      <TableCell className="text-right">
      <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-primary">
      <Download className="h-4 w-4" />
      </Button>
      </TableCell>
      </TableRow>
      ))}
      </TableBody>
      </Table>
      </CardContent>
      </Card>

      <Card className="bg-card shadow-sm border-border">
      <CardHeader className="pb-4 border-b border-border">
      <CardTitle className="text-lg font-semibold text-foreground">Payment Method</CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
      <div className="flex items-center gap-4 p-4 border border-border rounded-lg bg-muted/20 mb-4">
      <div className="p-2 bg-background rounded shadow-sm border border-border">
      <CreditCard className="w-6 h-6 text-primary" />
      </div>
      <div className="flex-1">
      <p className="font-medium text-foreground">Visa ending in 4242</p>
      <p className="text-sm text-muted-foreground">Expires 12/2025</p>
      </div>
      </div>

      <Dialog open={isEditOpen} onOpenChange={setIsEditOpen}>
      <DialogTrigger asChild>
      <Button variant="outline" className="w-full">
      <Edit className="w-4 h-4 mr-2" /> Update Payment Method
      </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
      <DialogTitle>Update Payment Method</DialogTitle>
      </DialogHeader>
      <div className="grid gap-4 py-4">
      <div className="grid gap-2">
      <label className="text-sm font-medium">Cardholder Name</label>
      <Input placeholder="Jane Doe" />
      </div>
      <div className="grid gap-2">
      <label className="text-sm font-medium">Card Number</label>
      <Input placeholder="**** **** **** ****" />
      </div>
      <div className="grid grid-cols-2 gap-4">
      <div className="grid gap-2">
      <label className="text-sm font-medium">Expiry</label>
      <Input placeholder="MM/YY" />
      </div>
      <div className="grid gap-2">
      <label className="text-sm font-medium">CVC</label>
      <Input placeholder="***" type="password" />
      </div>
      </div>
      </div>
      <DialogFooter>
      <Button variant="outline" onClick={() => setIsEditOpen(false)}>Cancel</Button>
      <Button onClick={handleSave}>Save Changes</Button>
      </DialogFooter>
      </DialogContent>
      </Dialog>
      </CardContent>
      </Card>
      </div>
      </div>
    </div>
  );
}