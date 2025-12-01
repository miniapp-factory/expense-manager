"use client";

import { useEffect } from "react";
import { TransactionForm } from "./transaction-form";
import { TransactionList } from "./transaction-list";
import { BudgetSummary } from "./budget-summary";
import { Notifications } from "./notifications";
import { useExpenseContext } from "./context/expense-provider";

export function ExpenseManager() {
  const { loadTransactions } = useExpenseContext();

  useEffect(() => {
    loadTransactions();
  }, [loadTransactions]);

  return (
    <div className="w-full max-w-4xl mx-auto p-4 space-y-6">
      <h1 className="text-3xl font-bold text-center">Expense Manager</h1>
      <TransactionForm />
      <TransactionList />
      <BudgetSummary />
      <Notifications />
    </div>
  );
}
