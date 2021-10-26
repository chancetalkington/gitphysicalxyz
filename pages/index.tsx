import Hero from "../components/Hero/Hero";
import TropicanaPlantCollective from "../components/TropicanaPlantCollective/TropicanaPlantCollective";

import { Toaster } from "react-hot-toast";
import Footer from "../components/Footer/Footer";

export default function Home() {
    return (
        <>
            <Toaster />
            <div className="flex flex-col w-full h-screen">
                <Hero />
                <TropicanaPlantCollective />
                <Footer />
            </div>
        </>
    );
}
