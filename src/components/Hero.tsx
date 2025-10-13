import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden min-h-[600px] md:min-h-[700px]">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://cwtlfoplrnkbgzkkbbkb.supabase.co/storage/v1/object/public/menu-images/1760362211857-9nax5qi9n1p.png)'
        }}
      >
        {/* Dark Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/90 via-red-800/85 to-red-900/90"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-6 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center">
          {/* Left Content - Full width on mobile */}
          <div className="text-white space-y-4 md:space-y-8 animate-fade-in text-center md:text-left">
            <h1 className="text-3xl md:text-7xl font-black leading-tight animate-bounce-gentle">
              SIMOT SARAP
              <span className="block text-yellow-300 text-2xl md:text-6xl mt-1 md:mt-2 animate-pulse">
                CHICKEN WINGS
              </span>
            </h1>
            
            <p className="text-base md:text-2xl text-red-100 font-bold animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Kapag chicken dapat simot sarap!
            </p>

            {/* Floating Text Cards */}
            <div className="flex flex-wrap justify-center md:justify-start gap-3 md:gap-4 pt-2">
              <div className="bg-gradient-to-br from-yellow-400 to-orange-500 text-red-900 px-4 md:px-6 py-2 md:py-3 rounded-lg md:rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 md:border-4 border-white animate-bounce-gentle">
                <div className="font-black text-sm md:text-base flex items-center gap-2">
                  <span className="text-lg md:text-xl">🍗</span>
                  <span>Tasty Chicken</span>
                </div>
              </div>
              <div className="bg-gradient-to-br from-red-500 to-red-700 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg md:rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 md:border-4 border-yellow-300 animate-bounce-gentle" style={{ animationDelay: '0.2s' }}>
                <div className="font-black text-sm md:text-base flex items-center gap-2">
                  <span className="text-lg md:text-xl">🔥</span>
                  <span>Hot & Spicy</span>
                </div>
              </div>
              <div className="bg-gradient-to-br from-green-500 to-green-700 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg md:rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 md:border-4 border-white animate-bounce-gentle" style={{ animationDelay: '0.4s' }}>
                <div className="font-black text-sm md:text-base flex items-center gap-2">
                  <span className="text-lg md:text-xl">✨</span>
                  <span>Fresh Daily</span>
                </div>
              </div>
            </div>

            {/* Animated Promo Badges */}
            <div className="flex flex-wrap justify-center md:justify-start gap-2 md:gap-4 pt-2 md:pt-4">
              <div className="bg-white/20 backdrop-blur-sm px-4 md:px-6 py-2 md:py-3 rounded-lg md:rounded-xl border-2 md:border-4 border-yellow-300 animate-pulse hover:scale-110 transition-transform cursor-pointer">
                <div className="text-yellow-300 font-black text-xl md:text-3xl flex items-center justify-center md:justify-start gap-1 md:gap-2">
                  ₱109
                </div>
                <div className="text-white text-xs md:text-sm font-bold text-center md:text-left">Starting Price</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-4 md:px-6 py-2 md:py-3 rounded-lg md:rounded-xl border-2 md:border-4 border-yellow-300 animate-pulse hover:scale-110 transition-transform cursor-pointer" style={{ animationDelay: '0.2s' }}>
                <div className="text-yellow-300 font-black text-xl md:text-3xl flex items-center justify-center md:justify-start gap-1 md:gap-2">
                  35+
                </div>
                <div className="text-white text-xs md:text-sm font-bold text-center md:text-left">Menu Items</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-4 md:px-6 py-2 md:py-3 rounded-lg md:rounded-xl border-2 md:border-4 border-yellow-300 animate-pulse hover:scale-110 transition-transform cursor-pointer" style={{ animationDelay: '0.4s' }}>
                <div className="text-yellow-300 font-black text-xl md:text-3xl flex items-center justify-center md:justify-start gap-1 md:gap-2">
                  4.8
                </div>
                <div className="text-white text-xs md:text-sm font-bold text-center md:text-left">Rating</div>
              </div>
            </div>
          </div>

          {/* Right Image with Effects - Hidden on mobile */}
          <div className="hidden md:block relative animate-slide-up">
            <div className="relative z-10 transform hover:scale-110 transition-transform duration-700 animate-pulse">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-yellow-400 rounded-3xl blur-2xl opacity-50 animate-pulse"></div>
              
              <img 
                src="https://cwtlfoplrnkbgzkkbbkb.supabase.co/storage/v1/object/public/menu-images/1760351494724-71kvo3dzzjn.jpg"
                alt="SIMOT SARAP Chicken Wings"
                className="relative w-full h-auto rounded-3xl shadow-2xl border-8 border-yellow-300 animate-bounce-gentle"
              />
              
              {/* Multiple Floating Badges */}
              <div className="absolute -top-6 -right-6 bg-yellow-400 text-red-800 px-6 py-4 rounded-full shadow-2xl transform rotate-12 animate-bounce-gentle border-4 border-white">
                <div className="font-black text-2xl">
                  HOT!
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-red-600 text-white px-5 py-3 rounded-full shadow-2xl transform -rotate-12 animate-bounce-gentle border-4 border-yellow-300" style={{ animationDelay: '0.5s' }}>
                <div className="font-black text-lg">
                  NEW!
                </div>
              </div>
              
              <div className="absolute top-1/2 -right-8 bg-green-500 text-white px-4 py-2 rounded-full shadow-2xl transform rotate-12 animate-bounce-gentle border-4 border-white" style={{ animationDelay: '1s' }}>
                <div className="font-black text-sm">
                  FRESH
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator - Hidden on mobile */}
        <div className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-yellow-300" />
        </div>
      </div>

      {/* Wave Bottom - Hidden on mobile */}
      <div className="hidden md:block absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;