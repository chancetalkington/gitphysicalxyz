import Navbar from "../Navbar/Navbar";

export default function Hero() {
    return (
        <div
            id="Hero"
            className="relative flex flex-col items-center w-full h-screen max-h-screen min-h-screen"
        >
            <Navbar />
            <video
                src="/bgVideo.mp4"
                autoPlay
                playsInline
                muted
                loop
                className="absolute object-cover w-full h-full"
            />
        </div>
    );
}
