import React from 'react';
import { ChevronDown, Sparkles, Zap, Award } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-orange-500 via-red-600 to-red-700 overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-20 animate-pulse">
        <div className="absolute top-10 left-10 w-72 h-72 bg-yellow-300 rounded-full blur-3xl animate-bounce"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-300 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-yellow-400 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      </div>

      {/* Floating Food Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 text-6xl animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}>🍗</div>
        <div className="absolute top-40 right-20 text-5xl animate-bounce" style={{ animationDelay: '1s', animationDuration: '2.5s' }}>🔥</div>
        <div className="absolute bottom-32 left-20 text-5xl animate-bounce" style={{ animationDelay: '2s', animationDuration: '3.5s' }}>⭐</div>
        <div className="absolute top-1/2 right-10 text-6xl animate-bounce" style={{ animationDelay: '1.5s', animationDuration: '2.8s' }}>🍖</div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-6 md:py-16">
        <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-4 md:space-y-8 animate-fade-in">
            {/* Scrolling Promo Banner */}
            <div className="relative overflow-hidden bg-yellow-400 text-red-800 rounded-full font-black text-xs md:text-base shadow-2xl border-2 md:border-4 border-white">
              <div className="flex animate-scroll">
                <div className="flex items-center gap-2 md:gap-4 px-4 md:px-6 py-2 md:py-3 whitespace-nowrap">
                  <Sparkles className="w-4 h-4 md:w-5 md:h-5 animate-spin" />
                  <span>🔥 LIMITED TIME OFFER - UP TO 50% OFF</span>
                  <Zap className="w-4 h-4 md:w-5 md:h-5 animate-pulse" />
                  <span>🔥 FREE DELIVERY ON ORDERS ₱500+</span>
                  <Award className="w-4 h-4 md:w-5 md:h-5 animate-bounce" />
                  <span>🔥 BUY 2 GET 1 FREE THIS WEEK</span>
                </div>
              </div>
            </div>
            
            <h1 className="text-3xl md:text-7xl font-black leading-tight animate-bounce-gentle">
              <span className="inline-block animate-pulse">🔥</span> SIMOT SARAP
              <span className="block text-yellow-300 text-2xl md:text-6xl mt-1 md:mt-2 animate-pulse">
                CHICKEN WINGS
              </span>
            </h1>
            
            <p className="text-base md:text-2xl text-orange-100 font-bold animate-fade-in" style={{ animationDelay: '0.2s' }}>
              🍗 Crispy, Juicy, Finger-Lickin' Good! 🍗
            </p>

            {/* Animated Promo Badges */}
            <div className="flex flex-wrap gap-2 md:gap-4 pt-2 md:pt-4">
              <div className="bg-white/20 backdrop-blur-sm px-3 md:px-6 py-2 md:py-3 rounded-lg md:rounded-xl border-2 md:border-4 border-yellow-300 animate-pulse hover:scale-110 transition-transform cursor-pointer">
                <div className="text-yellow-300 font-black text-xl md:text-3xl flex items-center gap-1 md:gap-2">
                  <span className="animate-bounce text-sm md:text-base">💰</span>
                  ₱109
                </div>
                <div className="text-white text-xs md:text-sm font-bold">Starting Price</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-3 md:px-6 py-2 md:py-3 rounded-lg md:rounded-xl border-2 md:border-4 border-yellow-300 animate-pulse hover:scale-110 transition-transform cursor-pointer" style={{ animationDelay: '0.2s' }}>
                <div className="text-yellow-300 font-black text-xl md:text-3xl flex items-center gap-1 md:gap-2">
                  <span className="animate-bounce text-sm md:text-base">🍗</span>
                  35+
                </div>
                <div className="text-white text-xs md:text-sm font-bold">Menu Items</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-3 md:px-6 py-2 md:py-3 rounded-lg md:rounded-xl border-2 md:border-4 border-yellow-300 animate-pulse hover:scale-110 transition-transform cursor-pointer" style={{ animationDelay: '0.4s' }}>
                <div className="text-yellow-300 font-black text-xl md:text-3xl flex items-center gap-1 md:gap-2">
                  <span className="animate-spin text-sm md:text-base">⭐</span>
                  4.8
                </div>
                <div className="text-white text-xs md:text-sm font-bold">Rating</div>
              </div>
            </div>
          </div>

          {/* Right Image with Effects */}
          <div className="relative animate-slide-up mt-4 md:mt-0">
            <div className="relative z-10 transform hover:scale-110 transition-transform duration-700 animate-pulse">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-yellow-400 rounded-2xl md:rounded-3xl blur-xl md:blur-2xl opacity-50 animate-pulse"></div>
              
              <img 
                src="https://cwtlfoplrnkbgzkkbbkb.supabase.co/storage/v1/object/public/menu-images/1760351494724-71kvo3dzzjn.jpg"
                alt="SIMOT SARAP Chicken Wings"
                className="relative w-full h-auto rounded-2xl md:rounded-3xl shadow-2xl border-4 md:border-8 border-yellow-300 animate-bounce-gentle"
              />
              
              {/* Multiple Floating Badges */}
              <div className="hidden md:block absolute -top-6 -right-6 bg-yellow-400 text-red-800 px-6 py-4 rounded-full shadow-2xl transform rotate-12 animate-bounce-gentle border-4 border-white">
                <div className="font-black text-2xl flex items-center gap-1">
                  <span className="animate-spin">🔥</span>
                  HOT!
                </div>
              </div>
              
              <div className="hidden md:block absolute -bottom-4 -left-4 bg-red-600 text-white px-5 py-3 rounded-full shadow-2xl transform -rotate-12 animate-bounce-gentle border-4 border-yellow-300" style={{ animationDelay: '0.5s' }}>
                <div className="font-black text-lg flex items-center gap-1">
                  <span className="animate-bounce">⚡</span>
                  NEW!
                </div>
              </div>
              
              <div className="hidden md:block absolute top-1/2 -right-8 bg-green-500 text-white px-4 py-2 rounded-full shadow-2xl transform rotate-12 animate-bounce-gentle border-4 border-white" style={{ animationDelay: '1s' }}>
                <div className="font-black text-sm flex items-center gap-1">
                  <span className="animate-pulse">✓</span>
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

      {/* Wave Bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;