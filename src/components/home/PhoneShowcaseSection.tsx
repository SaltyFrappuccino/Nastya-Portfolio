import { motion } from 'framer-motion';

const phone1 = new URL('../../assets/sorted/landing/телефон 1.png', import.meta.url).href;
const phone2 = new URL('../../assets/sorted/landing/телефон 2.png', import.meta.url).href;

export default function PhoneShowcaseSection() {
  return (
    <section className="py-8 md:py-16 lg:py-20 bg-white">
      <div className="max-w-[1800px] mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8 lg:gap-12">
          {/* Left Phone */}
          <motion.div
            className="w-full md:w-[45%] max-w-[300px] md:max-w-[350px] lg:max-w-[400px]"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={phone1}
              alt="Mobile App Design 1"
              className="w-full h-auto object-contain"
            />
          </motion.div>

          {/* Right Phone */}
          <motion.div
            className="w-full md:w-[45%] max-w-[300px] md:max-w-[350px] lg:max-w-[400px]"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <img
              src={phone2}
              alt="Mobile App Design 2"
              className="w-full h-auto object-contain"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
