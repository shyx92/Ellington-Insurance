import Link from 'next/link';

export const metadata = {
  title: 'Plans & Pricing | Ellington Insurance',
  description: 'Explore our customizable AI-powered life insurance plans with dynamic pricing and adaptive coverage options.',
};

const plans = [
  {
    name: 'Essential',
    price: 29,
    period: 'month',
    description: 'Basic AI-powered coverage for individuals seeking essential protection.',
    highlight: false,
    features: [
      'AI profile analysis',
      'Personalized coverage recommendations',
      'Digital policy management',
      'Quarterly coverage review',
      'Email support',
    ],
    coverage: '£100,000 - £250,000',
  },
  {
    name: 'Premium',
    price: 79,
    period: 'month',
    description: 'Enhanced protection with advanced AI adaptation for families and individuals.',
    highlight: true,
    features: [
      'All Essential features',
      'Real-time risk assessment',
      'Monthly coverage optimization',
      'Family protection options',
      'Life event triggered reviews',
      'Priority email support',
    ],
    coverage: '£250,000 - £1,000,000',
  },
  {
    name: 'Ultimate',
    price: 149,
    period: 'month',
    description: 'Maximum coverage with full AI capabilities for comprehensive protection.',
    highlight: false,
    features: [
      'All Premium features',
      'Comprehensive risk analysis',
      'Weekly coverage optimization',
      'Predictive life event planning',
      'Multi-policy coordination',
      'Dedicated account manager',
      '24/7 priority email support',
    ],
    coverage: '£500,000 - £5,000,000',
  },
];

export default function PlansPage() {
  return (
    <>
      {/* Hero Section - More compact on mobile */}
      <section className="py-10 md:py-20 bg-gradient-to-br from-primary/10 to-secondary/10 relative overflow-hidden">
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
              Intelligent <span className="text-primary">Coverage</span> Plans
            </h1>
            <p className="text-base md:text-xl text-gray-700 mb-6 md:mb-10 max-w-3xl mx-auto">
              Discover our AI-powered life insurance plans that adapt to your changing needs, providing optimal protection at fair prices.
            </p>
          </div>
        </div>
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute -top-20 -right-20 w-40 md:w-60 h-40 md:h-60 bg-primary rounded-full filter blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-40 md:w-60 h-40 md:h-60 bg-secondary rounded-full filter blur-3xl"></div>
        </div>
      </section>

      {/* Plans Comparison - Scrollable cards on mobile */}
      <section className="py-10 md:py-20 bg-white overflow-hidden">
        <div className="container">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6">
              Choose Your <span className="text-primary">Plan</span>
            </h2>
            <p className="text-base md:text-xl text-gray-700 max-w-3xl mx-auto">
              Select the coverage that best fits your needs. All plans include our core AI technology.
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
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-xl md:text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="flex items-end mb-4 md:mb-6">
                    <span className="text-3xl md:text-4xl font-bold">£{plan.price}</span>
                    <span className="text-gray-500 ml-1">/{plan.period}</span>
                  </div>
                  <p className="text-gray-600 text-sm md:text-base mb-4 md:mb-6">{plan.description}</p>
                  <div className="mb-4 md:mb-6">
                    <span className="text-primary font-medium block mb-2 text-sm md:text-base">Coverage Range:</span>
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
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
            {/* Scroll indicators for mobile */}
            <div className="flex justify-center mt-4 space-x-2 md:hidden">
              {plans.map((_, index) => (
                <div
                  key={index}
                  className="w-2 h-2 rounded-full bg-gray-300"
                  aria-hidden="true"
                />
              ))}
            </div>
          </div>

          <div className="mt-8 md:mt-12 text-center text-gray-500 max-w-3xl mx-auto px-4">
            <p className="text-sm md:text-base mb-4">All plans include our AI-driven personalization and are subject to underwriting approval. Actual premiums may vary based on your unique profile and coverage needs.</p>
            <p className="text-sm md:text-base">Need a custom solution? <Link href="/contact" className="text-primary hover:underline">Contact us</Link> for a tailored plan.</p>
          </div>
        </div>
      </section>

      {/* Features Comparison - Optimized for mobile */}
      <section className="py-10 md:py-20 bg-light">
        <div className="container">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6">
              Detailed <span className="text-primary">Comparison</span>
            </h2>
            <p className="text-base md:text-xl text-gray-700 max-w-3xl mx-auto">
              Compare our plan features to find the perfect fit for your protection needs.
            </p>
          </div>

          <div className="overflow-x-auto -mx-4 px-4 md:mx-0 md:px-0">
            <table className="w-full max-w-5xl mx-auto bg-white rounded-xl shadow-sm text-sm md:text-base">
              <thead>
                <tr className="border-b">
                  <th className="p-3 md:p-4 text-left">Feature</th>
                  {plans.map((plan, index) => (
                    <th key={index} className={`p-3 md:p-4 text-center ${plan.highlight ? 'text-primary' : ''}`}>
                      {plan.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  'AI profile analysis',
                  'Personalized recommendations',
                  'Digital policy management',
                  'Coverage review frequency',
                  'Real-time risk assessment',
                  'Life event triggered reviews',
                  'Family protection options',
                  'Predictive life event planning',
                  'Multi-policy coordination',
                  'Support channels',
                  'Support availability',
                ].map((feature, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="p-3 md:p-4 font-medium">{feature}</td>
                    {plans.map((plan, j) => {
                      const hasFeature = j >= Math.floor(i / 4);
                      const basicFeature = i < 4;
                      let featureValue;
                      
                      switch(feature) {
                        case 'Coverage review frequency':
                          featureValue = j === 0 ? 'Quarterly' : j === 1 ? 'Monthly' : 'Weekly';
                          break;
                        case 'Support channels':
                          featureValue = j === 0 ? 'Email' : j === 1 ? 'Priority Email' : '24/7 Priority Email';
                          break;
                        case 'Support availability':
                          featureValue = j === 0 ? 'Business hours' : j === 1 ? 'Extended hours' : '24/7';
                          break;
                        default:
                          featureValue = hasFeature ? 'Included' : basicFeature ? 'Basic' : '—';
                      }
                      
                      return (
                        <td key={j} className={`p-3 md:p-4 text-center ${plan.highlight ? 'bg-primary/5' : ''}`}>
                          {hasFeature ? (
                            <span className={j === 2 && !basicFeature ? 'text-primary font-medium' : ''}>
                              {featureValue}
                            </span>
                          ) : (
                            <span className="text-gray-400">—</span>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section - More compact on mobile */}
      <section className="py-10 md:py-20 bg-white">
        <div className="container">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6">
              Common <span className="text-primary">Questions</span>
            </h2>
            <p className="text-base md:text-xl text-gray-700 max-w-3xl mx-auto">
              Answers to frequently asked questions about our plans and pricing.
            </p>
          </div>

          <div className="grid gap-4 md:gap-6 max-w-4xl mx-auto">
            {[
              {
                question: 'How are premium rates calculated?',
                answer: 'Our AI system analyzes multiple factors including age, health status, lifestyle, and coverage needs to determine your personalized rate. Unlike traditional insurers, we continuously reassess your risk profile, potentially lowering your premiums as your healthy habits develop.',
              },
              {
                question: 'Can I switch between plans?',
                answer: 'Yes, you can upgrade or downgrade your plan at any time through your online account. Changes typically take effect on your next billing cycle, and our system will guide you through any underwriting requirements for increased coverage.',
              },
              {
                question: 'Are there any hidden fees?',
                answer: 'No. We believe in transparent pricing with no hidden fees. The premium you see is what you pay, and we clearly communicate any potential changes based on policy adjustments or significant life changes.',
              },
              {
                question: 'How do I know which plan is right for me?',
                answer: 'Our AI recommendation engine will suggest the optimal plan based on your profile and needs during the quote process. You can also speak with our support team for personalized guidance, or try our coverage calculator tool.',
              },
            ].map((item, i) => (
              <div key={i} className="bg-light rounded-lg p-4 md:p-6">
                <h3 className="text-base md:text-lg font-bold mb-2 md:mb-3">{item.question}</h3>
                <p className="text-sm md:text-base text-gray-600">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - More compact on mobile */}
      <section className="py-10 md:py-20 bg-gradient-to-br from-primary to-accent text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6">
              Ready to Experience Smarter Insurance?
            </h2>
            <p className="text-base md:text-xl opacity-90 mb-6 md:mb-8">
              Get a personalized quote in minutes with no commitment required.
            </p>
            <Link href="/contact" className="btn bg-white text-primary hover:bg-white/90 shadow-lg text-sm md:text-base py-2.5 md:py-3 px-6 md:px-8">
              Get Your Quote Now
            </Link>
          </div>
        </div>
      </section>
    </>
  );
} 