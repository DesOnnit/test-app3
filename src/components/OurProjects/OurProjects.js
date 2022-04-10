import { projects } from '../../utils/constants';
import OurProjectsCard from '../OurProjectsCard/OurProjectsCard';
import './OurProjects.css';

export default function OurProjects() {
    return (
        <div className="our-projects" id="our-projects">
            <p className='our-projects__title'>НАШИ ПРОЕКТЫ<span className='services__arrow' /></p>
            <div className='our-projects__container'>
                {projects.map((card) =>
                    <OurProjectsCard
                        card={card} />
                )}
                <a href="#our-projects" className='our-projects__link'>Все проекты<span className='our-projects__arrow our-projects__arrow_mini' /></a>
            </div>
        </div>
    )
}