

import { CheckSquare, Download, Plus, Printer, Share2, Trash2 } from "lucide-react";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Checkbox } from "../components/ui/checkbox";
import { Input } from "../components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Sheet, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "../components/ui/sheet";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table";

import React, { useState } from "react";

export default function ShoppingList() {
    const [isAddOpen, setIsAddOpen] = useState(false);
    const initialItems = [
      { id: "1", name: "Avocados", category: "produce", quantity: "3 pcs", checked: false, fromPlan: true },
      { id: "2", name: "Eggs", category: "dairy", quantity: "1 dozen", checked: true, fromPlan: true },
      { id: "3", name: "Chicken Breast", category: "meat", quantity: "2 lbs", checked: false, fromPlan: true },
      { id: "4", name: "Quinoa", category: "pantry", quantity: "1 bag", checked: false, fromPlan: true },
      { id: "5", name: "Paper Towels", category: "household", quantity: "2 rolls", checked: false, fromPlan: false },
    ];
    const [items, setItems] = useState(initialItems);
    const toggleItem = (id: string) => {
      setItems(prev => prev.map(i => i.id === id ? { ...i, checked: !i.checked } : i));
    };
    const toggleAll = () => {
      const allChecked = items.every(i => i.checked);
      setItems(prev => prev.map(i => ({ ...i, checked: !allChecked })));
    };
    const updateQuantity = (id: string, val: string) => {
      setItems(prev => prev.map(i => i.id === id ? { ...i, quantity: val } : i));
    };
    const removeItem = (id: string) => {
      setItems(prev => prev.filter(i => i.id !== id));
    };
  return (
   <div className="bg-background text-foreground w-full min-w-0 min-h-screen overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col gap-6 w-full min-w-0">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
      <div>
      <h1 className="text-3xl font-bold tracking-tight text-foreground">Shopping List</h1>
      <p className="text-muted-foreground mt-1">Generated from your weekly meal plan.</p>
      </div>

      <div className="flex flex-wrap items-center gap-2">
      <Select defaultValue="all">
      <SelectTrigger className="w-[140px]">
      <SelectValue placeholder="Store Aisle" />
      </SelectTrigger>
      <SelectContent>
      <SelectItem value="all">All Aisles</SelectItem>
      <SelectItem value="produce">Produce</SelectItem>
      <SelectItem value="dairy">Dairy</SelectItem>
      <SelectItem value="meat">Meat</SelectItem>
      <SelectItem value="pantry">Pantry</SelectItem>
      </SelectContent>
      </Select>

      <Sheet open={isAddOpen} onOpenChange={setIsAddOpen}>
      <SheetTrigger asChild>
      <Button variant="outline" size="icon">
      <Plus className="h-4 w-4" />
      </Button>
      </SheetTrigger>
      <SheetContent>
      <SheetHeader>
      <SheetTitle>Add Custom Item</SheetTitle>
      <SheetDescription>Add an extra item to your shopping list.</SheetDescription>
      </SheetHeader>
      <div className="py-6 space-y-4">
      <div className="space-y-2">
      <label className="text-sm font-medium">Item Name</label>
      <Input placeholder="e.g., Paper Towels" />
      </div>
      <div className="space-y-2">
      <label className="text-sm font-medium">Category</label>
      <Select defaultValue="household">
      <SelectTrigger>
      <SelectValue />
      </SelectTrigger>
      <SelectContent>
      <SelectItem value="produce">Produce</SelectItem>
      <SelectItem value="dairy">Dairy</SelectItem>
      <SelectItem value="meat">Meat</SelectItem>
      <SelectItem value="pantry">Pantry</SelectItem>
      <SelectItem value="household">Household</SelectItem>
      </SelectContent>
      </Select>
      </div>
      </div>
      <SheetFooter>
      <Button onClick={() => setIsAddOpen(false)}>Add to List</Button>
      </SheetFooter>
      </SheetContent>
      </Sheet>

      <div className="flex gap-1 ml-auto sm:ml-0">
      <Button variant="outline" size="icon" title="Print">
      <Printer className="h-4 w-4" />
      </Button>
      <Button variant="outline" size="icon" title="Share">
      <Share2 className="h-4 w-4" />
      </Button>
      <Button variant="default" className="hidden sm:flex">
      <CheckSquare className="h-4 w-4 mr-2" />
      Finish Shopping
      </Button>
      </div>
      </div>
      </div>
  <div className="rounded-md border border-border bg-card overflow-hidden">
      <Table>
      <TableHeader className="bg-muted/50">
      <TableRow>
      <TableHead className="w-[40px] text-center">
      <Checkbox 
      checked={items.length > 0 && items.every(i => i.checked)}
      onCheckedChange={toggleAll}
      />
      </TableHead>
      <TableHead>Item</TableHead>
      <TableHead>Category</TableHead>
      <TableHead className="w-[150px]">Quantity</TableHead>
      <TableHead className="w-[80px] text-right">Actions</TableHead>
      </TableRow>
      </TableHeader>
      <TableBody>
      {items.map((item) => (
      <TableRow key={item.id} className={`hover:bg-muted/30 transition-colors ${item.checked ? 'opacity-60 bg-muted/20' : ''}`}>
      <TableCell className="text-center">
      <Checkbox 
      checked={item.checked}
      onCheckedChange={() => toggleItem(item.id)}
      />
      </TableCell>
      <TableCell>
      <div className="flex items-center gap-2">
      <span className={`font-medium ${item.checked ? 'line-through text-muted-foreground' : 'text-foreground'}`}>
      {item.name}
      </span>
      {item.fromPlan && <Badge variant="secondary" className="text-[10px] px-1.5 py-0 h-4 bg-primary/10 text-primary">Plan</Badge>}
      </div>
      </TableCell>
      <TableCell className="text-muted-foreground capitalize">{item.category}</TableCell>
      <TableCell>
      <Input 
      value={item.quantity} 
      onChange={(e) => updateQuantity(item.id, e.target.value)}
      className={`h-8 w-24 ${item.checked ? 'text-muted-foreground' : ''}`}
      />
      </TableCell>
      <TableCell className="text-right">
      <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-destructive" onClick={() => removeItem(item.id)}>
      <Trash2 className="h-4 w-4" />
      </Button>
      </TableCell>
      </TableRow>
      ))}
      {items.length === 0 && (
      <TableRow>
      <TableCell colSpan={5} className="h-24 text-center text-muted-foreground">
      Your shopping list is empty.
      </TableCell>
      </TableRow>
      )}
      </TableBody>
      </Table>
      </div>
      </div>
    </div>
  );
}