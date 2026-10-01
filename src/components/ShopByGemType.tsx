import GemTypeCard from "./GemTypeCard";


const gemTypes = [
    {
        name : "Sappire",
        description : "Explore our collection of natural sapphire gemstones."
    },
    {
        name: "Ruby",
        description: "Discover beautiful ruby gemstones for your collection.",
    },
    {
        name: "Emerald",
        description: "Browse elegant emerald gemstones from our collection.",
    },
    {
        name: "Amethyst",
        description: "Explore unique and beautiful amethyst gemstones.",
    },
]

export default function ShopByGemType(){
    return(
        <section className="bg-secondary py-20">
            <div className="mx-auto max-w-7xl px-6">
                <div className="max-w-2xl">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Explore our Collection</p>

                    <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Shop By Gem Type</h2>

                    <p className="mt-3 text-muted-foreground">Discover gemstones by type and find the perfect gem for your collection. </p>

                </div>
                <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {gemTypes.map((gemType)=>(
                        <GemTypeCard key={gemType.name} gemType={gemType}/>
                ))}
                </div>
            </div>
        </section>
    )
}