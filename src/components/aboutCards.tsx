import Card from "./card";

const hostingDesc = <ul className="list-disc pl-6">
        <li>Website deployment</li>
        <li>Docker</li>
        <li>Kubernetes</li>
    </ul>

const webDev = <ul className="list-disc pl-6">
        <li>Design</li>
        <li>Website Mangement</li>
        <li>Deployment</li>
    </ul>

const anything = <ul className="list-disc pl-6">
        <li>Social Media Management</li>
        <li>Custom PC/Server Builds</li>
        <li>Don&apos;t see what you need? <a className="underline hover:cursor-pointer" href="#contactUs">Ask</a></li>
    </ul>

export default function AboutCards() {
    return (
        <div className="flex flex-row items-center justify-center space-x-24 mt-12">
            <Card title="Hosting" description={hostingDesc} />
            <Card title="Web Dev" description={webDev} />
            <Card title="Anything Else" description={anything} />
        </div>
    )
}