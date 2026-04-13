export type Locale = 'ru' | 'kz' | 'en'

export type TranslationSchema = {
  header: {
    openMenu: string
  }
  nav: {
    platformDevelopment: string
    statusFeatures: string
    ratingSystem: string
    contacts: string
  }
  legal: {
    privacy: string
    agreement: string
    requisites: string
  }
  hero: {
    title: string
    description: string
    downloadIn: string
    availableIn: string
  }
  about: {
    title: string
    mission: { title: string; text: string }
    values: { title: string; text: string }
  }
  benefits: {
    title: string
    subtitle: string
    items: { title: string; description: string }[]
  }
  features: {
    title: string
    subtitle: string
    items: { title: string; description: string }[]
  }
  pricing: {
    title: string
    subtitle: string
    table: {
      status: string
      price: string
      evaluations: string
      rating: string
    }
    statuses: { name: string; price: string; rating: string; evaluations: string }[]
    additionalInfo: { title: string; description: string }[]
  }
  security: {
    title: string
    subtitle: string
    items: { title: string; description: string }[]
  }
  footer: {
    description: string
    navigation: string
    documents: string
    contacts: string
    copyright: string
  }
  requisites: {
    title: string
    beneficiary: string
    bin: string
    account: string
    bank: string
    bik: string
    kbe: string
  }
}

export const translations: Record<Locale, TranslationSchema> = {
  ru: {
    header: { openMenu: 'Открыть меню' },
    nav: {
      platformDevelopment: 'Развитие на платформе',
      statusFeatures: 'Статусы и возможности',
      ratingSystem: 'Система рейтинга',
      contacts: 'Контакты',
    },
    legal: {
      privacy: 'Политика конфиденциальности',
      agreement: 'Пользовательское соглашение',
      requisites: 'Реквизиты компании',
    },
    hero: {
      title: 'Persona 1.0',
      description: 'Всемирная база данных людей в виде анкет пользователей и их взаимодействия между собой. Данные в анкете заполняются в соответствии с желанием участника и его позиционированием.',
      downloadIn: 'Скачать в',
      availableIn: 'Доступно в',
    },
    about: {
      title: 'О платформе',
      mission: {
        title: 'Наша миссия',
        text: 'Создать безопасное и вдохновляющее пространство, где каждый человек может развиваться, делиться опытом и находить поддержку единомышленников.',
      },
      values: {
        title: 'Наши ценности',
        text: 'Мы верим в уникальность каждой личности и создаем платформу, где каждый может быть собой, развиваться и вдохновлять других.',
      },
    },
    benefits: {
      title: 'Развитие на платформе',
      subtitle: 'Платформа создана для развития личности и построения доверительных отношений',
      items: [
        {
          title: 'Развитие личности',
          description: 'С развитием участника как личности и самое главное изменения сознания и мышления, способствующего прогрессу в ментальном и материальном плане, будут доступны новые уровни для дальнейшего роста.',
        },
        {
          title: 'Система доверия',
          description: 'Новый уровень — это честная степень доверия, благодаря личной системе рейтинга. Соответственно новое окружение и поиск единомышленников подталкивает участника развиваться и стремиться к более высоким вершинам.',
        },
        {
          title: 'Статусная система',
          description: 'В приложении будет 5 статусов личности и они будут присваиваться участнику в анкете при выполнении условий. Главное на добровольной основе.',
        },
      ],
    },
    features: {
      title: 'Основные возможности',
      subtitle: 'Платформа предоставляет широкие возможности для поиска и взаимодействия',
      items: [
        {
          title: 'Поиск анкет',
          description: 'Поиск конкретных анкет людей по ключевым словам посредством фильтров настроенных по каждой категории',
        },
        {
          title: 'Категории поиска',
          description: 'Страна, город, имя, профессия, хобби, опыт работы и другие параметры для точного поиска',
        },
        {
          title: 'Система рейтинга',
          description: 'Автоматическая система оценки и формирования личного рейтинга участников',
        },
      ],
    },
    pricing: {
      title: 'Статусы и возможности',
      subtitle: 'Первый год бесплатно для всех пользователей. Далее доступ к более высокому уровню зависит от рейтинга и количества оценок',
      table: {
        status: 'Статус',
        price: 'Абонентская плата',
        evaluations: 'Количество оценок',
        rating: 'Рейтинг',
      },
      statuses: [
        { name: 'Новичок', price: '5 000₸ в год', rating: 'фактический', evaluations: '0 - 300' },
        { name: 'Любитель', price: '50 000₸ в год', rating: '80-85%', evaluations: '501 - 1.000' },
        { name: 'Мастер', price: '250 000₸ в год', rating: '85-90%', evaluations: '1.001 - 5.000' },
        { name: 'Профи', price: '1 500 000₸ в год', rating: '90-95%', evaluations: '5.001-10.000' },
        { name: 'Меценат', price: '5 000 000₸ в год', rating: 'Свыше 95%', evaluations: 'Свыше 10.001' },
      ],
      additionalInfo: [
        {
          title: 'Первый год бесплатно',
          description: 'Для всех новых пользователей первый год использования платформы предоставляется бесплатно',
        },
        {
          title: 'Автономные фонды',
          description: 'Каждый фонд будет существовать и работать автономно от других фондов',
        },
        {
          title: 'Направление средств',
          description: 'Одним из важных направлений в решении проблем современного общества будет инвестирование средств на развитие флоры и фауны и решение экологических проблем',
        },
        {
          title: 'Прозрачность',
          description: 'Все инвестиционные и благотворительные проекты, актуальную информацию мы будем освещать в социальных сетях',
        },
      ],
    },
    security: {
      title: 'Система рейтинга и развития',
      subtitle: 'Каждый человек автор своей жизни. Развивайтесь, повышайте свой рейтинг и открывайте новые возможности',
      items: [
        {
          title: 'Система рейтинга',
          description: 'Автоматическая система оценки формирует личный рейтинг на основе активности и вклада участника в развитие сообщества. Чем выше рейтинг, тем больше доверия и возможностей открывается перед вами.',
        },
        {
          title: 'Развитие личности',
          description: 'С развитием участника как личности и изменением сознания, способствующего прогрессу в ментальном и материальном плане, открываются новые уровни для дальнейшего роста.',
        },
        {
          title: 'Статусная система',
          description: 'В приложении существует 5 статусов личности, которые присваиваются участнику на основе его достижений и вклада в развитие сообщества. Переход между статусами происходит на добровольной основе.',
        },
        {
          title: 'Глобальное сообщество',
          description: 'Платформа объединяет людей со всего мира, создавая уникальное пространство для обмена опытом, знаниями и возможностями. Каждый участник может внести свой вклад в развитие сообщества.',
        },
      ],
    },
    footer: {
      description: 'Платформа для личностного развития и самовыражения',
      navigation: 'Навигация',
      documents: 'Документы',
      contacts: 'Контакты',
      copyright: 'Все права защищены.',
    },
    requisites: {
      title: 'Реквизиты компании',
      beneficiary: 'Бенефициар',
      bin: 'ИИН/БИН',
      account: 'Номер счета',
      bank: 'Наименование банка',
      bik: 'БИК',
      kbe: 'КБе получателя',
    },
  },

  kz: {
    header: { openMenu: 'Мәзірді ашу' },
    nav: {
      platformDevelopment: 'Платформада даму',
      statusFeatures: 'Мәртебелер мен мүмкіндіктер',
      ratingSystem: 'Рейтинг жүйесі',
      contacts: 'Байланыс',
    },
    legal: {
      privacy: 'Құпиялылық саясаты',
      agreement: 'Пайдаланушы келісімі',
      requisites: 'Компания деректемелері',
    },
    hero: {
      title: 'Persona 1.0',
      description: 'Пайдаланушылардың анкеталары мен олардың өзара әрекеттесуі түріндегі адамдардың бүкіләлемдік дерекқоры. Анкетадағы деректер қатысушының қалауы мен позициялануына сәйкес толтырылады.',
      downloadIn: 'Жүктеу',
      availableIn: 'Қолжетімді',
    },
    about: {
      title: 'Платформа туралы',
      mission: {
        title: 'Біздің миссия',
        text: 'Әр адам дамып, тәжірибесімен бөлісіп, пікірлестерінің қолдауын таба алатын қауіпсіз және шабыттандырушы кеңістік жасау.',
      },
      values: {
        title: 'Біздің құндылықтар',
        text: 'Біз әр тұлғаның бірегейлігіне сенеміз және әр адам өзі бола алатын, дами алатын және басқаларды шабыттандыра алатын платформа жасаймыз.',
      },
    },
    benefits: {
      title: 'Платформада даму',
      subtitle: 'Платформа тұлғаны дамыту және сенімді қарым-қатынас орнату үшін жасалған',
      items: [
        {
          title: 'Тұлғаны дамыту',
          description: 'Қатысушының тұлға ретінде дамуымен және ең бастысы ментальды және материалды тұрғыдан прогреске ықпал ететін сана мен ойлауының өзгеруімен бірге одан әрі өсу үшін жаңа деңгейлер қолжетімді болады.',
        },
        {
          title: 'Сенім жүйесі',
          description: 'Жаңа деңгей — жеке рейтинг жүйесі арқылы адал сенім дәрежесі. Тиісінше, жаңа орта және пікірлестерді іздеу қатысушыны дамуға және жоғары шыңдарға ұмтылуға итермелейді.',
        },
        {
          title: 'Мәртебе жүйесі',
          description: 'Қосымшада тұлғаның 5 мәртебесі болады және олар шарттар орындалған кезде анкетаде қатысушыға беріледі. Ең бастысы — ерікті негізде.',
        },
      ],
    },
    features: {
      title: 'Негізгі мүмкіндіктер',
      subtitle: 'Платформа іздеу және өзара әрекеттесу үшін кең мүмкіндіктер береді',
      items: [
        {
          title: 'Анкеталарды іздеу',
          description: 'Әр санат бойынша конфигурацияланған сүзгілер арқылы кілт сөздер бойынша адамдардың нақты анкеталарын іздеу',
        },
        {
          title: 'Іздеу санаттары',
          description: 'Нақты іздеу үшін ел, қала, аты, мамандығы, хоббиі, жұмыс тәжірибесі және басқа параметрлер',
        },
        {
          title: 'Рейтинг жүйесі',
          description: 'Қатысушылардың жеке рейтингін бағалаудың және қалыптастырудың автоматты жүйесі',
        },
      ],
    },
    pricing: {
      title: 'Мәртебелер мен мүмкіндіктер',
      subtitle: 'Барлық пайдаланушылар үшін бірінші жыл тегін. Одан кейін жоғары деңгейге қол жеткізу рейтингке және бағалау санына байланысты',
      table: {
        status: 'Мәртебе',
        price: 'Жазылым ақысы',
        evaluations: 'Бағалау саны',
        rating: 'Рейтинг',
      },
      statuses: [
        { name: 'Жаңадан бастаушы', price: 'Жылына 5 000₸', rating: 'нақты', evaluations: '0 - 300' },
        { name: 'Әуесқой', price: 'Жылына 50 000₸', rating: '80-85%', evaluations: '501 - 1 000' },
        { name: 'Шебер', price: 'Жылына 250 000₸', rating: '85-90%', evaluations: '1 001 - 5 000' },
        { name: 'Кәсіпқой', price: 'Жылына 1 500 000₸', rating: '90-95%', evaluations: '5 001-10 000' },
        { name: 'Меценат', price: 'Жылына 5 000 000₸', rating: '95%-дан жоғары', evaluations: '10 001-ден жоғары' },
      ],
      additionalInfo: [
        {
          title: 'Бірінші жыл тегін',
          description: 'Барлық жаңа пайдаланушылар үшін платформаны пайдаланудың бірінші жылы тегін беріледі',
        },
        {
          title: 'Дербес қорлар',
          description: 'Әр қор басқа қорлардан дербес жұмыс жасайды',
        },
        {
          title: 'Қаражатты бағыттау',
          description: 'Қазіргі қоғамның мәселелерін шешудегі маңызды бағыттардың бірі — флора мен фаунаны дамытуға және экологиялық мәселелерді шешуге қаражат салу болады',
        },
        {
          title: 'Ашықтық',
          description: 'Барлық инвестициялық және қайырымдылық жобаларын, өзекті ақпаратты біз әлеуметтік желілерде жариялаймыз',
        },
      ],
    },
    security: {
      title: 'Рейтинг және даму жүйесі',
      subtitle: 'Әр адам өз өмірінің авторы. Дамыңыз, рейтингіңізді арттырыңыз және жаңа мүмкіндіктерді ашыңыз',
      items: [
        {
          title: 'Рейтинг жүйесі',
          description: 'Автоматты бағалау жүйесі қоғамдастықты дамытуға қатысушының белсенділігі мен үлесіне негізделген жеке рейтингті қалыптастырады. Рейтинг неғұрлым жоғары болса, соғұрлым көп сенім мен мүмкіндіктер ашылады.',
        },
        {
          title: 'Тұлғаны дамыту',
          description: 'Қатысушының тұлға ретінде дамуымен және ментальды және материалды тұрғыдан прогреске ықпал ететін сана өзгеруімен бірге одан әрі өсу үшін жаңа деңгейлер ашылады.',
        },
        {
          title: 'Мәртебе жүйесі',
          description: 'Қосымшада тұлғаның 5 мәртебесі бар, олар қатысушының жетістіктері мен қоғамдастықты дамытуға қосқан үлесі негізінде беріледі. Мәртебелер арасындағы өту ерікті негізде жүреді.',
        },
        {
          title: 'Жаһандық қоғамдастық',
          description: 'Платформа бүкіл әлемдегі адамдарды біріктіреді, тәжірибе, білім және мүмкіндіктермен алмасу үшін бірегей кеңістік жасайды. Әр қатысушы қоғамдастықтың дамуына өз үлесін қоса алады.',
        },
      ],
    },
    footer: {
      description: 'Тұлғалық даму мен өзін-өзі көрсету платформасы',
      navigation: 'Навигация',
      documents: 'Құжаттар',
      contacts: 'Байланыс',
      copyright: 'Барлық құқықтар қорғалған.',
    },
    requisites: {
      title: 'Компания деректемелері',
      beneficiary: 'Бенефициар',
      bin: 'ЖСН/БСН',
      account: 'Шот нөмірі',
      bank: 'Банктің атауы',
      bik: 'БИК',
      kbe: 'Алушының КБе',
    },
  },

  en: {
    header: { openMenu: 'Open menu' },
    nav: {
      platformDevelopment: 'Platform Development',
      statusFeatures: 'Statuses & Features',
      ratingSystem: 'Rating System',
      contacts: 'Contacts',
    },
    legal: {
      privacy: 'Privacy Policy',
      agreement: 'Terms of Service',
      requisites: 'Company Requisites',
    },
    hero: {
      title: 'Persona 1.0',
      description: 'A worldwide database of people in the form of user profiles and their interactions. Profile data is filled in according to the participant\'s wishes and self-positioning.',
      downloadIn: 'Download on the',
      availableIn: 'Get it on',
    },
    about: {
      title: 'About the Platform',
      mission: {
        title: 'Our Mission',
        text: 'To create a safe and inspiring space where every person can grow, share experiences, and find support among like-minded people.',
      },
      values: {
        title: 'Our Values',
        text: 'We believe in the uniqueness of each individual and build a platform where everyone can be themselves, grow, and inspire others.',
      },
    },
    benefits: {
      title: 'Platform Development',
      subtitle: 'The platform is designed for personal growth and building trustworthy relationships',
      items: [
        {
          title: 'Personal Growth',
          description: 'As a participant develops as a person — and most importantly, as their mindset and thinking shift to support mental and material progress — new levels for further growth become available.',
        },
        {
          title: 'Trust System',
          description: 'A new level is an honest degree of trust, thanks to the personal rating system. A new environment and the search for like-minded people pushes participants to develop and strive for higher achievements.',
        },
        {
          title: 'Status System',
          description: 'The app will feature 5 personal statuses, assigned to participants upon meeting conditions in their profile. Most importantly, on a voluntary basis.',
        },
      ],
    },
    features: {
      title: 'Key Features',
      subtitle: 'The platform provides extensive capabilities for search and interaction',
      items: [
        {
          title: 'Profile Search',
          description: 'Search for specific people\'s profiles by keywords using filters configured for each category',
        },
        {
          title: 'Search Categories',
          description: 'Country, city, name, profession, hobbies, work experience, and other parameters for precise search',
        },
        {
          title: 'Rating System',
          description: 'Automatic evaluation system for generating and maintaining personal ratings for participants',
        },
      ],
    },
    pricing: {
      title: 'Statuses & Features',
      subtitle: 'First year free for all users. Access to higher levels depends on rating and number of evaluations',
      table: {
        status: 'Status',
        price: 'Subscription Fee',
        evaluations: 'Number of Evaluations',
        rating: 'Rating',
      },
      statuses: [
        { name: 'Beginner', price: '5,000₸ / year', rating: 'actual', evaluations: '0 - 300' },
        { name: 'Amateur', price: '50,000₸ / year', rating: '80-85%', evaluations: '501 - 1,000' },
        { name: 'Master', price: '250,000₸ / year', rating: '85-90%', evaluations: '1,001 - 5,000' },
        { name: 'Pro', price: '1,500,000₸ / year', rating: '90-95%', evaluations: '5,001-10,000' },
        { name: 'Patron', price: '5,000,000₸ / year', rating: 'Above 95%', evaluations: 'Above 10,001' },
      ],
      additionalInfo: [
        {
          title: 'First Year Free',
          description: 'For all new users, the first year of using the platform is provided free of charge',
        },
        {
          title: 'Autonomous Funds',
          description: 'Each fund will exist and operate autonomously from other funds',
        },
        {
          title: 'Fund Allocation',
          description: 'One of the key directions in addressing modern society\'s problems will be investing in the development of flora and fauna and solving ecological issues',
        },
        {
          title: 'Transparency',
          description: 'All investment and charitable projects and current information will be covered on social media',
        },
      ],
    },
    security: {
      title: 'Rating & Development System',
      subtitle: 'Every person is the author of their own life. Grow, improve your rating, and unlock new opportunities',
      items: [
        {
          title: 'Rating System',
          description: 'The automatic evaluation system builds a personal rating based on a participant\'s activity and contribution to the community. The higher your rating, the more trust and opportunities open up for you.',
        },
        {
          title: 'Personal Growth',
          description: 'As participants develop as individuals and shift their mindset to support mental and material progress, new levels for further growth become available.',
        },
        {
          title: 'Status System',
          description: 'The app features 5 personal statuses, assigned based on a participant\'s achievements and contributions to the community. Transitions between statuses happen on a voluntary basis.',
        },
        {
          title: 'Global Community',
          description: 'The platform unites people from around the world, creating a unique space for sharing experiences, knowledge, and opportunities. Every participant can contribute to the community\'s growth.',
        },
      ],
    },
    footer: {
      description: 'A platform for personal development and self-expression',
      navigation: 'Navigation',
      documents: 'Documents',
      contacts: 'Contacts',
      copyright: 'All rights reserved.',
    },
    requisites: {
      title: 'Company Requisites',
      beneficiary: 'Beneficiary',
      bin: 'IIN/BIN',
      account: 'Account Number',
      bank: 'Bank Name',
      bik: 'BIC',
      kbe: 'Recipient KBE',
    },
  },
}