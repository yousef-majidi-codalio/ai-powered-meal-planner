import React from "react";
import { Button, Card, CardBody, CardHeader, Checkbox, CheckboxGroup, Chip, Image, Input, Select, SelectItem } from "@heroui/react";

export default function RecipeDiscovery() {
    const [diet, setDiet] = React.useState("any");
    const [allergies, setAllergies] = React.useState(["Gluten"]);
    const [ingredients, setIngredients] = React.useState(["Chicken", "Spinach"]);
    const [ing, setIng] = React.useState("");
    const addIng = () => { if (!ing.trim()) return; setIngredients((arr) => [...arr, ing.trim()]); setIng(""); };
    const results = [
      { title: "Herb salmon", time: 25, image: "https://pixabay.com/get/g20041aa8b50f97cf7012d3c5202c5850b1ca3365f2e4035f8021c7510fc0c5f96ccd256fa10603d4aed11d047e9acb253d73182f7e631dd62bdba6367283c0b5_640.jpg" },
      { title: "Garden bowl", time: 15, image: "https://pixabay.com/get/g7aeecf77fd57aec6375989c3c1d8061f33b639954a1acef34a492649704c775b005292b9b49f94ca196a62a519f942be91bdcb4ca0f1faf162fc31b42dab982b_640.jpg" },
      { title: "Pasta verde", time: 30, image: "https://pixabay.com/get/g69166da3db8d4690bca05f837f99c82326e213dd89fe876e9edc72659b04656e3b205a059143a36494f854914fad9169ddcb5caf5993ec322d0580387adce2a7_640.jpg" },
      { title: "Grilled chicken", time: 20, image: "https://pixabay.com/get/g5c59199f66e605b76e3c9106cb332e1f74b12d00d3fca8031cf2e295312e7589a17f4b6dd3ff6ff24379270c3cc1da20c30d003b439f0989ee80f69206034f68_640.jpg" }
    ];
  return (
   <div className="bg-[var(--color-background)] text-[var(--color-text)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col gap-8">
          <section>
      {/* Left filters */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
      <Card className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/70 lg:col-span-1">
      <CardBody className="space-y-4">
      <h3 className="text-[var(--color-text)] font-semibold">Diet</h3>
      <Select
      aria-label="Diet type"
      selectedKeys={diet ? [diet] : []}
      onSelectionChange={(keys) => setDiet(Array.from(keys)[0] || "")}
      classNames={{ trigger: "h-10 rounded-xl bg-[var(--color-background)]/60 border border-[var(--color-border)]", popoverContent: "bg-[var(--color-surface)] text-[var(--color-text)] rounded-xl" }}
      >
      <SelectItem key="any" className="text-[var(--color-text)]">Any</SelectItem>
      <SelectItem key="vegan" className="text-[var(--color-text)]">Vegan</SelectItem>
      <SelectItem key="keto" className="text-[var(--color-text)]">Keto</SelectItem>
      <SelectItem key="med" className="text-[var(--color-text)]">Mediterranean</SelectItem>
      </Select>

      <h3 className="text-[var(--color-text)] font-semibold">Allergies</h3>
      <CheckboxGroup value={allergies} onChange={setAllergies} className="grid grid-cols-2 gap-2">
      {['Dairy','Eggs','Gluten','Peanuts','Soy','Shellfish'].map((a) => (
      <Checkbox key={a} value={a} className="text-[var(--color-text)]">{a}</Checkbox>
      ))}
      </CheckboxGroup>
      </CardBody>
      </Card>

      {/* Ingredient filter */}
      <Card className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/70 lg:col-span-2">
      <CardBody className="space-y-4">
      <h3 className="text-[var(--color-text)] font-semibold">Ingredients on hand</h3>
      <div className="flex gap-3">
      <Input
      aria-label="Ingredient"
      placeholder="Add ingredient..."
      value={ing}
      onValueChange={setIng}
      classNames={{ inputWrapper: "h-10 rounded-xl bg-[var(--color-background)]/60 border border-[var(--color-border)]", input: "text-[var(--color-text)] placeholder:text-[var(--color-text)]/70" }}
      />
      <Button className="rounded-xl bg-[var(--color-primary)] text-[var(--color-text)]" onPress={addIng}>Add</Button>
      <Button variant="bordered" className="rounded-xl border-[var(--color-border)] text-[var(--color-text)]" onPress={() => setIngredients([])}>Clear</Button>
      </div>
      <div className="flex flex-wrap gap-2">
      {ingredients.map((i, idx) => (
      <Chip key={idx} className="rounded-xl bg-[var(--color-primary)]/15 text-[var(--color-primary)]">{i}</Chip>
      ))}
      </div>
      </CardBody>
      </Card>
      </div>
      </section>
  <section>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {results.map((r, idx) => (
      <Card key={idx} className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/70 hover:shadow-primary transition-all">
      <CardHeader className="flex items-center justify-between">
      <span className="text-[var(--color-text)] text-sm font-semibold">{r.title}</span>
      <Chip className="rounded-xl bg-[var(--color-secondary)]/15 text-[var(--color-secondary)]">{r.time}m</Chip>
      </CardHeader>
      <CardBody className="space-y-3">
      <Image src={r.image} alt={r.title} className="w-full h-40 object-cover rounded-xl" removeWrapper />
      <Button className="rounded-xl bg-[var(--color-primary)] text-[var(--color-text)]">Open recipe</Button>
      </CardBody>
      </Card>
      ))}
      </div>
      </section>
      </div>
    </div>
  );
}
