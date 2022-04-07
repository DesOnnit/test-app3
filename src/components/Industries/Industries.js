import { industry } from '../../utils/constants'
import IndustriesCard from './IndustriesCard/IndustriesCard';
import './Industries.css';
export default function Industries() {
    return (
        <div className="industries">
            <p className="industries__title">ОТРАСЛИ<span className="industries__title_arrow" /></p>
            <div className="industries_container">
                {industry.map((card) => (
                    <IndustriesCard
                        card={card} />
                ))}
            </div>
        </div>
    )
}