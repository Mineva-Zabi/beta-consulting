import React from 'react';
import { useLanguage } from '../i18n';

const Team: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="team" className="team">
      <div className="container team__inner">
        <h2 className="section-title section-title--light">{t.team.title}</h2>
        <p className="team__text">{t.team.text}</p>
        <a
          className="team__button"
          href="https://mail.google.com/mail/?view=cm&fs=1&to=aerc.beta@gmail.com&su=Inquiry%20from%20Website"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t.team.cta}
        </a>
      </div>
    </section>
  );
};

export default Team;
