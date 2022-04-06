import { technology_map } from '../../utils/constants'
import './TechnologyMap.css';
export default function TechnologyMap() {
    return (
        <div className="technology-map">
            <p className="technology-map__title">КАРТА ТЕХНОЛОГИЙ<span className="technology-map__title_arrow" /></p>
            <div className="technology-map__container">
                {technology_map.map((card) => (
                    <div className="technology-map__info">
                        <p className="technology-map__info__title">{card.title}</p>
                        <p className="technology-map__info__subtitle">{card.subtitle}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}