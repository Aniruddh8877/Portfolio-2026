export default function Skills() {
     return (
          <section className="py-24 px-6 bg-white/5" id="skills">
               <div className="container mx-auto">
                    <div className="text-center mb-16">
                         <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">The Tech Stack</h2>
                         <p className="text-gray-400">Tools I use to bring ideas to life</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
                         <div className="glass-card p-6 rounded-2xl flex flex-col items-center justify-center gap-4 hover:border-accent group transition-all" data-purpose="skill-card">
                              <div className="w-12 h-12 flex items-center justify-center bg-accent/10 rounded-xl group-hover:scale-110 transition-transform">
                                  <span className="text-xl font-bold">AI</span>
                                   {/* <svg className="w-8 h-8 text-accent" fill="currentColor" viewBox="0 0 24 24"><path d="M12 14.5c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5z"></path><path d="M21 11c0-1.282-1.071-2.457-2.822-3.329-1.274-.635-2.853-1.041-4.524-1.151.042-.17.069-.344.08-.52 0-1.105-.347-2.001-1-2.5-.653-.5-1.442-.5-2.095 0-.653.499-1 1.395-1 2.5 0 .176.028.35.069.52-1.67.11-3.25.516-4.524 1.151C3.393 8.543 2.322 9.718 2.322 11c0 1.282 1.071 2.457 2.822 3.329 1.274.635 2.853 1.041 4.524 1.151-.042.17-.069.344-.08.52 0 1.105.347 2.001 1 2.5.653.5 1.442.5 2.095 0 .653-.499 1-1.395 1-2.5 0-.176-.028-.35-.069-.52 1.67-.11 3.25-.516 4.524-1.151C19.929 13.457 21 12.282 21 11z"></path></svg> */}
                              </div>
                              <span className="font-bold"> Artificial intelligence</span>
                         </div>
                         <div className="glass-card p-6 rounded-2xl flex flex-col items-center justify-center gap-4 hover:border-accent group transition-all" data-purpose="skill-card">
                              <div className="w-12 h-12 flex items-center justify-center bg-accent/10 rounded-xl group-hover:scale-110 transition-transform">
                                   <svg className="w-8 h-8 text-accent" fill="currentColor" viewBox="0 0 24 24"><path d="M12 14.5c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5z"></path><path d="M21 11c0-1.282-1.071-2.457-2.822-3.329-1.274-.635-2.853-1.041-4.524-1.151.042-.17.069-.344.08-.52 0-1.105-.347-2.001-1-2.5-.653-.5-1.442-.5-2.095 0-.653.499-1 1.395-1 2.5 0 .176.028.35.069.52-1.67.11-3.25.516-4.524 1.151C3.393 8.543 2.322 9.718 2.322 11c0 1.282 1.071 2.457 2.822 3.329 1.274.635 2.853 1.041 4.524 1.151-.042.17-.069.344-.08.52 0 1.105.347 2.001 1 2.5.653.5 1.442.5 2.095 0 .653-.499 1-1.395 1-2.5 0-.176-.028-.35-.069-.52 1.67-.11 3.25-.516 4.524-1.151C19.929 13.457 21 12.282 21 11z"></path></svg>
                              </div>
                              <span className="font-bold">React</span>
                         </div>
                         <div className="glass-card p-6 rounded-2xl flex flex-col items-center justify-center gap-4 hover:border-white group transition-all">
                              <div className="w-12 h-12 flex items-center justify-center bg-white/10 rounded-xl group-hover:scale-110 transition-transform">
                                   <span className="text-xl font-bold">N</span>
                              </div>
                              <span className="font-bold">Next.js</span>
                         </div>
                         <div className="glass-card p-6 rounded-2xl flex flex-col items-center justify-center gap-4 hover:border-neonGreen group transition-all">
                              <div className="w-12 h-12 flex items-center justify-center bg-white/10 rounded-xl group-hover:scale-110 transition-transform">
                                   <span className="text-neonGreen text-xl font-bold">JS</span>
                              </div>
                              <span className="font-bold">Node.js</span>
                         </div>
                         <div className="glass-card p-6 rounded-2xl flex flex-col items-center justify-center gap-4 hover:border-neonGreen group transition-all">
                              <div className="w-12 h-12 flex items-center justify-center bg-neonGreen/5 rounded-xl group-hover:scale-110 transition-transform">
                                   <svg className="w-8 h-8 text-neonGreen" fill="currentColor" viewBox="0 0 24 24"><path d="M12 1.5C12 1.5 8 5.5 8 11.5C8 17.5 12 22.5 12 22.5C12 22.5 16 17.5 16 11.5C16 5.5 12 1.5 12 1.5Z"></path></svg>
                              </div>
                              <span className="font-bold">MongoDB</span>
                         </div>
                         <div className="glass-card p-6 rounded-2xl flex flex-col items-center justify-center gap-4 hover:border-accent group transition-all">
                              <div className="w-12 h-12 flex items-center justify-center bg-accent/20 rounded-xl group-hover:scale-110 transition-transform">
                                   <svg className="w-8 h-8 text-accent" fill="currentColor" viewBox="0 0 24 24"><path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"></path></svg>
                              </div>
                              <span className="font-bold">Tailwind</span>
                         </div>
                         <div className="glass-card p-6 rounded-2xl flex flex-col items-center justify-center gap-4 hover:border-accent group transition-all">
                              <div className="w-12 h-12 flex items-center justify-center bg-accent/30 rounded-xl group-hover:scale-110 transition-transform">
                                   <span className="font-bold">TS</span>
                              </div>
                              <span className="font-bold">TypeScript</span>
                         </div>
                         <div className="glass-card p-6 rounded-2xl flex flex-col items-center justify-center gap-4 hover:border-accent group transition-all">
                              <div className="w-12 h-12 flex items-center justify-center bg-accent/30 rounded-xl group-hover:scale-110 transition-transform">
                                   <span className="font-bold">.NET</span>
                              </div>
                              <span className="font-bold">.NET</span>
                         </div>
                    </div>
               </div>
          </section>
     );
}
