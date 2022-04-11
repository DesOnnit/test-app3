import React, { useState, useEffect } from 'react'
import { slider } from '../../utils/constants'
import './Header.css'
export default function Header() {
    const [activeIndex, setActiveIndex] = useState(1);

    function doNextSlide() {
        setActiveIndex((current) => {
            // Вычисляем индекс следующего слайда, который должен вывестись 
            const res = current === slider.length - 1 ? 1 : current + 1;
            return res
        })
    }

    function doPrevSlide() {
        setActiveIndex((current) => {
            // Вычисляем индекс следующего слайда, который должен вывестись 
            const res = current === 1 ? slider.length - 1 : current - 1;
            return res
        })

    }

    useEffect(() => {
        // Запускаем интервал 
        setInterval(() => {
            doNextSlide();
        }, 3000)
        // Выключаем интервал 
        return () => clearInterval()
    }, [])


    return (
        <div className='header' id='header'>
            <div className='header__container'>
                <div className='header__for-links'>
                    {slider.slice(`${activeIndex - 1}`, `${activeIndex}`).map((card) => (
                        <div className='header__info'>
                            <h1 className='header__info__title'>{card.title}</h1>
                            <p className='header__info__subtitle'>{card.subtitle}</p>
                        </div>
                    ))}
                    <div className='header__counter'>
                        <button className='header__counter__button' onClick={doPrevSlide}>&#8592;</button>
                        <span>0{activeIndex}/0{slider.length}</span>
                        <button className='header__counter__button' onClick={doNextSlide}>&#8594;</button>
                    </div>
                    <div className='header__links'>
                        <a href="#navbar" ><button className='header__links__button'>ОБСУДИТЬ ВАШ ПРОЕКТ</button></a>
                        <a href="#navbar" className='header__links__about'>Подробнее<span className='header__links__about_arrow' /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}