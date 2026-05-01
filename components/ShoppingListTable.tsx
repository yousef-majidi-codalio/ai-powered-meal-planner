

import { useMemo, useState } from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import { Input } from "./ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";

        export default function ShoppingListTable({ it, target }) {
  type Row = { id: string; name: string; qty: string; category: string; done: boolean };
  const [items, setItems] = useState<Array<Row>>([
  { id: "1", name: "Eggs", qty: "12", category: "Dairy", done: false },
  { id: "2", name: "Spinach", qty: "1 bag", category: "Produce", done: false },
  { id: "3", name: "Chicken Breast", qty: "2 lbs", category: "Meat", done: true },
  ]);
  const [draft, setDraft] = useState("");
  const toggleDone = (id: string, v: boolean) => setItems((prev) => prev.map((r) => (r.id === id ? { ...r, done: v } : r)));
  const updateItem = (id: string, patch: Partial<Row>) => setItems((prev) => prev.map((r) => (r.id === id ? { ...r, ...patch } : r)));
  const removeItem = (id: string) => setItems((prev) => prev.filter((r) => r.id !== id));
  const addItem = () => {
  const name = draft.trim();
  if (!name) return;
  setItems((prev) => [
  ...prev,
  { id: `${Date.now()}`, name, qty: "1", category: "Other", done: false },
  ]);
  setDraft("");
  };
        return (
            <div className="w-full overflow-x-auto">
    <Table>
    <TableHeader>
    <TableRow>
    <TableHead className="w-10"></TableHead>
    <TableHead>Item</TableHead>
    <TableHead className="w-32">Qty</TableHead>
    <TableHead className="w-32">Category</TableHead>
    <TableHead className="w-24 text-right">Actions</TableHead>
    </TableRow>
    </TableHeader>
    <TableBody>
    {items.map((it) => (
    <TableRow key={it.id} className={it.done ? "opacity-60" : ""}>
    <TableCell className="text-center">
    <Checkbox checked={it.done} onCheckedChange={(v) => toggleDone(it.id, !!v)} />
    </TableCell>
    <TableCell>
    <Input value={it.name} onChange={(e) => updateItem(it.id, { name: e.target.value })} />
    </TableCell>
    <TableCell>
    <Input value={it.qty} onChange={(e) => updateItem(it.id, { qty: e.target.value })} />
    </TableCell>
    <TableCell>
    <Badge variant="secondary">{it.category}</Badge>
    </TableCell>
    <TableCell className="text-right">
    <Button size="sm" variant="ghost" onClick={() => removeItem(it.id)} className="text-destructive">Remove</Button>
    </TableCell>
    </TableRow>
    ))}
    <TableRow>
    <TableCell />
    <TableCell colSpan={3}>
    <Input placeholder="New item name" value={draft} onChange={(e) => setDraft(e.target.value)} />
    </TableCell>
    <TableCell className="text-right">
    <Button size="sm" onClick={addItem}>Add</Button>
    </TableCell>
    </TableRow>
    </TableBody>
    </Table>
    </div>
        );
        }