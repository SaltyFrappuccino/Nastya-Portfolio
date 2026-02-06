import AnimatedText from '../ui/AnimatedText';

export default function AboutSection() {
  const stats = [
    { value: '50+', label: 'разработанных 💻\nсайтов и сервисов' },
    { value: '3', label: 'проекта развиваю\nдо уровня стартапа 🚀' },
    { value: '15+', label: 'побед в хакатонах 🏆\nи кейс чемпионатах' },
    { value: '5+', label: 'сервисов,\nсозданных с 0 🛠️' },
  ];

  return (
    <section className="py-8 md:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col">
              <AnimatedText
                as="span"
                className="font-suisse text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-black font-semibold mb-1 md:mb-2"
                delay={0.1 + index * 0.1}
              >
                {stat.value}
              </AnimatedText>
              <AnimatedText
                as="span"
                className="font-suisse text-xs sm:text-sm md:text-base text-black leading-snug whitespace-pre-line"
                delay={0.1 + index * 0.1 + 0.05}
              >
                {stat.label}
              </AnimatedText>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
