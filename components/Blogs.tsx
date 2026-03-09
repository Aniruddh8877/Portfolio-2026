export default function Blogs() {
     return (
          <section className="py-24 px-6" id="blogs">
               <div className="container mx-auto">
                    <div className="mb-16">
                         <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Insights & Writing</h2>
                         <p className="text-gray-400">Sharing what I learn along the way</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                         <article className="group">
                              <div className="mb-6 overflow-hidden rounded-2xl aspect-[4/3] bg-accent/20 flex items-center justify-center">
                                   <span className="text-5xl font-heading opacity-30">REACT</span>
                              </div>
                              <span className="text-accent text-xs font-bold uppercase tracking-widest">Development</span>
                              <h3 className="text-2xl font-bold mt-2 group-hover:text-accent transition-colors">Mastering React in 30 Days: A Roadmap</h3>
                              <p className="text-gray-400 mt-4 line-clamp-2">Exploring hooks, context API, and advanced state management for modern apps.</p>
                              <div className="mt-6 flex items-center gap-2 text-sm text-gray-500">
                                   <span>June 15, 2023</span>
                                   <span>•</span>
                                   <span>5 min read</span>
                              </div>
                         </article>
                         <article className="group">
                              <div className="mb-6 overflow-hidden rounded-2xl aspect-[4/3] bg-neonPurple/20 flex items-center justify-center">
                                   <span className="text-5xl font-heading opacity-30">DB</span>
                              </div>
                              <span className="text-neonPurple text-xs font-bold uppercase tracking-widest">Backend</span>
                              <h3 className="text-2xl font-bold mt-2 group-hover:text-neonPurple transition-colors">Understanding MongoDB Aggregations</h3>
                              <p className="text-gray-400 mt-4 line-clamp-2">How to build complex data pipelines with MongoDB for high-performance queries.</p>
                              <div className="mt-6 flex items-center gap-2 text-sm text-gray-500">
                                   <span>May 28, 2023</span>
                                   <span>•</span>
                                   <span>8 min read</span>
                              </div>
                         </article>
                         <article className="group">
                              <div className="mb-6 overflow-hidden rounded-2xl aspect-[4/3] bg-neonGreen/20 flex items-center justify-center">
                                   <span className="text-5xl font-heading opacity-30">UI</span>
                              </div>
                              <span className="text-neonGreen text-xs font-bold uppercase tracking-widest">Design</span>
                              <h3 className="text-2xl font-bold mt-2 group-hover:text-neonGreen transition-colors">Why Tailwind CSS Makes UI Fun Again</h3>
                              <p className="text-gray-400 mt-4 line-clamp-2">A deep dive into utility-first CSS and why it's a game changer for developers.</p>
                              <div className="mt-6 flex items-center gap-2 text-sm text-gray-500">
                                   <span>May 10, 2023</span>
                                   <span>•</span>
                                   <span>4 min read</span>
                              </div>
                         </article>
                    </div>
               </div>
          </section>
     );
}
