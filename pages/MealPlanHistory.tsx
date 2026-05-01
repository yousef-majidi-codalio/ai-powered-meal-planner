import React from "react";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table";

import { useState } from "react";
import { Link } from "react-router-dom";

export default function MealPlanHistory() {
    const rows = Array.from({length: 8}).map((_,i) => ({ week: 24 - i, start: `2026-0${(i%9)+1}-01`, end: `2026-0${(i%9)+1}-07`, status: i === 0 ? 'Current' : 'Archived' }));
  return (
   <div className="bg-background text-foreground w-full min-w-0 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col gap-6 w-full min-w-0">
          <section className="py-4">
      <div className="overflow-x-auto">
      <Table>
      <TableHeader>
      <TableRow>
      <TableHead>Week</TableHead>
      <TableHead>Start</TableHead>
      <TableHead>End</TableHead>
      <TableHead>Status</TableHead>
      <TableHead className="text-right">Actions</TableHead>
      </TableRow>
      </TableHeader>
      <TableBody>
      {rows.map((r) => (
      <TableRow key={r.week}>
      <TableCell>Week {r.week}</TableCell>
      <TableCell>{r.start}</TableCell>
      <TableCell>{r.end}</TableCell>
      <TableCell><Badge variant="secondary">{r.status}</Badge></TableCell>
      <TableCell className="text-right">
      <Button asChild size="sm" variant="outline"><Link to="/meal-plan/current">Open</Link></Button>
      </TableCell>
      </TableRow>
      ))}
      </TableBody>
      </Table>
      </div>
      </section>
      </div>
    </div>
  );
}