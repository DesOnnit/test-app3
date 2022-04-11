import React, { useState, useEffect } from 'react';
import { technology_map } from '../../utils/constants'
import './TechnologyMap.css';
export default function TechnologyMap() {
    const [activeIndex, setActiveIndex] = useState(1);

    function doNextSlide() {
        setActiveIndex((current) => {
            // Вычисляем индекс следующего слайда, который должен вывестись 
            const res = current === technology_map.length - 1 ? 1 : current + 1;
            return res
        })
    }

    function doPrevSlide() {
        setActiveIndex((current) => {
            // Вычисляем индекс следующего слайда, который должен вывестись 
            const res = current === 1 ? technology_map.length - 1 : current - 1;
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
        <div className="technology-map" id="technology-map">
            <p className="technology-map__title">КАРТА ТЕХНОЛОГИЙ<span className="technology-map__title_arrow" /></p>
            <div className="technology-map__container">
                <div className="technology-map_dextop">
                    {technology_map.map((card) => (
                        <div className="technology-map__info">
                            <p className="technology-map__info__title">{card.title}</p>
                            <p className="technology-map__info__subtitle">{card.subtitle}</p>
                        </div>
                    ))}
                </div>
                <div className="technology-map_mobile" onTouchStart={(e) => handleTouchStart(e)} onTouchMove={(e) => handleTouchMove(e)}>
                    {technology_map.slice(`${activeIndex - 1}`, `${activeIndex}`).map((card) => (
                        <div className="technology-map__info">
                            <p className="technology-map__info__title">{card.title}</p>
                            <p className="technology-map__info__subtitle">{card.subtitle}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}