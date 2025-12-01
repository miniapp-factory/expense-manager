"use client";

import { useExpenseContext } from "./context/expense-provider";

export function BudgetSummary() {
  const { budgets, transactions } = useExpenseContext();

  const summary = budgets.map((b) => {
    const spent = transactions
      .filter((t) => t.category === b.category && t.type === "expense")
      .reduce((acc, t) => acc + t.amount, 0);
    return { ...b, spent };
  });

  return (
    <div className="space-y-2">
      <h2 className="text-xl font-semibold">Budget Summary</h2>
      {summary.map((s) => (
        <div key={s.category} className="flex justify-between">
          <span>{s.category}</span>
          <span>
            {s.spent.toFixed(2)} / {s.limit.toFixed(2)}
          </span>
        </div>
      ))}
    </div>
  );
}
