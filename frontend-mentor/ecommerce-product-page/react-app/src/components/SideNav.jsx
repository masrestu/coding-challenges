import { useToggle } from "../hooks/useToggle"

export default function SideNav() {
    const { handleClose } = useToggle()

    return <div className="side-nav">
        <button className="overlay-close" type="button" onClick={handleClose}>
            <img src="images/icon-close.svg" alt="" />
        </button>
        <ul role="navigation" className="nav">
            <li><a href="#">Men</a></li>
            <li><a href="#">Collection</a></li>
            <li><a href="#">Women</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </div>
}