import Banner from "../banner/Banner";
import Navbar from "../navbar/Navbar";


const HeroSection = () => {
    return (
        <div className="bg-slate-200 pb-20">
            <Navbar></Navbar>
            <Banner></Banner>
        </div>
    );
};

export default HeroSection;