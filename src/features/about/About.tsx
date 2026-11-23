import React from 'react';
import { Container } from '@/components/common/Container/Container';
import { Breadcrumb } from '@/components/common/Breadcrumb/Breadcrumb';
import { SectionHeading } from '@/components/common/SectionHeading/SectionHeading';
import { Button } from '@/components/common/Button/Button';
import { FadeIn } from '@/components/animations/FadeIn';
import { PageTransition } from '@/components/animations/PageTransition';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export const About: React.FC = () => {
  const milestones = [
    { year: 'Vision', title: 'The Neighborhood Promise', desc: 'Conceived to bring honest, chemical-free groceries back into Chennai residential areas without inflated boutique pricing.' },
    { year: 'Network', title: 'Direct Delta Partnerships', desc: 'Forged lasting agreements with rice cultivators in Thanjavur and oil cold-pressers in Erode and Madurai.' },
    { year: 'Expansion', title: '25+ Modern Stores', desc: 'Serving iconic neighborhoods including Mylapore, Besant Nagar, Kodambakkam, Royapettah, ECR, and beyond.' },
    { year: 'Community', title: 'Neighborhood First', desc: 'Deepening community roots with personalized hospitality, senior shopping assistance, and direct farmer support.' },
  ];

  const standards = [
    {
      title: 'No Artificial Whiteners or Talc',
      desc: 'Our rices and pulses are never treated with liquid paraffin, talc powder, or artificial polishing agents.',
    },
    {
      title: 'Cold Vaagai Wood Pressing',
      desc: 'Edible oils are extracted below 40°C in wooden churns, safeguarding volatile nutrients and natural aroma.',
    },
    {
      title: 'Dawn Produce Deliveries',
      desc: 'Vegetables and greens reach store shelves within hours of harvesting from regional farmer clusters.',
    },
    {
      title: 'Continuous Quality Audits',
      desc: 'Random batch testing for moisture, aflatoxins, and pesticide residues before bagging.',
    },
  ];

  return (
    <PageTransition>
      {/* Brand Hero Header with Vivid Farm & Heritage Background */}
      <section className="relative overflow-hidden bg-[#570B26] text-white py-12 lg:py-16 border-b border-[#7A1034]">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1920&q=85"
            alt="Delta Agricultural Harvest"
            className="w-full h-full object-cover opacity-85 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#570B26] via-[#570B26]/80 sm:via-[#570B26]/60 to-transparent" />
        </div>

        <Container className="relative z-10">
          <Breadcrumb items={[{ label: 'About Us' }]} variant="dark" />
          <div className="max-w-3xl mt-4">
            <span className="text-xs uppercase tracking-[0.2em] text-[#FCE2A9] font-semibold block mb-2">
              Our Heritage &amp; Philosophy
            </span>
            <h1 className="text-3xl sm:text-5xl font-serif font-medium text-white leading-tight">
              Rooted in South Indian Tradition, Built for Everyday Savings
            </h1>
            <p className="mt-4 text-base sm:text-lg text-[#FFF9F0]/90 font-sans leading-relaxed">
              PAARR EVER is Chennai’s trusted neighborhood supermarket network dedicated to restoring purity, honest pricing, and courteous community service to daily grocery shopping.
            </p>
          </div>
        </Container>
      </section>

      {/* Story Section */}
      <section className="py-16 sm:py-24 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs font-semibold tracking-widest text-[#7A1034] uppercase block">
                The PAARR Journey
              </span>
              <h2 className="text-2xl sm:text-4xl font-serif font-medium text-[#570B26] leading-snug">
                Why We Built PAARR EVER
              </h2>
              <p className="text-sm sm:text-base text-charcoal/80 font-sans leading-relaxed">
                For generations, South Indian families depended on trusted local grocers who knew where every sack of rice was harvested and who personally guaranteed the pungency of the sesame oil. In recent years, hyper-convenience apps and massive industrial discounters replaced personal trust with anonymous packets and processed compromises.
              </p>
              <p className="text-sm sm:text-base text-charcoal/80 font-sans leading-relaxed">
                PAARR EVER was created to prove that convenience, lowest prices, and uncompromising purity can coexist. We designed our air-conditioned neighborhood stores so that you can walk in, smell the freshly ground coffee, inspect the crisp country vegetables, and converse with store managers who genuinely care.
              </p>

              <div className="pt-2 grid grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-ivory border border-border">
                  <span className="font-serif text-3xl font-bold text-[#7A1034]">25+</span>
                  <span className="block text-xs text-muted-grey font-sans mt-1">Supermarket locations across Tamil Nadu</span>
                </div>
                <div className="p-4 rounded-lg bg-ivory border border-border">
                  <span className="font-serif text-3xl font-bold text-[#7A1034]">5,000+</span>
                  <span className="block text-xs text-muted-grey font-sans mt-1">Curated everyday essentials &amp; staples</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden border border-border shadow-elevated bg-white aspect-[4/3]">
                  <img
                    src="https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&w=1000&q=80"
                    alt="PAARR EVER Supermarket store team assisting shoppers"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent flex items-end p-5">
                    <p className="font-serif text-sm font-semibold text-white">
                      Friendly staff who know you and your neighborhood
                    </p>
                  </div>
                </div>

                {/* Farmer Partner Inset (Contained inside container) */}
                <div className="absolute bottom-3 right-3 z-20 w-28 h-28 rounded-xl overflow-hidden border-2 border-[#F9AD24] shadow-xl hidden sm:block bg-white">
                  <img
                    src="https://images.unsplash.com/photo-1595278069441-2cf29f8005a4?auto=format&fit=crop&w=300&q=80"
                    alt="Delta Sourcing Farmer Partner"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-[#570B26]/90 py-0.5 px-1 text-center text-[9px] font-bold text-[#FCE2A9]">
                    Delta Farmer Partner
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Sourcing & Standards */}
      <section className="py-16 sm:py-24 bg-ivory border-y border-border" id="quality">
        <Container>
          <SectionHeading
            eyebrow="Direct Delta Sourcing"
            title="Our Quality and Purity Commitments"
            description="We believe you deserve to know where your food comes from. Every product on our shelves meets stringent natural standards."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {standards.map((std, i) => (
              <FadeIn key={std.title} delay={i * 0.08}>
                <div className="p-6 rounded-xl bg-white border border-border h-full flex flex-col justify-between hover:border-[#7A1034]/50 transition-colors shadow-subtle">
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-[#F7EAF0] flex items-center justify-center text-[#7A1034] mb-4">
                      <CheckCircle2 className="w-5 h-5 text-[#7A1034]" />
                    </div>
                    <h3 className="font-serif text-lg font-medium text-[#570B26] mb-2">
                      {std.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-grey font-sans leading-relaxed">
                      {std.desc}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* Milestones */}
      <section className="py-16 sm:py-24 bg-white">
        <Container size="narrow">
          <SectionHeading
            eyebrow="Milestones"
            title="Our Path of Purpose"
            description="Key pillars that shaped the PAARR EVER retail experience."
          />

          <div className="space-y-8 relative before:absolute before:inset-0 before:left-4 sm:before:left-1/2 before:w-[1px] before:bg-border">
            {milestones.map((m, idx) => (
              <div
                key={m.title}
                className={`relative flex flex-col sm:flex-row items-start sm:items-center gap-6 ${
                  idx % 2 === 0 ? 'sm:flex-row-reverse' : ''
                }`}
              >
                <div className="w-8 h-8 rounded-full bg-[#7A1034] text-gold-light flex items-center justify-center font-bold text-xs shrink-0 z-10 shadow-sm border-2 border-ivory sm:mx-auto">
                  {idx + 1}
                </div>

                <div className="w-full sm:w-[calc(50%-2rem)] p-6 rounded-xl bg-ivory border border-border">
                  <span className="text-xs uppercase font-semibold text-gold tracking-widest block mb-1">
                    {m.year}
                  </span>
                  <h3 className="font-serif text-lg font-medium text-[#570B26] mb-1.5">
                    {m.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-grey font-sans leading-relaxed">
                    {m.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Hospitality CTA */}
      <section className="py-16 bg-[#570B26] text-white border-t border-[#7A1034]">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl font-serif font-medium text-white">
              Experience PAARR EVER in Your Neighborhood
            </h2>
            <p className="text-sm sm:text-base text-[#FFF9F0]/90 font-sans leading-relaxed">
              Step into your local store today and discover why thousands of Chennai families choose PAARR EVER for their weekly pantry and produce.
            </p>
            <div className="pt-2">
              <Link to="/stores">
                <Button
                  variant="gold"
                  size="lg"
                  rightIcon={<ArrowRight className="w-4 h-4 text-[#570B26]" />}
                  className="font-bold shadow-md bg-[#F9AD24] hover:bg-[#FCE2A9] text-[#570B26] border border-[#F9AD24]"
                >
                  Locate Your Nearest Branch
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </PageTransition>
  );
};

export default About;
