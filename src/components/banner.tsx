import bgImage from "@/components/curveBgClipped.svg";

// NextJs <Image> component does not currently seem to be compatible with images where both a
// predetermined height and width cannot be known.

export default function Banner() {
    return (
        <div>
            <div className="text-gray-950 bg-white py-20 md:py-32">
                <div className="flex flex-col items-center">
                    <h1 className="text-5xl md:text-9xl font-bold select-none">AbandonTech</h1>
                    <h3 className="text-base md:text-4xl mt-6"><strong className="text-orange-400">Custom</strong> solutions to fit your <strong className="text-orange-400">business</strong></h3>

                    <a className="bg-white text-xl bg-opacity-0 mt-10 md:mt-16 duration-300 hover:bg-opacity-5 text-orange-400 font-semibold p-3 md:p-4 border border-orange-400 hover:border-orange-600 hover:text-orange-600 hover:bg-orange-300 hover:cursor-pointer rounded" href="#contactUs">Contact Us</a>
                </div>
            </div>

            <div className=" w-screen h-20 overflow-x-hidden mt-[-2px] md:h-48">
                <img src={bgImage.src} className="block scale-150 w-screen select-none" alt="Orange, curved background for website banner"/>
            </div>
            
            
        </div>
    )
}