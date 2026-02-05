import { AdminShell } from "@/components/app/admin-shell";
import { PageTransition } from "@/components/page-transition";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <AdminShell>
      <PageTransition>{children}</PageTransition>
    </AdminShell>
  );
}
