import React from "react";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import { Breadcrumbs, Button, Card, CardBody, CardHeader, Chip, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from "@heroui/react";

export default function CurrentMealPlan() {
    const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    const options = ["Veggie tacos", "Quinoa bowl", "Tomato soup"];
    const [isOpen, setIsOpen] = React.useState(false);
    const [activeDay, setActiveDay] = React.useState("");
    const openSwap = (d) => { setActiveDay(d); setIsOpen(true); };
  return (
   <div className="bg-[var(--color-background)] text-[var(--color-text)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col gap-8">
          <section>
      <div className="space-y-2">
      <Breadcrumbs>
      <span className="text-[var(--color-text)]">Meal Plan</span>
      <span className="text-[var(--color-text)]/80">Current</span>
      </Breadcrumbs>
      <h1 className="text-2xl font-bold text-[var(--color-text)]">Current week</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {days.map((d) => (
      <Card key={d} className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/70">
      <CardHeader className="flex items-center justify-between">
      <Chip className="rounded-xl bg-[var(--color-primary)]/15 text-[var(--color-primary)]">{d}</Chip>
      <div className="flex items-center gap-2">
      <Button size="sm" variant="bordered" className="rounded-xl border-[var(--color-border)] text-[var(--color-text)]" onPress={() => openSwap(d)}>
      <PencilIcon className="w-4 h-4 text-[var(--color-text)]" />
      </Button>
      <Button size="sm" variant="bordered" className="rounded-xl border-[var(--color-border)] text-[var(--color-text)]">
      <TrashIcon className="w-4 h-4 text-[var(--color-text)]" />
      </Button>
      </div>
      </CardHeader>
      <CardBody className="space-y-2">
      {["Breakfast", "Lunch", "Dinner"].map((m) => (
      <div key={m} className="p-3 rounded-xl bg-[var(--color-background)]/60 border border-[var(--color-border)]">
      <p className="text-[var(--color-text)] text-sm">{m}</p>
      </div>
      ))}
      </CardBody>
      </Card>
      ))}
      </div>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} classNames={{ base: "bg-[var(--color-background)] text-[var(--color-text)] rounded-2xl" }}>
      <ModalContent>
      <ModalHeader>
      <h4 className="text-[var(--color-text)] font-semibold">Swap meals for {activeDay}</h4>
      </ModalHeader>
      <ModalBody>
      <div className="space-y-2">
      {options.map((o) => (
      <Button key={o} variant="bordered" className="w-full justify-start rounded-xl border-[var(--color-border)] text-[var(--color-text)]">{o}</Button>
      ))}
      </div>
      </ModalBody>
      <ModalFooter>
      <Button onPress={() => setIsOpen(false)} className="rounded-xl bg-[var(--color-primary)] text-[var(--color-text)]">Done</Button>
      </ModalFooter>
      </ModalContent>
      </Modal>
      </section>
      </div>
    </div>
  );
}
