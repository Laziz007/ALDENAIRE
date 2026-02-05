import { Skeleton } from "@/components/ui/skeleton";

export default function AdminLogsLoading() {
  return (
    <div className="space-y-8">
      <div>
        <Skeleton className="h-3 w-20" />
        <Skeleton className="mt-3 h-8 w-48" />
        <Skeleton className="mt-3 h-4 w-72" />
      </div>

      <Skeleton className="h-[420px]" />
    </div>
  );
}
