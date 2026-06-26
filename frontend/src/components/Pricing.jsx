import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import './Pricing.css';

const Pricing = () => {
  return (
    <section id="pricing" className="section">
      <div className="container">
        <div className="text-center mb-12">
          <h2>Simple, Transparent Pricing</h2>
          <p className="text-muted">Scale your Instagram presence without breaking the bank.</p>
        </div>

        <div className="grid grid-cols-3 gap-8 items-center pricing-grid">
          
          {/* Starter */}
          <div className="glass-card p-8 pricing-card">
            <h3 className="mb-2">Starter</h3>
            <p className="text-muted text-sm mb-6">Perfect for creators just starting out.</p>
            <div className="text-4xl font-bold mb-6">$29<span className="text-lg text-muted font-normal">/mo</span></div>
            <ul className="mb-8 flex flex-col gap-3">
              <li className="flex gap-2"><CheckCircle2 size={18} className="text-primary"/> Up to 1,000 auto-replies</li>
              <li className="flex gap-2"><CheckCircle2 size={18} className="text-primary"/> 1 Instagram Account</li>
              <li className="flex gap-2"><CheckCircle2 size={18} className="text-primary"/> Basic Templates</li>
            </ul>
            <button className="btn btn-outline w-full">Start Free</button>
          </div>

          {/* Pro */}
          <div className="glass-panel p-8 pricing-card pro pulse-button">
            <div className="badge mb-4">Most Popular</div>
            <h3 className="mb-2">Pro</h3>
            <p className="text-muted text-sm mb-6">For businesses ready to scale.</p>
            <div className="text-4xl font-bold mb-6">$79<span className="text-lg text-muted font-normal">/mo</span></div>
            <ul className="mb-8 flex flex-col gap-3">
              <li className="flex gap-2"><CheckCircle2 size={18} className="text-primary"/> Up to 10,000 auto-replies</li>
              <li className="flex gap-2"><CheckCircle2 size={18} className="text-primary"/> 3 Instagram Accounts</li>
              <li className="flex gap-2"><CheckCircle2 size={18} className="text-primary"/> Advanced AI AI-Responses</li>
              <li className="flex gap-2"><CheckCircle2 size={18} className="text-primary"/> CRM Integrations</li>
            </ul>
            <button className="btn btn-primary w-full">Start 14-Day Trial</button>
          </div>

          {/* Agency */}
          <div className="glass-card p-8 pricing-card">
            <h3 className="mb-2">Agency</h3>
            <p className="text-muted text-sm mb-6">For teams managing multiple clients.</p>
            <div className="text-4xl font-bold mb-6">$199<span className="text-lg text-muted font-normal">/mo</span></div>
            <ul className="mb-8 flex flex-col gap-3">
              <li className="flex gap-2"><CheckCircle2 size={18} className="text-primary"/> Unlimited auto-replies</li>
              <li className="flex gap-2"><CheckCircle2 size={18} className="text-primary"/> Unlimited Accounts</li>
              <li className="flex gap-2"><CheckCircle2 size={18} className="text-primary"/> White-label dashboard</li>
              <li className="flex gap-2"><CheckCircle2 size={18} className="text-primary"/> Priority Support</li>
            </ul>
            <button className="btn btn-outline w-full">Contact Sales</button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Pricing;
