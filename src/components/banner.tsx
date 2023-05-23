import bgImage from "@/components/curveBgClipped.svg";

// NextJs <Image> component does not currently seem to be compatible with images where both a
// predetermined height and width cannot be known.

export default function Banner() {
    return (
        <div>
            <div className="text-gray-950 bg-white py-20">
                <div className="flex flex-col items-center">
                    <h1 className="text-5xl md:text-9xl font-primary font-bold">AbandonTech</h1>
                    <h3 className="text-xl md:text-4xl mt-6"><span className="text-orange-400">Custom</span> solutions to fit your <span className="text-orange-400">business</span></h3>

                    <a className="bg-white bg-opacity-0 mt-10 hover:bg-opacity-5 text-orange-400 font-semibold hover:text-orange-200 py-2 px-4 border border-orange-400 hover:border-orange-200 hover:cursor-pointer rounded" href="#contactUs">Contact Us</a>
                </div>
            </div>

            <img src={bgImage.src} className="w-screen" alt="Orange, curved background for website banner"/>
            
        </div>
    )
}