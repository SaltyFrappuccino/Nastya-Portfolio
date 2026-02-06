import { motion } from 'framer-motion';

const wbOzonArticle = new URL(
  '../../assets/sorted/landing/Отличия WB и Ozon глазами дизайнера интерфейсов.png',
  import.meta.url
).href;
const yandexOzonArticle = new URL(
  '../../assets/sorted/landing/Яндекс, Ozon или WB что взять за референс при разработке собственного маркетплейса.png',
  import.meta.url
).href;

const articles = [
  {
    title: 'Отличия WB и Ozon глазами дизайнера интерфейсов',
    image: wbOzonArticle,
    href: 'https://habr.com/ru/articles/918916/',
  },
  {
    title: 'Яндекс, Ozon или WB: что взять за референс при разработке собственного маркетплейса?',
    image: yandexOzonArticle,
    href: 'https://habr.com/ru/articles/961872/',
  },
];

export default function MyArticlesSection() {
  return (
    <section className="py-8 md:py-12 lg:py-16 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <motion.h2
          className="font-suisse text-xl sm:text-2xl md:text-3xl text-black mb-6 md:mb-10 lg:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Мои статьи
        </motion.h2>
        <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-10 lg:gap-14">
          {articles.map((article, index) => (
            <motion.a
              key={article.href}
              href={article.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block hoverable w-full md:max-w-[48%]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="mb-3 md:mb-4 max-w-[500px]">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-auto object-contain"
                />
              </div>
              <p className="font-suisse text-xs sm:text-sm md:text-base text-black/80 underline underline-offset-4 decoration-1 max-w-[500px]">
                {article.title}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
