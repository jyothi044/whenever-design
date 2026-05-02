import { SiteHeader } from "@/components/site/site-header";
import { HeroSection } from "@/components/site/hero-section";
import { TrustedStrip } from "@/components/site/trusted-strip";
import { HowItWorksSection } from "@/components/site/how-it-works-section";
import { ClientsBanner } from "@/components/site/clients-banner";
import { FeaturesSection } from "@/components/site/features-section";
import { TestimonialsCarousel } from "@/components/site/testimonials-carousel";
import { PricingSection } from "@/components/site/pricing-section";
import { BlogSection } from "@/components/site/blog-section";
import { FaqSection } from "@/components/site/faq-section";
import { SiteFooter } from "@/components/site/site-footer";
import { pricing } from "@/lib/mock-site";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <TrustedStrip />
        <HowItWorksSection />
        <ClientsBanner />
        <FeaturesSection />
        <TestimonialsCarousel />
        <PricingSection id={pricing.id} />
        <BlogSection />
        <FaqSection />
      </main>
      <SiteFooter />
    </>
  );
}
