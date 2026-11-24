import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container } from '@/components/common/Container/Container';
import { FadeIn } from '@/components/animations/FadeIn';
import { Button } from '@/components/common/Button/Button';
import {
  Volume2,
  VolumeX,
  TrendingUp,
  Tag,
  ArrowRight,
  Store,
  Play,
  Pause,
} from 'lucide-react';

export const StoreVideoSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  return (
    <section className="py-12 sm:py-20 bg-[#FFF9F0] border-b border-[#EADDE2] overflow-hidden">
      <Container>
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Editorial Content */}
          <div className="lg:col-span-7 space-y-5">
            <FadeIn delay={0.1}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F7EAF0] border border-[#7A1034]/20 text-[#7A1034] text-xs font-bold tracking-wider uppercase">
                <Store className="w-3.5 h-3.5 text-[#7A1034]" />
                <span>In-Store Walkthrough &bull; PAARR EVER Supermarket</span>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#570B26] leading-tight tracking-tight">
                See What&apos;s Fresh in Our Aisles Every Single Day
              </h2>
            </FadeIn>

            <FadeIn delay={0.3}>
              <p className="text-sm sm:text-base text-[#292329]/80 font-sans leading-relaxed">
                From morning 7 AM vegetable unloads to weekend festive buzz and in-store customer service — take a look inside our clean, air-conditioned supermarket aisles.
              </p>
            </FadeIn>

            {/* Feature Highlights Grid */}
            <FadeIn delay={0.4}>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-1">
                <div className="p-3.5 rounded-xl bg-white border border-[#EADDE2] shadow-xs hover:border-[#7A1034] transition-all">
                  <div className="w-8 h-8 rounded-lg bg-[#F7EAF0] text-[#7A1034] flex items-center justify-center mb-2">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <h4 className="font-serif text-sm font-bold text-[#570B26]">
                    7 AM Fresh Produce
                  </h4>
                  <p className="text-[11px] text-[#766A70] mt-0.5 leading-snug">
                    Daily farm-plucked harvest arrival.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-[#EADDE2] shadow-xs hover:border-[#7A1034] transition-all">
                  <div className="w-8 h-8 rounded-lg bg-[#FFF9F0] text-[#F9AD24] border border-[#F9AD24]/30 flex items-center justify-center mb-2">
                    <Tag className="w-4 h-4" />
                  </div>
                  <h4 className="font-serif text-sm font-bold text-[#570B26]">
                    Household Savings
                  </h4>
                  <p className="text-[11px] text-[#766A70] mt-0.5 leading-snug">
                    Lowest prices on monthly staples.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-[#EADDE2] shadow-xs hover:border-[#7A1034] transition-all">
                  <div className="w-8 h-8 rounded-lg bg-[#F7EAF0] text-[#7A1034] flex items-center justify-center mb-2">
                    <Store className="w-4 h-4" />
                  </div>
                  <h4 className="font-serif text-sm font-bold text-[#570B26]">
                    25+ Chennai Stores
                  </h4>
                  <p className="text-[11px] text-[#766A70] mt-0.5 leading-snug">
                    Comfortable, air-conditioned aisles.
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* Action Buttons */}
            <FadeIn delay={0.5}>
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link to="/stores">
                  <Button
                    variant="primary"
                    size="md"
                    rightIcon={<ArrowRight className="w-4 h-4" />}
                    className="bg-[#7A1034] hover:bg-[#570B26] text-white font-bold"
                  >
                    Find Nearest Store
                  </Button>
                </Link>

                <button
                  onClick={toggleMute}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-[#7A1034] text-[#7A1034] hover:bg-[#7A1034] hover:text-white font-semibold text-xs transition-all"
                >
                  {isMuted ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
                  <span>{isMuted ? 'Turn Sound On' : 'Mute Sound'}</span>
                </button>
              </div>
            </FadeIn>
          </div>

          {/* Right Column: Clean Pure Video without any overlay text / like / share */}
          <div className="lg:col-span-5 flex justify-center">
            <FadeIn delay={0.3} direction="left">
              <div className="w-full max-w-[320px] sm:max-w-[340px]">
                {/* Clean, Elegant Video Container */}
                <div
                  className="relative rounded-2xl overflow-hidden bg-black shadow-xl border-2 border-[#EADDE2] group cursor-pointer"
                  onClick={togglePlay}
                  title="Click to Play / Pause"
                >
                  {/* Aspect Ratio Video Viewport */}
                  <div className="relative aspect-[9/15] overflow-hidden bg-black flex items-center justify-center">
                    <video
                      ref={videoRef}
                      src="/videos/store-walkthrough.mp4"
                      autoPlay
                      loop
                      muted={isMuted}
                      playsInline
                      className="w-full h-full object-cover"
                    />

                    {/* Minimal Sound Toggle Button (Top-Right) */}
                    <div className="absolute top-3 right-3 z-10">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleMute();
                        }}
                        className="p-2 rounded-full bg-black/60 hover:bg-black/80 backdrop-blur-md text-white border border-white/20 transition-all focus:outline-none"
                        aria-label={isMuted ? 'Unmute video' : 'Mute video'}
                        title={isMuted ? 'Click to Unmute' : 'Mute'}
                      >
                        {isMuted ? <VolumeX className="w-3.5 h-3.5 text-white/70" /> : <Volume2 className="w-3.5 h-3.5 text-[#F9AD24]" />}
                      </button>
                    </div>

                    {/* Subtle Play indicator when paused */}
                    {!isPlaying && (
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center pointer-events-none">
                        <div className="w-12 h-12 rounded-full bg-[#F9AD24] text-[#570B26] flex items-center justify-center shadow-lg">
                          <Play className="w-5 h-5 fill-current ml-0.5" />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default StoreVideoSection;
