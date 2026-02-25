import React from "react";
import { Button, Card, CardBody, CardHeader, Checkbox, CheckboxGroup, Input, Select, SelectItem } from "@heroui/react";

export default function NutritionGoals() {
    const [cal, setCal] = React.useState("2200");
    const [goal, setGoal] = React.useState("maintain");
    const [macros, setMacros] = React.useState(["protein"]);
  return (
   <div className="bg-[var(--color-background)] text-[var(--color-text)]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col gap-8">
          <section>
      <Card className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/70">
      <CardHeader>
      <h3 className="text-[var(--color-text)] font-semibold">Nutrition goals</h3>
      </CardHeader>
      <CardBody className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Input label="Daily calories" labelPlacement="outside-top" value={cal} onValueChange={setCal} classNames={{ inputWrapper: "rounded-xl bg-[var(--color-background)]/60 border border-[var(--color-border)]", label: "text-[var(--color-text)]", input: "text-[var(--color-text)]" }} />
      <Select label="Goal" labelPlacement="outside-top" selectedKeys={goal ? [goal] : []} onSelectionChange={(k) => setGoal(Array.from(k)[0] || "maintain")} classNames={{ trigger: "h-10 rounded-xl bg-[var(--color-background)]/60 border border-[var(--color-border)]", label: "text-[var(--color-text)]", popoverContent: "bg-[var(--color-surface)] text-[var(--color-text)]" }}>
      <SelectItem key="maintain" className="text-[var(--color-text)]">Maintain</SelectItem>
      <SelectItem key="loss" className="text-[var(--color-text)]">Weight loss</SelectItem>
      <SelectItem key="gain" className="text-[var(--color-text)]">Muscle gain</SelectItem>
      </Select>

      <CheckboxGroup label="Macro emphasis" value={macros} onChange={setMacros} className="md:col-span-2 grid grid-cols-2 md:grid-cols-3 gap-2 text-[var(--color-text)]">
      <Checkbox value="protein" className="text-[var(--color-text)]">Protein</Checkbox>
      <Checkbox value="carb" className="text-[var(--color-text)]">Carbs</Checkbox>
      <Checkbox value="fat" className="text-[var(--color-text)]">Fat</Checkbox>
      </CheckboxGroup>

      <div className="md:col-span-2 flex justify-end gap-3 mt-2">
      <Button variant="bordered" className="rounded-xl border-[var(--color-border)] text-[var(--color-text)]">Cancel</Button>
      <Button className="rounded-xl bg-[var(--color-primary)] text-[var(--color-text)]">Save goals</Button>
      </div>
      </CardBody>
      </Card>
      </section>
      </div>
    </div>
  );
}
