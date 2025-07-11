export default function Navbar() {
    return <nav className="navbar pb-8 flex justify-between border-b-1 border-gray-100">
        <div className="logo-and-menu flex gap-14 items-center h-12.5">
            <a href="/">
                <img src="images/logo.svg" alt="Website Logo" />
            </a>
            <ul className="flex gap-8 text-preset-4 text-gray-500">
                <li><a href="" className="nav-link">Collections</a></li>
                <li><a href="" className="nav-link">Men</a></li>
                <li><a href="" className="nav-link">Women</a></li>
                <li><a href="" className="nav-link">About</a></li>
                <li><a href="" className="nav-link">Contact</a></li>
            </ul>
        </div>
        <div className="cart-and-profile flex items-center gap-12">
            <button type="button">
                <img src="images/icon-cart.svg" alt="" />
            </button>
            <button type="button" className="size-12.5">
                <img src="images/image-avatar.png" alt="" />
            </button>
        </div>
    </nav>
}