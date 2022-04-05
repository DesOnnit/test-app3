import React, { useState, useEffect } from 'react'
import { slaider } from '../../utils/constants'
import './Header.css'
export default function Header() {
    const [counter, setCounter] = useState(1)
    let counterLogic = () => counter === slaider.length+1 ? setCounter(1) : setCounter(counter) || counter === 0 ? setCounter(slaider.length) : setCounter(counter)
    
    useEffect(() => {
        counterLogic()
    }, [counter])

    return (
        <div className='header'>
            <div className='header__container'>
                {slaider.slice(`${counter - 1}`, `${counter}`).map((card) => (
                    <div className='header__info'>
                        <h1 className='header__info__title'>{card.title}</h1>
                        <p className='header__info__subtitle'>{card.subtitle}</p>
                    </div>
                ))}
                <div className='header__links'>
                    <div className='header__counter'>
                        <button className='header__counter__button' onClick={() => setCounter(counter - 1)}>&#8592;</button>
                        <span>0{counter}/0{slaider.length}</span>
                        <button className='header__counter__button' onClick={() => setCounter(counter + 1)}>&#8594;</button>
                    </div>
                    <a href="*" className='header__links__about'>Подробнее<span className='header__links__about_arrow'/></a>
                </div>
            </div>
        </div>
    )
}