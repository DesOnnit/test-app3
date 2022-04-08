import './OurProjectsCard.css';
export default function OurProjectsCard(props) {
    return (
        <div className="project-card">
            <img className="project-card__image" src={props.card.img} />
            <p className="project-card__title">{props.card.name}</p>
        </div>
    )
}