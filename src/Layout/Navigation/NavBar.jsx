import { useState } from 'react'
import { NavLink } from 'react-router-dom'

/** Icons **/
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faX } from "@fortawesome/free-solid-svg-icons"

const NavBar = () => {
    //state for toggeling dropdown
    const [dropDown, setDropDown] = useState(false);

    return (
        <div className="sticky top-0 left-0 right-0">
            <nav className="w-full bg-slate-200">
                <div className="justify-between px-4 mx-auto xl:max-w-screen-xl md:items-center md:flex md:px-8">
                    <div>
                        <div className="flex items-center justify-between py-5 md:block">
                            <NavLink to="/">
                                <h2 className="text-2xl font-bold">LOGO</h2>
                            </NavLink>
       
                            {/* shows dropdown menu in screens smaller than medium*/}
                            <div className="md:hidden">
                                {/* toggeling dropdown icon and close icon */}
                                <button
                                    className="text-gray-600"
                                    onClick={() => setDropDown(!dropDown)}
                                >
                                    {!dropDown ? (
                                        <FontAwesomeIcon icon={faBars} className="text-[1.4rem]"/>
                                    ) : (
                                        <FontAwesomeIcon icon={faX} className="text-[1.35rem]"  />
                                    )}
                                </button>
                            </div>
                        </div>  
                    </div>
                    <div>
                        {/* toggeling dropdown when clicking on icon in small screens */}
                        <div className={`flex-1 justify-self-center pb-3 mt-5 pb-5 md:block md:pb-0 md:mt-0 ${
                                dropDown ? "block" : "hidden"
                            }`}
                        >
                            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                                <li className="text-gray-600 hover:text-green-400">
                                    <NavLink 
                                        to="/"
                                        className={({ isActive }) =>
                                            isActive ? "font-medium" : ""
                                        }
                                    >
                                        Home
                                    </NavLink>
                                </li>
                                <li className="text-gray-600 hover:text-green-400">
                                    <NavLink 
                                        to="/products"
                                        className={({ isActive }) =>
                                            isActive ? "font-medium" : ""
                                        }
                                    >
                                        Products
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar