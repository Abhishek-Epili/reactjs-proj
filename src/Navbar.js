import React from "react";
const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg ">
                <div className="container-fluid">
                        <ul className="navbar-nav me-auto ">
                            <li>
                                <a className="nav-link mouseover" href="/" >Home</a>
                            </li>

                            <li>
                                <a className="nav-link mouseover" href="/About">About Us</a>
                            </li>

                            <li>
                                <a className="nav-link mouseover" href="/Contact">Contact Us</a>
                            </li>

                            <li>
                                <a className="nav-link mouseover" href="/Tourism">Tour Guides</a>
                            </li>
                        </ul>
                        <div className="navbar-brand ms auto">Maharashtra tours and Guides</div>
                </div>
            </nav>
        </>
    )
}
export default Navbar;