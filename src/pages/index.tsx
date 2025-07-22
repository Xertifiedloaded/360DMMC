import FaqSection from "@/components/Accordion";
import Footer from "@/components/Footer";
import GetStarted from "@/components/GetStarted";
import HeroSection from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Process from "@/components/Process";

import UseCasesSection from "@/components/UseCase";
import Head from "next/head";


export default function Home() {
  return (
 <>
       <Head>
        <title>360°DMMC - Through AI Technology Transformation</title>
        <meta
          name="description"
          content="Elevate your career with a compelling digital portfolio that showcases your unique skills, achievements, and potential to global opportunities."
        />
        <meta property="og:title" content="360°DMMC - Through AI Technology Transformation" />
        <meta property="og:description" content="Elevate your career..." />
        <meta name="twitter:title" content="360°DMMC" />
        <meta name="twitter:description" content="Elevate your career..." />
      </Head>

 <HeroSection/>
 <Process/>
 <UseCasesSection/>
 <Pricing/>
 <FaqSection/>

 <GetStarted/>

 </>
  );
}
