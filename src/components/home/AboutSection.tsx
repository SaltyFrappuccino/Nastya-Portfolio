import { useTranslation } from 'react-i18next';
import AnimatedText from '../ui/AnimatedText';

export default function AboutSection() {
  const { t } = useTranslation();
  
  const stats = [
    { value: '30+', label: t('about.stats.websites') },
    { value: '>30', label: t('about.stats.branding') },
    { value: '> 100', label: t('about.stats.illustrations') },
    { value: '> 10', label: t('about.stats.services') },
  ];

  return (
    <section className="py-12 md:py-20 bg-background-light">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Left Column - About Text */}
          <div>
            <AnimatedText as="p" className="font-suisse text-base md:text-lg text-black leading-relaxed mb-6" delay={0.1}>
              {t('about.mainText')}
            </AnimatedText>
            <AnimatedText as="p" className="font-suisse text-base text-text-secondary leading-relaxed" delay={0.2}>
              {t('about.description')}
            </AnimatedText>
          </div>

          {/* Right Column - Stats */}
          <div>
            <div className="space-y-2">
              {stats.map((stat, index) => (
                <AnimatedText key={index} as="p" className="font-suisse text-sm md:text-base text-text-secondary" delay={0.15 + index * 0.1}>
                  {stat.value} {stat.label}
                </AnimatedText>
              ))}
              <AnimatedText as="p" className="font-suisse text-sm md:text-base text-text-secondary mt-4" delay={0.55}>
                {t('about.leadingProjects')}
              </AnimatedText>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
