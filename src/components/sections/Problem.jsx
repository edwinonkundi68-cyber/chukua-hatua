const problems = [
  { icon: "🧱", role: "Mjengo / Mason", pain: "Wanakaa idle asubuhi wakingoja contractor — hakuna kazi." },
  { icon: "👕", role: "Mamafua", pain: "Wanatembea estate kwa estate kutafuta nguo za kufulia." },
  { icon: "🏍️", role: "Boda Boda", pain: "Wanachoma mafuta kuruka kuruka — trips 1-2 tu kwa siku." },
  { icon: "🧹", role: "Househelp", pain: "Hawapati one-off jobs — agencies zinacharge too much." },
  { icon: "🔧", role: "Jua Kali Fundi", pain: "Jirani anahitaji welder lakini hajui yuko wapi." },
]

function Problem() {
  return (
    <section className="bg-white px-4 py-12">

      {/* Header */}
      <div className="text-center mb-8">
        <p className="text-xs font-bold tracking-widest text-[#2E7D32] uppercase mb-2">
          Tatizo
        </p>
        <h2 className="text-2xl font-black text-[#1A1A1A] leading-tight">
          Kila siku, watu wenye ujuzi<br />
          <span className="text-[#D32F2F]">wanakaa bure.</span>
        </h2>
      </div>

      {/* Problem Cards */}
      <div className="flex flex-col gap-3 max-w-md mx-auto">
        {problems.map((item, index) => (
          <div
            key={index}
            className="flex items-start gap-4 bg-[#FAFAF8] rounded-xl p-4 border border-gray-100"
          >
            <div className="text-3xl">{item.icon}</div>
            <div>
              <p className="text-sm font-bold text-[#1A1A1A]">{item.role}</p>
              <p className="text-xs text-[#666] mt-1 leading-relaxed">{item.pain}</p>
            </div>
          </div>
        ))}
      </div>

    </section>
  )
}

export default Problem