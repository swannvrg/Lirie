import React, { useState, useEffect } from 'react';
import { Mail, Phone, Clock, Wrench, HardHat, Construction } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';

// SVG Logo Component
const LirieLogo = ({ className }) => (
  <div className={`${className} relative`}>
    <svg width="300" height="300" viewBox="0 0 300 300" className="w-full h-full">
      <defs>
        <pattern id="geometricPattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M0,20 Q10,0 20,20 Q30,40 40,20" stroke="#8B5A4B" strokeWidth="1" fill="none" />
          <path d="M20,0 Q30,20 20,40 Q10,20 20,0" stroke="#8B5A4B" strokeWidth="1" fill="none" />
        </pattern>
      </defs>
      
      {/* Background with pattern */}
      <rect width="300" height="300" rx="20" fill="#B86A5B" />
      <rect width="300" height="240" rx="20" fill="url(#geometricPattern)" opacity="0.3" />
      
      {/* LIRIE Text */}
      <text x="150" y="140" textAnchor="middle" fontSize="64" fontWeight="bold" fill="white" fontFamily="Inter, sans-serif">
        LIRIE
      </text>
      
      {/* Subtitle */}
      <text x="150" y="270" textAnchor="middle" fontSize="16" fill="#052633" fontFamily="Inter, sans-serif">
        Ingénierie de la construction
      </text>
    </svg>
  </div>
);

// Crane Animation Component
const CraneAnimation = () => {
  const [craneHeight, setCraneHeight] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCraneHeight(prev => prev >= 100 ? 0 : prev + 2);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-2xl mx-auto h-32 mb-12">
      {/* Construction Site Base */}
      <div className="absolute bottom-0 w-full h-4 rounded" style={{ background: '#052633' }}></div>
      
      {/* Crane Structure */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
        {/* Crane Tower */}
        <div className="w-3 bg-yellow-600 relative" style={{ height: '80px' }}>
          {/* Crane Arm */}
          <div className="absolute top-2 -left-16 w-32 h-2 bg-yellow-600 crane-arm-animation"></div>
          
          {/* Crane Hook */}
          <div 
            className="absolute top-4 w-1 bg-gray-800 transition-all duration-1000"
            style={{ left: '60px', height: `${craneHeight}px` }}
          >
            <div className="w-3 h-3 bg-yellow-600 rounded-full -ml-1 relative">
              {/* Building Block */}
              <div className="absolute top-3 -left-1 w-4 h-4 bg-orange-500 rounded animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Building being constructed */}
      <div className="absolute bottom-4 right-1/4">
        <div className="space-y-1">
          <div className="w-16 h-4 bg-gray-400 animate-building-grow" style={{ animationDelay: '0s' }}></div>
          <div className="w-16 h-4 bg-gray-500 animate-building-grow" style={{ animationDelay: '1s' }}></div>
          <div className="w-16 h-4 bg-gray-400 animate-building-grow" style={{ animationDelay: '2s' }}></div>
          <div className="w-16 h-4 bg-gray-500 animate-building-grow" style={{ animationDelay: '3s' }}></div>
        </div>
      </div>
      
      {/* Construction Workers (dots) */}
      <div className="absolute bottom-4 left-1/4 space-x-2 flex">
        <div className="w-2 h-6 bg-orange-400 rounded-full worker-animation" style={{ animationDelay: '0s' }}></div>
        <div className="w-2 h-6 bg-blue-400 rounded-full worker-animation" style={{ animationDelay: '1s' }}></div>
        <div className="w-2 h-6 bg-green-400 rounded-full worker-animation" style={{ animationDelay: '2s' }}></div>
      </div>
    </div>
  );
};

const UnderConstructionPage = () => {
  return (
    <div className="min-h-screen relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #D9D9D9 0%, #F5F5F5 100%)' }}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Construction Icons */}
        <div className="absolute top-20 left-10 hammer-animation opacity-20">
          <Wrench size={40} style={{ color: '#B86A5B' }} />
        </div>
        <div className="absolute top-32 right-20 helmet-animation opacity-20">
          <HardHat size={35} style={{ color: '#052633' }} />
        </div>
        <div className="absolute bottom-40 left-32 crane-animation opacity-15">
          <Construction size={45} style={{ color: '#B86A5B' }} />
        </div>
        <div className="absolute top-60 right-40 float-animation opacity-25">
          <Wrench size={30} style={{ color: '#052633' }} />
        </div>
        <div className="absolute bottom-60 right-10 helmet-animation opacity-20" style={{ animationDelay: '1s' }}>
          <HardHat size={38} style={{ color: '#B86A5B' }} />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        {/* Logo Section */}
        <div className="mb-16 float-animation">
          <div className="w-72 h-72 mx-auto mb-6">
            <LirieLogo className="pulse-glow" />
          </div>
        </div>

        {/* Main Message */}
        <div className="text-center mb-12 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6" style={{ color: '#052633' }}>
            Notre site web est en
            <span className="block mt-2 text-6xl md:text-8xl" style={{ color: '#B86A5B' }}>
              construction
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-80" style={{ color: '#052633' }}>
            Nous préparons quelque chose de solide pour vous !
          </p>
        </div>

        {/* Crane Animation replacing Progress Bar */}
        <CraneAnimation />

        {/* Contact Information */}
        <Card className="w-full max-w-md mx-auto shadow-2xl border-0" style={{ background: 'rgba(255, 255, 255, 0.9)' }}>
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-center mb-6" style={{ color: '#052633' }}>
              Contactez-nous
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full" style={{ background: '#B86A5B' }}>
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm opacity-70" style={{ color: '#052633' }}>Email</p>
                  <a 
                    href="mailto:g.collette@lirie.fr" 
                    className="text-base font-semibold hover:underline transition-colors duration-300"
                    style={{ color: '#B86A5B' }}
                  >
                    g.collette@lirie.fr
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full" style={{ background: '#052633' }}>
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm opacity-70" style={{ color: '#052633' }}>Téléphone</p>
                  <a 
                    href="tel:+33663022922" 
                    className="text-base font-semibold hover:underline transition-colors duration-300"
                    style={{ color: '#052633' }}
                  >
                    06.63.02.29.22
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="flex items-center justify-center space-x-3 text-sm" style={{ color: '#052633' }}>
                <Clock className="w-4 h-4" style={{ color: '#B86A5B' }} />
                <span>Lancement prévu bientôt</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <footer className="mt-16 text-center">
          <p className="text-sm opacity-60" style={{ color: '#052633' }}>
            © 2024 LIRIE - Ingénierie de la construction
          </p>
        </footer>
      </div>
    </div>
  );
};

export default UnderConstructionPage;