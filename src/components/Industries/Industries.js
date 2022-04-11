import React, { useState, useEffect } from 'react';
import { industry } from '../../utils/constants'
import IndustriesCard from '../IndustriesCard/IndustriesCard';
import './Industries.css';
export default function Industries() {
    const [activeIndex, setActiveIndex] = useState(1);

    function doNextSlide() {
        setActiveIndex((current) => {
            // Вычисляем индекс следующего слайда, который должен вывестись 
            const res = current === industry.length - 0 ? 1 : current + 1;
            return res
        })
    }

    function doPrevSlide() {
        setActiveIndex((current) => {
            // Вычисляем индекс следующего слайда, который должен вывестись 
            const res = current === 1 ? industry.length - 0 : current - 1;
            return res
        })

    }

    useEffect(() => {
        // Запускаем интервал 
        setInterval(() => {
            doNextSlide();
        }, 4000)
        // Выключаем интервал 
        return () => clearInterval()
    }, [])

    return (
        <div className="industries" id="industries">
            <p className="industries__title">ОТРАСЛИ<span className="industries__title_arrow" /></p>
            <div className="industries_container">
                <div className="industries_container_dextop">
                    {industry.map((card) => (
                        <IndustriesCard
                            key={card.id}
                            card={card} />
                    ))}
                </div>
                <div className="industries_container_mobile">
                    {industry.slice(`${activeIndex - 1}`, `${activeIndex}`).map((card) => (
                        <IndustriesCard
                            key={card.id}
                            card={card} />
                    ))}
                    <div className="industries__links">
                        <button className='industries__link' onClick={doPrevSlide}>&#8592;</button>
                        <button className='industries__link' onClick={doNextSlide}>&#8594;</button>
                    </div>
                </div>
            </div>
        </div>
    )
}