import React, { useState, useEffect } from 'react';
import { Mail, Phone } from 'lucide-react';

// SVG Logo Component - Smaller version for header
const LirieLogoSmall = ({ className }) => (
  <div className={`${className} relative`}>
    <svg width="120" height="120" viewBox="0 0 120 120" className="w-full h-full">
      <defs>
        <pattern id="geometricPatternSmall" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
          <path d="M0,8 Q4,0 8,8 Q12,16 16,8" stroke="#8B5A4B" strokeWidth="0.5" fill="none" />
          <path d="M8,0 Q12,8 8,16 Q4,8 8,0" stroke="#8B5A4B" strokeWidth="0.5" fill="none" />
        </pattern>
      </defs>
      
      {/* Background with pattern */}
      <rect width="120" height="120" rx="8" fill="#B86A5B" />
      <rect width="120" height="96" rx="8" fill="url(#geometricPatternSmall)" opacity="0.2" />
      
      {/* LIRIE Text */}
      <text x="60" y="56" textAnchor="middle" fontSize="24" fontWeight="bold" fill="white" fontFamily="Inter, sans-serif">
        LIRIE
      </text>
      
      {/* Subtitle */}
      <text x="60" y="108" textAnchor="middle" fontSize="6" fill="#052633" fontFamily="Inter, sans-serif">
        Ingénierie de la construction
      </text>
    </svg>
  </div>
);

const MinimalConstructionPage = () => {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState('EN COURS DE CHARGEMENT');

  useEffect(() => {
    // Progress animation
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 85) {
          return 0;
        }
        return prev + 1;
      });
    }, 80);

    // Text animation
    const textInterval = setInterval(() => {
      setLoadingText(prev => {
        if (prev === 'EN COURS DE CHARGEMENT') return 'EN COURS DE CHARGEMENT.';
        if (prev === 'EN COURS DE CHARGEMENT.') return 'EN COURS DE CHARGEMENT..';
        if (prev === 'EN COURS DE CHARGEMENT..') return 'EN COURS DE CHARGEMENT...';
        return 'EN COURS DE CHARGEMENT';
      });
    }, 800);

    return () => {
      clearInterval(progressInterval);
      clearInterval(textInterval);
    };
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900">
      {/* Blurred Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating orbs for blur effect */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl animate-pulse" 
             style={{ background: `radial-gradient(circle, #B86A5B 0%, transparent 70%)` }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-15 blur-3xl animate-pulse" 
             style={{ background: `radial-gradient(circle, #052633 0%, transparent 70%)`, animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 rounded-full opacity-10 blur-3xl animate-pulse" 
             style={{ background: `radial-gradient(circle, #D9D9D9 0%, transparent 70%)`, animationDelay: '4s' }}></div>
      </div>

      {/* Noise overlay for texture */}
      <div className="absolute inset-0 opacity-20"
           style={{ 
             backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='1' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
             mixBlendMode: 'multiply'
           }}></div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        
        {/* Logo at top */}
        <div className="absolute top-12 left-12">
          <LirieLogoSmall className="w-16 h-16" />
        </div>

        {/* Main Content Container */}
        <div className="text-center space-y-12 max-w-2xl mx-auto">
          
          {/* Main Title */}
          <div className="space-y-6">
            <h1 className="text-6xl md:text-8xl font-extralight tracking-wider text-white">
              EN
            </h1>
            <h1 className="text-6xl md:text-8xl font-extralight tracking-wider" 
                style={{ color: '#B86A5B' }}>
              CONSTRUCTION
            </h1>
          </div>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl font-light tracking-wide text-gray-300">
            PRESQUE PRÊT
          </p>

          {/* Progress Section */}
          <div className="space-y-6 w-full max-w-md mx-auto">
            <div className="flex justify-between items-center text-sm font-light text-gray-400">
              <span>{loadingText}</span>
              <span>{progress}%</span>
            </div>
            
            {/* Progress Bar */}
            <div className="w-full">
              <div className="w-full bg-gray-700/50 rounded-full h-1 backdrop-blur-sm">
                <div 
                  className="h-1 rounded-full transition-all duration-300 relative"
                  style={{ 
                    width: `${progress}%`,
                    background: `linear-gradient(90deg, #B86A5B 0%, #D4846F 50%, #B86A5B 100%)`,
                    boxShadow: `0 0 10px rgba(184, 106, 91, 0.5)`
                  }}
                >
                  {/* Glowing dot at the end */}
                  <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full" 
                       style={{ 
                         background: '#B86A5B',
                         boxShadow: `0 0 8px rgba(184, 106, 91, 0.8)`
                       }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Buttons at Bottom */}
        <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2">
          <div className="flex space-x-8">
            {/* Email Button */}
            <a 
              href="mailto:g.collette@lirie.fr"
              className="group relative w-16 h-16 rounded-full border border-gray-600 backdrop-blur-sm bg-gray-800/30 hover:bg-gray-700/50 transition-all duration-300 flex items-center justify-center hover:border-opacity-80"
              style={{ borderColor: '#B86A5B' }}
            >
              <Mail className="w-6 h-6 text-gray-300 group-hover:text-white transition-colors duration-300" />
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-gray-900/90 backdrop-blur-sm rounded-lg px-3 py-2 text-xs text-gray-300 whitespace-nowrap">
                  g.collette@lirie.fr
                </div>
              </div>
            </a>

            {/* Phone Button */}
            <a 
              href="tel:+33663022922"
              className="group relative w-16 h-16 rounded-full border border-gray-600 backdrop-blur-sm bg-gray-800/30 hover:bg-gray-700/50 transition-all duration-300 flex items-center justify-center hover:border-opacity-80"
              style={{ borderColor: '#052633' }}
            >
              <Phone className="w-6 h-6 text-gray-300 group-hover:text-white transition-colors duration-300" />
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-gray-900/90 backdrop-blur-sm rounded-lg px-3 py-2 text-xs text-gray-300 whitespace-nowrap">
                  06.63.02.29.22
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
          <p className="text-xs text-gray-500 font-light">
            © 2024 par LIRIE. Créé avec passion.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MinimalConstructionPage;