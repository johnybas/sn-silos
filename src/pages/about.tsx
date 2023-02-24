import AboutHero from "@/components/about/AboutHero";
import OurJourney from "@/components/about/OurJourney";
import OurVision from "@/components/about/OurVision";
import Layout from "@/components/layout/Layout";
import Image from "next/image";
import React from "react";

const AboutPage = () => {
  return (
    <Layout title='About - SN Silos | Land of Technlogy'>
      <AboutHero />
      <OurVision />
      <OurJourney />
    </Layout>
  );
};

export default AboutPage;
