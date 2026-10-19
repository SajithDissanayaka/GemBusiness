import type { Gem } from "@/src/types/gem";
import Link from "next/link";
import Image from "next/image";

type GemCardProps = {
  gem: Gem;
};

export default function GemCard({ gem }: GemCardProps) {
  return (
    <article className="overflow-hidden rounded-2xl border border-border bg-background">
      {/* Gemstone Image */}
      <div className="relative aspect-square overflow-hidden bg-secondary">
        {gem.imageUrl ? (
          <Image
            src={gem.imageUrl}
            alt={gem.name}
            fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover"/>
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <span className="text-sm uppercase tracking-widest text-muted-foreground">
              Gemstone Image
            </span>
          </div>
        )}
      </div>

      {/* Gem Details */}
      <div className="p-5">
        <p className="text-sm text-muted-foreground">
          {gem.type}
        </p>

        <h3 className="mt-1 text-xl font-semibold text-foreground">
          {gem.name}
        </h3>

        <div className="mt-3 flex gap-4 text-sm text-muted-foreground">
          <span>{gem.carat} ct</span>
          <span>{gem.shape}</span>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <p className="font-semibold text-foreground">
            LKR {gem.price.toLocaleString()}
          </p>

          <Link
            href={`/shop/${gem.id}`}
            className="text-sm font-semibold text-primary hover:opacity-80"
          >
            View Gem
          </Link>
        </div>
      </div>
    </article>
  );
}