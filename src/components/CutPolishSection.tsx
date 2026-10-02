export default function CutPolishSection(){
    return(
        <section className="bg-secondary py-20">
            <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-2 ">
                <div className="flex min-h-[420px] items-center justify-center rounded-2xl bg-background">
                    <div className="text-center">
                        <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Cut & Polish</p>

                        <p className="mt-2 text-2xl font-semibold text-foreground">Professional Gemstone Craftsmanship</p>

                    </div>
                </div>

                <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Our Services</p>
                    <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                        Transform Your Gemstone with Professional Cut & Polish
                    </h2>

                    <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground">
                            Have a rough or uncut gemstone? Submit a cut and polish request
                            and discuss your requirements with our team.
                    </p>
                    <div className="mt-8">
                        <a href="/cut-and-polish" className="inline-flex items-center justify-center bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-80">Request Cut & Polish</a>
                    </div>
                </div>
            </div>
        </section>
    )
}