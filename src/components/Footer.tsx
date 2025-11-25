import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[hsl(var(--footer-bg))] text-[hsl(var(--footer-text))]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Shield className="h-8 w-8 text-[hsl(var(--info))]" />
              <span className="text-xl font-bold">HighRiskHomeowners.com</span>
            </div>
            <p className="text-[hsl(var(--footer-link))] mb-6 max-w-md">
              Connecting homeowners with licensed agents who specialize in high-risk properties 
              and complex insurance situations since 2008.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-[hsl(var(--footer-link))]">
                <Phone className="h-4 w-4" />
                <span>888-795-6550</span>
              </div>
              <div className="flex items-center gap-2 text-[hsl(var(--footer-link))]">
                <Mail className="h-4 w-4" />
                <span>info@highriskhomeowners.com</span>
              </div>
              <div className="flex items-center gap-2 text-[hsl(var(--footer-link))]">
                <MapPin className="h-4 w-4" />
                <span>Serving 40+ States Nationwide</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/states" className="text-[hsl(var(--footer-link))] hover:text-[hsl(var(--footer-text))] transition-colors">
                  Find Agents by State
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-[hsl(var(--footer-link))] hover:text-[hsl(var(--footer-text))] transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/high-risk-specialists" className="text-[hsl(var(--footer-link))] hover:text-[hsl(var(--footer-text))] transition-colors">
                  High-Risk Specialists
                </Link>
              </li>
              <li>
                <Link to="/free-referrals" className="text-[hsl(var(--footer-link))] hover:text-[hsl(var(--footer-text))] transition-colors">
                  Free Referrals
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-[hsl(var(--footer-link))] hover:text-[hsl(var(--footer-text))] transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/glossary" className="text-[hsl(var(--footer-link))] hover:text-[hsl(var(--footer-text))] transition-colors">
                  Insurance Glossary
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-[hsl(var(--footer-link))] hover:text-[hsl(var(--footer-text))] transition-colors">
                  Insurance Blog
                </Link>
              </li>
              <li>
                <Link to="/video-library" className="text-[hsl(var(--footer-link))] hover:text-[hsl(var(--footer-text))] transition-colors">
                  Video Library
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-[hsl(var(--footer-link))] hover:text-[hsl(var(--footer-text))] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/sitemap" className="text-[hsl(var(--footer-link))] hover:text-[hsl(var(--footer-text))] transition-colors">
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>

          {/* Disclaimer */}
          <div className="col-span-1 md:col-span-4 mt-8 pt-8 border-t border-[hsl(var(--border)_/_0.2)]">
            <p className="text-sm text-[hsl(var(--muted-foreground))] leading-relaxed">
              This is a referral service connecting homeowners with licensed insurance agents. Our service is free to homeowners and if we are compensated, it is by participating agents. This website is no way affiliated with or sponsored or endorsed by any federal, state or local governmental agency or state fair plan. The contents of this website are provided for informational purposes only and do not constitute legal or coverage advice or an offer or solicitation for the sale or purchase of insurance. Insurance coverage not available in all states. HighRiskHomeowners.com is not an insurance company, agency or MGA. We connect homeowners with licensed insurance professionals specializing in high-risk areas.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[hsl(var(--border)_/_0.2)] mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-[hsl(var(--muted-foreground))] text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} HighRiskHomeowners.com. All rights reserved.
            </div>
            <div className="flex gap-6 text-sm">
              <Link to="/privacy-policy" className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--footer-text))] transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-conditions" className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--footer-text))] transition-colors">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}