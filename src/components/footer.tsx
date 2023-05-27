import Image from "next/image";
import mailIcon from "@/components/envelope.svg";
import githubIcon from "@/components/github.svg";

const infoEmail = "Info@AbandonTech.cloud"
export default function Footer() {
    return (
        <div id="contactUs" className="flex justify-center md:justify-start w-screen text-lg text-orange-500 bg-white py-16">
            <div className="flex flex-col space-y-2 text-center md:text-left">
                <a  href={`mailto:${infoEmail}`}><Image className="inline-block mr-1" src={mailIcon} width={20} height={50} alt="email envelop icon" />{infoEmail}</a>
                <a  href="https://github.com/AbandonTech" target="_blank" rel="noreferrer"><Image className="inline-block mr-1" src={githubIcon} width={20} height={50} alt="github icon" />Github</a>
            </div>
        </div>
    )
}