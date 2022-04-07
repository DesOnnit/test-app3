import './IndustriesCard.css';
export default function IndustriesCard(props) {
    return (
        <div className="industry-card">
            <img src={props.card.src} alt={props.card.title} className="industry-card__img" />
            <p className="industry-card__title">{props.card.title}</p>
        </div>
    )
}