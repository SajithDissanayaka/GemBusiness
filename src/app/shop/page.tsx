
"use client";

import { useState } from "react";
import GemCard from "@/src/components/GemCard";

const gems = [
  {
    id: 1,
    name: "Blue Sapphire",
    type: "Sapphire",
    carat: 2.5,
    price: 150000,
    shape: "Oval",
  },
  {
    id: 2,
    name: "Natural Ruby",
    type: "Ruby",
    carat: 1.8,
    price: 125000,
    shape: "Round",
  },
  {
    id: 3,
    name: "Yellow Sapphire",
    type: "Sapphire",
    carat: 3.2,
    price: 175000,
    shape: "Cushion",
  },
  {
    id: 4,
    name: "Amethyst",
    type: "Amethyst",
    carat: 4.1,
    price: 85000,
    shape: "Oval",
  },
  {
    id: 5,
    name: "Pink Sapphire",
    type: "Sapphire",
    carat: 2.1,
    price: 140000,
    shape: "Pear",
  },
  {
    id: 6,
    name: "Green Tourmaline",
    type: "Tourmaline",
    carat: 3.6,
    price: 110000,
    shape: "Emerald",
  },
];

export default function ShopPage() {
  // Gem Type filter state
  const [selectedGemType, setSelectedGemType] = useState("All");

  // Search state
  const [searchTerm, setSearchTerm] = useState("");

  // Price filter state
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [minCarat, setMinCarat] = useState("");
  const [maxCarat, setMaxCarat] = useState("");
  const [selectedShape, setSelectedShape] = useState("All");

  const filteredGems = gems.filter((gem) => {
    // Search filter
    const matchesSearch = gem.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    // Gem type filter
    const matchesType =
      selectedGemType === "All" ||
      gem.type === selectedGemType;

    // Price filter
    const matchesPrice =
      (minPrice === "" || gem.price >= Number(minPrice)) &&
      (maxPrice === "" || gem.price <= Number(maxPrice));

    const matchesCarat = 
        (minCarat === "" || gem.carat >= Number(minCarat)) &&
        (maxCarat === "" || gem.carat <= Number(maxCarat));

    const matchesShape = 
        selectedShape === "All" || gem.shape === selectedShape; 

    // All filters must match
    return matchesSearch && matchesType && matchesPrice && matchesCarat && matchesShape;
  });

  return (
    <main className="bg-background">
      {/* Shop Header */}
      <section className="bg-secondary py-20">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Our Collection
          </p>

          <h1 className="mt-2 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Shop Gemstones
          </h1>

          <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground">
            Explore our collection of gemstones and find the perfect gem for
            your needs.
          </p>
        </div>
      </section>

      {/* Shop Content */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">

          {/* Search */}
          <div className="mb-8">
            <input
              type="text"
              value={searchTerm}
              onChange={(event) =>
                setSearchTerm(event.target.value)
              }
              placeholder="Search gemstones..."
              className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-primary sm:max-w-md"
            />
          </div>

          {/* Gem Type Filters */}
          <div className="mb-10 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => setSelectedGemType("All")}
              className="rounded-full border border-border px-5 py-2 text-sm font-medium transition hover:border-primary hover:text-primary"
            >
              All
            </button>

            <button
              type="button"
              onClick={() => setSelectedGemType("Sapphire")}
              className="rounded-full border border-border px-5 py-2 text-sm font-medium transition hover:border-primary hover:text-primary"
            >
              Sapphire
            </button>

            <button
              type="button"
              onClick={() => setSelectedGemType("Ruby")}
              className="rounded-full border border-border px-5 py-2 text-sm font-medium transition hover:border-primary hover:text-primary"
            >
              Ruby
            </button>

            <button
              type="button"
              onClick={() => setSelectedGemType("Amethyst")}
              className="rounded-full border border-border px-5 py-2 text-sm font-medium transition hover:border-primary hover:text-primary"
            >
              Amethyst
            </button>

            <button
              type="button"
              onClick={() => setSelectedGemType("Tourmaline")}
              className="rounded-full border border-border px-5 py-2 text-sm font-medium transition hover:border-primary hover:text-primary"
            >
              Tourmaline
            </button>
          </div>

          {/* Price Filters */}
          <div className="mb-10 grid gap-4 sm:grid-cols-2">
            <input
              type="number"
              value={minPrice}
              onChange={(event) =>
                setMinPrice(event.target.value)
              }
              placeholder="Minimum price"
              className="rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-primary"
            />

            <input
              type="number"
              value={maxPrice}
              onChange={(event) =>
                setMaxPrice(event.target.value)
              }
              placeholder="Maximum price"
              className="rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-primary"
            />
          </div>
              {/* carat filter */}
          <div className="mb-10 grid gap-4 sm:grid-cols-2">
            <input
                type="number"
                step="0.1"
                min="0"
                value={minCarat}
                onChange={(event) => setMinCarat(event.target.value)}
                placeholder="Minimum carat"
                className="rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-primary"
            />

            <input
                type="number"
                step="0.1"
                min="0"
                value={maxCarat}
                onChange={(event) => setMaxCarat(event.target.value)}
                placeholder="Maximum carat"
                className="rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-primary"
            />
        </div>

        {/* shape filtering*/}
        <div className="mb-10">
            <select
                value={selectedShape}
                onChange={(event) => setSelectedShape(event.target.value)}
                className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-primary sm:max-w-md"
            >
                <option value="All">All Shapes</option>
                <option value="Oval">Oval</option>
                <option value="Round">Round</option>
                <option value="Cushion">Cushion</option>
                <option value="Pear">Pear</option>
                <option value="Emerald">Emerald</option>
            </select>
        </div>

          {/* Results Count */}
          <div className="mb-6">
            <p className="text-sm text-muted-foreground">
              {filteredGems.length} gemstones found
            </p>
          </div>

          {/* Products */}
          {filteredGems.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {filteredGems.map((gem) => (
                <GemCard
                  key={gem.id}
                  gem={gem}
                />
              ))}
            </div>
          ) : (
            /* No Results */
            <div className="rounded-2xl border border-border bg-secondary px-6 py-16 text-center">
              <h2 className="text-xl font-semibold text-foreground">
                No gemstones found
              </h2>

              <p className="mt-2 text-sm text-muted-foreground">
                Try changing your search or selecting different filters.
              </p>
            </div>
          )}

        </div>
      </section>
    </main>
  );
}

