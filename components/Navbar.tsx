

const Navbar = () => {
  return (
    <div className="sticky top-0 left-0 z-40 flex justify-between items-center p-4 px-16 bg-white/10 backdrop-blur-xl border-b border-white/10">
      <h1 className=" text-gray-800 text-2xl">BUZZME</h1>
      <button className="p-2 text-white hover:text-white hover:bg-blue-600 transition-colors font-semibold px-10 border rounded-full">Login</button>
    </div>
  )
}

export default Navbar
