import React from 'react';
import { useLanguage } from '../i18n';
import LanguageSwitcher from './LanguageSwitcher';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { t } = useLanguage();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={`site-header ${isMenuOpen ? 'site-header--open' : ''}`}>
      <div className="container header__inner">
        <a className="logo" href="#top" aria-label="Beta" onClick={closeMenu}>
          <img src="/assets/logo.svg" alt="Beta" />
        </a>

        <button
          className="header__toggle"
          onClick={toggleMenu}
          aria-label={t.header.menuLabel}
          aria-expanded={isMenuOpen}
        >
          <span></span>
          <span></span>
        </button>

        <nav
          className={`header__nav ${isMenuOpen ? 'header__nav--open' : ''}`}
          aria-label={t.header.navLabel}
        >
          <a href="#about" onClick={closeMenu}>
            {t.header.links.about}
          </a>
          <a href="#mission" onClick={closeMenu}>
            {t.header.links.mission}
          </a>
          <a href="#services" onClick={closeMenu}>
            {t.header.links.services}
          </a>
          <a href="#team" onClick={closeMenu}>
            {t.header.links.team}
          </a>
          <a href="#contacts" onClick={closeMenu}>
            {t.header.links.contacts}
          </a>
          <LanguageSwitcher onSelect={closeMenu} />
        </nav>

        <LanguageSwitcher className="header__lang--desktop" />
      </div>
    </header>
  );
};

export default Header;
