import preview from '../assets/img.png'
function TextImage() {
    return (

        <>
            <section className="px-4 my-10">
                <div className="container mx-auto grid items-center gap-12 lg:grid-cols-[1fr_1.3fr]">
                    <div className="">
                        <div
                            className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#eef3ff] px-4 py-2 text-sm font-medium text-[#4f7cff]">
                            💡
                            Smart way to manage your money
                        </div>

                        <h1 className="text-[48px] font-extrabold leading-[1.05] tracking-[-0.03em] text-[#0f172a] md:text-[64px]">
                            Manage your <br/>
                            finances <span className="text-[#316BFF]">smarter</span>
                        </h1>

                        <p className="mt-6 max-w-[500px] text-[18px] leading-8 text-slate-500">
                            Track expenses, manage budgets and reach your financial goals — all in one place.
                        </p>

                        <div className="mt-8 flex flex-wrap items-center gap-4">
                            <a
                                href="#"
                                className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-4  font-semibold text-white transition hover:bg-blue-700"
                            >
                                Get Started Free
                                <span>→</span>
                            </a>

                            <a
                                href="#"
                                className="inline-flex items-center rounded-lg border border-slate-300 bg-white px-6 py-4 font-semibold text-slate-900 transition hover:bg-slate-50"
                            >
                                Learn More
                            </a>
                        </div>

                        <div className="mt-10 flex items-center gap-4">
                            <div className="flex -space-x-2">
                                <img
                                    src="https://i.pravatar.cc/40?img=12"
                                    alt=""
                                    className="h-10 w-10 rounded-full border-2 border-white object-cover"
                                />
                                <img
                                    src="https://i.pravatar.cc/40?img=32"
                                    alt=""
                                    className="h-10 w-10 rounded-full border-2 border-white object-cover"
                                />
                                <img
                                    src="https://i.pravatar.cc/40?img=15"
                                    alt=""
                                    className="h-10 w-10 rounded-full border-2 border-white object-cover"
                                />
                                <img
                                    src="https://i.pravatar.cc/40?img=24"
                                    alt=""
                                    className="h-10 w-10 rounded-full border-2 border-white object-cover"
                                />
                            </div>

                            <div>
                                <div className="text-sm tracking-[0.2em] text-[#f5b301]">★★★★★</div>
                                <p className="mt-1 text-sm text-slate-400">
                                    Trusted by <span className="font-semibold text-slate-500">10,000+ users</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <img
                            src={preview}
                            alt="Finance dashboard preview"
                            className="w-full object-contain"
                        />
                    </div>
                </div>
            </section>
        </>
    )
}


export default TextImage