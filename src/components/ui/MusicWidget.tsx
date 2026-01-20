import { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, SkipBack, SkipForward, Heart } from 'lucide-react';

// Обложка The Weeknd - Blinding Lights
const ALBUM_COVER = 'https://i.scdn.co/image/ab67616d0000b2738863bc11d2aa12b54f5aeb36';

export default function MusicWidget() {
  const [isPlaying, setIsPlaying] = useState(true);
  const progress = 44; // 0:44 из 2:45

  return (
    <motion.div
      className="bg-gradient-to-br from-purple-900 via-pink-800 to-orange-600 rounded-3xl p-5 md:p-6 w-full shadow-2xl hoverable"
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.3 }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <span className="text-white font-suisse text-sm font-medium">Моя волна</span>
          <span className="text-white/60 text-xs ml-2">Плейлист</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="text-white font-suisse text-sm">Яндекс</span>
          <span className="text-pink-300 text-sm ml-1">Музыка</span>
          <button className="ml-4 text-white/60 hover:text-white transition-colors">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-5">
        {['Cover', 'Lyrics', 'Video', 'Ambience'].map((tab, index) => (
          <button
            key={tab}
            className={`px-4 py-2 rounded-full text-sm font-suisse transition-colors ${
              index === 1
                ? 'bg-white/20 text-white'
                : 'text-white/60 hover:text-white hover:bg-white/10'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Main Content */}
      <div className="flex gap-5 mb-4">
        {/* Album Cover */}
        <motion.div
          className="w-28 h-28 md:w-36 md:h-36 rounded-xl overflow-hidden flex-shrink-0 shadow-lg"
          whileHover={{ scale: 1.02 }}
        >
          <img
            src={ALBUM_COVER}
            alt="Blinding Lights - The Weeknd"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Lyrics */}
        <div className="flex-1 pt-2">
          <p className="text-accent-blue text-base md:text-lg leading-relaxed font-suisse">
            I look around and<br />
            Sin City's cold and empty (oh)
          </p>
          <p className="text-white text-base md:text-lg leading-relaxed mt-3 font-suisse">
            No one's around to judge me (oh)<br />
            <span className="text-white/50">I can't see clearly when you're gone</span>
          </p>
        </div>
      </div>

      {/* Track Info */}
      <div className="mb-4">
        <span className="inline-block bg-red-500 text-white text-sm px-3 py-1 rounded font-suisse font-medium">
          Blinding Lights
        </span>
        <p className="text-white/60 text-sm mt-1 font-suisse">The Weeknd</p>
      </div>

      {/* Progress Bar */}
      <div className="mb-5">
        <div className="h-1 bg-white/20 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-red-500 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${(progress / 165) * 100}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
        <div className="flex justify-between text-white/50 text-xs mt-2 font-suisse">
          <span>00:44</span>
          <span>02:45</span>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between">
        <button className="text-white/40 hover:text-white transition-colors hoverable p-2">
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <path d="M8 12h8M12 8v8" strokeDasharray="2 2" />
          </svg>
        </button>
        
        <div className="flex items-center gap-4">
          <button className="text-white/70 hover:text-white transition-colors hoverable p-2">
            <SkipBack className="w-6 h-6" />
          </button>
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-black hover:scale-105 transition-transform hoverable"
          >
            {isPlaying ? (
              <Pause className="w-6 h-6" />
            ) : (
              <Play className="w-6 h-6 ml-1" />
            )}
          </button>
          <button className="text-white/70 hover:text-white transition-colors hoverable p-2">
            <SkipForward className="w-6 h-6" />
          </button>
        </div>

        <button className="text-white/40 hover:text-white transition-colors hoverable p-2">
          <Heart className="w-6 h-6" />
        </button>
      </div>

      {/* Suggestions */}
      <div className="mt-5 flex items-center gap-3">
        <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
          <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
          </svg>
        </div>
        <div className="flex gap-2 overflow-x-auto">
          {[
            'Попробуйте сказать: "Включи трек Dance On The Floor"',
            '"Дальше"',
            '"Romantic vibe"'
          ].map((suggestion, i) => (
            <button
              key={i}
              className="flex-shrink-0 px-3 py-1.5 bg-white/10 rounded-full text-white/70 text-xs hover:bg-white/20 transition-colors hoverable font-suisse"
            >
              {suggestion}
            </button>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
