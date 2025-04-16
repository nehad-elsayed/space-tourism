
export default function Home() {
  return (
    <section
      className="home-page relative min-h-screen bg-cover bg-no-repeat bg-fixed bg-center text-white"
      
    >

      <div className="flex flex-col justify-center h-screen px-6 md:px-24 max-w-4xl">
        <p className="uppercase tracking-widest text-gray-300 text-lg md:text-xl">
          So, you want to travel to
        </p>
        <h1 className="text-[5rem] md:text-[9rem]   leading-tight my-4">
          SPACE
        </h1>
        <p className="text-base md:text-lg text-gray-300 max-w-xl">
          Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Sit back, and relax because we’ll give you a truly out-of-this-world experience!
        </p>
      </div>

     
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 md:bottom-18 lg:bottom-32 md:right-[55px] lg:right-[80px] md:left-auto md:transform-none">
        <div className="w-36 h-36 md:w-48 md:h-48 rounded-full bg-white text-black flex items-center justify-center text-lg md:text-xl font-semibold cursor-pointer hover:scale-105 transition-transform duration-300">
          EXPLORE
        </div>
      </div>
    </section>
  )
}
