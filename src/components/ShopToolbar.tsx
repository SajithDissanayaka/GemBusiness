type ShopToolbarProps = {
  resultCount: number;
  sortOption: string;
  setSortOption: (value: string) => void;
};

export default function ShopToolbar({
  resultCount,
  sortOption,
  setSortOption,
}: ShopToolbarProps) {
  return (
    <div className="mb-8 flex flex-col gap-4 border-b border-border pb-6 sm:flex-row sm:items-center sm:justify-between">

      {/* Results Count */}
      <div>
        <p className="text-sm text-muted-foreground">
          {resultCount} gemstones found
        </p>
      </div>

      {/* Sort */}
      <div>
        <select
          value={sortOption}
          onChange={(event) =>
            setSortOption(event.target.value)
          }
          className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-primary sm:w-auto"
        >
          <option value="default">
            Sort By
          </option>

          <option value="price-low-high">
            Price: Low to High
          </option>

          <option value="price-high-low">
            Price: High to Low
          </option>

          <option value="carat-low-high">
            Carat: Low to High
          </option>

          <option value="carat-high-low">
            Carat: High to Low
          </option>
        </select>
      </div>

    </div>
  );
}