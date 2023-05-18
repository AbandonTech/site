export default function Banner() {
    return (
        <div className="text-white w-screen pt-20 bg-gradient-to-b from-slate-700">
            <div className="flex flex-col items-center">
                <p className="text-7xl"><span className="text-orange-400">Custom</span> solutions</p>
                <p className="text-6xl md:mt-4">to fit <span className="text-orange-400">your</span> business</p>
                <p className="mt-8">
                    We strive to provide <span className="text-orange-400">professional </span> 
                    and <span className="text-orange-400">personal</span> solutions to fit any tech needs you may have.
                </p>

                <a className="bg-white bg-opacity-0 mt-10 hover:bg-opacity-5 text-orange-400 font-semibold hover:text-orange-200 py-2 px-4 border border-orange-400 hover:border-orange-200 hover:cursor-pointer rounded" href="#contactUs">Contact Us</a>
            </div>
        </div>
    )
}