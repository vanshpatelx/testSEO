import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, CheckCircle, ArrowRight, Users, Shield, Clock, Star, Award, TrendingUp, Quote } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { useIntakeFormContext } from '@/contexts/IntakeFormContext';
import { TESTIMONIALS } from '../components/SocialProof';
import { 
  generateOrganizationSchema, 
  generateServiceSchema, 
  generateProfessionalServiceSchema, 
  generateProductSchema, 
  generateReviewSchema,
  generateWebPageSchema,
  generateWebSiteSchema,
  generateBreadcrumbSchema
} from '../utils/schema';

export default function HomePage() {
  const { openForm } = useIntakeFormContext();

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [
      generateOrganizationSchema(),
      generateWebSiteSchema(),
      generateServiceSchema(),
      generateProfessionalServiceSchema(),
      generateProductSchema(),
      generateWebPageSchema(
        "High-Risk Homeowners Insurance Specialists | Connect with Licensed Agents",
        "Connect with licensed insurance agents who specialize in high-risk properties, nonrenewals, and difficult-to-place coverage. Get quotes from specialists in your state.",
        "https://highriskhomeowners.com/"
      ),
      generateBreadcrumbSchema([
        { name: "Home", url: "https://highriskhomeowners.com" }
      ]),
      ...generateReviewSchema()
    ]
  };

  return (
    <>
      <SEOHead 
        title="High-Risk Homeowners Insurance Specialists | Connect with Licensed Agents"
        description="Connect with licensed insurance agents who specialize in high-risk properties, nonrenewals, and difficult-to-place coverage. Get quotes from specialists in your state."
        keywords="high risk homeowners insurance, high risk home insurance, FAIR plan, nonrenewal insurance, coastal insurance, older home insurance"
        canonical="https://highriskhomeowners.com/"
        jsonLd={combinedSchema}
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[hsl(var(--gray-50))] to-[hsl(var(--accent))] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="h-20 w-20 bg-[hsl(var(--primary))] rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Shield className="h-10 w-10 text-primary-foreground" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              High-Risk Home Insurance
              <span className="block text-[hsl(var(--primary))]">Specialists</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Connect with licensed agents who specialize in high-risk properties, 
              nonrenewals, and difficult-to-place coverage. Free referral service 
              serving 40+ states nationwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => openForm()}
                className="bg-[hsl(var(--primary))] text-primary-foreground px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition-opacity inline-flex items-center gap-2"
              >
                <MapPin className="h-5 w-5" />
                Find Specialists
              </button>
              <Link 
                to="/states"
                className="border-2 border-[hsl(var(--primary))] text-[hsl(var(--primary))] px-8 py-4 rounded-xl font-semibold hover:bg-[hsl(var(--accent))] transition-colors inline-flex items-center gap-2"
              >
                Browse by State
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-2 px-4 py-2">
              <Award className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium text-foreground">15+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2">
              <CheckCircle className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium text-foreground">Licensed Agents</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2">
              <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
              <span className="text-sm font-medium text-foreground">4.8/5 Rating</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2">
              <Shield className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium text-foreground">10,000+ Homeowners Helped</span>
            </div>
          </div>
        </div>
      </section>


      {/* What We Do */}
      <section className="py-20 bg-[hsl(var(--gray-50))]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">What We Do</h2>
            <p className="text-xl text-muted-foreground">Connecting homeowners with the right insurance specialists</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-2xl shadow-sm border border-border text-center">
              <div className="h-16 w-16 bg-[hsl(var(--primary)_/_0.1)] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-[hsl(var(--primary))]" />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-4">Licensed Specialists</h3>
              <p className="text-muted-foreground">
                We connect you with licensed agents who specialize specifically in 
                high-risk properties and complex insurance situations.
              </p>
            </div>
            
            <div className="bg-card p-8 rounded-2xl shadow-sm border border-border text-center">
              <div className="h-16 w-16 bg-[hsl(var(--success)_/_0.1)] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-[hsl(var(--success))]" />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-4">High-Risk Expertise</h3>
              <p className="text-muted-foreground">
                Our network focuses on challenging properties including nonrenewals, 
                coastal homes, older properties, and FAIR Plan alternatives.
              </p>
            </div>
            
            <div className="bg-card p-8 rounded-2xl shadow-sm border border-border text-center">
              <div className="h-16 w-16 bg-[hsl(var(--accent))] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Clock className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-4">Fast Connections</h3>
              <p className="text-muted-foreground">
                Most homeowners are connected with specialists within 24 hours. 
                Quick response times when you need coverage urgently.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Help */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Who We Help</h2>
            <p className="text-xl text-muted-foreground">Specialized assistance for challenging insurance situations</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-card p-6 rounded-xl shadow-sm border border-border">
              <div className="h-12 w-12 bg-destructive/10 rounded-xl flex items-center justify-center mb-4">
                <CheckCircle className="h-6 w-6 text-destructive" />
              </div>
              <h3 className="text-lg font-semibold text-card-foreground mb-3">Nonrenewed Homeowners</h3>
              <p className="text-muted-foreground text-sm">
                Been dropped by your insurance company? We help find new coverage quickly.
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-xl shadow-sm border border-border">
              <div className="h-12 w-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-card-foreground mb-3">Coastal Properties</h3>
              <p className="text-muted-foreground text-sm">
                Hurricane zones, flood areas, and coastal properties requiring specialized coverage.
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-xl shadow-sm border border-border">
              <div className="h-12 w-12 bg-success/10 rounded-xl flex items-center justify-center mb-4">
                <CheckCircle className="h-6 w-6 text-[hsl(var(--success))]" />
              </div>
              <h3 className="text-lg font-semibold text-card-foreground mb-3">Older Homes</h3>
              <p className="text-muted-foreground text-sm">
                Properties over 40 years old with unique coverage challenges and requirements.
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-xl shadow-sm border border-border">
              <div className="h-12 w-12 bg-warning/10 rounded-xl flex items-center justify-center mb-4">
                <CheckCircle className="h-6 w-6 text-[hsl(var(--warning))]" />
              </div>
              <h3 className="text-lg font-semibold text-card-foreground mb-3">Claims History</h3>
              <p className="text-muted-foreground text-sm">
                Multiple claims making it difficult to find affordable coverage options.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-16 bg-background border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">10,000+</div>
              <div className="text-sm text-muted-foreground">Homeowners Helped</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">95%</div>
              <div className="text-sm text-muted-foreground">Success Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">24hr</div>
              <div className="text-sm text-muted-foreground">Avg Response</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">44</div>
              <div className="text-sm text-muted-foreground">States Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-[hsl(var(--gray-50))]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">What Homeowners Say</h2>
            <p className="text-xl text-muted-foreground">Real results from real people</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TESTIMONIALS.slice(0, 3).map((testimonial, i) => (
              <div key={i} className="bg-background border border-border rounded-xl p-6 shadow-sm">
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star 
                      key={j} 
                      className={j < testimonial.rating ? "h-5 w-5 text-yellow-500 fill-yellow-500" : "h-5 w-5 text-muted"} 
                    />
                  ))}
                </div>
                
                <div className="relative mb-4">
                  <Quote className="absolute -top-2 -left-2 h-8 w-8 text-primary/20" />
                  <p className="text-foreground pl-6 leading-relaxed">{testimonial.text}</p>
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                  </div>
                  <div className="text-xs text-muted-foreground bg-muted px-3 py-1 rounded-full">
                    {testimonial.situation}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">How It Works</h2>
            <p className="text-xl text-muted-foreground">Simple process to connect with specialists</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="h-16 w-16 bg-primary text-primary-foreground rounded-2xl flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Tell Us About Your Property</h3>
              <p className="text-muted-foreground">
                Complete our quick form with details about your property, location, 
                and insurance situation.
              </p>
            </div>
            
            <div className="text-center">
              <div className="h-16 w-16 bg-primary text-primary-foreground rounded-2xl flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Get Connected with Specialists</h3>
              <p className="text-muted-foreground">
                We match you with licensed agents in your state who specialize 
                in your specific type of high-risk situation.
              </p>
            </div>
            
            <div className="text-center">
              <div className="h-16 w-16 bg-primary text-primary-foreground rounded-2xl flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Receive Quotes & Coverage</h3>
              <p className="text-muted-foreground">
                Agents contact you within 24 hours with quotes and coverage options 
                tailored to your specific needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* States We Serve */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">States We Serve</h2>
            <p className="text-xl text-muted-foreground">Licensed agents available in 40+ states</p>
          </div>
          
          <div className="bg-card rounded-2xl p-8 shadow-sm border border-border text-center">
            <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-4 mb-8">
              {['AL', 'AK', 'AZ', 'AR', 'CO', 'CT', 'DE', 'FL', 'GA', 'ID', 'IL', 'IN', 'KS', 'KY', 'LA', 'MA'].map((state) => (
                <div key={state} className="h-12 w-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center font-semibold text-sm mx-auto">
                  {state}
                </div>
              ))}
            </div>
            <Link 
              to="/states"
              className="bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition-opacity inline-flex items-center gap-2"
            >
              View All States
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Wildfire Insurance */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Wildfire Insurance Specialists</h2>
            <p className="text-xl text-muted-foreground">Expert coverage for properties in wildfire-prone areas</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {['Arizona', 'Nevada', 'New Mexico', 'Colorado', 'Oregon', 'Idaho', 'Washington', 'Utah'].map((state) => (
              <Link
                key={state}
                to={`/wildfire-insurance/${state.toLowerCase().replace(' ', '-')}`}
                className="bg-card p-6 rounded-xl shadow-sm border border-border hover:shadow-md transition-all duration-200 group text-center"
              >
                <div className="h-12 w-12 bg-gradient-to-br from-[hsl(var(--warning))] to-destructive rounded-xl flex items-center justify-center mx-auto mb-4 text-primary-foreground font-bold text-sm">
                  🔥
                </div>
                <h3 className="text-lg font-semibold text-card-foreground group-hover:text-[hsl(var(--warning))] transition-colors mb-2">
                  {state}
                </h3>
                <p className="text-sm text-muted-foreground">
                  Wildfire Insurance
                </p>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="/wildfire-insurance"
              className="bg-[hsl(var(--warning))] text-primary-foreground px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition-opacity inline-flex items-center gap-2"
            >
              View All Wildfire States
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Coastal Insurance */}
      <section className="py-20 bg-[hsl(var(--gray-50))]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Coastal Insurance Specialists</h2>
            <p className="text-xl text-muted-foreground">Hurricane and coastal property coverage experts</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {['Texas', 'Louisiana', 'Mississippi', 'Alabama', 'Georgia', 'South Carolina', 'North Carolina', 'Virginia', 'New Jersey', 'Connecticut', 'Maine', 'New Hampshire'].map((state) => (
              <Link
                key={state}
                to={`/coastal-insurance/${state.toLowerCase().replace(' ', '-')}`}
                className="bg-card p-6 rounded-xl shadow-sm border border-border hover:shadow-md transition-all duration-200 group text-center"
              >
                <div className="h-12 w-12 bg-gradient-to-br from-primary to-[hsl(var(--info))] rounded-xl flex items-center justify-center mx-auto mb-4 text-primary-foreground font-bold text-sm">
                  🌊
                </div>
                <h3 className="text-lg font-semibold text-card-foreground group-hover:text-primary transition-colors mb-2">
                  {state}
                </h3>
                <p className="text-sm text-muted-foreground">
                  Coastal Insurance
                </p>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="/coastal-insurance"
              className="bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition-opacity inline-flex items-center gap-2"
            >
              View All Coastal States
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-[hsl(var(--gray-50))]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">What Homeowners Say</h2>
            <p className="text-xl text-muted-foreground">Real experiences from our referral network</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-2xl shadow-sm border border-border">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                ))}
              </div>
              <p className="text-foreground mb-6">
                "After being dropped by my previous insurer, I thought I'd have to go with 
                the expensive FAIR Plan. The agent they connected me with found private 
                coverage for 30% less!"
              </p>
              <div className="text-sm text-muted-foreground">
                <div className="font-semibold">Sarah M.</div>
                <div>Florida Homeowner</div>
              </div>
            </div>
            
            <div className="bg-card p-8 rounded-2xl shadow-sm border border-border">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                ))}
              </div>
              <p className="text-foreground mb-6">
                "My 1950s home was impossible to insure. Within 48 hours, they connected 
                me with a specialist who found coverage with a carrier I'd never heard of."
              </p>
              <div className="text-sm text-muted-foreground">
                <div className="font-semibold">Robert K.</div>
                <div>Pennsylvania Homeowner</div>
              </div>
            </div>
            
            <div className="bg-card p-8 rounded-2xl shadow-sm border border-border">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                ))}
              </div>
              <p className="text-foreground mb-6">
                "Three water claims made me 'uninsurable' according to most agents. 
                The specialist they referred understood my situation and found great coverage."
              </p>
              <div className="text-sm text-muted-foreground">
                <div className="font-semibold">Maria L.</div>
                <div>Texas Homeowner</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Why Choose Our Referral Network?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="h-8 w-8 bg-success/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-[hsl(var(--success))]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Specialized Expertise</h3>
                    <p className="text-muted-foreground">
                      Our agents focus specifically on high-risk properties and understand 
                      the unique challenges you face.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="h-8 w-8 bg-success/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-[hsl(var(--success))]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Multiple Market Access</h3>
                    <p className="text-muted-foreground">
                      Access to carriers that other agents don't work with, including 
                      surplus lines and specialty programs.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="h-8 w-8 bg-success/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-[hsl(var(--success))]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">No Cost to You</h3>
                    <p className="text-muted-foreground">
                      Our referral service is completely free. You pay nothing to get 
                      connected with specialists.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="h-8 w-8 bg-success/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-[hsl(var(--success))]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Licensed & Professional</h3>
                    <p className="text-muted-foreground">
                      All agents in our network are properly licensed in their states 
                      and maintain professional standards.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-primary to-[hsl(var(--primary)_/_0.8)] rounded-2xl p-8 text-primary-foreground">
              <h3 className="text-2xl font-bold mb-6">Ready to Find Coverage?</h3>
              <p className="text-primary-foreground/80 mb-8">
                Don't let a high-risk property leave you without protection. Get connected 
                with specialists who understand your situation and can find solutions.
              </p>
              <button
                onClick={() => openForm()}
                className="w-full bg-background text-foreground px-8 py-4 rounded-xl font-semibold hover:bg-background/90 transition-colors"
              >
                Get Connected Now
              </button>
              <div className="mt-6 text-center">
                <div className="text-primary-foreground/80 text-sm mb-2">Or call us directly:</div>
                <div className="text-xl font-bold">888-795-6550</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-[hsl(var(--footer-bg))]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[hsl(var(--footer-text))] mb-4">Don't Go Without Coverage</h2>
          <p className="text-xl text-[hsl(var(--footer-text)_/_0.8)] mb-8 max-w-2xl mx-auto">
            High-risk doesn't mean no coverage. Our specialists have helped thousands 
            of homeowners find protection when others couldn't.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => openForm()}
              className="bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition-opacity"
            >
              Get Connected Now
            </button>
            <a 
              href="tel:888-795-6550"
              className="border-2 border-border text-[hsl(var(--footer-text))] px-8 py-4 rounded-xl font-semibold hover:bg-[hsl(var(--footer-bg)_/_0.8)] transition-colors flex items-center justify-center gap-2"
            >
              <Phone className="h-5 w-5" />
              Call 888-795-6550
            </a>
          </div>
        </div>
      </section>
    </>
  );
}