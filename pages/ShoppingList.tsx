import React from "react";
import { Button } from "../components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";

import ShoppingListGroup from "../components/ShoppingListGroup";

import { useState } from "react";

export default function ShoppingList() {
    const [store, setStore] = useState("any");
    const clear = () => window.alert('All items cleared (demo)');
  return (
   <div className="bg-background text-foreground w-full min-w-0 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col gap-6 w-full min-w-0">
          <section className="py-4 flex flex-wrap items-center gap-3 justify-between">
      <div className="flex items-center gap-2">
      <Select value={store} onValueChange={setStore}>
      <SelectTrigger className="w-[180px]"><SelectValue placeholder="Store"/></SelectTrigger>
      <SelectContent className="bg-popover text-popover-foreground">
      <SelectItem value="any">Any store</SelectItem>
      <SelectItem value="wholefoods">Whole Foods</SelectItem>
      <SelectItem value="traderjoes">Trader Joe's</SelectItem>
      <SelectItem value="kroger">Kroger</SelectItem>
      </SelectContent>
      </Select>
      <Button variant="outline" size="sm" onClick={clear}>Clear all</Button>
      </div>
      <Dialog>
      <DialogTrigger asChild>
      <Button size="sm">Share</Button>
      </DialogTrigger>
      <DialogContent>
      <DialogHeader><DialogTitle>Share list</DialogTitle></DialogHeader>
      <p className="text-sm text-muted-foreground">Copy link to send your list.</p>
      <div className="mt-2 text-xs break-all">https://example.com/list/abcdef</div>
      </DialogContent>
      </Dialog>
      </section>
  <section className="py-2">
  <ShoppingListGroup />
  </section>
      </div>
    </div>
  );
}