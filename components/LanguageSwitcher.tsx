import React from 'react';
import { LANGUAGE_OPTIONS, Language, useLanguage } from '../i18n';

interface LanguageSwitcherProps {
  className?: string;
  onSelect?: () => void;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  className,
  onSelect,
}) => {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = React.useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const handlePointerDown = (event: PointerEvent) => {
      const target = event.target as Node;
      if (containerRef.current && !containerRef.current.contains(target)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('pointerdown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const current = LANGUAGE_OPTIONS.find((option) => option.code === language);
  const ariaLabel = `${t.header.languageLabel}: ${
    current?.name ?? language.toUpperCase()
  }`;

  const handleSelect = (nextLanguage: Language) => {
    setLanguage(nextLanguage);
    setIsOpen(false);
    onSelect?.();
  };

  return (
    <div
      ref={containerRef}
      className={`lang-switcher ${isOpen ? 'lang-switcher--open' : ''} ${className ?? ''}`}
    >
      <button
        className="header__lang lang-switcher__button"
        type="button"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-label={ariaLabel}
        onClick={() => setIsOpen((open) => !open)}
      >
        {current?.label ?? language.toUpperCase()}
      </button>
      <div
        className="lang-switcher__menu"
        role="listbox"
        aria-label={t.header.languageLabel}
      >
        {LANGUAGE_OPTIONS.map((option) => (
          <button
            key={option.code}
            type="button"
            className={`lang-switcher__option ${option.code === language ? 'is-active' : ''}`}
            role="option"
            aria-selected={option.code === language}
            aria-label={option.name}
            onClick={() => handleSelect(option.code)}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSwitcher;
