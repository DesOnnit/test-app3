import React, { useState, useEffect } from 'react';
import { technology_map } from '../../utils/constants'
import './TechnologyMap.css';
export default function TechnologyMap() {
    const [activeIndex, setActiveIndex] = useState(0);

    const [isMouseDown, setIsMouseDown] = useState(false);
  
    const [x3, setX3] = useState(null);
  
    const [y3, setY3] = useState(null);
  
    function doNextSlide(){
      setActiveIndex((current) => {
          // Вычисляем индекс следующего слайда, который должен вывестись
          const res = current === technology_map.length - 1 ? 0 : current+1;
          // Возвращаем индекс
          //console.log(res)
          return res
      })
      //countIndex(1);
    }
  
    function doPrevSlide(){
      setActiveIndex((current) => {
          // Вычисляем индекс следующего слайда, который должен вывестись
          const res = current === 0 ? technology_map.length - 1 : current-1;
          // Возвращаем индекс
          //console.log(res)
          return res
      })
      // countIndex(-1);
    }
  
    // Хук Effect
  useEffect(() => {
      // Запускаем интервал
      const interval = setInterval(() => {
          doNextSlide();
      }, 50000)
      // Выключаем интервал
      return () => clearInterval()
  }, [])
  
  // Вычисляем индекс предыдущего слайда
  const prevImgIndex = activeIndex ? activeIndex - 1 : technology_map.length - 1
  // Вычисляем индекс следующего слайда
  const nextImgIndex = activeIndex === technology_map.length - 1 ? 0 : activeIndex + 1
  
  //инициализируем переменные для начала ведения отсчета для перелистывания
  let x1 = null;
  let y1 = null;
  
  
  //функция записывающая начало свайпа по координатам x и y
  function handleTouchStart(e){
    x1 = e.touches[0].clientX;
    y1 = e.touches[0].clientY;
  }
  
  
  
  
  
  function handleTouchMove(e){
    if(!x1 || !y1){
      // если не существует начала свайпа, выходим из функци
      return false;
    }
  
    //каждый раз инициализируется переменная записывающая текущие координаты свайпа
    let x2 = e.touches[0].clientX;
    let y2 = e.touches[0].clientY;
  
    let xDifference = x2-x1;
    let yDifference = y2-y1
  
    calculateCoordinates(xDifference, yDifference)
    
  }
  
  
  function handleMouseDown(e){
    setIsMouseDown(true);
    setX3(e.pageX);
    setY3(e.pageY);
  }
  
  
  function handleMouseMove(e){
    if(isMouseDown == true){
      let x4 = e.pageX;
      let y4 = e.pageY;
      e.preventDefault();
      if(Math.abs(x4-x3)>80){
        setX3(x4)
        let xDifference = x4-x3;
        let yDifference = y4-y3;
        calculateCoordinates(xDifference, yDifference);
      }else{
        return false;
      }
    }
  }
  
  function handleMouseUp(e){
      setIsMouseDown(false);
  }
  
  function calculateCoordinates(xDiff, yDiff){
    // записываем разницу в координатах
    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      //ветка выполняется, когда свайп идет влево или вправо
        if (xDiff>0) {
          doPrevSlide();
        }else {
          doNextSlide();
        }
      }
    }

    return (
        <div className="technology-map" id="technology-map">
            <p className="technology-map__title">КАРТА ТЕХНОЛОГИЙ<span className="technology-map__title_arrow" /></p>
            <div className="technology-map__container">
                <div className="technology-map_dextop" /* onTouchStart={(e)=>handleTouchStart(e)} onTouchMove={(e)=>handleTouchMove(e)} onMouseDown={(e)=>handleMouseDown(e)} onMouseMove={(e)=>handleMouseMove(e)} onMouseUp={(e)=>handleMouseUp(e)} onMouseLeave={(e)=>handleMouseUp(e)} */>
                    {technology_map/* .slice(`${activeIndex}`, `${activeIndex+2}`) */.map((card) => (
                        <div className="technology-map__info">
                            <p className="technology-map__info__title">{card.title}</p>
                            <p className="technology-map__info__subtitle">{card.subtitle}</p>
                        </div>
                    ))}
                </div>
                <div className="technology-map_mobile" onTouchStart={(e) => handleTouchStart(e)} onTouchMove={(e) => handleTouchMove(e)}>
                    {technology_map.slice(`${activeIndex}`, `${activeIndex+1}`).map((card) => (
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