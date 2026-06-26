import React from 'react';
import { Bot, Lightbulb, UserCheck, ShieldAlert } from 'lucide-react';

const AIFeatures = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="grid grid-cols-2 gap-12 items-center">
          <div>
            <div className="badge mb-4">Advanced AI</div>
            <h2 className="mb-6">Smarter Conversations, <br/>Better Conversions</h2>
            <p className="text-muted mb-8">
              AutoGram doesn't just reply with static text. Our proprietary AI analyzes intent, scores leads, and crafts contextual responses.
            </p>
            <div className="flex flex-col gap-6">
              <div className="flex gap-4">
                <div className="text-primary mt-1"><Bot size={24} /></div>
                <div>
                  <h4 className="mb-1">AI Reply Generator</h4>
                  <p className="text-muted text-sm">Generates unique, human-like responses based on the context of the comment.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-primary mt-1"><Lightbulb size={24} /></div>
                <div>
                  <h4 className="mb-1">Smart Intent Detection</h4>
                  <p className="text-muted text-sm">Automatically categorizes DMs as "Support", "Sales", or "General".</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-primary mt-1"><UserCheck size={24} /></div>
                <div>
                  <h4 className="mb-1">Lead Scoring</h4>
                  <p className="text-muted text-sm">Scores users based on their engagement and intent to buy.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-primary mt-1"><ShieldAlert size={24} /></div>
                <div>
                  <h4 className="mb-1">Sentiment Analysis</h4>
                  <p className="text-muted text-sm">Detects frustrated users and escalates to a human agent immediately.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="ai-visual glass-panel p-8" style={{ minHeight: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div className="text-center">
              <Bot size={64} className="text-primary mb-4 mx-auto pulse-button" style={{ borderRadius: '50%' }} />
              <h3>AI Engine Active</h3>
              <p className="text-muted mt-2">Processing 1,000+ intents per second</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIFeatures;
