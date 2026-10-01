export default function Hero(){
    return(
        <section className="bg-secondary">
            <div className="mx-auto grid min-h-[600px] max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2">
                <div>
                    <p className="mb-4 text-sm font-semibold uppercase tracting-[0.2em] text-primary">Natural Gestone</p>
                    <h1 className="max-w-xl text-4xl font-semibold tracking-high text-foreground sm:text-5xl lg:text-6xl">Discover Exceptional Gemstone from Sri Lanka</h1>

                    <p className="mt-6 max-w-lg text-lg leading-8 text-muted-foreground">
                        Explore carefully selected gemstones and professional cut &
                        polish services from our physical and online store.
                    </p>
                    <div className="mx-8 flex flex-col gap-4 sm:flex-row">
                        <a href="/shop" className="inline-flex items-center justify-center bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90">Explore Collection</a>
                        <a href="/contact" className="inline-flex items-center justify-center bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90">Contact US</a>
                    
                    </div>
                </div>
                <div className="flex-min-h-[400px] items-center justify-center rounded-2xl bg-background">
                    <div className="text-center">
                        <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">GemsTone Image</p>
                        <p className="mt-2 text-2xl font-semibold text-foreground">Premium Collection</p>
                    </div>
                </div>
            </div>
        </section>
    );
}