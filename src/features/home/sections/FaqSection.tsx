import React, { useState } from 'react';
import { FAQS } from '@/data/faqs';
import { Container } from '@/components/common/Container/Container';
import { SectionHeading } from '@/components/common/SectionHeading/SectionHeading';
import { FadeIn } from '@/components/animations/FadeIn';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(FAQS[0]?.id || null);

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-16 sm:py-24 bg-white border-t border-border" id="faq">
      <Container size="narrow">
        <SectionHeading
          eyebrow="Got Questions?"
          title="Frequently Asked Questions"
          description="Everything you need to know about shopping at PAARR EVER stores, products, sourcing, and the kids PAARR Passport program."
        />

        <div className="space-y-3">
          {FAQS.slice(0, 5).map((faq, idx) => {
            const isOpen = openId === faq.id;
            return (
              <FadeIn key={faq.id} delay={idx * 0.05}>
                <div className="rounded-lg bg-white border border-[#EADDE2] hover:border-[#7A1034]/50 overflow-hidden transition-colors shadow-subtle">
                  <button
                    type="button"
                    onClick={() => toggleAccordion(faq.id)}
                    className={`w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:bg-[#F7EAF0]/40 transition-colors ${
                      isOpen ? 'bg-[#F7EAF0]' : 'bg-white'
                    }`}
                    aria-expanded={isOpen}
                  >
                    <span className="font-serif text-base sm:text-lg font-medium text-[#570B26]">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#7A1034] shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 text-[#F9AD24]' : ''
                      }`}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5 text-xs sm:text-sm text-[#292329]/90 font-sans leading-relaxed border-t border-[#EADDE2] pt-3 bg-[#F7EAF0]/40">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
