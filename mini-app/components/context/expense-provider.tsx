"use client";

import { createContext, useContext, useState, useCallback } from "react";

export interface Transaction {
  id: string;
  type: "expense" | "income";
  category: string;
  amount: number;
  date: Date;
  recurring: boolean;
}

export interface Budget {
  category: string;
  limit: number;
}

export interface Notification {
  id: string;
  message: string;
}

interface ExpenseContextValue {
  transactions: Transaction[];
  budgets: Budget[];
  notifications: Notification[];
  addTransaction: (t: Omit<Transaction, "id">) => void;
  deleteTransaction: (id: string) => void;
  editTransaction: (id: string) => void;
  loadTransactions: () => void;
}

export const ExpenseContext = createContext<ExpenseContextValue | undefined>(undefined);

export function useExpenseContext() {
  const ctx = useContext(ExpenseContext);
  if (!ctx) throw new Error("useExpenseContext must be used within ExpenseProvider");
  return ctx;
}

export function ExpenseProvider({ children }: { children: React.ReactNode }) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [budgets, setBudgets] = useState<Budget[]>([
    { category: "Food", limit: 500 },
    { category: "Bills", limit: 300 },
    { category: "Salary", limit: 0 },
  ]);
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const addTransaction = useCallback((t: Omit<Transaction, "id">) => {
    setTransactions((prev) => [
      ...prev,
      { ...t, id: Date.now().toString() },
    ]);
  }, []);

  const deleteTransaction = useCallback((id: string) => {
    setTransactions((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const editTransaction = useCallback((id: string) => {
    // placeholder for edit logic
  }, []);

  const loadTransactions = useCallback(() => {
    // placeholder for loading logic
  }, []);

  return (
    <ExpenseContext.Provider
      value={{
        transactions,
        budgets,
        notifications,
        addTransaction,
        deleteTransaction,
        editTransaction,
        loadTransactions,
      }}
    >
      {children}
    </ExpenseContext.Provider>
  );
}
