import React from "react";
import { useLanguage } from "../i18n";

const Mission: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="mission">
      <div className="container">
        <div id="mission" className="mission__card">
          <div className="mission__content">
            <h2 className="section-title section-title--light">
              {t.mission.title}
            </h2>
            <p className="mission__text">{t.mission.text}</p>
          </div>

          <div className="mission__visual">
            <img src="/assets/mission-chart.png" alt={t.mission.imageAlt} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
