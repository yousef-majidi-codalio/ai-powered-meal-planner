

import { AlertTriangle, CalendarIcon, Clock, Edit, Filter, ListChecks, MoreVertical, Package, Plus, Search, Trash2, UtensilsCrossed } from "lucide-react";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Calendar } from "../components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Checkbox } from "../components/ui/checkbox";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../components/ui/dialog";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../components/ui/dropdown-menu";
import { Input } from "../components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "../components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Separator } from "../components/ui/separator";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table";

import React, { useState } from "react";

export default function Pantry() {
    const [searchQuery, setSearchQuery] = useState("");
    const [category, setCategory] = useState("all");
    const [isAddOpen, setIsAddOpen] = useState(false);
    const handleAdd = () => {
      setIsAddOpen(false);
      // In a real app, this would add the item to the state/backend
    };
    type PantryItem = { id: string; name: string; category: string; quantity: number; unit: string; expiry: string | null; };
    const initialItems: PantryItem[] = [
      { id: "1", name: "Olive Oil", category: "pantry", quantity: 1, unit: "l", expiry: null },
      { id: "2", name: "Chicken Breast", category: "meat", quantity: 2, unit: "kg", expiry: "Oct 15" },
      { id: "3", name: "Spinach", category: "produce", quantity: 1, unit: "piece", expiry: "Oct 12" },
      { id: "4", name: "Eggs", category: "dairy", quantity: 12, unit: "piece", expiry: "Oct 20" },
      { id: "5", name: "Brown Rice", category: "pantry", quantity: 5, unit: "kg", expiry: null }
    ];
    const [items, setItems] = useState<PantryItem[]>(initialItems);
    const [selectedItems, setSelectedItems] = useState<string[]>([]);
    const [editItem, setEditItem] = useState<PantryItem | null>(null);
    const toggleItem = (id: string) => {
      setSelectedItems(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
    };
    const toggleAll = () => {
      setSelectedItems(selectedItems.length === items.length ? [] : items.map(i => i.id));
    };
    const updateQuantity = (id: string, val: string) => {
      setItems(prev => prev.map(i => i.id === id ? { ...i, quantity: Number(val) || 0 } : i));
    };
    const removeItem = (id: string) => {
      setItems(prev => prev.filter(i => i.id !== id));
      setSelectedItems(prev => prev.filter(i => i !== id));
    };
    const isExpiringSoon = (dateStr: string) => {
      return dateStr === "Oct 12" || dateStr === "Oct 15";
    };
  return (
   <div className="bg-background text-foreground w-full min-w-0 min-h-screen overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col gap-6 w-full min-w-0">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-2">
      <div className="flex-1 w-full sm:w-auto flex flex-col sm:flex-row gap-3">
      <div className="relative w-full sm:w-72">
      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
      <Input
      placeholder="Search pantry items..."
      className="pl-9 bg-background border-border"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      />
      </div>
      <Select value={category} onValueChange={setCategory}>
      <SelectTrigger className="w-full sm:w-[180px]">
      <SelectValue placeholder="All Categories" />
      </SelectTrigger>
      <SelectContent>
      <SelectItem value="all">All Categories</SelectItem>
      <SelectItem value="produce">Produce</SelectItem>
      <SelectItem value="dairy">Dairy & Eggs</SelectItem>
      <SelectItem value="meat">Meat & Seafood</SelectItem>
      <SelectItem value="pantry">Dry Goods</SelectItem>
      <SelectItem value="spices">Spices</SelectItem>
      </SelectContent>
      </Select>
      <Button variant="outline" className="w-full sm:w-auto">
      <Filter className="h-4 w-4 mr-2" />
      Filters
      </Button>
      </div>

      <Dialog open={isAddOpen} onOpenChange={setIsAddOpen}>
      <DialogTrigger asChild>
      <Button className="w-full sm:w-auto">
      <Plus className="h-4 w-4 mr-2" />
      Add Item
      </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
      <DialogTitle>Add to Pantry</DialogTitle>
      </DialogHeader>
      <div className="grid gap-4 py-4">
      <div className="grid gap-2">
      <label className="text-sm font-medium">Item Name</label>
      <Input placeholder="e.g., Olive Oil" />
      </div>
      <div className="grid grid-cols-2 gap-4">
      <div className="grid gap-2">
      <label className="text-sm font-medium">Quantity</label>
      <Input type="number" defaultValue="1" />
      </div>
      <div className="grid gap-2">
      <label className="text-sm font-medium">Unit</label>
      <Select defaultValue="piece">
      <SelectTrigger>
      <SelectValue />
      </SelectTrigger>
      <SelectContent>
      <SelectItem value="piece">Piece</SelectItem>
      <SelectItem value="kg">kg</SelectItem>
      <SelectItem value="g">g</SelectItem>
      <SelectItem value="l">L</SelectItem>
      <SelectItem value="ml">ml</SelectItem>
      </SelectContent>
      </Select>
      </div>
      </div>
      <div className="grid gap-2">
      <label className="text-sm font-medium">Category</label>
      <Select defaultValue="pantry">
      <SelectTrigger>
      <SelectValue />
      </SelectTrigger>
      <SelectContent>
      <SelectItem value="produce">Produce</SelectItem>
      <SelectItem value="dairy">Dairy & Eggs</SelectItem>
      <SelectItem value="meat">Meat & Seafood</SelectItem>
      <SelectItem value="pantry">Dry Goods</SelectItem>
      <SelectItem value="spices">Spices</SelectItem>
      </SelectContent>
      </Select>
      </div>
      <div className="grid gap-2">
      <label className="text-sm font-medium">Expiry Date (Optional)</label>
      <Popover>
      <PopoverTrigger asChild>
      <Button variant="outline" className="justify-start text-left font-normal">
      <CalendarIcon className="mr-2 h-4 w-4" />
      <span>Pick a date</span>
      </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
      <Calendar mode="single" />
      </PopoverContent>
      </Popover>
      </div>
      </div>
      <DialogFooter>
      <Button variant="outline" onClick={() => setIsAddOpen(false)}>Cancel</Button>
      <Button onClick={handleAdd}>Save Item</Button>
      </DialogFooter>
      </DialogContent>
      </Dialog>
      </div>
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
      <Card className="bg-card shadow-sm border-border">
      <CardContent className="p-6 flex items-center gap-4">
      <div className="p-3 bg-primary/10 rounded-full text-primary">
      <Package className="h-6 w-6" />
      </div>
      <div>
      <p className="text-sm font-medium text-muted-foreground">Total Items</p>
      <h3 className="text-2xl font-bold text-foreground">124</h3>
      </div>
      </CardContent>
      </Card>

      <Card className="bg-card shadow-sm border-border">
      <CardContent className="p-6 flex items-center gap-4">
      <div className="p-3 bg-orange-500/10 rounded-full text-orange-500">
      <AlertTriangle className="h-6 w-6" />
      </div>
      <div>
      <p className="text-sm font-medium text-muted-foreground">Low Stock</p>
      <h3 className="text-2xl font-bold text-foreground">8</h3>
      </div>
      </CardContent>
      </Card>

      <Card className="bg-card shadow-sm border-border">
      <CardContent className="p-6 flex items-center gap-4">
      <div className="p-3 bg-destructive/10 rounded-full text-destructive">
      <Clock className="h-6 w-6" />
      </div>
      <div>
      <p className="text-sm font-medium text-muted-foreground">Expiring Soon</p>
      <h3 className="text-2xl font-bold text-foreground">3</h3>
      </div>
      </CardContent>
      </Card>
      </div>
  <div className="rounded-md border border-border bg-card overflow-hidden">
      <Table>
      <TableHeader className="bg-muted/50">
      <TableRow>
      <TableHead className="w-[40px] text-center">
      <Checkbox 
      checked={items.length > 0 && selectedItems.length === items.length}
      onCheckedChange={toggleAll}
      />
      </TableHead>
      <TableHead>Item Name</TableHead>
      <TableHead>Category</TableHead>
      <TableHead className="w-[150px]">Quantity</TableHead>
      <TableHead>Expiry</TableHead>
      <TableHead className="w-[80px] text-right">Actions</TableHead>
      </TableRow>
      </TableHeader>
      <TableBody>
      {items.map((item) => (
      <TableRow key={item.id} className="hover:bg-muted/30">
      <TableCell className="text-center">
      <Checkbox 
      checked={selectedItems.includes(item.id)}
      onCheckedChange={() => toggleItem(item.id)}
      />
      </TableCell>
      <TableCell className="font-medium text-foreground">{item.name}</TableCell>
      <TableCell className="text-muted-foreground capitalize">{item.category}</TableCell>
      <TableCell>
      <div className="flex items-center gap-2">
      <Input 
      type="number" 
      value={item.quantity} 
      onChange={(e) => updateQuantity(item.id, e.target.value)}
      className="w-16 h-8 text-center"
      />
      <span className="text-sm text-muted-foreground">{item.unit}</span>
      </div>
      </TableCell>
      <TableCell>
      {item.expiry ? (
      <span className={`text-sm ${isExpiringSoon(item.expiry) ? 'text-destructive font-medium' : 'text-muted-foreground'}`}>
      {item.expiry}
      </span>
      ) : (
      <span className="text-sm text-muted-foreground/50">-</span>
      )}
      </TableCell>
      <TableCell className="text-right">
      <DropdownMenu>
      <DropdownMenuTrigger asChild>
      <Button variant="ghost" size="icon" className="h-8 w-8">
      <MoreVertical className="h-4 w-4 text-muted-foreground" />
      </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
      <DropdownMenuItem onClick={() => setEditItem(item)}>
      <Edit className="mr-2 h-4 w-4" /> Edit
      </DropdownMenuItem>
      <DropdownMenuItem className="text-destructive focus:text-destructive" onClick={() => removeItem(item.id)}>
      <Trash2 className="mr-2 h-4 w-4" /> Remove
      </DropdownMenuItem>
      </DropdownMenuContent>
      </DropdownMenu>
      </TableCell>
      </TableRow>
      ))}
      {items.length === 0 && (
      <TableRow>
      <TableCell colSpan={6} className="h-24 text-center text-muted-foreground">
      No items found.
      </TableCell>
      </TableRow>
      )}
      </TableBody>
      </Table>

      <Dialog open={!!editItem} onOpenChange={(open) => !open && setEditItem(null)}>
      <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
      <DialogTitle>Edit Item</DialogTitle>
      </DialogHeader>
      {editItem && (
      <div className="grid gap-4 py-4">
      <div className="grid gap-2">
      <label className="text-sm font-medium">Item Name</label>
      <Input defaultValue={editItem.name} />
      </div>
      <div className="grid grid-cols-2 gap-4">
      <div className="grid gap-2">
      <label className="text-sm font-medium">Quantity</label>
      <Input type="number" defaultValue={editItem.quantity} />
      </div>
      <div className="grid gap-2">
      <label className="text-sm font-medium">Unit</label>
      <Select defaultValue={editItem.unit}>
      <SelectTrigger>
      <SelectValue />
      </SelectTrigger>
      <SelectContent>
      <SelectItem value="piece">Piece</SelectItem>
      <SelectItem value="kg">kg</SelectItem>
      <SelectItem value="g">g</SelectItem>
      <SelectItem value="l">L</SelectItem>
      <SelectItem value="ml">ml</SelectItem>
      </SelectContent>
      </Select>
      </div>
      </div>
      </div>
      )}
      <DialogFooter>
      <Button variant="outline" onClick={() => setEditItem(null)}>Cancel</Button>
      <Button onClick={() => setEditItem(null)}>Save Changes</Button>
      </DialogFooter>
      </DialogContent>
      </Dialog>
      </div>
  <Card className="bg-primary/5 border-primary/20 shadow-sm mt-6">
      <CardHeader className="pb-3">
      <CardTitle className="text-lg font-semibold flex items-center gap-2 text-foreground">
      <UtensilsCrossed className="w-5 h-5 text-primary" />
      Make the most of your pantry
      </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col sm:flex-row gap-4">
      <Button className="flex-1" size="lg">
      <UtensilsCrossed className="w-4 h-4 mr-2" />
      Generate Meal Plan from Pantry
      </Button>
      <Button variant="outline" className="flex-1" size="lg">
      <ListChecks className="w-4 h-4 mr-2" />
      Add Low Stock to Shopping List
      </Button>
      </CardContent>
      </Card>
      </div>
    </div>
  );
}