'use client';

export default function Contact() {
     const handleSubmit = (e: React.FormEvent) => {
          e.preventDefault();
          alert('Message received! Aniruddh will get back to you soon.');
     };

     return (
          <section className="py-24 px-6 relative overflow-hidden" id="contact">
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/10 rounded-full blur-[120px] -z-10"></div>
               <div className="container mx-auto">
                    <div className="max-w-5xl mx-auto glass-card rounded-3xl md:rounded-[3rem] p-6 sm:p-8 md:p-16 grid lg:grid-cols-2 gap-10 md:gap-16">
                         <div>
                              <h2 className="text-4xl md:text-5xl font-heading font-extrabold mb-6">Let's build something <span className="text-accent">great</span> together.</h2>
                              <p className="text-lg md:text-xl text-gray-400 mb-10">Got a project in mind? Or just want to say hi? My inbox is always open.</p>
                              <div className="space-y-6">
                                   <a className="flex items-center gap-4 group" href="mailto:aniruddhsharma8877@gmail.com">
                                        <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-accent transition-colors">
                                             <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                                             </svg>
                                        </div>
                                        <div>
                                             <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">Email me</p>
                                             <p className="text-base md:text-lg font-medium break-all">aniruddhsharma8877@gmail.com</p>
                                        </div>
                                   </a>
                                   <div className="flex items-center gap-6 pt-4">
                                        <a className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/20 transition-all" href="#">
                                             <span className="sr-only">LinkedIn</span>
                                             <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
                                        </a>
                                        <a className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/20 transition-all" href="#">
                                             <span className="sr-only">GitHub</span>
                                             <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg>
                                        </a>
                                   </div>
                              </div>
                         </div>
                         <form className="space-y-6" data-purpose="contact-form" onSubmit={handleSubmit}>
                              <div className="space-y-2">
                                   <label className="text-sm font-bold uppercase tracking-widest text-gray-500">Your Name</label>
                                   <input className="w-full bg-white/5 border-white/10 rounded-2xl p-4 focus:ring-accent focus:border-accent transition-all text-white placeholder:text-gray-600" placeholder="John Doe" type="text" />
                              </div>
                              <div className="space-y-2">
                                   <label className="text-sm font-bold uppercase tracking-widest text-gray-500">Email Address</label>
                                   <input className="w-full bg-white/5 border-white/10 rounded-2xl p-4 focus:ring-accent focus:border-accent transition-all text-white placeholder:text-gray-600" placeholder="john@example.com" type="email" />
                              </div>
                              <div className="space-y-2">
                                   <label className="text-sm font-bold uppercase tracking-widest text-gray-500">Message</label>
                                   <textarea className="w-full bg-white/5 border-white/10 rounded-2xl p-4 focus:ring-accent focus:border-accent transition-all text-white placeholder:text-gray-600" placeholder="What's on your mind?" rows={4}></textarea>
                              </div>
                              <button className="w-full py-5 bg-accent text-white font-extrabold rounded-2xl hover:bg-accent/80 transition-all shadow-xl shadow-accent/20" type="submit">
                                   SEND MESSAGE
                              </button>
                         </form>
                    </div>
               </div>
          </section>
     );
}
