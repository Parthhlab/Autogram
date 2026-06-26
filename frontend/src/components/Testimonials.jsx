import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="text-center mb-12">
          <h2>Loved by Creators & Brands</h2>
        </div>
        
        <div className="grid grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="glass-card p-6">
              <div className="flex gap-1 mb-4 text-yellow-400">
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
              </div>
              <p className="mb-6 italic text-sm">"AutoGram completely changed how we handle DMs. It's like having a 24/7 sales rep that never sleeps. Our conversion rate doubled in the first month."</p>
              <div className="flex items-center gap-3">
                <div className="avatar"></div>
                <div>
                  <div className="font-bold text-sm">Alex Johnson</div>
                  <div className="text-muted text-xs">E-commerce Founder</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
