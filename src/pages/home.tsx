import AboutSection from "@/components/aboutSection";
import Banner from "@/components/banner";
import Navbar from "@/components/navbar";
export default function Home() {
    return (
        <div className="md:overflow-hidden">
            <Navbar />
            <Banner />
            <AboutSection
                title="Hosting"
                description="Hello world, this is a test since I am too lazy to generate lorem ipsum. I am hoping this wraps the next line."
                listItems={
                    [
                        "Website Deployment", 
                        "Docker", 
                        "Kubernetes"
                        ]
                }
            />
            
        </div>
    )
}