type Gem = {
  id: number;
  name: string;
  type: string;
  carat: number;
  price: number;
  shape: string;
};

type GemCardProps = {
  gem: Gem;
};

export default function GemCard({ gem }: GemCardProps) {
  return (
    <article className="overflow-hidden rounded-2xl border border-border bg-background">
      {/* Gemstone Image */}
      <div className="flex aspect-square items-center justify-center bg-secondary">
        <span className="text-sm uppercase tracking-widest text-muted-foreground">
          Gemstone Image
        </span>
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

          <a
            href="/shop"
            className="text-sm font-semibold text-primary hover:opacity-80"
          >
            View Gem
          </a>
        </div>
      </div>
    </article>
  );
}