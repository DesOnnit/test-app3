import Logo from '../../utils/img/logo.svg'
import { navLinks } from '../../utils/constants'
import './NavBar.css'
export default function NavBar(props) {
    return (
        <div className="navbar">
            <img src={Logo} alt='Логотип' className='navbar__logo' />
            <div className={props.hiden? 'navbar__container':'navbar__container_hiden'}>         
                {navLinks.map((link) => (
                    <a href={link.src} className='navbar__link'>{link.title}<span className='navbar__link_dot'/></a>
                ))}
            </div>
            <button className={!props.hiden? 'navbar__burger':'navbar__burger_hiden'}/>
            <button className='navbar__button'>ОБСУДИТЬ ВАШ ПРОЕКТ</button>
        </div>
    )
}