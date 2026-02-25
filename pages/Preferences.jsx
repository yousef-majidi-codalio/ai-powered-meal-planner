import React from "react";
import { Button, Card, CardBody, CardHeader, Checkbox, CheckboxGroup, Chip, Input, Select, SelectItem } from "@heroui/react";

export default function Preferences() {
    const [cuisine, setCuisine] = React.useState("med");
    const [complexity, setComplexity] = React.useState("easy");
    const [exclude, setExclude] = React.useState("");
    const [prefs, setPrefs] = React.useState(["Vegetarian"]);
  return (
   <div className="bg-[var(--color-background)] text-[var(--color-text)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col gap-8">
          <section>
      {/* Preferences form */}
      <Card className="lg:col-span-2 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/70">
      <CardHeader>
      <h3 className="text-[var(--color-text)] font-semibold">Preferences</h3>
      </CardHeader>
      <CardBody className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Select label="Cuisine" labelPlacement="outside-top" selectedKeys={cuisine ? [cuisine] : []} onSelectionChange={(k) => setCuisine(Array.from(k)[0] || "med")} classNames={{ trigger: "h-10 rounded-xl bg-[var(--color-background)]/60 border border-[var(--color-border)]", label: "text-[var(--color-text)]", popoverContent: "bg-[var(--color-surface)] text-[var(--color-text)]" }}>
      <SelectItem key="med" className="text-[var(--color-text)]">Mediterranean</SelectItem>
      <SelectItem key="asian" className="text-[var(--color-text)]">Asian</SelectItem>
      <SelectItem key="mex" className="text-[var(--color-text)]">Mexican</SelectItem>
      </Select>
      <Select label="Complexity" labelPlacement="outside-top" selectedKeys={complexity ? [complexity] : []} onSelectionChange={(k) => setComplexity(Array.from(k)[0] || "easy")} classNames={{ trigger: "h-10 rounded-xl bg-[var(--color-background)]/60 border border-[var(--color-border)]", label: "text-[var(--color-text)]", popoverContent: "bg-[var(--color-surface)] text-[var(--color-text)]" }}>
      <SelectItem key="easy" className="text-[var(--color-text)]">Easy</SelectItem>
      <SelectItem key="moderate" className="text-[var(--color-text)]">Moderate</SelectItem>
      <SelectItem key="chef" className="text-[var(--color-text)]">Chef challenge</SelectItem>
      </Select>
      <Input label="Exclude ingredients" labelPlacement="outside-top" value={exclude} onValueChange={setExclude} placeholder="e.g., mushrooms, olives" classNames={{ inputWrapper: "rounded-xl bg-[var(--color-background)]/60 border border-[var(--color-border)]", input: "text-[var(--color-text)]", label: "text-[var(--color-text)]" }} />

      <CheckboxGroup label="Dietary preferences" value={prefs} onChange={setPrefs} className="md:col-span-2 grid grid-cols-2 md:grid-cols-3 gap-2 text-[var(--color-text)]">
      {['Vegan','Vegetarian','Pescatarian','Dairy-free','Gluten-free','Nut-free'].map((p) => (
      <Checkbox key={p} value={p} className="text-[var(--color-text)]">{p}</Checkbox>
      ))}
      </CheckboxGroup>

      <div className="md:col-span-2 flex justify-end gap-3 mt-2">
      <Button variant="bordered" className="rounded-xl border-[var(--color-border)] text-[var(--color-text)]">Cancel</Button>
      <Button className="rounded-xl bg-[var(--color-primary)] text-[var(--color-text)]">Save</Button>
      </div>
      </CardBody>
      </Card>

      {/* Learned insights */}
      <Card className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-background)]/60">
      <CardHeader>
      <h3 className="text-[var(--color-text)] font-semibold">Learned insights</h3>
      </CardHeader>
      <CardBody className="space-y-2">
      {['Prefers lemon-forward flavors','Avoids heavy cream on weekdays','Enjoys quick sheet-pan dinners'].map((i, idx) => (
      <Chip key={idx} className="rounded-xl bg-[var(--color-secondary)]/15 text-[var(--color-secondary)]">{i}</Chip>
      ))}
      </CardBody>
      </Card>
      </section>
      </div>
    </div>
  );
}
