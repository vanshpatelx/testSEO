import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Users, Award, CheckCircle, ArrowRight, Phone, Clock, Target, TrendingUp } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import IntakeForm from '../components/IntakeForm';
import { useIntakeForm } from '../hooks/useIntakeForm';
import Breadcrumb from '../components/Breadcrumb';

export default function HighRiskSpecialistsPage() {
  const { isFormOpen, openForm, closeForm } = useIntakeForm();

  return (
    <>
      <SEOHead 
        title="High-Risk Home Insurance Specialists | Expert Agents"
        description="Connect with licensed insurance agents who specialize exclusively in high-risk properties, nonrenewals, and difficult-to-place coverage situations."
        keywords="high risk insurance specialists, expert agents, nonrenewal specialists, difficult placement agents"
        canonical="https://highriskhomeowners.com/high-risk-specialists/"
      />
      
      <Breadcrumb items={[{ label: 'High-Risk Specialists' }]} />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="h-20 w-20 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Shield className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
              High-Risk Insurance
              <span className="block text-blue-600">Specialists</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
              Connect with licensed agents who focus exclusively on high-risk properties, 
              nonrenewals, and challenging insurance situations that others won't handle.
            </p>
            <button 
              onClick={() => openForm()}
              className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors inline-flex items-center gap-2"
            >
              <Users className="h-5 w-5" />
              Find Specialists
            </button>
          </div>
        </div>
      </section>

      {/* What Makes a Specialist */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">What Makes a High-Risk Specialist?</h2>
            <p className="text-xl text-slate-600">Not all agents can handle challenging properties</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 text-center">
              <div className="h-12 w-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Target className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Focused Expertise</h3>
              <p className="text-slate-600 text-sm">
                Specialists focus exclusively on high-risk properties rather than general insurance.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 text-center">
              <div className="h-12 w-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Carrier Relationships</h3>
              <p className="text-slate-600 text-sm">
                Access to specialty carriers and surplus lines markets that others don't have.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 text-center">
              <div className="h-12 w-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Award className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Proven Track Record</h3>
              <p className="text-slate-600 text-sm">
                Years of experience successfully placing coverage for challenging properties.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 text-center">
              <div className="h-12 w-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Clock className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Urgency Understanding</h3>
              <p className="text-slate-600 text-sm">
                Understand the time-sensitive nature of insurance needs and respond quickly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Specialist Capabilities */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">What Our Specialists Handle</h2>
            <p className="text-xl text-slate-600">Challenging situations that require expertise</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
              <div className="h-12 w-12 bg-red-100 rounded-xl flex items-center justify-center mb-6">
                <CheckCircle className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Nonrenewal Situations</h3>
              <p className="text-slate-600 mb-4">
                When insurance companies drop you, specialists know which carriers will 
                still consider your property and how to present your case effectively.
              </p>
              <ul className="text-sm text-slate-600 space-y-2">
                <li>• Multiple claims history</li>
                <li>• Company policy changes</li>
                <li>• Risk area designations</li>
                <li>• Property condition issues</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
              <div className="h-12 w-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <CheckCircle className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Coastal Properties</h3>
              <p className="text-slate-600 mb-4">
                Hurricane zones, flood areas, and waterfront properties require specialized 
                knowledge of wind coverage, deductibles, and state programs.
              </p>
              <ul className="text-sm text-slate-600 space-y-2">
                <li>• Hurricane and wind coverage</li>
                <li>• Flood insurance coordination</li>
                <li>• Coastal construction requirements</li>
                <li>• State program alternatives</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
              <div className="h-12 w-12 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <CheckCircle className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Older Properties</h3>
              <p className="text-slate-600 mb-4">
                Homes over 40 years old often face coverage challenges due to outdated 
                systems, materials, and construction methods.
              </p>
              <ul className="text-sm text-slate-600 space-y-2">
                <li>• Electrical system concerns</li>
                <li>• Plumbing and heating issues</li>
                <li>• Roof age and materials</li>
                <li>• Foundation and structural updates</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
              <div className="h-12 w-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                <CheckCircle className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Wildfire Risk Areas</h3>
              <p className="text-slate-600 mb-4">
                Properties in Wildland-Urban Interface zones require understanding of 
                defensible space, fire-resistant materials, and specialized coverage.
              </p>
              <ul className="text-sm text-slate-600 space-y-2">
                <li>• WUI zone properties</li>
                <li>• Defensible space requirements</li>
                <li>• Fire-resistant construction</li>
                <li>• Mitigation credit programs</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Specialists Matter */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Why Specialists Make the Difference
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="h-8 w-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Market Knowledge</h3>
                    <p className="text-slate-600">
                      Specialists know which carriers accept specific types of high-risk properties 
                      and understand their underwriting guidelines.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="h-8 w-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Presentation Skills</h3>
                    <p className="text-slate-600">
                      Know how to present challenging risks to underwriters in the best possible light 
                      to maximize approval chances.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="h-8 w-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Alternative Solutions</h3>
                    <p className="text-slate-600">
                      When standard coverage isn't available, specialists know alternative 
                      approaches and specialty programs.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="h-8 w-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Claims Advocacy</h3>
                    <p className="text-slate-600">
                      Experienced in helping clients navigate claims processes and ensuring 
                      fair treatment from insurance companies.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Ready to Work with Specialists?</h3>
              <p className="text-blue-100 mb-8">
                Don't settle for agents who see your property as just another challenge. 
                Work with specialists who understand exactly what you're facing.
              </p>
              <button
                onClick={() => openForm()}
                className="w-full bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-colors mb-4"
              >
                Get Connected Now
              </button>
              <div className="text-center">
                <div className="text-blue-100 text-sm mb-2">Or call us directly:</div>
                <div className="text-xl font-bold">888-795-6550</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialist Network Stats */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Specialist Network</h2>
            <p className="text-xl text-slate-600">Proven results from experienced professionals</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 text-center">
              <div className="h-12 w-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Award className="h-6 w-6 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-slate-900 mb-2">15+</div>
              <div className="text-sm text-slate-600">Years Average Experience</div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 text-center">
              <div className="h-12 w-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-6 w-6 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-slate-900 mb-2">95%</div>
              <div className="text-sm text-slate-600">Success Rate</div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 text-center">
              <div className="h-12 w-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Clock className="h-6 w-6 text-orange-600" />
              </div>
              <div className="text-3xl font-bold text-slate-900 mb-2">24hr</div>
              <div className="text-sm text-slate-600">Average Response Time</div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialist vs General Agent */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Specialist vs General Agent</h2>
            <p className="text-xl text-slate-600">Understanding the difference</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
              <div className="h-12 w-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <Shield className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">High-Risk Specialists</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Focus exclusively on challenging properties</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Access to specialty and surplus lines carriers</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Understand complex underwriting guidelines</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Can refer to FAIR Plans and state programs</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Know how to improve property eligibility</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
              <div className="h-12 w-12 bg-slate-200 rounded-xl flex items-center justify-center mb-6">
                <Users className="h-6 w-6 text-slate-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">General Agents</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="h-5 w-5 bg-slate-300 rounded-full mt-0.5 flex-shrink-0"></div>
                  <span className="text-slate-600">Handle all types of insurance needs</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-5 w-5 bg-slate-300 rounded-full mt-0.5 flex-shrink-0"></div>
                  <span className="text-slate-600">Limited to standard market carriers</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-5 w-5 bg-slate-300 rounded-full mt-0.5 flex-shrink-0"></div>
                  <span className="text-slate-600">May not understand complex risks</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-5 w-5 bg-slate-300 rounded-full mt-0.5 flex-shrink-0"></div>
                  <span className="text-slate-600">Often refer difficult cases elsewhere</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-5 w-5 bg-slate-300 rounded-full mt-0.5 flex-shrink-0"></div>
                  <span className="text-slate-600">Limited knowledge of improvement strategies</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Specialist Success Stories</h2>
            <p className="text-xl text-slate-600">Real results from our network</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
              <div className="text-4xl mb-4">🏠</div>
              <h3 className="text-lg font-bold text-slate-900 mb-4">1950s Home in Pennsylvania</h3>
              <p className="text-slate-600 mb-4">
                "Three general agents said my 70-year-old home was uninsurable. The specialist 
                found coverage with a carrier that specializes in older properties."
              </p>
              <div className="text-sm text-green-600 font-semibold">
                ✓ Coverage found in 48 hours
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
              <div className="text-4xl mb-4">🌊</div>
              <h3 className="text-lg font-bold text-slate-900 mb-4">Coastal Home in Florida</h3>
              <p className="text-slate-600 mb-4">
                "After Hurricane Ian, I was nonrenewed. The specialist found private coverage 
                for $2,000 less than Citizens Property Insurance."
              </p>
              <div className="text-sm text-green-600 font-semibold">
                ✓ Saved $2,000 annually
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
              <div className="text-4xl mb-4">🔥</div>
              <h3 className="text-lg font-bold text-slate-900 mb-4">Wildfire Zone in Colorado</h3>
              <p className="text-slate-600 mb-4">
                "Living in the WUI zone, I thought FAIR Plan was my only option. The specialist 
                found private coverage with better terms."
              </p>
              <div className="text-sm text-green-600 font-semibold">
                ✓ Private market alternative found
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Choose a Specialist */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">How to Choose the Right Specialist</h2>
            <p className="text-xl text-slate-600">Questions to ask and what to look for</p>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">
                "What percentage of your business is high-risk properties?"
              </h3>
              <p className="text-slate-600">
                Look for agents where high-risk properties make up at least 50% of their business. 
                This ensures they have the focus and expertise you need.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">
                "Which surplus lines carriers do you work with?"
              </h3>
              <p className="text-slate-600">
                Specialists should have relationships with multiple surplus lines carriers 
                and be able to explain when each might be appropriate.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">
                "How do you handle properties with claims history?"
              </h3>
              <p className="text-slate-600">
                The right specialist will have specific strategies for presenting properties 
                with claims history and know which carriers are more flexible.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">
                "Can you help improve my property's insurability?"
              </h3>
              <p className="text-slate-600">
                Good specialists provide guidance on property improvements and risk mitigation 
                that can improve coverage options and reduce costs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Vetting Process */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Specialist Vetting Process</h2>
            <p className="text-xl text-slate-600">How we ensure quality in our network</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="h-16 w-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">License Verification</h3>
              <p className="text-slate-600 text-sm">
                We verify all state licenses and ensure agents are in good standing 
                with regulatory authorities.
              </p>
            </div>
            
            <div className="text-center">
              <div className="h-16 w-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Experience Review</h3>
              <p className="text-slate-600 text-sm">
                We evaluate years of experience specifically with high-risk properties 
                and challenging placements.
              </p>
            </div>
            
            <div className="text-center">
              <div className="h-16 w-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Market Access</h3>
              <p className="text-slate-600 text-sm">
                We confirm access to specialty carriers, surplus lines markets, 
                and state programs.
              </p>
            </div>
            
            <div className="text-center">
              <div className="h-16 w-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Performance Tracking</h3>
              <p className="text-slate-600 text-sm">
                We monitor success rates, response times, and customer satisfaction 
                to maintain quality standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* When You Need a Specialist */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">When You Need a Specialist</h2>
            <p className="text-xl text-slate-600">Signs it's time to work with high-risk experts</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-4 text-red-600">
                🚨 You Definitely Need a Specialist If:
              </h3>
              <ul className="space-y-2 text-slate-700">
                <li>• You've been nonrenewed or cancelled</li>
                <li>• Multiple agents have said you're "uninsurable"</li>
                <li>• You've been quoted only FAIR Plan coverage</li>
                <li>• Your property has multiple claims</li>
                <li>• You live in a high-risk area (coastal, wildfire, etc.)</li>
                <li>• Your home is over 50 years old</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-4 text-yellow-600">
                ⚠️ You Probably Need a Specialist If:
              </h3>
              <ul className="space-y-2 text-slate-700">
                <li>• You've had any claims in the past 3 years</li>
                <li>• Your property is in a flood zone</li>
                <li>• You have unique property features</li>
                <li>• Standard agents seem hesitant</li>
                <li>• You're getting very high quotes</li>
                <li>• You need coverage quickly</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Work with True Specialists?</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Stop wasting time with agents who don't understand your situation. 
            Get connected with specialists who live and breathe high-risk insurance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => openForm()}
              className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors"
            >
              Find My Specialist
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