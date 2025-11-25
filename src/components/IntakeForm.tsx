import React, { useState, useEffect } from 'react';
import { X, MapPin, Home, FileText, Phone, Mail, User, Calendar, AlertCircle, CheckCircle } from 'lucide-react';
import { STATES } from '../data/states';
import { trackEvent } from '../utils/analytics';
import { supabase } from "@/integrations/supabase/client";

interface IntakeFormProps {
  isOpen: boolean;
  onClose: () => void;
  initialState?: string;
}

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  streetAddress: string;
  city: string;
  state: string;
  zipCode: string;
  propertyType: string;
  yearBuilt: string;
  sqFootage: string;
  dateOfBirth: string;
  currentlyInsured: string;
  previousClaims: string;
  nonRenewal: string;
  reasonForNonRenewal: string;
  additionalInfo: string;
  contactPreference: string;
  bestTimeToCall: string;
}

export default function IntakeForm({ isOpen, onClose, initialState = '' }: IntakeFormProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});
  const [submissionError, setSubmissionError] = useState<string>('');
  
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    streetAddress: '',
    city: '',
    state: initialState,
    zipCode: '',
    propertyType: '',
    yearBuilt: '',
    sqFootage: '',
    dateOfBirth: '',
    currentlyInsured: '',
    previousClaims: '',
    nonRenewal: '',
    reasonForNonRenewal: '',
    additionalInfo: '',
    contactPreference: 'phone',
    bestTimeToCall: 'morning'
  });

  // Update state when initialState prop changes
  useEffect(() => {
    if (initialState && initialState !== formData.state) {
      setFormData(prev => ({ ...prev, state: initialState }));
    }
  }, [initialState]);

  const totalSteps = 4;

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string): boolean => {
    const phoneRegex = /^[\d\s()+-]{10,}$/;
    return phoneRegex.test(phone);
  };

  const validateZipCode = (zip: string): boolean => {
    const zipRegex = /^\d{5}(-\d{4})?$/;
    return zipRegex.test(zip);
  };

  const updateFormData = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (validationErrors[field]) {
      setValidationErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const validateStep = (step: number): boolean => {
    const errors: Record<string, string> = {};

    if (step === 1) {
      if (!formData.firstName.trim()) errors.firstName = 'First name is required';
      if (!formData.lastName.trim()) errors.lastName = 'Last name is required';
      if (!formData.email.trim()) {
        errors.email = 'Email is required';
      } else if (!validateEmail(formData.email)) {
        errors.email = 'Please enter a valid email';
      }
      if (!formData.phone.trim()) {
        errors.phone = 'Phone number is required';
      } else if (!validatePhone(formData.phone)) {
        errors.phone = 'Please enter a valid phone number';
      }
      if (!formData.streetAddress.trim()) errors.streetAddress = 'Street address is required';
      if (!formData.city.trim()) errors.city = 'City is required';
      if (!formData.state) errors.state = 'State is required';
      if (!formData.zipCode.trim()) {
        errors.zipCode = 'ZIP code is required';
      } else if (!validateZipCode(formData.zipCode)) {
        errors.zipCode = 'Please enter a valid ZIP code';
      }
    }

    if (step === 2) {
      if (!formData.propertyType) errors.propertyType = 'Property type is required';
      if (!formData.yearBuilt.trim()) errors.yearBuilt = 'Year built is required';
    }

    if (step === 3) {
      if (!formData.currentlyInsured) errors.currentlyInsured = 'This field is required';
      if (!formData.previousClaims) errors.previousClaims = 'This field is required';
      if (!formData.nonRenewal) errors.nonRenewal = 'This field is required';
      if (formData.nonRenewal === 'yes' && !formData.reasonForNonRenewal.trim()) {
        errors.reasonForNonRenewal = 'Please provide a reason for non-renewal';
      }
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, totalSteps));
    }
  };

  const handlePrevious = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = async () => {
    if (!validateStep(currentStep)) return;

    setIsSubmitting(true);
    setSubmissionError('');

    try {
      const { data, error } = await supabase.functions.invoke('submit-intake-form', {
        body: formData
      });

      if (error) throw error;

      trackEvent('form_submission', {
        state: formData.state,
        propertyType: formData.propertyType
      });

      setIsSubmitted(true);
    } catch (error: any) {
      console.error('Form submission error:', error);
      setSubmissionError(error.message || 'Failed to submit form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setCurrentStep(1);
    setIsSubmitted(false);
    setValidationErrors({});
    setSubmissionError('');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm">
      <div className="bg-card rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden border border-border">
        
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="text-2xl font-bold text-card-foreground">Get Your Free Quote</h2>
          <button
            onClick={handleClose}
            className="p-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors"
            aria-label="Close form"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {isSubmitted ? (
          <div className="p-8 text-center">
            <div className="w-16 h-16 bg-[hsl(var(--success)_/_0.1)] rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="h-8 w-8 text-[hsl(var(--success))]" />
            </div>
            <h3 className="text-2xl font-bold text-card-foreground mb-2">Thank You!</h3>
            <p className="text-muted-foreground mb-6">
              We've received your information and a licensed specialist will contact you within 24 hours.
            </p>
            <button
              onClick={handleClose}
              className="bg-[hsl(var(--primary))] text-primary-foreground px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity"
            >
              Close
            </button>
          </div>
        ) : (
          <>
            
            <div className="px-6 pt-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-muted-foreground">
                  Step {currentStep} of {totalSteps}
                </span>
                <span className="text-sm text-muted-foreground">
                  {Math.round((currentStep / totalSteps) * 100)}% Complete
                </span>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full bg-[hsl(var(--primary))] transition-all duration-300"
                  style={{ width: `${(currentStep / totalSteps) * 100}%` }}
                  role="progressbar"
                  aria-valuenow={Math.round((currentStep / totalSteps) * 100)}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
            </div>

            
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-250px)]">
              {currentStep === 1 && (
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-card-foreground mb-4">Personal Information</h3>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-card-foreground mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        value={formData.firstName}
                        onChange={(e) => updateFormData('firstName', e.target.value)}
                        className={`w-full px-4 py-3 border ${
                          validationErrors.firstName ? 'border-[hsl(var(--destructive))]' : 'border-input'
                        } rounded-xl focus:ring-2 focus:ring-[hsl(var(--ring))] focus:border-transparent bg-background text-foreground`}
                        aria-invalid={!!validationErrors.firstName}
                        aria-describedby={validationErrors.firstName ? "firstName-error" : undefined}
                      />
                      {validationErrors.firstName && (
                        <p id="firstName-error" className="mt-1 text-sm text-[hsl(var(--destructive))]" role="alert">{validationErrors.firstName}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-card-foreground mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        value={formData.lastName}
                        onChange={(e) => updateFormData('lastName', e.target.value)}
                        className={`w-full px-4 py-3 border ${
                          validationErrors.lastName ? 'border-[hsl(var(--destructive))]' : 'border-input'
                        } rounded-xl focus:ring-2 focus:ring-[hsl(var(--ring))] focus:border-transparent bg-background text-foreground`}
                        aria-invalid={!!validationErrors.lastName}
                        aria-describedby={validationErrors.lastName ? "lastName-error" : undefined}
                      />
                      {validationErrors.lastName && (
                        <p id="lastName-error" className="mt-1 text-sm text-[hsl(var(--destructive))]" role="alert">{validationErrors.lastName}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-card-foreground mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => updateFormData('email', e.target.value)}
                      className={`w-full px-4 py-3 border ${
                        validationErrors.email ? 'border-[hsl(var(--destructive))]' : 'border-input'
                      } rounded-xl focus:ring-2 focus:ring-[hsl(var(--ring))] focus:border-transparent bg-background text-foreground`}
                      aria-invalid={!!validationErrors.email}
                      aria-describedby={validationErrors.email ? "email-error" : undefined}
                    />
                    {validationErrors.email && (
                      <p id="email-error" className="mt-1 text-sm text-[hsl(var(--destructive))]" role="alert">{validationErrors.email}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-card-foreground mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => updateFormData('phone', e.target.value)}
                      className={`w-full px-4 py-3 border ${
                        validationErrors.phone ? 'border-[hsl(var(--destructive))]' : 'border-input'
                      } rounded-xl focus:ring-2 focus:ring-[hsl(var(--ring))] focus:border-transparent bg-background text-foreground`}
                      aria-invalid={!!validationErrors.phone}
                      aria-describedby={validationErrors.phone ? "phone-error" : undefined}
                    />
                    {validationErrors.phone && (
                      <p id="phone-error" className="mt-1 text-sm text-[hsl(var(--destructive))]" role="alert">{validationErrors.phone}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Street Address *
                    </label>
                    <input
                      type="text"
                      value={formData.streetAddress}
                      onChange={(e) => updateFormData('streetAddress', e.target.value)}
                      placeholder="123 Main Street"
                      className={`w-full px-4 py-3 border ${
                        validationErrors.streetAddress ? 'border-red-500' : 'border-slate-300'
                      } rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                    />
                    {validationErrors.streetAddress && (
                      <p className="mt-1 text-sm text-red-600">{validationErrors.streetAddress}</p>
                    )}
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        City *
                      </label>
                      <input
                        type="text"
                        value={formData.city}
                        onChange={(e) => updateFormData('city', e.target.value)}
                        className={`w-full px-4 py-3 border ${
                          validationErrors.city ? 'border-red-500' : 'border-slate-300'
                        } rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                      />
                      {validationErrors.city && (
                        <p className="mt-1 text-sm text-red-600">{validationErrors.city}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        ZIP Code *
                      </label>
                      <input
                        type="text"
                        value={formData.zipCode}
                        onChange={(e) => updateFormData('zipCode', e.target.value)}
                        className={`w-full px-4 py-3 border ${
                          validationErrors.zipCode ? 'border-red-500' : 'border-slate-300'
                        } rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                      />
                      {validationErrors.zipCode && (
                        <p className="mt-1 text-sm text-red-600">{validationErrors.zipCode}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      State *
                    </label>
                    <select
                      value={formData.state}
                      onChange={(e) => updateFormData('state', e.target.value)}
                      className={`w-full px-4 py-3 border ${
                        validationErrors.state ? 'border-red-500' : 'border-slate-300'
                      } rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                    >
                      <option value="">Select State</option>
                      {STATES.map((state) => (
                        <option key={state.code} value={state.code}>
                          {state.name}
                        </option>
                      ))}
                    </select>
                    {validationErrors.state && (
                      <p className="mt-1 text-sm text-red-600">{validationErrors.state}</p>
                    )}
                  </div>
                </div>
              )}

              {currentStep === 2 && (
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Property Information</h3>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Property Type *
                    </label>
                    <select
                      value={formData.propertyType}
                      onChange={(e) => updateFormData('propertyType', e.target.value)}
                      className={`w-full px-4 py-3 border ${
                        validationErrors.propertyType ? 'border-red-500' : 'border-slate-300'
                      } rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                    >
                      <option value="">Select Property Type</option>
                      <option value="single-family">Single Family Home</option>
                      <option value="condo">Condominium</option>
                      <option value="townhouse">Townhouse</option>
                      <option value="manufactured">Manufactured Home</option>
                      <option value="multi-family">Multi-Family</option>
                    </select>
                    {validationErrors.propertyType && (
                      <p className="mt-1 text-sm text-red-600">{validationErrors.propertyType}</p>
                    )}
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Year Built *
                      </label>
                      <input
                        type="text"
                        value={formData.yearBuilt}
                        onChange={(e) => updateFormData('yearBuilt', e.target.value)}
                        placeholder="YYYY"
                        className={`w-full px-4 py-3 border ${
                          validationErrors.yearBuilt ? 'border-red-500' : 'border-slate-300'
                        } rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                      />
                      {validationErrors.yearBuilt && (
                        <p className="mt-1 text-sm text-red-600">{validationErrors.yearBuilt}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Square Footage
                      </label>
                      <input
                        type="text"
                        value={formData.sqFootage}
                        onChange={(e) => updateFormData('sqFootage', e.target.value)}
                        placeholder="e.g., 2000"
                        className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>
              )}

              {currentStep === 3 && (
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Insurance History</h3>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Currently Insured? *
                    </label>
                    <div className="space-y-2">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          value="yes"
                          checked={formData.currentlyInsured === 'yes'}
                          onChange={(e) => updateFormData('currentlyInsured', e.target.value)}
                          className="mr-2"
                        />
                        <span>Yes</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          value="no"
                          checked={formData.currentlyInsured === 'no'}
                          onChange={(e) => updateFormData('currentlyInsured', e.target.value)}
                          className="mr-2"
                        />
                        <span>No</span>
                      </label>
                    </div>
                    {validationErrors.currentlyInsured && (
                      <p className="mt-1 text-sm text-red-600">{validationErrors.currentlyInsured}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Previous Claims in Last 5 Years? *
                    </label>
                    <div className="space-y-2">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          value="none"
                          checked={formData.previousClaims === 'none'}
                          onChange={(e) => updateFormData('previousClaims', e.target.value)}
                          className="mr-2"
                        />
                        <span>None</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          value="1-2"
                          checked={formData.previousClaims === '1-2'}
                          onChange={(e) => updateFormData('previousClaims', e.target.value)}
                          className="mr-2"
                        />
                        <span>1-2 Claims</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          value="3+"
                          checked={formData.previousClaims === '3+'}
                          onChange={(e) => updateFormData('previousClaims', e.target.value)}
                          className="mr-2"
                        />
                        <span>3+ Claims</span>
                      </label>
                    </div>
                    {validationErrors.previousClaims && (
                      <p className="mt-1 text-sm text-red-600">{validationErrors.previousClaims}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Ever Been Non-Renewed? *
                    </label>
                    <div className="space-y-2">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          value="yes"
                          checked={formData.nonRenewal === 'yes'}
                          onChange={(e) => updateFormData('nonRenewal', e.target.value)}
                          className="mr-2"
                        />
                        <span>Yes</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          value="no"
                          checked={formData.nonRenewal === 'no'}
                          onChange={(e) => updateFormData('nonRenewal', e.target.value)}
                          className="mr-2"
                        />
                        <span>No</span>
                      </label>
                    </div>
                    {validationErrors.nonRenewal && (
                      <p className="mt-1 text-sm text-red-600">{validationErrors.nonRenewal}</p>
                    )}
                  </div>

                  {formData.nonRenewal === 'yes' && (
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Reason for Non-Renewal *
                      </label>
                      <textarea
                        value={formData.reasonForNonRenewal}
                        onChange={(e) => updateFormData('reasonForNonRenewal', e.target.value)}
                        rows={3}
                        className={`w-full px-4 py-3 border ${
                          validationErrors.reasonForNonRenewal ? 'border-red-500' : 'border-slate-300'
                        } rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                      />
                      {validationErrors.reasonForNonRenewal && (
                        <p className="mt-1 text-sm text-red-600">{validationErrors.reasonForNonRenewal}</p>
                      )}
                    </div>
                  )}
                </div>
              )}

              {currentStep === 4 && (
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Additional Details</h3>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Date of Birth
                    </label>
                    <input
                      type="date"
                      value={formData.dateOfBirth}
                      onChange={(e) => updateFormData('dateOfBirth', e.target.value)}
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Additional Information
                    </label>
                    <textarea
                      value={formData.additionalInfo}
                      onChange={(e) => updateFormData('additionalInfo', e.target.value)}
                      rows={4}
                      placeholder="Any additional information about your property or insurance needs..."
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Preferred Contact Method *
                    </label>
                    <div className="space-y-2">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          value="phone"
                          checked={formData.contactPreference === 'phone'}
                          onChange={(e) => updateFormData('contactPreference', e.target.value)}
                          className="mr-2"
                        />
                        <span>Phone</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          value="email"
                          checked={formData.contactPreference === 'email'}
                          onChange={(e) => updateFormData('contactPreference', e.target.value)}
                          className="mr-2"
                        />
                        <span>Email</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          value="text"
                          checked={formData.contactPreference === 'text'}
                          onChange={(e) => updateFormData('contactPreference', e.target.value)}
                          className="mr-2"
                        />
                        <span>Text</span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Preferred Contact Time *
                    </label>
                    <select
                      value={formData.bestTimeToCall}
                      onChange={(e) => updateFormData('bestTimeToCall', e.target.value)}
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="morning">Morning (8am-12pm)</option>
                      <option value="afternoon">Afternoon (12pm-5pm)</option>
                      <option value="evening">Evening (5pm-8pm)</option>
                    </select>
                  </div>

                  {submissionError && (
                    <div className="p-4 bg-[hsl(var(--destructive)_/_0.1)] border border-[hsl(var(--destructive)_/_0.3)] rounded-xl">
                      <p className="text-sm text-[hsl(var(--destructive))]">{submissionError}</p>
                    </div>
                  )}
                </div>
              )}
            </div>

            
            <div className="p-6 border-t border-border flex gap-4">
              {currentStep > 1 && (
                <button
                  onClick={handlePrevious}
                  className="flex-1 px-6 py-3 border-2 border-border text-foreground rounded-xl font-semibold hover:bg-muted transition-colors"
                >
                  Previous
                </button>
              )}
              
              {currentStep < totalSteps ? (
                <button
                  onClick={handleNext}
                  className="flex-1 bg-[hsl(var(--primary))] text-primary-foreground px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity"
                >
                  Next
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="flex-1 bg-[hsl(var(--primary))] text-primary-foreground px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
