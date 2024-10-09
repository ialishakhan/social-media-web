

const Navbar = () => {
  return (
    <div className="sticky top-0 left-0 z-40 flex justify-between items-center p-4 px-16 bg-white/10 backdrop-blur-xl border-b border-white/10">
      <h1 className="font-medium text-gray-800 text-2xl">BuzzME</h1>
      <button className="bg-white/20 p-2 text-blue-700 font-semibold backdrop-blur-lg px-10 border rounded-full">Login</button>
    </div>
  )
}

export default Navbar
