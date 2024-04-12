import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import lgHomeImage from "../assets/images/lgHomeImage.png";
import smHomeImage from "../assets/images/smHomeImage.png";
import logoOne from "../assets/images/logo_one.png"
import logoTwo from  "../assets/images/logo_two.png"
import logoThree from  "../assets/images/logo_three.png"
import logoFour from  "../assets/images/logo_four.png"
import logoFive from  "../assets/images/logo_five.png"
import logoSix from  "../assets/images/logo_six.png"

import SideMenu from "../components/SideMenu";
import { useState } from "react";

const HomePage = () => {
    const [sideBarToggle, setSideBarToggle] = useState(false);

    return (
        <div className="h-screen">
            <SideMenu sideBarToggle={sideBarToggle} setSideBarToggle={setSideBarToggle}/>
            <Header sideBarToggle={sideBarToggle} setSideBarToggle={setSideBarToggle}/>
            <div className='w-full h-screen flex flex-col md:flex-row md:h-2/5 lg:h-4/5'>
                <div className="w-full h-1/2 md:w-1/2 md:h-full">
                    {/* Use different image sources based on screen size */}
                    <img src={lgHomeImage} alt="home" className="w-full hidden md:flex md:h-full" />
                    <img src={smHomeImage} alt="home" className="w-full h-full flex md:hidden" />
                </div>
                <div className="w-full h-1/2 md:h-full md:w-1/2 lg:screen flex flex-col justify-center items-start pl-6 text-white bg-neutral-dark-blue">
                    <p className="font-poppins text-4xl text-start md:text-5xl lg:text-7xl">
                        Bring the<br />
                        warmth
                    </p>
                    <p className="font-inter font-inter-regular py-4 text-base text-start md:text-sm lg:text-xl">
                        Everyone needs a good winter jacket<br/> 
                        Find yours with our collection and more
                    </p>
                    <div className="flex justify-start items-start">
                        <button className="text-neutral-07 font-inter inter-medium text-base w-36 h-10 bg-myBlue rounded-sm my-4">Shopping Now</button>
                    </div>
                </div>
            </div>
            <div className="py-3 font-inter inter-semibold">
                <div className="flex justify-center items-center text-xl">
                    <p>Trending Brands</p>
                </div>
                <div className="flex justify-center overflow-x-auto">
                    <img src={logoOne} alt="logo one" className="mx-2" />
                    <img src={logoTwo} alt="logo two" className="mx-2" />
                    <img src={logoThree} alt="logo three" className="mx-2" />
                    <img src={logoFour} alt="logo four" className="mx-2" />
                    <img src={logoFive} alt="logo five" className="mx-2" />
                    <img src={logoSix} alt="logo six" className="mx-2" />
                </div>
                <ProductCard/>
            </div>
        </div>
    )
}

export default HomePage;
