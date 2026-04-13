import { Locale } from '../translations'
import { LegalSection } from './privacyPolicy'

export type UserAgreementTranslation = {
  title: string
  intro: {
    heading: string
    text: string
  }
  sections: LegalSection[]
}

export const userAgreementTranslations: Record<Locale, UserAgreementTranslation> = {
  ru: {
    title: 'Пользовательское соглашение',
    intro: {
      heading: 'Введение',
      text: 'Миссия Persona – объединить специалистов всего мира для того, чтобы их профессиональная деятельность была более эффективной и успешной. Наши услуги предоставляют участникам Persona экономические возможности и позволяют вам и миллионам других профессионалов общаться, обмениваться идеями, получать знания, находить возможности для сотрудничества и принимать решения в кругу заслуживающих доверия людей.',
    },
    sections: [
      {
        id: '1',
        heading: '1. Введение',
        subsections: [
          {
            id: '1.1',
            heading: '1.1. Договор',
            paragraphs: [
              'Используя Услуги Persona, вы принимаете все условия и положения настоящего соглашения. Использование вами Услуг Persona также регулируется Политикой использования файлов cookie и Политикой конфиденциальности.',
              'Создавая учетную запись Persona или входя в систему, или используя наши Услуги, вы соглашаетесь заключить юридически обязывающий контракт с Persona. Если вы не принимаете условия настоящего Договора, не создавайте учетную запись и не используйте наши Услуги.',
            ],
          },
          {
            id: '1.1b',
            heading: 'Услуги',
            paragraphs: [
              'Настоящий Договор распространяется на веб-сайт personabest.com, фирменные приложения Persona и другие связанные с Persona веб-сайты, приложения, сообщения и другие услуги, предусмотренные настоящим Договором (далее – «Услуги»).',
            ],
          },
          {
            id: '1.1c',
            heading: 'Persona',
            paragraphs: [
              'Вы заключаете настоящий Договор с Persona (далее также «мы», «нас», «нами» и «наш»).',
              'Поскольку вы являетесь Посетителем или Участником Услуг Persona, сбор, использование и передача ваших персональных данных регулируются Политикой конфиденциальности Persona.',
            ],
          },
          {
            id: '1.2',
            heading: '1.2. Участники и Посетители',
            paragraphs: [
              'Настоящий Договор распространяется на Участников и Посетителей.',
              'Регистрируясь и присоединяясь к Услугам Persona, вы становитесь «Участником». Если вы решаете не регистрироваться, вы можете получать доступ к отдельным функциям в качестве «Посетителя».',
            ],
          },
          {
            id: '1.3',
            heading: 'Изменения',
            paragraphs: [
              'Persona имеет право вносить изменения в настоящий Договор. Persona может периодически вносить изменения в настоящий Договор, Политику конфиденциальности и Политику использования файлов cookie. Если вы не согласны с какими-либо изменениями, вы имеете право закрыть свою учетную запись.',
            ],
          },
        ],
      },
      {
        id: '2',
        heading: '2. Обязательства',
        subsections: [
          {
            id: '2.2',
            heading: '2.2. Ваша учетная запись',
            paragraphs: [
              'Вы обязаны хранить свой пароль в тайне.',
              'Вы не имеете права предоставлять свою учетную запись для использования другими лицами и обязаны следовать политикам Persona и требованиям закона.',
              'Участники являются владельцами учетной записи. Вы несете ответственность за все, что происходит с использованием вашей учетной записи, до тех пор, пока не закроете ее.',
            ],
          },
          {
            id: '2.3',
            heading: '2.3. Оплата и платежи',
            paragraphs: [
              'Вы обязуетесь производить оплату в срок и в полном объеме и соглашаетесь, что ваши платежные реквизиты будут храниться в Persona. Возврат средств осуществляется в соответствии с политикой Persona.',
            ],
            list: [
              'При покупке может взиматься комиссионный сбор за конвертацию валют или возникать разница в цене в зависимости от региона.',
              'Мы имеем право сохранять платежные реквизиты и продолжать начислять оплату даже по истечении срока действия платежного инструмента.',
              'Если вы приобретаете подписку, в начале каждого периода с платежного инструмента будет автоматически сниматься оплата за услуги и налоговые сборы.',
              'Persona имеет право изменять расценки на Услуги, уведомив об этом в разумные сроки.',
              'В отношении любых оплаченных вами Услуг действует Политика Persona по возмещению средств.',
              'Мы можем рассчитывать сумму налогов, которые вы обязаны уплатить, исходя из платежных реквизитов, предоставляемых вами Persona.',
            ],
            listStyle: 'decimal',
          },
          {
            id: '2.4',
            heading: '2.4. Уведомления и сообщения',
            paragraphs: [
              'Вы соглашаетесь с тем, что для доставки вам уведомлений и сообщений Persona будет использовать свои веб-сайты, приложения и имеющиеся контактные сведения.',
              'Вы можете контролировать и ограничивать сообщения, получаемые от Persona, на страницах своих настроек.',
            ],
          },
          {
            id: '2.5',
            heading: '2.5. Обмен информацией',
            paragraphs: [
              'Когда вы делитесь какой-либо информацией в рамках Услуг Persona, другие люди могут просматривать, копировать и использовать эту информацию.',
              'В тех случаях, когда это разрешено законом, Persona не обязана публиковать какой-либо контент или другую информацию в рамках Услуг Persona.',
            ],
          },
        ],
      },
      {
        id: '3',
        heading: '3. Права и ограничения',
        subsections: [
          {
            id: '3.1',
            heading: '3.1. Лицензия, которую вы предоставляете Persona',
            paragraphs: [
              'Вы являетесь владельцем любого своего оригинального контента, который вы предоставляете Persona. Однако при этом вы предоставляете Persona неисключительную лицензию на такой контент.',
              'Вы передаете Persona международное, допускающее передачу и сублицензирование право на использование, копирование, изменение, распространение и обработку вашего контента без какого-либо дальнейшего согласования.',
            ],
          },
          {
            id: '3.2',
            heading: '3.2. Доступность Услуг',
            paragraphs: [
              'Persona может изменить или ограничить доступ к некоторым функциям или прекратить предоставление любой Услуги.',
              'Persona не обязуется сохранять или отображать какую-либо размещенную вами информацию. Persona не является службой хранения данных.',
            ],
          },
          {
            id: '3.3',
            heading: '3.3. Сторонний контент, веб-сайты и приложения',
            paragraphs: [
              'Вы просматриваете и используете сторонние контент и информацию, размещенные при использовании Услуг, на свой страх и риск.',
              'Иные лица могут предлагать через Услуги Persona собственные продукты и услуги. Persona не несет ответственность за действия третьих лиц.',
            ],
          },
          {
            id: '3.4',
            heading: '3.4. Ограничения',
            paragraphs: [
              'Persona имеет право ограничить способы установления контакта и взаимодействия в рамках предоставления Услуг.',
              'Persona оставляет за собой право ограничить, приостановить или прекратить действие вашей учетной записи, если вы нарушаете настоящий Договор или закон.',
            ],
          },
          {
            id: '3.5',
            heading: '3.5. Права на интеллектуальную собственность',
            paragraphs: [
              'Persona уведомляет вас о наших правах на интеллектуальную собственность.',
              'Persona сохраняет все права на свою интеллектуальную собственность в рамках предоставления Услуг. Товарные знаки и логотипы, используемые в связи с Услугами, принадлежат соответствующим владельцам.',
            ],
          },
          {
            id: '3.6',
            heading: '3.6. Рекомендации и автоматизированная обработка',
            paragraphs: [
              'Persona использует данные и другую информацию о вас, чтобы предлагать и предоставлять актуальные рекомендации и создавать контент для вас и других лиц.',
            ],
          },
        ],
      },
      {
        id: '4',
        heading: '4. Ограничение ответственности',
        subsections: [
          {
            id: '4.1',
            heading: '4.1. Отсутствие гарантий',
            paragraphs: [
              'Настоящим Persona отказывается от юридической ответственности за качество, безопасность и надежность Услуг.',
              'PERSONA И АФФИЛИРОВАННЫЕ ЛИЦА PERSONA НЕ ДАЮТ НИКАКИХ ЗАВЕРЕНИЙ И ГАРАНТИЙ В ОТНОШЕНИИ УСЛУГ И ПРЕДОСТАВЛЯЮТ УСЛУГИ НА УСЛОВИЯХ «КАК ЕСТЬ» И «ПО МЕРЕ ДОСТУПНОСТИ».',
            ],
          },
          {
            id: '4.2',
            heading: '4.2. Исключение ответственности',
            paragraphs: [
              'Юридическая ответственность Persona перед вами ограничена.',
              'PERSONA И АФФИЛИРОВАННЫЕ ЛИЦА PERSONA В МАКСИМАЛЬНОЙ ДОПУСТИМОЙ ЗАКОНОМ СТЕПЕНИ ОСВОБОЖДАЕТСЯ ОТ ОТВЕТСТВЕННОСТИ ЗА УПУЩЕННУЮ ВЫГОДУ, УЩЕРБ РЕПУТАЦИИ, ПОТЕРЮ ДАННЫХ ИЛИ ЛЮБЫЕ КОСВЕННЫЕ, СЛУЧАЙНЫЕ, ПОСЛЕДУЮЩИЕ ИЛИ ШТРАФНЫЕ УБЫТКИ.',
            ],
          },
          {
            id: '4.3',
            heading: '4.3. Основание сделки. Исключения',
            paragraphs: [
              'Ограничения ответственности в настоящем Разделе 4 являются одним из оснований сделки между вами и Persona и распространяются на ответственность по любым искам.',
            ],
          },
        ],
      },
      {
        id: '5',
        heading: '5. Прекращение действия',
        subsections: [
          {
            id: '5.1',
            heading: '',
            paragraphs: [
              'Стороны имеют право расторгнуть настоящий Договор в любое время. При этом отдельные права и обязательства сторон останутся в силе.',
              'Как вы, так и Persona имеете право расторгнуть настоящий Договор в любой момент, направив соответствующее уведомление другой стороне.',
            ],
            list: [
              'вы нарушили настоящий Договор',
              'создаете риск или возможную правовую ответственность для Persona',
              'длительное время не пользуетесь своей учетной записью',
              'предоставление вам наших Услуг более не является коммерчески целесообразным',
            ],
            listStyle: 'disc',
          },
        ],
      },
      {
        id: '6',
        heading: '6. Применимое право и урегулирование споров',
        subsections: [
          {
            id: '6.1',
            heading: '',
            paragraphs: [
              'В том маловероятном случае, если возникает правовой спор, вы и Persona соглашаетесь с тем, что такие спорные вопросы регулируются в судах Казахстана с применением законодательства Казахстана.',
            ],
          },
        ],
      },
      {
        id: '7',
        heading: '7. Общие положения',
        subsections: [
          {
            id: '7.1',
            heading: '',
            paragraphs: [
              'Ниже представлены некоторые важные сведения о Договоре.',
              'Настоящий Договор является единственным соглашением, заключенным между нами в отношении Услуг, и заменяет собой все предшествующие соглашения.',
              'Вы не имеете права передавать или переуступать настоящий Договор кому-либо без согласия Persona.',
            ],
          },
        ],
      },
      {
        id: '8',
        heading: '8. Разрешенные и запрещенные действия в Persona',
        paragraphs: [
          'Persona – это сообщество личностей. Список «Разрешенных и запрещенных действий» ограничивает перечень того, что вы можете и не можете делать, пользуясь Услугами Persona.',
        ],
        subsections: [
          {
            id: '8.1',
            heading: '8.1. Разрешенные действия',
            paragraphs: ['Вы соглашаетесь с тем, что вы обязаны:'],
            list: [
              'соблюдать все применимое законодательство, включая законы о неприкосновенности частной жизни, законы об интеллектуальной собственности и другие применимые законы;',
              'предоставлять достоверную контактную и личную информацию, а также поддерживать ее в актуальном состоянии;',
              'использовать в своем профиле настоящие имя и фамилию;',
              'использовать Услуги профессионально и для деловых целей.',
            ],
            listStyle: 'decimal',
          },
          {
            id: '8.2',
            heading: '8.2. Запрещенные действия',
            paragraphs: ['Вы соглашаетесь с тем, что вы не будете:'],
            list: [
              'создавать в Persona фальшивые учетные записи, вводить в заблуждение относительно своей личности или использовать чужую учетную запись;',
              'разрабатывать или использовать программные продукты, скрипты или программы-роботы для веб-скрейпинга или копирования предоставляемых Услуг;',
              'блокировать какие-либо функции системы безопасности или обходить элементы управления доступом;',
              'копировать, использовать или распространять любую информацию, полученную на базе Услуг, без согласия владельца контента;',
              'раскрывать информацию, не заручившись согласием на ее раскрытие;',
              'нарушать права на интеллектуальную собственность других лиц;',
              'нарушать права интеллектуальной собственности и иные права Persona;',
              'размещать контент, содержащий программные вирусы или любой другой вредоносный код;',
              'использовать ботов или другие запрещенные автоматизированные методы получения доступа к Услугам;',
              'воссоздавать, зеркалировать или иным способом имитировать внешний вид или функционирование Услуг;',
              'использовать Услуги Persona для совершения незаконных, вводящих в заблуждение или мошеннических действий.',
            ],
            listStyle: 'decimal',
          },
        ],
      },
      {
        id: '9',
        heading: '9. Претензии относительно контента',
        subsections: [
          {
            id: '9.1',
            heading: '',
            paragraphs: [
              'Контактные данные, чтобы пожаловаться на контент, предоставленный Участниками Persona.',
              'Мы просим вас сообщать о контенте и другой информации, которая, по вашему мнению, нарушает ваши права, требования Политики для сообщества специалистов или иным образом нарушает настоящий Договор или закон.',
              'Persona уважает права на интеллектуальную собственность других лиц. В Persona предусмотрена политика и процедура предъявления претензий относительно распространяемого контента.',
            ],
          },
        ],
      },
    ],
  },

  kz: {
    title: 'Пайдаланушы келісімі',
    intro: {
      heading: 'Кіріспе',
      text: 'Persona миссиясы — бүкіл әлемдегі мамандарды олардың кәсіби қызметі тиімді және табысты болуы үшін біріктіру. Біздің қызметтер Persona қатысушыларына экономикалық мүмкіндіктер береді және сізге сенімді адамдар ортасында миллиондаған кәсіпқойлармен байланысуға, идея алмасуға, білім алуға және шешім қабылдауға мүмкіндік береді.',
    },
    sections: [
      {
        id: '1',
        heading: '1. Кіріспе',
        subsections: [
          {
            id: '1.1',
            heading: '1.1. Шарт',
            paragraphs: [
              'Persona қызметтерін пайдалану арқылы сіз осы келісімнің барлық шарттары мен ережелерін қабылдайсыз.',
              'Persona тіркелгісін жасай отырып немесе жүйеге кіру арқылы сіз Persona-мен заңды міндеттемелер туындататын шарт жасасуға келісесіз.',
            ],
          },
          {
            id: '1.1b',
            heading: 'Қызметтер',
            paragraphs: [
              'Осы Шарт personabest.com веб-сайтына, Persona брендтік қосымшаларына және Persona-мен байланысты басқа веб-сайттарға, қосымшаларға және хабарламаларға қолданылады («Қызметтер»).',
            ],
          },
          {
            id: '1.2',
            heading: '1.2. Қатысушылар мен Келушілер',
            paragraphs: [
              'Осы Шарт Қатысушылар мен Келушілерге қолданылады.',
              'Persona қызметтеріне тіркеліп қосылу арқылы сіз «Қатысушы» боласыз. Тіркелмесеңіз, жекелеген функцияларға «Келуші» ретінде қол жеткізе аласыз.',
            ],
          },
          {
            id: '1.3',
            heading: 'Өзгерістер',
            paragraphs: [
              'Persona осы Шартқа өзгерістер енгізу құқығын өзінде қалдырады. Өзгерістермен келіспесеңіз, тіркелгіңізді жабуға хақыңыз бар.',
            ],
          },
        ],
      },
      {
        id: '2',
        heading: '2. Міндеттемелер',
        subsections: [
          {
            id: '2.2',
            heading: '2.2. Сіздің тіркелгіңіз',
            paragraphs: [
              'Сіз құпия сөзіңізді құпия сақтауға міндеттісіз.',
              'Сіз тіркелгіңізді басқа адамдарға пайдалануға беруге хақыңыз жоқ және Persona саясаттары мен заң талаптарын сақтауға міндеттісіз.',
            ],
          },
          {
            id: '2.3',
            heading: '2.3. Төлем және ақылар',
            paragraphs: [
              'Сіз төлемді мерзімінде және толық көлемде жүргізуге міндеттенесіз.',
            ],
            list: [
              'Сатып алу кезінде валюта конвертациясы үшін комиссия алынуы мүмкін.',
              'Біз төлем деректемелерін сақтауға және мерзімі өткеннен кейін де есептеуді жалғастыруға хақымыз бар.',
              'Жазылым сатып алсаңыз, әр кезең басында төлем автоматты түрде алынады.',
              'Persona қызметтердің бағасын алдын ала хабарлай отырып өзгерте алады.',
              'Барлық ақылы қызметтерге Persona-ның қайтару саясаты қолданылады.',
              'Persona сіздің берген деректемелеріңіз негізінде салықты есептей алады.',
            ],
            listStyle: 'decimal',
          },
          {
            id: '2.4',
            heading: '2.4. Хабарламалар мен хабарлар',
            paragraphs: [
              'Хабарламаларды жеткізу үшін Persona веб-сайттарын, қосымшаларын және байланыс деректемелерін пайдаланатынына келісесіз.',
              'Параметрлер беттерінде Persona-дан алатын хабарларды бақылай және шектей аласыз.',
            ],
          },
          {
            id: '2.5',
            heading: '2.5. Ақпарат алмасу',
            paragraphs: [
              'Persona қызметтері шеңберінде ақпаратпен бөліскен кезде басқа адамдар оны қарай, көшіре және пайдалана алады.',
            ],
          },
        ],
      },
      {
        id: '3',
        heading: '3. Құқықтар мен шектеулер',
        subsections: [
          {
            id: '3.1',
            heading: '3.1. Сіз Persona-ға беретін лицензия',
            paragraphs: [
              'Сіз Persona-ға беретін кез келген түпнұсқа контентіңіздің иесісіз. Дегенмен сіз Persona-ға аталған контентке айрықша емес лицензия бересіз.',
            ],
          },
          {
            id: '3.2',
            heading: '3.2. Қызметтердің қолжетімділігі',
            paragraphs: [
              'Persona кейбір функцияларға қол жеткізуді өзгерте немесе шектей алады немесе кез келген Қызметті ұсынуды тоқтата алады.',
            ],
          },
          {
            id: '3.3',
            heading: '3.3. Үшінші тарап контенті, веб-сайттары мен қосымшалары',
            paragraphs: [
              'Сіз Қызметтерді пайдалану барысында орналастырылған үшінші тарап контентін өз тәуекеліңізбен қарайсыз және пайдаланасыз.',
            ],
          },
          {
            id: '3.4',
            heading: '3.4. Шектеулер',
            paragraphs: [
              'Persona қызметтерді ұсыну шеңберінде байланыс орнату мен өзара іс-қимылдың тәсілдерін шектеуге хақылы.',
            ],
          },
          {
            id: '3.5',
            heading: '3.5. Зияткерлік меншік құқықтары',
            paragraphs: [
              'Persona зияткерлік меншікке барлық құқықтарды Қызметтерді ұсыну шеңберінде сақтайды.',
            ],
          },
          {
            id: '3.6',
            heading: '3.6. Ұсынымдар мен автоматтандырылған өңдеу',
            paragraphs: [
              'Persona сіз туралы деректер мен ақпаратты ұсынымдар беру және контент жасау үшін пайдаланады.',
            ],
          },
        ],
      },
      {
        id: '4',
        heading: '4. Жауапкершілікті шектеу',
        subsections: [
          {
            id: '4.1',
            heading: '4.1. Кепілдіктердің болмауы',
            paragraphs: [
              'Persona Қызметтердің сапасы, қауіпсіздігі және сенімділігі үшін заңды жауапкершіліктен бас тартады.',
              'PERSONA ЖӘНЕ ОНЫҢ АФФИЛИИРЛЕНГЕН ТҰЛҒАЛАРЫ ҚЫЗМЕТТЕРГЕ ҚАТЫСТЫ ЕШҚАНДАЙ КЕПІЛДІКТЕР БЕРМЕЙДІ ЖӘНЕ ҚЫЗМЕТТЕРДІ «БЕРІЛГЕНДЕЙ» ЖӘНЕ «ҚОЛЖЕТІМДІ БОЛҒАНДА» ҰСЫНАДЫ.',
            ],
          },
          {
            id: '4.2',
            heading: '4.2. Жауапкершіліктен босату',
            paragraphs: [
              'Сізге қатысты Persona-ның заңды жауапкершілігі шектеулі.',
              'PERSONA ЖІБЕРІЛГЕН ПАЙДА, БЕДЕЛГЕ ЗАЛАЛ, ДЕРЕКТЕРДІ ЖОҒАЛТУ НЕМЕСЕ КЕЗ КЕЛГЕН ЖАНАМА, КЕЗДЕЙСОҚ НЕМЕСЕ ЖАЗАЛАУШЫ ЗАЛАЛДАР ҮШІН ЖАУАПКЕРШІЛІКТЕН БОСАТЫЛАДЫ.',
            ],
          },
          {
            id: '4.3',
            heading: '4.3. Мәміле негізі. Ерекшеліктер',
            paragraphs: [
              'Осы Бөлімдегі жауапкершілікті шектеулер кез келген талаптар бойынша жауапкершілікке қолданылады.',
            ],
          },
        ],
      },
      {
        id: '5',
        heading: '5. Күшін тоқтату',
        subsections: [
          {
            id: '5.1',
            heading: '',
            paragraphs: [
              'Тараптар осы Шартты кез келген уақытта бұза алады. Бұл ретте тараптардың жекелеген құқықтары мен міндеттемелері күшінде қалады.',
            ],
            list: [
              'сіз осы Шартты бұздыңыз',
              'Persona үшін тәуекел немесе мүмкін заңды жауапкершілік туғызасыз',
              'тіркелгіңізді ұзақ уақыт пайдаланбадыңыз',
              'сізге Қызметтер ұсыну коммерциялық тұрғыдан тиімді емес',
            ],
            listStyle: 'disc',
          },
        ],
      },
      {
        id: '6',
        heading: '6. Қолданылатын заң және дауларды шешу',
        subsections: [
          {
            id: '6.1',
            heading: '',
            paragraphs: [
              'Заңды дау туындаған жағдайда сіз де, Persona да мұндай дау сұрақтары Қазақстан соттарында Қазақстан заңнамасы қолданыла отырып реттелетіндігімен келісесіз.',
            ],
          },
        ],
      },
      {
        id: '7',
        heading: '7. Жалпы ережелер',
        subsections: [
          {
            id: '7.1',
            heading: '',
            paragraphs: [
              'Осы Шарт Қызметтерге қатысты арамызда жасалған жалғыз келісім болып табылады.',
              'Сіз Persona-ның келісімінсіз осы Шартты ешкімге беруге немесе аударуға хақыңыз жоқ.',
            ],
          },
        ],
      },
      {
        id: '8',
        heading: '8. Persona-да рұқсат етілген және тыйым салынған әрекеттер',
        paragraphs: [
          'Persona — тұлғалар қауымдастығы. «Рұқсат етілген және тыйым салынған әрекеттер» тізімі Persona қызметтерін пайдалану кезінде не жасай алатыныңызды және не жасай алмайтыныңызды шектейді.',
        ],
        subsections: [
          {
            id: '8.1',
            heading: '8.1. Рұқсат етілген әрекеттер',
            paragraphs: ['Сіз мыналарға міндеттенесіз:'],
            list: [
              'барлық қолданылатын заңнаманы, соның ішінде жеке өмірге қол сұқпаушылық, зияткерлік меншік туралы заңдарды сақтау;',
              'дұрыс байланыс және жеке ақпарат беру және оны жаңартып отыру;',
              'профильде нақты аты-жөнін пайдалану;',
              'Қызметтерді кәсіби және іскерлік мақсатта пайдалану.',
            ],
            listStyle: 'decimal',
          },
          {
            id: '8.2',
            heading: '8.2. Тыйым салынған әрекеттер',
            paragraphs: ['Сіз мыналарды жасамауға міндеттенесіз:'],
            list: [
              'Persona-да жалған тіркелгілер жасамау, жеке басыңыз туралы адастырмау немесе басқа біреудің тіркелгісін пайдаланбау;',
              'Қызметтерді скрейпинг жасауға немесе көшіруге арналған бағдарламалық өнімдерді немесе роботтарды әзірлемеу немесе пайдаланбау;',
              'кез келген қауіпсіздік функцияларын бұғаттамау немесе кіруді бақылау элементтерін айналып өтпеу;',
              'мазмұн иесінің келісімінсіз Қызметтерден алынған кез келген ақпаратты пайдаланбау;',
              'заңды немесе адастырушы, кемсітушілік немесе алаяқтық әрекеттерге Persona қызметтерін пайдаланбау.',
            ],
            listStyle: 'decimal',
          },
        ],
      },
      {
        id: '9',
        heading: '9. Контентке қатысты шағымдар',
        subsections: [
          {
            id: '9.1',
            heading: '',
            paragraphs: [
              'Persona Қатысушылары ұсынған контентке шағым білдіру үшін байланыс деректемелері.',
              'Сіздің ойыңызша құқықтарыңызды бұзатын контент пен ақпарат туралы бізге хабарлауыңызды сұраймыз.',
              'Persona басқа тұлғалардың зияткерлік меншік құқықтарын құрметтейді.',
            ],
          },
        ],
      },
    ],
  },

  en: {
    title: 'Terms of Service',
    intro: {
      heading: 'Introduction',
      text: 'Persona\'s mission is to connect the world\'s professionals to make them more productive and successful. Our services give Persona members economic opportunity and allow you and millions of other professionals to find each other, exchange ideas, learn, make deals, and make decisions in a network of trusted relationships.',
    },
    sections: [
      {
        id: '1',
        heading: '1. Introduction',
        subsections: [
          {
            id: '1.1',
            heading: '1.1. Agreement',
            paragraphs: [
              'By using Persona Services, you agree to all the terms and conditions of this Agreement. Your use of Persona Services is also subject to the Cookie Policy and Privacy Policy.',
              'By creating a Persona account or logging in, or using our Services, you agree to enter into a legally binding contract with Persona. If you do not agree to this Agreement, do not create an account or use our Services.',
            ],
          },
          {
            id: '1.1b',
            heading: 'Services',
            paragraphs: [
              'This Agreement applies to personabest.com, Persona\'s branded applications, and other Persona-related websites, apps, communications, and other services covered by this Agreement ("Services").',
            ],
          },
          {
            id: '1.2',
            heading: '1.2. Members and Visitors',
            paragraphs: [
              'This Agreement applies to Members and Visitors.',
              'When you register and join Persona Services, you become a "Member." If you choose not to register, you may access certain features as a "Visitor".',
            ],
          },
          {
            id: '1.3',
            heading: 'Changes',
            paragraphs: [
              'Persona may modify this Agreement. Persona may periodically modify this Agreement, the Privacy Policy, and the Cookie Policy. If you object to any changes, you may close your account.',
            ],
          },
        ],
      },
      {
        id: '2',
        heading: '2. Obligations',
        subsections: [
          {
            id: '2.2',
            heading: '2.2. Your Account',
            paragraphs: [
              'You must keep your password secret.',
              'You are not allowed to share your account with others and must follow Persona\'s policies and applicable law.',
              'Members are account holders. You are responsible for everything that happens through your account until you close it.',
            ],
          },
          {
            id: '2.3',
            heading: '2.3. Payment and Fees',
            paragraphs: [
              'You agree to pay us the applicable fees and taxes for any paid Services. Failure to pay these fees will result in the termination of your paid Services.',
            ],
            list: [
              'Currency exchange fluctuations or differences based on location may apply to your purchase.',
              'We may store and continue to bill your payment instrument even after expiration, to avoid interruptions to your paid Services.',
              'If you purchase a subscription, the applicable fees will be automatically charged at the start of each subscription period.',
              'Persona may change its prices for Services prospectively upon reasonable notice.',
              'Persona\'s refund policy applies to any Services you have paid for.',
              'We may calculate taxes payable based on the billing information you provide.',
            ],
            listStyle: 'decimal',
          },
          {
            id: '2.4',
            heading: '2.4. Notices and Service Messages',
            paragraphs: [
              'You agree that Persona will provide notices and messages to you in the following ways: through the Service, or sent to the contact information you provided.',
              'You can control and limit the messages you receive from Persona through your settings pages.',
            ],
          },
          {
            id: '2.5',
            heading: '2.5. Sharing Information',
            paragraphs: [
              'When you share information through Persona Services, others can see, copy, and use that information.',
              'To the extent permitted by law, Persona is not obligated to publish any content or information on our Services and can remove it with or without notice.',
            ],
          },
        ],
      },
      {
        id: '3',
        heading: '3. Rights and Limits',
        subsections: [
          {
            id: '3.1',
            heading: '3.1. Your License to Persona',
            paragraphs: [
              'You own all of your original content that you provide to Persona. However, you grant Persona a non-exclusive license to that content.',
              'You grant Persona a worldwide, transferable and sublicensable right to use, copy, modify, distribute, publish and process your content without any further consent, notice and/or compensation to you or others.',
            ],
          },
          {
            id: '3.2',
            heading: '3.2. Service Availability',
            paragraphs: [
              'Persona may modify, replace, or discontinue any Service. Persona may also change or limit access to features so that not all Visitors or Members have the same access.',
              'Persona has no obligation to store, maintain or provide you a copy of any content or information that you or others provide.',
            ],
          },
          {
            id: '3.3',
            heading: '3.3. Other Content, Sites and Apps',
            paragraphs: [
              'You view and use third-party content and information posted through our Services at your own risk.',
              'Others may offer their own products and services through Persona Services. Persona is not responsible for those third-party activities.',
            ],
          },
          {
            id: '3.4',
            heading: '3.4. Limits',
            paragraphs: [
              'Persona reserves the right to limit how Members connect and interact on our Services.',
              'Persona reserves the right to restrict, suspend, or terminate your account if you breach this Agreement or the law or are misusing the Services.',
            ],
          },
          {
            id: '3.5',
            heading: '3.5. Intellectual Property Rights',
            paragraphs: [
              'Persona reserves all intellectual property rights in the Services. Trademarks and logos used in connection with the Services are the trademarks of their respective owners.',
            ],
          },
          {
            id: '3.6',
            heading: '3.6. Automated Processing',
            paragraphs: [
              'Persona uses the data and information that you provide and that we have about Members to make recommendations and generate content relevant for you and others.',
            ],
          },
        ],
      },
      {
        id: '4',
        heading: '4. Disclaimer and Limit of Liability',
        subsections: [
          {
            id: '4.1',
            heading: '4.1. No Warranty',
            paragraphs: [
              'Persona makes no representation or warranty about the Services.',
              'PERSONA AND ITS AFFILIATES MAKE NO REPRESENTATION OR WARRANTY ABOUT THE SERVICES AND PROVIDE THEM ON AN "AS IS" AND "AS AVAILABLE" BASIS.',
            ],
          },
          {
            id: '4.2',
            heading: '4.2. Exclusion of Liability',
            paragraphs: [
              'Persona\'s liability to you is limited.',
              'PERSONA AND ITS AFFILIATES WILL NOT BE LIABLE TO YOU FOR ANY LOST PROFITS, LOST BUSINESS OPPORTUNITIES, REPUTATIONAL DAMAGE, LOSS OF DATA, OR ANY INDIRECT, INCIDENTAL, CONSEQUENTIAL, SPECIAL, OR PUNITIVE DAMAGES.',
            ],
          },
          {
            id: '4.3',
            heading: '4.3. Basis of the Bargain; Exclusions',
            paragraphs: [
              'The limitations of liability in this Section 4 are part of the basis of the bargain between you and Persona and shall apply to all claims of liability.',
            ],
          },
        ],
      },
      {
        id: '5',
        heading: '5. Termination',
        subsections: [
          {
            id: '5.1',
            heading: '',
            paragraphs: [
              'Both you and Persona may terminate this Agreement at any time with notice to the other. On termination, you lose the right to access or use the Services.',
            ],
            list: [
              'you have breached this Agreement',
              'you create risk or possible legal exposure for Persona',
              'your account has been inactive for a long time',
              'providing the Service to you is no longer commercially viable',
            ],
            listStyle: 'disc',
          },
        ],
      },
      {
        id: '6',
        heading: '6. Governing Law and Dispute Resolution',
        subsections: [
          {
            id: '6.1',
            heading: '',
            paragraphs: [
              'In the unlikely event we end up in a legal dispute, you and Persona agree that disputes will be resolved in the courts of Kazakhstan applying Kazakhstani law.',
            ],
          },
        ],
      },
      {
        id: '7',
        heading: '7. General Terms',
        subsections: [
          {
            id: '7.1',
            heading: '',
            paragraphs: [
              'This Agreement is the only agreement between us regarding the Services and supersedes all prior agreements for the Services.',
              'You may not assign or transfer this Agreement (or your membership or use of Services) to anyone without our consent.',
            ],
          },
        ],
      },
      {
        id: '8',
        heading: '8. Dos and Don\'ts',
        paragraphs: [
          'Persona is a community of professionals. This list of "Dos and Don\'ts" along with our Professional Community Policies limits what you can and cannot do on our Services.',
        ],
        subsections: [
          {
            id: '8.1',
            heading: '8.1. Dos',
            paragraphs: ['You agree that you will:'],
            list: [
              'Comply with all applicable laws, including privacy laws, intellectual property laws, anti-spam laws, export control laws, and other applicable laws.',
              'Provide accurate contact and personal information and keep it updated.',
              'Use your real name on your profile.',
              'Use the Services in a professional manner and for their intended purposes.',
            ],
            listStyle: 'decimal',
          },
          {
            id: '8.2',
            heading: '8.2. Don\'ts',
            paragraphs: ['You agree that you will not:'],
            list: [
              'Create a fake identity on Persona, misrepresent your identity, or use or attempt to use another\'s account.',
              'Develop, support or use software, devices, scripts, robots or any other means to scrape or copy the Services.',
              'Override any security feature or bypass or circumvent any access controls.',
              'Copy, use, display, or distribute information obtained from the Services without the consent of the content owner.',
              'Disclose information that you don\'t have the consent to disclose.',
              'Violate the intellectual property rights of others.',
              'Use Persona Services to do anything unlawful, misleading, discriminatory, or fraudulent.',
            ],
            listStyle: 'decimal',
          },
        ],
      },
      {
        id: '9',
        heading: '9. Complaints Regarding Content',
        subsections: [
          {
            id: '9.1',
            heading: '',
            paragraphs: [
              'Contact information for complaints about content provided by Members.',
              'We ask that you report content and information that you believe violates your rights or our Professional Community Policies.',
              'Persona respects the intellectual property rights of others and has a policy and procedure for content complaints.',
            ],
          },
        ],
      },
    ],
  },
}