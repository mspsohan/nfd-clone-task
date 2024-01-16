import { CiSettings } from "react-icons/ci";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { LuLayoutDashboard } from "react-icons/lu";
import { FaApple } from "react-icons/fa";
import { FaWindows } from "react-icons/fa";
import Button from "../Button";
import './../navbar/navbar.css'
import { useState } from "react";

const Banner = () => {
    const [isTrue, setIsTrue] = useState(true);

    return (
        <div className="mt-5 container max-w-[1440px] mx-auto flex items-center justify-center">
            <div className="bg-white rounded-tl-xl rounded-bl-xl w-[100%] h-[78.7vh] overflow-hidden">
                <div className="px-12 flex flex-col justify-center items-center">
                    <div className="py-1 px-5 w-fit mb-14 mt-12 rounded-full border border-[#8459f5]">Software by NFD</div>

                    <h1 className="text-6xl text-center text-gray-700 leading-10 mt-12 font-syne font-bold">NFD platform
                        <br /><br /><span className="text-[#848aff] ">“NFD.gg”</span></h1>
                    <p className="text-xl text-center my-7 text-gray-600 font-semibold">An Alpha community 2.0 with its own platform for participating, searching, and tracking any crypto related information.</p>
                    <div className="flex items-center gap-x-5 justify-between">
                        <div className="flex gap-3 innerBorder py-1 rounded-xl px-2 items-center">
                            <div className="p-1 rounded-md bg-slate-300 text-2xl"><LuLayoutDashboard></LuLayoutDashboard></div>
                            <p className="text-gray-500">Info in one place</p>
                        </div>
                        <div className="flex gap-3 innerBorder py-1 rounded-xl px-2 items-center">
                            <div className="p-1 rounded-md bg-slate-300 text-2xl"><MdOutlinePrivacyTip></MdOutlinePrivacyTip></div>
                            <p className="text-gray-500">Info in one place</p>
                        </div>
                        <div className="flex gap-3 innerBorder py-1 rounded-xl px-2 items-center">
                            <div className="p-1 rounded-md bg-slate-300 text-2xl"><CiSettings></CiSettings></div>
                            <p className="text-gray-500">Info in one place</p>
                        </div>
                    </div>
                    <div className="flex justify-center items-center mt-10 gap-10">
                        <Button btnText={'Try Platform'}></Button>
                        <p className="text-[#8459f5] text-md">How it work?</p>
                    </div>
                </div>
                <img className="rounded-bl-xl " src="https://i.ibb.co/jLPNRwm/Purple-Ellips.webp" alt="" />
            </div>
            <div className="bg-black rounded-tr-lg rounded-br-lg w-[100%] h-[78.7vh] overflow-hidden">
                <img src="https://i.ibb.co/kJmLFTN/software-Ellipse.webp" alt="" className="-mt-5" />

                <div className="px-12 flex flex-col justify-center items-center">

                    <div className="py-1 px-5 w-fit mb-5 rounded-full border border-[#8459f5] text-gray-300">Software by NFD</div>
                    <h1 className="text-6xl text-center text-gray-700 leading-10 font-syne font-bold">NFD software
                        <br /><br /><span className="text-[#848aff] ">“Combine”</span></h1>
                    <p className="text-xl text-center my-6 text-gray-600 font-semibold">Handle your crypto-wallets, farm activities and retrodrops on a single app.</p>
                    <div className="flex items-center justify-center my- border-b  border-gray-700">

                        <div onClick={() => setIsTrue(true)} className={` ${isTrue ? 'border-b-2 shadow-[0px_25px_9px_0px_#8459f524] cursor-pointer text-gray-100' : 'text-gray-400'} border-[#8459f5] pb-6 px-20 flex items-center gap-2  text-2xl`}><FaApple></FaApple>
                            <p className="">macOs</p>
                        </div>
                        <div onClick={() => setIsTrue(false)} className={` px-20 cursor-pointer pb-6 ${isTrue ? 'text-gray-400' : 'border-b-2 text-gray-100'} border-[#8459f5] flex items-center gap-2  text-2xl`}><FaWindows></FaWindows>
                            <p className="">Windows</p>
                        </div>
                    </div>

                    <div className="flex justify-center items-center mt-10 gap-10">
                        <Button btnText={'Try Platform'}></Button>
                        <p className="text-[#8459f5] text-md">How it work?</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;