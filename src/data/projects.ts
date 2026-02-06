import type { Project, ProjectCategory } from '../types';

// Import images from sorted folder using new URL() syntax
const alfaYouth1 = new URL('../assets/sorted/Подписка нового поколения Alfa Youth 1.png', import.meta.url).href;
const alfaYouth2 = new URL('../assets/sorted/Подписка нового поколения Alfa Youth 2.png', import.meta.url).href;
const alfaYouth3 = new URL('../assets/sorted/Подписка нового поколения Alfa Youth 3.png', import.meta.url).href;
const alfaYouth4 = new URL('../assets/sorted/Подписка нового поколения Alfa Youth 4.png', import.meta.url).href;

const friendlyIdentityImage = new URL('../assets/sorted/Айдентика Friendly Tg Mini App.png', import.meta.url).href;
const friendlyMiniApp = new URL('../assets/sorted/Friendly Telegram Mini App.png', import.meta.url).href;
const friendlyItmo1 = new URL('../assets/sorted/Friendly Telegram  Mini App для ИТМО 1.png', import.meta.url).href;
const friendlyItmo2 = new URL('../assets/sorted/Friendly Telegram  Mini App для ИТМО 2.png', import.meta.url).href;
const friendlyItmo3 = new URL('../assets/sorted/Friendly Telegram  Mini App для ИТМО 3.png', import.meta.url).href;
const friendlyItmo4 = new URL('../assets/sorted/Friendly Telegram  Mini App для ИТМО 4.png', import.meta.url).href;

const marketplace = new URL('../assets/sorted/Корпоративный маркетплейс.png', import.meta.url).href;
const marketplace1 = new URL('../assets/sorted/Корпоративный маркетплейс 1.png', import.meta.url).href;
const marketplace2 = new URL('../assets/sorted/Корпоративный маркетплейс 2.png', import.meta.url).href;
const ndaImage = new URL('../assets/sorted/NDA.png', import.meta.url).href;

const caratRedesign1 = new URL('../assets/sorted/Редизайн главной страницы мебельной фабрики Carat 1.png', import.meta.url).href;
const caratRedesign2 = new URL('../assets/sorted/Редизайн главной страницы мебельной фабрики Carat 2.png', import.meta.url).href;
const caratRedesign3 = new URL('../assets/sorted/Редизайн главной страницы мебельной фабрики Carat 3.png', import.meta.url).href;
const caratRedesignSite = new URL('../assets/sorted/Редизайн главной страницы сайта мебельной фабрики Carat.png', import.meta.url).href;
const caratDarkPhone = new URL('../assets/sorted/Редизайн главной страницы мебельной фабрики Carat.png', import.meta.url).href;
const visitkaCarat = new URL('../assets/sorted/Визитка для раздачи салонов.png', import.meta.url).href;
const topCategories = new URL('../assets/sorted/Топ категории диванов популярныз коллекций.png', import.meta.url).href;

const pandaGifts1 = new URL('../assets/sorted/Точечные лендинги под ЦА для PandaGifts 1.png', import.meta.url).href;
const pandaGifts2 = new URL('../assets/sorted/Точечные лендинги под ЦА для PandaGifts 2.png', import.meta.url).href;
const pandaGifts3 = new URL('../assets/sorted/Точечные лендинги под ЦА для PandaGifts 3.png', import.meta.url).href;
const pandaAccentContent = new URL('../assets/sorted/Акцент на коннтент в блоке кесов.png', import.meta.url).href;
const pandaAccentColors = new URL('../assets/sorted/Добавила цветовые акценты на блоки с важной информацией.png', import.meta.url).href;

const greenAppFull = new URL('../assets/sorted/ПО для определения характеристик состояния зелёных насаждений города по фотографиям.png', import.meta.url).href;
const greenAppFull1 = new URL('../assets/sorted/ПО для определения характеристик состояния зелёных насаждений города по фотографиям 1.png', import.meta.url).href;
const greenAppFull2 = new URL('../assets/sorted/ПО для определения характеристик состояния зелёных насаждений города по фотографиям 2.png', import.meta.url).href;
const llmAssistant = new URL('../assets/sorted/LLM-ассистент вопросы, подсказки и навигация.png', import.meta.url).href;
const recommendationsGreen = new URL('../assets/sorted/Рекомендации ИИ оценивает риск по состоянию дерева. Выдаёт конкретное действие — обрезка, подпорка или вызов специалиста.png', import.meta.url).href;
const agrospectorCard = new URL('../assets/sorted/AgroSpector - умный помощник садовода.png', import.meta.url).href;

const alfaIdentity = new URL('../assets/sorted/Айдентика сервиса молодежной подписки Альфа Банка.png', import.meta.url).href;

const tonPlatform = new URL('../assets/sorted/TON platform.png', import.meta.url).href;
const vkArVr = new URL('../assets/sorted/Посты для группы Вконтакте с тематикой ARVR.png', import.meta.url).href;
const iosChallenge = new URL('../assets/sorted/iOS Challenge.png', import.meta.url).href;
const web3Image = new URL('../assets/sorted/Web3.png', import.meta.url).href;
const blank = new URL('../assets/sorted/blank.png', import.meta.url).href;
const underwriterImage = new URL('../assets/sorted/Цифровой помощник  для андеррайтеров в зеленом финтехе.png', import.meta.url).href;
const microservices1 = new URL('../assets/sorted/Микросервисы Цифровой помощник в кредитном процессе для СБЕРа 1.png', import.meta.url).href;
const microservices2 = new URL('../assets/sorted/Микросервисы Цифровой помощник в кредитном процессе для СБЕРа 2.png', import.meta.url).href;
const microservices3 = new URL('../assets/sorted/Микросервисы Цифровой помощник в кредитном процессе для СБЕРа 3.png', import.meta.url).href;
const microservices4 = new URL('../assets/sorted/Микросервисы Цифровой помощник в кредитном процессе для СБЕРа 4.png', import.meta.url).href;
const microservices5 = new URL('../assets/sorted/Микросервисы Цифровой помощник в кредитном процессе для СБЕРа 5.png', import.meta.url).href;

export const projects: Project[] = [
  // Fintech
  {
    id: 'alfa-youth',
    title: 'Подписка нового поколения Alfa Youth',
    category: 'Fintech',
    thumbnailUrl: alfaYouth1,
    shortDescription: 'Alfa Youth - уникальная подписка для молодежи, которую каждый пользователь может настроить под себя',
    client: '@creator_aa',
    year: '2024',
    role: 'Product Designer',
    fullDescription: 'Alfa Youth - уникальная подписка для молодежи, которую каждый пользователь может настроить под себя. На сайте или в приложении Альфа Банка пользователю будет доступен онлайн ассистент, который поможет определить набор оптимальных сервисов.',
    coverImage: alfaYouth1,
    content: [
      {
        type: 'text',
        content: {
          text: 'Разработанная подписка Alfa Youth закрывает все потребности ЦА: от финансовых привилегий до дополнительных сервисов по управлению финансами и бонусов от партнеров.',
          align: 'center',
        },
      },
      {
        type: 'image',
        content: {
          src: alfaYouth2,
          alt: 'JTBD — этапы: Узнал о сервисе, Изучает отзывы, Зашел на сервис, Заказал продукт',
        },
      },
      {
        type: 'text',
        content: {
          text: 'Альфа Дейтинг — возможность в привычном формате «свайпов» из дейтинг-приложений знакомиться с ровесниками на основе категорий кешбэка, любимых мест и интересов',
          align: 'left',
        },
      },
      {
        type: 'image',
        content: {
          src: alfaYouth3,
          alt: 'Альфа Дейтинг — три экрана: главная, Мои потсы, Мои награды и партнеры',
        },
      },
      {
        type: 'text',
        content: {
          text: 'Альфа потсы — деньги на счету можно распределять в потсы (копилки) и копить на нужные цели самостоятельно или вместе с близкими. Потсы можно кастомизировать, менять фоны, управлять доступом',
          align: 'left',
        },
      },
      {
        type: 'image',
        content: {
          src: alfaYouth4,
          alt: 'Альфа Челленджи — экраны приложения',
        },
      },
    ],
  },
  {
    id: 'ton-platform',
    title: 'TON platform',
    category: 'Fintech',
    thumbnailUrl: tonPlatform,
    shortDescription: 'Дизайн платформы для TON экосистемы',
    client: '@creator_aa',
    year: '2024',
    role: 'Product Designer',
    content: [
      {
        type: 'image',
        content: {
          src: tonPlatform,
          alt: 'TON Platform',
        },
      },
    ],
  },
  {
    id: 'underwriter-service',
    title: 'Микросервисы: Цифровой помощник в кредитном процессе для СБЕРА',
    category: 'Fintech',
    thumbnailUrl: underwriterImage,
    shortDescription: 'Задача: интегрировать цифрового помощника в процесс обработки кредитных заявок, попавших на ручное рассмотрение, и оптимизировать процесс, сократив время обработки одной заявки.',
    client: '@creator_aa',
    year: '2024',
    role: 'Product Designer',
    fullDescription: 'Задача: интегрировать цифрового помощника в процесс обработки кредитных заявок, попавших на ручное рассмотрение, и оптимизировать процесс, сократив время обработки одной заявки.',
    coverImage: microservices1,
    content: [
      {
        type: 'text',
        content: {
          text: 'Мы с командой разработали минимальный жизнеспособный вариант веб-приложения, сфокусированный на backend-части (разработка микросервисов, обеспечивающих получение, обработку и хранение информации по заявке, взаимодействие с ассистентом) и frontend (создание пользовательского интерфейса для визуализации и ввода информации). Мы добавили новые навыки для цифрового ассистента из семейства Салют, что позволило создать полноценный рабочий инструмент под задачу андеррайтера.',
          align: 'left',
        },
      },
      {
        type: 'gallery',
        content: {
          images: [
            { src: microservices2, alt: 'Интерфейс заявки с возможностью вызова помощника' },
            { src: microservices3, alt: 'Чат с ассистентом и быстрые подсказки' },
          ],
          columns: 2,
        },
      },
      {
        type: 'two-columns',
        content: {
          left: {
            type: 'text',
            content: {
              text: 'Интерфейс заявки с возможностью вызова помощника',
            },
          },
          right: {
            type: 'text',
            content: {
              text: 'Чат с ассистентом и быстрые подсказки',
            },
          },
        },
      },
      {
        type: 'two-columns',
        content: {
          left: {
            type: 'image',
            content: {
              src: microservices4,
              alt: 'Пакет документов',
            },
          },
          right: {
            type: 'image',
            content: {
              src: microservices5,
              alt: 'Процент одобрения заявки цифровым помощником',
            },
          },
        },
      },
      {
        type: 'two-columns',
        content: {
          left: {
            type: 'text',
            content: {
              text: '',
            },
          },
          right: {
            type: 'text',
            content: {
              text: 'Процент одобрения заявки цифровым помощником, который помогает андеррайтеру принять решение',
              align: 'center',
            },
          },
        },
      },
    ],
  },

  // Mobile
  {
    id: 'friendly-telegram',
    title: 'Friendly Telegram Mini App для ИТМО',
    category: 'Mobile',
    thumbnailUrl: friendlyMiniApp,
    shortDescription: 'Friendly — Telegram Mini App для студентов. Находи людей по интересам, вайбу и целям',
    client: '@creator_aa',
    year: '2024',
    role: 'Product Designer',
    fullDescription: 'Friendly — Telegram Mini App для студентов. Находи людей по интересам, вайбу и целям. Вместо свайпов — персональные рекомендации. Для дружбы, учебы, тусовок, нетворкинга и отношений.',
    content: [
      {
        type: 'image',
        content: {
          src: friendlyItmo1,
          alt: 'Friendly ITMO — профили',
        },
      },
      {
        type: 'text',
        content: {
          text: 'Вместо свайпов — персональные рекомендации. Для дружбы, учебы, тусовок, нетворкинга и отношений. Начать разговор без неловкости — общие темы в чате',
          align: 'left',
        },
      },
      {
        type: 'image',
        content: {
          src: friendlyItmo2,
          alt: 'Friendly ITMO — выбор интересов',
        },
      },
      {
        type: 'two-columns',
        content: {
          left: {
            type: 'text',
            content: {
              text: '26,5% имеют трудности во взаимоотношениях со сверстниками.',
            },
          },
          right: {
            type: 'text',
            content: {
              text: '47% студентов вовлечено во внеучебную деятельность',
            },
          },
        },
      },
      {
        type: 'image',
        content: {
          src: friendlyItmo3,
          alt: 'Friendly ITMO — анализ рынка',
        },
      },
      {
        type: 'text',
        content: {
          text: 'Сегодня Gen Z всего ~2% рынка. Потенциал студ. сегмента → $3M. Реалистичный сценарий 10-15% → $0,3-0,5М. Оптимистичный 25% → $0.8M',
          align: 'left',
        },
      },
      {
        type: 'two-columns',
        content: {
          left: {
            type: 'text',
            content: {
              text: 'Рекомендательная лента на основе общих интересов → качественные знакомства.',
            },
          },
          right: {
            type: 'text',
            content: {
              text: 'Темы для разговора прямо в чате → не страшно написать первым',
            },
          },
        },
      },
      {
        type: 'image',
        content: {
          src: friendlyItmo4,
          alt: 'Friendly ITMO — профиль и логотип',
        },
      },
    ],
  },
  {
    id: 'corporate-marketplace',
    title: 'Корпоративный маркетплейс',
    category: 'Mobile',
    thumbnailUrl: marketplace,
    shortDescription: 'Первый корпоративный маркетплейс для сотрудников компании с программой лояльности',
    client: '@creator_aa',
    year: '2024',
    role: 'Product Designer',
    fullDescription: 'Первый корпоративный маркетплейс для сотрудников компании с программой лояльности. Простая механика + эффективный инструмент для HR в одном сервисе',
    content: [
      {
        type: 'image',
        content: {
          src: marketplace1,
          alt: 'Корпоративный маркетплейс — мобильное приложение',
        },
      },
      {
        type: 'text',
        content: {
          text: 'Привычная механика работы, так же, как у Ozon, Яндекс Маркета, Wildberries, как для мобильного приложения, так и для селлерского кабинета',
        },
      },
      {
        type: 'image',
        content: {
          src: marketplace2,
          alt: 'Корпоративный маркетплейс — селлерский кабинет',
        },
      },
      {
        type: 'two-columns',
        content: {
          left: {
            type: 'text',
            content: {
              text: '>5 маркетплейсов проанализировала для выбора наиболее удобного UX и необходимого функционала, подготовила графические материалы, айдентику, провела полное исследование рынка (в т.ч. селлеры и одиночные продавцы). Разработала дизайн и прототип мобильного приложения для разного типа доступов (пользователь и сотрудник)',
            },
          },
          right: {
            type: 'text',
            content: {
              text: '2 селлерских кабинета разобрала по экранам и описала user-flow + новые сценарии, которые отличают наш сервис от конкурентов. Подготовила дизайн и прототип селлерского кабинета',
            },
          },
        },
      },
      {
        type: 'image',
        content: {
          src: ndaImage,
          alt: 'NDA — конфиденциальная часть проекта',
        },
      },
    ],
  },
  {
    id: 'green-analysis',
    title: 'ПО для определения характеристик состояния зелёных насаждений города',
    category: 'Mobile',
    thumbnailUrl: greenAppFull,
    shortDescription: 'Создала с 0 дизайн мобильного приложения для загрузки изображений зелёных насаждений и мгновенного анализа их состояния с помощью ИИ',
    client: '@creator_aa',
    year: '2024',
    role: 'Product Designer',
    fullDescription: 'Создала с 0 дизайн мобильного приложения для загрузки изображений зелёных насаждений и мгновенного анализа их состояния с помощью ИИ. Система автоматически определяет вид растения, выявляет болезни и дефекты, формирует перечетные ведомости и наглядные графики',
    content: [
      {
        type: 'image',
        content: {
          src: greenAppFull1,
          alt: 'Создание заявки, Результаты анализа, Все заявки',
        },
      },
      {
        type: 'two-columns',
        content: {
          left: {
            type: 'text',
            content: {
              title: 'Функции приложения',
              text: '',
            },
          },
          right: {
            type: 'text',
            content: {
              text: '• Создание заявок: пользователь может быстро создать заявку, загрузив изображение.\n\n• Анализ изображений с помощью ИИ: алгоритмы машинного обучения и компьютерного зрения анализируют загруженное изображение менее чем за 5 секунд.\n\n• Формирование перечётной ведомости: возможность выгрузить ведомость в формат Excel с подробной информацией о каждом растении — вид, состояние, выявленные дефекты и др.\n\n• Графики: приложение предоставляет визуальные графики с ключевыми метриками состояния зелёных насаждений; позволяют быстро оценить общую ситуацию, выявить проблемные зоны и принять необходимые меры.\n\n• Архив обработанных заявок: все ранее обработанные заявки сохраняются в архиве; пользователи могут в любой момент просмотреть историю заявок, повторно ознакомиться с результатами анализа и перечётными ведомостями.',
            },
          },
        },
      },
      {
        type: 'image',
        content: {
          src: greenAppFull2,
          alt: 'Карта заявок, профиль пользователя, реестр',
        },
      },
      {
        type: 'two-columns',
        content: {
          left: {
            type: 'text',
            content: {
              text: 'Ни одного конкурента не было на рынке в сфере экологии (дендрологи или экологи не работали с мобильными сервисами в своей работе), ввиду этого я описала UX для приложения с нуля.',
            },
          },
          right: {
            type: 'text',
            content: {
              text: 'Провела анализ существующих веб-платформ с точки зрения UX, собрала основные user flow, подготовила дизайн приложения и проработала экраны с фичами для RoadMap.',
            },
          },
        },
      },
      {
        type: 'gallery',
        content: {
          images: [
            { src: llmAssistant, alt: 'LLM-ассистент: вопросы, подсказки и навигация' },
            { src: recommendationsGreen, alt: 'Рекомендации: ИИ оценивает риск по состоянию дерева' },
          ],
          columns: 2,
        },
      },
      {
        type: 'two-columns',
        content: {
          left: {
            type: 'text',
            content: {
              text: 'LLM-ассистент: вопросы, подсказки и навигация',
            },
          },
          right: {
            type: 'text',
            content: {
              text: 'Рекомендации: ИИ оценивает риск по состоянию дерева. Выдаёт конкретное действие — обрезка, подпорка или вызов специалиста',
            },
          },
        },
      },
    ],
  },
  {
    id: 'agrospector',
    title: 'AgroSpector - умный помощник садовода',
    category: 'Mobile',
    thumbnailUrl: agrospectorCard,
    shortDescription: 'Умный помощник садовода: каталог, распознавание по фото, мой сад',
    client: '@creator_aa',
    year: '2024',
    role: 'Product Designer',
    coverImage: agrospectorCard,
    content: [
      {
        type: 'image',
        content: {
          src: agrospectorCard,
          alt: 'AgroSpector - умный помощник садовода',
        },
      },
    ],
  },
  {
    id: 'ios-challenge',
    title: 'iOS Challenge',
    category: 'Mobile',
    thumbnailUrl: iosChallenge,
    shortDescription: 'Пет-проект: iOS Challenge',
    client: '@creator_aa',
    year: '2024',
    role: 'Product Designer',
    fullDescription: 'Пет-проект: iOS Challenge.',
    coverImage: iosChallenge,
    content: [
      {
        type: 'image',
        content: {
          src: iosChallenge,
          alt: 'iOS Challenge',
        },
      },
    ],
  },

  // Web
  {
    id: 'carat-furniture',
    title: 'Редизайн главной страницы мебельной фабрики Carat',
    category: 'Web',
    thumbnailUrl: caratDarkPhone,
    shortDescription: 'Редизайн главной страницы с акцентом на навигацию, каталог, коллекции и визуальную привлекательность мебельного бренда Carat.',
    client: '@creator_aa',
    year: '2024',
    role: 'Product Designer',
    fullDescription: 'Редизайн главной страницы сайта мебельной фабрики Carat с акцентом на навигацию, каталог, коллекции и визуальную привлекательность бренда. CARAT — мебель для жизни.',
    coverImage: caratDarkPhone,
    content: [
      {
        type: 'text',
        content: {
          text: 'Я предоставила идеи по улучшению всего сайта, но заказчик решил сделать редизайн только главной страницы. Проработала меню - бургер, добавила живые фото с кейсами и объяснила заказчику, почему и как сделать лучше, показав референсы сайтов крупных мебельных компаний. Предложила варианты, как улучшить конверсию и объяснила, зачем компании хороший сайт - визитка.',
          align: 'left',
        },
      },
      {
        type: 'image',
        content: {
          src: caratRedesign2,
          alt: 'Carat — интерьер',
        },
      },
      {
        type: 'text',
        content: {
          text: 'Дополнительно проработали TOV на главном баннере',
          align: 'left',
        },
      },
      {
        type: 'gallery',
        content: {
          images: [
            { src: visitkaCarat, alt: 'Визитка - раздатка для салонов' },
            { src: topCategories, alt: 'Топ категории диванов из популярных коллекций' },
          ],
          columns: 2,
        },
      },
      {
        type: 'two-columns',
        content: {
          left: {
            type: 'text',
            content: {
              text: 'Визитка - раздатка для салонов',
              align: 'center',
            },
          },
          right: {
            type: 'text',
            content: {
              text: 'Топ категории диванов из популярных коллекций',
              align: 'center',
            },
          },
        },
      },
      {
        type: 'image',
        content: {
          src: caratRedesign3,
          alt: 'Было / Стало',
        },
      },
    ],
  },
  {
    id: 'panda-gifts',
    title: 'Точечные лендинги под ЦА для компании',
    category: 'Web',
    thumbnailUrl: pandaGifts1,
    shortDescription: 'В паре с маркетологом адаптировали активы и ценности компании под нужную ЦА: маркетологов, HR, лидов и директоров',
    client: '@creator_aa',
    year: '2024',
    role: 'Product Designer',
    fullDescription: 'В паре с маркетологом адаптировали активы и ценности компании под нужную ЦА: маркетологов, HR, лидов и директоров. Оформили крупных 8 кейсов, подобрали графические материалы (отсняли контент, отрисовали иконки, подобрали цвета).',
    coverImage: pandaGifts1,
    content: [
      {
        type: 'two-columns',
        content: {
          left: {
            type: 'text',
            content: {
              title: 'Что добавили на лендинг',
              text: '',
            },
          },
          right: {
            type: 'text',
            content: {
              text: '— Ценности компании\n— Виды услуг с кратким описанием\n— Позиционирование\n— Кейсы в портфолио\n— Отличия от конкурентов',
            },
          },
        },
      },
      {
        type: 'image',
        content: {
          src: pandaGifts2,
          alt: 'Коллаж кейсов',
        },
      },
      {
        type: 'two-columns',
        content: {
          left: {
            type: 'text',
            content: {
              text: '>10 сайтов брендинговых агенств и сувенирных компаний проанализировала и выделила наиболее важные блоки',
            },
          },
          right: {
            type: 'text',
            content: {
              text: 'Предложила разработать свой стиль, опираясь на тренды. Определила шрифтовую пару и палитру цветов, а также создала иконки и иллюстрации (ИИ + Figma)',
            },
          },
        },
      },
      {
        type: 'gallery',
        content: {
          images: [
            { src: pandaAccentContent, alt: 'Акцент на контент в блоке кейсов' },
            { src: pandaAccentColors, alt: 'Добавила цветовые акценты на блоки с важной информацией' },
          ],
          columns: 2,
        },
      },
      {
        type: 'two-columns',
        content: {
          left: {
            type: 'text',
            content: {
              text: 'Акцент на контент в блоке кейсов',
              align: 'center',
            },
          },
          right: {
            type: 'text',
            content: {
              text: 'Добавила цветовые акценты на блоки с важной информацией',
              align: 'center',
            },
          },
        },
      },
      {
        type: 'image',
        content: {
          src: pandaGifts3,
          alt: 'Эмпатия и иконки',
        },
      },
    ],
  },
  {
    id: 'web3',
    title: 'Web3.0',
    category: 'Web',
    thumbnailUrl: web3Image,
    shortDescription: 'Пет-проект: Web3.0',
    client: '@creator_aa',
    year: '2024',
    role: 'Product Designer',
    fullDescription: 'Пет-проект: Web3.0.',
    coverImage: web3Image,
    content: [
      {
        type: 'image',
        content: {
          src: web3Image,
          alt: 'Web3.0',
        },
      },
    ],
  },

  // Identity
  {
    id: 'friendly-identity',
    title: 'Айдентика Friendly Tg Mini App',
    category: 'Identity',
    thumbnailUrl: friendlyIdentityImage,
    shortDescription: 'Разработка айдентики для Telegram Mini App',
    linkToProjectId: 'friendly-telegram',
    client: '@creator_aa',
    year: '2024',
    role: 'Product Designer',
    content: [
      {
        type: 'image',
        content: {
          src: friendlyIdentityImage,
          alt: 'Friendly Identity',
        },
      },
    ],
  },
  {
    id: 'metro-presentation',
    title: 'Материалы для презентаций технологий Московского метрополитена',
    category: 'Identity',
    thumbnailUrl: blank,
    shortDescription: 'Презентационные материалы для метрополитена',
    client: '@creator_aa',
    year: '2024',
    role: 'Product Designer',
    content: [
      {
        type: 'image',
        content: {
          src: blank,
          alt: 'Метро презентации',
        },
      },
    ],
  },
  {
    id: 'vk-ar-vr',
    title: 'Посты для группы Вконтакте с тематикой AR/VR',
    category: 'Identity',
    thumbnailUrl: vkArVr,
    shortDescription: 'SMM материалы для VK группы',
    client: '@creator_aa',
    year: '2024',
    role: 'Product Designer',
    content: [
      {
        type: 'image',
        content: {
          src: vkArVr,
          alt: 'Посты для группы Вконтакте с тематикой AR/VR',
        },
      },
    ],
  },
  {
    id: 'alfa-identity',
    title: 'Айдентика сервиса молодежной подписки Альфа Банка',
    category: 'Identity',
    thumbnailUrl: alfaIdentity,
    shortDescription: 'Визуальная айдентика для молодежной подписки',
    client: '@creator_aa',
    year: '2024',
    role: 'Product Designer',
    content: [
      {
        type: 'image',
        content: {
          src: alfaIdentity,
          alt: 'Alfa Identity',
        },
      },
    ],
  },
];

/** Порядок проектов по категориям — как на референсах (data/2–5.png) */
export const CATEGORY_PROJECT_IDS: Record<string, string[]> = {
  fintech: ['alfa-youth', 'underwriter-service', 'ton-platform'],
  mobile: ['alfa-youth', 'friendly-telegram', 'green-analysis', 'corporate-marketplace', 'agrospector'],
  web: ['carat-furniture', 'panda-gifts'],
  identity: ['alfa-identity', 'friendly-identity', 'vk-ar-vr'],
};

export function getProjectById(id: string): Project | undefined {
  return projects.find((p) => p.id === id);
}

export function getProjectsByCategory(category: ProjectCategory): Project[] {
  return projects.filter((p) => p.category === category);
}

export function getProjectsForCategoryPage(categoryId: string): Project[] {
  const ids = CATEGORY_PROJECT_IDS[categoryId];
  if (!ids) return [];
  return ids.map((id) => getProjectById(id)).filter((p): p is Project => p != null);
}

