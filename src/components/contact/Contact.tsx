import React from 'react';
import { Mail, MessageSquare, Send } from 'lucide-react';
import { NeumorphicCard } from '../ui/NeumorphicCard';
import { NeumorphicButton } from '../ui/NeumorphicButton';

export const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a production static site, this can trigger a mailto or integrate with Formspree
    window.location.href = "mailto:shaikbashah20@gmail.com?subject=Contact%20from%20Portfolio";
  };

  return (
    <section id="contact" className="py-24 px-6 relative bg-[#F4F4F2]">
      
      {/* Editorial Header */}
      <div className="max-w-7xl mx-auto mb-16">
        <span className="text-7xl sm:text-8xl font-black text-neutral-300/80 block leading-none select-none">
          06
        </span>
        <h2 className="text-2xl font-black text-neutral-900 uppercase tracking-widest mt-2 border-l-4 border-red-600 pl-4">
          CONTACT SYSTEM
        </h2>
        <p className="text-xs font-mono font-bold text-neutral-400 mt-2 tracking-widest uppercase">
          CONNECT SIGNAL &bull; INQUIRIES GATEWAY
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Headline and Info */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <h3 className="text-3xl font-black text-neutral-950 tracking-tight leading-none">
            LET'S BUILD <br />
            SOMETHING USEFUL.
          </h3>
          <p className="text-sm text-neutral-500 leading-relaxed">
            Whether it is a complex data orchestration system, an explainable machine learning product, or a robust software prototype that needs to become a reality, I am interested in solving meaningful technical challenges.
          </p>

          {/* Social CTAs list */}
          <div className="flex flex-col gap-3 mt-4">
            <a 
              href="mailto:shaikbashah20@gmail.com" 
              className="flex items-center gap-4 p-4 rounded-xl border border-neutral-200 bg-white hover:bg-neutral-50/50 transition-all shadow-sm"
            >
              <div className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center text-red-600">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <span className="block text-[10px] font-mono text-neutral-400 font-bold uppercase">PRIMARY EMAIL</span>
                <span className="text-xs font-bold text-neutral-800">shaikbashah20@gmail.com</span>
              </div>
            </a>

            <a 
              href="https://www.linkedin.com/in/shaik-rameez-basha-151740286/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-4 p-4 rounded-xl border border-neutral-200 bg-white hover:bg-neutral-50/50 transition-all shadow-sm"
            >
              <div className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center text-red-600">
                <svg className="w-4 h-4 fill-current text-red-600" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </div>
              <div>
                <span className="block text-[10px] font-mono text-neutral-400 font-bold uppercase">LINKEDIN CONNECTION</span>
                <span className="text-xs font-bold text-neutral-800">linkedin.com/in/shaik-rameez-basha-151740286/</span>
              </div>
            </a>

            <a 
              href="https://github.com/Basharameez" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-4 p-4 rounded-xl border border-neutral-200 bg-white hover:bg-neutral-50/50 transition-all shadow-sm"
            >
              <div className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center text-red-600">
                <svg className="w-4 h-4 fill-current text-red-600" viewBox="0 0 24 24">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                </svg>
              </div>
              <div>
                <span className="block text-[10px] font-mono text-neutral-400 font-bold uppercase">GITHUB COMPILERS</span>
                <span className="text-xs font-bold text-neutral-800">github.com/Basharameez</span>
              </div>
            </a>
          </div>
        </div>

        {/* Right Column: Interactive Quick Contact Form */}
        <div className="lg:col-span-7">
          <NeumorphicCard className="bg-white">
            <h4 className="text-xs font-black tracking-widest text-neutral-950 uppercase border-b border-neutral-100 pb-2 mb-6 flex items-center gap-1.5">
              <MessageSquare className="w-3.5 h-3.5 text-red-600" /> SECURE TELEMETRY MESSAGE
            </h4>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-[10px] font-mono font-bold text-neutral-400 uppercase">SENDER NAME</label>
                  <input
                    type="text"
                    id="name"
                    required
                    placeholder="Enter your name"
                    className="w-full text-xs font-semibold px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50 outline-none focus:bg-white focus:border-red-600 transition-all"
                  />
                </div>
                
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-[10px] font-mono font-bold text-neutral-400 uppercase">SENDER EMAIL</label>
                  <input
                    type="email"
                    id="email"
                    required
                    placeholder="Enter your email"
                    className="w-full text-xs font-semibold px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50 outline-none focus:bg-white focus:border-red-600 transition-all"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-[10px] font-mono font-bold text-neutral-400 uppercase">MESSAGE BODY</label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  placeholder="Enter details of your project or inquiry"
                  className="w-full text-xs font-semibold px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50 outline-none focus:bg-white focus:border-red-600 transition-all resize-none"
                />
              </div>

              <NeumorphicButton
                type="submit"
                variant="red"
                className="mt-2 w-full md:w-auto md:self-end"
              >
                INITIALIZE SEND SIGNAL <Send className="w-3.5 h-3.5" />
              </NeumorphicButton>
            </form>
          </NeumorphicCard>
        </div>

      </div>

    </section>
  );
};
export default Contact;
