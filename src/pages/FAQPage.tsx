import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, Phone, Mail } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import IntakeForm from '../components/IntakeForm';
import { useIntakeForm } from '../hooks/useIntakeForm';
import Breadcrumb from '../components/Breadcrumb';
import { generateOrganizationSchema, generateWebPageSchema, generateBreadcrumbSchema } from '../utils/schema';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

const FAQ_ITEMS: FAQItem[] = [
  {
    id: '1',
    question: 'What makes a property "high-risk" for insurance?',
    answer: 'Properties are considered high-risk due to factors like location (coastal areas, wildfire zones, flood plains), age (typically over 40 years), previous claims history, property condition, or unique features that increase liability. Each insurance company has different criteria for what they consider high-risk.',
    category: 'High-Risk Properties'
  },
  {
    id: '2',
    question: 'Is your referral service really free?',
    answer: 'Yes, our service is completely free to homeowners. We are compensated by the insurance agents when they successfully help you find coverage. There are no fees, charges, or hidden costs to you.',
    category: 'Our Service'
  },
  {
    id: '3',
    question: 'How quickly will I hear from an agent?',
    answer: 'Most homeowners are contacted by specialists within 24 hours of submitting their information. In urgent situations, same-day connections are often possible.',
    category: 'Our Service'
  },
  {
    id: '4',
    question: 'What is a FAIR Plan?',
    answer: 'FAIR Plans are state-sponsored insurance programs that provide basic property insurance when coverage is not available in the private market. They typically offer limited coverage at higher premiums and are considered a last resort option.',
    category: 'Coverage Options'
  },
  {
    id: '5',
    question: 'What should I do if I\'ve been nonrenewed?',
    answer: 'Don\'t panic - nonrenewal is more common than you think. Start shopping for new coverage immediately, gather all relevant documentation, and work with agents who specialize in high-risk properties. They have access to carriers that specifically accept nonrenewed properties.',
    category: 'Nonrenewal'
  },
  {
    id: '6',
    question: 'Can you help if I\'ve been turned down by multiple companies?',
    answer: 'Absolutely. Our specialists work with carriers that general agents don\'t have access to, including surplus lines markets and specialty programs designed specifically for challenging properties.',
    category: 'Coverage Options'
  },
  {
    id: '7',
    question: 'What states do you serve?',
    answer: 'We serve 40+ states nationwide. We currently don\'t provide referrals in California, Hawaii, Rhode Island, Iowa, North Dakota, and New York, but we serve all other states.',
    category: 'Our Service'
  },
  {
    id: '8',
    question: 'Do I have to work with the agent you refer me to?',
    answer: 'No, you\'re under no obligation to work with any agent we refer. If the first connection isn\'t a good fit, we can connect you with other specialists in your area.',
    category: 'Our Service'
  },
  {
    id: '9',
    question: 'What\'s the difference between admitted and surplus lines insurance?',
    answer: 'Admitted carriers are licensed by the state and follow state-approved rates and forms. Surplus lines carriers are non-admitted and offer more flexibility for unique or high-risk properties, but aren\'t covered by state guaranty funds.',
    category: 'Coverage Options'
  },
  {
    id: '10',
    question: 'How do claims affect my ability to get coverage?',
    answer: 'Claims history significantly impacts coverage availability and pricing. Multiple claims, especially in recent years, can lead to nonrenewal or higher premiums. However, specialists know which carriers are more flexible with claims history.',
    category: 'Claims History'
  },
  {
    id: '11',
    question: 'What can I do to improve my property\'s insurability?',
    answer: 'Common improvements include roof replacement, electrical updates, plumbing improvements, security system installation, and risk mitigation measures like defensible space for wildfire areas or storm shutters for coastal properties.',
    category: 'Property Improvements'
  },
  {
    id: '12',
    question: 'Is flood insurance included in homeowners insurance?',
    answer: 'No, flood insurance is separate from homeowners insurance and must be purchased separately through the National Flood Insurance Program (NFIP) or private flood insurance carriers.',
    category: 'Coverage Options'
  },
  {
    id: '13',
    question: 'What if my home is in a wildfire zone?',
    answer: 'Properties in Wildland-Urban Interface (WUI) zones require specialized coverage. Our specialists work with carriers that understand wildfire risks and can help with defensible space requirements and fire-resistant improvements.',
    category: 'High-Risk Properties'
  },
  {
    id: '14',
    question: 'How much does high-risk insurance cost?',
    answer: 'Costs vary significantly based on location, property characteristics, and risk factors. While high-risk insurance typically costs more than standard coverage, specialists can often find competitive options and help you avoid overpaying.',
    category: 'Costs'
  },
  {
    id: '15',
    question: 'What information do I need to provide?',
    answer: 'We\'ll need basic property information (location, age, type), insurance history, claims history, and details about your current situation. The more information you provide, the better we can match you with the right specialist.',
    category: 'Getting Started'
  },
  {
    id: '16',
    question: 'Can you help with mobile or manufactured homes?',
    answer: 'Yes, our network includes specialists who work specifically with mobile homes, manufactured housing, and other specialty property types that require unique coverage approaches.',
    category: 'High-Risk Properties'
  },
  {
    id: '17',
    question: 'What if I need coverage immediately?',
    answer: 'We understand the urgency of insurance needs. Our specialists can often provide same-day quotes and expedited binding for urgent situations, especially when coverage is expiring soon.',
    category: 'Getting Started'
  },
  {
    id: '18',
    question: 'Do you work with first-time homebuyers?',
    answer: 'Yes, we help first-time buyers who are purchasing high-risk properties or properties that standard agents have difficulty insuring. Our specialists can guide you through the process.',
    category: 'Getting Started'
  }
];

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const { isFormOpen, openForm, closeForm } = useIntakeForm();

  const categories = ['All', ...Array.from(new Set(FAQ_ITEMS.map(item => item.category)))];
  
  const filteredItems = selectedCategory === 'All' 
    ? FAQ_ITEMS 
    : FAQ_ITEMS.filter(item => item.category === selectedCategory);

  const toggleItem = (id: string) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <>
      <SEOHead 
        title="Frequently Asked Questions | HighRiskHomeowners.com"
        description="Get answers to common questions about high-risk home insurance, FAIR Plans, nonrenewals, and our free referral service."
        keywords="high risk insurance FAQ, FAIR plan questions, nonrenewal help, insurance questions"
        canonical="https://highriskhomeowners.com/faq/"
        jsonLd={{
          "@context": "https://schema.org",
          "@graph": [
            generateOrganizationSchema(),
            generateWebPageSchema(
              "Frequently Asked Questions | HighRiskHomeowners.com",
              "Get answers to common questions about high-risk home insurance, FAIR Plans, nonrenewals, and our free referral service.",
              "https://highriskhomeowners.com/faq/"
            ),
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": FAQ_ITEMS.map(item => ({
                "@type": "Question",
                "name": item.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": item.answer
                }
              }))
            },
            generateBreadcrumbSchema([
              { name: "Home", url: "https://highriskhomeowners.com" },
              { name: "FAQ", url: "https://highriskhomeowners.com/faq/" }
            ])
          ]
        }}
      />
      
      <Breadcrumb items={[{ label: 'FAQ' }]} />
      
      {/* Hero Section */}
      <section className="bg-gradient-subtle py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="h-20 w-20 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
              <HelpCircle className="h-10 w-10 text-primary-foreground" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Frequently Asked
              <span className="block text-primary">Questions</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Get answers to common questions about high-risk home insurance, 
              our referral service, and finding coverage for challenging properties.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-white border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Items */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {filteredItems.map((item) => (
              <div key={item.id} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-slate-50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-slate-900 pr-4">
                    {item.question}
                  </h3>
                  {openItems.includes(item.id) ? (
                    <ChevronUp className="h-5 w-5 text-slate-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-slate-500 flex-shrink-0" />
                  )}
                </button>
                
                {openItems.includes(item.id) && (
                  <div className="px-6 pb-6">
                    <div className="border-t border-slate-200 pt-4">
                      <p className="text-slate-700 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Still Have Questions?</h2>
          <p className="text-xl text-slate-600 mb-8">
            Can't find what you're looking for? Get in touch with us directly.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
              <div className="h-12 w-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Phone className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Call Us</h3>
              <p className="text-slate-600 mb-4">
                Speak directly with our team about your insurance situation.
              </p>
              <a 
                href="tel:888-795-6550"
                className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors inline-block"
              >
                888-795-6550
              </a>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
              <div className="h-12 w-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Mail className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Get Connected</h3>
              <p className="text-slate-600 mb-4">
                Submit your information and get connected with specialists who can answer your specific questions.
              </p>
              <button
                onClick={() => openForm()}
                className="bg-green-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-700 transition-colors"
              >
                Get Connected
              </button>
            </div>
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