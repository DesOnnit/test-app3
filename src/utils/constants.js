import Vector1 from './img/Vector1.svg';
import Vector2 from './img/Vector2.svg';
import Vector3 from './img/Vector3.svg';
import Vector4 from './img/Vector4.svg';
import Vector5 from './img/Vector5.svg';
import Vector6 from './img/Vector6.svg';
import Team_Slaider1 from './img/Team_Slaider1.svg';
import Team_Slaider2 from './img/Team_Slaider2.svg';
import Team_Slaider3 from './img/Team_Slaider3.svg';
import Team_Slaider4 from './img/Team_Slaider4.svg';
import Industry1 from './img/Industry1.svg';
import Industry2 from './img/Industry2.svg';
import Industry3 from './img/Industry3.svg';
import Industry4 from './img/Industry4.svg';
import Industry5 from './img/Industry5.svg';
import Industry6 from './img/Industry6.svg';
import Industry7 from './img/Industry7.svg';
import Industry8 from './img/Industry8.svg';
import Industry9 from './img/Industry9.svg';
import Rectangle from './img/Rectangle.svg'
export const navLinks = [
    { id: Math.random(), title: 'Главная', src: '#navbar' },
    { id: Math.random(), title: 'Услуги', src: '#services' },
    { id: Math.random(), title: 'Проекты', src: '#our-projects' },
    { id: Math.random(), title: 'Отрасли', src: '#industries' },
    { id: Math.random(), title: 'О команде', src: '#team' },
    { id: Math.random(), title: 'Карта технологий', src: '#technology-map' },
    { id: Math.random(), title: 'Контакты', src: '#contacts' }
];
export const slider = [
    { id: Math.random(), title: 'ПОМОГАЕМ ВАШЕМУ БИЗНЕСУ', subtitle: 'Выделенная команда разработчиков Effective Technologies – новый сервис для реализации Ваших проектов и масштабирования разработки' },
    { id: Math.random(), title: 'ПОМОГАЕМ ВАШЕМУ БИЗНЕСУ 1', subtitle: 'Выделенная команда разработчиков Effective Technologies – новый сервис для реализации Ваших проектов и масштабирования разработки' },
    { id: Math.random(), title: 'ПОМОГАЕМ ВАШЕМУ БИЗНЕСУ 2', subtitle: 'Выделенная команда разработчиков Effective Technologies – новый сервис для реализации Ваших проектов и масштабирования разработки' },
    { id: Math.random(), title: 'ПОМОГАЕМ ВАШЕМУ БИЗНЕСУ 3', subtitle: 'Выделенная команда разработчиков Effective Technologies – новый сервис для реализации Ваших проектов и масштабирования разработки' },
    { id: Math.random(), title: 'ПОМОГАЕМ ВАШЕМУ БИЗНЕСУ 4', subtitle: 'Выделенная команда разработчиков Effective Technologies – новый сервис для реализации Ваших проектов и масштабирования разработки' },
]
export const services_card = [
    { id: Math.random(), title: 'Свои решения', subtitle: 'Применение собственной библиотеки решений, позволяющей сократить трудозатраты на реализацию стандартных компонентов', src: Vector1 },
    { id: Math.random(), title: 'UX/UI дизайн', subtitle: 'Применение комплексного подхода для создания простого и комфортного взаимодействия пользователя с интерфейсом', src: Vector2 },
    { id: Math.random(), title: 'SOA', subtitle: 'Применение сервисно-ориентированной архитектуры (SOA) при построении информационных систем', src: Vector3 },
    { id: Math.random(), title: 'Прототипирование и моделирование', subtitle: 'Применение динамического прототипирования интерфейсов и современных нотаций моделирования бизнес-процессов', src: Vector4 },
    { id: Math.random(), title: 'AGILE методология', subtitle: 'Применение гибких методологий разработки с поставкой заказчику предсказуемого результата на каждой итерации (SCRUM, Kanban)', src: Vector5 },
    { id: Math.random(), title: 'Автоматизация', subtitle: 'Применение в проектах практики Continuous Integration, позволяющей автоматизированно публиковать релизы в любое время, в совокупности с автоматизированным тестированием', src: Vector6 },
]
export const team_info = {
    title: 'DAIMAX.TEAM – ',
    span: 'КОМАНДА ПРОГРАММИСТОВ ДЛЯ ВАШЕГО БИЗНЕСА',
    paragraph: ['Компания по разработке программного обеспечения полного цикла с более чем 20 летним опытом. Мы разрабатываем высоконагруженные системы электронной коммерции, электронные торговые площадки, системы автоматизации закупочных процессов, информационно-аналитические системы. Наши решения мы создаем на передовых WEB-технологиях, в том числе, применяя собственную BPM-платформу.',
        'В нашем штате трудятся более 200 высококвалифицированных специалистов. Мы постоянно обучаем наших сотрудников и входим в число лучших работодателей региона. Офисы расположены в Москве, Тюмень, Казань, Екатеринбург, Дубаи.',
        'Кроме модели Team as a Service, вы можете заказать разработку программного обеспечения по классической outsourcing модели, с фиксированной стоимостью и нашей ответственностью за качество готового продукта и соблюдение сроков разработки.'
    ]
}
export const team_slider = [
    { id: Math.random(), title: 'СОСТАВ КОМАНДЫ', subtitle: 'ПРОГРАММИСТЫ', paragraph: 'Главная боевая единица, обычно в составе команды 2-5 программистов, в зависимости от проектов и используемых технологий.', src: Team_Slaider1 },
    { id: Math.random(), title: 'СОСТАВ КОМАНДЫ', subtitle: 'ТЕСТИРОВЩИКИ', paragraph: 'Указывают программистам на их ошибки. Обычно в команде на трех программистов один тестировщик.', src: Team_Slaider2 },
    { id: Math.random(), title: 'СОСТАВ КОМАНДЫ', subtitle: 'АНАЛИТИК', paragraph: 'Аналитик работает с бизнес-требованиями и готовит техническую документацию для разработчиков.', src: Team_Slaider3 },
    { id: Math.random(), title: 'СОСТАВ КОМАНДЫ', subtitle: 'DEVOPS-ИНЖЕНЕР', paragraph: 'Сочетает в себе навыки и умения системного администратора и программиста.', src: Team_Slaider4 },
]
export const technology_map = [
    { id: Math.random(), title: 'FRONTEND', subtitle: 'Angular, React, Backbone, Dojo, HTML5, Bootstrap, JQuery, JavaFx' },
    { id: Math.random(), title: 'BACKEND', subtitle: 'PHP (ZEND 1-2-3, YII 1-2, Symfony), C# .NET (.NET Core), Go, Python (Django), Java, Node.js' },
    { id: Math.random(), title: 'DB', subtitle: 'PostgreSQL, Oracle, MySQL, MS SQL, Firebird, NoSQL: MongoDB, Redis, Hadoop' },
    { id: Math.random(), title: 'DEVOPS', subtitle: 'Docker, Kubernetes, Jenkins, Ansible' },
    { id: Math.random(), title: 'OS', subtitle: 'CentOS, Debian, Ubuntu, FreeBSD, SUSE, Astra Linux, Роса, Windows' },
    { id: Math.random(), title: 'WEB SERVER', subtitle: 'Nginx, PHP-FPM, IIS, Apache' },
    { id: Math.random(), title: 'SEARCH', subtitle: 'Sphinx, Elasticsearch' },
    { id: Math.random(), title: 'CACHE', subtitle: 'XCache, Memcached' },
    { id: Math.random(), title: 'QUEUE', subtitle: 'RabbitMQ, ZeroMQ' },
    { id: Math.random(), title: 'VERSION CONTROL SYSTEM', subtitle: 'Angular, React, Backbone, Dojo, HTML5, Bootstrap, JQuery, JavaFx' },
    { id: Math.random(), title: 'DESKTOP & INTEGRATION', subtitle: 'C/C++, Perl, Go, Python, Java' },
    { id: Math.random(), title: 'MOBILE', subtitle: 'Objective-C, Java' },
]
export const contacts = [
    { id: Math.random(), title: 'МОСКВА', telephone: '+7(495) 182-25-82', email: 'info@daimax.team', adress: 'Дмитровское шоссе 100 к 2, офис 2212 (Бизнес центр Норд Хаус)' },
    { id: Math.random(), title: 'МОСКВА', telephone: '+7(495) 182-25-82', email: 'info@daimax.team', adress: 'Дмитровское шоссе 100 к 2, офис 2212 (Бизнес центр Норд Хаус)' },
    { id: Math.random(), title: 'МОСКВА', telephone: '+7(495) 182-25-82', email: 'info@daimax.team', adress: 'Дмитровское шоссе 100 к 2, офис 2212 (Бизнес центр Норд Хаус)' },
    { id: Math.random(), title: 'МОСКВА', telephone: '+7(495) 182-25-82', email: 'info@daimax.team', adress: 'Дмитровское шоссе 100 к 2, офис 2212 (Бизнес центр Норд Хаус)' },
    { id: Math.random(), title: 'МОСКВА', telephone: '+7(495) 182-25-82', email: 'info@daimax.team', adress: 'Дмитровское шоссе 100 к 2, офис 2212 (Бизнес центр Норд Хаус)' },
]
export const industry = [
    { id: Math.random(), title: 'Промышленость', src: Industry1 },
    { id: Math.random(), title: 'Гос.сектор', src: Industry2 },
    { id: Math.random(), title: 'IT / Телеком', src: Industry3 },
    { id: Math.random(), title: 'Автомобилестроение', src: Industry4 },
    { id: Math.random(), title: 'Логистика', src: Industry5 },
    { id: Math.random(), title: 'Медицина', src: Industry6 },
    { id: Math.random(), title: 'Образование', src: Industry7 },
    { id: Math.random(), title: 'Стартап', src: Industry8 },
    { id: Math.random(), title: 'Retail', src: Industry9 },
]
export const projects = [{
    id: Math.random(),
    name: "Название кейса 1",
    img: Rectangle,
    index: 1
}, {
    id: Math.random(),
    name: "Название кейса 2",
    img: Rectangle,
    index: 2
}, {
    id: Math.random(),
    name: "Название кейса 3",
    img: Rectangle,
    index: 3
},
{
    id: Math.random(),
    name: "Название кейса 4",
    img: Rectangle,
    index: 3
}]