import { SocialIcon } from "react-social-icons";
import Link from "next/link";

export default function Footer() {
    return (
        <div className="flex items-center justify-between px-3 py-10 bg-black md:px-7">
            <Link href="/#Hero">
                <a className="flex hover:opacity-70 transition-opacity duration-300 text-[#2888b5] text-2xl md:text-3xl lg:text-4xl font-bold">
                    gitPHYSICALxyz
                </a>
            </Link>

            <div className="flex items-center">
                <SocialIcon
                    url="https://twitter.com/gitphysicalxyz"
                    target="_blank"
                    network="twitter"
                    fgColor="#FFFFFF"
                    style={{ height: 45, width: 45 }}
                    className="ml-4 mr-2 transition-opacity duration-300 hover:opacity-70"
                />
                <SocialIcon
                    url="https://discord.gg/3AkruSa4"
                    target="_blank"
                    network="discord"
                    fgColor="#FFFFFF"
                    className="transition-opacity duration-300 hover:opacity-70"
                    style={{ height: 45, width: 45 }}
                />
            </div>
        </div>
    );
}
