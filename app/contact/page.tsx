import ContactForm from '../../components/ContactForm'
import { EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline'

export const metadata = {
  title: 'Contact Us | Ellington Insurance',
  description: 'Get in touch with Ellington Insurance. We\'re here to help with your insurance needs.',
}

const ContactPage = () => {
  const socialPlatforms = ['twitter', 'facebook', 'linkedin', 'instagram'] as const;
  
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-8 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-lg mx-auto md:max-w-none">
          <div className="grid gap-6 md:gap-8 md:grid-cols-2">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4">Contact Ellington Insurance</h1>
              <p className="text-base md:text-lg text-gray-500 mb-6 md:mb-8">
                Have questions about our insurance policies? Our team is here to help you find the right coverage for your needs.
              </p>
              
              <div className="mb-6 md:mb-8">
                <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4">Get in Touch</h2>
                <div className="space-y-4">
                  <dl className="space-y-3 md:space-y-4">
                    <div className="flex items-center">
                      <EnvelopeIcon className="h-5 w-5 text-primary" />
                      <span className="ml-3 text-sm md:text-base">support@ellingtoninsurance.co.uk</span>
                    </div>
                    <div className="flex items-center">
                      <MapPinIcon className="h-5 w-5 text-primary" />
                      <span className="ml-3 text-sm md:text-base">123 Insurance Plaza, Suite 100, London</span>
                    </div>
                  </dl>
                </div>
              </div>

              <div>
                <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4">Follow Us</h2>
                <div className="flex space-x-3 md:space-x-4">
                  {socialPlatforms.map((platform) => (
                    <a
                      key={platform}
                      href={`https://${platform}.com/ellingtoninsurance`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 hover:text-primary transition-colors"
                      aria-label={`Follow Ellington Insurance on ${platform}`}
                    >
                      <span className="sr-only">{platform}</span>
                      <svg className="h-4 w-4 md:h-5 md:w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white shadow-lg rounded-lg p-4 md:p-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default ContactPage