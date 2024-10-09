import Image from "next/image"

const Hero = () => {
  return (
    <div className="flex items-center h-screen">
      <div className="bg-white/10 backdrop-blur-2xl w-full h-full flex items-center justify-center">
      <h1 className=" text-9xl font-semibold">Buzz<span className="text-blue-700">ME</span></h1>
      </div>
    </div>
  )
}

export default Hero
