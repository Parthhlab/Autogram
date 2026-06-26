import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustSection from './components/TrustSection';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Dashboard from './components/Dashboard';
import Analytics from './components/Analytics';
import AIFeatures from './components/AIFeatures';
import Integrations from './components/Integrations';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Hero />
        <TrustSection />
        <Features />
        <HowItWorks />
        <Dashboard />
        <Analytics />
        <AIFeatures />
        <Integrations />
        <Pricing />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;
