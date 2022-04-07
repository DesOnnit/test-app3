import Logo from '../../utils/img/logo.svg'
import { navLinks } from '../../utils/constants'
import NavBarMenu from '../NavBarMenu/NavBarMenu'
import NavBarPopup from '../NavBarPopup/NavBarPopup'
import './NavBar.css'
export default function NavBar(props) {
    return (
        <div className="navbar">
            <img src={Logo} alt='Логотип' className='navbar__logo' />
            <div className={props.hiden? 'navbar__container':'navbar__container_hiden'}>         
                {navLinks.map((link) => (
                    <NavBarMenu
                    link={link}/>
                ))}
            </div>
            <button className={!props.hiden? 'navbar__burger':'navbar__burger_hiden'} onClick={props.open}/>
            <NavBarPopup
            navLinks={navLinks}
            isOpen={props.isOpen}/>
        </div>
    )
}
