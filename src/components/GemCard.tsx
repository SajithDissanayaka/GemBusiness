type Gem = {
    name : string;
    type : string;
    carat : number;
    price : number;
};

type GemCardProps = {
    gem : Gem;
};

export default function GemCard({gem} : GemCardProps){
    return(
        <article className="overflow-hidden rounded-2xl border border-border bg-background">
            <div className="flex aspect-square items-center justify-center bg-secondary">
                <span className="text-sm uppercase tracking-widest text-muted-foreground">Gemstone Image</span>
            </div>
            <div className="p-5">
                <p className="mt-1 text-xl font-semibold text-foreground">{gem.type}</p>

                <h3 className="mt-1 text-xl font-semibold text-foreground">{gem.name}</h3>

                <p className="mt-2 text-sm text-muted-foreground">{gem.carat} ct</p>

                <div className="mt-4 flex items-center justify-between">
                    <p className="font-semibold text-foreground">LKR {gem.price.toLocaleString()}</p>

                    <a href="/shop" className="text-sm font-semibold text-primary hover:opacity-80">View Gem</a>
                    
                </div>
            </div>
        </article>
    )
} 

