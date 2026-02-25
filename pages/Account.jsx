import React from "react";
import { Avatar, Button, Card, CardBody, CardHeader, Chip, Input, Select, SelectItem } from "@heroui/react";

export default function Account() {
    const [name, setName] = React.useState("Jamie Doe");
    const [email, setEmail] = React.useState("jamie@example.com");
    const [avatarUrl] = React.useState("https://i.pravatar.cc/150?img=8");
    const [org, setOrg] = React.useState("home");
    const [role, setRole] = React.useState("owner");
  return (
   <div className="bg-[var(--color-background)] text-[var(--color-text)]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col gap-8">
          <section>
      <Card className="lg:col-span-2 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/70">
      <CardHeader className="flex items-center justify-between">
      <h3 className="text-[var(--color-text)] font-semibold">Profile</h3>
      <Avatar src={avatarUrl} className="border border-[var(--color-border)]" />
      </CardHeader>
      <CardBody className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Input label="Name" labelPlacement="outside-top" value={name} onValueChange={setName} classNames={{ inputWrapper: "rounded-xl bg-[var(--color-background)]/60 border border-[var(--color-border)]", label: "text-[var(--color-text)]", input: "text-[var(--color-text)]" }} />
      <Input label="Email" labelPlacement="outside-top" value={email} onValueChange={setEmail} classNames={{ inputWrapper: "rounded-xl bg-[var(--color-background)]/60 border border-[var(--color-border)]", label: "text-[var(--color-text)]", input: "text-[var(--color-text)]" }} />
      <div className="md:col-span-2 flex justify-end gap-3">
      <Button variant="bordered" className="rounded-xl border-[var(--color-border)] text-[var(--color-text)]">Cancel</Button>
      <Button className="rounded-xl bg-[var(--color-primary)] text-[var(--color-text)]">Save</Button>
      </div>
      </CardBody>
      </Card>

      <Card className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-background)]/60">
      <CardHeader>
      <h3 className="text-[var(--color-text)] font-semibold">Organization & role</h3>
      </CardHeader>
      <CardBody className="space-y-4">
      <Select label="Organization" labelPlacement="outside-top" selectedKeys={org ? [org] : []} onSelectionChange={(k) => setOrg(Array.from(k)[0] || "home")} classNames={{ trigger: "h-10 rounded-xl bg-[var(--color-background)]/60 border border-[var(--color-border)]", label: "text-[var(--color-text)]", popoverContent: "bg-[var(--color-surface)] text-[var(--color-text)]" }}>
      <SelectItem key="home" className="text-[var(--color-text)]">Home</SelectItem>
      <SelectItem key="team" className="text-[var(--color-text)]">Team</SelectItem>
      </Select>
      <Select label="Role" labelPlacement="outside-top" selectedKeys={role ? [role] : []} onSelectionChange={(k) => setRole(Array.from(k)[0] || "owner")} classNames={{ trigger: "h-10 rounded-xl bg-[var(--color-background)]/60 border border-[var(--color-border)]", label: "text-[var(--color-text)]", popoverContent: "bg-[var(--color-surface)] text-[var(--color-text)]" }}>
      <SelectItem key="owner" className="text-[var(--color-text)]">Owner</SelectItem>
      <SelectItem key="member" className="text-[var(--color-text)]">Member</SelectItem>
      </Select>
      <Chip className="rounded-xl bg-[var(--color-secondary)]/15 text-[var(--color-secondary)] w-fit">Free plan</Chip>
      </CardBody>
      </Card>
      </section>
      </div>
    </div>
  );
}
