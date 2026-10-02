const benefits = [
    {
        title : "Carefully Selected Gems",
        description : "We offer a carefully selected collection of gemstones for customers looking for quality and beauty."
    },
    {
        title: "Professional Cut & Polish",
        description:
            "Our cut and polish service helps transform gemstones according to your preferred style and requirements.",
    },
    {
        title: "Physical Store",
        description:
        "Visit our physical store to see and discuss gemstones with our team in person.",
    },
    {
        title: "Personal Customer Service",
        description:
        "We are available to help you with gemstone inquiries, purchases, and custom service requests.",
    },

];

export default function WhyChooseUs(){
    return (
        <section className="bg-background py-20">
            <div className="mx-auto max-w-7xl px-6">
                <div className="mx-auto max-w-2xl text-center">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Why Choose Us</p>

                    <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">A Better way to dicover GemStones</h2>

                    <p className="mt-4 text-muted-foreground">
                        We combine quality gemstones, professional services, and personal
                        customer care to provide a better buying experience.
                    </p>

                </div>
                <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {benefits.map((benefits)=>(
                        <article key={benefits.title} className="rounded-2xl border border-border bg-background p-6 text-center transition hover:-translate-y-1 hover:shadow-md">
                            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-secondary">
                                <span className="text-xl text-primary">✦</span>
                            </div>
                            <h3 className="mt-5 text-lg font-semibold text-foreground">{benefits.title}</h3>

                            <p className="mt-3 text-sm leading-6 text-muted-foreground">{benefits.description}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}