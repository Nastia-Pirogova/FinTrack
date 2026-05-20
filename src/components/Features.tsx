function Features() {
    return (

        <>
            <section className="px-4 my-10">
                <div className="mx-auto container">
                    <div className="mx-auto mb-14 max-w-[520px] text-center">
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#316BFF]">
                            Features
                        </p>
                        <h2 className="mt-3 text-[44px] font-extrabold leading-[1.1] tracking-[-0.03em] text-[#0f172a]">
                            Everything you need to <br/>
                            take control of your money
                        </h2>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                        <div className="rounded-[20px] border border-[#e8ebf3] bg-white px-7 py-8">
                            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#eef3ff]">
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-[#316BFF]">
                                    <path d="M5 5V19H19" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"
                                          stroke-linejoin="round"/>
                                    <path d="M8 15V11" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
                                    <path d="M12 15V8" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
                                    <path d="M16 15V12" stroke="currentColor" stroke-width="1.8"
                                          stroke-linecap="round"/>
                                </svg>
                            </div>

                            <h3 className="text-[22px] font-semibold leading-tight text-[#111827]">
                                Track Expenses
                            </h3>
                            <p className="mt-4 text-[15px] leading-7 text-[#8a94a6]">
                                Easily track and categorize your expenses in real-time.
                            </p>
                        </div>

                        <div className="rounded-[20px] border border-[#e8ebf3] bg-white px-7 py-8">
                            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#eef3ff]">
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-[#316BFF]">
                                    <path d="M12 3V21" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
                                    <path d="M21 12H12" stroke="currentColor" stroke-width="1.8"
                                          stroke-linecap="round"/>
                                    <path d="M18.5 5.5C16.5 3.8 13.9 3 12 3C7 3 3 7 3 12C3 16.9 7 21 12 21"
                                          stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
                                </svg>
                            </div>

                            <h3 className="text-[22px] font-semibold leading-tight text-[#111827]">
                                Manage Budgets
                            </h3>
                            <p className="mt-4 text-[15px] leading-7 text-[#8a94a6]">
                                Create budgets and stay on track with smart alerts.
                            </p>
                        </div>

                        <div className="rounded-[20px] border border-[#e8ebf3] bg-white px-7 py-8">
                            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#eef3ff]">
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-[#316BFF]">
                                    <circle cx="12" cy="12" r="7" stroke="currentColor" stroke-width="1.8"/>
                                    <circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="1.8"/>
                                    <path d="M12 5V3" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
                                    <path d="M19 12H21" stroke="currentColor" stroke-width="1.8"
                                          stroke-linecap="round"/>
                                </svg>
                            </div>

                            <h3 className="text-[22px] font-semibold leading-tight text-[#111827]">
                                Set Goals
                            </h3>
                            <p className="mt-4 text-[15px] leading-7 text-[#8a94a6]">
                                Set financial goals and achieve them step by step.
                            </p>
                        </div>

                        <div className="rounded-[20px] border border-[#e8ebf3] bg-white px-7 py-8">
                            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#eef3ff]">
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-[#316BFF]">
                                    <path d="M12 3L19 6V11C19 15.5 16.1 19.4 12 21C7.9 19.4 5 15.5 5 11V6L12 3Z"
                                          stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>
                                    <path d="M12 7V17" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
                                </svg>
                            </div>

                            <h3 className="text-[22px] font-semibold leading-tight text-[#111827]">
                                Secure &amp; Private
                            </h3>
                            <p className="mt-4 text-[15px] leading-7 text-[#8a94a6]">
                                Your data is encrypted and always protected.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}


export default Features