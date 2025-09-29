import React, { useState, useEffect } from 'react';
import { Mail, Phone, Clock, Wrench, HardHat, Construction } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';

const UnderConstructionPage = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 85 ? 0 : prev + 1));
    }, 100);
    return () => clearInterval(interval);
  }, []);

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
          <div className="w-64 h-64 mx-auto mb-6 relative">
            <img 
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg==" 
              alt="LIRIE Logo" 
              className="w-full h-full object-contain rounded-xl shadow-2xl pulse-glow"
              style={{ background: '#B86A5B', padding: '20px' }}
            />
            {/* Placeholder for actual logo */}
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-orange-400 to-red-500 rounded-xl shadow-2xl">
              <div className="text-white text-center">
                <div className="text-4xl font-bold mb-2 tracking-wider">LIRIE</div>
                <div className="text-sm opacity-90">Ingénierie de la construction</div>
              </div>
            </div>
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

        {/* Progress Bar */}
        <div className="w-full max-w-2xl mb-12">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-semibold" style={{ color: '#052633' }}>Progression</span>
            <span className="text-sm font-semibold" style={{ color: '#B86A5B' }}>{progress}%</span>
          </div>
          <div className="w-full bg-white/30 rounded-full h-4 shadow-inner">
            <div 
              className="h-4 rounded-full transition-all duration-300 shadow-lg"
              style={{ 
                width: `${progress}%`, 
                background: `linear-gradient(90deg, #B86A5B 0%, #D4846F 100%)`,
                boxShadow: '0 2px 10px rgba(184, 106, 91, 0.4)'
              }}
            />
          </div>
        </div>

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