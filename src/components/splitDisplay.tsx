export default function SplitDisplay() {
    return (
        <div className="relative overflow-hidden mt-12">
            <div className="flex w-full h-[30rem]">
                <div className="h-full w-[40%] bg-black after:content-[''] after:absolute after:h-[50rem] after:w-[40%] after:bg-black after:rotate-[-45deg] after:origin-top-right after:z-[-1]"></div>

                <div className="absolute w-full h-full bg-transparent p-8">
                    <p className="text-white text-xl">
                        Hello world this is a paragraph that should overlay the slant div, although it will
                        become unredable over the white text, this will need to be fancy in order to fix.
                    </p>
                </div>
            </div>
        </div>
    )
}