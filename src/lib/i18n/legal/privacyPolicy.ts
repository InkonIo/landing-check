import { Locale } from '../translations'

export type LegalSection = {
  id: string
  heading: string
  subsections?: {
    id: string
    heading: string
    subheadings?: { title: string; text: string }[]
    paragraphs: string[]
    list?: string[]
    listStyle?: 'disc' | 'decimal'
  }[]
  paragraphs?: string[]
}

export type PrivacyPolicyTranslation = {
  title: string
  intro: {
    heading: string
    paragraphs: string[]
  }
  services: {
    heading: string
    paragraphs: string[]
  }
  sections: LegalSection[]
}

export const privacyPolicyTranslations: Record<Locale, PrivacyPolicyTranslation> = {
  ru: {
    title: 'Политика конфиденциальности',
    intro: {
      heading: 'Введение',
      paragraphs: [
        'Persona 1.0 – это социальная сеть в виде мобильного приложения, созданная для индивидуального развития человека как личности с функцией формирования личного рейтинга при взаимодействии с другими участниками. Это онлайн - платформа для нахождения интересующих людей, коммуникации, получение необходимой информации и поиска возможностей через других пользователей. Политика конфиденциальности Persona 1.0 распространяется на всех пользователей, использующих услуги Persona 1.0. Все пользователи проходят обязательную регистрацию для использования приложения.',
      ],
    },
    sections: [
      {
        id: '1',
        heading: '1. Данные, собираемые Persona 1.0',
        subsections: [
          {
            id: '1.1',
            heading: 'Данные, которые вы предоставляете Persona 1.0',
            subheadings: [
              {
                title: 'Регистрация',
                text: 'Чтобы создать учетную запись, вам необходимо предоставить запрашиваемые данные, включая ваши имя и фамилию, адрес электронной почты и/или номер мобильного телефона, основной регион и т.д.,а также пароль. В случае регистрации для получения доступа к формированию личного рейтинга вам необходимо будет указать способ оплаты (например, банковская карта) и платежные реквизиты.',
              },
              {
                title: 'Профиль',
                text: 'У вас есть возможность выбора информации в вашем профиле, например, вашего образования, опыта работы, навыков, фотографии, города или района и т.д. Вы не обязаны указывать в профиле дополнительную информацию. Информация в профиле помогает вам создать личную анкету, которая отображает все ваши преимущества для просмотра другими пользователями. Вы выбираете, хотите ли вы указывать в своем профиле конфиденциальную информацию и делать ли ее общедоступной. Не публикуйте и не указывайте в своем профиле персональные данные, которые предназначены для ограниченного круга лиц. Ваш профиль это реклама вашей личности в приложении Persona 1.0',
              },
              {
                title: 'Размещение информации',
                text: 'Persona 1.0 осуществляет сбор ваших персональных данных, когда вы предоставляете, размещаете или загружаете их в ходе использования, в том числе при заполнении какой-либо формы (например, места жительства или сведениями о заработной плате). Persona 1.0 постоянно работает над повышением качества своего приложения. Это означает, что Persona 1.0 получает новые данные и со временем может создавать новые способы использования данных. Функциональность приложения Persona 1.0 постоянно совершенствуется.',
              },
            ],
            paragraphs: [],
          },
        ],
      },
      {
        id: '2',
        heading: '2. Как Persona 1.0 использует ваши данные',
        paragraphs: [
          'Persona 1.0 использует ваши данные для предоставления, поддержки, персонализации качества услуг Persona 1.0.',
          'Мы можем использовать ваши личные данные для улучшения, разработки и предоставления продуктов и услуг, разработки и обучения моделей искусственного интеллекта (ИИ), разработки, предоставления и персонализации наших услуг, а также для получения информации с помощью ИИ, автоматизированных систем и логических построений, чтобы наши услуги были более актуальными и полезными для вас и других людей.',
        ],
        subsections: [
          {
            id: '2.1',
            heading: '2.1. Услуги',
            paragraphs: [
              'Persona 1.0 позволяют вам общаться с другими участниками, находить людей с общими интересами, использовать все возможности приложения и повышать личную эффективность.',
              'Возможности Persona 1.0 позволяют вам оставаться на связи с коллегами, партнерами, клиентами и другими профессиональными контактами, а также получать актуальную информацию о них.',
              'Persona 1.0 позволяют вам осуществлять поиск потенциальных клиентов, заказчиков и других участников для ведения бизнеса. Услуги Persona 1.0 позволяют вам общаться с другими пользователями, планировать и готовиться к встречам с ними',
            ],
          },
          {
            id: '2.3',
            heading: '2.3. Средства связи',
            paragraphs: [
              'Persona 1.0 связывается с вами и реализует функцию обмена сообщениями между пользователями.',
              'Для связи с вами будет использоваться электронная почта или мобильный телефон.',
              'Persona 1.0 использует данные',
              'для совершенствования приложения. Это позволяет предоставлять вам и другим участникам более качественные, интуитивно понятные и персонализированные услуги, а также расширять аудиторию пользователей и повышать их заинтересованность и помогать связываться друг с другом, находить и использовать возможности.',
              '.',
            ],
          },
        ],
      },
      {
        id: '3',
        heading: '3. Распространение информации компанией Persona 1.0',
        paragraphs: [
          'Любые данные, указанные в вашем профиле будут доступны другим пользователям в соответствии с вашими настройками.',
        ],
        subsections: [
          {
            id: '3.1',
            heading: 'Профиль',
            paragraphs: [
              'Ваш профиль полностью доступен для просмотра всем пользователям Persona 1.0',
            ],
          },
          {
            id: '3.2',
            heading: 'Поставщики услуг',
            paragraphs: [
              'Persona 1.0 может привлекать третьих лиц к оказанию Услуг.',
              'Persona 1.0 привлекает третьих лиц для оказания Услуг (например, для обслуживания, анализа, аудита, оплаты, выявления мошенничества, поддержки клиентов, маркетинга и разработки). Такие третьи лица получают доступ к вашим данным (например, к содержанию запроса в службу поддержки клиентов) в той степени, в которой это разумно необходимо для выполнения таких задач от имени Persona 1.0, и принимают на себя обязательство не разглашать эти данные и не использовать их для иных целей. Если вы приобретаете у нас платную услугу, мы можем использовать поставщика платежных услуг, который может отдельно собирать информацию о вас (например, для предотвращения мошенничества или для выполнения юридических обязательств).',
            ],
          },
          {
            id: '3.3',
            heading: 'Раскрытие информации в рамках закона',
            paragraphs: [
              'Возможно, компания Persona 1.0 будет обязана поделиться вашими данными, если сочтет, что это требуется по закону или для защиты ваших прав и обеспечения вашей безопасности, а также для защиты прав и обеспечения безопасности Persona 1.0 или других лиц.',
              'Возможна ситуация, когда компания Persona будет обязана раскрыть информацию о вас в соответствии с требованиями законодательства, повестки о вызове в суд или другого юридического процесса, а также в случаях, когда Persona 1.0 имеет основания полагать, что раскрытие информации необходимо для: (1) расследования, предотвращения или принятия мер против предполагаемых или фактических правонарушений либо в помощь государственным правоохранительным органам; (2) приведения в исполнение условий любых соглашений с вами; (3) расследования любых исков или обвинений со стороны третьих лиц и защиты от них; (4) обеспечения безопасности и целостности Услуг Persona 1.0 или продуктов или услуг наших Аффилированных лиц (например, предоставляя доступ компаниям, столкнувшимся с аналогичными угрозами); (5) осуществления или защиты прав или безопасности Persona 1.0, участников и сотрудников Persona 1.0 или других лиц. Persona 1.0 старается уведомлять пользователей о надлежаще заявленных требованиях в отношении раскрытия их персональных данных, когда считает это целесообразным, при условии, что такое раскрытие не запрещено законом или распоряжением суда, а также если запрос на раскрытие не является срочным. Persona 1.0 может оспорить такие требования, если посчитает на свое усмотрение, что такой запрос является чрезмерно широким, неясен или не имеет надлежащего правомочия. См. подробнее в Рекомендациях по запросам данных и Отчете о прозрачности.',
            ],
          },
        ],
      },
      {
        id: '4',
        heading: '4. Ваши права и обязанности',
        subsections: [
          {
            id: '4.1',
            heading: 'Сохранение данных',
            paragraphs: [
              'Persona 1.0 хранит большую часть ваших персональных данных до тех пор, пока ваша учетная запись открыта.',
              'Как правило, Persona 1.0 сохраняет ваши персональные данные до тех пор, пока вы не закроете вашу учетную запись. Вы можете просматривать ваши персональные данные или удалять их.',
              'Информация, которой вы поделились с другими пользователями',
              'будет доступна для просмотра даже после закрытия вашей учетной записи.',
              'Кроме того, Persona 1.0 не может контролировать данные, которые другие пользователи скопировали из приложения Persona 1.0.',
            ],
          },
        ],
      },
      {
        id: '5',
        heading: '5. Прочая важная информация',
        subsections: [
          {
            id: '5.1',
            heading: 'Безопасность',
            paragraphs: [
              'Persona 1.0 не может гарантировать безопасность какой-либо информации, передаваемой вами в Persona 1.0. Мы не даем никаких гарантий, что данные не будут просмотрены, раскрыты, изменены или уничтожены вследствие отказа или взлома каких-либо физических, технических или административных мер защиты.',
              'Persona собирает и обрабатывает персональные данные о вас при наличии законных оснований. К законным основаниям относятся согласие (когда вы дали соответствующее согласие',
              'В настоящее время Persona не предоставляет персональные данные третьим лицам для целей прямого маркетинга без вашего разрешения.',
            ],
          },
          {
            id: '5.2',
            heading: 'Контактные данные',
            paragraphs: [
              'Вы можете связаться с нами или воспользоваться другими вариантами урегулирования претензий.',
              'Все вопросы или претензии относительно настоящей Политики просьба отправлять через сайт www.personabest.com. Вы также можете отправить их обычной почтой. Если ответ не будет получен или если его содержание не удовлетворит отправителя, вы можете воспользоваться другими вариантами урегулирования. Кроме того, у лица, проживающие в Указанных странах и других регионах, могут также обратиться к нашему специалисту по защите данных, перейдя по этой ссылке или по адресу DPO@Persona.com. Если такое обращение не удовлетворит отправителя, лица, проживающие в Указанных странах и других регионах, могут воспользоваться другими вариантами урегулирования , которые соответствуют их законодательству.',
            ],
          },
        ],
      },
    ],
    services: {
      heading: '',
      paragraphs: []
    }
  },

  kz: {
    title: 'Құпиялылық саясаты',
    intro: {
      heading: 'Кіріспе',
      paragraphs: [
        'Persona — әр түрлі салалардағы мамандардың әлеуметтік желісі және кәсіби қарым-қатынас пен іскерлік байланыстарды дамытуға арналған онлайн-платформа. Адамдар іскерлік мүмкіндіктерді табу, басқа адамдармен байланысу және ақпарат алу үшін Persona қызметтерін пайдаланады. Persona-ның Құпиялылық саясаты Persona қызметтерін пайдаланатын барлық Қатысушылар мен Келушілерге қолданылады.',
        'Тіркелген пайдаланушылар («Қатысушылар») біздің желі арқылы кәсіби қызметтері туралы айтады, басқа Қатысушылармен өзара іс-қимыл жасайды, білім мен тәжірибемен алмасады, сәйкес контентті орналастырады және қарайды, бизнес пен мансапты дамыту мүмкіндіктерін табады.',
      ],
    },
    services: {
      heading: 'Қызметтер',
      paragraphs: [
        'Persona файлдарды пайдалану саясатын қамтитын осы Құпиялылық саясаты Persona қызметтерін пайдаланған кезде қолданылады.',
        'Осы Құпиялылық саясаты Persona.com веб-сайтына, Persona брендтік қосымшаларына және Persona ұсынатын басқа веб-сайттарға, қосымшаларға, хабарламаларға және қызметтерге қолданылады.',
      ],
    },
    sections: [
      {
        id: '1',
        heading: '1. Persona жинайтын деректер',
        subsections: [
          {
            id: '1.1',
            heading: '1.1. Сіз Persona-ға беретін деректер',
            subheadings: [
              {
                title: 'Тіркеу',
                text: 'Тіркелгі жасау үшін сіз сұралған деректерді ұсынуыңыз керек: аты-жөніңіз, электрондық пошта мекенжайыңыз және/немесе мобильді телефон нөміріңіз, негізгі аймағыңыз және құпия сөзіңіз.',
              },
              {
                title: 'Профиль',
                text: 'Сіз профиліңіздегі ақпаратты таңдай аласыз, мысалы, білімі, жұмыс тәжірибесі, дағдылары, фотосуреті, қаласы немесе ауданы. Жеке деректерді шектелген адамдарға ғана арналған профиліңізде жарияламаңыз.',
              },
              {
                title: 'Орналастыру және жүктеу',
                text: 'Persona қызметтерді пайдалану барысында сіз ұсынған, орналастырған немесе жүктеген жеке деректеріңізді жинайды.',
              },
            ],
            paragraphs: [],
          },
          {
            id: '1.2',
            heading: '1.2. Басқа қатысушылардан алынған деректер',
            subheadings: [
              {
                title: 'Контент және жаңалықтар',
                text: 'Сіз және басқа қатысушылар Қызметтерді пайдалану барысында Persona-да сіз туралы ақпаратты қамтитын контент орналастыра аласыздар.',
              },
              {
                title: 'Мекенжай кітабы мен күнтізбеден алынған ақпарат',
                text: 'Persona басқа қатысушылар күнтізбелерін Persona қызметтерімен синхрондаған кезде сіз туралы жеке деректерді алады.',
              },
              {
                title: 'Серіктестер',
                text: 'Persona сіз жұмыс берушілер сияқты клиенттер мен серіктестердің қызметтерін пайдаланған кезде жеке деректеріңізді алады.',
              },
            ],
            paragraphs: [],
          },
          {
            id: '1.3',
            heading: '1.3. Қызметтерді пайдалану',
            paragraphs: [
              'Persona мобильді қосымшаларды қоса алғанда Persona қызметтерін пайдалану журналын жүргізеді.',
            ],
          },
          {
            id: '1.4',
            heading: '1.4. Куки файлдары және ұқсас технологиялар',
            paragraphs: [
              'Persona куки файлдары және ұқсас технологиялар арқылы деректер жинайды.',
            ],
          },
          {
            id: '1.5',
            heading: '1.5. Сіздің құрылғыңыз және орналасқан жеріңіз',
            paragraphs: [
              'Persona куки файлдары мен ұқсас технологиялар арқылы деректер алады. Мобильді құрылғыдан пайдаланған кезде құрылғы орналасқан жер туралы ақпарат жібереді.',
            ],
          },
          {
            id: '1.6',
            heading: '1.6. Хабарламалар',
            paragraphs: [
              'Егер сіз Қызметтер арқылы қарым-қатынас жасасаңыз, бұл Persona-ға белгілі болады.',
            ],
          },
          {
            id: '1.7',
            heading: '1.7. Жұмыс орындары мен оқу орындарынан келетін ақпарат',
            paragraphs: [
              'Ұйымыңыз сіз үшін Premium қызметін сатып алған кезде, ол Persona-ға сіз туралы ақпарат береді.',
            ],
          },
          {
            id: '1.8',
            heading: '1.8. Үшінші тарап веб-сайттары мен қызметтері',
            paragraphs: [
              'Persona Persona жарнамалары, куки файлдары немесе плагиндері бар веб-сайттарға кірген кезде деректер алады.',
            ],
          },
          {
            id: '1.9',
            heading: '1.9. Басқа',
            paragraphs: [
              'Persona өз қызметтерінің сапасын үнемі жақсартады, бұл уақыт өте келе деректерді пайдаланудың жаңа тәсілдерін жасауды білдіреді.',
            ],
          },
        ],
      },
      {
        id: '2',
        heading: '2. Persona деректеріңізді қалай пайдаланады',
        paragraphs: [
          'Persona деректеріңізді Persona қызметтерін ұсыну, қолдау, жекелендіру және дамыту үшін пайдаланады.',
        ],
        subsections: [
          { id: '2.1', heading: '2.1. Қызметтер', paragraphs: ['Persona қызметтері басқа қатысушылармен байланысуға, жұмыс орындары мен іскерлік мүмкіндіктерді табуға мүмкіндік береді.'] },
          { id: '2.3', heading: '2.3. Байланыс құралдары', paragraphs: ['Persona сізбен байланысады және Қатысушылар арасында хабарлама алмасу функциясын жүзеге асырады.'] },
          { id: '2.4', heading: '2.4. Жарнама', paragraphs: ['Persona Persona қызметтері шеңберінде де, одан тысқары да жекелендірілген жарнаманы көрсетеді.'] },
          { id: '2.5', heading: '2.5. Маркетинг', paragraphs: ['Persona өз қызметтерін сізге және басқа қатысушыларға жылжытады.'] },
          { id: '2.6', heading: '2.6. Қызметтерді дамыту және зерттеу', paragraphs: ['Persona қызметтерді жетілдіру мақсатында зерттеу жүргізу үшін деректерді пайдаланады.'] },
          { id: '2.7', heading: '2.7. Қолдау қызметі', paragraphs: ['Persona сізге көмектесу және мәселелерді шешу үшін деректерді пайдаланады.'] },
          { id: '2.8', heading: '2.8. Сізді анықтауға мүмкіндік бермейтін статистика', paragraphs: ['Persona сізді анықтауға мүмкіндік бермейтін статистика жасау үшін деректерді пайдаланады.'] },
          { id: '2.9', heading: '2.9. Қауіпсіздік және тергеу', paragraphs: ['Persona қауіпсіздікті қамтамасыз ету, алаяқтықтың алдын алу және тергеу жүргізу мақсатында деректерді пайдаланады.'] },
        ],
      },
      {
        id: '3',
        heading: '3. Persona ақпаратты тарату',
        subsections: [
          { id: '3.1', heading: '3.1. Persona қызметтері', paragraphs: ['Профиліңізде көрсеткен кез келген деректер, сондай-ақ орналастырған кез келген контент немесе әлеуметтік іс-қимылыңыз параметрлеріңізге сәйкес басқа пайдаланушыларға қолжетімді болады.'] },
          { id: '3.2', heading: '3.2. Мұрағатталған хабарламалар', paragraphs: ['Бақылауға жататын Қатысушыларға Persona қызметтерінен тыс хат алмасуды сақтау талап етілуі мүмкін.'] },
          { id: '3.3', heading: '3.3. Үшінші тарап қызметтері', paragraphs: ['Сіз тіркелгіңізді үшінші тарап қызметтерімен байланыстыра аласыз. Олар профиліңізді қарай алуы мүмкін.'] },
          { id: '3.4', heading: '3.4. Байланысты қызметтер', paragraphs: ['Persona деректеріңізді әр түрлі Persona қызметтері шеңберінде және Persona филиалдарымен бөліседі.'] },
          { id: '3.5', heading: '3.5. Қызмет көрсетушілер', paragraphs: ['Persona қызметтерді көрсету үшін үшінші тараптарды тарта алады.'] },
          { id: '3.6', heading: '3.6. Заң шеңберінде ақпаратты жария ету', paragraphs: ['Persona заң талап еткен жағдайда немесе сіздің құқықтарыңыз бен қауіпсіздігіңізді қорғау үшін деректеріңізбен бөлісуге міндетті болуы мүмкін.'] },
          { id: '3.7', heading: '3.7. Бақылауды өзгерту немесе сату', paragraphs: ['Persona бизнесін үшінші тараптарға сатқан жағдайда деректеріңізді бере алады, бірақ оларды пайдалану осы Саясатпен реттеле береді.'] },
        ],
      },
      {
        id: '4',
        heading: '4. Сіздің құқықтарыңыз бен міндеттеріңіз',
        subsections: [
          { id: '4.1', heading: '4.1. Деректерді сақтау', paragraphs: ['Persona жеке деректеріңіздің көп бөлігін тіркелгіңіз ашық болған кезге дейін сақтайды.'] },
          {
            id: '4.2',
            heading: '4.2. Жеке деректерге қол жеткізу және оларды басқару құқығы',
            paragraphs: ['Жеке деректеріңізді қарай немесе жоя аласыз.'],
            list: [
              'Деректерді жою. Барлық немесе кейбір жеке деректеріңізді жоюды немесе жоюды сұрауыңызға болады.',
              'Деректерді өзгерту немесе түзету. Кейбір жеке деректеріңізді өзгертуіңізге болады.',
              'Деректерді пайдалануға тосқауыл қою немесе шектеу. Барлық немесе кейбір жеке деректеріңізді пайдалануды тоқтатуды сұрауыңызға болады.',
              'Жеке деректерге қол жеткізу құқығы. Жеке деректеріңіздің көшірмесін беруді сұрауыңызға болады.',
            ],
            listStyle: 'disc',
          },
          { id: '4.3', heading: '4.3. Тіркелгіні жабу', paragraphs: ['Persona тіркелгіні жапқаннан кейін де кейбір деректеріңізді сақтайды.'] },
        ],
      },
      {
        id: '5',
        heading: '5. Басқа маңызды ақпарат',
        subsections: [
          { id: '5.1', heading: '5.1. Қауіпсіздік', paragraphs: ['Persona қауіпсіздік осалдықтарын бақылайды және уақтылы жоюға тырысады.', 'Persona деректеріңізді қорғауға бағытталған қауіпсіздік шараларын, атап айтқанда HTTPS протоколын жүзеге асырады.'] },
          { id: '5.2', heading: '5.2. Деректерді трансшекаралық беру', paragraphs: ['Persona деректеріңізді тұрғылықты еліңіздің шегінен тыс жерде сақтайды және пайдаланады.'] },
          { id: '5.3', heading: '5.3. Өңдеудің заңды негіздері', paragraphs: ['Persona-да сіз туралы деректерді жинауға, пайдалануға және беруге заңды негіздер бар.', 'Persona жеке деректеріңізді заңды негіздер болған кезде жинайды және өңдейді: келісім, шарт және «заңды мүдделер».'] },
          { id: '5.4', heading: '5.4. Тікелей маркетинг және «бақыламау» сигналдары', paragraphs: ['Persona тікелей маркетингке қатысты мәлімдемесі.', 'Қазіргі уақытта Persona жеке деректерді тікелей маркетинг мақсатында үшінші тараптарға рұқсатыңызсыз бермейді.'] },
          { id: '5.5', heading: '5.5. Байланыс деректері', paragraphs: ['Бізбен байланысуыңызға немесе басқа шағымдарды шешу нұсқаларын пайдалануыңызға болады.', 'Осы Саясатқа қатысты барлық сұрақтар мен шағымдарды Persona сайты арқылы немесе DPO@Persona.com мекенжайына жіберіңіз.'] },
        ],
      },
    ],
  },

  en: {
    title: 'Privacy Policy',
    intro: {
      heading: 'Introduction',
      paragraphs: [
        'Persona is a professional social network for specialists across various industries and an online platform for professional communication and business networking. People use Persona Services to find and discover business opportunities, connect with others, and access information. Persona\'s Privacy Policy applies to all Members and Visitors using Persona Services.',
        'Registered users ("Members") use our network to share information about their professional activities, interact with other Members, exchange knowledge and experience, post and view relevant content, acquire knowledge, develop skills, and find opportunities for business and career development. Within certain Persona services, content and data are also accessible to non-Members ("Visitors").',
      ],
    },
    services: {
      heading: 'Services',
      paragraphs: [
        'This Privacy Policy, which includes Persona\'s Cookie Policy, applies when you use Persona\'s Services.',
        'This Privacy Policy applies to Persona.com, Persona\'s branded applications, and other Persona-branded websites, apps, communications, and services offered by Persona ("Services"), including off-site Services, but excluding services that state they are offered under a different privacy policy.',
      ],
    },
    sections: [
      {
        id: '1',
        heading: '1. Data Collected by Persona',
        subsections: [
          {
            id: '1.1',
            heading: '1.1. Data You Provide to Persona',
            subheadings: [
              { title: 'Registration', text: 'To create an account, you must provide certain data including your name, email address and/or mobile number, primary region (e.g., city), and a password. If you register for Premium Services, you will need to provide payment details.' },
              { title: 'Profile', text: 'You may choose information to include in your profile, such as education, work experience, skills, photo, city or area, endorsements, and optional profile verifications. Do not post or add personal data to your profile that is intended for a limited audience.' },
              { title: 'Posting and Uploading', text: 'Persona collects personal data from you when you provide, post or upload it while using our Services, such as when you fill out a form, participate in a survey, or apply for a job.' },
            ],
            paragraphs: [],
          },
          {
            id: '1.2',
            heading: '1.2. Data From Others',
            subheadings: [
              { title: 'Content and News', text: 'You and others may post content on our Services that includes information about you. Persona may also collect publicly available information about you, including industry news and achievements.' },
              { title: 'Address Book and Calendar Information', text: 'Persona receives personal data about you when others import or sync their calendar with Persona Services, connect their contacts to Member profiles, or send messages using Persona Services.' },
              { title: 'Partners', text: 'Persona receives your personal data when you use the services of Persona\'s clients and partners, such as employers.' },
            ],
            paragraphs: [],
          },
          { id: '1.3', heading: '1.3. Service Use', paragraphs: ['Persona logs your visits and use of Persona Services, including mobile apps.', 'Persona tracks usage data when you visit or otherwise use our Services, including when you view or click on content or ads, perform searches, or install/update a Persona mobile app.'] },
          { id: '1.4', heading: '1.4. Cookies and Similar Technologies', paragraphs: ['Persona collects data through cookies and similar technologies.', 'Persona uses cookies and similar technologies (e.g., pixels and ad tags) to collect data (e.g., device IDs) to recognize you and your device(s) on and off our Services.'] },
          { id: '1.5', heading: '1.5. Your Device and Location', paragraphs: ['When you visit or leave our Services, Persona receives the URL of both the site you came from and the one you go to. When you use a mobile device, it sends Persona data about your location based on your phone settings.'] },
          { id: '1.6', heading: '1.6. Messages', paragraphs: ['If you communicate through our Services, Persona learns about that.', 'We collect information about you when you send, receive, or engage with messages in connection with our Services. We also use automated systems to support and protect our site.'] },
          { id: '1.7', heading: '1.7. Workplace and School Information', paragraphs: ['When your organization purchases a Premium Service for you, it provides Persona with data about you.'] },
          { id: '1.8', heading: '1.8. Third-Party Sites and Services', paragraphs: ['Persona receives data when you visit sites that include Persona\'s ads, cookies or plugins, or when you log into third-party services using your Persona account.'] },
          { id: '1.9', heading: '1.9. Other', paragraphs: ['Persona is constantly improving its Services. This means Persona gets new data and creates new ways to use data over time.'] },
        ],
      },
      {
        id: '2',
        heading: '2. How Persona Uses Your Data',
        paragraphs: ['Persona uses your data to provide, support, personalize and develop our Services. How Persona uses your data depends on which Services you use, how you use those Services and the choices you make in your settings.'],
        subsections: [
          { id: '2.1', heading: '2.1. Services', paragraphs: ['Persona Services allow you to stay connected with colleagues, partners, clients and other professional contacts, and to discover opportunities.'] },
          { id: '2.3', heading: '2.3. Communications', paragraphs: ['Persona contacts you and enables messaging between Members. Persona will contact you through email, mobile phone, notices posted on our websites or apps, and other ways through our Services.'] },
          { id: '2.4', heading: '2.4. Advertising', paragraphs: ['Persona shows you personalized ads both on and off Persona Services. Persona offers you choices regarding personalized ads, but you cannot opt out of seeing non-personalized ads.'] },
          { id: '2.5', heading: '2.5. Marketing', paragraphs: ['Persona promotes its Services to you and others. In addition to advertising our Services, Persona uses Members\' data and content to send invitations and communications promoting engagement.'] },
          { id: '2.6', heading: '2.6. Service Development and Research', paragraphs: ['Persona uses data to develop and improve our Services.', 'Persona aims to create economic opportunity for the global workforce. Persona uses available personal data to research social and economic trends.'] },
          { id: '2.7', heading: '2.7. Customer Support', paragraphs: ['Persona uses data to help you and fix problems. Persona uses data to investigate, respond to and resolve complaints and issues with the Services.'] },
          { id: '2.8', heading: '2.8. Aggregate Insights', paragraphs: ['Persona uses data to generate aggregate insights that do not identify you personally.'] },
          { id: '2.9', heading: '2.9. Security and Investigations', paragraphs: ['Persona uses data for security purposes, fraud prevention, and investigations.'] },
        ],
      },
      {
        id: '3',
        heading: '3. How Persona Shares Information',
        subsections: [
          { id: '3.1', heading: '3.1. Persona Services', paragraphs: ['Any data you include on your profile and any content you post or social action you take on Persona Services will be visible to others consistent with your settings.'] },
          { id: '3.2', heading: '3.2. Archived Messages', paragraphs: ['Regulated Members may be required to store communications outside of Persona Services.'] },
          { id: '3.3', heading: '3.3. Third-Party Services', paragraphs: ['You may link your account with third-party services so that they can look up your contacts\' profiles. Depending on your settings, third-party services may be able to see your profile.'] },
          { id: '3.4', heading: '3.4. Related Services', paragraphs: ['Persona shares your data across different Persona Services and with Persona Affiliates.'] },
          { id: '3.5', heading: '3.5. Service Providers', paragraphs: ['Persona may use third parties to help provide our Services for maintenance, analytics, auditing, payments, fraud detection, marketing, and development.'] },
          { id: '3.6', heading: '3.6. Legal Disclosures', paragraphs: ['Persona may need to share your data when we believe it is required by law or to protect the rights and safety of you, Persona, or others.'] },
          { id: '3.7', heading: '3.7. Change in Control or Sale', paragraphs: ['Persona may share your data if Persona is sold to third parties, under the condition that use of your data will remain subject to this Privacy Policy.'] },
        ],
      },
      {
        id: '4',
        heading: '4. Your Rights and Obligations',
        subsections: [
          { id: '4.1', heading: '4.1. Data Retention', paragraphs: ['Persona retains most of your personal data for as long as your account remains open.'] },
          {
            id: '4.2',
            heading: '4.2. Rights to Access and Control Your Personal Data',
            paragraphs: ['You can view or delete your personal data.'],
            list: [
              'Delete Data. You can ask us to erase or delete all or some of your personal data.',
              'Change or Correct Data. You can edit some of your personal data through your account.',
              'Object to or Limit Use of Data. You can ask us to stop using all or some of your personal data.',
              'Right to Access or Port Data. You can ask us for a copy of your personal data in a machine-readable form.',
            ],
            listStyle: 'disc',
          },
          { id: '4.3', heading: '4.3. Account Closure', paragraphs: ['Persona retains some of your data even after you close your account.', 'If you choose to close your Persona account, your personal data will generally stop being visible to others on our Services within 24 hours.'] },
        ],
      },
      {
        id: '5',
        heading: '5. Other Important Information',
        subsections: [
          { id: '5.1', heading: '5.1. Security', paragraphs: ['Persona monitors for and tries to prevent security vulnerabilities. Use the security features available through Persona Services.', 'Persona implements security measures designed to protect your data, including HTTPS. Persona regularly monitors its systems for possible vulnerabilities and attacks.'] },
          { id: '5.2', heading: '5.2. Cross-Border Data Transfers', paragraphs: ['Persona stores and uses your data outside your home country.', 'Persona processes data both inside and outside of the United States and relies on legally provided mechanisms to lawfully transfer data across borders.'] },
          { id: '5.3', heading: '5.3. Lawful Bases for Processing', paragraphs: ['Persona has lawful bases to collect, use, and share data about you. You have choices about how Persona uses your data.', 'Persona collects and processes personal data about you where we have lawful bases for doing so. Lawful bases include consent, contract, and "legitimate interests".'] },
          { id: '5.4', heading: '5.4. Direct Marketing and Do Not Track Signals', paragraphs: ['Persona\'s statement on direct marketing and "do not track" signals.', 'Persona does not currently share personal data with third parties for their direct marketing purposes without your permission.'] },
          { id: '5.5', heading: '5.5. Contact Information', paragraphs: ['You can contact us or use other options to resolve any complaints.', 'Questions or complaints regarding this Policy should be sent to Persona via our site or by mail to DPO@Persona.com.'] },
        ],
      },
    ],
  },
}