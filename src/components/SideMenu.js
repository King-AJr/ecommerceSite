import { CiSearch } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { FaInstagram } from "react-icons/fa";
import { LuYoutube } from "react-icons/lu";
import { LuFacebook } from "react-icons/lu";
import { FaXmark } from "react-icons/fa6";
import { GrFavorite } from "react-icons/gr";
import { Link } from "react-router-dom";


const SideMenu = ({ sideBarToggle, setSideBarToggle }) => {
    const handleToggle = () => {
        setSideBarToggle(!sideBarToggle)
    }
  return (
    <div className={`${sideBarToggle ? " flex " : " hidden "} w-4/5 bg-gray-50 fixed h-full z-10 p-4 flex flex-col justify-between`}>
            <div className="flex flex-col justify-start">
                <div className="flex justify-between">
                    <p className='font-poppins'>3legant</p>
                    <div className="w-2/5 flex justify-end items-center"> {/* Container for right-aligned element */}
                    <FaXmark onClick={handleToggle}/>
                    </div>
                </div>
                <div className="flex items-center rounded border border-neutral-04 bg-white h-10 w-full my-3">
                    <CiSearch className="h-8 w-8 pl-2"/>
                    <input typeof="text" placeholder="Search" className="font-poppins font-light pl-2"/>
                </div>
                    <div className="flex flex-col justify-start">
                        <div className="border-b border-neutral-02 w-full py-3">
                            <Link to='/' className='font-grotesk pr-6 '>Home</Link>
                        </div>
                        <div className="border-b border-neutral-02 w-full py-3">
                            <Link to='/' className='font-grotesk pr-6 '>Shop</Link>
                        </div>
                        <div className="border-b border-neutral-02 w-full py-3">
                            <Link to='/' className='font-grotesk pr-6 '>Product</Link>
                        </div>
                        <div className="border-b border-neutral-02 w-full py-3">
                            <Link to='/' className='font-grotesk pr-6 '>Contact Us</Link>
                        </div>
                </div>
            </div>
            <div className="flex flex-col justify-end">
                <div>
                    <div className="flex justify-between border-b border-neutral-02 w-full py-3">
                        <Link to='/' className='font-grotesk pr-6 '>Cart</Link>
                        <div className="flex">
                            <HiOutlineShoppingBag className="h-6 w-6"/>
                            <div className='h-6 w-6 rounded-full bg-black flex justify-center items-center ml-2'>
                                <p className='text-white'>2</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between border-b border-neutral-02 w-full py-3">
                        <Link to='/' className='font-grotesk pr-6 '>Wishlist</Link>
                        <div className="flex">
                            <GrFavorite className="h-6 w-6"/>
                            <div className='h-6 w-6 rounded-full bg-black flex justify-center items-center ml-2'>
                                <p className='text-white'>2</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center items-center w-full bg-neutral-07 rounded-md h-10">
                        <p className="text-white font-inter inter-regular">Sign in</p>
                    </div>
                    <div className="flex p-3 items-center">
                        <FaInstagram className="pl-2 h-6 w-6" />
                        <LuFacebook className="pl-2 h-6 w-6"/>
                        <LuYoutube className="pl-2 h-10 w-6" />
                    </div>
                </div>
            </div>      
    </div>
  );
};

export default SideMenu;
