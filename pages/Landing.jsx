import React from "react";
import { AdjustmentsHorizontalIcon, CheckIcon, ClockIcon, FireIcon, StarIcon } from "@heroicons/react/24/outline";
import { Avatar, Button, Card, CardBody, CardHeader, Chip, Image } from "@heroui/react";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="bg-[var(--color-background)] text-[var(--color-text)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col gap-8">
          <section className="relative rounded-3xl p-8 md:p-12 bg-gradient-to-br from-[var(--color-primary)]/80 to-[var(--color-secondary)]/80 shadow-primary">
      <div className="absolute inset-0 -z-0 opacity-20">
      <div className="grid grid-cols-3 md:grid-cols-6 gap-2 p-2">
      {[
      "https://pixabay.com/get/g20041aa8b50f97cf7012d3c5202c5850b1ca3365f2e4035f8021c7510fc0c5f96ccd256fa10603d4aed11d047e9acb253d73182f7e631dd62bdba6367283c0b5_640.jpg",
      "https://pixabay.com/get/g7aeecf77fd57aec6375989c3c1d8061f33b639954a1acef34a492649704c775b005292b9b49f94ca196a62a519f942be91bdcb4ca0f1faf162fc31b42dab982b_640.jpg",
      "https://pixabay.com/get/g69166da3db8d4690bca05f837f99c82326e213dd89fe876e9edc72659b04656e3b205a059143a36494f854914fad9169ddcb5caf5993ec322d0580387adce2a7_640.jpg",
      "https://pixabay.com/get/g5c59199f66e605b76e3c9106cb332e1f74b12d00d3fca8031cf2e295312e7589a17f4b6dd3ff6ff24379270c3cc1da20c30d003b439f0989ee80f69206034f68_640.jpg",
      "https://pixabay.com/get/gc40cacdd8b8417d1078e79745c58b81210e26331ca9ed3f4dd0acc7ccd013550be2df401f0df0b4f4d57624120e01c8f840e2c452a37feca89f80d01772eabfd_640.jpg",
      "https://pixabay.com/get/g9187149be6d925c49b3ef1c12b56040ac32c777affde1bc4ac0d4d8cf12db8f96e75a49bd8ab45244c9692c0653e7057a4bd9255b97e421aa817c55daf495c85_640.jpg"
      ].map((src, idx) => (
      <Image key={idx} src={src} alt="Hero food" className="w-full h-24 md:h-28 object-cover rounded-xl" removeWrapper />
      ))}
      </div>
      </div>

      <div className="relative z-10 max-w-3xl">
      <div className="flex items-center gap-2 mb-4">
      <Chip className="rounded-full bg-[var(--color-background)]/30 text-[var(--color-text)]">AI planning</Chip>
      <Chip className="rounded-full bg-[var(--color-background)]/30 text-[var(--color-text)]">Smart nutrition</Chip>
      <Chip className="rounded-full bg-[var(--color-background)]/30 text-[var(--color-text)]">Grocery sync</Chip>
      </div>
      <h1 className="text-4xl md:text-5xl font-extrabold text-[var(--color-text)] tracking-tight">Healthy meals, planned by AI</h1>
      <p className="mt-4 text-[var(--color-text)]/90 text-[14px] md:text-base max-w-2xl">Personalized weekly meal plans, nutrition tracking, and a smart shopping list—all in one simple, beautiful app.</p>

      <div className="mt-8 flex flex-col sm:flex-row gap-4">
      <Button as={Link} to="/meal-plan" size="md" className="rounded-xl bg-[var(--color-background)] text-[var(--color-primary)] font-semibold px-6 py-3 hover:bg-[var(--color-surface)] transition-all duration-200">Start planning</Button>
      <Button as={Link} to="/recipes" variant="bordered" className="rounded-xl border-[var(--color-text)] text-[var(--color-text)] px-6 py-3 hover:bg-[var(--color-background)]/20 transition-all duration-200">Browse recipes</Button>
      </div>

      <div className="mt-6 flex items-center gap-3">
      <StarIcon className="w-5 h-5 text-[var(--color-accent)]" />
      <p className="text-[var(--color-text)]/80 text-sm">Loved by home cooks worldwide</p>
      </div>
      </div>
      </section>

  <section className="w-full">
      <h2 className="text-2xl font-bold mb-4 text-[var(--color-text)]">Plan smarter, eat better</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Value prop cards */}
      <Card className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/70 hover:shadow-primary transition-all">
      <CardBody className="flex flex-col gap-3">
      <div className="w-10 h-10 rounded-xl bg-[var(--color-primary)]/15 flex items-center justify-center">
      <AdjustmentsHorizontalIcon className="w-5 h-5 text-[var(--color-primary)]" />
      </div>
      <h3 className="text-[var(--color-text)] font-semibold">Personalized plans</h3>
      <p className="text-[var(--color-text)]/80 text-[14px]">Tell us your goals and preferences—our AI designs weekly plans that fit your life.</p>
      <Chip className="w-fit rounded-xl bg-[var(--color-primary)]/15 text-[var(--color-primary)]">Vegan, high-protein, keto</Chip>
      </CardBody>
      </Card>

      <Card className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/70 hover:shadow-primary transition-all">
      <CardBody className="flex flex-col gap-3">
      <div className="w-10 h-10 rounded-xl bg-[var(--color-secondary)]/15 flex items-center justify-center">
      <ClockIcon className="w-5 h-5 text-[var(--color-secondary)]" />
      </div>
      <h3 className="text-[var(--color-text)] font-semibold">Save time & money</h3>
      <p className="text-[var(--color-text)]/80 text-[14px]">Auto-generated shopping lists grouped by aisle make grocery runs fast and focused.</p>
      <Chip className="w-fit rounded-xl bg-[var(--color-secondary)]/15 text-[var(--color-secondary)]">Smart shopping</Chip>
      </CardBody>
      </Card>

      <Card className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/70 hover:shadow-primary transition-all">
      <CardBody className="flex flex-col gap-3">
      <div className="w-10 h-10 rounded-xl bg-[var(--color-accent)]/15 flex items-center justify-center">
      <FireIcon className="w-5 h-5 text-[var(--color-accent)]" />
      </div>
      <h3 className="text-[var(--color-text)] font-semibold">Stay on track</h3>
      <p className="text-[var(--color-text)]/80 text-[14px]">Visualize macros and calories as you plan—no extra apps required.</p>
      <Chip className="w-fit rounded-xl bg-[var(--color-accent)]/15 text-[var(--color-accent)]">Macros & goals</Chip>
      </CardBody>
      </Card>
      </div>

      {/* Quick start CTA */}
      <Card className="mt-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-background)]/60">
      <CardBody className="flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="space-y-1">
      <h3 className="text-[var(--color-text)] font-semibold">Ready to cook smarter?</h3>
      <p className="text-[var(--color-text)]/80 text-[14px]">Create your first AI-powered plan in seconds.</p>
      </div>
      <div className="flex gap-3">
      <Button as={Link} to="/settings/preferences" variant="bordered" className="rounded-xl border-[var(--color-text)] text-[var(--color-text)]">Set preferences</Button>
      <Button as={Link} to="/meal-plan" className="rounded-xl bg-[var(--color-primary)] text-[var(--color-text)]">Generate plan</Button>
      </div>
      </CardBody>
      </Card>
      </section>

  <section>
      <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">How it works</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {[
      { n: 1, title: "Tell us your goals", desc: "Set calories, macros, cuisines, and dietary needs." },
      { n: 2, title: "Generate your plan", desc: "AI builds a balanced week with swaps in seconds." },
      { n: 3, title: "Shop & cook", desc: "Auto shopping list + nutrition tracking as you go." }
      ].map((s) => (
      <Card key={s.n} className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/70">
      <CardHeader className="flex items-center gap-3">
      <Chip className="rounded-full bg-[var(--color-primary)]/20 text-[var(--color-primary)]">{s.n}</Chip>
      <h3 className="text-[var(--color-text)] font-semibold">{s.title}</h3>
      </CardHeader>
      <CardBody>
      <p className="text-[var(--color-text)]/80 text-[14px]">{s.desc}</p>
      </CardBody>
      </Card>
      ))}
      </div>
      <div className="mt-6">
      <Button as={Link} to="/meal-plan" className="rounded-xl bg-[var(--color-primary)] text-[var(--color-text)]">Try it now</Button>
      </div>
      </section>
  <section>
      <Card className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-background)]/60">
      <CardBody className="flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-4">
      <div className="flex -space-x-2">
      <Avatar src="https://i.pravatar.cc/150?img=1" size="sm" className="ring-2 ring-[var(--color-background)]" />
      <Avatar src="https://i.pravatar.cc/150?img=2" size="sm" className="ring-2 ring-[var(--color-background)]" />
      <Avatar src="https://i.pravatar.cc/150?img=3" size="sm" className="ring-2 ring-[var(--color-background)]" />
      </div>
      <p className="text-[var(--color-text)] text-sm">Join thousands planning meals with AI</p>
      </div>
      <Button as={Link} to="/meal-plan" className="rounded-xl bg-[var(--color-primary)] text-[var(--color-text)]">Start your first plan</Button>
      </CardBody>
      </Card>
      </section>
      </div>
    </div>
  );
}
