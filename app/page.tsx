import Link from 'next/link';
import Image from 'next/image';
import HeroBanner from '@/components/HeroBanner';
import HowItWorks from '@/components/HowItWorks';
import Benefits from '@/components/Benefits';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import CTASection from '@/components/CTASection';

export default function Home() {
  return (
    <>
      <HeroBanner />
      <Benefits />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <CTASection />
    </>
  );
} 