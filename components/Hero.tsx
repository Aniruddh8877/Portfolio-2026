export default function Hero() {
     return (
          <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden pt-24 md:pt-32 pb-16" id="hero">

               <div className="absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[400px] bg-[#6366f1]/20 blur-[120px] rounded-full -z-10 animate-pulse-slow"></div>

               <div className="w-full relative z-10 flex flex-col items-center">

                    <h1 className="w-full flex flex-col items-center justify-center font-heading font-extrabold leading-[0.85] uppercase tracking-tighter px-4">
                         <span className="block text-[clamp(1.8rem,8vw,8rem)] text-white whitespace-nowrap text-center transform scale-x-[1.05]">
                              FULL-STACK
                         </span>
                         <span className="block text-[clamp(2.5rem,11vw,11rem)] whitespace-nowrap animate-gradient bg-gradient-to-r from-[#6b81ff] via-[#b65aff] to-[#6b81ff] bg-clip-text text-transparent text-center transform scale-x-[1.02]">
                              CREATIVE
                         </span>
                         <span
                              className="block text-[clamp(2.2rem,9.5vw,9.5rem)] whitespace-nowrap text-center transform scale-x-[1.05]"
                              style={{
                                   WebkitTextStroke: '2px rgba(255, 255, 255, 0.4)',
                                   color: 'transparent',
                                   marginTop: '-0.25em'
                              }}
                         >
                              DEVELOPER
                         </span>
                    </h1>


                    <div className="w-full max-w-[800px] mx-auto mt-12 md:mt-24 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-10 px-6">
                         <div className="shrink-0 relative">
                              <div className="w-56 h-56 md:w-64 md:h-64 lg:w-[280px] lg:h-[280px] rounded-xl overflow-hidden border border-white/20 bg-zinc-900 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                                   <img
                                        alt="Aniruddh Sharma Portrait"
                                        className="w-full h-full object-cover "
                                        src="/home3.png"
                                   />
                              </div>
                         </div>
                         <div className="text-left md:max-w-[340px]">
                              <p className="text-sm md:text-base text-gray-400 leading-relaxed font-medium">
                                   I'm <span className="text-white font-bold">Aniruddh Sharma</span>, a passionate UI/UX enthusiast building scalable, high-performance web applications with a focus on modern aesthetics.
                              </p>
                              <div className="mt-4 md:mt-6">
                                   <a className="group inline-flex items-center gap-2 font-bold text-[#5a67ff] text-sm md:text-base hover:text-white transition-colors" href="#projects">
                                        View My Work
                                        <svg className="h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                             <path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                                        </svg>
                                   </a>
                              </div>
                         </div>
                    </div>
               </div>
          </section>
     );
}
