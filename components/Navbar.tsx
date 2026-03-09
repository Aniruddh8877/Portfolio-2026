'use client';
import { useState, useEffect } from 'react';

export default function Navbar() {
     const [isOpen, setIsOpen] = useState(false);

     // Prevent scrolling when mobile menu is open
     useEffect(() => {
          if (isOpen) {
               document.body.style.overflow = 'hidden';
          } else {
               document.body.style.overflow = 'unset';
          }
          return () => {
               document.body.style.overflow = 'unset';
          };
     }, [isOpen]);

     return (
          <nav className="fixed top-0 w-full z-50 px-6 py-4 flex justify-between items-center glass-card border-none bg-opacity-70 backdrop-blur-md">
               <a className="text-2xl font-heading font-extrabold tracking-tighter z-50 relative" href="#">
                    ANIRUDDH<span className="text-accent">.</span>
               </a>

               {/* Desktop Menu */}
               <div className="hidden lg:flex gap-8 items-center text-sm font-medium uppercase tracking-widest flex-wrap justify-end">
                    <a className="hover:text-accent transition-colors" href="#about">About</a>
                    <a className="hover:text-accent transition-colors" href="#skills">Skills</a>
                    <a className="hover:text-accent transition-colors" href="#projects">Projects</a>
                    <a className="hover:text-accent transition-colors" href="#blogs">Blogs</a>
                    <a className="px-5 py-2 bg-white text-black rounded-full hover:bg-accent hover:text-white transition-all whitespace-nowrap" href="#contact">Let's Talk</a>
                    <a className="px-5 py-2 border border-white/20 text-white rounded-full hover:bg-white/10 transition-all whitespace-nowrap" href="/A-Resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
               </div>

               {/* Mobile Menu Toggle Button */}
               <button
                    className="lg:hidden text-2xl z-50 relative p-2"
                    onClick={() => setIsOpen(!isOpen)}
                    data-purpose="mobile-menu-trigger"
                    aria-label="Toggle Menu"
               >
                    <svg className="h-7 w-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                         {isOpen ? (
                              <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
                         ) : (
                              <path d="M4 6h16M4 12h16m7 6H4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
                         )}
                    </svg>
               </button>

               {/* Mobile Menu Overlay */}
               <div className={`fixed inset-0 min-h-screen z-40 bg-black/95 flex flex-col items-center justify-center gap-8 lg:hidden transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                    <a className="text-2xl font-heading font-bold uppercase tracking-widest hover:text-accent transition-colors" href="#about" onClick={() => setIsOpen(false)}>About</a>
                    <a className="text-2xl font-heading font-bold uppercase tracking-widest hover:text-accent transition-colors" href="#skills" onClick={() => setIsOpen(false)}>Skills</a>
                    <a className="text-2xl font-heading font-bold uppercase tracking-widest hover:text-accent transition-colors" href="#projects" onClick={() => setIsOpen(false)}>Projects</a>
                    <a className="text-2xl font-heading font-bold uppercase tracking-widest hover:text-accent transition-colors" href="#blogs" onClick={() => setIsOpen(false)}>Blogs</a>

                    <div className="flex flex-col gap-4 mt-8 items-center w-full px-12">
                         <a className="w-full text-center py-4 bg-white text-black rounded-full hover:bg-accent hover:text-white transition-all text-lg font-bold" href="#contact" onClick={() => setIsOpen(false)}>Let's Talk 👋</a>
                         <a className="w-full text-center py-4 border border-white/20 text-white rounded-full hover:bg-white/10 transition-all text-lg font-bold" href="/A-Resume.pdf" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)}>Resume 📄</a>
                    </div>
               </div>
          </nav>
     );
}
