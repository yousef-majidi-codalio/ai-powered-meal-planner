import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Avatar, Breadcrumbs, Button, Card, CardBody, CardHeader, Chip, Image, Input, Tab, Tabs } from "@heroui/react";

export default function Recipes() {
    const [query, setQuery] = React.useState("");
    const [tab, setTab] = React.useState("trending");
    const images = [
      "https://pixabay.com/get/g20041aa8b50f97cf7012d3c5202c5850b1ca3365f2e4035f8021c7510fc0c5f96ccd256fa10603d4aed11d047e9acb253d73182f7e631dd62bdba6367283c0b5_640.jpg",
      "https://pixabay.com/get/g7aeecf77fd57aec6375989c3c1d8061f33b639954a1acef34a492649704c775b005292b9b49f94ca196a62a519f942be91bdcb4ca0f1faf162fc31b42dab982b_640.jpg",
      "https://pixabay.com/get/g69166da3db8d4690bca05f837f99c82326e213dd89fe876e9edc72659b04656e3b205a059143a36494f854914fad9169ddcb5caf5993ec322d0580387adce2a7_640.jpg",
      "https://pixabay.com/get/g5c59199f66e605b76e3c9106cb332e1f74b12d00d3fca8031cf2e295312e7589a17f4b6dd3ff6ff24379270c3cc1da20c30d003b439f0989ee80f69206034f68_640.jpg",
      "https://pixabay.com/get/gc40cacdd8b8417d1078e79745c58b81210e26331ca9ed3f4dd0acc7ccd013550be2df401f0df0b4f4d57624120e01c8f840e2c452a37feca89f80d01772eabfd_640.jpg",
      "https://pixabay.com/get/g9187149be6d925c49b3ef1c12b56040ac32c777affde1bc4ac0d4d8cf12db8f96e75a49bd8ab45244c9692c0653e7057a4bd9255b97e421aa817c55daf495c85_640.jpg"
    ];
  return (
   <div className="bg-[var(--color-background)] text-[var(--color-text)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col gap-8">
          <section>
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
      <div className="space-y-2">
      <Breadcrumbs>
      <span className="text-[var(--color-text)]">Recipes</span>
      <span className="text-[var(--color-text)]/80">Explore</span>
      </Breadcrumbs>
      <h1 className="text-2xl font-bold text-[var(--color-text)]">Find your next favorite</h1>
      </div>
      <div className="flex items-center gap-3">
      <Input
      aria-label="Search recipes"
      placeholder="Search recipes..."
      value={query}
      onValueChange={setQuery}
      startContent={<MagnifyingGlassIcon className="w-4 h-4 text-[var(--color-text)]" />}
      classNames={{ inputWrapper: "h-10 rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)]", input: "text-[var(--color-text)] placeholder:text-[var(--color-text)]/70" }}
      />
      <Button className="rounded-xl bg-[var(--color-primary)] text-[var(--color-text)]">Search</Button>
      </div>
      </div>

      <Card className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-background)]/60">
      <CardBody>
      <Tabs
      selectedKey={tab}
      onSelectionChange={(k) => setTab(k?.toString?.() || "trending")}
      classNames={{ tabList: "bg-[var(--color-surface)]/60 rounded-xl p-1", cursor: "bg-[var(--color-primary)] rounded-lg", tab: "rounded-lg text-[var(--color-text)]" }}
      >
      <Tab key="trending" title={<span className="text-[var(--color-text)]">Trending</span>} />
      <Tab key="new" title={<span className="text-[var(--color-text)]">New</span>} />
      <Tab key="quick" title={<span className="text-[var(--color-text)]">Under 30m</span>} />
      </Tabs>
      </CardBody>
      </Card>
      </section>
  <section>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {images.map((src, idx) => (
      <Card key={idx} className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/70 hover:shadow-primary transition-all">
      <CardHeader className="flex items-center justify-between">
      <div className="flex items-center gap-3">
      <Avatar name={(idx+1).toString()} size="sm" className="border border-[var(--color-border)]" />
      <div className="flex flex-col">
      <span className="text-[var(--color-text)] text-sm font-semibold">Tasty recipe #{idx + 1}</span>
      <span className="text-[var(--color-text)]/70 text-xs">30 min • 420 kcal</span>
      </div>
      </div>
      <Chip className="rounded-xl bg-[var(--color-primary)]/15 text-[var(--color-primary)]">Popular</Chip>
      </CardHeader>
      <CardBody className="space-y-3">
      <Image src={src} alt={`Recipe ${idx+1}`} className="w-full h-40 object-cover rounded-xl" removeWrapper />
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
