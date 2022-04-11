import React, { useState, useEffect } from 'react';
import { projects } from '../../utils/constants';
import OurProjectsCard from '../OurProjectsCard/OurProjectsCard';
import './OurProjects.css';

export default function OurProjects() {
    const [activeIndex, setActiveIndex] = useState(1);

    function doNextSlide() {
        setActiveIndex((current) => {
            // Вычисляем индекс следующего слайда, который должен вывестись 
            const res = current === projects.length - 0 ? 1 : current + 1;
            return res
        })
    }

    function doPrevSlide() {
        setActiveIndex((current) => {
            // Вычисляем индекс следующего слайда, который должен вывестись 
            const res = current === 1 ? projects.length - 0 : current - 1;
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
        <div className="our-projects" id="our-projects">
            <p className='our-projects__title'>НАШИ ПРОЕКТЫ<span className='services__arrow' /></p>
            <div className='our-projects__container'>
                <div className='our-projects__container_dextop'>
                    {projects.slice(0, 3).map((card) =>
                        <OurProjectsCard
                            key={card.id}
                            card={card} />
                    )}
                </div>
                <div className='our-projects__container_mobile'>
                    <button className='our-projects__button' onClick={doPrevSlide}>&#8592;</button>
                    {projects.slice(`${activeIndex - 1}`, `${activeIndex}`).map((card) =>
                        <OurProjectsCard
                            key={card.id}
                            card={card} />
                    )}
                    <button className='our-projects__button' onClick={doNextSlide}>&#8594;</button>
                </div>
                <a href="#our-projects" className='our-projects__link'>Все проекты<span className='our-projects__arrow our-projects__arrow_mini' /></a>
            </div>
        </div>
    )
}