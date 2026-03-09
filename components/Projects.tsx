export default function Projects() {
     return (
          <section className="py-24 px-6 overflow-hidden" id="projects">
               <div className="container mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
                         <div>
                              <h2 className="text-[12vw] md:text-7xl font-heading font-extrabold leading-none">FEATURED</h2>
                              <h2 className="text-[12vw] md:text-7xl font-heading font-extrabold text-outline leading-none">PROJECTS</h2>
                         </div>
                         <p className="text-gray-400 max-w-xs text-right hidden md:block">
                              A selection of my best work, ranging from hotel management to complex e-commerce panels.
                         </p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                         <article className="group relative bg-white/5 rounded-[2rem] overflow-hidden border border-white/10 hover:border-accent/50 transition-all duration-500">
                              <div className="aspect-video overflow-hidden">
                                   <img alt="WoodStock Resort" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="/WoodStock.png" />
                              </div>
                              <div className="p-8">
                                   <div className="flex justify-between items-start mb-4">
                                        <h3 className="text-2xl font-heading font-bold">WoodStock Resort</h3>
                                        <span className="px-3 py-1 bg-accent/10 text-accent text-xs rounded-full border border-accent/20">NEXT.JS</span>
                                   </div>
                                   <p className="text-gray-400 mb-6">A luxury brand website built with Next.js and Tailwind CSS focusing on high-end visual storytelling.</p>
                                   <div className="flex gap-4">
                                        <a className="px-6 py-2 bg-white text-black font-bold rounded-lg hover:bg-accent hover:text-white transition-colors" href="#">Live Demo</a>
                                        <a className="px-6 py-2 border border-white/20 rounded-lg hover:bg-white/10 transition-colors" href="#">GitHub</a>
                                   </div>
                              </div>
                         </article>
                         <article className="group relative bg-white/5 rounded-[2rem] overflow-hidden border border-white/10 hover:border-neonPurple/50 transition-all duration-500 md:mt-12">
                              <div className="aspect-video overflow-hidden">
                                   <img alt="Akash Ganga Tour" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="/AGT.png" />
                              </div>
                              <div className="p-8">
                                   <div className="flex justify-between items-start mb-4">
                                        <h3 className="text-2xl font-heading font-bold">Akash Ganga Tour</h3>
                                        <span className="px-3 py-1 bg-neonPurple/10 text-neonPurple text-xs rounded-full border border-neonPurple/20">ADMIN PANEL</span>
                                   </div>
                                   <p className="text-gray-400 mb-6">A full-stack admin panel for a tour agency, featuring complex booking and customer management.</p>
                                   <div className="flex gap-4">
                                        <a className="px-6 py-2 bg-white text-black font-bold rounded-lg hover:bg-neonPurple hover:text-white transition-colors" href="#">Live Demo</a>
                                        <a className="px-6 py-2 border border-white/20 rounded-lg hover:bg-white/10 transition-colors" href="#">GitHub</a>
                                   </div>
                              </div>
                         </article>
                         <article className="group relative bg-white/5 rounded-[2rem] overflow-hidden border border-white/10 hover:border-neonGreen/50 transition-all duration-500">
                              <div className="aspect-video overflow-hidden">
                                   <img alt="Social Media Platform" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="/Insta.png" />
                              </div>
                              <div className="p-8">
                                   <div className="flex justify-between items-start mb-4">
                                        <h3 className="text-2xl font-heading font-bold">Social Media Platform</h3>
                                        <span className="px-3 py-1 bg-neonGreen/10 text-neonGreen text-xs rounded-full border border-neonGreen/20">FULL STACK</span>
                                   </div>
                                   <p className="text-gray-400 mb-6">A feature-rich Instagram clone with real-time notifications, image uploads, and engagement systems.</p>
                                   <div className="flex gap-4">
                                        <a className="px-6 py-2 bg-white text-black font-bold rounded-lg hover:bg-neonGreen hover:text-white transition-colors" href="#">Live Demo</a>
                                        <a className="px-6 py-2 border border-white/20 rounded-lg hover:bg-white/10 transition-colors" href="#">GitHub</a>
                                   </div>
                              </div>
                         </article>
                         <article className="group relative bg-white/5 rounded-[2rem] overflow-hidden border border-white/10 hover:border-accent/50 transition-all duration-500 md:mt-12">
                              <div className="aspect-video overflow-hidden">
                                   <img alt="3D Web Simulation" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="/3Demo.png" />
                              </div>
                              <div className="p-8">
                                   <div className="flex justify-between items-start mb-4">
                                        <h3 className="text-2xl font-heading font-bold">3D Web Simulation</h3>
                                        <span className="px-3 py-1 bg-accent/10 text-accent text-xs rounded-full border border-accent/20">THREE.JS</span>
                                   </div>
                                   <p className="text-gray-400 mb-6">Implementing 3D rendering and animations in the browser using Three.js for interactive product display.</p>
                                   <div className="flex gap-4">
                                        <a className="px-6 py-2 bg-white text-black font-bold rounded-lg hover:bg-accent hover:text-white transition-colors" href="#">Live Demo</a>
                                        <a className="px-6 py-2 border border-white/20 rounded-lg hover:bg-white/10 transition-colors" href="#">GitHub</a>
                                   </div>
                              </div>
                         </article>
                         {/* <article className="group relative bg-white/5 rounded-[2rem] overflow-hidden border border-white/10 hover:border-accent/50 transition-all duration-500 md:mt-12">
                              <div className="aspect-video overflow-hidden">
                                   <img alt="3D Web Simulation" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="/GTA-6.png" />
                              </div>
                              <div className="p-8">
                                   <div className="flex justify-between items-start mb-4">
                                        <h3 className="text-2xl font-heading font-bold">GTA VI</h3>
                                        <span className="px-3 py-1 bg-accent/10 text-accent text-xs rounded-full border border-accent/20">Custom Layer UI</span>
                                   </div>
                                   <p className="text-gray-400 mb-6">A custom layer UI for GTA VI, featuring a modern and interactive interface.</p>
                                   <div className="flex gap-4">
                                        <a className="px-6 py-2 bg-white text-black font-bold rounded-lg hover:bg-accent hover:text-white transition-colors" href="#">Live Demo</a>
                                        <a className="px-6 py-2 border border-white/20 rounded-lg hover:bg-white/10 transition-colors" href="#">GitHub</a>
                                   </div>
                              </div>
                         </article> */}
                         <article className="group relative bg-white/5 rounded-[2rem] overflow-hidden border border-white/10 hover:border-neonGreen/50 transition-all duration-500">
                              <div className="aspect-video overflow-hidden">
                                   <img alt="Social Media Platform" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="/GTA-6.png" />
                              </div>
                              <div className="p-8">
                                   <div className="flex justify-between items-start mb-4">
                                        <h3 className="text-2xl font-heading font-bold">GTA VI</h3>
                                        <span className="px-3 py-1 bg-neonGreen/10 text-neonGreen text-xs rounded-full border border-neonGreen/20">Custom Layer UI</span>
                                   </div>
                                   <p className="text-gray-400 mb-6">A custom layer UI for GTA VI, featuring a modern and interactive interface.</p>
                                   <div className="flex gap-4">
                                        <a className="px-6 py-2 bg-white text-black font-bold rounded-lg hover:bg-neonGreen hover:text-white transition-colors" href="#">Live Demo</a>
                                        <a className="px-6 py-2 border border-white/20 rounded-lg hover:bg-white/10 transition-colors" href="#">GitHub</a>
                                   </div>
                              </div>
                         </article>
                    </div>
                    <div className="mt-20 text-center">
                         <a className="inline-block px-12 py-5 bg-accent hover:bg-accent/80 text-white font-extrabold rounded-full transition-all transform hover:scale-105" href="#">
                              EXPLORE ALL PROJECTS 🚀
                         </a>
                    </div>
               </div>
          </section>
     );
}
