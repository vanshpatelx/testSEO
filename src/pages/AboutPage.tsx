import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Users, Award, CheckCircle, ArrowRight, Phone, Clock, Target, Heart, Star } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import IntakeForm from '../components/IntakeForm';
import { useIntakeForm } from '../hooks/useIntakeForm';
import Breadcrumb from '../components/Breadcrumb';
import { generateOrganizationSchema, generateWebPageSchema, generateBreadcrumbSchema } from '../utils/schema';

export default function AboutPage() {
  const { isFormOpen, openForm, closeForm } = useIntakeForm();

  const aboutSchema = {
    "@context": "https://schema.org",
    "@graph": [
      generateOrganizationSchema(),
      generateWebPageSchema(
        "About Us | HighRiskHomeowners.com - High-Risk Insurance Specialists",
        "Learn about HighRiskHomeowners.com, our mission to help homeowners find coverage for challenging properties, and our network of licensed specialists.",
        "https://highriskhomeowners.com/about/"
      ),
      {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "name": "About HighRiskHomeowners.com",
        "description": "Since 2008, connecting homeowners with challenging properties to licensed insurance specialists nationwide.",
        "mainEntity": {
          "@id": "https://highriskhomeowners.com/#organization"
        }
      },
      generateBreadcrumbSchema([
        { name: "Home", url: "https://highriskhomeowners.com" },
        { name: "About Us", url: "https://highriskhomeowners.com/about/" }
      ])
    ]
  };

  return (
    <>
      <SEOHead 
        title="About Us | HighRiskHomeowners.com - High-Risk Insurance Specialists"
        description="Learn about HighRiskHomeowners.com, our mission to help homeowners find coverage for challenging properties, and our network of licensed specialists."
        keywords="about high risk home insurance, company history, insurance specialists, mission"
        canonical="https://highriskhomeowners.com/about/"
        jsonLd={aboutSchema}
      />
      
      <Breadcrumb items={[{ label: 'About Us' }]} />
      
      {/* Hero Section */}
      <section className="bg-gradient-subtle py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="h-20 w-20 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Shield className="h-10 w-10 text-primary-foreground" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              About
              <span className="block text-primary">HighRiskHomeowners.com</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Since 2008, we've been connecting homeowners with licensed agents who specialize 
              in high-risk properties and complex insurance situations.
            </p>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Mission</h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Every homeowner deserves access to quality insurance coverage, regardless of their 
                property's risk profile. We believe that being labeled "high-risk" shouldn't mean 
                being left without options or forced into expensive last-resort programs.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Our mission is to bridge the gap between homeowners facing insurance challenges 
                and the specialists who have the expertise and market access to solve them. We've 
                built a network of licensed professionals who understand that every property has 
                a story, and every story has a solution.
              </p>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Heart className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Helping Homeowners Since 2008</h3>
                  <p className="text-slate-600">Over 15 years of connecting people with solutions</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Our Core Values</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-200 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Accessibility</h4>
                    <p className="text-blue-100 text-sm">Everyone deserves access to insurance protection</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-200 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Expertise</h4>
                    <p className="text-blue-100 text-sm">Connecting you with true specialists, not generalists</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-200 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Transparency</h4>
                    <p className="text-blue-100 text-sm">Clear, honest communication about options and costs</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-200 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Results</h4>
                    <p className="text-blue-100 text-sm">Focused on finding real solutions that work</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Story</h2>
              <p className="text-xl text-slate-600">How we became the go-to resource for high-risk insurance</p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
              <div className="prose prose-lg max-w-none">
                <p className="text-slate-700 leading-relaxed mb-6">
                  HighRiskHomeowners.com was founded in 2008 when our founders recognized a critical gap 
                  in the insurance marketplace. Too many homeowners with challenging properties were 
                  being told they were "uninsurable" or forced into expensive state programs without 
                  exploring all available options.
                </p>
                
                <p className="text-slate-700 leading-relaxed mb-6">
                  We started by building relationships with insurance agents who specialized in 
                  difficult placements - professionals who understood that every property has unique 
                  characteristics and that creative solutions often exist where others see only problems. 
                  These agents had access to specialty carriers, surplus lines markets, and alternative 
                  programs that general agents simply didn't know about.
                </p>
                
                <p className="text-slate-700 leading-relaxed mb-6">
                  Over the years, we've refined our matching process, expanded our network to cover 
                  40+ states, and helped thousands of homeowners find coverage for properties that 
                  others couldn't insure. We've seen the insurance landscape change dramatically, 
                  with increasing weather events, stricter underwriting, and more properties being 
                  classified as high-risk.
                </p>
                
                <p className="text-slate-700 leading-relaxed">
                  Today, our mission remains the same: connecting homeowners who need specialized 
                  help with the agents who have the expertise to provide it. We're proud to offer 
                  this service at no cost to homeowners, making expert insurance guidance accessible 
                  to everyone who needs it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* By the Numbers */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">HighRiskHomeowners.com by the Numbers</h2>
            <p className="text-xl text-slate-600">Our track record speaks for itself</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">10,000+</div>
              <div className="text-sm text-slate-600">Homeowners Helped</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">15+</div>
              <div className="text-sm text-slate-600">Years in Business</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">40+</div>
              <div className="text-sm text-slate-600">States Served</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">95%</div>
              <div className="text-sm text-slate-600">Success Rate</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 text-center">
              <div className="text-4xl font-bold text-indigo-600 mb-2">24hr</div>
              <div className="text-sm text-slate-600">Average Response</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 text-center">
              <div className="text-4xl font-bold text-teal-600 mb-2">4.8/5</div>
              <div className="text-sm text-slate-600">Customer Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Approach</h2>
            <p className="text-xl text-slate-600">What sets us apart in the industry</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 text-center">
              <div className="h-16 w-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Specialized Focus</h3>
              <p className="text-slate-600">
                We focus exclusively on high-risk properties rather than trying to be everything 
                to everyone. This specialization allows us to provide better results.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 text-center">
              <div className="h-16 w-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Vetted Network</h3>
              <p className="text-slate-600">
                Every agent in our network is carefully vetted for licensing, experience, 
                and track record with high-risk properties before being included.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 text-center">
              <div className="h-16 w-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Clock className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Urgency Understanding</h3>
              <p className="text-slate-600">
                We understand that insurance needs are often urgent. Our process is designed 
                for speed without sacrificing quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Believe */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">What We Believe</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                <div className="h-12 w-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Shield className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Every Property Has a Solution</h3>
                <p className="text-slate-600">
                  We believe that with the right expertise and market access, coverage can be 
                  found for virtually any property. It's about knowing where to look and how to present the risk.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                <div className="h-12 w-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Expertise Should Be Accessible</h3>
                <p className="text-slate-600">
                  High-quality insurance guidance shouldn't be limited to those who can afford 
                  expensive consultants. Expert help should be available to everyone who needs it.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                <div className="h-12 w-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Award className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Specialists Make the Difference</h3>
                <p className="text-slate-600">
                  General agents often can't help with challenging properties. Specialists who 
                  focus on high-risk situations have the knowledge and relationships to find solutions.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                <div className="h-12 w-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Heart className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Service Over Profit</h3>
                <p className="text-slate-600">
                  Our free model ensures we're focused on helping homeowners rather than 
                  maximizing revenue. Success is measured by problems solved, not fees collected.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We're Different */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">How We're Different</h2>
            <p className="text-xl text-slate-600">What sets us apart from other insurance services</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="h-8 w-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">High-Risk Focus Only</h3>
                  <p className="text-slate-600">
                    We don't handle standard insurance needs. Our entire focus is on challenging 
                    properties that require specialized expertise.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="h-8 w-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Curated Agent Network</h3>
                  <p className="text-slate-600">
                    We don't work with just any licensed agent. Our network consists of specialists 
                    who have proven experience with high-risk properties.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="h-8 w-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">No Lead Farming</h3>
                  <p className="text-slate-600">
                    We don't sell your information to multiple agents. We make thoughtful 
                    connections with specialists who are right for your specific situation.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="h-8 w-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Ongoing Support</h3>
                  <p className="text-slate-600">
                    Our relationship doesn't end with the referral. We provide ongoing support 
                    and can help if issues arise during the coverage process.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="h-8 w-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Educational Resources</h3>
                  <p className="text-slate-600">
                    We provide extensive educational content to help homeowners understand 
                    their options and make informed decisions about coverage.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="h-8 w-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Quality Monitoring</h3>
                  <p className="text-slate-600">
                    We regularly monitor agent performance, customer satisfaction, and success 
                    rates to maintain the highest standards in our network.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">What Our Customers Say</h2>
            <p className="text-xl text-slate-600">Real feedback from homeowners we've helped</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-slate-700 mb-6">
                "HighRiskHomeowners.com saved me from having to use the FAIR Plan. The agent they 
                connected me with found private coverage for $1,200 less per year. Incredible service!"
              </p>
              <div className="text-sm text-slate-600">
                <div className="font-semibold">David M.</div>
                <div>Georgia Homeowner</div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-slate-700 mb-6">
                "After three claims, I thought I was uninsurable. The specialist they referred 
                understood my situation and found coverage with reasonable terms. So grateful!"
              </p>
              <div className="text-sm text-slate-600">
                <div className="font-semibold">Patricia L.</div>
                <div>Louisiana Homeowner</div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-slate-700 mb-6">
                "My 1960s home was rejected by everyone. The agent they connected me with 
                specialized in older homes and found coverage within 48 hours. Amazing!"
              </p>
              <div className="text-sm text-slate-600">
                <div className="font-semibold">Robert K.</div>
                <div>Pennsylvania Homeowner</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Commitment to You</h2>
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              We're committed to maintaining the highest standards of service while keeping our 
              referral service completely free to homeowners. We believe that everyone deserves 
              access to expert insurance guidance, regardless of their ability to pay for it.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mb-8">
              Our success is measured not by the fees we collect, but by the problems we solve 
              and the homeowners we help protect. When you succeed in finding the right coverage, 
              we succeed in our mission.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => openForm()}
                className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors"
              >
                Experience Our Service
              </button>
              <Link 
                to="/how-it-works"
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-colors inline-flex items-center justify-center gap-2"
              >
                Learn How It Works
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Get in Touch</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Have questions about our service or need immediate assistance? 
            We're here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:888-795-6550"
              className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
            >
              <Phone className="h-5 w-5" />
              Call 888-795-6550
            </a>
            <button 
              onClick={() => openForm()}
              className="border-2 border-slate-600 text-white px-8 py-4 rounded-xl font-semibold hover:border-slate-500 hover:bg-slate-800 transition-colors"
            >
              Get Connected with Specialists
            </button>
          </div>
          
          <div className="mt-8 text-sm text-slate-400">
            HighRiskHomeowners.com - Connecting homeowners with insurance solutions since 2008
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