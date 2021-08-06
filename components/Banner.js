import Image from "next/image";

function Banner() {
    return (
        <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
            <Image
             src="https://links.papareact.com/0fm"
             layout="fill"
             objectFit="cover"
             />
             <div className="absolute top-1/2 w-full font-semibold text-center">
                 <p className="text-sm sm:text-4xl font-bold text-black">Not sure where to go? Perfect.</p>

                 <button className=" mt-2 text-purple-500 bg-white px-10 py-4 shadow-md rounded-full hover:shadow-xl active:scale-90 transition duration-150 font-semibold">Explore</button>
             </div>
        </div>
    )
}

export default Banner;