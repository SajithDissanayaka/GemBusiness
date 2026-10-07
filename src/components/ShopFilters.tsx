
type ShopFiltersProps = {
  searchTerm: string;
  selectedGemType: string;

  minPrice: string;
  maxPrice: string;

  minCarat: string;
  maxCarat: string;

  selectedShape: string;

  setSearchTerm: (value: string) => void;
  setSelectedGemType: (value: string) => void;

  setMinPrice: (value: string) => void;
  setMaxPrice: (value: string) => void;

  setMinCarat: (value: string) => void;
  setMaxCarat: (value: string) => void;

  setSelectedShape: (value: string) => void;

  resetFilters: () => void;
};

export default function ShopFilters({
  searchTerm,
  selectedGemType,
  minPrice,
  maxPrice,
  minCarat,
  maxCarat,
  selectedShape,
  setSearchTerm,
  setSelectedGemType,
  setMinPrice,
  setMaxPrice,
  setMinCarat,
  setMaxCarat,
  setSelectedShape,
  resetFilters,
}: ShopFiltersProps) {
  const gemTypes = [
    "All",
    "Sapphire",
    "Ruby",
    "Amethyst",
    "Tourmaline",
  ];

  return (
    <aside>
      <div className="rounded-2xl border border-border bg-background p-6 lg:sticky lg:top-6">

        {/* Filter Heading */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-foreground">
            Filters
          </h2>

          <p className="mt-1 text-sm text-muted-foreground">
            Refine the gemstone collection.
          </p>
        </div>

        {/* Search */}
        <div className="border-b border-border pb-6">
          <label className="mb-3 block text-sm font-semibold text-foreground">
            Search
          </label>

          <input
            type="text"
            value={searchTerm}
            onChange={(event) =>
              setSearchTerm(event.target.value)
            }
            placeholder="Search gemstones..."
            className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-primary"
          />
        </div>

        {/* Gem Type */}
        <div className="border-b border-border py-6">
          <p className="mb-3 text-sm font-semibold text-foreground">
            Gem Type
          </p>

          <div className="flex flex-wrap gap-2">
            {gemTypes.map((type) => (
              <button
                key={type}
                type="button"
                onClick={() =>
                  setSelectedGemType(type)
                }
                className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                  selectedGemType === type
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-background text-foreground hover:border-primary hover:text-primary"
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Price Range */}
        <div className="border-b border-border py-6">
          <p className="mb-3 text-sm font-semibold text-foreground">
            Price Range
          </p>

          <div className="grid gap-3">
            <input
              type="number"
              min="0"
              value={minPrice}
              onChange={(event) =>
                setMinPrice(event.target.value)
              }
              placeholder="Minimum price"
              className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-primary"
            />

            <input
              type="number"
              min="0"
              value={maxPrice}
              onChange={(event) =>
                setMaxPrice(event.target.value)
              }
              placeholder="Maximum price"
              className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-primary"
            />
          </div>
        </div>

        {/* Carat Range */}
        <div className="border-b border-border py-6">
          <p className="mb-3 text-sm font-semibold text-foreground">
            Carat Range
          </p>

          <div className="grid gap-3">
            <input
              type="number"
              step="0.1"
              min="0"
              value={minCarat}
              onChange={(event) =>
                setMinCarat(event.target.value)
              }
              placeholder="Minimum carat"
              className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-primary"
            />

            <input
              type="number"
              step="0.1"
              min="0"
              value={maxCarat}
              onChange={(event) =>
                setMaxCarat(event.target.value)
              }
              placeholder="Maximum carat"
              className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-primary"
            />
          </div>
        </div>

        {/* Shape */}
        <div className="border-b border-border py-6">
          <label className="mb-3 block text-sm font-semibold text-foreground">
            Shape
          </label>

          <select
            value={selectedShape}
            onChange={(event) =>
              setSelectedShape(event.target.value)
            }
            className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-primary"
          >
            <option value="All">
              All Shapes
            </option>

            <option value="Oval">
              Oval
            </option>

            <option value="Round">
              Round
            </option>

            <option value="Cushion">
              Cushion
            </option>

            <option value="Pear">
              Pear
            </option>

            <option value="Emerald">
              Emerald
            </option>
          </select>
        </div>

        {/* Clear Filters */}
        <div className="pt-6">
          <button
            type="button"
            onClick={resetFilters}
            className="w-full rounded-xl border border-border bg-background px-5 py-3 text-sm font-semibold text-foreground transition hover:border-primary hover:text-primary"
          >
            Clear Filters
          </button>
        </div>

      </div>
    </aside>
  );
}
