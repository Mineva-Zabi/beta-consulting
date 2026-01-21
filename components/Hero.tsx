import React from 'react';
import { useLanguage } from '../i18n';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="top" className="hero">
      <div className="container hero__content">
        <div className="hero__left">
          <p className="hero__kicker">
            {t.hero.kicker}
          </p>
          <h1 className="hero__title">
            BETA<span className="hero__mark">{'\u00AE'}</span>
          </h1>
          <p className="hero__tagline">{t.hero.tagline}</p>
        </div>

        <div className="hero__right">
          <p className="hero__lead">{t.hero.lead}</p>
        </div>
      </div>

      <div className="hero__decor" aria-hidden="true">
        <img className="hero__ring" src="/assets/hero-wave.png" alt="" />
        <img className="hero__torus" src="/assets/3dimg.svg" alt="" />
        <img
          className="hero__sphere hero__sphere--left"
          src="/assets/sphere.png"
          alt=""
        />
        <img
          className="hero__sphere hero__sphere--right"
          src="/assets/sphere.png"
          alt=""
        />
      </div>
    </section>
  );
};

export default Hero;
