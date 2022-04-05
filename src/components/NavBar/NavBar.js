
import Logo from '../../utils/img/logo.svg'
import { navLinks } from '../../utils/constants'
import './NavBar.css'
export default function NavBar() {
    return (
        <div className="navbar">
            <img src={Logo} alt='Логотип' className='navbar__logo' />
            <div className='navbar__container'>
                {navLinks.map((link) => (
                    <a href={link.src} className='navbar__link'>{link.title}</a>
                ))}
            </div>
            <button className='navbar__button'>ОБСУДИТЬ ВАШ ПРОЕКТ</button>
        </div>
    )
}