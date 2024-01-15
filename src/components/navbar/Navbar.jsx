import './navbar.css'
import { FaDiscord } from "react-icons/fa6";
import { IoLogoTwitter } from "react-icons/io";
import { useEffect, useState } from 'react';
import Button from '../Button';

const Navbar = () => {
    const [isTrue, setIsTrue] = useState(0);

    useEffect(() => {

        const handleScroll = () => {
            const { scrollTop, scrollHeight } = document.documentElement;
            const scrollPercent = (scrollTop / (scrollHeight - window.innerHeight)) * 100;

            setIsTrue(scrollPercent);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };

    }, [])


    return (
        <div className="pt-5 container max-w-[1440px] mx-auto">
            <nav className={` ${isTrue ? 'fixed bg-gray-800 w-full py-3 top-0' : 'container mx-auto bg-white rounded-3xl py-3'} overflow-hidden flex justify-between items-center px-10  transition duration-500`}>
                <div className='flex items-center gap-3'>
                    <svg width="56" height="43" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 21.061h11.205v10.97H0V21.06Z" fill="#D6B0FF"></path><path d="m17.928 25.449-6.723 6.582L22.41 42.78 34.51 30.934l-1.793-17.551h-14.79v12.066Z" fill="url(#Logo_svg__a)"></path><path d="M11.205 32.03H22.41V43H11.205V32.03Z" fill="#D6B0FF"></path><path d="M48.63 17.332v9.653L32.717 11.408 43.923 0l10.981 10.97-6.275 6.362Z" fill="url(#Logo_svg__b)"></path><path d="M43.923 0h11.205v10.97H43.923V0ZM11.653 10.828 22.428.279l32.644 31.957-10.776 10.549-32.643-31.957Z" fill="#D6B0FF"></path><defs><linearGradient id="Logo_svg__a" x1="29.059" y1="52.563" x2="13.838" y2="-7.019" gradientUnits="userSpaceOnUse"><stop offset="0.031" stopColor="#848AFF"></stop><stop offset="1" stopColor="#EA8CFF"></stop></linearGradient><linearGradient id="Logo_svg__b" x1="29.059" y1="52.563" x2="13.838" y2="-7.019" gradientUnits="userSpaceOnUse"><stop offset="0.031" stopColor="#848AFF"></stop><stop offset="1" stopColor="#EA8CFF"></stop></linearGradient></defs></svg>
                    <svg width="69" height="20" viewBox="0 0 69 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M32.9214 0.128174H27.3516H21.4079H21.2905L21.4079 11.86V14.7671H20.8218L10.603 0.128174H0.179443V19.7746H6.24051L6.09383 5.13559H6.73815L17.0153 19.7746H21.4075H27.3512V18.3955V13.0001V11.91H32.9211H34.7045H37.6953H41.3068V7.60979H37.6953H34.7045H32.9211H27.3516V7.04225V4.75267H32.9214H34.7049H37.6957H48.6272H57.2062C61.8033 4.75267 62.6816 5.04742 62.6816 10.0253C62.6816 11.1151 62.7106 13.324 61.8029 14.0898C61.1296 14.6495 59.812 14.679 58.9917 14.7085C58.2891 14.738 57.6154 14.7671 56.9128 14.7671H48.6265V6.22532H42.7704V19.7746H57.4104C59.9576 19.7746 64.6424 19.9808 66.663 18.1252C67.8633 17.006 68.3026 15.0914 68.4196 13.5007C68.5072 12.2343 68.5369 10.938 68.5369 9.67156C68.5369 7.75698 68.5952 5.69521 67.981 3.83965C66.8691 0.481579 63.7069 0.216705 60.6617 0.157684C59.5491 0.128174 58.4365 0.128174 57.3239 0.128174H48.6276H42.7715H41.3076H37.696H34.7052H32.9214Z" fill="#171717"></path></svg>
                </div>

                <div>
                    <ul className={`flex items-center gap-7 transition duration-300 font-semibold ${isTrue ? 'text-gray-100' : 'text-gray-600 translate-x-40'}`}>
                        <li className='hover:text-blue-500 hover:border-b cursor-pointer duration-300 transition hover:-translate-y-1'>About</li>
                        <li className='hover:text-blue-500 hover:border-b cursor-pointer  duration-300 transition hover:-translate-y-1'>Aggregator</li>
                        <li className='hover:text-blue-500 hover:border-b cursor-pointer  duration-300 transition hover:-translate-y-1'>Features</li>
                        <li className='hover:text-blue-500 hover:border-b cursor-pointer  duration-300 transition hover:-translate-y-1'>Roadmap</li>
                        <li className='hover:text-blue-500 hover:border-b cursor-pointer  duration-300 transition hover:-translate-y-1'>Contact us</li>
                    </ul>
                </div>
                <div className={`flex justify-between gap-x-14 transition duration-500 ${isTrue ? '' : 'translate-x-80'}`}>
                    <div className='flex gap-5 items-center'>
                        <FaDiscord className='cursor-pointer text-2xl text-[#7855f3]' />
                        <IoLogoTwitter className='cursor-pointer text-2xl text-[#7855f3]' />
                        <div className={`${isTrue ? '' : 'translate-x-10'} transition duration-500`}><Button btnText={'Combine'}></Button></div>
                    </div>
                    <Button btnText={'Platform'}></Button>
                </div>

            </nav>
        </div>
    );
};

export default Navbar;