import AboutSection from "@/components/aboutSection";
import Banner from "@/components/banner";
import Footer from "@/components/footer";

import hostingImg from "@/components/hosting.svg";
import otherImg from "@/components/other.svg";
import webDevImg from "@/components/webDev.svg";

const aboutHosting =  {
    title: "Hosting",
    description: `We provide a number of solutions for hosting applications and services. Whether it is a simple 
    static site or a complex and distributed service, we would love to assist you in reliably and scalably deploying 
    your applications.`,
    listItems: [
        "Website Deployment", 
        "Docker", 
        "Kubernetes"
    ].sort(),
    imgPath: hostingImg.src
}

const aboutWebDev =  {
    title: "Web Dev",
    description: `Our team is made up of talented developers and designers. Collectively we cover a large range of 
    sills across fullstack web development.`,
    listItems: [
        "Design", 
        "Management", 
        "API Integrations"
    ].sort(),
    imgPath: webDevImg.src
}

const aboutOther =  {
    title: "Anything Else",
    description: `Our team can also assist in a number of other areas within technology. If you do not see what you 
    need listed here, please feel free to reach out.`,
    listItems: [
        "Social Media Management",
        "Search Engine Optimization",
        "3D Printing", 
    ].sort(),
    imgPath: otherImg.src
}

export default function Home() {
    return (
        <div className="md:overflow-hidden">
            <Banner />

            <AboutSection
                {...aboutHosting}
            />

            <AboutSection
                {...aboutWebDev}
                reversed={true}
            />

            <AboutSection
                {...aboutOther}
            />

            <Footer />
            
        </div>
    )
}