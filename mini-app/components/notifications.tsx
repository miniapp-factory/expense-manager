"use client";

import { useExpenseContext } from "./context/expense-provider";

export function Notifications() {
  const { notifications } = useExpenseContext();

  return (
    <div className="fixed bottom-4 right-4 space-y-2">
      {notifications.map((n) => (
        <div key={n.id} className="bg-red-500 text-white p-2 rounded">
          {n.message}
        </div>
      ))}
    </div>
  );
}
