import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Star, Clock, Car, Check, X, Sparkles, MessageCircle, ArrowRight, ShieldCheck, MapPin, Calendar } from 'lucide-react';
import { TOUR_PACKAGES } from '../data';

interface TourCatalogProps {
  onBookNow: (experienceId: string) => void;
  onViewDetails: (experienceId: string) => void;
}

export default function TourCatalog({ onBookNow, onViewDetails }: TourCatalogProps) {
  const [activeTab, setActiveTab] = useState<'all' | 'ubud-highlights' | 'uluwatu-sunset'>('all');

  const toursToDisplay = activeTab === 'all'
    ? TOUR_PACKAGES
    : TOUR_PACKAGES.filter((e) => e.id === activeTab);

  const handleDirectWhatsApp = (title: string) => {
    const text = `Halo Tim Gede Bali Trip, saya ingin booking paket tour *${title}* (USD $45 / car, Up to 10 hours). Mohon info ketersediaan tanggalnya. Terima kasih!`;
    const encoded = encodeURIComponent(text);
    window.location.href = `https://wa.me/6281239633946?text=${encoded}`;
  };

  return (
    <div className="pt-28 pb-24 px-4 sm:px-6 md:px-12 bg-neutral-950 min-h-screen text-gold-100 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Banner Section */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center space-x-2 bg-gold-500/10 border border-gold-400/20 px-4 py-1.5 rounded-full">
            <Sparkles size={14} className="text-gold-400" />
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-gold-400 font-bold">
              Official Private Tour Packages
            </span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-6xl text-gold-100 font-medium tracking-wide">
            Paket Tour Privat Bali
          </h1>
          <p className="font-sans text-sm md:text-base text-gold-200/70 leading-relaxed font-light max-w-2xl mx-auto">
            Nikmati keindahan autentik Bali dengan kendaraan ber-AC privat, supir berpengalaman berbahasa Inggris, dan jadwal perjalanan yang 100% fleksibel tanpa dicampur peserta lain.
          </p>
        </div>

        {/* Quick Filter Switcher */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 bg-neutral-900 border border-gold-400/20 rounded-lg">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-5 py-2.5 rounded-md text-xs font-mono font-semibold uppercase tracking-wider transition-all duration-300 ${
                activeTab === 'all'
                  ? 'bg-gold-400 text-neutral-950 shadow-md font-bold'
                  : 'text-gold-300/60 hover:text-gold-200'
              }`}
            >
              Semua Paket (2)
            </button>
            <button
              onClick={() => setActiveTab('ubud-highlights')}
              className={`px-5 py-2.5 rounded-md text-xs font-mono font-semibold uppercase tracking-wider transition-all duration-300 ${
                activeTab === 'ubud-highlights'
                  ? 'bg-gold-400 text-neutral-950 shadow-md font-bold'
                  : 'text-gold-300/60 hover:text-gold-200'
              }`}
            >
              Ubud Highlights
            </button>
            <button
              onClick={() => setActiveTab('uluwatu-sunset')}
              className={`px-5 py-2.5 rounded-md text-xs font-mono font-semibold uppercase tracking-wider transition-all duration-300 ${
                activeTab === 'uluwatu-sunset'
                  ? 'bg-gold-400 text-neutral-950 shadow-md font-bold'
                  : 'text-gold-300/60 hover:text-gold-200'
              }`}
            >
              🌅 Uluwatu & Sunset
            </button>
          </div>
        </div>

        {/* Tour Cards Grid (2 Columns on large screens) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch" id="tour-packages-deck">
          {toursToDisplay.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-neutral-900/60 border border-gold-400/20 rounded-2xl overflow-hidden flex flex-col justify-between shadow-2xl hover:border-gold-400/40 transition-all duration-500"
            >
              {/* Image with Tagline & Badges */}
              <div className="relative h-72 sm:h-80 w-full overflow-hidden group">
                <img
                  src={exp.cardImage}
                  alt={exp.title}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/30 to-transparent" />

                {/* Tagline pill */}
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1.5 bg-neutral-950/80 backdrop-blur-md border border-gold-400/30 text-gold-300 text-xs font-mono font-semibold px-3 py-1.5 rounded-full">
                    <Sparkles size={12} className="text-gold-400" />
                    {exp.tagline}
                  </span>
                </div>

                {/* Rating & Review badge */}
                <div className="absolute top-4 right-4 bg-neutral-950/80 backdrop-blur-md border border-gold-400/30 rounded-full px-3 py-1.5 flex items-center gap-1.5 text-gold-400">
                  <Star size={13} className="fill-gold-400" />
                  <span className="font-mono text-xs font-bold">{exp.rating}</span>
                  <span className="text-[10px] text-gold-200/60 font-mono">({exp.reviewCount})</span>
                </div>

                {/* Bottom title on image for high contrast readability */}
                <div className="absolute bottom-4 left-4 right-4 text-left">
                  <div className="inline-block bg-gold-400 text-neutral-950 text-[10px] font-mono font-extrabold uppercase tracking-widest px-2.5 py-0.5 rounded-sm mb-1.5">
                    {exp.tourType || 'PRIVATE TOUR'}
                  </div>
                  <h2 className="font-serif text-2xl sm:text-3xl text-gold-100 font-bold tracking-wide drop-shadow-md">
                    {exp.title}
                  </h2>
                </div>
              </div>

              {/* Main Card Content */}
              <div className="p-6 sm:p-8 flex-grow flex flex-col justify-between text-left space-y-6">
                
                {/* Description */}
                <p className="text-gold-200/80 text-sm sm:text-base font-sans leading-relaxed font-light">
                  {exp.shortDesc}
                </p>

                {/* ✨ TOUR HIGHLIGHTS */}
                <div className="bg-neutral-950/60 border border-gold-400/15 rounded-xl p-5 space-y-3.5">
                  <div className="flex items-center justify-between border-b border-gold-400/10 pb-2.5">
                    <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-gold-400 font-bold flex items-center gap-2">
                      <span>✨</span>
                      <span>TOUR HIGHLIGHTS</span>
                    </h3>
                    <span className="text-[11px] font-mono text-gold-300/50">
                      {exp.highlights.length} Destinasi Pilihan
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                    {exp.highlights.map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-gold-100 font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold-400 flex-shrink-0" />
                        <span className="leading-tight">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 🚗 PRIVATE TOUR PRICING & INCLUSIONS BOX */}
                <div className="bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 border border-gold-400/30 rounded-xl p-5 sm:p-6 space-y-5 shadow-inner">
                  
                  {/* Price Header */}
                  <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-gold-400/15">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2.5 bg-gold-400/10 border border-gold-400/30 rounded-lg text-gold-400">
                        <Car size={20} />
                      </div>
                      <div>
                        <div className="font-mono text-[11px] uppercase tracking-widest text-gold-400 font-bold">
                          🚗 PRIVATE TOUR
                        </div>
                        <div className="flex items-baseline gap-1.5">
                          <span className="font-serif text-3xl font-extrabold text-gold-200">
                            USD $45
                          </span>
                          <span className="text-sm font-mono text-gold-300/70">/ car</span>
                        </div>
                      </div>
                    </div>

                    <div className="inline-flex items-center gap-1.5 bg-gold-400/10 border border-gold-400/25 px-3.5 py-1.5 rounded-full text-gold-300 font-mono text-xs">
                      <Clock size={13} className="text-gold-400" />
                      <span className="font-semibold">Up to 10 hours</span>
                    </div>
                  </div>

                  {/* INCLUDED Section */}
                  <div className="space-y-2">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-emerald-400 font-bold block">
                      INCLUDED
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gold-200/90">
                      {exp.inclusions.map((inc, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <Check size={14} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                          <span className="leading-tight">{inc}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* EXCLUDED Section */}
                  <div className="space-y-1.5 pt-2 border-t border-gold-400/10 text-xs">
                    <div className="flex items-start gap-2 text-gold-300/60">
                      <span className="font-mono text-[11px] uppercase tracking-wider text-rose-400/90 font-bold">
                        EXCLUDED:
                      </span>
                      <span className="text-gold-200/60">
                        {exp.exclusions[0] || 'Entrance tickets, meals and personal expenses.'}
                      </span>
                    </div>
                    {exp.extraHourRate && (
                      <div className="flex items-center gap-1.5 text-[11px] font-mono text-gold-400/90 pt-1">
                        <Clock size={11} />
                        <span>Extra hour: {exp.extraHourRate}</span>
                      </div>
                    )}
                  </div>

                </div>

                {/* Action Buttons Section */}
                <div className="pt-2 space-y-3">
                  {/* Primary Exact Prompt Button */}
                  <button
                    onClick={() => onBookNow(exp.id)}
                    id={`btn-book-${exp.id}`}
                    className="w-full bg-gold-400 hover:bg-gold-500 active:scale-[0.98] text-neutral-950 font-mono text-xs sm:text-sm font-extrabold uppercase tracking-widest py-4 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-gold-400/20 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>{exp.buttonText || `BOOK YOUR ${exp.title}`}</span>
                    <ArrowRight size={16} className="stroke-[2.5]" />
                  </button>

                  {/* Secondary direct WhatsApp button */}
                  <button
                    onClick={() => handleDirectWhatsApp(exp.title)}
                    className="w-full bg-neutral-900 hover:bg-neutral-800 text-gold-200/90 hover:text-gold-100 border border-gold-400/25 hover:border-gold-400/50 font-mono text-xs uppercase tracking-wider py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <MessageCircle size={15} className="text-emerald-400" />
                    <span>Chat WhatsApp Langsung (+62 812-3963-3946)</span>
                  </button>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* Reassurance Footer Badge */}
        <div className="mt-16 pt-8 border-t border-gold-400/10 flex flex-wrap items-center justify-center gap-8 text-xs font-mono text-gold-300/60">
          <div className="flex items-center gap-2">
            <ShieldCheck size={16} className="text-gold-400" />
            <span>100% Private Tour & Dedicated Driver</span>
          </div>
          <div className="flex items-center gap-2">
            <Car size={16} className="text-gold-400" />
            <span>Clean, Air-Conditioned Vehicle Included</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={16} className="text-gold-400" />
            <span>Flexible Itinerary Up to 10 Hours</span>
          </div>
        </div>

      </div>
    </div>
  );
}
