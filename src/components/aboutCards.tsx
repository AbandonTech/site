import Card from "./card";

const hostingDesc = <ul className="list-disc pl-6">
        <li>Website deployment</li>
        <li>Docker</li>
        <li>Kubernetes</li>
    </ul>

const webDev = <ul className="list-disc pl-6">
        <li>Design</li>
        <li>Website Mangement</li>
        <li>API Integrations</li>
    </ul>

const anything = <ul className="list-disc pl-6">
        <li>Social Media Management</li>
        <li>Custom PC/Server Builds</li>
        <li>3D Printing</li>
    </ul>

export default function AboutCards() {
    return (
        <div className="flex flex-col items-center justify-center mt-12">
            <div className="flex flex-col md:flex-row md:space-x-24">
                <Card title="Hosting" description={hostingDesc} />
                <Card title="Web Dev" description={webDev} />
                <Card title="Anything Else" description={anything} />
            </div>
            <div className="text-4xl mt-12">
                <p>Don&apos;t see what you need? <a className="underline hover:cursor-pointer" href="#contactUs">Ask us</a></p>
            </div>
        </div>
    )
}