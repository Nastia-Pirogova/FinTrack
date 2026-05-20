function Faq() {
    const faqs = [
        {
            question: 'Is Financy free to use?',
            answer:
                'Yes, you can get started for free and use the core features without any upfront cost.',
        },
        {
            question: 'Can I connect multiple bank accounts?',
            answer:
                'Yes, you can connect multiple accounts and track all your finances in one place.',
        },
        {
            question: 'Is my financial data secure?',
            answer:
                'Absolutely. Your data is encrypted and protected using modern security standards.',
        },
        {
            question: 'Can I create custom budgets?',
            answer:
                'Yes, you can set custom budgets for different categories and monitor your spending easily.',
        },
        {
            question: 'Does Financy work on mobile devices?',
            answer:
                'Yes, the platform is fully responsive and works smoothly on desktop, tablet, and mobile.',
        },
    ]

    return (
        <section className="px-4 my-16">
            <div className="mx-auto container">
                <div className="mx-auto mb-12 max-w-[520px] text-center">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#316BFF]">
                        FAQ
                    </p>
                    <h2 className="mt-3 text-[40px] font-extrabold leading-[1.1] tracking-[-0.03em] text-[#0f172a] md:text-[48px]">
                        Frequently asked questions
                    </h2>
                    <p className="mt-4 text-base leading-7 text-slate-500">
                        Everything you need to know about using Financy.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((item, index) => (
                        <details
                            key={index}
                            className="group rounded-2xl border border-[#e8ebf3] bg-white px-6 py-5"
                        >
                            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-lg font-semibold text-[#111827]">
                                {item.question}
                                <span className="text-2xl font-light text-[#316BFF] transition group-open:rotate-45">
                                  +
                                </span>
                            </summary>

                            <p className="mt-4 max-w-[700px] pr-8 text-[15px] leading-7 text-slate-500">
                                {item.answer}
                            </p>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    )
}


export default Faq