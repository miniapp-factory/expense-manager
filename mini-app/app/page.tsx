import { generateMetadata } from "@/lib/farcaster-embed";

export { generateMetadata };

import { ExpenseManager } from "@/components/expense-manager";
import { ExpenseProvider } from "@/components/context/expense-provider";

export default function Home() {
  return (
    <ExpenseProvider>
      <ExpenseManager />
    </ExpenseProvider>
  );
}
