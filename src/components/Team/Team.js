import React, { useEffect, useState } from 'react';
import { team_info, team_slider } from '../../utils/constants'
import './Team.css';
export default function Team() {
    const [activeIndex, setActiveIndex] = useState(1);

    function doNextSlide() {
        setActiveIndex((current) => {
            // Вычисляем индекс следующего слайда, который должен вывестись 
            const res = current === team_slider.length - 1 ? 1 : current + 1;
            return res
        })
    }

    function doPrevSlide() {
        setActiveIndex((current) => {
            // Вычисляем индекс следующего слайда, который должен вывестись 
            const res = current === 1 ? team_slider.length - 1 : current - 1;
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
        <div className="team" id="team">
            <p className="team__title">О КОМАНДЕ<span className="team__title_arrow" /></p>
            <div className="team__container">
                <div className="team__info">
                    <p className="team__info__title">{team_info.title}<span className="team__info__title_span">{team_info.span}</span></p>
                    {team_info.paragraph.map((text) => (
                        <p className="team__info__paragraph">{text}</p>
                    ))}
                </div>
                <div className="team__slaider">
                    {team_slider.slice(`${activeIndex - 1}`, `${activeIndex}`).map((card) => (
                        <>
                            <p className="team__slaider__title">{card.title}</p>
                            <img className="team__slaider__img" src={card.src} alt={card.title} />
                            <p className="team__slaider__title">{card.subtitle}</p>
                            <p className="team__slaider__paragraph">{card.paragraph}</p>
                        </>
                    ))}
                </div>
            </div>
        </div>
    )
}