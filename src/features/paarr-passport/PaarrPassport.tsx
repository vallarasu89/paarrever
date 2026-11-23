import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container } from '@/components/common/Container/Container';
import { Breadcrumb } from '@/components/common/Breadcrumb/Breadcrumb';
import { SectionHeading } from '@/components/common/SectionHeading/SectionHeading';
import { Button } from '@/components/common/Button/Button';
import { FadeIn } from '@/components/animations/FadeIn';
import { PageTransition } from '@/components/animations/PageTransition';
import {
  Compass,
  Gift,
  Award,
  Sparkles,
  BookOpen,
  MapPin
} from 'lucide-react';

export const PaarrPassport: React.FC = () => {
  const [activeQuizAnswer, setActiveQuizAnswer] = useState<number | null>(null);
  const [quizFeedback, setQuizFeedback] = useState<string | null>(null);

  const steps = [
    {
      step: '01',
      title: 'Shop Above ₹100',
      description: 'Visit any of our 25+ PAARR EVER supermarkets. Complete any grocery purchase exceeding ₹100.',
      icon: Gift,
    },
    {
      step: '02',
      title: 'Ask for the Passport Booklet',
      description: 'Request the complimentary PAARR Junior Explorer Passport booklet from your billing counter executive.',
      icon: BookOpen,
    },
    {
      step: '03',
      title: 'Collect Stamps & Solve Puzzles',
      description: 'On every shopping trip, get a custom store stamp. Complete fun South Indian nutrition puzzles inside the book.',
      icon: Compass,
    },
    {
      step: '04',
      title: 'Redeem Tiers & Surprise Gifts',
      description: 'Hit 5, 10, or 20 stamps to unlock official badges, school stationery hampers, and healthy treat packs.',
      icon: Award,
    },
  ];

  const tiers = [
    {
      level: 'Tier 1: Junior Explorer',
      stamps: '5 Store Stamps',
      reward: 'Explorer Badge + Organic Fruit Snack Pack',
      description: 'Awarded after 5 neighborhood store visits. Kids receive their first official PAARR badge pin.',
      badgeColor: 'bg-amber-100 text-amber-900 border-amber-300',
    },
    {
      level: 'Tier 2: Delta Detective',
      stamps: '10 Store Stamps',
      reward: 'Eco-Stationery Kit + Story Coloring Booklet',
      description: 'Awarded when your child identifies 5 native Tamil crops and completes the midpoint puzzle page.',
      badgeColor: 'bg-rose-100 text-rose-900 border-rose-300',
    },
    {
      level: 'Tier 3: Master Harvester',
      stamps: '20 Store Stamps',
      reward: 'PAARR Ever Gold Certificate + Family Gift Hamper',
      description: 'Celebrated at our flagship counters! Includes a surprise gift hamper for the entire family.',
      badgeColor: 'bg-gold/20 text-[#7A1034] border-gold',
    },
  ];

  const handleQuiz = (optionIdx: number) => {
    setActiveQuizAnswer(optionIdx);
    if (optionIdx === 1) {
      setQuizFeedback('Correct! Sesame (Gingelly) oil is traditionally wood-pressed in Mara Chekku mills!');
    } else {
      setQuizFeedback('Almost! The traditional Tamil oil pressed in Mara Chekku is Sesame / Gingelly oil.');
    }
  };

  return (
    <PageTransition>
      {/* Brand Hero Header with Vivid Kids & Family Shopping Background */}
      <section className="relative overflow-hidden bg-[#570B26] text-white py-14 lg:py-18 border-b border-[#7A1034]">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1920&q=85"
            alt="PAARR Passport Kids Explorer Journey"
            className="w-full h-full object-cover opacity-85 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#570B26] via-[#570B26]/80 sm:via-[#570B26]/60 to-transparent" />
        </div>

        <Container className="relative z-10">
          <Breadcrumb
            items={[{ label: 'PAARR Passport' }]}
            variant="dark"
          />

          <div className="max-w-3xl mt-6 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/25 text-[#FCE2A9] text-xs font-semibold uppercase tracking-wider border border-[#F9AD24]/40">
              <Compass className="w-4 h-4 text-[#F9AD24]" />
              <span>Signature Kids Loyalty Club</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-medium text-white leading-tight">
              The PAARR Passport for Young Explorers
            </h1>

            <p className="text-base sm:text-lg text-[#FFF9F0]/90 font-sans leading-relaxed">
              Transforming weekend grocery runs into an educational adventure. Children collect store stamps, discover where traditional foods originate, and win delightful gifts on every step of their journey.
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <Link to="/stores">
                <Button
                  variant="gold"
                  size="lg"
                  leftIcon={<MapPin className="w-4 h-4 text-[#570B26]" />}
                  className="font-bold shadow-md bg-[#F9AD24] hover:bg-[#FCE2A9] text-[#570B26] border border-[#F9AD24]"
                >
                  Locate Passport Counters in Chennai
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* How it works */}
      <section className="py-16 sm:py-24 bg-white">
        <Container>
          <SectionHeading
            eyebrow="Simple 4-Step Journey"
            title="How Your Child Can Join the Club"
            description="Participation is completely free with your regular household grocery shopping."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((st, idx) => {
              const Icon = st.icon;
              return (
                <FadeIn key={st.step} delay={idx * 0.1}>
                  <div className="p-6 rounded-xl bg-ivory border border-border h-full flex flex-col justify-between hover:border-[#7A1034]/40 transition-colors shadow-subtle">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="font-serif text-2xl font-bold text-[#7A1034]">
                          {st.step}
                        </span>
                        <div className="w-10 h-10 rounded-lg bg-[#F7EAF0] flex items-center justify-center text-[#7A1034]">
                          <Icon className="w-5 h-5" />
                        </div>
                      </div>

                      <h3 className="font-serif text-lg font-medium text-[#570B26] mb-2">
                        {st.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-muted-grey font-sans leading-relaxed">
                        {st.description}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Stamp Tiers & Rewards */}
      <section className="py-16 sm:py-24 bg-cream/60 border-y border-border">
        <Container>
          <SectionHeading
            eyebrow="Milestones & Surprises"
            title="Passport Explorer Tiers"
            description="Kids look forward to each store visit knowing a tangible achievement is within reach."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {tiers.map((t, idx) => (
              <FadeIn key={t.level} delay={idx * 0.1}>
                <div className="p-6 sm:p-8 rounded-xl bg-white border border-border shadow-card h-full flex flex-col justify-between">
                  <div>
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border ${t.badgeColor} mb-4`}>
                      {t.stamps}
                    </span>

                    <h3 className="font-serif text-xl font-bold text-[#570B26] mb-1">
                      {t.level}
                    </h3>

                    <div className="p-3 rounded-md bg-ivory border border-border/80 my-4 text-xs font-sans text-[#7A1034] font-semibold flex items-center gap-2">
                      <Gift className="w-4 h-4 text-gold shrink-0" />
                      <span>{t.reward}</span>
                    </div>

                    <p className="text-xs sm:text-sm text-muted-grey font-sans leading-relaxed">
                      {t.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* Sample Puzzle Preview / Interactive Quiz */}
      <section className="py-16 sm:py-20 bg-ivory">
        <Container size="narrow">
          <div className="bg-white p-8 sm:p-10 rounded-2xl border border-border shadow-elevated text-center space-y-6">
            <div className="w-12 h-12 rounded-full bg-[#F7EAF0] text-[#7A1034] mx-auto flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-gold" />
            </div>

            <div>
              <span className="text-xs uppercase tracking-widest text-[#7A1034] font-semibold">
                Interactive Booklet Teaser
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#570B26] mt-1">
                A Sample Quiz from the PAARR Passport Booklet
              </h3>
              <p className="text-sm text-muted-grey font-sans mt-2 max-w-lg mx-auto">
                Test your South Indian food knowledge! What traditional cooking oil is extracted in a Mara Chekku (wood mill)?
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-md mx-auto">
              {['Palm Oil', 'Sesame (Nallennai)', 'Mineral Oil'].map((opt, i) => (
                <button
                  key={opt}
                  onClick={() => handleQuiz(i)}
                  className={`p-3 rounded-lg border text-xs sm:text-sm font-medium transition-all ${
                    activeQuizAnswer === i
                      ? 'border-[#7A1034] bg-[#7A1034] text-ivory shadow-sm'
                      : 'border-border bg-ivory text-charcoal hover:border-[#7A1034]/40'
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>

            {quizFeedback && (
              <div className="p-3 rounded-md bg-[#F7EAF0] text-[#7A1034] text-xs sm:text-sm font-medium max-w-md mx-auto animate-fade-in">
                {quizFeedback}
              </div>
            )}
          </div>
        </Container>
      </section>

      {/* Parents FAQ */}
      <section className="py-16 bg-white border-t border-border">
        <Container size="narrow">
          <SectionHeading
            eyebrow="For Parents"
            title="Passport Program FAQs"
            description="Clear answers for families interested in the PAARR Passport program."
          />

          <div className="space-y-4 font-sans text-sm">
            <div className="p-5 rounded-lg bg-ivory border border-border">
              <strong className="text-[#570B26] block font-serif text-base mb-1">
                Is there any fee or subscription required to join?
              </strong>
              <p className="text-xs sm:text-sm text-muted-grey leading-relaxed">
                None at all! The PAARR Passport booklet is 100% complimentary. Any customer visiting with a child and making an invoice of ₹100 or more can ask for one at the counter.
              </p>
            </div>

            <div className="p-5 rounded-lg bg-ivory border border-border">
              <strong className="text-[#570B26] block font-serif text-base mb-1">
                Can stamps be collected across different PAARR EVER stores?
              </strong>
              <p className="text-xs sm:text-sm text-muted-grey leading-relaxed">
                Yes! Every PAARR EVER store in Chennai has an official branch stamp. Kids love collecting stamps from different neighborhood branches (e.g. Mylapore, Besant Nagar, Palavakkam) during family outings.
              </p>
            </div>

            <div className="p-5 rounded-lg bg-ivory border border-border">
              <strong className="text-[#570B26] block font-serif text-base mb-1">
                What age group is the booklet designed for?
              </strong>
              <p className="text-xs sm:text-sm text-muted-grey leading-relaxed">
                The puzzles, coloring pages, and challenges are primarily crafted for children aged 4 to 12 years old, though younger toddlers enjoy receiving the stamp stamp at checkout!
              </p>
            </div>
          </div>
        </Container>
      </section>
    </PageTransition>
  );
};

export default PaarrPassport;
