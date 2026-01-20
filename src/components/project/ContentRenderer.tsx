import { motion } from 'framer-motion';
import type { ContentBlock, TextContent, ImageContent, TwoColumnsContent, GalleryContent, StatsContent } from '../../types';
import AnimatedText from '../ui/AnimatedText';

interface ContentRendererProps {
  blocks: ContentBlock[];
}

const blockVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

function TextBlock({ content }: { content: TextContent }) {
  return (
    <div className="max-w-4xl mx-auto px-4 md:px-8 py-8 md:py-12">
      {content.title && (
        <AnimatedText as="h3" className="font-suisse text-xl md:text-2xl text-black mb-4" delay={0.1}>
          {content.title}
        </AnimatedText>
      )}
      <AnimatedText as="p" className="font-suisse text-base md:text-lg text-text-secondary leading-relaxed whitespace-pre-line" delay={content.title ? 0.2 : 0.1}>
        {content.text}
      </AnimatedText>
    </div>
  );
}

function ImageBlock({ content }: { content: ImageContent }) {
  return (
    <motion.div
      className="w-full py-4 md:py-8"
      variants={blockVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
    >
      <img
        src={content.src}
        alt={content.alt}
        className="w-full h-auto"
      />
      {content.caption && (
        <AnimatedText as="p" className="text-center text-text-secondary text-sm mt-4 font-suisse" delay={0.2}>
          {content.caption}
        </AnimatedText>
      )}
    </motion.div>
  );
}

function TwoColumnsBlock({ content }: { content: TwoColumnsContent }) {
  return (
    <motion.div
      className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12"
      variants={blockVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        <div>
          {content.left.type === 'text' ? (
            <>
              {(content.left.content as TextContent).title && (
                <AnimatedText as="h3" className="font-suisse text-xl md:text-2xl text-black mb-4" delay={0.1}>
                  {(content.left.content as TextContent).title}
                </AnimatedText>
              )}
              <AnimatedText as="p" className="font-suisse text-base text-text-secondary leading-relaxed" delay={(content.left.content as TextContent).title ? 0.2 : 0.1}>
                {(content.left.content as TextContent).text}
              </AnimatedText>
            </>
          ) : (
            <img
              src={(content.left.content as ImageContent).src}
              alt={(content.left.content as ImageContent).alt}
              className="w-full h-auto"
            />
          )}
        </div>
        <div>
          {content.right.type === 'text' ? (
            <>
              {(content.right.content as TextContent).title && (
                <AnimatedText as="h3" className="font-suisse text-xl md:text-2xl text-black mb-4" delay={0.15}>
                  {(content.right.content as TextContent).title}
                </AnimatedText>
              )}
              <AnimatedText as="p" className="font-suisse text-base text-text-secondary leading-relaxed" delay={(content.right.content as TextContent).title ? 0.25 : 0.15}>
                {(content.right.content as TextContent).text}
              </AnimatedText>
            </>
          ) : (
            <img
              src={(content.right.content as ImageContent).src}
              alt={(content.right.content as ImageContent).alt}
              className="w-full h-auto"
            />
          )}
        </div>
      </div>
    </motion.div>
  );
}

function GalleryBlock({ content }: { content: GalleryContent }) {
  const columns = content.columns || 2;
  const gridCols = columns === 3 ? 'md:grid-cols-3' : 'md:grid-cols-2';

  return (
    <motion.div
      className="max-w-7xl mx-auto px-4 md:px-8 py-4 md:py-8"
      variants={blockVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
    >
      <div className={`grid grid-cols-1 ${gridCols} gap-4 md:gap-6`}>
        {content.images.map((image, index) => (
          <motion.div
            key={index}
            className="overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-auto"
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

function StatsBlock({ content }: { content: StatsContent }) {
  return (
    <motion.div
      className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-20"
      variants={blockVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {content.items.map((item, index) => (
          <div key={index} className="text-center md:text-left">
            <AnimatedText as="span" className="block font-suisse text-4xl md:text-6xl text-black mb-2" delay={index * 0.1}>
              {item.value}
            </AnimatedText>
            <AnimatedText as="span" className="text-text-secondary text-sm md:text-base font-suisse" delay={index * 0.1 + 0.15}>
              {item.label}
            </AnimatedText>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default function ContentRenderer({ blocks }: ContentRendererProps) {
  return (
    <div className="py-8">
      {blocks.map((block, index) => {
        switch (block.type) {
          case 'text':
            return <TextBlock key={index} content={block.content as TextContent} />;
          case 'image':
            return <ImageBlock key={index} content={block.content as ImageContent} />;
          case 'two-columns':
            return <TwoColumnsBlock key={index} content={block.content as TwoColumnsContent} />;
          case 'gallery':
            return <GalleryBlock key={index} content={block.content as GalleryContent} />;
          case 'stats':
            return <StatsBlock key={index} content={block.content as StatsContent} />;
          default:
            return null;
        }
      })}
    </div>
  );
}

