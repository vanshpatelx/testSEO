import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, FileText, Phone, Shield } from 'lucide-react';
import { useIntakeForm } from '../hooks/useIntakeForm';
import IntakeForm from './IntakeForm';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { isFormOpen, openForm, closeForm } = useIntakeForm();

  const navigation = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Browse by State', href: '/states', icon: Shield },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">HighRiskHomeowners.com</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive(item.href)
                      ? 'text-[hsl(var(--primary))] bg-[hsl(var(--accent))]'
                      : 'text-foreground hover:text-[hsl(var(--primary))] hover:bg-[hsl(var(--muted))]'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
            <button
              onClick={() => openForm()}
              className="px-3 py-2 rounded-md text-sm font-medium bg-[hsl(var(--primary))] text-primary-foreground hover:opacity-90 transition-opacity"
              aria-label="Open quote request form"
            >
              Get a Quote
            </button>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-[hsl(var(--primary))] hover:bg-[hsl(var(--muted))] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[hsl(var(--ring))]"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-200">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium transition-colors ${
                      isActive(item.href)
                        ? 'text-[hsl(var(--primary))] bg-[hsl(var(--accent))]'
                        : 'text-foreground hover:text-[hsl(var(--primary))] hover:bg-[hsl(var(--muted))]'
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
              <button
                onClick={() => {
                  openForm();
                  setIsMenuOpen(false);
                }}
                className="px-3 py-2 rounded-md text-base font-medium bg-[hsl(var(--primary))] text-primary-foreground hover:opacity-90 transition-opacity w-full"
                aria-label="Open quote request form"
              >
                Get a Quote
              </button>
            </div>
          </div>
        )}
      </div>
      
      <IntakeForm isOpen={isFormOpen} onClose={closeForm} />
    </header>
  );
};

export default Header;