import { Link } from 'react-router-dom';

const musicImage = new URL('../assets/sorted/landing/Моя волна ЯМузыка.png', import.meta.url).href;
const footerImage = new URL('../assets/sorted/landing/Футер главной страницы.png', import.meta.url).href;
const articleWbOzon = new URL(
  '../assets/sorted/landing/Отличия WB и Ozon глазами дизайнера интерфейсов.png',
  import.meta.url
).href;
const articleMarketplace = new URL(
  '../assets/sorted/landing/Яндекс, Ozon или WB что взять за референс при разработке собственного маркетплейса.png',
  import.meta.url
).href;

const smartRoomImage = new URL('../assets/updated-home/1й блок.png', import.meta.url).href;
const gameIcon = new URL('../assets/updated-home/11659294-Photoroom 1.png', import.meta.url).href;
const medIcon = new URL('../assets/updated-home/11659294-Photoroom 2.png', import.meta.url).href;
const aiOutfitImage = new URL('../assets/updated-home/фото-8.png', import.meta.url).href;
const greenAiImage = new URL('../assets/updated-home/фото кейса.png', import.meta.url).href;
const dynamicIslandImage = new URL('../assets/updated-home/фото.png', import.meta.url).href;
const telegramMiniAppImage = new URL('../assets/updated-home/фото-1.png', import.meta.url).href;
const iosChallengeImage = new URL('../assets/updated-home/фото-2.png', import.meta.url).href;
const fintechLaptopImage = new URL('../assets/updated-home/фото-3.png', import.meta.url).href;
const corporateInterfaceImage = new URL('../assets/updated-home/фото-4.png', import.meta.url).href;
const aiAnalyticsImage = new URL('../assets/updated-home/фото-5.png', import.meta.url).href;
const subscriptionImage = new URL('../assets/updated-home/фото-6.png', import.meta.url).href;
const caratImage = new URL('../assets/updated-home/фото-7.png', import.meta.url).href;

type Project = {
  year: string;
  title: string;
  audience: string;
  image: string;
  href?: string;
};

const featuredProjects: Project[] = [
  {
    year: '2026',
    title: 'Админки компаний с функционалом управления товарами, сотрудниками и компаниями',
    audience: 'B2B, B2C',
    image: aiAnalyticsImage,
  },
  {
    year: '2025-2026',
    title: 'Корпоративный маркетплейс (программа лояльности для сотрудников)',
    audience: 'B2C, B2E',
    image: subscriptionImage,
    href: '/project/corporate-marketplace',
  },
  {
    year: '2026',
    title: 'Редизайн главной страницы мебельной фабрики Carat',
    audience: 'B2C',
    image: caratImage,
    href: '/project/carat-furniture',
  },
  {
    year: '2025-2026',
    title: 'UI Concept',
    audience: 'Mobile app challenge',
    image: aiOutfitImage,
  },
];

const archivedProjects: Project[] = [
  {
    year: '2025',
    title: 'ПО для определения характеристик состояния зелёных насаждений города по фотографиям',
    audience: 'B2B, B2C',
    image: greenAiImage,
    href: '/project/green-analysis',
  },
  {
    year: '2025',
    title: 'UI Concept',
    audience: 'Dynamic island challenge',
    image: dynamicIslandImage,
  },
  {
    year: '2025',
    title: 'Telegram Mini app',
    audience: 'Дейтинг для студентов (с мэтчем по интересам)',
    image: telegramMiniAppImage,
    href: '/project/friendly-telegram',
  },
  {
    year: '2024',
    title: 'Подписка нового поколения Alfa Youth',
    audience: 'B2C',
    image: iosChallengeImage,
    href: '/project/alfa-youth',
  },
  {
    year: '2024',
    title: 'Бубука, музыкальная платформа',
    audience: 'B2C',
    image: fintechLaptopImage,
  },
  {
    year: '2023',
    title: 'Платформа цифрового офиса для T-Банка',
    audience: 'B2E',
    image: corporateInterfaceImage,
  },
];

const archiveYears = ['2025', '2024', '2023'];

function HomeHeader() {
  return (
    <header className="mx-auto flex w-full max-w-[1320px] items-start justify-between px-5 pt-7 md:px-8 lg:px-0">
      <Link to="/" className="font-suisse text-[18px] leading-none text-black hoverable md:text-[20px]">
        @creator_aa
      </Link>

      <button
        className="flex h-10 w-10 items-center justify-center hoverable lg:mr-auto lg:ml-[340px]"
        aria-label="Открыть меню"
      >
        <span className="block h-[2px] w-6 bg-black shadow-[0_7px_0_#000,0_14px_0_#000]" />
      </button>

      <nav className="hidden items-start gap-20 text-[14px] leading-[1.15] text-black lg:flex">
        <a href="tel:+79009994545" className="hoverable">
          +7 900 999 45 45
        </a>
        <a
          href="mailto:lorentini10@gmail.com"
          className="bg-black px-7 py-3 text-white hoverable"
        >
          Связаться
        </a>
      </nav>
    </header>
  );
}

function HeroIntro() {
  return (
    <section className="mx-auto w-full max-w-[1320px] px-5 pb-10 pt-9 md:px-8 md:pt-12 lg:px-0 lg:pb-14">
      <div className="grid gap-8 lg:grid-cols-[1.05fr_0.55fr_0.55fr] lg:items-start">
        <h1 className="font-suisse text-[36px] leading-[0.95] tracking-normal md:text-[56px] lg:text-[64px]">
          <span className="inline bg-[#ff4b4b] px-1 text-white">Ivanova Anastasia</span>
        </h1>

        <div className="grid grid-cols-2 gap-8 text-[14px] leading-tight text-black md:max-w-[420px] lg:col-span-2 lg:ml-auto">
          <div>
            <p>контакты:</p>
            <a href="mailto:lorentini10@gmail.com" className="block hoverable">
              lorentini10@gmail.com
            </a>
            <a href="https://t.me/creator_aa" target="_blank" rel="noreferrer" className="block hoverable">
              telegram
            </a>
            <a href="https://vk.com/" target="_blank" rel="noreferrer" className="block hoverable">
              VK
            </a>
          </div>
          <div>
            <p>публикации:</p>
            <a href="https://t.me/designanet" target="_blank" rel="noreferrer" className="block hoverable">
              Telegram
            </a>
            <a href="https://habr.com/ru/users/AnaDubrovina/articles/" target="_blank" rel="noreferrer" className="block hoverable">
              Хабр
            </a>
            <a href="https://pinterest.com/" target="_blank" rel="noreferrer" className="block hoverable">
              Pinterest
            </a>
          </div>
        </div>
      </div>

      <div className="mt-24 md:mt-28 lg:mt-36">
        <p className="max-w-[1180px] font-suisse text-[32px] leading-[1.05] text-black md:text-[56px] lg:text-[64px]">
          Ведущий продуктовый дизайнер
          <br />с опытом в дизайне 7+ лет
        </p>
        <div className="mt-12 font-suisse text-[30px] leading-[0.98] text-black md:mt-16 md:text-[56px] lg:mt-20 lg:text-right lg:text-[64px]">
          <div className="md:whitespace-nowrap">
            UX/UI, digital:{' '}
            <img
              src={gameIcon}
              alt=""
              className="inline-block h-[42px] w-auto -translate-y-1 align-middle md:h-[72px] lg:h-[80px]"
            />{' '}
            gamedev,
          </div>
          <div className="md:whitespace-nowrap">
            fintech,
            <img
              src={medIcon}
              alt=""
              className="mx-1 inline-block h-[44px] w-auto translate-y-2 align-middle md:h-[74px] lg:h-[82px]"
            />
            medtech, e-commerce
          </div>
        </div>
      </div>
    </section>
  );
}

function MusicPanel() {
  return (
    <section className="mx-auto w-full max-w-[1320px] px-5 md:px-8 lg:px-0">
      <img src={musicImage} alt="Моя волна" className="block w-full" />
    </section>
  );
}

function ProjectRow({ project }: { project: Project }) {
  const image = <img src={project.image} alt={project.title} className="block w-full" />;
  const info = (
    <>
      <p className="mb-6 text-[20px] leading-none md:text-[24px]">{project.year}</p>
      <p className="max-w-[190px] text-[13px] leading-[1.15] md:text-[14px]">{project.title}</p>
      <p className="mt-5 text-[18px] leading-none text-black/35 md:text-[22px]">{project.audience}</p>
    </>
  );

  return (
    <article className="grid grid-cols-[minmax(104px,220px)_1fr] gap-5 md:grid-cols-[220px_1fr] md:gap-10 lg:gap-16">
      {project.href ? (
        <Link to={project.href} className="hoverable pt-2 font-suisse text-black">
          {info}
        </Link>
      ) : (
        <div className="pt-2 font-suisse text-black">{info}</div>
      )}
      {project.href ? (
        <Link to={project.href} className="block bg-[#fafafa] hoverable">
          {image}
        </Link>
      ) : (
        <div className="block bg-[#fafafa]">{image}</div>
      )}
    </article>
  );
}

function ProjectsSection() {
  return (
    <section className="mx-auto grid w-full max-w-[1320px] gap-20 px-5 py-16 md:px-8 md:py-20 lg:px-0">
      {featuredProjects.map((project) => (
        <ProjectRow key={`${project.year}-${project.title}`} project={project} />
      ))}

      <div className="grid gap-6">
        {archiveYears.map((year) => (
          <details key={year} className="group bg-[#f8f8f8] px-6 py-5 md:px-8 md:py-7">
            <summary className="hoverable flex list-none items-center justify-between font-suisse text-[22px] text-black md:text-[26px]">
              {year}
              <span className="text-3xl leading-none text-black/70 transition-transform group-open:rotate-180">
                ˅
              </span>
            </summary>
            <div className="mt-14 grid gap-16 md:gap-20">
              {archivedProjects
                .filter((project) => project.year === year)
                .map((project) => (
                  <ProjectRow key={`${project.year}-${project.title}`} project={project} />
                ))}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}

function PhoneShowcase() {
  return (
    <section className="mx-auto w-full max-w-[1320px] px-5 pb-20 md:px-8 lg:px-0">
      <img src={smartRoomImage} alt="Smart room concept" className="block w-full" />
    </section>
  );
}

function ArticlesSection() {
  const articles = [
    {
      title: 'Отличия WB и Ozon глазами дизайнера интерфейсов',
      image: articleWbOzon,
      href: 'https://habr.com/ru/articles/918916/',
    },
    {
      title: 'Яндекс, Ozon или WB: что взять за референс при разработке собственного маркетплейса?',
      image: articleMarketplace,
      href: 'https://habr.com/ru/articles/961872/',
    },
  ];

  return (
    <section className="mx-auto w-full max-w-[1320px] px-5 pb-16 md:px-8 lg:px-0">
      <h2 className="mb-12 font-suisse text-[28px] leading-none text-black md:text-[34px]">
        Мои статьи на Хабре
      </h2>
      <div className="grid grid-cols-2 gap-12 md:gap-28">
        {articles.map((article) => (
          <a key={article.href} href={article.href} target="_blank" rel="noreferrer" className="block hoverable">
            <img src={article.image} alt={article.title} className="mb-4 block w-full" />
            <p className="max-w-[420px] font-suisse text-[13px] font-bold leading-[1.15] text-black underline decoration-1 underline-offset-2 md:text-[16px]">
              {article.title}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white font-suisse text-black">
      <HomeHeader />
      <HeroIntro />
      <MusicPanel />
      <ProjectsSection />
      <PhoneShowcase />
      <ArticlesSection />
      <section className="mx-auto w-full max-w-[1320px] px-5 pb-16 md:px-8 lg:px-0">
        <img src={footerImage} alt="" className="block w-full" />
      </section>
    </div>
  );
}
