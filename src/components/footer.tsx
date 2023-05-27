import Image from "next/image";

import bgImage from "@/components/curveBgClipped.svg";
import envelopImage from "@/components/envelope.svg";

export default function Footer() {
    return (
        <div className="relative w-screen">
            <img src={bgImage.src} className="md:hidden w-full rotate-180 z-0 select-none" alt="Orange, curved background for website banner"/>

            <div className="text-gray-950 w-full bg-white p-6 md:p-0 md:bg-transparent md:z-10 md:absolute md:top-14">
                <div id="contactUs" className="flex flex-row justify-center w-full md:w-2/3 md:top-64">
                    <span><a href="mailto:abandontech@gmail.com"><Image className="inline-block mr-1" src={envelopImage} width={20} height={50} alt="envelop icon" />AbandonTech@gmail.com</a></span>
                </div>
            </div>

            <img src={bgImage.src} className="hidden md:block w-full rotate-180 z-0 select-none" alt="Orange, curved background for website banner"/>
            
        </div>
    )
}