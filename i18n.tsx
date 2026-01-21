import React from 'react';

export type Language = 'ru' | 'kz' | 'en';
export type ServiceTitle = string | [string, string];

type ServiceCardCopy = {
  id: 'engineering' | 'science' | 'training';
  title: ServiceTitle;
  items: string[];
};

type Translations = {
  header: {
    menuLabel: string;
    navLabel: string;
    languageLabel: string;
    links: {
      about: string;
      mission: string;
      services: string;
      team: string;
      contacts: string;
    };
  };
  hero: {
    kicker: string;
    tagline: string;
    lead: string;
  };
  about: {
    title: string;
    paragraphs: [string, string];
    imageAlt: string;
  };
  mission: {
    title: string;
    text: string;
    imageAlt: string;
  };
  services: {
    title: string;
    button: string;
    cards: ServiceCardCopy[];
  };
  team: {
    title: string;
    text: string;
    cta: string;
  };
  footer: {
    backToTopLabel: string;
    navLabel: string;
    links: {
      about: string;
      mission: string;
      services: string;
      team: string;
    };
    cta: string;
  };
};

const translations: Record<Language, Translations> = {
  ru: {
    header: {
      menuLabel: 'Меню',
      navLabel: 'Основная навигация',
      languageLabel: 'Выбор языка',
      links: {
        about: 'О нас',
        mission: 'Наша миссия',
        services: 'Услуги',
        team: 'Команда',
        contacts: 'Контакты',
      },
    },
    hero: {
      kicker: 'Технологический консалтинг и решения в области Data Science',
      tagline: 'Transform Data into Power',
      lead: 'Мы помогаем компаниям принимать решения на основе данных, внедрять аналитические и ML-решения и выстраивать устойчивые технологические процессы.',
    },
    about: {
      title: 'О нас',
      paragraphs: [
        'Мы – технологическая консалтинговая компания, специализирующаяся на Data Science, аналитике и разработке технологических решений.',
        'Мы помогаем компаниям использовать данные для принятия управленческих решений, повышения эффективности процессов и внедрения современных аналитических и ML-решений в бизнес-контур.',
      ],
      imageAlt: 'Абстрактная волна',
    },
    mission: {
      title: 'Наша миссия',
      text: 'Наша миссия – помогать компаниям извлекать ценность из данных за счет разработки аналитических и интеллектуальных инструментов, позволяющих принимать обоснованные стратегические и управленческие решения.',
      imageAlt: 'График миссии',
    },
    services: {
      title: 'Услуги',
      button: 'Подробнее',
      cards: [
        {
          id: 'engineering',
          title: 'Data Engineering',
          items: [
            'Построение пайплайнов',
            'Интеграция источников данных',
            'Подготовка и хранение данных',
          ],
        },
        {
          id: 'science',
          title: ['Data Science', '& Analytics'],
          items: [
            'Сбор, интеграция и обработка данных',
            'Построение эконометрических и прогнозных моделей',
            'Машинное обучение',
            'Разработка и применение моделей нейронных сетей (ИИ) и методов текстового анализа',
          ],
        },
        {
          id: 'training',
          title: 'Обучение и сопровождение',
          items: [
            'Обучение работе данными',
            'Обучение работе с инструментами ИИ',
            'Обучение навыкам прогнозирования',
            'Обучение работе с инструментами визуализации',
          ],
        },
      ],
    },
    team: {
      title: 'Наша команда',
      text: 'Наша команда объединяет экспертов в области Data Science, аналитики, инженерии и технологического консалтинга с опытом работы над прикладными бизнес-задачами.',
      cta: 'Свяжитесь с нами',
    },
    footer: {
      backToTopLabel: 'Наверх',
      navLabel: 'Навигация в подвале',
      links: {
        about: 'О нас',
        mission: 'Наша миссия',
        services: 'Услуги',
        team: 'Команда',
      },
      cta: 'Свяжитесь с нами',
    },
  },
  kz: {
    header: {
      menuLabel: 'Мәзір',
      navLabel: 'Негізгі навигация',
      languageLabel: 'Тілді таңдау',
      links: {
        about: 'Біз туралы',
        mission: 'Біздің миссия',
        services: 'Қызметтер',
        team: 'Команда',
        contacts: 'Байланыс',
      },
    },
    hero: {
      kicker: 'Data Science саласындағы технологиялық консалтинг және шешімдер',
      tagline: 'Transform Data into Power',
      lead: 'Біз компанияларға деректер негізінде шешім қабылдауға, аналитикалық және ML шешімдерін енгізуге және тұрақты технологиялық процестерді құруға көмектесеміз.',
    },
    about: {
      title: 'Біз туралы',
      paragraphs: [
        'Біз — Data Science, аналитика және технологиялық шешімдер әзірлеуге маманданған технологиялық консалтингтік компаниямыз.',
        'Біз компанияларға басқарушылық шешімдер қабылдау, процестердің тиімділігін арттыру және бизнес-контурға заманауи аналитикалық және ML шешімдерін енгізу үшін деректерді пайдалануға көмектесеміз.',
      ],
      imageAlt: 'Абстрактілі толқын',
    },
    mission: {
      title: 'Біздің миссия',
      text: 'Біздің миссия — компанияларға деректерден құндылық алуға көмектесу, аналитикалық және зияткерлік құралдар әзірлеу арқылы негізделген стратегиялық және басқарушылық шешімдер қабылдауға мүмкіндік беру.',
      imageAlt: 'Миссия диаграммасы',
    },
    services: {
      title: 'Қызметтер',
      button: 'Толығырақ',
      cards: [
        {
          id: 'engineering',
          title: 'Деректер инженериясы',
          items: [
            'Пайплайндарды құру',
            'Деректер көздерін біріктіру',
            'Деректерді дайындау және сақтау',
          ],
        },
        {
          id: 'science',
          title: ['Data Science', '& Analytics'],
          items: [
            'Деректерді жинау, біріктіру және өңдеу',
            'Эконометриялық және болжамдық модельдерді құру',
            'Машиналық оқыту',
            'Нейрондық желі (ЖИ) модельдерін әзірлеу және қолдану, мәтіндік талдау әдістері',
          ],
        },
        {
          id: 'training',
          title: 'Оқыту және сүйемелдеу',
          items: [
            'Деректермен жұмыс істеуді оқыту',
            'ЖИ құралдарымен жұмыс істеуді оқыту',
            'Болжам жасау дағдыларын оқыту',
            'Визуализация құралдарымен жұмыс істеуді оқыту',
          ],
        },
      ],
    },
    team: {
      title: 'Біздің команда',
      text: 'Біздің команда Data Science, аналитика, инженерия және технологиялық консалтинг салаларындағы тәжірибелі мамандарды біріктіреді, олар қолданбалы бизнес міндеттерін шешуде тәжірибесі бар.',
      cta: 'Бізбен байланысыңыз',
    },
    footer: {
      backToTopLabel: 'Жоғары',
      navLabel: 'Футердегі навигация',
      links: {
        about: 'Біз туралы',
        mission: 'Біздің миссия',
        services: 'Қызметтер',
        team: 'Команда',
      },
      cta: 'Бізбен байланысыңыз',
    },
  },
  en: {
    header: {
      menuLabel: 'Menu',
      navLabel: 'Main navigation',
      languageLabel: 'Language',
      links: {
        about: 'About',
        mission: 'Our mission',
        services: 'Services',
        team: 'Team',
        contacts: 'Contacts',
      },
    },
    hero: {
      kicker: 'Technology consulting and Data Science solutions',
      tagline: 'Transform Data into Power',
      lead: 'We help companies make data-driven decisions, implement analytics and ML solutions, and build resilient technology processes.',
    },
    about: {
      title: 'About us',
      paragraphs: [
        'We are a technology consulting company specializing in Data Science, analytics, and the development of technology solutions.',
        'We help companies use data for management decisions, improve process efficiency, and bring modern analytics and ML solutions into business operations.',
      ],
      imageAlt: 'Abstract wave',
    },
    mission: {
      title: 'Our mission',
      text: 'Our mission is to help companies extract value from data by building analytical and intelligent tools that enable well-founded strategic and managerial decisions.',
      imageAlt: 'Mission chart',
    },
    services: {
      title: 'Services',
      button: 'Learn more',
      cards: [
        {
          id: 'engineering',
          title: 'Data Engineering',
          items: [
            'Pipeline design',
            'Data source integration',
            'Data preparation and storage',
          ],
        },
        {
          id: 'science',
          title: ['Data Science', '& Analytics'],
          items: [
            'Data collection, integration, and processing',
            'Econometric and forecasting models',
            'Machine learning',
            'Development and application of neural network (AI) models and text analysis methods',
          ],
        },
        {
          id: 'training',
          title: 'Training and support',
          items: [
            'Training in working with data',
            'Training in AI tools',
            'Forecasting skills training',
            'Training in visualization tools',
          ],
        },
      ],
    },
    team: {
      title: 'Our team',
      text: 'Our team brings together experts in Data Science, analytics, engineering, and technology consulting with experience solving applied business problems.',
      cta: 'Contact us',
    },
    footer: {
      backToTopLabel: 'Back to top',
      navLabel: 'Footer navigation',
      links: {
        about: 'About',
        mission: 'Our mission',
        services: 'Services',
        team: 'Team',
      },
      cta: 'Contact us',
    },
  },
};

export const LANGUAGE_OPTIONS = [
  { code: 'ru', label: 'RU', name: 'Русский' },
  { code: 'kz', label: 'KZ', name: 'Қазақша' },
  { code: 'en', label: 'EN', name: 'English' },
] as const;

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: Translations;
};

const LanguageContext = React.createContext<LanguageContextValue | undefined>(
  undefined
);

const isLanguage = (value: string | null): value is Language =>
  value === 'ru' || value === 'kz' || value === 'en';

const getInitialLanguage = (): Language => {
  if (typeof window === 'undefined') {
    return 'ru';
  }

  const stored = window.localStorage.getItem('language');
  if (isLanguage(stored)) {
    return stored;
  }

  const browserLanguage = window.navigator.language.toLowerCase();
  if (browserLanguage.startsWith('kk') || browserLanguage.startsWith('kz')) {
    return 'kz';
  }
  if (browserLanguage.startsWith('en')) {
    return 'en';
  }
  return 'ru';
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = React.useState<Language>(getInitialLanguage);

  React.useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = language === 'kz' ? 'kk' : language;
    }
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('language', language);
    }
  }, [language]);

  const value = React.useMemo(
    () => ({
      language,
      setLanguage,
      t: translations[language],
    }),
    [language]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextValue => {
  const context = React.useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};
