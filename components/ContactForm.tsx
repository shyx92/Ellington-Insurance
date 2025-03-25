'use client';

import { useState } from 'react';
import Link from 'next/link';
import { EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    policyHolder: 'no',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // In a real implementation, you would send the data to your backend
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero Section - More compact on mobile */}
      <section className="py-10 md:py-20 bg-gradient-to-br from-primary/10 to-secondary/10 relative overflow-hidden">
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
              Contact & <span className="text-primary">Support</span>
            </h1>
            <p className="text-base md:text-xl text-gray-700 mb-6 md:mb-10 max-w-3xl mx-auto">
              Our team is here to help with your questions, provide personalized quotes, or assist with your existing policy.
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
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6">Send Us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                          First Name*
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          required
                          value={formData.firstName}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                          Last Name*
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          required
                          value={formData.lastName}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email Address*
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                        Subject*
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Message*
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                      ></textarea>
                    </div>

                    <div>
                      <label htmlFor="policyHolder" className="block text-sm font-medium text-gray-700 mb-1">
                        Are you an existing policy holder?
                      </label>
                      <select
                        id="policyHolder"
                        name="policyHolder"
                        value={formData.policyHolder}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                      >
                        <option value="no">No</option>
                        <option value="yes">Yes</option>
                      </select>
                    </div>

                    <div className="pt-4">
                      <button
                        type="submit"
                        className="w-full bg-primary text-white py-3 px-6 rounded-lg hover:bg-primary/90 transition-colors"
                      >
                        Send Message
                      </button>
                    </div>
                  </form>
                </>
              ) : (
                <div className="text-center py-8 md:py-16">
                  <svg className="w-16 h-16 text-primary mx-auto mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <h2 className="text-2xl font-bold mb-4">Thank You!</h2>
                  <p className="text-gray-600 mb-6">Your message has been sent successfully. We'll get back to you as soon as possible.</p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        firstName: '',
                        lastName: '',
                        email: '',
                        phone: '',
                        subject: '',
                        message: '',
                        policyHolder: 'no',
                      });
                    }}
                    className="bg-primary text-white py-2 px-6 rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              )}
            </div>

            {/* Contact Information - More compact on mobile */}
            <div>
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6">Contact Information</h2>
              
              <div className="space-y-6 md:space-y-8">
                <div>
                  <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">Customer Support</h3>
                  <ul className="space-y-3 md:space-y-4">
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-primary mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <div>
                        <p className="font-medium">Phone Support</p>
                        <p className="text-gray-600">1-800-ELLINGTON</p>
                        <p className="text-sm text-gray-500">Monday - Friday, 8am - 8pm EST</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-primary mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <div>
                        <p className="font-medium">Email Support</p>
                        <p className="text-gray-600">support@ellingtoninsurance.co.uk</p>
                        <p className="text-sm text-gray-500">24/7 response, typically within 24 hours</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-primary mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                      <div>
                        <p className="font-medium">Live Chat</p>
                        <p className="text-gray-600">Available through our client portal</p>
                        <p className="text-sm text-gray-500">Monday - Saturday, 9am - 9pm EST</p>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div className="mt-6 md:mt-8">
                  <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">Contact Information</h3>
                  <div className="space-y-3 md:space-y-4">
                    <div className="flex items-center">
                      <EnvelopeIcon className="h-5 w-5 text-primary mr-3" />
                      <p className="text-gray-600 text-sm md:text-base">support@ellingtoninsurance.co.uk</p>
                    </div>
                    <div className="flex items-center">
                      <MapPinIcon className="h-5 w-5 text-primary mr-3" />
                      <div>
                        <p className="text-sm md:text-base">Ellington Insurance Headquarters</p>
                        <p className="text-gray-600 text-sm md:text-base">123 Insurance Plaza, Suite 100</p>
                        <p className="text-gray-600 text-sm md:text-base">London</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">Connect With Us</h3>
                  <div className="flex space-x-3 md:space-x-4">
                    {['twitter', 'facebook', 'linkedin', 'instagram'].map((platform) => (
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
              Access Your Account
            </h2>
            <p className="text-base md:text-xl text-gray-700 mb-6 md:mb-8">
              Existing customers can access policy information, make changes, and view documents through our secure portal.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4">
              <Link href="#" className="btn-primary text-sm md:text-base py-2 px-4 md:py-3 md:px-6">
                Log In to Portal
              </Link>
              <Link href="#" className="btn-outline text-sm md:text-base py-2 px-4 md:py-3 md:px-6">
                Register Account
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactForm; 