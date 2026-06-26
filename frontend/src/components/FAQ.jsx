import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  { q: "Do I need a business Instagram account?", a: "Yes, Instagram's API requires a Creator or Business account connected to a Facebook page to use automation tools." },
  { q: "Is this safe to use? Will I get banned?", a: "AutoGram uses the official Instagram API provided by Meta. It is 100% compliant with their terms of service." },
  { q: "Can I use it on multiple accounts?", a: "Yes! Our Pro plan supports up to 3 accounts, and our Agency plan supports unlimited accounts." },
  { q: "What happens if a user asks a complex question?", a: "You can set up 'Human Takeover' rules that pause the bot and notify you via email or Slack when human intervention is needed." }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="section">
      <div className="container" style={{ maxWidth: '800px' }}>
        <h2 className="text-center mb-12">Frequently Asked Questions</h2>
        
        <div className="flex flex-col gap-4">
          {faqs.map((faq, i) => (
            <div key={i} className="glass-card overflow-hidden">
              <button 
                className="w-full p-6 text-left flex justify-between items-center font-bold"
                onClick={() => setOpenIndex(i === openIndex ? -1 : i)}
              >
                {faq.q}
                <ChevronDown size={20} style={{ transform: i === openIndex ? 'rotate(180deg)' : 'rotate(0)', transition: '0.3s' }} />
              </button>
              {i === openIndex && (
                <div className="p-6 pt-0 text-muted border-t border-glass mt-2">
                  <p className="mt-4">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
