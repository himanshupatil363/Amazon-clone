import React, { useEffect, useRef, useState } from 'react'
import {Link} from 'react-router-dom'
import logo from '../assets/icons/logo.png'
import searchIcon from '../assets/icons/searchicon.png'
import location from '../assets/icons/location.png'
import flag from '../assets/icons/India.png'
import cart from '../assets/icons/cart.png'
import hamburger from '../assets/icons/hamburger.png'
import profile from '../assets/icons/profile.png'
const Topbar =() =>{
    return(
            <div className="flex justify-between items-center bg-gray-900 text-white px-4 py-2">
                <span className="px-3"><img className="h-7" src={logo} alt=""/></span>
                <span className="flex justify-center items-end px-2">
                    <img className="p-1" src={location} alt=""/>
                    <span>
                        <p className="text-xs">Hello</p>
                        <p className="font-bold">Select your address</p>
                    </span>
                </span>
                <span className="text-black flex-grow px-3"> 
                    <form className="flex">
                        <select className="rounded-l text-xs p-2 bg-gray-200 border border-gray-400" id="items">
                          <option value="All">All</option>
                        </select>
                        <input className="flex-grow" type="text" name="search"/>
                        <button className="bg-orange-300 p-3 rounded-r">
                            <img className="h-5" src={searchIcon} alt=""/>
                        </button>
                    </form>
                </span>
                <span className="px-3">
                    <img src={flag} alt=""/>
                </span>
                <span className="px-3">
                    <p className="text-xs">Hello, Sign in</p>
                    <p className="font-bold">Account & lists</p>
                </span>
                <span className="px-3">
                    <p className="text-xs">Returns</p>
                    <p className="font-bold">& Order</p>
                </span>
                <span className="flex flex-col px-3">
                    <p className="ml-3 -mb-2 font-bold text-orange-300">1</p>
                    <span className="flex items-end">
                        <img className="mr-2" src={cart} alt=""/>              
                        <p>cart</p>
                    </span>
                </span>
            </div>
    )
}

const Header = () => {
    const [sidebarToggler, setSidebarToggler] = useState(false)
    const categories =["Best seller","Mobiles","Todays deals","Fashion"]
    const data = {
        "Trending":["Best sellers","New Releases","Movers and Shakers"],
        "Digital Content And Devices":["Echo & Alexa","Fire TV","Kindle E-Readers &  eBooks"]
    }
    const side = useRef();
    const key = Object.keys(data);
    return (
        <div className="flex flex-col">
            {sidebarToggler && (
            <div className="absolute h-screen w-screen">
            <div className="flex h-full w-full">
            <div ref={side} className="flex flex-col float-left bg-white">
                <span className="bg-gray-700 flex w-96 pl-8 py-3 items-center"> <img src={profile} alt=""/><p className="font-bold text-xl text-white pl-2">Hello, Sign in</p></span>
                <div className="pl-8 flex flex-col">
                { key.map(header => 
                    <div>
                        <p className="font-bold pt-6">{header}</p>
                        <span>
                            {data[header].map(value=>
                                <p className="pt-3">{value}</p>)
                            }
                        </span>
                    </div>
                )}
                </div>  
                
            </div>
            <div onClick={()=>{setSidebarToggler(false)}} className="flex w-full bg-black opacity-70">
                
            </div>
            </div>
            </div>

            )}
            <Topbar/>
            <div className="flex justify-start bg-gray-700 text-white p-2">
                <button className="flex items-center"  onClick={()=>{setSidebarToggler(true)
                }}  ><img className="w-5 mr-2" src={hamburger} alt=""/><p>All</p></button>
                {categories.map(a=>(<div className="px-3">{a}</div>))}
            </div>
            <div  >hello</div>
        </div>
    )
}
export default Header
