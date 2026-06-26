import React from 'react';
import { TrendingUp, Users, MessageSquare } from 'lucide-react';

const Analytics = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="text-center mb-12">
          <h2>Advanced Analytics</h2>
          <p className="text-muted">Track everything. Measure ROI.</p>
        </div>
        
        <div className="grid grid-cols-3 gap-6">
          <div className="glass-card p-6" style={{ padding: '24px' }}>
            <div className="flex justify-between items-center mb-4">
              <span className="text-muted">Total Comments Replies</span>
              <MessageSquare size={20} className="text-primary" />
            </div>
            <h3 className="text-3xl mb-2 text-gradient">24,592</h3>
            <p className="text-green-400 text-sm flex items-center gap-1"><TrendingUp size={14} /> +12% this week</p>
          </div>

          <div className="glass-card p-6" style={{ padding: '24px' }}>
            <div className="flex justify-between items-center mb-4">
              <span className="text-muted">Leads Captured</span>
              <Users size={20} className="text-primary" />
            </div>
            <h3 className="text-3xl mb-2 text-gradient">1,204</h3>
            <p className="text-green-400 text-sm flex items-center gap-1"><TrendingUp size={14} /> +8% this week</p>
          </div>

          <div className="glass-card p-6" style={{ padding: '24px' }}>
            <div className="flex justify-between items-center mb-4">
              <span className="text-muted">Conversion Rate</span>
              <TrendingUp size={20} className="text-primary" />
            </div>
            <h3 className="text-3xl mb-2 text-gradient">14.8%</h3>
            <p className="text-green-400 text-sm flex items-center gap-1"><TrendingUp size={14} /> +2.4% this week</p>
          </div>
        </div>
        
        <div className="glass-panel mt-8 p-8" style={{ padding: '32px' }}>
          <h4 className="mb-6">Activity Overview</h4>
          {/* Simple CSS Chart Placeholder */}
          <div className="flex items-end gap-2 h-48 border-b border-glass pb-4">
            {[40, 60, 45, 80, 50, 90, 70].map((h, i) => (
              <div key={i} className="flex-1 bg-gradient-to-t" style={{ 
                height: `${h}%`, 
                background: 'var(--primary-gradient)',
                borderRadius: '4px 4px 0 0',
                opacity: h === 90 ? 1 : 0.6
              }}></div>
            ))}
          </div>
          <div className="flex justify-between mt-4 text-muted text-sm">
            <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Analytics;
