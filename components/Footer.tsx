export default function Footer() {
     return (
          <footer className="py-12 border-t border-white/5">
               <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="text-xl font-heading font-extrabold tracking-tighter">
                         ANIRUDDH<span className="text-accent">.</span>
                    </div>
                    <p className="text-gray-500 text-sm">
                         © 2026 Aniruddh Sharma. Crafted with precision and passion.
                    </p>
                    <div className="flex gap-8 text-xs font-bold uppercase tracking-widest text-gray-400">
                         <a className="hover:text-white transition-colors" href="#hero">Home</a>
                         <a className="hover:text-white transition-colors" href="#projects">Work</a>
                         <a className="hover:text-white transition-colors" href="#about">About</a>
                    </div>
               </div>
          </footer>
     );
}
