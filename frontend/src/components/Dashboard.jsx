import React, { useState, useEffect, useContext } from 'react';
import { 
  LayoutDashboard, Users, Zap, LayoutTemplate, BarChart2, 
  CreditCard, Settings, Plus, CheckCircle2, ChevronRight, X, AlertCircle
} from 'lucide-react';
import { AuthContext } from '../context/AuthContext';
import './Dashboard.css';

const sidebarItems = [
  { icon: <LayoutDashboard size={20} />, label: 'Home' },
  { icon: <Users size={20} />, label: 'Accounts' },
  { icon: <Zap size={20} />, label: 'Automations', active: true },
  { icon: <LayoutTemplate size={20} />, label: 'Templates' },
  { icon: <BarChart2 size={20} />, label: 'Analytics' },
  { icon: <CreditCard size={20} />, label: 'Billing' },
  { icon: <Settings size={20} />, label: 'Settings' },
];

const Dashboard = () => {
  const { user } = useContext(AuthContext);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [automationActive, setAutomationActive] = useState(false);

  // Backend state
  const [mediaItems, setMediaItems] = useState([]);
  const [automations, setAutomations] = useState([]);
  const [loadingBackend, setLoadingBackend] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    contentId: 'any',
    triggerType: 'Comment Trigger',
    conditions: '',
    actions: [],
    messageTemplate: 'Hey {username}, thanks for your interest in {post_name}. Check your details here.',
    delay: 'Instant'
  });

  // Fetch automations and media when logged in
  useEffect(() => {
    if (user && user.token) {
      fetchAutomations();
      if (user.instagramData?.isConnected) {
        fetchMedia();
      }
    }
  }, [user]);

  const fetchAutomations = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/automations', {
        headers: { 'Authorization': `Bearer ${user.token}` }
      });
      const data = await res.json();
      if (res.ok) setAutomations(data);
    } catch (err) {
      console.error('Failed to fetch automations', err);
    }
  };

  const fetchMedia = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/instagram/media', {
        headers: { 'Authorization': `Bearer ${user.token}` }
      });
      const data = await res.json();
      if (res.ok) setMediaItems(data.data);
    } catch (err) {
      console.error('Failed to fetch media', err);
    }
  };

  const handleInstagramConnect = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/instagram/login', {
        headers: { 'Authorization': `Bearer ${user.token}` }
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url; // Redirect to Meta OAuth
      }
    } catch (err) {
      console.error('Meta Login Error', err);
    }
  };

  const handleSaveAutomation = async () => {
    setLoadingBackend(true);
    try {
      const payload = {
        ...formData,
        isActive: automationActive
      };

      const res = await fetch('http://localhost:5000/api/automations', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${user.token}` 
        },
        body: JSON.stringify(payload)
      });
      
      if (res.ok) {
        await fetchAutomations();
        closeModal();
      }
    } catch (err) {
      console.error('Save failed', err);
    }
    setLoadingBackend(false);
  };

  const nextStep = () => setStep(s => Math.min(s + 1, 7));
  const prevStep = () => setStep(s => Math.max(s - 1, 1));

  const toggleAction = (action) => {
    setFormData(prev => ({
      ...prev,
      actions: prev.actions.includes(action) 
        ? prev.actions.filter(a => a !== action)
        : [...prev.actions, action]
    }));
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      setStep(1);
      setFormData({
        contentId: 'any',
        triggerType: 'Comment Trigger',
        conditions: '',
        actions: [],
        messageTemplate: 'Hey {username}, thanks for your interest in {post_name}. Check your details here.',
        delay: 'Instant'
      });
    }, 300);
  };

  // If user is not logged in, show lock screen
  if (!user) {
    return (
      <section id="dashboard" className="dashboard-section section relative">
        <div className="container">
          <div className="text-center mb-12 filter blur-md opacity-50 select-none pointer-events-none">
            <h2>Interactive Dashboard</h2>
            <div className="dashboard-app glass-panel" style={{ height: '500px' }}></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="glass-card p-8 text-center" style={{ maxWidth: '400px' }}>
              <AlertCircle size={48} className="text-primary mx-auto mb-4 pulse-button" style={{ borderRadius: '50%' }} />
              <h3 className="mb-2">Login Required</h3>
              <p className="text-muted mb-6">Create an account or log in to access the automation dashboard.</p>
              <button className="btn btn-primary w-full" onClick={() => window.scrollTo(0,0)}>
                Go to Login
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="dashboard" className="dashboard-section section">
      <div className="container">
        <div className="text-center mb-12">
          <h2>Interactive Dashboard</h2>
          <p className="text-muted">Experience the power of our automation builder.</p>
        </div>

        <div className="dashboard-app glass-panel flex">
          {/* Sidebar */}
          <div className="dash-sidebar">
            <div className="dash-logo flex items-center gap-2 mb-8">
              <div className="logo-icon-wrapper" style={{ padding: '4px' }}>
                <Zap size={16} color="#ffffff" />
              </div>
              <span className="font-bold">AutoGram</span>
            </div>
            
            <nav className="dash-nav flex flex-col gap-2">
              {sidebarItems.map((item, i) => (
                <button 
                  key={i} 
                  className={`dash-nav-item flex items-center gap-3 ${item.active ? 'active' : ''}`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </button>
              ))}
            </nav>
          </div>

          {/* Main Content */}
          <div className="dash-main relative overflow-y-auto" style={{ maxHeight: '700px' }}>
            <div className="dash-header flex justify-between items-center mb-8">
              <h3>Automations</h3>
              {user.instagramData?.isConnected && (
                <button className="btn btn-primary" onClick={() => setIsModalOpen(true)}>
                  <Plus size={18} /> Create Automation
                </button>
              )}
            </div>

            <div className="dash-content grid grid-cols-2 gap-6">
              
              {/* Connection Card */}
              <div className="glass-card p-6" style={{ padding: '24px' }}>
                <h4 className="mb-4 flex items-center gap-2">
                  <InstagramIcon /> Instagram Connection
                </h4>
                {user.instagramData?.isConnected ? (
                  <div className="flex items-center gap-4">
                    <img src={user.instagramData.profilePic || 'https://via.placeholder.com/150'} alt="Profile" className="avatar large" />
                    <div>
                      <div className="font-bold text-lg">@{user.instagramData.username || 'connected_account'}</div>
                      <div className="flex items-center gap-1 text-green-400 text-sm mt-1">
                        <CheckCircle2 size={14} /> Connected
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-4">
                    <p className="text-muted text-sm mb-4">Connect your Meta Business account to start automating.</p>
                    <button className="btn btn-outline w-full" onClick={handleInstagramConnect}>
                      Connect Instagram
                    </button>
                  </div>
                )}
              </div>

              {/* Automations List / Empty State */}
              <div className="glass-card p-6 flex flex-col justify-center items-center text-center relative" style={{ padding: '24px' }}>
                {automations.length === 0 ? (
                  <>
                    <div className="icon-circle mb-4">
                      <Zap size={32} className="text-primary" />
                    </div>
                    <h4 className="mb-2">No Active Automations</h4>
                    <p className="text-muted text-sm mb-4">Create your first rule to start automating DMs.</p>
                    <button 
                      className="btn btn-outline" 
                      onClick={() => setIsModalOpen(true)}
                      disabled={!user.instagramData?.isConnected}
                    >
                      Create Rule
                    </button>
                  </>
                ) : (
                  <div className="w-full text-left">
                    <h4 className="mb-4">Active Rules ({automations.length})</h4>
                    <div className="flex flex-col gap-3 max-h-[200px] overflow-y-auto">
                      {automations.map(auto => (
                        <div key={auto._id} className="p-3 bg-white bg-opacity-5 rounded-lg border border-glass">
                          <div className="flex justify-between items-center mb-1">
                            <span className="font-bold">{auto.triggerType}</span>
                            <span className={`text-xs ${auto.isActive ? 'text-green-400' : 'text-muted'}`}>{auto.isActive ? 'Active' : 'Paused'}</span>
                          </div>
                          <div className="text-xs text-muted flex justify-between">
                            <span>{auto.actions.join(', ')}</span>
                            <span>{auto.conditions.length > 0 ? `Keywords: ${auto.conditions.join(', ')}` : 'Any'}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Automation Builder Modal */}
      {isModalOpen && (
        <div className="modal-overlay flex items-center justify-center">
          <div className="modal-content glass-panel" style={{ maxHeight: '90vh', overflowY: 'auto' }}>
            <div className="modal-header flex justify-between items-center">
              <h3>Create Automation <span className="text-muted text-sm ml-2">Step {step} of 7</span></h3>
              <button className="close-btn" onClick={closeModal}><X size={24} /></button>
            </div>
            
            <div className="modal-body">
              {/* STEP 1 */}
              {step === 1 && (
                <div className="step-content">
                  <h4>Select Content</h4>
                  <p className="text-muted mb-4">Which post should trigger this automation?</p>
                  <div className="grid grid-cols-3 gap-4">
                    <div 
                      className={`content-card glass-card ${formData.contentId === 'any' ? 'selected' : ''}`}
                      onClick={() => setFormData({...formData, contentId: 'any'})}
                    >
                      <div className="placeholder-img flex items-center justify-center text-xs text-center p-2">Any Post/Reel</div>
                    </div>
                    {mediaItems.map(item => (
                      <div 
                        key={item.id}
                        className={`content-card glass-card ${formData.contentId === item.id ? 'selected' : ''}`}
                        onClick={() => setFormData({...formData, contentId: item.id})}
                      >
                        <img src={item.media_url} alt="Post" className="w-full aspect-square object-cover rounded-lg" />
                        <p className="mt-2 text-xs text-center truncate">{item.caption || item.media_type}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* STEP 2 */}
              {step === 2 && (
                <div className="step-content">
                  <h4>Choose Trigger</h4>
                  <div className="flex flex-col gap-3 mt-4">
                    {['Comment Trigger', 'DM Trigger', 'Mention Trigger', 'Story Reply Trigger'].map(item => (
                      <button 
                        key={item}
                        className={`trigger-btn flex justify-between items-center ${formData.triggerType === item ? 'selected' : ''}`}
                        onClick={() => setFormData({...formData, triggerType: item})}
                      >
                        {item}
                        {formData.triggerType === item && <CheckCircle2 size={18} className="text-primary" />}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* STEP 3 */}
              {step === 3 && (
                <div className="step-content">
                  <h4>Set Conditions</h4>
                  <p className="text-muted mb-4">Trigger when comment contains specific keywords (comma separated).</p>
                  <input 
                    type="text" 
                    className="input-field" 
                    placeholder="e.g. price, details, interested"
                    value={formData.conditions}
                    onChange={(e) => setFormData({...formData, conditions: e.target.value})}
                  />
                  <div className="flex gap-2 mt-3">
                    {['price', 'link', 'details'].map(k => (
                      <span key={k} className="badge cursor-pointer" onClick={() => setFormData({...formData, conditions: formData.conditions ? formData.conditions + ', ' + k : k})}>
                        +{k}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* STEP 4 */}
              {step === 4 && (
                <div className="step-content">
                  <h4>Select Actions</h4>
                  <p className="text-muted mb-4">What should happen when triggered?</p>
                  <div className="grid grid-cols-2 gap-3">
                    {['Send DM', 'Reply Comment', 'Save Lead', 'Add Tag', 'Notify Team'].map(item => (
                      <button 
                        key={item}
                        className={`trigger-btn ${formData.actions.includes(item) ? 'selected' : ''}`}
                        onClick={() => toggleAction(item)}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* STEP 5 */}
              {step === 5 && (
                <div className="step-content">
                  <h4>Response Message</h4>
                  <p className="text-muted mb-2">Use dynamic variables to personalize.</p>
                  <div className="flex gap-2 mb-3">
                    <span className="badge text-xs">{'{username}'}</span>
                    <span className="badge text-xs">{'{comment}'}</span>
                    <span className="badge text-xs">{'{post_name}'}</span>
                  </div>
                  <textarea 
                    className="input-field message-editor" 
                    rows="4"
                    value={formData.messageTemplate}
                    onChange={(e) => setFormData({...formData, messageTemplate: e.target.value})}
                  ></textarea>
                </div>
              )}

              {/* STEP 6 */}
              {step === 6 && (
                <div className="step-content">
                  <h4>Delay Settings</h4>
                  <div className="grid grid-cols-2 gap-3 mt-4">
                    {['Instant', '1 min', '5 min', 'Custom'].map(item => (
                      <button 
                        key={item}
                        className={`trigger-btn ${formData.delay === item ? 'selected' : ''}`}
                        onClick={() => setFormData({...formData, delay: item})}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* STEP 7 */}
              {step === 7 && (
                <div className="step-content text-center">
                  <h4>Activate Automation</h4>
                  
                  <div className="summary-card glass-card text-left mt-6 mb-6">
                    <div className="flex justify-between mb-2">
                      <span className="text-muted">Target:</span>
                      <span>{formData.contentId === 'any' ? 'Any Post' : 'Specific Media'}</span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span className="text-muted">Trigger:</span>
                      <span>{formData.triggerType}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted">Actions:</span>
                      <span>{formData.actions.length} selected</span>
                    </div>
                  </div>

                  <div className="flex flex-col items-center gap-4">
                    <label className="toggle-switch">
                      <input 
                        type="checkbox" 
                        checked={automationActive}
                        onChange={() => setAutomationActive(!automationActive)}
                      />
                      <span className="slider round"></span>
                    </label>
                    <span className={`font-bold ${automationActive ? 'text-green-400' : 'text-muted'}`}>
                      {automationActive ? 'Active' : 'Inactive'}
                    </span>
                  </div>
                </div>
              )}

            </div>

            <div className="modal-footer flex justify-between mt-8 pt-4 border-t border-glass">
              {step > 1 ? (
                <button className="btn btn-outline" onClick={prevStep}>Back</button>
              ) : <div></div>}
              
              {step < 7 ? (
                <button className="btn btn-primary" onClick={nextStep}>
                  Continue <ChevronRight size={18} />
                </button>
              ) : (
                <button className="btn btn-primary pulse-button" onClick={handleSaveAutomation} disabled={loadingBackend}>
                  {loadingBackend ? 'Saving...' : 'Save & Close'}
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

// Mini Instagram Icon
const InstagramIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

export default Dashboard;
