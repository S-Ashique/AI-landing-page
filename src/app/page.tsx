import CallToAction from "@/components/cta";
import Features from "@/components/features";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import LogoTicker from "@/components/logoticker";
import Testimonials from "@/components/testimonials";
import React from "react";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <LogoTicker />
      <Features />
      <Testimonials />
      <CallToAction />
      <Footer />
    </>
  );
};

export default Home;
