export default function Card(props) {
    return (
        <div className="h-96 w-72 border-solid border-gray-200 shadow rounded">
            <div className="flex items-center justify-center text-white text-4xl h-1/2 bg-black rounded-t">
                <span>{props.title}</span>
            </div>
            <div className="h-1/2 rounded-b p-5">
                Bottom Half
            </div>
        </div>
    )
}