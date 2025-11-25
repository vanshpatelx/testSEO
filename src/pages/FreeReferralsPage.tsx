import React from 'react';
import { Link } from 'react-router-dom';
import { Gift, Users, Shield, CheckCircle, ArrowRight, Phone, Clock, Star, Heart, DollarSign } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import IntakeForm from '../components/IntakeForm';
import { useIntakeForm } from '../hooks/useIntakeForm';
import Breadcrumb from '../components/Breadcrumb';

export default function FreeReferralsPage() {
  const { isFormOpen, openForm, closeForm } = useIntakeForm();

  return (
    <>
      <SEOHead 
        title="Free Insurance Referrals | No Cost High-Risk Home Insurance Help"
        description="Get connected with high-risk home insurance specialists at no cost. Our free referral service helps homeowners find coverage for challenging properties."
        keywords="free insurance referrals, no cost insurance help, free agent connections, high risk insurance referrals"
        canonical="https://highriskhomeowners.com/free-referrals/"
      />
      
      <Breadcrumb items={[{ label: 'Free Referrals' }]} />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-blue-100 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="h-20 w-20 bg-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Gift className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
              Free Insurance
              <span className="block text-green-600">Referrals</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
              Get connected with licensed high-risk insurance specialists at absolutely no cost. 
              Our referral service is completely free - you pay nothing to get expert help.
            </p>
            <button 
              onClick={() => openForm()}
              className="bg-green-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-green-700 transition-colors inline-flex items-center gap-2"
            >
              <Gift className="h-5 w-5" />
              Get Free Referral
            </button>
          </div>
        </div>
      </section>

      {/* Why It's Free */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Is Our Service Free?</h2>
            <p className="text-xl text-slate-600">Understanding our business model</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="h-16 w-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Heart className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-4">Agent Partnerships</h3>
                  <p className="text-slate-600">
                    Insurance agent agreements mean our service costs you nothing.
                  </p>
                </div>
                
                <div>
                  <div className="h-16 w-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Users className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-4">Win-Win Model</h3>
                  <p className="text-slate-600">
                    Agents get qualified leads, homeowners get expert help, and everyone benefits 
                    from successful placements.
                  </p>
                </div>
                
                <div>
                  <div className="h-16 w-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Shield className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-4">No Hidden Costs</h3>
                  <p className="text-slate-600">
                    There are absolutely no fees, charges, or hidden costs. Our service 
                    is genuinely free to homeowners.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get for Free */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">What You Get for Free</h2>
            <p className="text-xl text-slate-600">Comprehensive service at no cost to you</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
              <div className="h-12 w-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Expert Agent Matching</h3>
              <p className="text-slate-600 text-sm">
                We match you with licensed agents who specialize in your specific type of 
                high-risk situation.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
              <div className="h-12 w-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Fast Connections</h3>
              <p className="text-slate-600 text-sm">
                Most homeowners are connected with specialists within 24 hours of submitting 
                their information.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
              <div className="h-12 w-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Vetted Specialists</h3>
              <p className="text-slate-600 text-sm">
                All agents in our network are licensed, experienced, and have proven track 
                records with high-risk properties.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
              <div className="h-12 w-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                <Star className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Multiple Options</h3>
              <p className="text-slate-600 text-sm">
                Agents provide multiple coverage options and quotes so you can choose 
                the best fit for your needs.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
              <div className="h-12 w-12 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                <CheckCircle className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">No Obligation</h3>
              <p className="text-slate-600 text-sm">
                You're under no obligation to purchase anything. Get quotes and information 
                with no pressure.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
              <div className="h-12 w-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
                <DollarSign className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Ongoing Support</h3>
              <p className="text-slate-600 text-sm">
                Continued support throughout the process and help with any questions 
                that arise during coverage selection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How Free Referrals Work */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">How Free Referrals Work</h2>
            <p className="text-xl text-slate-600">Simple process, no cost to you</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="h-24 w-24 bg-green-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                1
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">You Submit Your Information</h3>
              <p className="text-slate-600">
                Complete our quick form with details about your property and insurance needs. 
                This takes just a few minutes and costs nothing.
              </p>
            </div>
            
            <div className="text-center">
              <div className="h-24 w-24 bg-green-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                2
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">We Find the Right Specialists</h3>
              <p className="text-slate-600">
                We match you with licensed agents who specialize in your specific situation 
                and have the right carrier relationships.
              </p>
            </div>
            
            <div className="text-center">
              <div className="h-24 w-24 bg-green-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                3
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Agents Contact You Directly</h3>
              <p className="text-slate-600">
                Specialists contact you within 24 hours with quotes and coverage options. 
                No fees, no obligations, just expert help.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Free vs Paid Services */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Free vs Paid Insurance Services</h2>
            <p className="text-xl text-slate-600">Why our free service is often better</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
              <div className="h-12 w-12 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <Gift className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Our Free Referral Service</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Completely free to homeowners</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Access to high-risk specialists</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">1 professional specialist</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">No obligation to purchase</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Ongoing support throughout process</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Fast 24-hour connections</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
              <div className="h-12 w-12 bg-slate-200 rounded-xl flex items-center justify-center mb-6">
                <DollarSign className="h-6 w-6 text-slate-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Paid Insurance Services</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="h-5 w-5 bg-slate-300 rounded-full mt-0.5 flex-shrink-0"></div>
                  <span className="text-slate-600">Upfront fees or consultation charges</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-5 w-5 bg-slate-300 rounded-full mt-0.5 flex-shrink-0"></div>
                  <span className="text-slate-600">May not specialize in high-risk properties</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-5 w-5 bg-slate-300 rounded-full mt-0.5 flex-shrink-0"></div>
                  <span className="text-slate-600">Might not have specialists</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-5 w-5 bg-slate-300 rounded-full mt-0.5 flex-shrink-0"></div>
                  <span className="text-slate-600">Pressure to purchase</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-5 w-5 bg-slate-300 rounded-full mt-0.5 flex-shrink-0"></div>
                  <span className="text-slate-600">Limited ongoing support</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-5 w-5 bg-slate-300 rounded-full mt-0.5 flex-shrink-0"></div>
                  <span className="text-slate-600">Slower response times</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Common Questions */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Common Questions About Free Referrals</h2>
            <p className="text-xl text-slate-600">Addressing your concerns</p>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">
                "Will I be pressured to buy insurance?"
              </h3>
              <p className="text-slate-600">
                No. Our agents are professionals who understand that pressure tactics don't work 
                with high-risk situations. They focus on finding solutions that work for you.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">
                "How do I know the agents are qualified?"
              </h3>
              <p className="text-slate-600">
                All agents in our network are licensed in their states and have been vetted 
                for experience with high-risk properties. We regularly review their performance 
                and customer feedback.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">
                "What if I don't like the agent you refer me to?"
              </h3>
              <p className="text-slate-600">
                You're under no obligation to work with any agent we refer. If the first 
                connection isn't a good fit, we can connect you with other specialists 
                in your area.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">
                "Will my information be shared with multiple agents?"
              </h3>
              <p className="text-slate-600">
                We connect you ONLY with 1 specialist initially to avoid overwhelming you with calls. If needed, we can provide additional connections upon request.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">
                "How long has this service been operating?"
              </h3>
              <p className="text-slate-600">
                We've been connecting homeowners with high-risk insurance specialists since 2008. 
                Our track record speaks for itself with thousands of successful placements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Free Service Results</h2>
            <p className="text-xl text-slate-600">What our free referrals achieve</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">10,000+</div>
              <div className="text-sm text-slate-600">Successful Referrals</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">95%</div>
              <div className="text-sm text-slate-600">Find Coverage</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">24hr</div>
              <div className="text-sm text-slate-600">Average Response</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">4.8/5</div>
              <div className="text-sm text-slate-600">Customer Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">What Homeowners Say</h2>
            <p className="text-xl text-slate-600">Real feedback about our free service</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-slate-700 mb-6">
                "I was skeptical about a 'free' service, but they delivered exactly what they 
                promised. Connected me with a great agent who found coverage when others couldn't."
              </p>
              <div className="text-sm text-slate-600">
                <div className="font-semibold">Jennifer R.</div>
                <div>Coastal Homeowner</div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-slate-700 mb-6">
                "No hidden fees, no pressure, just genuine help. The agent they referred 
                saved me thousands compared to the FAIR Plan quote I had."
              </p>
              <div className="text-sm text-slate-600">
                <div className="font-semibold">Michael D.</div>
                <div>Wildfire Challenged Homeowner</div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-slate-700 mb-6">
                "After being nonrenewed, I didn't know where to turn. This free service 
                connected me with an expert who understood my situation perfectly."
              </p>
              <div className="text-sm text-slate-600">
                <div className="font-semibold">Lisa K.</div>
                <div>Claims Frequency Homeowner</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust and Security */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Your Information is Protected</h2>
            <p className="text-xl text-slate-600">Privacy and security you can trust</p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Privacy Protection</h3>
                <ul className="space-y-2 text-slate-700">
                  <li>• Your information is never sold to third parties</li>
                  <li>• Only shared with qualified, licensed agents</li>
                  <li>• Secure data transmission and storage</li>
                  <li>• You control who contacts you</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Quality Assurance</h3>
                <ul className="space-y-2 text-slate-700">
                  <li>• All agents are licensed and vetted</li>
                  <li>• Regular performance monitoring</li>
                  <li>• Customer feedback tracking</li>
                  <li>• Professional standards enforcement</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready for Your Free Referral?</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Don't pay for help finding insurance. Our free referral service connects you 
            with specialists who can solve your high-risk insurance challenges.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => openForm()}
              className="bg-green-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-green-700 transition-colors"
            >
              Get Free Referral Now
            </button>
            <a 
              href="tel:888-795-6550"
              className="border-2 border-slate-600 text-white px-8 py-4 rounded-xl font-semibold hover:border-slate-500 hover:bg-slate-800 transition-colors flex items-center justify-center gap-2"
            >
              <Phone className="h-5 w-5" />
              Call 888-795-6550
            </a>
          </div>
          
          <div className="mt-8 text-sm text-slate-400 max-w-4xl mx-auto">
            This is a referral service connecting homeowners with licensed insurance agents. Our service is free to homeowners and if we are compensated, it is by participating agents. This website is no way affiliated with or sponsored or endorsed by any federal, state or local governmental agency or state fair plan. The contents of this website are provided for informational purposes only and do not constitute legal or coverage advice or an offer or solicitation for the sale or purchase of insurance. Insurance coverage not available in all states. HighRiskHomeowners.com is not an insurance company, agency or MGA. We connect homeowners with licensed insurance professionals specializing in high-risk areas.
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