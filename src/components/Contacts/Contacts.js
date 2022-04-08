import { contacts } from '../../utils/constants'
import './Contacts.css';
export default function Contacts() {
    return (
        <div className="contacts">
            <p className="contacts__title">КОНТАКТЫ<span className="contacts__title_arrow" /></p>
            <div className="contacts__container">
                {contacts.map((card) => (
                    <div className="contacts__info">
                        <p className="contacts__info__title">{card.title}</p>
                        <p className="contacts__info__subtitle">{card.telephone}</p>
                        <p className="contacts__info__subtitle">{card.email}</p>
                        <p className="contacts__info__subtitle">{card.adress}</p>
                    </div>
                ))}
            </div>
            <p className="contacts__copyright">ООО «Команда Даймакс»</p>
        </div>
    )
}