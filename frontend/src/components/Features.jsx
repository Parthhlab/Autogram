import React from 'react';
import { MessageSquareReply, MessageCircle, Zap, BrainCircuit, Users, Link, UserCheck, BarChart3 } from 'lucide-react';
import './Features.css';

const features = [
  {
    icon: <MessageSquareReply size={28} />,
    title: 'Auto DM Replies',
    description: 'Instantly reply to direct messages based on keywords or intent.'
  },
  {
    icon: <MessageCircle size={28} />,
    title: 'Auto Comment Replies',
    description: 'Acknowledge every comment publicly and move the conversation to DMs.'
  },
  {
    icon: <Zap size={28} />,
    title: 'Keyword Trigger Automation',
    description: 'Set up specific keywords in reels or posts to trigger customized workflows.'
  },
  {
    icon: <BrainCircuit size={28} />,
    title: 'AI-Powered Responses',
    description: 'Leverage AI to understand context and send human-like conversational replies.'
  },
  {
    icon: <Users size={28} />,
    title: 'Lead Collection',
    description: 'Automatically capture emails, phone numbers, and names right inside Instagram DMs.'
  },
  {
    icon: <Link size={28} />,
    title: 'CRM Integration',
    description: 'Sync your leads directly to your favorite CRM tools seamlessly.'
  },
  {
    icon: <UserCheck size={28} />,
    title: 'Human Takeover',
    description: 'Pause the bot and let a human agent step in when things get complex.'
  },
  {
    icon: <BarChart3 size={28} />,
    title: 'Analytics Dashboard',
    description: 'Track conversion rates, messages sent, and ROI in real-time.'
  }
];

const Features = () => {
  return (
    <section id="features" className="features-section section">
      <div className="container">
        <div className="text-center mb-12">
          <div className="badge mb-4">Powerful Features</div>
          <h2>Everything You Need to Scale</h2>
          <p className="text-muted" style={{ maxWidth: '600px', margin: '0 auto' }}>
            Our premium suite of automation tools is designed to turn your Instagram followers into paying customers.
          </p>
        </div>

        <div className="features-grid grid grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="feature-card glass-card">
              <div className="feature-icon-wrapper">
                {feature.icon}
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-desc text-muted">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
