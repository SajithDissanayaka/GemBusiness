import GemCard from "./GemCard";

const featuredGems = [
    {
        name: "Blue Sapphire",
        type:"sapphire",
        carat: 2.5,
        price: 150000,
    },
    {
        name:"Ruby",
        type:"Ruby",
        carat : 1.8,
        price:125000,
    },
    {
        name: "Yellow Sapphire",
        type: "Sapphire",
        carat: 3.2,
        price: 175000,
    },
    {
        name: "Amethyst",
        type: "Amethyst",
        carat: 4.1,
        price: 85000,
    },
];

export default function FeaturedGems(){
    return(
        <section className="bg-background py-20">
            <div className="mx-auto max-w-7xl px-6">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Our Collection</p>

                        <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Featured Gemstone</h2>

                        <p className="mt-3 max-w-xl text-muted-foreground">Explore a selection of Gemstones from our collection</p>
                    </div>

                    <a href="/shop" className="text-sm font-semibold text-primary hoveropacity-80">View All Gems</a>
                </div>

                <div className="mt-10 grid gap-6 sm:grid-cols-2 lg-grid-cols-4">
                    {featuredGems.map((gem) =>(
                        <GemCard key={gem.name} gem={gem}/>
                    ))}
                </div>
            </div>
        </section>
    )
}