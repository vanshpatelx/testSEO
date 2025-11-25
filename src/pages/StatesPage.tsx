import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, MapPin } from 'lucide-react';
import { STATES } from '../data/states';
import { buildStatePath } from '../utils/seo';
import SEOHead from '../components/SEOHead';
import Breadcrumb from '../components/Breadcrumb';
import { generateOrganizationSchema, generateWebPageSchema, generateStatesListSchema, generateBreadcrumbSchema } from '../utils/schema';

export default function StatesPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredStates = useMemo(() => {
    if (!searchTerm) return STATES;
    return STATES.filter(state => 
      state.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      state.code.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const statesSchema = {
    "@context": "https://schema.org",
    "@graph": [
      generateOrganizationSchema(),
      generateWebPageSchema(
        "High-Risk Home Insurance by State | HighRiskHomeowners.com",
        "Find high-risk home insurance agents in your state. We serve 44 states and specialize in nonrenewals and difficult-to-place properties.",
        "https://highriskhomeowners.com/states"
      ),
      generateStatesListSchema(STATES),
      generateBreadcrumbSchema([
        { name: "Home", url: "https://highriskhomeowners.com" },
        { name: "States", url: "https://highriskhomeowners.com/states" }
      ])
    ]
  };

  return (
    <>
      <SEOHead 
        title="High-Risk Home Insurance by State | HighRiskHomeowners.com"
        description="Find high-risk home insurance agents in your state. We serve 44 states and specialize in nonrenewals and difficult-to-place properties."
        canonical="https://highriskhomeowners.com/states"
        jsonLd={statesSchema}
      />
      
      <Breadcrumb items={[{ label: 'States' }]} />
      
      <div className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              High-Risk Home Insurance by State
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We serve 40+ states and connect homeowners with licensed agents who specialize in 
              high-risk properties, nonrenewals, and difficult-to-place coverage with diligence and the best options in the marketplace to get an approval, fast.
            </p>
          </div>

          {/* Search */}
          <div className="max-w-md mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search states..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-input rounded-xl focus:ring-2 focus:ring-[hsl(var(--ring))] focus:border-transparent bg-background text-foreground"
                aria-label="Search states"
              />
            </div>
          </div>

          {/* States Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredStates.map((state) => (
              <Link
                key={state.code}
                to={buildStatePath(state.slug)}
                className="bg-card p-6 rounded-xl shadow-sm border border-border hover:shadow-md transition-all duration-200 group"
              >
                <div className="flex items-center gap-4">
                  <div className="h-14 w-14 bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--primary)_/_0.8)] rounded-xl flex items-center justify-center text-primary-foreground font-bold text-lg">
                    {state.code}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-card-foreground group-hover:text-[hsl(var(--primary))] transition-colors">
                      {state.name}
                    </h3>
                    <p className="text-sm text-muted-foreground flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      High-Risk Home Insurance
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filteredStates.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No states found matching your search.</p>
            </div>
          )}

          {/* Excluded States Notice */}
          <div className="mt-16 bg-[hsl(var(--gray-50))] rounded-xl p-8">
            <h3 className="text-lg font-semibold text-foreground mb-4">States We Don't Currently Serve</h3>
            <p className="text-muted-foreground mb-4">
              We currently don't provide referrals in the following states:
            </p>
            <div className="flex flex-wrap gap-2">
              {['California', 'Hawaii', 'Rhode Island', 'Iowa', 'North Dakota', 'New York'].map((state) => (
                <span key={state} className="bg-[hsl(var(--gray-200))] text-[hsl(var(--gray-700))] px-3 py-1 rounded-full text-sm">
                  {state}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}