import React from 'react';
import './TrustSection.css';

const TrustSection = () => {
  return (
    <section className="trust-section">
      <div className="container">
        <p className="trust-subtitle text-center mb-8">TRUSTED BY 500+ INSTAGRAM BUSINESSES</p>
        <div className="trust-stats grid grid-cols-4 gap-6">
          <div className="stat-card glass-card text-center">
            <h3 className="stat-number text-gradient">10,000+</h3>
            <p className="stat-label">Automated Replies Daily</p>
          </div>
          <div className="stat-card glass-card text-center">
            <h3 className="stat-number text-gradient">500+</h3>
            <p className="stat-label">Active Businesses</p>
          </div>
          <div className="stat-card glass-card text-center">
            <h3 className="stat-number text-gradient">98%</h3>
            <p className="stat-label">Response Rate</p>
          </div>
          <div className="stat-card glass-card text-center">
            <h3 className="stat-number text-gradient">24/7</h3>
            <p className="stat-label">Instant Automation</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
