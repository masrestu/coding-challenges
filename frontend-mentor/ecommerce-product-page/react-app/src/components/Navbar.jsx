import Cart from "./Cart"
import SideNav from "./SideNav"
import ToggleProvider from "./ToggleProvider"
import ToggleOn from "./ToggleOn"
import ToggleButton from "./ToggleButton"

export default function Navbar() {
    return <>
        <nav className="navbar">
            <div className="logo-and-menu">
                <div className="lg:hidden">
                    <ToggleProvider>
                        <ToggleButton>
                            <img src="images/icon-menu.svg" alt="" />
                        </ToggleButton>
                        <ToggleOn>
                            <SideNav />
                        </ToggleOn>
                    </ToggleProvider>
                </div>
                <a href="/">
                    <img src="images/logo.svg" alt="Website Logo" />
                </a>
                <ul>
                    <li><a href="" className="nav-link">Collections</a></li>
                    <li><a href="" className="nav-link">Men</a></li>
                    <li><a href="" className="nav-link">Women</a></li>
                    <li><a href="" className="nav-link">About</a></li>
                    <li><a href="" className="nav-link">Contact</a></li>
                </ul>
            </div>
            <div className="cart-and-profile">
                <Cart />
                <button type="button" className="btn-profile" aria-label="Edit Profile">
                    <img src="images/image-avatar.png" alt="" />
                </button>
            </div>
        </nav>
    </>
}