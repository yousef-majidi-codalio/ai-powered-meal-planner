import React from "react";
import { Button, Card, CardBody, CardHeader, Chip, Progress } from "@heroui/react";

export default function Nutrition() {
  return (
    <div className="bg-[var(--color-background)] text-[var(--color-text)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col gap-8">
          <section>
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
  <Card className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-background)]/60">
  <CardHeader className="flex items-center justify-between">
  <h3 className="text-[var(--color-text)] font-semibold">Today</h3>
  <Chip className="rounded-xl bg-[var(--color-accent)]/15 text-[var(--color-accent)]">1,850 / 2,200 kcal</Chip>
  </CardHeader>
  <CardBody className="space-y-4">
  {[
  { label: "Protein", value: 60, color: "var(--color-primary)" },
  { label: "Carbs", value: 45, color: "var(--color-secondary)" },
  { label: "Fat", value: 35, color: "var(--color-accent)" }
  ].map((m) => (
  <div key={m.label}>
  <div className="flex items-center justify-between mb-1">
  <span className="text-[var(--color-text)] text-sm">{m.label}</span>
  <span className="text-[var(--color-text)]/70 text-xs">{m.value}%</span>
  </div>
  <Progress aria-label={m.label} value={m.value} classNames={{ indicator: `bg-[${m.color}] rounded-lg`, track: "bg-[var(--color-border)] rounded-lg" }} />
  </div>
  ))}
  <Button className="rounded-xl bg-[var(--color-primary)] text-[var(--color-text)]">View dashboard</Button>
  </CardBody>
  </Card>

  <Card className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/70">
  <CardHeader className="flex items-center justify-between">
  <h3 className="text-[var(--color-text)] font-semibold">Goals</h3>
  <Chip className="rounded-xl bg-[var(--color-primary)]/15 text-[var(--color-primary)]">Active</Chip>
  </CardHeader>
  <CardBody className="space-y-3">
  <p className="text-[var(--color-text)] text-sm">Lose 3 kg in 6 weeks • 2,200 kcal/day • 30% protein</p>
  <Button className="rounded-xl bg-[var(--color-secondary)] text-[var(--color-text)]">Edit goals</Button>
  </CardBody>
  </Card>
  </div>
  </section>

      </div>
    </div>
  );
}
