'use client';

import { useState } from 'react';
import Link from 'next/link';
import { EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline';

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <>
      {/* Hero Section - More compact on mobile */}
      <section className="py-10 md:py-20 bg-gradient-to-br from-primary/10 to-secondary/10 relative overflow-hidden">
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
              Contact <span className="text-primary">Ellington Insurance</span>
            </h1>
            <p className="text-base md:text-xl text-gray-700 mb-6 md:mb-10 max-w-3xl mx-auto">
              We are an independent insurance intermediary seeking to connect customers with leading insurance providers. Our team is here to assist with your enquiries.
            </p>
          </div>
        </div>
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute -top-20 -right-20 w-40 md:w-60 h-40 md:h-60 bg-primary rounded-full filter blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-40 md:w-60 h-40 md:h-60 bg-secondary rounded-full filter blur-3xl"></div>
        </div>
      </section>

      {/* Contact Form and Info - Adjusted spacing */}
      <section className="py-10 md:py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12">
            {/* Contact Form */}
            <div className="bg-light p-4 md:p-8 lg:p-10 rounded-2xl shadow-sm">
              {!submitted ? (
                <>
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6">Enquiry Form</h2>
                  <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                    <div className="grid grid-cols-1 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        required
                      ></textarea>
                    </div>
                    <div className="text-sm text-gray-500 mb-4">
                      <p>By submitting this form, you consent to Ellington Insurance processing your personal data in accordance with our Privacy Policy. We are an independent insurance intermediary and are in the process of obtaining FCA authorization.</p>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-primary text-white py-2 px-6 rounded-lg hover:bg-primary/90 transition-colors"
                    >
                      Submit Enquiry
                    </button>
                  </form>
                </>
              ) : (
                <div className="text-center py-8 md:py-16">
                  <svg className="w-16 h-16 text-primary mx-auto mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <h3 className="text-2xl font-bold mb-4">Thank You for Your Enquiry</h3>
                  <p className="text-gray-600">
                    We have received your message and will respond to your enquiry promptly during business hours.
                  </p>
                </div>
              )}
            </div>

            {/* Contact Information - More compact on mobile */}
            <div>
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6">Contact Information</h2>
              
              <div className="space-y-6 md:space-y-8">
                <div>
                  <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">Business Hours</h3>
                  <p className="text-gray-600 text-sm md:text-base mb-2">Monday to Friday: 9:00 AM - 5:00 PM GMT</p>
                  <div className="flex items-center mt-4">
                    <EnvelopeIcon className="h-5 w-5 text-primary mr-3" />
                    <p className="text-gray-600 text-sm md:text-base">support@ellingtoninsurance.co.uk</p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">Important Information</h3>
                  <p className="text-gray-600 text-sm md:text-base mb-4">
                    Ellington Insurance is a trading name of [Your Company Legal Name]. We are an independent insurance intermediary currently in the process of obtaining authorization from the Financial Conduct Authority (FCA).
                  </p>
                  <p className="text-gray-600 text-sm md:text-base">
                    Insurance products will be provided through our panel of carefully selected insurance providers. All insurance products are subject to terms, conditions, and eligibility criteria.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">Connect With Us</h3>
                  <div className="flex space-x-3 md:space-x-4">
                    {['linkedin'].map((platform) => (
                      <a
                        key={platform}
                        href={`https://${platform}.com/ellingtoninsurance`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-colors"
                        aria-label={`Follow Ellington Insurance on ${platform}`}
                      >
                        <span className="capitalize text-sm md:text-base">{platform.charAt(0)}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Account Access Section - More compact on mobile */}
      <section className="py-10 md:py-16 bg-light">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-6">
              Client Portal - Coming Soon
            </h2>
            <p className="text-base md:text-xl text-gray-700 mb-6 md:mb-8">
              Our secure client portal is currently in development. Once launched, clients will be able to access policy information and manage their coverage online.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactForm; 