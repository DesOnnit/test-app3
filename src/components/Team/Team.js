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
//инициализируем переменные для начала ведения отсчета для перелистывания
let x1 = null;
let y1 = null;


//функция записывающая начало свайпа по координатам x и y
function handleTouchStart(e) {
    x1 = e.touches[0].clientX;
    y1 = e.touches[0].clientY;
}

function handleTouchMove(e) {
    if (!x1 || !y1) {
        // если не существует начала свайпа, выходим из функци
        return false;
    }

    //каждый раз инициализируется переменная записывающая текущие координаты свайпа
    let x2 = e.touches[0].clientX;
    let y2 = e.touches[0].clientY;


    // записываем разницу в координатах
    let xDifference = x2 - x1;
    let yDifference = y2 - y1

    if (Math.abs(xDifference) > Math.abs(yDifference)) {
        //ветка выполняется, когда свайп идет влево или вправо
        if (xDifference > 0) {
            doPrevSlide();
        } else {
            doNextSlide();
        }
    } else {
        //ветка выполняется, когда свайп идет наверх или вниз
        if (yDifference > 0) {
            //doing something when swipe top
            return false
        } else {
            //doing something when swipe bottom
            return false
        }
    }
    x1 = null;
    y1 = null;
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
        <div className="team" id="team">
            <p className="team__title">О КОМАНДЕ<span className="team__title_arrow" /></p>
            <div className="team__container">
                <div className="team__info">
                    <p className="team__info__title">{team_info.title}<span className="team__info__title_span">{team_info.span}</span></p>
                    {team_info.paragraph.map((text) => (
                        <p className="team__info__paragraph">{text}</p>
                    ))}
                </div>
                <div className="team__slaider" onTouchStart={(e) => handleTouchStart(e)} onTouchMove={(e) => handleTouchMove(e)}>
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