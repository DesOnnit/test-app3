import './NavBarMenu.css'
export default function NavBarMenu(props){
    return(
        <>
        <a href={props.link.src} className={!props.isOpen? 'navbar-menu__link':'navbar-menu__link open'}>{props.link.title}<span className='navbar-menu__link_dot'/></a>
        </>
    )
}