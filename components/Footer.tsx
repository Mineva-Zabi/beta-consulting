import React from 'react';
import { useLanguage } from '../i18n';

const Footer: React.FC = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  const { t } = useLanguage();

  return (
    <footer id="contacts" className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <img src="/assets/logo.svg" alt="Beta" />
        </div>

        <button
          className="footer__top"
          onClick={scrollToTop}
          type="button"
          aria-label={t.footer.backToTopLabel}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M12 5l6.5 6.5-1.4 1.4L13 8.8V19h-2V8.8l-4.1 4.1-1.4-1.4L12 5z"
              fill="currentColor"
            />
          </svg>
        </button>

        <div className="footer__right">
          <nav className="footer__links" aria-label={t.footer.navLabel}>
            <a href="#about">{t.footer.links.about}</a>
            <a href="#mission">{t.footer.links.mission}</a>
            <a href="#services">{t.footer.links.services}</a>
            <a href="#team">{t.footer.links.team}</a>
          </nav>

          <div className="footer__contact">
            <a
              className="footer__cta"
              href="https://mail.google.com/mail/?view=cm&fs=1&to=aerc.beta@gmail.com&su=Inquiry%20from%20Website"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.footer.cta}
            </a>
            <a className="footer__phone" href="tel:+77057549138">
              +7 (705) 754-91-38
            </a>
            <a
              className="footer__email"
              href="https://mail.google.com/mail/?view=cm&fs=1&to=aerc.beta@gmail.com&su=Inquiry%20from%20Website"
              target="_blank"
              rel="noopener noreferrer"
            >
              aerc.beta@gmail.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
