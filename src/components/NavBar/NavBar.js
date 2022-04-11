import Logo from '../../utils/img/logo.svg'
import { navLinks } from '../../utils/constants'
import NavBarMenu from '../NavBarMenu/NavBarMenu'
import NavBarPopup from '../NavBarPopup/NavBarPopup'
import './NavBar.css'
export default function NavBar(props) {
    return (
        <div className="navbar" id="navbar">
            <img src={Logo} alt='Логотип' className='navbar__logo' />
            <div className='navbar__container'>         
                {navLinks.map((link) => (
                    <NavBarMenu
                    key={link.id}
                    link={link}/>
                ))}
            </div>
            <button className='navbar__burger' onClick={props.open}/>
            <NavBarPopup
            close={props.close}
            navLinks={navLinks}
            isOpen={props.isOpen}/>
        </div>
    )
}
{/* <button className={!props.hiden? 'navbar__burger':'navbar__burger_hiden'} */}
/* {props.hiden? 'navbar__container':'navbar__container_hiden'} */