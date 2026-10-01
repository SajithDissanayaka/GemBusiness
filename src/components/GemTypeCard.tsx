type GemType = {
    name : string;
    description : string;
};

type gemTypeCardProps = {
    gemType : GemType;
};

export default function gemTypeCard({gemType} : gemTypeCardProps){
    return(
        <a href="/shop" className="group rounded-2xl border border-border bg-background p-6 tansistion hover:border-primary hover:shadow-md">
            <div className="flex aspect-square items-center justify-center rounded-xl bg-secondary">
                <span className="text-sm uppercase tracking-widest text-muted-foreground">Gem Image</span>
            </div>
            <div className="mt-5">
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary">{ gemType.name }</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{ gemType.description }</p>
                <span className="mt-4 inline-block text-sm font-semibold text-primary">Explore Gems </span>
            </div>
        </a>
    )
    
}

