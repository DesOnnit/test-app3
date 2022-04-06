import React, { useEffect, useState } from 'react';
import { team_info, team_slaider } from '../../utils/constants'
import './Team.css';
export default function Team() {
    const [counter, setCounter] = useState(1);
    let counterLogic = () => counter === team_slaider.length + 1 ? setCounter(1) : setCounter(counter) || counter === 0 ? setCounter(team_slaider.length) : setCounter(counter)

    useEffect(() => {
        counterLogic()
        setTimeout(() => setCounter(counter + 1), 3000)
    }, [counter])

    return (
        <div className="team">
            <p className="team__title">О КОМАНДЕ<span className="team__title_arrow" /></p>
            <div className="team__container">
                <div className="team__info">
                    <p className="team__info__title">{team_info.title}<span className="team__info__title_span">{team_info.span}</span></p>
                    {team_info.paragraph.map((text) => (
                        <p className="team__info__paragraph">{text}</p>
                    ))}
                </div>
                <div className="team__slaider">
                    {team_slaider.slice(`${counter - 1}`, `${counter}`).map((card) => (
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