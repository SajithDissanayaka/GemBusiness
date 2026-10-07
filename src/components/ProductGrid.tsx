import GemCard from "@/src/components/GemCard";
import type { Gem } from "@/src/types/gem";

type ProductGridProps = {
  gems: Gem[];
  resetFilters: () => void;
};

export default function ProductGrid({
  gems,
  resetFilters,
}: ProductGridProps) {
  if (gems.length === 0) {
    return (
      <div className="rounded-2xl border border-border bg-secondary px-6 py-16 text-center">
        <h2 className="text-xl font-semibold text-foreground">
          No gemstones found
        </h2>

        <p className="mt-2 text-sm text-muted-foreground">
          Try changing your search or selecting different filters.
        </p>

        <button
          type="button"
          onClick={resetFilters}
          className="mt-6 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
        >
          Reset Filters
        </button>
      </div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {gems.map((gem) => (
        <GemCard
          key={gem.id}
          gem={gem}
        />
      ))}
    </div>
  );
}