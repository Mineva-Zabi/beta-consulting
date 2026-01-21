import React from 'react';
import { useLanguage } from '../i18n';

const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="about">
      <div className="container about__grid">
        <div className="about__content">
          <h2 className="section-title">{t.about.title}</h2>
          <p className="about__text">{t.about.paragraphs[0]}</p>
          <p className="about__text">{t.about.paragraphs[1]}</p>
        </div>

        <div className="about__visual">
          <img src="/assets/wave.png" alt={t.about.imageAlt} />
        </div>
      </div>
    </section>
  );
};

export default About;
