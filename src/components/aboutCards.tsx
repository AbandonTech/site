import Card from "./card";

export default function AboutCards() {
    return (
        <div className="flex flex-row items-center justify-center space-x-24 mt-12">
            <Card title="Hosting" />
            <Card title="WebDev" />
            <Card title="Stuff" />
        </div>
    )
}