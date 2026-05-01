

import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import { ScrollArea } from "./ui/scroll-area";

        export default function ShoppingListGroup({ g, it, items }) {
  type Item = { label: string; qty: string; done: boolean };
  const [groups, setGroups] = useState<Array<{ name: string; items: Array<Item> }>>([
  { name: 'Produce', items: [ { label: 'Bananas', qty: '6', done: false }, { label: 'Spinach', qty: '1 bag', done: false } ] },
  { name: 'Dairy', items: [ { label: 'Greek yogurt', qty: '2', done: false }, { label: 'Milk', qty: '1L', done: false } ] },
  { name: 'Bakery', items: [ { label: 'Whole grain bread', qty: '1', done: false } ] }
  ]);
  const toggle = (gi: number, ii: number, done: boolean) => {
  setGroups((gs) => gs.map((g, i) => i === gi ? { ...g, items: g.items.map((it, j) => j === ii ? { ...it, done } : it) } : g));
  };
  const clearDone = (gi: number) => {
  setGroups((gs) => gs.map((g, i) => i === gi ? { ...g, items: g.items.map((it) => ({ ...it, done: false })) } : g));
  };
        return (
            <div className="grid gap-4">
    <div className="grid grid-cols-5 gap-2">
    <img src="https://pixabay.com/get/ge6e107a154916f8175cd418f6bbcd334252dfaf919aec6280dc8810e995adc1e3cb88688d91a2b4becc791623e84fd19_640.jpg" alt="aisle" className="h-12 w-full object-cover rounded" />
    <img src="https://pixabay.com/get/ga42e87d36be5cd019ebe6e6dbf3b33da0837c55fdc54d9e9916e46103ce38e5581f50e6f48ff8c734ceb34e8e081bb6da555b280f292be3dde53290085a0d712_640.jpg" alt="aisle" className="h-12 w-full object-cover rounded" />
    <img src="https://pixabay.com/get/g829f0f1ce54528378279c91089e79e90e60461242e0b6aaa9ba9724c58c252257838727a0fe9f4e8548e9ce9815b95de7eb452578bb983fc85b807c970d8848a_640.jpg" alt="aisle" className="h-12 w-full object-cover rounded hidden sm:block" />
    <img src="https://pixabay.com/get/g4085c3c26695767dd0237b453e64e26cdef57d160de9d6a5b01d0947d34f1ed87713a0c82047a5f6711ebef47c36fd04245de1c6238deaac119c4a7c5037c2b4_640.jpg" alt="aisle" className="h-12 w-full object-cover rounded hidden sm:block" />
    <img src="https://pixabay.com/get/gcdd1b727d69ea2f5e8d30110a591326e15f3374aa85b9b431072c4254e5f5c224b3ad7ce18ddd915b70e8a21a7b8aee01a1702c16defa7e6e33dd141d5c0fc16_640.jpg" alt="aisle" className="h-12 w-full object-cover rounded hidden sm:block" />
    </div>
    <Accordion type="multiple" className="w-full">
    {groups.map((g, gi) => (
    <AccordionItem key={g.name} value={`g-${gi}`}>
    <AccordionTrigger>
    <div className="flex items-center gap-2"><Badge variant="secondary">{g.items.filter(i=>i.done).length}/{g.items.length}</Badge>{g.name}</div>
    </AccordionTrigger>
    <AccordionContent>
    <ScrollArea className="max-h-56 pr-4">
    <ul className="grid gap-2">
    {g.items.map((it, ii) => (
    <li key={it.label} className="flex items-center justify-between gap-2">
    <label className="flex items-center gap-2 text-sm">
    <Checkbox checked={it.done} onCheckedChange={(c) => toggle(gi, ii, Boolean(c))} />
    <span className={it.done ? 'line-through text-muted-foreground' : ''}>{it.label}</span>
    </label>
    <div className="text-xs text-muted-foreground">{it.qty}</div>
    </li>
    ))}
    </ul>
    </ScrollArea>
    <div className="mt-3 flex items-center justify-end gap-2">
    <Button variant="outline" size="sm" onClick={() => clearDone(gi)}>Clear done</Button>
    </div>
    </AccordionContent>
    </AccordionItem>
    ))}
    </Accordion>
    </div>
        );
        }