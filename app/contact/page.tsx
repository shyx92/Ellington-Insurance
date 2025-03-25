import ContactForm from '../../components/ContactForm'

export const metadata = {
  title: 'Contact Us | Ellington Insurance',
  description: 'Get in touch with Ellington Insurance. We\'re here to help with your insurance needs.',
}

const ContactPage = () => {
  const socialPlatforms = ['twitter', 'facebook', 'linkedin', 'instagram'] as const;
  
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-lg mx-auto md:max-w-none">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Contact Ellington Insurance</h1>
              <p className="mt-4 text-lg text-gray-500">
                Have questions about our insurance policies? Our team is here to help you find the right coverage for your needs.
              </p>
              
              <div className="mt-8">
                <h2 className="text-xl font-bold text-gray-900">Get in Touch</h2>
                <div className="mt-6">
                  <dl className="space-y-8">
                    <div>
                      <dt className="sr-only">Email</dt>
                      <dd className="flex">
                        <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span className="ml-3">support@ellington.com</span>
                      </dd>
                    </div>
                    <div>
                      <dt className="sr-only">Phone number</dt>
                      <dd className="flex">
                        <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <span className="ml-3">1-800-ELLINGTON</span>
                      </dd>
                    </div>
                    <div>
                      <dt className="sr-only">Office address</dt>
                      <dd className="flex">
                        <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span className="ml-3">
                          <p>Ellington Insurance Headquarters</p>
                          <p className="text-gray-600">123 Insurance Plaza</p>
                          <p className="text-gray-600">Suite 100</p>
                          <p className="text-gray-600">New York, NY 10001</p>
                        </span>
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>

              <div className="mt-8">
                <h2 className="text-xl font-bold text-gray-900">Follow Us</h2>
                <div className="mt-4 flex space-x-6">
                  {socialPlatforms.map((platform) => (
                    <a
                      key={platform}
                      href={`https://${platform}.com/ellingtoninsurance`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-primary"
                      aria-label={`Follow Ellington Insurance on ${platform}`}
                    >
                      <span className="sr-only">{platform}</span>
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white shadow-lg rounded-lg p-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default ContactPage