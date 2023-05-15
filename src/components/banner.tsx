export default function Banner() {
    return (
        <div className="w-full h-[50vh] bg-black">
            <div className="flex flex-row h-full items-center justify-center">
                <div className="text-white pr-10">
                    <h1 className="select-none text-8xl md:text-9xl">@</h1>
                </div>
                <div className="h-full border-solid border-white border-8 p-2"></div>
                <div className="text-white text-5xl md:text-7xl ml-10">
                    <h1>Abandon</h1>
                    <h1>Tech</h1>
                </div>
            </div>
        </div>
    )
}