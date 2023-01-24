import AboutCards from "@/components/aboutCards";
import Banner from "@/components/banner";
import Navbar from "@/components/navbar";
import SplitDisplay from "@/components/splitDisplay";
export default function Home() {
    return (
        <>
            <Navbar />
            <Banner />
            <AboutCards />
            <SplitDisplay />
        </>
    )
}