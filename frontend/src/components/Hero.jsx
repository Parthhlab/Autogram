import React from 'react';
import { ArrowRight, MessageCircle, Heart, Send } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section section">
      <div className="container">
        <div className="hero-content grid grid-cols-2 items-center gap-8">
          
          <div className="hero-text">
            <div className="badge mb-4">✨ AI-Powered Instagram Automation</div>
            <h1 className="hero-title">
              Automate Your <span className="text-gradient">Instagram</span> DMs & Comments with AI
            </h1>
            <p className="hero-subtitle">
              Auto reply to comments, send DMs instantly, capture leads and boost conversions 24/7 without lifting a finger.
            </p>
            <div className="hero-actions flex gap-4 mt-8">
              <button className="btn btn-primary pulse-button">
                Connect Instagram <ArrowRight size={20} />
              </button>
              <button className="btn btn-outline">
                Start Free Trial
              </button>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-mockup glass-panel animate-float">
              <div className="mockup-header flex justify-between items-center">
                <div className="mockup-user flex items-center gap-2">
                  <div className="avatar"></div>
                  <div className="user-info">
                    <div className="user-name">Sarah's Boutique</div>
                    <div className="user-status text-gradient">Online & Automating</div>
                  </div>
                </div>
                <div className="mockup-dots flex gap-2">
                  <span className="dot red"></span>
                  <span className="dot yellow"></span>
                  <span className="dot green"></span>
                </div>
              </div>
              
              <div className="mockup-body">
                <div className="message-bubble received glass-card flex items-center gap-2">
                  <MessageCircle size={16} />
                  <span>"How much is the blue dress?"</span>
                </div>
                <div className="message-bubble sent btn-primary flex items-center gap-2 ml-auto mt-4">
                  <Bot size={16} />
                  <span>"Hi! The blue dress is $49. Buy it here: link.com"</span>
                </div>
                <div className="message-bubble received glass-card flex items-center gap-2 mt-4">
                  <Heart size={16} className="text-red-500" />
                  <span>Liked a story</span>
                </div>
                <div className="message-bubble sent btn-primary flex items-center gap-2 ml-auto mt-4">
                  <Send size={16} />
                  <span>"Thanks for the love! Here's a 10% discount code."</span>
                </div>
              </div>
            </div>

            {/* Floating particles/cards */}
            <div className="floating-card glass-card card-1">
              <MessageCircle size={24} color="#7b2cbf" />
              <div className="fc-info">
                <div className="fc-val">+450</div>
                <div className="fc-lbl">Auto Replies</div>
              </div>
            </div>
            
            <div className="floating-card glass-card card-2">
              <div className="chart-bars">
                <div className="bar b1"></div>
                <div className="bar b2"></div>
                <div className="bar b3"></div>
              </div>
              <div className="fc-info">
                <div className="fc-val">85%</div>
                <div className="fc-lbl">Conversion Rate</div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      <div className="glow-orb orb-1"></div>
      <div className="glow-orb orb-2"></div>
    </section>
  );
};

// Add missing Bot import locally since it's used in Hero
import { Bot } from 'lucide-react';

export default Hero;
