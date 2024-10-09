import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
   <div className="bg-gradient-to-br from-blue-700 via-[#fafeb6] to-blue-500 min-h-screen">
    <Navbar />
    <Hero />
   </div>
  );
}
