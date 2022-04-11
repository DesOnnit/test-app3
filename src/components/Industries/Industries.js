import React, { useState, useEffect } from 'react';
import { industry } from '../../utils/constants'
import IndustriesCard from '../IndustriesCard/IndustriesCard';
import './Industries.css';
export default function Industries() {
    const [activeIndex, setActiveIndex] = useState(1);

    function doNextSlide() {
        setActiveIndex((current) => {
            // Вычисляем индекс следующего слайда, который должен вывестись 
            const res = current === industry.length? 1 : current + 1;
            return res
        })
    }

    function doPrevSlide() {
        setActiveIndex((current) => {
            // Вычисляем индекс следующего слайда, который должен вывестись 
            const res = current === 1 ? industry.length : current - 1;
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
                <div className="industries_container_mobile" onTouchStart={(e) => handleTouchStart(e)} onTouchMove={(e) => handleTouchMove(e)}>
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