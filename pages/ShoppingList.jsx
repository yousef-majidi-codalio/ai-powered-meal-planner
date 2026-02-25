import React from "react";
import { ArrowRightIcon, CheckIcon, ChevronDownIcon, PlusIcon } from "@heroicons/react/24/outline";
import { Breadcrumbs, Button, Card, CardBody, CardHeader, Checkbox, Chip, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Tooltip } from "@heroui/react";

export default function ShoppingList() {
    const [selected, setSelected] = React.useState(new Set());
    const aisles = [
      { name: "Produce", items: [ { id: 1, label: "Spinach", qty: "1 bag" }, { id: 2, label: "Bananas", qty: "6" } ] },
      { name: "Dairy", items: [ { id: 3, label: "Greek yogurt", qty: "2" }, { id: 4, label: "Cheddar", qty: "200g" } ] },
      { name: "Pantry", items: [ { id: 5, label: "Chickpeas", qty: "2 cans" }, { id: 6, label: "Pasta", qty: "500g" } ] }
    ];
    const toggle = (id) => {
      setSelected((prev) => {
        const next = new Set(prev);
        if (next.has(id)) next.delete(id); else next.add(id);
        return next;
      });
    };
    const markAisle = (name) => {
      const ids = aisles.find(a => a.name === name)?.items.map(i => i.id) || [];
      setSelected((prev) => new Set([...prev, ...ids]));
    };
  return (
   <div className="bg-[var(--color-background)] text-[var(--color-text)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col gap-8">
          <section>
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
      <div className="space-y-2">
      <Breadcrumbs>
      <span className="text-[var(--color-text)]">Shopping</span>
      <span className="text-[var(--color-text)]/80">List</span>
      </Breadcrumbs>
      <h1 className="text-2xl font-bold text-[var(--color-text)]">Your shopping list</h1>
      </div>
      <div className="flex items-center gap-3">
      <Tooltip content={<span className="text-[var(--color-text)] text-xs">Pull items from current plan</span>}>
      <Button className="rounded-xl bg-[var(--color-primary)] text-[var(--color-text)]">Sync from plan</Button>
      </Tooltip>
      <Button variant="bordered" className="rounded-xl border-[var(--color-border)] text-[var(--color-text)]">Clear purchased</Button>
      </div>
      </div>

      <Card className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-background)]/60">
      <CardBody className="flex items-center gap-3">
      <Chip className="rounded-xl bg-[var(--color-secondary)]/15 text-[var(--color-secondary)]">Tip</Chip>
      <p className="text-[var(--color-text)] text-sm">Long-press an item to edit quantity and notes.</p>
      </CardBody>
      </Card>
      </section>
  <section>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
      {aisles.map((a) => (
      <Card key={a.name} className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/70">
      <CardHeader className="flex items-center justify-between">
      <div className="flex items-center gap-2">
      <Chip className="rounded-xl bg-[var(--color-primary)]/15 text-[var(--color-primary)]">{a.name}</Chip>
      <span className="text-[var(--color-text)]/70 text-xs">{a.items.length} items</span>
      </div>
      <Button size="sm" variant="light" className="rounded-xl text-[var(--color-text)]" onPress={() => markAisle(a.name)}>
      <CheckIcon className="w-4 h-4 text-[var(--color-text)] mr-1" />Mark purchased
      </Button>
      </CardHeader>
      <CardBody className="space-y-2">
      {a.items.map((it) => (
      <div key={it.id} className="flex items-center justify-between p-3 rounded-xl bg-[var(--color-background)]/60 border border-[var(--color-border)]">
      <div className="flex items-center gap-3">
      <Checkbox isSelected={selected.has(it.id)} onValueChange={() => toggle(it.id)} className="text-[var(--color-text)]" />
      <span className="text-[var(--color-text)] text-sm">{it.label}</span>
      </div>
      <span className="text-[var(--color-text)]/70 text-xs">{it.qty}</span>
      </div>
      ))}
      <Button size="sm" variant="bordered" className="rounded-xl border-[var(--color-border)] text-[var(--color-text)] mt-2">
      <PlusIcon className="w-4 h-4 text-[var(--color-text)] mr-1" />Add item
      </Button>
      </CardBody>
      </Card>
      ))}
      </div>

      {/* Actions bar */}
      <Card className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-background)]/60">
      <CardBody className="flex items-center justify-between">
      <span className="text-[var(--color-text)] text-sm">{selected.size} selected</span>
      <div className="flex items-center gap-3">
      <Button className="rounded-xl bg-[var(--color-secondary)] text-[var(--color-text)]">Share</Button>
      <Dropdown>
      <DropdownTrigger>
      <Button className="rounded-xl bg-transparent hover:bg-[var(--color-surface)]/60 border border-[var(--color-border)]">
      Export <ChevronDownIcon className="w-4 h-4 text-[var(--color-text)] ml-2" />
      </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Export options" classNames={{ base: "bg-[var(--color-surface)] text-[var(--color-text)] rounded-xl" }}>
      <DropdownItem key="txt" className="text-[var(--color-text)]">Text</DropdownItem>
      <DropdownItem key="csv" className="text-[var(--color-text)]">CSV</DropdownItem>
      <DropdownItem key="md" className="text-[var(--color-text)]">Markdown</DropdownItem>
      </DropdownMenu>
      </Dropdown>
      </div>
      </CardBody>
      </Card>
      </section>
      </div>
    </div>
  );
}
