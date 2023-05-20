export default function AboutSection(
    props: {
        title: string, 
        description: string,
        listItems: Array<string>
    }
    ) {
    const formatedList = props.listItems.map((str, i) => {
            return <li key={i}>{str}</li>
        }
    )

    return (
        <div className="flex w-screen justify-center text-white pt-12">
            <div className="flex-row w-1/3">
                <div className="flex-col">
                    <h1 className="text-4xl md:text-6xl">{props.title}</h1>
                    <p className="text-xs md:text-base pt-4">{props.description}</p>
                    <ul className="text-xs md:text-base list-disc list-inside pl-2 pt-4">
                        {formatedList}
                    </ul>
                </div>
            </div>
            <div className="w-1/3">
                Image here
            </div>
        </div>
    )
}