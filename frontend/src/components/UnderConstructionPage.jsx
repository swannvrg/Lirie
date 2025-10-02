import React, { useState, useEffect } from 'react';
import { Mail, Phone } from 'lucide-react';

// SVG Logo Component - Smaller version for header
const LirieLogoSmall = ({ className }) => (
  <div className={`${className} relative`}>
   
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
  {/* Orbes flottants */}
  <div 
    className="absolute w-96 h-96 rounded-full opacity-20 blur-3xl orb orb1"
    style={{ background: `radial-gradient(circle, #B86A5B 0%, transparent 70%)` }}
  ></div>
  
  <div 
    className="absolute w-80 h-80 rounded-full opacity-15 blur-3xl orb orb2"
    style={{ background: `radial-gradient(circle, #45798dff 0%, transparent 70%)` }}
  ></div>
  
  <div 
    className="absolute w-72 h-72 rounded-full opacity-10 blur-3xl orb orb3"
    style={{ background: `radial-gradient(circle, #D9D9D9 0%, transparent 70%)` }}
  ></div>
   <div 
    className="absolute w-96 h-96 rounded-full opacity-20 blur-3xl orb orb1"
    style={{ background: `radial-gradient(circle, #B86A5B 0%, transparent 70%)` }}
  ></div>
  
  <div 
    className="absolute w-80 h-80 rounded-full opacity-15 blur-3xl orb orb2"
    style={{ background: `radial-gradient(circle, #45798dff 0%, transparent 70%)` }}
  ></div>
  
  <div 
    className="absolute w-72 h-72 rounded-full opacity-10 blur-3xl orb orb3"
    style={{ background: `radial-gradient(circle, #D9D9D9 0%, transparent 70%)` }}
  ></div>
  {/* Nouveaux orbes */}
  <div 
    className="absolute w-64 h-64 rounded-full opacity-25 blur-3xl orb orb4"
    style={{ background: `radial-gradient(circle, #B86A5B 0%, transparent 70%)` }}
  ></div>

  <div 
    className="absolute w-60 h-60 rounded-full opacity-15 blur-3xl orb orb5"
    style={{ background: `radial-gradient(circle, #D9D9D9 0%, transparent 70%)` }}
  ></div>
   <div 
    className="absolute w-64 h-64 rounded-full opacity-25 blur-3xl orb orb4"
    style={{ background: `radial-gradient(circle, #B86A5B 0%, transparent 70%)` }}
  ></div>

  <div 
    className="absolute w-60 h-60 rounded-full opacity-15 blur-3xl orb orb5"
    style={{ background: `radial-gradient(circle, #D9D9D9 0%, transparent 70%)` }}
  ></div>

  
</div>



{/* Noise overlay for texture */}
<div className="absolute inset-0 opacity-20"
     style={{ 
       backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='1' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
       mixBlendMode: 'multiply'
     }}></div>

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
        <div className="text-center space-y-12 max-w-3xl mx-auto">
          
          {/* Main Title */}
          <div className="space-y-6 text-center">
            <h1 className="text-4xl xs:text5xl sm:text-6xl md:text-7xl lg:text-8xl font-extralight tracking-wider text-white text-bold">
              EN 
            </h1>
           <h1
            className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extralight  text-center text-bold"
            style={{ color: '#B86A5B' }}
          >
            CONSTRUCTION
          </h1>
          </div>



          {/* Subtitle */}
          <p className="text-xl md:text-2xl font-light tracking-wide text-gray-300">
            Nous construisons un site solide pour vous !
          </p>

          {/* Progress Section */}
          <div className="space-y-6 w-full max-w-md mx-auto">
            <div className="flex justify-between items-center text-sm font-light text-gray-400">
              <span>{loadingText}</span>
              <span>75%</span>
            </div>
            
           {/* Progress Bar */}
            <div className="w-full">
              <div className="w-full bg-gray-700/50 rounded-full h-1 backdrop-blur-sm">
                <div 
                  className="h-1 rounded-full relative"
                  style={{ 
                    width: `75%`,  // largeur fixe = barre remplie
                    background: `linear-gradient(90deg, #B86A5B 0%, #D4846F 50%, #B86A5B 100%)`,
                    boxShadow: `0 0 10px rgba(184, 106, 91, 0.5)`
                  }}
                >
                  {/* Point lumineux à droite */}
                  <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full" 
                      style={{ 
                        background: '#B86A5B',
                        boxShadow: `0 0 8px rgba(184, 106, 91, 0.8)`
                      }}>
                  </div>
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
              style={{ borderColor: '#B86A5B' }}
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
            © 2024 par LIRIE
          </p>
        </div>
      </div>
    </div>
  );
};

export default MinimalConstructionPage;