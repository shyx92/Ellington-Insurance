import ContactForm from '../../components/ContactForm'
import { EnvelopeIcon } from '@heroicons/react/24/outline'

export const metadata = {
  title: 'Contact Us | Ellington Insurance',
  description: 'Get in touch with Ellington Insurance. We\'re here to help with your insurance needs.',
}

const ContactPage = () => {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-8 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-8">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Contact Ellington Insurance</h1>
                <p className="text-base md:text-lg text-gray-500">
                  Have questions about our insurance policies? Our team is here to help you find the right coverage for your needs.
                </p>
              </div>
              
              <div>
                <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-4">Contact Information</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-base font-semibold text-gray-800 mb-2">Email</h3>
                    <div className="flex items-center">
                      <EnvelopeIcon className="h-5 w-5 text-primary" />
                      <span className="ml-3 text-sm md:text-base">support@ellingtoninsurance.co.uk</span>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-base font-semibold text-gray-800 mb-2">Business Hours</h3>
                    <p className="text-gray-600 text-sm md:text-base">Monday to Friday: 9:00 AM - 5:00 PM GMT</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white shadow-lg rounded-lg p-6 md:p-8">
              <ContactForm />
            </div>
          </div>
          <div className="mt-8 text-sm text-gray-500">
            <p className="mb-4">
              Ellington Insurance is an independent insurance intermediary. All insurance products will be provided, administered, and underwritten by an insurance provider authorised and regulated by the FCA. Policies are subject to the insurer's terms, conditions, and eligibility criteria.
            </p>
            <p>
              By submitting this form, you agree to our processing of your personal data in accordance with our Privacy Policy. We will only use your information to respond to your enquiry and provide relevant insurance services.
            </p>
          </div>
        </div>
      </div>
      
      {/* Client Portal Section */}
      <section className="py-10 md:py-16 bg-light">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-6">
              Client Portal - Coming Soon
            </h2>
            <p className="text-base md:text-lg text-gray-700 mb-6">
              Our secure client portal is currently in development. Once launched, clients will be able to access policy information and manage their coverage online.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default ContactPage