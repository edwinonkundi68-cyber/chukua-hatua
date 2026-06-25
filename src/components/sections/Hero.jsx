function Hero() {
  return (
    <section className="min-h-screen bg-[#FAFAF8] flex flex-col items-center justify-center px-4 pt-20 pb-10 text-center">

      {/* Tag */}
      <div className="bg-[#E8F5E9] text-[#2E7D32] text-xs font-bold px-3 py-1 rounded-full mb-4 tracking-wide">
        🇰🇪 Made for Kenya
      </div>

      {/* Headline */}
      <h1 className="text-4xl font-black text-[#1A1A1A] leading-tight mb-3">
        Pata Fundi.<br />
        Pata Kazi.<br />
        <span className="text-[#2E7D32]">Sasa Hivi.</span>
      </h1>

      {/* Subtext */}
      <p className="text-[#555] text-sm max-w-xs mb-8 leading-relaxed">
        Unganisha mafundi, mamafua, mjengo, na boda boda na wateja wa karibu nawe — bila agency, bila stress.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col gap-3 w-full max-w-xs">
        <button className="bg-[#FF8F00] text-white font-bold py-4 rounded-xl text-base shadow-md">
          Pata Mtu Sasa →
        </button>
        <button className="border-2 border-[#2E7D32] text-[#2E7D32] font-bold py-4 rounded-xl text-base">
          Ninataka Kazi
        </button>
      </div>

      {/* Social proof */}
      <p className="text-xs text-[#888] mt-8">
        ✅ Trusted by <strong>500+ workers</strong> across Nairobi
      </p>

    </section>
  )
}

export default Hero