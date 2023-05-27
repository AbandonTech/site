import Image from "next/image";
import envelopImage from "@/components/envelope.svg";

export default function Footer() {
    return (
        <div id="contactUs" className="flex justify-center md:justify-start w-screen text-orange-500 bg-white p-16">
            <div className="flex-col">
                <a  href="mailto:abandontech@gmail.com"><Image className="inline-block mr-1" src={envelopImage} width={20} height={50} alt="envelop icon" />AbandonTech@gmail.com</a>
            </div>
        </div>
    )
}