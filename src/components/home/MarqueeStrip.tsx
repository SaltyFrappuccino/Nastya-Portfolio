import { motion } from 'framer-motion';

const marqueeItems = [
  'UX/UI design',
  'UX Searches',
  'VR/AR',
  'Comunication design',
  'Mobile Apps',
  'Web Design',
  'Fintech',
  'Product Design',
];

export default function MarqueeStrip() {
  const marqueeText = marqueeItems.join(' / ') + ' / ';

  return (
    <div className="bg-black py-4 md:py-6 overflow-hidden border-y border-white/10">
      <div className="flex">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: [0, '-50%'] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 30,
              ease: 'linear',
            },
          }}
        >
          {/* Duplicate content for seamless loop */}
          {[...Array(4)].map((_, i) => (
            <span
              key={i}
              className="text-white font-evolventa text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mx-4"
            >
              {marqueeText}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

