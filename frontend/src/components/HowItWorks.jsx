import React from 'react';
import { Instagram, FileImage, Settings } from 'lucide-react';
import './HowItWorks.css';

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="how-it-works section">
      <div className="container">
        <div className="text-center mb-12">
          <div className="badge mb-4">Simple Process</div>
          <h2>How AutoGram Works</h2>
          <p className="text-muted" style={{ maxWidth: '600px', margin: '0 auto' }}>
            Get started in minutes. No coding required. Just connect, select, and automate.
          </p>
        </div>

        <div className="timeline">
          
          <div className="timeline-step">
            <div className="step-number glass-panel">1</div>
            <div className="step-content glass-card">
              <div className="step-icon">
                <Instagram size={32} />
              </div>
              <h3>Connect Instagram</h3>
              <p className="text-muted">Securely link your professional Instagram account using the official Meta API connection.</p>
            </div>
          </div>

          <div className="timeline-connector">
            <div className="animated-line"></div>
          </div>

          <div className="timeline-step">
            <div className="step-number glass-panel">2</div>
            <div className="step-content glass-card">
              <div className="step-icon">
                <FileImage size={32} />
              </div>
              <h3>Select Content</h3>
              <p className="text-muted">Choose the specific Posts, Reels, or Stories you want to automate responses for.</p>
            </div>
          </div>

          <div className="timeline-connector">
            <div className="animated-line"></div>
          </div>

          <div className="timeline-step">
            <div className="step-number glass-panel">3</div>
            <div className="step-content glass-card">
              <div className="step-icon">
                <Settings size={32} />
              </div>
              <h3>Activate Rules</h3>
              <p className="text-muted">Set up your keyword triggers and AI responses. Toggle the switch to go live instantly.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
