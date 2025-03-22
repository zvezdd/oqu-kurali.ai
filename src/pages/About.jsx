import React from 'react'
import './About.css'
import pfp from '../public/pfp.jpg'

const About = () => {
    return (
      <div className="about-container">
        <div className="about-card">
          <img
            src={pfp}
            alt="Author Profile"
            className="profile-pic"
          />
          <h1 className="author-name">Ibrahim Mukan</h1>
          <p className="author-instagram">@zvezd_d, Компанияның Бас директоры және негізін қалаушысы</p>
  
          <p className="app-description">
          Мен бұл "Оқу құралы" қосымшасының қазақ тілін дамытудағы рөліне зор сенім артамын. Ол еліміздің жас ұрпағына, атап айтқанда оқушыларға, ана тілімізде еркін сөйлеуге, жазуға және ойлауға жол ашады. Қазіргі заманғы технологияларды тиімді пайдалану арқылы әзірленген бұл қосымша, қазақ тілін қолдану аясын кеңейтіп, оны күнделікті өмірде белсенді түрде қолдануға мүмкіндік береді деп ойлаймын. Тілдің тазалығы мен байлығын сақтай отырып, оқушылардың сөздік қорын молайтуға, грамматикалық білімдерін жетілдіруге және тіл мәдениетін арттыруға септігін тигізетіні сөзсіз. Сонымен қатар, бұл қосымша, қазақ тіліне деген сүйіспеншілікті оятып, ұлттық сана-сезімді қалыптастыруда да маңызды рөл атқарады деген үміттемін.          </p>
  
          <a
            href="https://instagram.com/zvezd_d"
            target="_blank"
            rel="noopener noreferrer"
            className="instagram-link"
          >
            Follow me on Instagram
          </a>
        </div>
      </div>
    );
  };
  
export default About