import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Shield, CheckCircle, ArrowRight, Award, Phone } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import IntakeForm from '../components/IntakeForm';
import { useIntakeForm } from '../hooks/useIntakeForm';
import Breadcrumb from '../components/Breadcrumb';

export default function LicensedAgentsPage() {
  const { isFormOpen, openForm, closeForm } = useIntakeForm();

  return (
    <>
      <SEOHead 
        title="Licensed Insurance Agents | HighRiskHomeowners.com"
        description="Connect with licensed insurance agents who specialize in high-risk properties nationwide."
        keywords="licensed insurance agents, high risk specialists, insurance professionals"
        canonical="https://highriskhomeowners.com/licensed-agents/"
      />
      
      <Breadcrumb items={[{ label: 'Licensed Agents' }]} />
      
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="h-20 w-20 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Shield className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
              Licensed Insurance
              <span className="block text-blue-600">Agents</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
              All agents in our network are fully licensed, experienced professionals who
              specialize in high-risk properties and complex insurance situations.
            </p>
            <button 
              onClick={() => openForm()}
              className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors inline-flex items-center gap-2"
            >
              <Users className="h-5 w-5" />
              Find Licensed Agents
            </button>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Fully Licensed</h3>
              <p className="text-slate-600">
                All agents hold valid state licenses and maintain required certifications.
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Experienced</h3>
              <p className="text-slate-600">
                Specialists with years of experience in high-risk property insurance.
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Responsive</h3>
              <p className="text-slate-600">
                Quick response times and dedicated support throughout the process.
              </p>
            </div>
          </div>
        </div>
      </section>

      <IntakeForm isOpen={isFormOpen} onClose={closeForm} />
    </>
  );
}