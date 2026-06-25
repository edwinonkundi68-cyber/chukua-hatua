function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#2E7D32] px-4 py-3 flex items-center justify-between shadow-md">
      
      {/* Logo */}
      <div>
        <h1 className="text-white text-lg font-black tracking-tight">
          Chukua <span className="text-[#FF8F00]">Hatua</span>
        </h1>
        <p className="text-green-200 text-[10px] leading-none">Pata Fundi. Pata Kazi.</p>
      </div>

      {/* Login Button */}
      <button className="bg-[#FF8F00] text-white text-sm font-bold px-4 py-2 rounded-full">
        Ingia
      </button>

    </nav>
  )
}

export default Navbar