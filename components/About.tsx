export default function About() {
     return (
          <section className="py-24 px-6 relative" id="about">
               <div className="container mx-auto">
                    <div className="grid lg:grid-cols-12 gap-12 items-center">
                         <div className="lg:col-span-5 order-2 lg:order-1">
                              <div className="glass-card p-8 rounded-3xl relative overflow-hidden">
                                   <div className="absolute top-0 right-0 p-4 opacity-10">
                                        <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24">
                                             <path d="M14.017 21L14.017 18C14.017 16.8954 13.1216 16 12.017 16L9.01703 16C7.91246 16 7.01703 16.8954 7.01703 18L7.01703 21M14.017 21L14.017 21.0001M7.01703 21L7.01703 21.0001M10.517 3C14.6592 3 18.017 6.35786 18.017 10.5C18.017 12.6366 17.1241 14.5647 15.6845 15.9221C15.2671 16.3157 15.017 16.8715 15.017 17.4477V18C15.017 19.1046 14.1216 20 13.017 20H8.01703C6.91246 20 6.01703 19.1046 6.01703 18V17.4477C6.01703 16.8715 5.76694 16.3157 5.34956 15.9221C3.91001 14.5647 3.01703 12.6366 3.01703 10.5C3.01703 6.35786 6.37489 3 10.517 3Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                                        </svg>
                                   </div>
                                   <h3 className="text-3xl font-heading mb-6">Who am I?</h3>
                                   <ul className="space-y-6 text-gray-400">
                                        <li className="flex gap-4">
                                             <span className="text-accent font-bold">01</span>
                                             <p>BCA graduate from <span className="text-white">Bokaro Steel City College</span>, affiliated with BBMKU, Dhanbad.</p>
                                        </li>
                                        <li className="flex gap-4">
                                             <span className="text-accent font-bold">02</span>
                                             <p>Currently shaping IT experiences as a <span className="text-white">Analyst Trainee at Cognizant</span></p>
                                        </li>
                                        <li className="flex gap-4">
                                             <span className="text-accent font-bold">03</span>
                                             <p>Creator of a thriving <span className="text-white">YouTube channel (19K+ subs)</span> dedicated to education and tech empowerment.</p>
                                        </li>
                                   </ul>
                              </div>
                         </div>
                         <div className="lg:col-span-7 order-1 lg:order-2">
                              <h2 className="text-5xl md:text-7xl font-heading font-extrabold mb-8">
                                   Crafting <span className="text-outline italic">Future</span> <br /> Digital Solutions.
                              </h2>
                              <p className="text-xl text-gray-400 leading-relaxed max-w-xl">
                                   I specialize in bridging the gap between complex backend logic and pixel-perfect frontend design. My goal is to build software that isn't just functional, but an experience.
                              </p>
                         </div>
                    </div>
               </div>
          </section>
     );
}
