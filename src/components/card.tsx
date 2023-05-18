import { ReactElement } from "react";

export default function Card(props: {title: string, description: ReactElement}) {
    return (
        <div className="h-64 w-72 shadow-lg rounded border border-slate-500 text-orange-400">
            <div className="flex flex-col h-full items justify-center font-bold text-4xl bg-slate-800 rounded-t">
                <div className="w-auto mx-auto">
                    <p>{props.title}</p>
           
                    <div className="text-sm font-mono mt-4">{props.description}</div>
                </div>
            </div>
        </div>
    )
}