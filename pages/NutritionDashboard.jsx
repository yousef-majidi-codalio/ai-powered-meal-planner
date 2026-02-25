import React from "react";
import { Breadcrumbs, Button, Card, CardBody, CardHeader, Chip, Progress, Tab, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, Tabs } from "@heroui/react";

export default function NutritionDashboard() {
    const [tab, setTab] = React.useState("today");
    const rows = [
      { id: 1, item: "Oats + berries", cal: 420, pro: 20, carb: 60, fat: 10 },
      { id: 2, item: "Chicken salad", cal: 520, pro: 40, carb: 25, fat: 22 },
      { id: 3, item: "Pasta", cal: 640, pro: 22, carb: 88, fat: 14 }
    ];
  return (
   <div className="bg-[var(--color-background)] text-[var(--color-text)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col gap-8">
          <section>
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
      <div className="space-y-2">
      <Breadcrumbs>
      <span className="text-[var(--color-text)]">Nutrition</span>
      <span className="text-[var(--color-text)]/80">Dashboard</span>
      </Breadcrumbs>
      <h1 className="text-2xl font-bold text-[var(--color-text)]">Daily intake</h1>
      </div>
      <Tabs selectedKey={tab} onSelectionChange={(k) => setTab(k?.toString?.() || "today")} classNames={{ tabList: "bg-[var(--color-surface)]/60 rounded-xl p-1", cursor: "bg-[var(--color-primary)] rounded-lg", tab: "rounded-lg text-[var(--color-text)]" }}>
      <Tab key="today" title={<span className="text-[var(--color-text)]">Today</span>} />
      <Tab key="week" title={<span className="text-[var(--color-text)]">Week</span>} />
      <Tab key="month" title={<span className="text-[var(--color-text)]">Month</span>} />
      </Tabs>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {[
      { label: "Protein", value: 65, color: "var(--color-primary)" },
      { label: "Carbs", value: 40, color: "var(--color-secondary)" },
      { label: "Fat", value: 30, color: "var(--color-accent)" }
      ].map((m) => (
      <Card key={m.label} className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-background)]/60">
      <CardHeader className="flex items-center justify-between">
      <h3 className="text-[var(--color-text)] font-semibold">{m.label}</h3>
      <Chip className="rounded-xl bg-[var(--color-primary)]/15 text-[var(--color-primary)]">{m.value}%</Chip>
      </CardHeader>
      <CardBody>
      <Progress aria-label={m.label} value={m.value} classNames={{ indicator: `bg-[${m.color}] rounded-lg`, track: "bg-[var(--color-border)] rounded-lg" }} />
      </CardBody>
      </Card>
      ))}
      </div>

      <Card className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/70">
      <CardHeader className="flex items-center justify-between">
      <h3 className="text-[var(--color-text)] font-semibold">Food log</h3>
      <Button className="rounded-xl bg-[var(--color-secondary)] text-[var(--color-text)]">Add item</Button>
      </CardHeader>
      <CardBody>
      <Table aria-label="Intake log" className="bg-transparent">
      <TableHeader>
      <TableColumn className="text-[var(--color-text)]">ITEM</TableColumn>
      <TableColumn className="text-[var(--color-text)]">CAL</TableColumn>
      <TableColumn className="text-[var(--color-text)]">PRO</TableColumn>
      <TableColumn className="text-[var(--color-text)]">CARB</TableColumn>
      <TableColumn className="text-[var(--color-text)]">FAT</TableColumn>
      </TableHeader>
      <TableBody>
      {rows.map((r) => (
      <TableRow key={r.id} className="hover:bg-[var(--color-background)]/40">
      <TableCell className="text-[var(--color-text)]">{r.item}</TableCell>
      <TableCell className="text-[var(--color-text)]">{r.cal}</TableCell>
      <TableCell className="text-[var(--color-text)]">{r.pro}</TableCell>
      <TableCell className="text-[var(--color-text)]">{r.carb}</TableCell>
      <TableCell className="text-[var(--color-text)]">{r.fat}</TableCell>
      </TableRow>
      ))}
      </TableBody>
      </Table>
      </CardBody>
      </Card>
      </section>
      </div>
    </div>
  );
}
