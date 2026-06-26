const categories = [
  { icon: "🧱", label: "Mjengo" },
  { icon: "👕", label: "Mamafua" },
  { icon: "🔧", label: "Fundi" },
  { icon: "🚿", label: "Plumber" },
  { icon: "🧵", label: "Tailor" },
  { icon: "🏍️", label: "Boda Boda" },
  { icon: "🧹", label: "Househelp" },
  { icon: "📚", label: "Tutor" },
  { icon: "🌽", label: "Farmer" },
]

function Categories() {
  return (
    <section style={{ backgroundColor: '#ffffff' }} className="px-4 py-10">

      {/* Header */}
      <div className="text-center mb-6">
        <p className="text-xs font-bold tracking-widest text-[#2E7D32] uppercase mb-2">
          Kategoria
        </p>
        <h2 className="text-2xl font-black text-[#1A1A1A]">
          Pata <span className="text-[#FF8F00]">Mtaalamu</span> Wowote
        </h2>
      </div>

      {/* Scrollable Strip */}
      <div className="flex gap-3 overflow-x-auto pb-2">
        {categories.map((cat, index) => (
          <div
            key={index}
            style={{ backgroundColor: '#F5F5F5', border: '1px solid #E0E0E0' }}
            className="flex flex-col items-center gap-2 rounded-xl px-4 py-3 flex-shrink-0 cursor-pointer"
          >
            <span className="text-3xl">{cat.icon}</span>
            <span className="text-xs font-bold text-[#1A1A1A] whitespace-nowrap">{cat.label}</span>
          </div>
        ))}
      </div>

    </section>
  )
}

export default Categories