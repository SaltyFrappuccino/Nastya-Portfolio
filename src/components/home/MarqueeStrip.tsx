import { motion } from 'framer-motion';

const marqueeText = '/UI design UX Searches VR/';

export default function MarqueeStrip() {
  return (
    <div className="bg-white py-2 md:py-4 lg:py-6 overflow-hidden border-y border-black/10">
      <div className="flex">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: [0, '-50%'] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 25,
              ease: 'linear',
            },
          }}
        >
          {[...Array(6)].map((_, i) => (
            <span
              key={i}
              className="text-black font-evolventa text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight"
            >
              {marqueeText}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

