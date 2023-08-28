const NavBar = () => {

    return (
        <div className="sticky top-0 left-0 right-0">
        <nav className="w-full bg-slate-200">
            <div className="justify-between px-4 mx-auto xl:max-w-screen-xl md:items-center md:flex md:px-8">
                <div>
                    <div className="flex items-center justify-between py-5 md:block">
                        <a href="">
                            <h2 className="text-2xl font-bold">LOGO</h2>
                        </a>
                        <div className="md:hidden">
                            <p>Ikon</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                            <li className="text-gray-600 hover:text-green-400">
                                <a href="">Home</a>
                            </li>
                            <li className="text-gray-600 hover:text-green-400">
                                <a href="">Products</a>
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