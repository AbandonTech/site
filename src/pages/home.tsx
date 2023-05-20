import AboutSection from "@/components/aboutSection";
import Banner from "@/components/banner";
import Navbar from "@/components/navbar";

const aboutSect1 =  {
    title: "Hosting",
    description: "Hello world, this is a test since I am too lazy to generate lorem ipsum. I am hoping this wraps the next line.",
    listItems: [
        "Website Deployment", 
        "Docker", 
        "Kubernetes"
    ]
}

const aboutSect2 =  {
    title: "Hosting",
    description: "Hello world, this is a test since I am too lazy to generate lorem ipsum. I am hoping this wraps the next line.",
    listItems: [
        "Website Deployment", 
        "Docker", 
        "Kubernetes"
    ]
}

const aboutSect3 =  {
    title: "Hosting",
    description: "Hello world, this is a test since I am too lazy to generate lorem ipsum. I am hoping this wraps the next line.",
    listItems: [
        "Website Deployment", 
        "Docker", 
        "Kubernetes"
    ]
}

export default function Home() {
    return (
        <div className="md:overflow-hidden">
            <Navbar />
            <Banner />

            <AboutSection
                {...aboutSect1}
            />

            <AboutSection
                {...aboutSect2}
                reversed={true}
            />

            <AboutSection
                {...aboutSect3}
            />
            
        </div>
    )
}