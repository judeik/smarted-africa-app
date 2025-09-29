/**
 * src/pages/Landing.tsx
 * SmartEd Africa Landing Page - Pure React + Bootstrap
 * Created a different Component for the Landing Page
 */

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import schemaData from "../../public/schema.json"; // import your JSON file
import HeroSection from "@/components/HeroSection";
import TargetAudience from "@/components/TargetAudience";
import FeaturesSection from "@/components/FeaturesSection";
import WhyWork from "@/components/WhyWork";
import TestimonialSection from "@/components/TestimonialSection";
import NewsSection from "@/components/NewsSection";
import PartnersSection from "@/components/PartnersSection";
import ImpactCarousel from "@/components/ImpactCarousel";
import DonationSection from "@/components/DonationSection"
import ContactUsSection from "@/components/ContactUsSection";
import TeamAboutSection from "@/components/TeamAboutSection";
import LandingPageFooter from "@/components/LandingPageFooter";

export default function Landing(): React.ReactElement {
  useEffect(() => {
    // Enable Bootstrap tooltips or any additional JS if needed
  }, []);

  return (
    <div className="bg-light text-dark">

       {/* ✅ Helmet with JSON-LD */}
        <Helmet>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
          />
        </Helmet>

        <HeroSection/>
        <TargetAudience/>
        <FeaturesSection/>
        <WhyWork/>
        <TestimonialSection/>
        <NewsSection/>
        <PartnersSection/>
        <ImpactCarousel/>
        <DonationSection/>
        <ContactUsSection/>
        <TeamAboutSection/>
        <LandingPageFooter/>
    </div>
  );
}
