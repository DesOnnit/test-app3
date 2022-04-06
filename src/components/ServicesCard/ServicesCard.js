import './ServicesCard.css'
export default function ServicesCard({ card }) {
    return (
        <div className='services-card'>
            <img src={card.src} alt={card.title} className='services-card__img' />
            <p className='services-card__title' >{card.title}</p>
            <p className='services-card__subtitle'>{card.subtitle}</p>
        </div>
    )
}