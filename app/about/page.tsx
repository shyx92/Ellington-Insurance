import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'About Us | Ellington Insurance',
  description: 'Learn about our mission to revolutionize life insurance through AI technology and meet the team behind Ellington Insurance.',
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10 relative overflow-hidden">
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              About <span className="text-primary">Ellington Insurance</span>
            </h1>
            <p className="text-xl text-gray-700 mb-10 max-w-3xl mx-auto">
              We're on a mission to transform life insurance with cutting-edge AI technology, making coverage more personal, adaptive, and accessible for everyone.
            </p>
          </div>
        </div>
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-primary rounded-full filter blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-secondary rounded-full filter blur-3xl"></div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our <span className="text-primary">Mission</span>
              </h2>
              <p className="text-gray-700 mb-6">
                Ellington Insurance was founded on a simple yet powerful idea: life insurance should evolve with you. Traditional insurance remains static while life constantly changes. We're here to fix that disconnect.
              </p>
              <p className="text-gray-700 mb-6">
                By harnessing the power of artificial intelligence, we've created a dynamic insurance solution that continuously adapts to your changing circumstances, ensuring you're always optimally protected without paying for coverage you don't need.
              </p>
              <p className="text-gray-700">
                Our customer-centric approach means simplifying the complex world of insurance, making it transparent, and putting you in control. We believe everyone deserves financial protection that's as unique as they are.
              </p>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
              <Image 
                src="/images/team-collaboration.jpg" 
                alt="Our team collaborating on innovative insurance solutions"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-light">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Core <span className="text-primary">Values</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              These principles guide everything we do at Ellington Insurance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Innovation',
                description: 'We constantly explore new technologies and approaches to improve our services and your experience.',
                icon: (
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
              },
              {
                title: 'Transparency',
                description: 'We believe in clear communication, fair pricing, and making the complex world of insurance understandable.',
                icon: (
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                ),
              },
              {
                title: 'Empowerment',
                description: 'We put you in control of your coverage, providing tools and information to make confident decisions.',
                icon: (
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                ),
              },
            ].map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Meet Our <span className="text-primary">Team</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              The diverse experts behind Ellington Insurance, combining experience in technology, insurance, and customer care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Shahir Hassan',
                role: 'CEO & Founder',
                bio: 'Visionary leader with extensive experience in insurance and technology, Shahir leads our mission to transform the insurance industry through innovation.',
                image: '/images/team/shahir-hassan.jpg'
              },
              {
                name: 'Maya Rodriguez',
                role: 'CTO',
                bio: 'AI researcher and engineer passionate about applying cutting-edge technology to solve real-world problems in financial protection.',
                image: '/images/team/maya-rodriguez.jpg'
              },
              {
                name: 'James Wilson',
                role: 'Insurance Director',
                bio: 'With 20+ years in traditional insurance, James brings deep industry knowledge to our innovative approach.',
                image: '/images/team/james-wilson.jpg'
              },
              {
                name: 'Sarah Johnson',
                role: 'Customer Experience Lead',
                bio: 'Dedicated to creating seamless, intuitive experiences that make insurance accessible and understandable for everyone.',
                image: '/images/team/sarah-johnson.jpg'
              },
              {
                name: 'David Park',
                role: 'Data Science Director',
                bio: 'Expert in predictive modeling and risk assessment, David ensures our AI makes accurate, fair, and transparent decisions.',
                image: '/images/team/david-park.jpg'
              },
              {
                name: 'Daisy Williams',
                role: 'Operations Director',
                bio: 'Focused on building efficient systems that deliver consistent excellence in our service and product offerings.',
                image: '/images/team/olivia-williams.jpg'
              },
            ].map((member, index) => (
              <div key={index} className="bg-light p-8 rounded-xl hover:shadow-lg transition-shadow duration-300">
                <div className="relative w-48 h-48 rounded-full overflow-hidden mb-6 mx-auto">
                  <Image 
                    src={member.image}
                    alt={`${member.name} - ${member.role} at Ellington Insurance`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <h3 className="text-xl font-bold text-center mb-2">{member.name}</h3>
                <p className="text-primary text-center mb-4">{member.role}</p>
                <p className="text-gray-600 text-center">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Join Our Vision for Better Insurance
            </h2>
            <p className="text-xl opacity-90 mb-8">
              Experience the revolution in life insurance firsthand with a personalized quote.
            </p>
            <Link href="/contact" className="btn bg-white text-primary hover:bg-white/90">
              Get Started Today
            </Link>
          </div>
        </div>
      </section>
    </>
  );
} 