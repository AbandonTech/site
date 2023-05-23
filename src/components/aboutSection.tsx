import Image from "next/image";

// NextJS cannot handle image URLs being referenced in component directory, image must be stored in public directory.
// Tailwind likes to cache the image path, so it is defined as separate variable here to help with debugging.
const orangeCircleStyle = "list-image-[url(/orangeCircle.svg)]"

interface AboutProps {
    title: string, 
    description: string,
    listItems: Array<string>,
    imgPath: string,
    reversed?: boolean
}

export default function AboutSection(
    props: AboutProps
    ) {
        const formatedList = props.listItems.map((str, i) => {
            return <li key={i}>{str}</li>
        }
    )

    const descElement = <div className="flex-row w-1/3 p-6" key="descElem">
        <div className="flex-col">
            <h1 className="text-4xl md:text-6xl">{props.title}</h1>
            <p className="text-xs md:text-base pt-4">{props.description}</p>
            <ul className={"text-xs md:text-base list-inside pl-2 pt-4 " + orangeCircleStyle}>
                {formatedList}
            </ul>
        </div>
    </div>

    const imageElem = <div className="flex justify-center items-center w-1/3 p-6" key="imgElem">
        <Image src={props.imgPath} alt={"depiction of " + props.title} width={300} height={300}  className="max-h-72" />
    </div>

    let renderElem = props.reversed === true ? [imageElem, descElement] : [descElement, imageElem]

    return (
        <div className="text-white">
            <div className="md:hidden flex flex-col justify-center w-full p-12">
                <Image src={props.imgPath} alt={"depiction of " + props.title} width={300} height={300}  className="max-h-72" />

                <div className="block w-full mt-8">
                    <h1 className="text-5xl text-center">{props.title}</h1>
                    <p className="text-s pt-4">{props.description}</p>
                    <ul className={"text-s list-inside pl-2 pt-4 " + orangeCircleStyle}>
                        {formatedList}
                    </ul>
                </div>
            </div>

            <div className="hidden md:flex w-screen justify-center p-12">
                {renderElem}
            </div>
        </div>
    )
}