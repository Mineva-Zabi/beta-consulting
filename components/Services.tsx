import React from 'react';
import { ServiceTitle, useLanguage } from '../i18n';

interface ServiceCardProps {
  title: ServiceTitle;
  items: string[];
  buttonLabel: string;
}

const renderTitle = (title: ServiceTitle) => {
  if (Array.isArray(title)) {
    return (
      <>
        {title[0]}
        <br />
        {title[1]}
      </>
    );
  }
  return title;
};

const getTitleString = (title: ServiceTitle): string => {
  if (Array.isArray(title)) {
    return title.join(' ');
  }
  return title;
};

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  items,
  buttonLabel,
}) => {
  const titleString = getTitleString(title);
  const message = `Здравствуйте, меня интересует услуга: ${titleString}`;
  const whatsappUrl = `https://wa.me/77057549138?text=${encodeURIComponent(
    message
  )}`;

  return (
    <article className="service-card">
      <h3 className="service-card__title">{renderTitle(title)}</h3>
      <ul className="service-card__list">
        {items.map((item) => (
          <li key={item} className="service-card__item">
            {item}
          </li>
        ))}
      </ul>
      <a
        className="service-card__button"
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        {buttonLabel}
      </a>
    </article>
  );
};

const Services: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="services">
      <div className="container services__inner">
        <h2 id="services" className="services__title">
          {t.services.title}
        </h2>

        <div className="services__grid">
          {t.services.cards.map((card) => (
            <ServiceCard
              key={card.id}
              title={card.title}
              items={card.items}
              buttonLabel={t.services.button}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
