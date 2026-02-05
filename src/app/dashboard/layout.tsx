import { AppShell } from "@/components/app/app-shell";
import { PageTransition } from "@/components/page-transition";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <AppShell>
      <PageTransition>{children}</PageTransition>
    </AppShell>
  );
}
