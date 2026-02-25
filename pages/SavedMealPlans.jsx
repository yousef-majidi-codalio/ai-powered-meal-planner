import React from "react";
import { MagnifyingGlassIcon, TrashIcon } from "@heroicons/react/24/outline";
import { Button, Card, CardBody, Input, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@heroui/react";

export default function SavedMealPlans() {
  const [query, setQuery] = React.useState("");
  const [plans, setPlans] = React.useState([
    { id: 1, name: "High-protein week", week: "Mar 4–10" },
    { id: 2, name: "Veggie week", week: "Mar 11–17" },
    { id: 3, name: "Family classics", week: "Mar 18–24" }
  ]);

  const filtered = React.useMemo(
    () => plans.filter((p) => p.name.toLowerCase().includes(query.toLowerCase())),
    [plans, query]
  );

  const remove = (id) => setPlans((s) => s.filter((i) => i.id !== id));

  return (
    <div className="bg-[var(--color-background)] text-[var(--color-text)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col gap-8">
        <section>
          <div className="flex items-center justify-between gap-4">
            <h1 className="text-2xl font-bold text-[var(--color-text)]">Saved plans</h1>
            <Input
              aria-label="Search plans"
              placeholder="Search plans..."
              value={query}
              onValueChange={setQuery}
              startContent={<MagnifyingGlassIcon className="w-4 h-4 text-[var(--color-text)]" />}
              classNames={{
                inputWrapper: "h-10 rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)]",
                input: "text-[var(--color-text)] placeholder:text-[var(--color-text)]/70"
              }}
            />
          </div>

          <Card className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-background)]/60 mt-4">
            <CardBody>
              <Table aria-label="Saved plans table" className="bg-transparent">
                <TableHeader>
                  <TableColumn className="text-[var(--color-text)]">NAME</TableColumn>
                  <TableColumn className="text-[var(--color-text)]">WEEK</TableColumn>
                  <TableColumn className="text-[var(--color-text)]">ACTIONS</TableColumn>
                </TableHeader>
                <TableBody>
                  {filtered.map((p) => (
                    <TableRow key={p.id} className="hover:bg-[var(--color-surface)]/40">
                      <TableCell className="text-[var(--color-text)]">{p.name}</TableCell>
                      <TableCell className="text-[var(--color-text)]">{p.week}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Button size="sm" variant="flat" className="rounded-xl bg-[var(--color-primary)]/15 text-[var(--color-primary)]">Load</Button>
                          <Button size="sm" isIconOnly variant="light" className="rounded-xl" onPress={() => remove(p.id)}>
                            <TrashIcon className="w-4 h-4 text-[var(--color-text)]/80" />
                          </Button>
                        </div>
                      </TableCell>
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
