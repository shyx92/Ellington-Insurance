import Link from 'next/link';

export const metadata = {
  title: 'Insurance Plans | Ellington Insurance',
  description: 'Explore our range of insurance plans designed to provide comprehensive coverage options for your needs.',
};

const plans = [
  {
    name: 'Essential',
    description: 'Basic coverage designed for essential protection needs.',
    highlight: false,
    features: [
      'Comprehensive policy documentation',
      'Online policy management',
      'Annual coverage review',
      'Standard claims support',
      'Email support',
    ],
    coverage: 'Basic coverage options',
  },
  {
    name: 'Premium',
    description: 'Enhanced protection with additional coverage options.',
    highlight: true,
    features: [
      'All Essential features',
      'Extended coverage options',
      'Bi-annual coverage review',
      'Enhanced policy benefits',
      'Priority claims handling',
      'Priority email support',
    ],
    coverage: 'Extended coverage options',
  },
  {
    name: 'Ultimate',
    description: 'Comprehensive protection with maximum coverage options.',
    highlight: false,
    features: [
      'All Premium features',
      'Comprehensive coverage options',
      'Quarterly coverage review',
      'Maximum policy benefits',
      'Dedicated account manager',
      'Priority email support',
    ],
    coverage: 'Maximum coverage options',
  },
];

export default function PlansPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-10 md:py-20 bg-gradient-to-br from-primary/10 to-secondary/10 relative overflow-hidden">
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
              Insurance <span className="text-primary">Plans</span>
            </h1>
            <p className="text-base md:text-xl text-gray-700 mb-6 md:mb-10 max-w-3xl mx-auto">
              Discover our range of insurance plans designed to provide comprehensive coverage options tailored to your needs.
            </p>
          </div>
        </div>
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute -top-20 -right-20 w-40 md:w-60 h-40 md:h-60 bg-primary rounded-full filter blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-40 md:w-60 h-40 md:h-60 bg-secondary rounded-full filter blur-3xl"></div>
        </div>
      </section>

      {/* Plans Comparison */}
      <section className="py-10 md:py-20 bg-white overflow-hidden">
        <div className="container">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6">
              Choose Your <span className="text-primary">Plan</span>
            </h2>
            <p className="text-base md:text-xl text-gray-700 max-w-3xl mx-auto">
              Select the coverage level that best suits your requirements. Contact us for a personalized quote.
            </p>
          </div>

          {/* Horizontal scrolling container for mobile */}
          <div className="relative -mx-4 px-4 md:mx-0 md:px-0">
            <div className="flex md:grid md:grid-cols-3 gap-4 md:gap-8 max-w-6xl mx-auto overflow-x-auto md:overflow-x-visible pb-4 md:pb-0 snap-x snap-mandatory">
              {plans.map((plan, index) => (
                <div 
                  key={index} 
                  className={`flex-shrink-0 w-[85vw] sm:w-[60vw] md:w-auto snap-center rounded-2xl p-6 md:p-8 border-2 shadow-sm transition-all ${
                    plan.highlight 
                      ? 'border-primary shadow-lg relative md:scale-105 z-10 bg-white' 
                      : 'border-gray-100 bg-light hover:shadow-md'
                  }`}
                >
                  {plan.highlight && (
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                      Recommended
                    </div>
                  )}
                  <h3 className="text-xl md:text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-gray-600 text-sm md:text-base mb-4 md:mb-6">{plan.description}</p>
                  <div className="mb-4 md:mb-6">
                    <span className="text-primary font-medium block mb-2 text-sm md:text-base">Coverage Level:</span>
                    <span className="font-semibold text-base md:text-lg">{plan.coverage}</span>
                  </div>
                  <ul className="space-y-3 mb-6 text-sm md:text-base">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link 
                    href="/contact" 
                    className={`block w-full text-center py-2.5 md:py-3 px-4 md:px-6 rounded-lg transition-colors text-sm md:text-base ${
                      plan.highlight 
                        ? 'bg-primary text-white hover:bg-primary/90' 
                        : 'bg-white border-2 border-primary text-primary hover:bg-primary/5'
                    }`}
                  >
                    Request Quote
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 md:mt-12 text-center text-gray-500 max-w-3xl mx-auto px-4">
            <p className="text-sm md:text-base mb-4">All insurance products are subject to underwriting criteria and acceptance. Coverage options and benefits may vary based on individual circumstances and eligibility.</p>
            <p className="text-sm md:text-base">For detailed information about our insurance products and a personalized quote, please <Link href="/contact" className="text-primary hover:underline">contact us</Link>.</p>
          </div>
        </div>
      </section>

      {/* Important Information Section */}
      <section className="py-10 md:py-20 bg-light">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm">
              <h2 className="text-xl md:text-2xl font-bold mb-4">Important Information</h2>
              <div className="space-y-4 text-sm md:text-base text-gray-600">
                <p>
                  Ellington Insurance is an independent insurance intermediary. All insurance products will be provided, administered, and underwritten by an insurance provider authorised and regulated by the FCA. Policies are subject to the insurer's terms, conditions, and eligibility criteria.
                </p>
                <p>
                  The information provided on this website is for general guidance only and does not constitute financial advice. We recommend speaking with our team to understand which coverage options best suit your needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 md:py-20 bg-gradient-to-br from-primary to-accent text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6">
              Ready to Discuss Your Insurance Needs?
            </h2>
            <p className="text-base md:text-xl opacity-90 mb-6 md:mb-8">
              Contact us today for a detailed discussion about your insurance requirements.
            </p>
            <Link href="/contact" className="btn bg-white text-primary hover:bg-white/90 shadow-lg text-sm md:text-base py-2.5 md:py-3 px-6 md:px-8">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
} 