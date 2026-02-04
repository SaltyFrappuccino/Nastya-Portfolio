import type { Project } from '../types';

// Import images from sorted folder using new URL() syntax
const alfaYouth1 = new URL('../assets/sorted/Подписка нового поколения Alfa Youth 1.png', import.meta.url).href;
const alfaYouth2 = new URL('../assets/sorted/Подписка нового поколения Alfa Youth 2.png', import.meta.url).href;
const alfaYouth3 = new URL('../assets/sorted/Подписка нового поколения Alfa Youth 3.png', import.meta.url).href;
const alfaYouth4 = new URL('../assets/sorted/Подписка нового поколения Alfa Youth 4.png', import.meta.url).href;

const friendlyLogo = new URL('../assets/sorted/Friendly.png', import.meta.url).href;
const friendlyMiniApp = new URL('../assets/sorted/Friendly Telegram Mini App.png', import.meta.url).href;
const friendlyItmo1 = new URL('../assets/sorted/Friendly Telegram  Mini App для ИТМО 1.png', import.meta.url).href;
const friendlyItmo2 = new URL('../assets/sorted/Friendly Telegram  Mini App для ИТМО 2.png', import.meta.url).href;
const friendlyItmo3 = new URL('../assets/sorted/Friendly Telegram  Mini App для ИТМО 3.png', import.meta.url).href;
const friendlyItmo4 = new URL('../assets/sorted/Friendly Telegram  Mini App для ИТМО 4.png', import.meta.url).href;

const marketplace = new URL('../assets/sorted/Корпоративный маркетплейс.png', import.meta.url).href;

const caratCover = new URL('../assets/sorted/Carat.png', import.meta.url).href;
const caratFull = new URL('../assets/sorted/Редизайн главной страницы сайта мебельной фабрики Carat.png', import.meta.url).href;

const pandaGifts = new URL('../assets/sorted/Точечные лендинги компании под ЦА.png', import.meta.url).href;

const greenApp = new URL('../assets/sorted/AgroSpector.png', import.meta.url).href;
const greenAppFull = new URL('../assets/sorted/ПО для определения характеристик состояния зелёных насаждений города по фотографиям.png', import.meta.url).href;
const agrospectorCard = new URL('../assets/sorted/AgroSpector - умный помощник садовода.png', import.meta.url).href;

const alfaIdentity = new URL('../assets/sorted/Айдентика сервиса молодежной подписки Альфа Банка.png', import.meta.url).href;

const mobileGames = new URL('../assets/sorted/Mobile Games and Concepts.png', import.meta.url).href;
const tonPlatform = new URL('../assets/sorted/TON platform.png', import.meta.url).href;
const workAI = new URL('../assets/sorted/Work with AI.png', import.meta.url).href;
const saluteAI = new URL('../assets/sorted/Salute AI.png', import.meta.url).href;
const iosChallenge = new URL('../assets/sorted/iOS Challenge.png', import.meta.url).href;
const blank = new URL('../assets/sorted/blank.png', import.meta.url).href;
const underwriterImage = new URL('../assets/sorted/Цифровой помощник  для андеррайтеров в зеленом финтехе.png', import.meta.url).href;

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
        type: 'image',
        content: {
          src: alfaYouth2,
          alt: 'Customer Journey Map',
        },
      },
      {
        type: 'text',
        content: {
          text: 'Разработанная подписка Alfa Youth закрывает все потребности ЦА: от финансовых привилегий до дополнительных сервисов по управлению финансами и бонусов от партнеров.',
        },
      },
      {
        type: 'text',
        content: {
          title: 'Альфа Дейтинг',
          text: 'Возможность в привычном формате "свайпов" из дейтинг приложений знакомиться с ровесниками на основе категорий кешбэка, любимых мест и интересов',
        },
      },
      {
        type: 'image',
        content: {
          src: alfaYouth3,
          alt: 'Альфа потсы - экраны приложения',
        },
      },
      {
        type: 'text',
        content: {
          title: 'Альфа потсы',
          text: 'Деньги на счету можно распределять в потсы (копилки) и копить на нужные цели самостоятельно или вместе с близкими. Потсы можно кастомизировать, менять фоны, управлять доступом',
        },
      },
      {
        type: 'image',
        content: {
          src: alfaYouth4,
          alt: 'Альфа Челленджи',
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
    coverImage: underwriterImage,
    content: [
      {
        type: 'image',
        content: {
          src: underwriterImage,
          alt: 'Цифровой помощник в кредитном процессе для СБЕРА',
        },
      },
      {
        type: 'text',
        content: {
          text: 'Мы с командой разработали минимальный жизнеспособный вариант веб-приложения, сфокусированный на backend-части (разработка микросервисов, обеспечивающих получение, обработку и хранение информации по заявке, взаимодействие с ассистентом) и frontend (создание пользовательского интерфейса для визуализации и ввода информации). Мы добавили новые навыки для цифрового ассистента из семейства Салют, что позволило создать полноценный рабочий инструмент под задачу андеррайтера.',
        },
      },
      {
        type: 'stats',
        content: {
          items: [
            { value: '70%', label: 'Процент одобрения заявки цифровым помощником, который помогает андеррайтеру принять решение' },
          ],
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
    coverImage: friendlyMiniApp,
    content: [
      {
        type: 'image',
        content: {
          src: friendlyItmo2,
          alt: 'Friendly ITMO экран 2',
        },
      },
      {
        type: 'text',
        content: {
          text: 'Вместо свайпов — персональные рекомендации. Для дружбы, учебы, тусовок, нетворкинга и отношений. Начать разговор без неловкости — общие темы в чате',
        },
      },
      {
        type: 'image',
        content: {
          src: friendlyItmo3,
          alt: 'Friendly ITMO экран 3',
        },
      },
      {
        type: 'stats',
        content: {
          items: [
            { value: '26,5%', label: 'имеют трудности во взаимоотношениях со сверстниками' },
            { value: '47%', label: 'студентов вовлечено во внеучебную деятельность' },
          ],
        },
      },
      {
        type: 'image',
        content: {
          src: friendlyItmo4,
          alt: 'Friendly ITMO экран 4',
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
    coverImage: marketplace,
    content: [
      {
        type: 'image',
        content: {
          src: marketplace,
          alt: 'Корпоративный маркетплейс',
        },
      },
      {
        type: 'text',
        content: {
          text: 'Привычная механика работы, так же как у Ozon, Яндекс Маркета, Wildberries, как для мобильного приложения, так и для селлерского кабинета',
        },
      },
      {
        type: 'text',
        content: {
          text: '>5 маркетплейсов проанализировала для выбора наиболее удобного UX и необходимого функционала, подготовила графические материалы, айдентику, провела полное исследование рынка. Разработала дизайн и прототип мобильное приложение для разного типа доступов (пользователь и сотрудник)',
        },
      },
    ],
  },
  {
    id: 'green-analysis',
    title: 'ПО для определения характеристик состояния зелёных насаждений города',
    category: 'Mobile',
    thumbnailUrl: greenApp,
    shortDescription: 'Создала с 0 дизайн мобильного приложения для загрузки изображений зелёных насаждений и мгновенного анализа их состояния с помощью ИИ',
    client: '@creator_aa',
    year: '2024',
    role: 'Product Designer',
    fullDescription: 'Создала с 0 дизайн мобильного приложения для загрузки изображений зелёных насаждений и мгновенного анализа их состояния с помощью ИИ. Система автоматически определяет вид растения, выявляет болезни и дефекты, формирует перечетные ведомости и наглядные графики',
    coverImage: greenApp,
    content: [
      {
        type: 'image',
        content: {
          src: greenApp,
          alt: 'AgroSpector',
        },
      },
      {
        type: 'two-columns',
        content: {
          left: {
            type: 'text',
            content: {
              title: 'Функции приложения',
              text: 'Создание заявок, анализ изображений с помощью ИИ, формирование перечётной ведомости, графики и архив обработанных заявок',
            },
          },
          right: {
            type: 'text',
            content: {
              title: 'Создание заявок',
              text: 'Пользователь может быстро создать заявку, загрузив изображение. Алгоритмы машинного обучения и компьютерного зрения анализируют загруженное изображение < 5 секунд.',
            },
          },
        },
      },
      {
        type: 'image',
        content: {
          src: greenAppFull,
          alt: 'ПО для определения характеристик',
        },
      },
      {
        type: 'text',
        content: {
          title: 'LLM-ассистент',
          text: 'Вопросы, подсказки и навигация. Рекомендации: ИИ оценивает риск по состоянию дерева. Выдаёт конкретное действие — обрезка, подпорка или вызов специалиста',
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

  // Web
  {
    id: 'carat-furniture',
    title: 'Редизайн главной страницы сайта мебельной фабрики Carat',
    category: 'Web',
    thumbnailUrl: caratCover,
    shortDescription: 'Редизайн главной страницы с акцентом на навигацию, каталог, коллекции и визуальную привлекательность мебельного бренда Carat.',
    client: '@creator_aa',
    year: '2024',
    role: 'Product Designer',
    coverImage: caratCover,
    content: [
      {
        type: 'image',
        content: {
          src: caratCover,
          alt: 'Carat мебельная фабрика',
        },
      },
      {
        type: 'image',
        content: {
          src: caratFull,
          alt: 'Редизайн главной страницы Carat',
        },
      },
      {
        type: 'text',
        content: {
          text: 'Редизайн главной страницы сайта с акцентом на визуальную привлекательность и удобство навигации',
        },
      },
    ],
  },
  {
    id: 'panda-gifts',
    title: 'Точечные лендинги компании под ЦА',
    category: 'Web',
    thumbnailUrl: pandaGifts,
    shortDescription: 'В паре с маркетологом адаптировали активы и ценности компании под нужную ЦА: маркетологов, HR, лидов и директоров',
    client: '@creator_aa',
    year: '2024',
    role: 'Product Designer',
    fullDescription: 'В паре с маркетологом адаптировали активы и ценности компании под нужную ЦА: маркетологов, HR, лидов и директоров. Оформили крупных 8 кейсов, подобрали графические материалы (отсняли контент, создали иконки, подобрали цвета).',
    coverImage: pandaGifts,
    content: [
      {
        type: 'image',
        content: {
          src: pandaGifts,
          alt: 'PandaGifts лендинги',
        },
      },
      {
        type: 'text',
        content: {
          title: 'Что добавили на лендинг',
          text: '— Ценности компании\n— Виды услуг с кратким описанием\n— Позиционирование\n— Кейсы в портфолио\n— Отличия от конкурентов',
        },
      },
      {
        type: 'text',
        content: {
          text: '>10 сайтов брендинговых агенств и сувенирных компаний проанализировала и выделила наиболее важные блоки. Предложила разработать свой стиль, опираясь на тренды. Определила шрифтовую пару и палитру цветов, а также создала иконки и иллюстрации (ИИ + Figma)',
        },
      },
    ],
  },

  // Identity
  {
    id: 'friendly-identity',
    title: 'Айдентика Friendly Tg Mini App',
    category: 'Identity',
    thumbnailUrl: friendlyLogo,
    shortDescription: 'Разработка айдентики для Telegram Mini App',
    client: '@creator_aa',
    year: '2024',
    role: 'Product Designer',
    content: [
      {
        type: 'image',
        content: {
          src: friendlyLogo,
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
    thumbnailUrl: workAI,
    shortDescription: 'SMM материалы для VK группы',
    client: '@creator_aa',
    year: '2024',
    role: 'Product Designer',
    content: [
      {
        type: 'image',
        content: {
          src: workAI,
          alt: 'Работа с нейросетями',
        },
      },
      {
        type: 'image',
        content: {
          src: saluteAI,
          alt: 'Salute AI',
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
  identity: ['alfa-identity', 'friendly-identity', 'vk-ar-vr', 'ton-platform'],
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

