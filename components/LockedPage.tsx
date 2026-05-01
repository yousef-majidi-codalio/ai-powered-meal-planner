import React from "react";

export default function LockedPage() {
  const handleUpgrade = () => {
    if (window.parent && window.parent !== window) {
      window.parent.postMessage({ type: "codalio-upgrade-request" }, "*");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-16 bg-background text-foreground">
      <div className="max-w-md w-full rounded-lg border border-border bg-card p-8 text-center shadow-sm space-y-6">
        <div className="space-y-2">
          <h1 className="text-2xl font-semibold">Page Locked</h1>
          <p className="text-muted-foreground text-sm">This page is locked on your current plan. Upgrade to unlock full access.</p>
        </div>
        <button
          type="button"
          className="inline-flex h-10 w-full items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          onClick={handleUpgrade}
        >
          Upgrade Now
        </button>
      </div>
    </div>
  );
}