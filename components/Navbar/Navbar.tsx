import Hamburger from "hamburger-react";
import Link from "next/link";
import { useState } from "react";
import { SocialIcon } from "react-social-icons";

import { CSSTransition } from "react-transition-group";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    function toggleMenu() {
        setMenuOpen(!menuOpen);
    }

    return (
        <>
            <div className="flex items-center justify-between w-full h-20 px-3 text-xl bg-black md:px-6">
                <h1 className="flex text-[#2888b5] text-3xl font-bold">
                    gitPHYSICALxyz
                </h1>
                <div className="flex items-center text-[#94F533] gap-x-6">
                    <Link href="/#Mint">
                        <a className="transition-opacity duration-300 hover:opacity-70">
                            PLNT
                        </a>
                    </Link>

                    <Link href="/#Mint">
                        <a className="transition-opacity duration-300 hover:opacity-70">
                            Mint
                        </a>
                    </Link>
                </div>
            </div>
        </>
    );
}
