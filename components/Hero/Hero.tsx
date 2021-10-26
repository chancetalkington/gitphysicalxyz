import Navbar from "../Navbar/Navbar";

export default function Hero() {
    return (
        <div
            id="Hero"
            className="flex flex-col items-center w-full h-screen max-h-screen min-h-screen"
        >
            <Navbar />
            <div
                className="flex flex-col items-center justify-end flex-1 w-full h-screen bg-center bg-no-repeat bg-cover"
                style={{
                    backgroundImage: "url(" + `/heroImage.png` + ")",
                }}
            >
                <div className="flex flex-col items-center w-3/4 text-6xl font-bold 2xl:text-7xl h-1/2">
                    <h2
                        className="text-[#94F533] self-start"
                        style={{ textShadow: "4px 4px #83de28" }}
                    >
                        git
                    </h2>
                    <h2
                        className="text-[#94F533] text-8xl my-8"
                        style={{ textShadow: "0px 5px #83de28" }}
                    >
                        physical
                    </h2>
                    <h2
                        className="text-[#94F533] self-end"
                        style={{ textShadow: "-3px -3px #83de28" }}
                    >
                        xyz
                    </h2>
                </div>
            </div>
        </div>
    );
}
