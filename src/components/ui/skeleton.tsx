import { cn } from "@/lib/utils";

type SkeletonProps = {
  className?: string;
};

export function Skeleton({ className }: SkeletonProps) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-2xl border border-white/10 bg-white/60 dark:bg-white/10",
        className
      )}
    />
  );
}
