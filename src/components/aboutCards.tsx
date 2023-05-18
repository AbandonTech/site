import Card from "./card";

const hostingDesc = <p>
    Website deployment
    <br />
    Docker
    <br />
    Kubernetes
</p>

const webDev = <p>
    Design
    <br />
    Website Mangement
    <br />
    API Integrations
</p>

const anything = <p>
    Social Media Management
    <br />
    API Integrations
    <br />
    3D Printing
</p>

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