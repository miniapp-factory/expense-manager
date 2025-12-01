"use client";

import { useExpenseContext } from "./context/expense-provider";
import { Button } from "@/components/ui/button";

export function TransactionList() {
  const { transactions, deleteTransaction, editTransaction } = useExpenseContext();

  return (
    <div className="space-y-4">
      {transactions.map((t) => (
        <div key={t.id} className="flex items-center justify-between p-2 border rounded">
          <div>
            <span className="font-medium">{t.category}</span> -{" "}
            <span>{t.type}</span> - <span>{t.amount.toFixed(2)}</span>
          </div>
          <div className="space-x-2">
            <Button variant="outline" size="sm" onClick={() => editTransaction(t.id)}>
              Edit
            </Button>
            <Button variant="destructive" size="sm" onClick={() => deleteTransaction(t.id)}>
              Delete
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}
