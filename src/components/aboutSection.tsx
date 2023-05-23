 // NextJS cannot handle image URLs being referenced in component directory, image must be stored in public directory.
 // Tailwind likes to cache the image path, so it is defined as separate variable here to help with debugging.
const orangeCircleStyle = "list-image-[url(/orangeCircle.svg)]"

interface AboutProps {
    title: string, 
        description: string,
        listItems: Array<string>,
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

    const imageElem = <div className="w-1/3 p-6" key="imgElem">
        Image here
    </div>

    let renderElem = props.reversed === true ? [imageElem, descElement] : [descElement, imageElem]

    return (
        <div className="flex w-screen justify-center text-white p-12">
            {renderElem}
        </div>
    )
}