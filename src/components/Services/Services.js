import { services_card } from '../../utils/constants'
import ServicesCard from '../ServicesCard/ServicesCard'
import './Services.css'
export default function Services() {
    return (
        <div className='services' id="services">
            <p className='services__title'>НАШИ УСЛУГИ<span className='services__arrow' /></p>
            <div className='services__container'>
                {services_card.map((card) => (
                    <ServicesCard
                        key={card.id}
                        card={card}
                    />
                ))}
            </div>
            <a href="#services" className='services__link'>Все услуги<span className='services__arrow services__arrow_mini' /></a>
        </div>
    )
} 