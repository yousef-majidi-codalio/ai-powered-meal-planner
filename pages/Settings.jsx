import React from "react";
import { Cog6ToothIcon, UserIcon } from "@heroicons/react/24/outline";
import { Button, Card, CardBody, CardHeader, Chip } from "@heroui/react";
import { Link } from "react-router-dom";

export default function Settings() {
  return (
    <div className="bg-[var(--color-background)] text-[var(--color-text)]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col gap-8">
          <section>
      <h1 className="text-2xl font-bold text-[var(--color-text)]">Settings</h1>
      <Card className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/70">
      <CardBody className="divide-y divide-[var(--color-border)]">
      <Button as={Link} to="/settings/preferences" className="w-full justify-between rounded-xl bg-transparent hover:bg-[var(--color-background)]/40 text-[var(--color-text)] p-4">
      <div className="flex items-center gap-3">
      <Cog6ToothIcon className="w-5 h-5 text-[var(--color-text)]" />
      <span className="text-[var(--color-text)] text-left">Preferences</span>
      </div>
      <Chip className="rounded-xl bg-[var(--color-primary)]/15 text-[var(--color-primary)]">AI</Chip>
      </Button>
      <Button as={Link} to="/settings/account" className="w-full justify-between rounded-xl bg-transparent hover:bg-[var(--color-background)]/40 text-[var(--color-text)] p-4">
      <div className="flex items-center gap-3">
      <UserIcon className="w-5 h-5 text-[var(--color-text)]" />
      <span className="text-[var(--color-text)] text-left">Account</span>
      </div>
      </Button>
      </CardBody>
      </Card>
      </section>
      </div>
    </div>
  );
}
