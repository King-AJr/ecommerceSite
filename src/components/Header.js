import { Link } from 'react-router-dom';
import { useState } from 'react';

import homeVector from '../assets/images/home_vector.png'
import SideMenu from './SideMenu';
import { CgProfile } from "react-icons/cg";
import { FaXmark } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { FaBars } from 'react-icons/fa';

const Header = ({ sideBarToggle, setSideBarToggle }) => {
    const [viewNotification, setViewNotification] = useState(true);
    const handleToggle = () => {
        setSideBarToggle(!sideBarToggle)
    }

    const handleViewNotification = () => {
        setViewNotification(!viewNotification)
    }

    return(
        <div className='w-full'>
            {/*  notification bar */}
            <div className={`${viewNotification ? " flex " : " hidden "} hidden md:flex font-inter bg-myBlue w-full h-8 items-center px-4`}>
                <div className="w-3/5 flex justify-end items-center"> {/* Container for center-aligned elements */}
                    <img src={homeVector} alt={homeVector} className='h-3'/>
                    <p className='pl-4 text-white font-semibold'>30% off storewide — Limited time! </p>
                </div>
                <div className="w-2/5 flex justify-end items-center"> {/* Container for right-aligned element */}
                <FaXmark onClick={handleViewNotification}/>
                </div>
            </div>
            <div className='flex justify-between px-16 md:flex md:justify-between items-center md:px-32 py-1'>
                <div className='flex justify-center items-center'>
                    <div className='h-4 w-8 pr-1 md:hidden'>
                        <FaBars onClick={handleToggle}/>
                    </div>
                    <p className='font-poppins'>3legant</p>
                </div>
                <div className='hidden md:flex'>
                    <Link to='/' className='font-grotesk pr-6'>Home</Link>
                    <Link to='/' className='font-grotesk pr-6 '>Shop</Link>
                    <Link to='/' className='font-grotesk pr-6 '>Product</Link>
                    <Link to='/' className='font-grotesk pr-6'>Contact Us</Link>
                </div>
                <div className='flex justify-center items-center'>
                    <CiSearch className='hidden md:flex h-6 w-6 mr-2'/>
                    <CgProfile className='hidden md:flex mr-2'/>
                    <HiOutlineShoppingBag className='h-6 w-6 md:h-6 md:w-6 mr-2'/>
                    <div className='h-6 w-6 md:h-6 md:w-6 rounded-full bg-black flex justify-center items-center'>
                        <p className='text-white text-xs'>2</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;