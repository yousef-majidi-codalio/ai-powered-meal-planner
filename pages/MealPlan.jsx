import React from "react";
import { CalendarIcon, PencilIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import { Avatar, Breadcrumbs, Button, Card, CardBody, CardHeader, Chip, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Progress, Select, SelectItem, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, Tooltip } from "@heroui/react";

export default function MealPlan() {
  const weeks = [
    { key: "this", label: "This week" },
    { key: "next", label: "Next week" }
  ];
  const [week, setWeek] = React.useState("this");
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const [isSwapOpen, setIsSwapOpen] = React.useState(false);
  const [activeDay, setActiveDay] = React.useState("");
  const openSwap = (day) => {
    setActiveDay(day);
    setIsSwapOpen(true);
  };
  const [saved, setSaved] = React.useState([
    { id: 1, name: "High-protein week", week: "Mar 4–10" },
    { id: 2, name: "Veggie week", week: "Mar 11–17" }
  ]);
  const remove = (id) => setSaved((s) => s.filter((i) => i.id !== id));

  return (
    <div className="bg-[var(--color-background)] text-[var(--color-text)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col gap-8">
        <section>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-2">
              <Breadcrumbs className="text-[var(--color-text)]">
                <span className="text-[var(--color-text)]">Meal Plan</span>
                <span className="text-[var(--color-text)]/80">Weekly Plan</span>
              </Breadcrumbs>
              <h1 className="text-2xl font-bold text-[var(--color-text)]">This week</h1>
            </div>

            <div className="flex items-center gap-3">
              <Select
                aria-label="Select week"
                selectedKeys={week ? [week] : []}
                onSelectionChange={(keys) => setWeek(Array.from(keys)[0] || "")}
                classNames={{
                  trigger: "h-10 rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)] text-[var(--color-text)]",
                  popoverContent: "bg-[var(--color-surface)] text-[var(--color-text)] rounded-xl"
                }}
                startContent={<CalendarIcon className="w-4 h-4 text-[var(--color-text)]" />}
              >
                {weeks.map((w) => (
                  <SelectItem key={w.key} className="text-[var(--color-text)]">{w.label}</SelectItem>
                ))}
              </Select>
              <Tooltip content={<span className="text-[var(--color-text)] text-xs">Regenerate with latest preferences</span>}>
                <Button className="rounded-xl bg-[var(--color-primary)] text-[var(--color-text)]">Regenerate</Button>
              </Tooltip>
              <Button className="rounded-xl bg-[var(--color-secondary)] text-[var(--color-text)]">Save plan</Button>
            </div>
          </div>

          <Card className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-background)]/60 mt-2">
            <CardBody className="flex items-center gap-3">
              <Chip className="rounded-xl bg-[var(--color-primary)]/15 text-[var(--color-primary)]">New</Chip>
              <p className="text-[var(--color-text)] text-sm">We found ingredient swaps based on your preferences.</p>
              <Button className="ml-auto rounded-xl bg-[var(--color-primary)] text-[var(--color-text)]">Apply</Button>
            </CardBody>
          </Card>
        </section>

        <section>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Weekly grid */}
            <div className="lg:col-span-8 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {days.map((d) => (
                  <Card key={d} className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/70">
                    <CardHeader className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Chip className="rounded-xl bg-[var(--color-primary)]/15 text-[var(--color-primary)]">{d}</Chip>
                        <span className="text-[var(--color-text)] text-sm">3 meals</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button size="sm" variant="bordered" className="rounded-xl border-[var(--color-border)] text-[var(--color-text)]" onPress={() => openSwap(d)}>
                          <PencilIcon className="w-4 h-4 text-[var(--color-text)]" />
                        </Button>
                        <Button size="sm" variant="bordered" className="rounded-xl border-[var(--color-border)] text-[var(--color-text)]">
                          <PlusIcon className="w-4 h-4 text-[var(--color-text)]" />
                        </Button>
                      </div>
                    </CardHeader>
                    <CardBody className="space-y-3">
                      {["Breakfast bowl", "Chicken salad", "Pasta primavera"].map((meal, idx) => (
                        <div key={idx} className="flex items-center justify-between p-3 rounded-xl bg-[var(--color-background)]/60 border border-[var(--color-border)]">
                          <div className="flex items-center gap-3">
                            <Avatar size="sm" className="border border-[var(--color-border)]" name={meal.charAt(0)} />
                            <span className="text-[var(--color-text)] text-sm">{meal}</span>
                          </div>
                          <Button size="sm" isIconOnly variant="light" className="rounded-xl">
                            <TrashIcon className="w-4 h-4 text-[var(--color-text)]/80" />
                          </Button>
                        </div>
                      ))}
                    </CardBody>
                  </Card>
                ))}
              </div>
            </div>

            {/* Nutrition sidebar */}
            <aside className="lg:col-span-4 space-y-4">
              <Card className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-background)]/60">
                <CardHeader>
                  <h3 className="text-[var(--color-text)] font-semibold">Nutrition summary</h3>
                </CardHeader>
                <CardBody className="space-y-4">
                  {[
                    { label: "Calories", value: 70, color: "var(--color-accent)" },
                    { label: "Protein", value: 55, color: "var(--color-primary)" },
                    { label: "Carbs", value: 40, color: "var(--color-secondary)" },
                    { label: "Fat", value: 30, color: "var(--color-accent)" }
                  ].map((m) => (
                    <div key={m.label}>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[var(--color-text)] text-sm">{m.label}</span>
                        <span className="text-[var(--color-text)]/70 text-xs">{m.value}%</span>
                      </div>
                      <Progress
                        aria-label={m.label}
                        value={m.value}
                        classNames={{ indicator: `bg-[${m.color}] rounded-lg`, track: "bg-[var(--color-border)] rounded-lg" }}
                      />
                    </div>
                  ))}
                </CardBody>
              </Card>
            </aside>
          </div>

          {/* Swap modal */}
          <Modal isOpen={isSwapOpen} onClose={() => setIsSwapOpen(false)} classNames={{ base: "bg-[var(--color-background)] text-[var(--color-text)] rounded-2xl" }}>
            <ModalContent>
              <ModalHeader>
                <h4 className="text-[var(--color-text)] font-semibold">Swap meals for {activeDay}</h4>
              </ModalHeader>
              <ModalBody>
                <div className="space-y-2">
                  {["Grilled salmon", "Veggie stir-fry", "Turkey wrap"].map((m) => (
                    <Button key={m} variant="bordered" className="w-full justify-start rounded-xl border-[var(--color-border)] text-[var(--color-text)]">{m}</Button>
                  ))}
                </div>
              </ModalBody>
              <ModalFooter>
                <Button onPress={() => setIsSwapOpen(false)} className="rounded-xl bg-[var(--color-primary)] text-[var(--color-text)]">Done</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </section>

        <section>
          <Card className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-background)]/60">
            <CardHeader className="flex items-center justify-between">
              <h3 className="text-[var(--color-text)] font-semibold">Saved plans</h3>
              <Button className="rounded-xl bg-[var(--color-secondary)] text-[var(--color-text)]">Load latest</Button>
            </CardHeader>
            <CardBody>
              <Table aria-label="Saved meal plans" className="bg-transparent">
                <TableHeader>
                  <TableColumn className="text-[var(--color-text)]">NAME</TableColumn>
                  <TableColumn className="text-[var(--color-text)]">WEEK</TableColumn>
                  <TableColumn className="text-[var(--color-text)]">ACTIONS</TableColumn>
                </TableHeader>
                <TableBody>
                  {saved.map((p) => (
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
