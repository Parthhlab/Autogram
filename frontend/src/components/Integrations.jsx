import React from 'react';
import { Instagram, Trello, Slack, Database, Mail } from 'lucide-react';

const Integrations = () => {
  return (
    <section className="section" style={{ background: 'rgba(255,255,255,0.02)', borderTop: '1px solid var(--border-glass)', borderBottom: '1px solid var(--border-glass)' }}>
      <div className="container text-center">
        <h2 className="mb-4">Connects with Your Stack</h2>
        <p className="text-muted mb-12">Seamlessly integrate AutoGram with your favorite tools.</p>
        
        <div className="flex justify-center flex-wrap gap-8 items-center">
          <div className="glass-card p-6 flex flex-col items-center gap-3 w-32">
            <Instagram size={32} />
            <span className="text-sm">Instagram</span>
          </div>
          <div className="glass-card p-6 flex flex-col items-center gap-3 w-32">
            <Database size={32} />
            <span className="text-sm">Sheets</span>
          </div>
          <div className="glass-card p-6 flex flex-col items-center gap-3 w-32">
            <Slack size={32} />
            <span className="text-sm">Slack</span>
          </div>
          <div className="glass-card p-6 flex flex-col items-center gap-3 w-32">
            <ZapIcon />
            <span className="text-sm">Zapier</span>
          </div>
          <div className="glass-card p-6 flex flex-col items-center gap-3 w-32">
            <Trello size={32} />
            <span className="text-sm">Notion</span>
          </div>
        </div>
      </div>
    </section>
  );
};

const ZapIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
  </svg>
);

export default Integrations;
