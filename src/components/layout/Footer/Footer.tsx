import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BRAND_INFO } from '@/utils/constants';
import { apiService } from '@/services/api';
import { Button } from '@/components/common/Button/Button';
import { Container } from '@/components/common/Container/Container';
import { BrandLogo } from '@/components/common/BrandLogo';
import { Phone, Mail, MapPin, CheckCircle2 } from 'lucide-react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }
    setErrorMsg('');
    setLoading(true);
    try {
      await apiService.subscribeNewsletter(email);
      setSubscribed(true);
      setEmail('');
    } catch {
      setErrorMsg('Could not subscribe. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="bg-white text-[#292329] border-t border-[#EADDE2]">
      {/* 1. Stay Connected / Newsletter Section matching the reference screenshot */}
      <div className="py-16 bg-[#FFF9F0] border-b border-[#EADDE2]">
        <Container size="narrow">
          <div className="text-center max-w-xl mx-auto space-y-3">
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#570B26]">
              Stay Connected
            </h3>
            <p className="text-sm text-[#766A70] font-sans leading-relaxed">
              Get the latest offers, and stories from South India delivered to your inbox
            </p>

            <div className="pt-4 max-w-md mx-auto">
              {subscribed ? (
                <div className="p-3.5 rounded-md bg-[#F7EAF0] border border-[#7A1034]/30 flex items-center justify-center gap-2 text-[#7A1034] text-xs sm:text-sm font-semibold">
                  <CheckCircle2 className="w-5 h-5 text-[#7A1034] shrink-0" />
                  <span>Thank you! You are subscribed to PAARR EVER updates.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="space-y-2">
                  <div className="flex flex-col sm:flex-row gap-2">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter Email"
                      aria-label="Enter your email"
                      className="flex-1 px-4 py-2.5 rounded-md bg-white border border-[#EADDE2] text-[#292329] placeholder-[#766A70]/60 text-sm font-sans focus:outline-none focus:border-[#7A1034] focus:ring-1 focus:ring-[#7A1034] shadow-sm"
                    />
                    <Button
                      type="submit"
                      variant="primary"
                      size="md"
                      isLoading={loading}
                      className="shrink-0 px-7 font-bold bg-[#7A1034] hover:bg-[#570B26] text-white rounded-md shadow-sm border border-[#7A1034]"
                    >
                      Subscribe
                    </Button>
                  </div>
                  {errorMsg && <p className="text-xs text-red-600 font-sans">{errorMsg}</p>}
                </form>
              )}
            </div>
          </div>
        </Container>
      </div>

      {/* 2. Main Footer Navigation Columns */}
      <div className="py-14 bg-white border-b border-[#EADDE2]">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
            {/* Brand column with Official Logo */}
            <div className="lg:col-span-2 space-y-4">
              <Link to="/" className="inline-block">
                <BrandLogo size="md" />
              </Link>

              <p className="text-xs sm:text-sm text-[#292329]/80 leading-relaxed font-sans max-w-sm">
                Your trusted neighborhood grocery store, bringing authentic South Indian flavors and everyday essentials to Chennai and beyond.
              </p>

              <div className="pt-2">
                <a
                  href={BRAND_INFO.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-[#F7EAF0] text-[#7A1034] flex items-center justify-center hover:bg-[#7A1034] hover:text-white transition-colors border border-[#7A1034]/20"
                  aria-label="Instagram"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick links */}
            <div>
              <h4 className="font-serif text-sm font-bold text-[#570B26] tracking-wide mb-4">
                Quick links
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm font-sans">
                <li>
                  <Link to="/" className="text-[#292329]/80 hover:text-[#7A1034] transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/stores" className="text-[#292329]/80 hover:text-[#7A1034] transition-colors">
                    Store locator
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-[#292329]/80 hover:text-[#7A1034] transition-colors">
                    About us
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-[#292329]/80 hover:text-[#7A1034] transition-colors">
                    Contact page
                  </Link>
                </li>
                <li>
                  <Link to="/reviews" className="text-[#292329]/80 hover:text-[#7A1034] transition-colors">
                    Reviews
                  </Link>
                </li>
              </ul>
            </div>

            {/* Supermarket Departments */}
            <div>
              <h4 className="font-serif text-sm font-bold text-[#570B26] tracking-wide mb-4">
                Departments
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm font-sans">
                <li>
                  <Link to="/categories?dept=oils-spices" className="text-[#292329]/80 hover:text-[#7A1034] transition-colors">
                    Mara Chekku Oils
                  </Link>
                </li>
                <li>
                  <Link to="/categories?dept=staples" className="text-[#292329]/80 hover:text-[#7A1034] transition-colors">
                    Staples &amp; Delta Rice
                  </Link>
                </li>
                <li>
                  <Link to="/categories?dept=fresh" className="text-[#292329]/80 hover:text-[#7A1034] transition-colors">
                    Farm Fresh Produce
                  </Link>
                </li>
                <li>
                  <Link to="/categories" className="text-[#7A1034] font-semibold hover:underline transition-colors">
                    View All 16 Aisle Aisles &rarr;
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal & Policies */}
            <div>
              <h4 className="font-serif text-sm font-bold text-[#570B26] tracking-wide mb-4">
                Legal &amp; Policies
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm font-sans">
                <li>
                  <Link to="/privacy-policy" className="text-[#292329]/80 hover:text-[#7A1034] transition-colors">
                    Privacy policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms-conditions" className="text-[#292329]/80 hover:text-[#7A1034] transition-colors">
                    Terms &amp; Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </div>

      {/* 3. Bottom Contact Strip matching reference screenshot */}
      <div className="py-6 bg-[#FFF9F0] border-b border-[#EADDE2]">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center sm:text-left">
            {/* Call Us */}
            <div className="flex items-center justify-center sm:justify-start gap-3">
              <div className="w-10 h-10 rounded-full bg-[#7A1034] text-white flex items-center justify-center shrink-0 shadow-sm">
                <Phone className="w-4 h-4 text-[#FCE2A9]" />
              </div>
              <div className="text-xs font-sans">
                <span className="text-[#766A70] block uppercase tracking-wider text-[10px] font-semibold">
                  Call Us
                </span>
                <a href={`tel:${BRAND_INFO.phone.replace(/[^0-9]/g, '')}`} className="font-bold text-[#292329] hover:text-[#7A1034]">
                  {BRAND_INFO.phone}
                </a>
              </div>
            </div>

            {/* Email Us */}
            <div className="flex items-center justify-center sm:justify-start gap-3">
              <div className="w-10 h-10 rounded-full bg-[#7A1034] text-white flex items-center justify-center shrink-0 shadow-sm">
                <Mail className="w-4 h-4 text-[#FCE2A9]" />
              </div>
              <div className="text-xs font-sans">
                <span className="text-[#766A70] block uppercase tracking-wider text-[10px] font-semibold">
                  Email Us
                </span>
                <a href={`mailto:${BRAND_INFO.email}`} className="font-bold text-[#292329] hover:text-[#7A1034]">
                  {BRAND_INFO.email}
                </a>
              </div>
            </div>

            {/* Find Stores */}
            <div className="flex items-center justify-center sm:justify-start gap-3">
              <div className="w-10 h-10 rounded-full bg-[#7A1034] text-white flex items-center justify-center shrink-0 shadow-sm">
                <MapPin className="w-4 h-4 text-[#FCE2A9]" />
              </div>
              <div className="text-xs font-sans">
                <span className="text-[#766A70] block uppercase tracking-wider text-[10px] font-semibold">
                  Find Stores
                </span>
                <Link to="/stores" className="font-bold text-[#292329] hover:text-[#7A1034]">
                  25 locations in Chennai
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* 4. Copyright Bar */}
      <div className="py-4 bg-white text-center text-xs text-[#766A70] font-sans">
        <Container>
          <p>&copy; 2025 PAARR ever. All rights reserved.</p>
        </Container>
      </div>
    </footer>
  );
};
