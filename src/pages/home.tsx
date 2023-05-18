import AboutCards from "@/components/aboutCards";
import Banner from "@/components/banner";
import Navbar from "@/components/navbar";
export default function Home() {
    return (
        <div className="overflow-hidden">
            <Navbar />
            <Banner />
            <AboutCards />
        </div>
    )
}