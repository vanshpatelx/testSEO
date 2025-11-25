import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Users, Clock, Shield, Phone, FileText, Search } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import IntakeForm from '../components/IntakeForm';
import { useIntakeForm } from '../hooks/useIntakeForm';
import Breadcrumb from '../components/Breadcrumb';
import { generateOrganizationSchema, generateWebPageSchema, generateBreadcrumbSchema } from '../utils/schema';

export default function HowItWorksPage() {
  const { isFormOpen, openForm, closeForm } = useIntakeForm();

  const howToSchema = {
    "@context": "https://schema.org",
    "@graph": [
      generateOrganizationSchema(),
      generateWebPageSchema(
        "How It Works | HighRiskHomeowners.com",
        "Learn how our free referral service connects homeowners with licensed high-risk insurance specialists. Simple 3-step process to find coverage.",
        "https://highriskhomeowners.com/how-it-works/"
      ),
      {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "How to Find High-Risk Homeowners Insurance",
        "description": "Step-by-step guide to connecting with licensed insurance agents for high-risk properties",
        "totalTime": "PT15M",
        "step": [
          {
            "@type": "HowToStep",
            "position": 1,
            "name": "Submit Your Information",
            "text": "Fill out our simple form with your property details and insurance needs. Takes just 2-3 minutes.",
            "url": "https://highriskhomeowners.com/how-it-works/#step1"
          },
          {
            "@type": "HowToStep",
            "position": 2,
            "name": "We Match You with Specialists",
            "text": "Our system connects you with licensed agents in your state who specialize in your specific situation.",
            "url": "https://highriskhomeowners.com/how-it-works/#step2"
          },
          {
            "@type": "HowToStep",
            "position": 3,
            "name": "Get Quotes and Choose Coverage",
            "text": "Receive personalized quotes from specialists and select the best coverage for your needs.",
            "url": "https://highriskhomeowners.com/how-it-works/#step3"
          }
        ],
        "tool": [
          {
            "@type": "HowToTool",
            "name": "Property information (address, year built, type)"
          },
          {
            "@type": "HowToTool",
            "name": "Current insurance status"
          },
          {
            "@type": "HowToTool",
            "name": "Contact preferences"
          }
        ]
      },
      generateBreadcrumbSchema([
        { name: "Home", url: "https://highriskhomeowners.com" },
        { name: "How It Works", url: "https://highriskhomeowners.com/how-it-works/" }
      ])
    ]
  };

  return (
    <>
      <SEOHead 
        title="How It Works | HighRiskHomeowners.com"
        description="Learn how our free referral service connects homeowners with licensed high-risk insurance specialists. Simple 3-step process to find coverage."
        keywords="how it works, insurance referral, high risk insurance process, find agents"
        canonical="https://highriskhomeowners.com/how-it-works/"
        jsonLd={howToSchema}
      />
      
      <Breadcrumb items={[{ label: 'How It Works' }]} />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="h-20 w-20 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Users className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
              How It
              <span className="block text-blue-600">Works</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
              Our simple 3-step process connects you with licensed agents who specialize 
              in high-risk properties and complex insurance situations.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Step 1 */}
            <div className="text-center">
              <div className="relative mb-8">
                <div className="h-24 w-24 bg-blue-600 text-white rounded-2xl flex items-center justify-center mx-auto text-2xl font-bold">
                  1
                </div>
                <div className="absolute -top-2 -right-2 h-8 w-8 bg-green-500 rounded-full flex items-center justify-center">
                  <FileText className="h-4 w-4 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Tell Us About Your Property</h3>
              <p className="text-slate-600 mb-6">
                Complete our quick form with details about your property, location, 
                insurance history, and specific challenges you're facing.
              </p>
              <div className="bg-blue-50 rounded-xl p-4">
                <h4 className="font-semibold text-slate-900 mb-2">What We Ask:</h4>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• Property location and details</li>
                  <li>• Current insurance status</li>
                  <li>• Claims history</li>
                  <li>• Reason for needing coverage</li>
                </ul>
              </div>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="relative mb-8">
                <div className="h-24 w-24 bg-blue-600 text-white rounded-2xl flex items-center justify-center mx-auto text-2xl font-bold">
                  2
                </div>
                <div className="absolute -top-2 -right-2 h-8 w-8 bg-green-500 rounded-full flex items-center justify-center">
                  <Search className="h-4 w-4 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">We Match You with Specialists</h3>
              <p className="text-slate-600 mb-6">
                Our system matches you with licensed agents in your state who specialize 
                in your specific type of high-risk situation and have the right carrier relationships.
              </p>
              <div className="bg-green-50 rounded-xl p-4">
                <h4 className="font-semibold text-slate-900 mb-2">Our Matching Criteria:</h4>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• State licensing verification</li>
                  <li>• High-risk specialization</li>
                  <li>• Carrier relationships</li>
                  <li>• Track record with similar cases</li>
                </ul>
              </div>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="relative mb-8">
                <div className="h-24 w-24 bg-blue-600 text-white rounded-2xl flex items-center justify-center mx-auto text-2xl font-bold">
                  3
                </div>
                <div className="absolute -top-2 -right-2 h-8 w-8 bg-green-500 rounded-full flex items-center justify-center">
                  <Phone className="h-4 w-4 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Get Connected & Receive Quotes</h3>
              <p className="text-slate-600 mb-6">
                Agents contact you within 24 hours with quotes and coverage options 
                tailored to your specific needs and risk profile.
              </p>
              <div className="bg-purple-50 rounded-xl p-4">
                <h4 className="font-semibold text-slate-900 mb-2">What to Expect:</h4>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• Contact within 24 hours</li>
                  <li>• Multiple coverage options</li>
                  <li>• Competitive quotes</li>
                  <li>• Expert guidance</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Our Process Works */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Our Process Works</h2>
            <p className="text-xl text-slate-600">Built specifically for high-risk insurance challenges</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 text-center">
              <div className="h-12 w-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Shield className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Specialized Focus</h3>
              <p className="text-slate-600 text-sm">
                Our agents focus exclusively on high-risk properties and understand the unique challenges.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 text-center">
              <div className="h-12 w-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Vetted Network</h3>
              <p className="text-slate-600 text-sm">
                All agents are licensed, experienced, and have proven track records with difficult placements.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 text-center">
              <div className="h-12 w-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Clock className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Fast Response</h3>
              <p className="text-slate-600 text-sm">
                Most homeowners are connected within 24 hours because we understand urgency.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 text-center">
              <div className="h-12 w-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">No Cost to You</h3>
              <p className="text-slate-600 text-sm">
                Our referral service is completely free - you pay nothing to get connected.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                What Makes Us Different?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="h-8 w-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">High-Risk Expertise Only</h3>
                    <p className="text-slate-600">
                      Unlike general insurance agents, our network focuses exclusively on challenging 
                      properties and complex situations.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="h-8 w-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Carrier Relationships</h3>
                    <p className="text-slate-600">
                      Our agents work with carriers that other agents don't have access to, 
                      including surplus lines and specialty programs.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="h-8 w-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Proven Track Record</h3>
                    <p className="text-slate-600">
                      Over 15 years of experience helping homeowners find coverage when 
                      others said it wasn't possible.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="h-8 w-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">No Obligation Service</h3>
                    <p className="text-slate-600">
                      Get connected with specialists with no obligation to purchase. 
                      You're in control of your insurance decisions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Ready to Get Started?</h3>
              <p className="text-blue-100 mb-8">
                Don't let a high-risk property leave you without protection. Our process 
                is designed to find solutions when others can't.
              </p>
              <button
                onClick={() => openForm()}
                className="w-full bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-colors mb-4"
              >
                Start the Process
              </button>
              <div className="text-center">
                <div className="text-blue-100 text-sm mb-2">Or call us directly:</div>
                <div className="text-xl font-bold">888-795-6550</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Situations */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Common Situations We Handle</h2>
            <p className="text-xl text-slate-600">Real scenarios where our process makes the difference</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
              <div className="h-12 w-12 bg-red-100 rounded-xl flex items-center justify-center mb-6">
                <FileText className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">After Nonrenewal</h3>
              <p className="text-slate-600 mb-4">
                "My insurance company dropped me after two claims. I thought I'd have to go 
                with the expensive FAIR Plan, but the agent found private coverage for less."
              </p>
              <div className="text-sm text-slate-500">
                <strong>Result:</strong> Private market coverage at 25% less than FAIR Plan
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
              <div className="h-12 w-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <Shield className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Coastal Property</h3>
              <p className="text-slate-600 mb-4">
                "Living near the coast, I was told only Citizens would cover me. The specialist 
                found three private options with better coverage and lower deductibles."
              </p>
              <div className="text-sm text-slate-500">
                <strong>Result:</strong> Private coverage with $2,500 vs $5,000 hurricane deductible
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
              <div className="h-12 w-12 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <Clock className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Older Home</h3>
              <p className="text-slate-600 mb-4">
                "My 1950s home was 'uninsurable' according to three agents. The specialist 
                understood older homes and found coverage with a carrier I'd never heard of."
              </p>
              <div className="text-sm text-slate-500">
                <strong>Result:</strong> Full coverage for 60-year-old home with updated systems
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
              <div className="h-12 w-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                <Users className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Multiple Claims</h3>
              <p className="text-slate-600 mb-4">
                "Three water claims made me 'uninsurable' according to most agents. The specialist 
                understood my situation and found coverage with reasonable terms."
              </p>
              <div className="text-sm text-slate-500">
                <strong>Result:</strong> Coverage with water damage exclusion waiver after 2 years
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Typical Timeline</h2>
            <p className="text-xl text-slate-600">What to expect and when</p>
          </div>
          
          <div className="space-y-8">
            <div className="flex items-center gap-6">
              <div className="h-12 w-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                0h
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex-1">
                <h3 className="font-semibold text-slate-900 mb-2">Form Submission</h3>
                <p className="text-slate-600">Complete our intake form with your property and insurance details.</p>
              </div>
            </div>
            
            <div className="flex items-center gap-6">
              <div className="h-12 w-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                2h
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex-1">
                <h3 className="font-semibold text-slate-900 mb-2">Agent Matching</h3>
                <p className="text-slate-600">We review your case and match you with the most suitable specialists in your area.</p>
              </div>
            </div>
            
            <div className="flex items-center gap-6">
              <div className="h-12 w-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                24h
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex-1">
                <h3 className="font-semibold text-slate-900 mb-2">Agent Contact</h3>
                <p className="text-slate-600">Licensed specialists contact you to discuss your situation and coverage options.</p>
              </div>
            </div>
            
            <div className="flex items-center gap-6">
              <div className="h-12 w-12 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                48h
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex-1">
                <h3 className="font-semibold text-slate-900 mb-2">Quotes & Options</h3>
                <p className="text-slate-600">Receive detailed quotes and coverage options tailored to your specific needs.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-slate-600">Common questions about our process</p>
          </div>
          
          <div className="space-y-6">
            
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">
                What if I don't like the agent you connect me with?
              </h3>
              <p className="text-slate-600">
                You're under no obligation to work with any agent we refer. If the first 
                connection isn't a good fit, we can connect you with other specialists in 
                your area.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">
                How do you choose which agents to work with?
              </h3>
              <p className="text-slate-600">
                We carefully vet all agents in our network for licensing, experience with 
                high-risk properties, carrier relationships, and customer service standards. 
                Only specialists who meet our criteria are included.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">
                What if no one can help me?
              </h3>
              <p className="text-slate-600">
                While we can't guarantee coverage for every situation, our specialists have 
                access to markets that most agents don't. Even in extreme cases, we can help 
                you understand all available options including state programs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Start the Process?</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Don't let a high-risk property leave you without protection. Our proven process 
            has helped thousands of homeowners find coverage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => openForm()}
              className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors"
            >
              Get Started Now
            </button>
            <Link 
              to="/states"
              className="border-2 border-slate-600 text-white px-8 py-4 rounded-xl font-semibold hover:border-slate-500 hover:bg-slate-800 transition-colors inline-flex items-center justify-center gap-2"
            >
              Browse by State
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      <IntakeForm 
        isOpen={isFormOpen}
        onClose={closeForm}
      />
    </>
  );
}