import React, { useState }from 'react';
import NavBarMenu from '../NavBarMenu/NavBarMenu'
import './NavBarPopup.css';
export default function NavBarPopup(props) {
    const [active,setActive] = useState('');

    function closePopup(e){
        props.close();
        setActive('active')
    }
    return (
        <div className={props.isOpen ? "navbar-popup" : `navbar-popup_close ${active}`}  onClick={(e)=>closePopup(e)}>
            <div className="navbar-popup__container">
                {props.navLinks.map((link) => (
                    <NavBarMenu
                        key={link.id}
                        isOpen={props.isOpen}
                        link={link} />
                ))}
            </div>
        </div>
    )
}
