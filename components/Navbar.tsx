export default function Navbar() {
     return (
          <nav className="fixed top-0 w-full z-50 px-6 py-4 flex justify-between items-center glass-card border-none bg-opacity-70">
               <a className="text-2xl font-heading font-extrabold tracking-tighter" href="#">
                    ANIRUDDH<span className="text-accent">.</span>
               </a>
               <div className="hidden md:flex gap-8 items-center text-sm font-medium uppercase tracking-widest">
                    <a className="hover:text-accent transition-colors" href="#about">About</a>
                    <a className="hover:text-accent transition-colors" href="#skills">Skills</a>
                    <a className="hover:text-accent transition-colors" href="#projects">Projects</a>
                    <a className="hover:text-accent transition-colors" href="#blogs">Blogs</a>
                    <a className="px-5 py-2 bg-white text-black rounded-full hover:bg-accent hover:text-white transition-all" href="#contact">Let's Talk</a>
                    <a className="px-5 py-2 border border-white/20 text-white rounded-full hover:bg-white/10 transition-all" href="/A-Resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
               </div>
               <button className="md:hidden text-2xl" data-purpose="mobile-menu-trigger">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                         <path d="M4 6h16M4 12h16m7 6H4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                    </svg>
               </button>
          </nav>
     );
}
