import React from 'react';
import { Bot, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="pt-20 pb-8" style={{ background: 'var(--bg-color-light)', borderTop: '1px solid var(--border-glass)' }}>
      <div className="container">
        <div className="glass-panel p-12 text-center mb-16 relative overflow-hidden">
          <div className="glow-orb orb-1" style={{ width: '200px', height: '200px', top: '0', left: '0' }}></div>
          <h2 className="mb-4 relative z-10">Start Automating Instagram Today</h2>
          <p className="text-muted mb-8 relative z-10">Join 500+ businesses turning followers into customers.</p>
          <div className="flex gap-4 justify-center relative z-10">
            <button className="btn btn-primary pulse-button">Connect Instagram</button>
            <button className="btn btn-outline">Book Demo</button>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-8 mb-12 border-b border-glass pb-12">
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="logo-icon-wrapper" style={{ padding: '4px' }}>
                <Bot size={20} color="#ffffff" />
              </div>
              <span className="font-bold text-xl">AutoGram</span>
            </div>
            <p className="text-muted text-sm mb-4">The ultimate AI automation platform for Instagram growth and sales.</p>
            <div className="flex gap-4 text-muted">
              <Twitter size={20} className="cursor-pointer hover:text-white" />
              <Instagram size={20} className="cursor-pointer hover:text-white" />
              <Linkedin size={20} className="cursor-pointer hover:text-white" />
            </div>
          </div>
          
          <div>
            <h4 className="mb-4">Product</h4>
            <ul className="flex flex-col gap-2 text-muted text-sm">
              <li><a href="#" className="hover:text-white">Features</a></li>
              <li><a href="#" className="hover:text-white">Pricing</a></li>
              <li><a href="#" className="hover:text-white">Templates</a></li>
              <li><a href="#" className="hover:text-white">Integrations</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="mb-4">Resources</h4>
            <ul className="flex flex-col gap-2 text-muted text-sm">
              <li><a href="#" className="hover:text-white">Help Center</a></li>
              <li><a href="#" className="hover:text-white">Blog</a></li>
              <li><a href="#" className="hover:text-white">Case Studies</a></li>
              <li><a href="#" className="hover:text-white">API Docs</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="mb-4">Company</h4>
            <ul className="flex flex-col gap-2 text-muted text-sm">
              <li><a href="#" className="hover:text-white">About</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="text-center text-muted text-sm flex justify-between">
          <p>&copy; {new Date().getFullYear()} AutoGram Inc. All rights reserved.</p>
          <p>Made with ❤️ for Creators</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
