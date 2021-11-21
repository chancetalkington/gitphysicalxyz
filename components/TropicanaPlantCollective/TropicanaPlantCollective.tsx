/* eslint-disable @next/next/no-img-element */
import { useWallet } from "@solana/wallet-adapter-react";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import { useEffect, useState } from "react";
import Countdown from "react-countdown";
import useCandyMachine from "../../hooks/useCandyMachine";
import Loader from "../Loader";

export default function TropicanaPlantCollective() {
    const { isSoldOut, mintStartDate, isMinting, startMint, nftsData } =
        useCandyMachine();
    const { setVisible, visible } = useWalletModal();
    const { connected, connecting, wallet, ready, publicKey, disconnect } =
        useWallet();

    const [isMintLive, setIsMintLive] = useState(false);

    async function handleClick() {
        if (isMintLive) {
            if (!wallet) {
                setVisible(true);
            } else if (!connecting && !connected && !ready) {
                (window as any).open(wallet.url, "_blank").focus();
                await disconnect();
            } else if (connected && ready && publicKey) {
                startMint();
            } else {
                console.log("Clicked");
            }
        }
    }

    useEffect(() => {
        if (new Date(mintStartDate).getTime() < Date.now()) {
            setIsMintLive(true);
        }
    }, []);

    return (
        <div
            id="Mint"
            className="flex flex-col items-center w-full h-screen max-h-screen min-h-screen py-10 bg-center bg-no-repeat bg-cover"
            style={{
                backgroundImage: "url(" + `/plantImage.png` + ")",
            }}
        >
            <h1 className="text-[#2888b5] text-center text-5xl lg:text-6xl mt-4 font-bold">
                Tropicana Plant Collective
            </h1>

            <div className="flex flex-col items-center justify-center flex-1 w-full">
                <img
                    src="/assetExamples.gif"
                    className="w-11/12 md:w-3/4 lg:w-1/2 max-w-[500px]"
                    alt="Sneak Peaks"
                />

                <button
                    onClick={handleClick}
                    className="px-5 border-2 border-black font-fredoka text-2xl py-2.5 mt-10 font-bold text-[#2888b5] transition-colors rounded-lg hover:bg-[#2d2d2d] bg-[#474745]"
                >
                    {isMintLive ? (
                        <>
                            {wallet ? (
                                <>
                                    {connecting ? (
                                        <p>Connecting</p>
                                    ) : (
                                        <>
                                            {connected && ready && publicKey ? (
                                                <>
                                                    {isMinting ? (
                                                        <Loader color="white" />
                                                    ) : (
                                                        <p>Mint</p>
                                                    )}
                                                </>
                                            ) : (
                                                <p>Install {wallet.name}</p>
                                            )}
                                        </>
                                    )}
                                </>
                            ) : (
                                <p>Connect Wallet</p>
                            )}
                        </>
                    ) : (
                        <Countdown
                            date={mintStartDate}
                            onMount={({ completed }) =>
                                completed && setIsMintLive(true)
                            }
                            onComplete={() => setIsMintLive(true)}
                        />
                    )}
                </button>

                {connected && ready && publicKey && (
                    <p className="mt-2 font-semibold text-white">
                        {publicKey.toBase58().slice(0, 4) +
                            ".." +
                            publicKey.toBase58().slice(-4)}
                    </p>
                )}

                {nftsData && (
                    <div className="flex flex-col text-white">
                        <p>
                            {nftsData.itemsRemaining}/{nftsData.itemsRedeemed}/
                            {nftsData.itemsAvailable}
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
