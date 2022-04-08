import NavBarMenu from '../NavBarMenu/NavBarMenu'
import './NavBarPopup.css';
export default function NavBarPopup(props) {
    return (
        <div className={props.isOpen ? "navbar-popup" : "navbar-popup_hiden"} onClick={props.close}>
            <div className="navbar-popup__container">
            {props.navLinks.map((link) => (
                <NavBarMenu
                isOpen={props.isOpen}
                link={link} />
            ))}
            </div>
        </div>
    )
}