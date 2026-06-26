import React, { useState, useEffect, useContext } from 'react';
import { Bot, Menu, X, LogIn, UserPlus } from 'lucide-react';
import { AuthContext } from '../context/AuthContext';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState('login'); // 'login' or 'signup'
  
  const { user, login, signup, logout } = useContext(AuthContext);

  // Form states
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAuthSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    let res;
    if (authMode === 'login') {
      res = await login(email, password);
    } else {
      res = await signup(name, email, password);
    }

    setIsLoading(false);
    if (res.success) {
      setShowAuthModal(false);
      setName('');
      setEmail('');
      setPassword('');
    } else {
      setError(res.error);
    }
  };

  const openAuth = (mode) => {
    setAuthMode(mode);
    setShowAuthModal(true);
    setError('');
  };

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container">
          <div className="logo flex items-center gap-2">
            <div className="logo-icon-wrapper">
              <Bot size={24} color="#ffffff" />
            </div>
            <span className="logo-text">AutoGram</span>
          </div>

          <div className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
            <a href="#features" onClick={() => setMobileMenuOpen(false)}>Features</a>
            <a href="#how-it-works" onClick={() => setMobileMenuOpen(false)}>How it Works</a>
            <a href="#dashboard" onClick={() => setMobileMenuOpen(false)}>Demo</a>
            <a href="#pricing" onClick={() => setMobileMenuOpen(false)}>Pricing</a>
          </div>

          <div className="nav-actions">
            {user ? (
              <>
                <span className="text-sm text-muted mr-2">Hi, {user.name.split(' ')[0]}</span>
                <button className="btn btn-primary start-btn" onClick={() => document.getElementById('dashboard').scrollIntoView()}>
                  Dashboard
                </button>
                <button className="btn btn-outline login-btn" onClick={logout}>
                  Logout
                </button>
              </>
            ) : (
              <>
                <button className="btn btn-outline login-btn" onClick={() => openAuth('login')}>Login</button>
                <button className="btn btn-primary start-btn" onClick={() => openAuth('signup')}>Start Free Trial</button>
              </>
            )}
            
            <button 
              className="mobile-menu-btn" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Auth Modal using exact same design system */}
      {showAuthModal && (
        <div className="modal-overlay flex items-center justify-center" style={{ zIndex: 9999 }}>
          <div className="modal-content glass-panel" style={{ maxWidth: '400px' }}>
            <div className="flex justify-between items-center mb-6">
              <h3>{authMode === 'login' ? 'Welcome Back' : 'Create Account'}</h3>
              <button className="close-btn" onClick={() => setShowAuthModal(false)}><X size={24} /></button>
            </div>

            {error && (
              <div className="p-3 mb-4 text-sm text-red-500 bg-red-500 bg-opacity-10 border border-red-500 rounded-lg">
                {error}
              </div>
            )}

            <form onSubmit={handleAuthSubmit} className="flex flex-col gap-4">
              {authMode === 'signup' && (
                <div>
                  <label className="text-sm text-muted mb-1 block">Full Name</label>
                  <input 
                    type="text" 
                    className="input-field" 
                    value={name} 
                    onChange={e => setName(e.target.value)} 
                    required 
                  />
                </div>
              )}
              
              <div>
                <label className="text-sm text-muted mb-1 block">Email Address</label>
                <input 
                  type="email" 
                  className="input-field" 
                  value={email} 
                  onChange={e => setEmail(e.target.value)} 
                  required 
                />
              </div>

              <div>
                <label className="text-sm text-muted mb-1 block">Password</label>
                <input 
                  type="password" 
                  className="input-field" 
                  value={password} 
                  onChange={e => setPassword(e.target.value)} 
                  required 
                />
              </div>

              <button 
                type="submit" 
                className="btn btn-primary w-full mt-2"
                disabled={isLoading}
              >
                {isLoading ? 'Processing...' : (authMode === 'login' ? 'Sign In' : 'Sign Up')}
              </button>
            </form>

            <div className="mt-6 text-center text-sm text-muted">
              {authMode === 'login' ? (
                <p>Don't have an account? <span className="text-primary cursor-pointer" onClick={() => setAuthMode('signup')}>Sign up</span></p>
              ) : (
                <p>Already have an account? <span className="text-primary cursor-pointer" onClick={() => setAuthMode('login')}>Log in</span></p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
