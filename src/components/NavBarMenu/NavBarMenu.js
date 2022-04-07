import './NavBarMenu.css'
export default function NavBarMenu(props){
    return(
        <>
        <a href={props.link.src} className='navbar-menu__link'>{props.link.title}<span className='navbar-menu__link_dot'/></a>
        </>
    )
}