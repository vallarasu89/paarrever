import React, { useState } from 'react';
import { TESTIMONIALS } from '@/data/testimonials';
import { ReviewItem } from '@/types/common';
import { STORES } from '@/data/stores';
import { apiService } from '@/services/api';
import { Container } from '@/components/common/Container/Container';
import { Breadcrumb } from '@/components/common/Breadcrumb/Breadcrumb';
import { Button } from '@/components/common/Button/Button';
import { PageTransition } from '@/components/animations/PageTransition';
import {
  Star,
  CheckCircle,
  ThumbsUp,
  MessageSquarePlus,
  X,
  Filter,
  CheckCircle2
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const CUSTOMER_AVATARS: Record<string, string> = {
  'rev-1': 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80', // Kalyani Seshadri
  'rev-2': 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80', // Raghavan Narayanan
  'rev-3': 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80', // Dr. Priya Sundaram
  'rev-4': 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80', // Venkatesh Balaji
  'rev-5': 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80', // Meenakshi Krishnan
  'rev-6': 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80', // Suresh Chandran
};

export const Reviews: React.FC = () => {
  const [reviewsList, setReviewsList] = useState<ReviewItem[]>(TESTIMONIALS);
  const [selectedBranch, setSelectedBranch] = useState('All');
  const [selectedRating, setSelectedRating] = useState<number | 'All'>('All');
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Modal form states
  const [author, setAuthor] = useState('');
  const [storeLocation, setStoreLocation] = useState(STORES[0]?.name || 'Mylapore Branch');
  const [categoryPurchased, setCategoryPurchased] = useState('South Indian Staples & Oils');
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const filteredReviews = reviewsList.filter((r) => {
    const matchesBranch = selectedBranch === 'All' || r.storeLocation.toLowerCase().includes(selectedBranch.toLowerCase().replace(' branch', ''));
    const matchesRating = selectedRating === 'All' || r.rating === selectedRating;
    return matchesBranch && matchesRating;
  });

  const handleHelpful = (id: string) => {
    setReviewsList((prev) =>
      prev.map((r) => (r.id === id ? { ...r, helpfulCount: r.helpfulCount + 1 } : r))
    );
  };

  const handleReviewSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!author || !comment) return;

    setIsSubmitting(true);
    try {
      const res = await apiService.submitReview({
        author,
        rating,
        verifiedShopper: true,
        storeLocation,
        categoryPurchased,
        comment,
      });

      setReviewsList([res.review, ...reviewsList]);
      setSubmitSuccess(true);
      setTimeout(() => {
        setIsModalOpen(false);
        setSubmitSuccess(false);
        setAuthor('');
        setComment('');
      }, 1500);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageTransition>
      {/* Brand Hero Header with Vivid Supermarket Shoppers Background */}
      <section className="relative overflow-hidden bg-[#570B26] text-white py-12 lg:py-16 border-b border-[#7A1034]">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1920&q=85"
            alt="Family Grocery Shopping Reviews"
            className="w-full h-full object-cover opacity-85 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#570B26] via-[#570B26]/80 sm:via-[#570B26]/60 to-transparent" />
        </div>

        <Container className="relative z-10">
          <Breadcrumb items={[{ label: 'Customer Reviews' }]} variant="dark" />
          <div className="max-w-3xl mt-4">
            <span className="text-xs uppercase tracking-[0.2em] text-[#FCE2A9] font-semibold block mb-2">
              Neighborhood Feedback
            </span>
            <h1 className="text-3xl sm:text-5xl font-serif font-medium text-white leading-tight">
              Customer Reviews &amp; Experiences
            </h1>
            <p className="mt-4 text-base text-[#FFF9F0]/90 font-sans leading-relaxed">
              Real reflections from regular Chennai families shopping daily across our 25+ supermarket branches.
            </p>
          </div>
        </Container>
      </section>

      {/* Aggregate Score & Action Bar */}
      <section className="py-12 bg-white border-b border-border">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Score Summary */}
            <div className="lg:col-span-7 flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-10">
              <div className="flex items-baseline gap-3">
                <span className="font-serif text-5xl sm:text-6xl font-bold text-[#7A1034]">
                  4.8
                </span>
                <div>
                  <div className="flex items-center gap-1 text-gold">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-gold" />
                    ))}
                  </div>
                  <span className="text-xs text-muted-grey font-sans block mt-1">
                    Based on 3,400+ verified customer visits
                  </span>
                </div>
              </div>

              <div className="border-l border-border pl-6 space-y-1 text-xs font-sans text-muted-grey hidden sm:block">
                <div>96% would recommend PAARR EVER to their neighbors</div>
                <div>Top rated for: Ponni Rice, Mara Chekku Oils, Kids Passport</div>
              </div>
            </div>

            {/* Write a review CTA */}
            <div className="lg:col-span-5 flex justify-start lg:justify-end">
              <Button
                variant="primary"
                size="lg"
                leftIcon={<MessageSquarePlus className="w-4 h-4 text-gold-light" />}
                onClick={() => setIsModalOpen(true)}
              >
                Share Your Store Experience
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Filter and Reviews Grid */}
      <section className="py-12 bg-ivory min-h-[600px]">
        <Container>
          {/* Filters Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-border">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-grey flex items-center gap-1 mr-2">
                <Filter className="w-3.5 h-3.5" />
                Branch:
              </span>
              {['All', 'Mylapore Branch', 'Besant Nagar Branch', 'Palavakkam Branch'].map((branch) => (
                <button
                  key={branch}
                  onClick={() => setSelectedBranch(branch)}
                  className={`text-xs px-3.5 py-1.5 rounded-full font-medium transition-colors ${
                    selectedBranch === branch
                      ? 'bg-[#7A1034] text-ivory font-semibold shadow-sm'
                      : 'bg-white text-charcoal border border-border hover:bg-[#F7EAF0]/40'
                  }`}
                >
                  {branch}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-grey">
                Rating:
              </span>
              {[5, 4, 'All'].map((rt) => (
                <button
                  key={String(rt)}
                  onClick={() => setSelectedRating(rt as any)}
                  className={`text-xs px-3 py-1 rounded-md font-medium ${
                    selectedRating === rt
                      ? 'bg-[#7A1034] text-gold-light font-bold'
                      : 'bg-white border border-border text-charcoal'
                  }`}
                >
                  {rt === 'All' ? 'All Stars' : `${rt} ★`}
                </button>
              ))}
            </div>
          </div>

          {/* Reviews List */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredReviews.map((rev) => (
              <div
                key={rev.id}
                className="p-6 rounded-xl bg-white border border-border hover:border-[#7A1034]/40 hover:shadow-card transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-1">
                      {Array.from({ length: rev.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-gold fill-gold" />
                      ))}
                    </div>
                    <span className="text-[11px] font-sans text-muted-grey">
                      {rev.date}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-charcoal/80 font-sans leading-relaxed mb-4 italic">
                    &ldquo;{rev.comment}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-border space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img
                        src={CUSTOMER_AVATARS[rev.id] || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80'}
                        alt={rev.author}
                        className="w-10 h-10 rounded-full object-cover ring-2 ring-[#7A1034]/20 shadow-xs shrink-0"
                      />
                      <div>
                        <h4 className="font-serif text-sm font-semibold text-[#570B26]">
                          {rev.author}
                        </h4>
                        <span className="text-[11px] text-muted-grey font-sans block">
                          {rev.storeLocation} &bull; {rev.categoryPurchased}
                        </span>
                      </div>
                    </div>

                    {rev.verifiedShopper && (
                      <span className="inline-flex items-center gap-1 text-[10px] font-sans text-[#7A1034] font-semibold bg-[#F7EAF0] px-2.5 py-0.5 rounded-full">
                        <CheckCircle className="w-3 h-3 text-[#7A1034]" />
                        <span>Verified</span>
                      </span>
                    )}
                  </div>

                  <div className="flex justify-end pt-1">
                    <button
                      onClick={() => handleHelpful(rev.id)}
                      className="inline-flex items-center gap-1 text-[11px] text-muted-grey hover:text-[#7A1034] transition-colors"
                    >
                      <ThumbsUp className="w-3 h-3" />
                      <span>Helpful ({rev.helpfulCount})</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Review Submission Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="fixed inset-0 bg-[#570B26]/70 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="relative bg-white rounded-xl shadow-2xl border border-border max-w-lg w-full p-6 sm:p-8 z-10"
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-full text-muted-grey hover:text-charcoal"
              >
                <X className="w-5 h-5" />
              </button>

              {submitSuccess ? (
                <div className="py-8 text-center space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-[#7A1034] mx-auto" />
                  <h3 className="font-serif text-xl font-bold text-[#570B26]">
                    Review Submitted!
                  </h3>
                  <p className="text-xs text-muted-grey font-sans">
                    Thank you for sharing your feedback with the PAARR EVER community.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleReviewSubmit} className="space-y-4">
                  <div>
                    <h3 className="font-serif text-xl font-bold text-[#570B26]">
                      Share Your Shopping Experience
                    </h3>
                    <p className="text-xs text-muted-grey font-sans mt-0.5">
                      Your review helps us maintain quality across all Chennai stores.
                    </p>
                  </div>

                  {/* Rating Selector */}
                  <div>
                    <label className="block text-xs font-semibold uppercase text-charcoal mb-1">
                      Your Rating
                    </label>
                    <div className="flex items-center gap-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          type="button"
                          key={star}
                          onClick={() => setRating(star)}
                          className="p-1 focus:outline-none"
                        >
                          <Star
                            className={`w-6 h-6 ${
                              star <= rating
                                ? 'text-gold fill-gold'
                                : 'text-border stroke-muted-grey'
                            }`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase text-charcoal mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={author}
                      onChange={(e) => setAuthor(e.target.value)}
                      placeholder="e.g. S. Radhakrishnan"
                      className="w-full px-3.5 py-2 rounded-md bg-ivory border border-border text-sm text-charcoal focus:outline-none focus:border-[#7A1034]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold uppercase text-charcoal mb-1">
                        Store Branch
                      </label>
                      <select
                        value={storeLocation}
                        onChange={(e) => setStoreLocation(e.target.value)}
                        className="w-full px-3 py-2 rounded-md bg-ivory border border-border text-xs text-charcoal focus:outline-none focus:border-[#7A1034]"
                      >
                        {STORES.map((s) => (
                          <option key={s.id} value={`${s.area} Branch`}>
                            {s.area} Branch
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase text-charcoal mb-1">
                        Category Purchased
                      </label>
                      <select
                        value={categoryPurchased}
                        onChange={(e) => setCategoryPurchased(e.target.value)}
                        className="w-full px-3 py-2 rounded-md bg-ivory border border-border text-xs text-charcoal focus:outline-none focus:border-[#7A1034]"
                      >
                        <option value="South Indian Staples & Oils">Staples &amp; Oils</option>
                        <option value="Fresh Farm Produce">Fresh Farm Produce</option>
                        <option value="Degree Filter Coffee">Degree Filter Coffee</option>
                        <option value="Dairy & Curd">Dairy &amp; Curd</option>
                        <option value="Traditional Snacks">Traditional Snacks</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase text-charcoal mb-1">
                      Your Review &amp; Experience
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      placeholder="Share details about product freshness, store cleanliness, or staff courtesy..."
                      className="w-full px-3.5 py-2 rounded-md bg-ivory border border-border text-xs sm:text-sm text-charcoal focus:outline-none focus:border-[#7A1034]"
                    />
                  </div>

                  <div className="pt-2">
                    <Button
                      type="submit"
                      variant="primary"
                      size="md"
                      isLoading={isSubmitting}
                      fullWidth
                    >
                      Submit Review
                    </Button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </PageTransition>
  );
};

export default Reviews;
