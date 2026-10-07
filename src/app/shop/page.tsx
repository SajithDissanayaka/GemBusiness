
"use client";

import { useState } from "react";

import ShopFilters from "@/src/components/ShopFilters";
import ShopToolbar from "@/src/components/ShopToolbar";
import ProductGrid from "@/src/components/ProductGrid";
import { gems } from "@/src/data/gems";

import type { Gem } from "@/src/types/gem";



export default function ShopPage() {
  // -----------------------------
  // STATE
  // -----------------------------

  const [searchTerm, setSearchTerm] = useState("");

  const [selectedGemType, setSelectedGemType] =
    useState("All");

  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const [minCarat, setMinCarat] = useState("");
  const [maxCarat, setMaxCarat] = useState("");

  const [selectedShape, setSelectedShape] =
    useState("All");

  const [sortOption, setSortOption] =
    useState("default");

  // -----------------------------
  // FILTERING
  // -----------------------------

  const filteredGems = gems.filter((gem) => {
    const matchesSearch = gem.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesType =
      selectedGemType === "All" ||
      gem.type === selectedGemType;

    const matchesPrice =
      (minPrice === "" ||
        gem.price >= Number(minPrice)) &&
      (maxPrice === "" ||
        gem.price <= Number(maxPrice));

    const matchesCarat =
      (minCarat === "" ||
        gem.carat >= Number(minCarat)) &&
      (maxCarat === "" ||
        gem.carat <= Number(maxCarat));

    const matchesShape =
      selectedShape === "All" ||
      gem.shape === selectedShape;

    return (
      matchesSearch &&
      matchesType &&
      matchesPrice &&
      matchesCarat &&
      matchesShape
    );
  });

  // -----------------------------
  // SORTING
  // -----------------------------

  const sortedGems = [...filteredGems].sort(
    (a, b) => {
      if (sortOption === "price-low-high") {
        return a.price - b.price;
      }

      if (sortOption === "price-high-low") {
        return b.price - a.price;
      }

      if (sortOption === "carat-low-high") {
        return a.carat - b.carat;
      }

      if (sortOption === "carat-high-low") {
        return b.carat - a.carat;
      }

      return 0;
    }
  );

  // -----------------------------
  // RESET FILTERS
  // -----------------------------

  function resetFilters() {
    setSearchTerm("");
    setSelectedGemType("All");

    setMinPrice("");
    setMaxPrice("");

    setMinCarat("");
    setMaxCarat("");

    setSelectedShape("All");

    setSortOption("default");
  }

  // -----------------------------
  // UI
  // -----------------------------

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
            Explore our collection of gemstones and
            find the perfect gem for your needs.
          </p>

        </div>
      </section>

      {/* Shop Content */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">

          <div className="grid gap-10 lg:grid-cols-[280px_1fr]">

            {/* --------------------------
                FILTER SIDEBAR
            -------------------------- */}

            <ShopFilters
              searchTerm={searchTerm}
              selectedGemType={selectedGemType}
              minPrice={minPrice}
              maxPrice={maxPrice}
              minCarat={minCarat}
              maxCarat={maxCarat}
              selectedShape={selectedShape}
              setSearchTerm={setSearchTerm}
              setSelectedGemType={
                setSelectedGemType
              }
              setMinPrice={setMinPrice}
              setMaxPrice={setMaxPrice}
              setMinCarat={setMinCarat}
              setMaxCarat={setMaxCarat}
              setSelectedShape={
                setSelectedShape
              }
              resetFilters={resetFilters}
            />

            {/* --------------------------
                PRODUCTS AREA
            -------------------------- */}

            <div>

              {/* Toolbar */}
              <ShopToolbar
                resultCount={sortedGems.length}
                sortOption={sortOption}
                setSortOption={setSortOption}
              />

              {/* Product Grid */}
              <ProductGrid
                gems={sortedGems}
                resetFilters={resetFilters}
              />

            </div>

          </div>
        </div>
      </section>

    </main>
  );
}
