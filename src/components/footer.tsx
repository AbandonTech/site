import Image from "next/image";

import bgImage from "@/components/curveBgClipped.svg";
import envelopImage from "@/components/envelope.svg";

export default function Footer() {
    return (
        <div id="contactUs" className="relative w-screen">

            <div className="absolute text-gray-950 bg-transparent w-full h-48 z-10 top-14">
                <div className="flex flex-row justify-center w-2/3 top-64">
                    <span><a href="mailto:abandontech@gmail.com"><Image className="inline-block mr-1" src={envelopImage} width={20} height={50} alt="envelop icon" />AbandonTech@gmail.com</a></span>
                </div>
            </div>

            <img src={bgImage.src} className="w-full rotate-180 z-0" alt="Orange, curved background for website banner"/>
            
        </div>
    )
}