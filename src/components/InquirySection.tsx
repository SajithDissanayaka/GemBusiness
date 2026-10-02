export default function InquirySection(){
    return(
        <section className="bg-background py-20">
            <div className="mx-auto max-w-7xl px-6">
                <div className="overflow-hidden rounded-3xl bg-foreground px-8 py-12 text-background sm:px-12 sm:px-12 sm:py-16">
                    <div className="grid items-center gap-10 md:grid-cols-[1f_auto]">
                        <div className="max-w-2xl">
                            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Gemstone Inquiry</p>

                            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                                Looking for a Specific Gemstone?
                            </h2>

                            <p className="mt-4 text-base leading-7 text-background/70">
                            Have a question about a gemstone, price, availability, or
                            custom requirement? Contact our team directly through WhatsApp.
                            </p>
                        </div>
                        <div>
                            <a href="https://wa.me/947XXXXXXXX" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90">Chat on whatsapp</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}