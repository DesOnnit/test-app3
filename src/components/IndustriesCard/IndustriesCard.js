import './IndustriesCard.css';
export default function IndustriesCard(props) {
    return (
        <div className="industry-card">
            <div className="industry-card__container">
                <div className="industry-card__transform">
                    <div className="industry-card_front">
                        <img src={props.card.src} alt={props.card.title} className="industry-card__img" />
                        <p className="industry-card__title">{props.card.title}</p>
                    </div>
                    <div className="industry-card_back">
                        <img src={props.card.src} alt={props.card.title} className="industry-card__img" />
                        <p className="industry-card__title">{props.card.title}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}