import ContactForm from '../../components/ContactForm'
import { EnvelopeIcon } from '@heroicons/react/24/outline'

export const metadata = {
  title: 'Contact Us | Ellington Insurance',
  description: 'Get in touch with Ellington Insurance. We\'re here to help with your insurance needs.',
}

const ContactPage = () => {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Main contact section */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8">
              Contact Ellington Insurance
            </h1>
            
            <div className="grid md:grid-cols-2 gap-12">
              {/* Left column - Contact information */}
              <div>
                <div className="bg-white shadow-md rounded-lg p-6 mb-8">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Contact Information</h2>
                  <p className="text-gray-600 mb-6">
                    Have questions about our insurance policies? Our team is here to help you find the right coverage for your needs.
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-base font-medium text-gray-800 mb-2">Email</h3>
                      <div className="flex items-center">
                        <EnvelopeIcon className="h-5 w-5 text-primary" />
                        <span className="ml-3 text-gray-600">support@ellingtoninsurance.co.uk</span>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-base font-medium text-gray-800 mb-2">Business Hours</h3>
                      <p className="text-gray-600">Monday to Friday: 9:00 AM - 5:00 PM GMT</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white shadow-md rounded-lg p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Important Information</h2>
                  <p className="text-gray-600 mb-4">
                    Ellington Insurance is an independent insurance intermediary. All insurance products will be provided, administered, and underwritten by an insurance provider authorised and regulated by the FCA. Policies are subject to the insurer's terms, conditions, and eligibility criteria.
                  </p>
                </div>
              </div>
              
              {/* Right column - Contact form */}
              <div className="bg-white shadow-md rounded-lg p-6">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Client Portal Section */}
      <section className="py-12 md:py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Client Portal - Coming Soon
            </h2>
            <p className="text-gray-600">
              Our secure client portal is currently in development. Once launched, clients will be able to access policy information and manage their coverage online.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default ContactPage