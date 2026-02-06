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
  const isCenter = content.align === 'center';
  return (
    <div className={`w-full px-4 md:px-8 py-3 md:py-6 lg:py-10 ${isCenter ? 'text-center' : 'text-left'}`}>
      {content.title && content.title.trim() && (
        <h3 className="font-suisse font-medium text-base sm:text-lg md:text-xl lg:text-2xl text-black mb-2 md:mb-3 lg:mb-4 tracking-tight">
          {content.title}
        </h3>
      )}
      {content.text.trim() && (
        <p className="font-suisse text-sm sm:text-base md:text-lg lg:text-xl text-black leading-[1.6] whitespace-pre-line">
          {content.text}
        </p>
      )}
    </div>
  );
}

function ImageBlock({ content }: { content: ImageContent }) {
  return (
    <motion.div
      className="w-full py-3 md:py-6 lg:py-8"
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
        <p className="text-center text-black/70 text-xs sm:text-sm md:text-base mt-2 md:mt-4 font-suisse px-4">
          {content.caption}
        </p>
      )}
    </motion.div>
  );
}

function TwoColumnsBlock({ content }: { content: TwoColumnsContent }) {
  return (
    <motion.div
      className="max-w-7xl mx-auto px-4 md:px-8 py-3 md:py-6 lg:py-10"
      variants={blockVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 lg:gap-10 items-center">
        <div className="flex flex-col justify-center h-full">
          {content.left.type === 'text' ? (
            <>
              {(content.left.content as TextContent).title && (
                <h3 className="font-suisse font-medium text-base sm:text-lg md:text-xl lg:text-2xl text-black mb-2 md:mb-3 lg:mb-4 tracking-tight">
                  {(content.left.content as TextContent).title}
                </h3>
              )}
              <p className={`font-suisse text-sm sm:text-base md:text-lg lg:text-xl text-black leading-[1.6] whitespace-pre-line ${(content.left.content as TextContent).align === 'center' ? 'text-center' : 'text-left'}`}>
                {(content.left.content as TextContent).text}
              </p>
            </>
          ) : (
            <img
              src={(content.left.content as ImageContent).src}
              alt={(content.left.content as ImageContent).alt}
              className="max-w-full h-auto mx-auto"
            />
          )}
        </div>
        <div className="flex flex-col justify-center h-full">
          {content.right.type === 'text' ? (
            <>
              {(content.right.content as TextContent).title && (
                <h3 className="font-suisse font-medium text-base sm:text-lg md:text-xl lg:text-2xl text-black mb-2 md:mb-3 lg:mb-4 tracking-tight">
                  {(content.right.content as TextContent).title}
                </h3>
              )}
              <p className={`font-suisse text-sm sm:text-base md:text-lg lg:text-xl text-black leading-[1.6] whitespace-pre-line ${(content.right.content as TextContent).align === 'center' ? 'text-center' : 'text-left'}`}>
                {(content.right.content as TextContent).text}
              </p>
            </>
          ) : (
            <img
              src={(content.right.content as ImageContent).src}
              alt={(content.right.content as ImageContent).alt}
              className="max-w-full h-auto mx-auto"
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
      className="max-w-7xl mx-auto px-4 md:px-8 py-2 md:py-4 lg:py-8"
      variants={blockVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
    >
      <div className={`grid grid-cols-1 ${gridCols} gap-3 md:gap-4 lg:gap-6`}>
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
      className="max-w-7xl mx-auto px-4 md:px-8 py-6 md:py-12 lg:py-20"
      variants={blockVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8 lg:gap-12">
        {content.items.map((item, index) => (
          <div key={index} className="text-center md:text-left">
            <AnimatedText as="span" className="block font-suisse text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-black mb-1 md:mb-2" delay={index * 0.1}>
              {item.value}
            </AnimatedText>
            <span className="block font-suisse text-xs sm:text-sm md:text-base lg:text-lg text-black/80 mt-1">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default function ContentRenderer({ blocks }: ContentRendererProps) {
  return (
    <div className="py-4 md:py-8">
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

