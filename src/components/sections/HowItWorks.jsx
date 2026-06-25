const steps = [
  {
    number: "01",
    icon: "📱",
    title: "Jisajili Bure",
    description: "Weka jina, namba ya simu, na ujuzi wako. Inachukua dakika 2 tu.",
  },
  {
    number: "02",
    icon: "⚡",
    title: "Weka Niko Ready",
    description: "Geuza toggle unapopatikana. Wateja wa karibu wanakuona mara moja.",
  },
  {
    number: "03",
    icon: "💰",
    title: "Fanya Kazi, Lipwa Salama",
    description: "Malipo yanashikiliwa na Stash. Unalipwa mara kazi inathibitishwa.",
  },
]

function HowItWorks() {
  return (
    <section className="bg-[#FAFAF8] px-4 py-12">

      {/* Header */}
      <div className="text-center mb-8">
        <p className="text-xs font-bold tracking-widest text-[#2E7D32] uppercase mb-2">
          Jinsi Inavyofanya Kazi
        </p>
        <h2 className="text-2xl font-black text-[#1A1A1A] leading-tight">
          Rahisi kama<br />
          <span className="text-[#2E7D32]">kutuma SMS.</span>
        </h2>
      </div>

      {/* Steps */}
      <div className="flex flex-col gap-4 max-w-md mx-auto">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm flex gap-4 items-start"
          >
            {/* Number */}
            <div className="bg-[#E8F5E9] text-[#2E7D32] font-black text-sm rounded-lg px-2 py-1 flex-shrink-0">
              {step.number}
            </div>

            {/* Content */}
            <div>
              <p className="text-xl mb-1">{step.icon}</p>
              <p className="text-sm font-bold text-[#1A1A1A]">{step.title}</p>
              <p className="text-xs text-[#666] mt-1 leading-relaxed">{step.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="text-center mt-8">
        <button className="bg-[#FF8F00] text-white font-bold py-4 px-8 rounded-xl text-sm shadow-md">
          Anza Sasa — Bure Kabisa
        </button>
      </div>

    </section>
  )
}

export default HowItWorks