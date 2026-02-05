import { Skeleton } from "@/components/ui/skeleton";

export default function AdminLoading() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <Skeleton className="h-3 w-20" />
          <Skeleton className="mt-3 h-8 w-56" />
        </div>
        <Skeleton className="h-10 w-32 rounded-full" />
      </div>

      <Skeleton className="h-[420px]" />
    </div>
  );
}
