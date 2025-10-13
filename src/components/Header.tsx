import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { useSiteSettings } from '../hooks/useSiteSettings';

interface HeaderProps {
  cartItemsCount: number;
  onCartClick: () => void;
  onMenuClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ cartItemsCount, onCartClick, onMenuClick }) => {
  const { siteSettings, loading } = useSiteSettings();

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-orange-500 to-red-600 shadow-lg border-b-4 border-red-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button 
            onClick={onMenuClick}
            className="flex items-center space-x-2 text-white hover:text-yellow-200 transition-colors duration-200"
          >
            {loading ? (
              <div className="w-10 h-10 bg-white/30 rounded-full animate-pulse" />
            ) : (
              <img 
                src={siteSettings?.site_logo || "/logo.jpg"} 
                alt={siteSettings?.site_name || "SIMOT SARAP"}
                className="w-10 h-10 rounded-full object-cover ring-4 ring-white shadow-lg"
                onError={(e) => {
                  e.currentTarget.src = "/logo.jpg";
                }}
              />
            )}
            <h1 className="text-2xl font-pretendard font-bold text-white drop-shadow-lg">
              {loading ? (
                <div className="w-32 h-6 bg-white/30 rounded animate-pulse" />
              ) : (
                siteSettings?.site_name || "SIMOT SARAP"
              )}
            </h1>
          </button>

          <div className="flex items-center space-x-2">
            <button 
              onClick={onCartClick}
              className="relative p-2 text-white hover:text-yellow-200 hover:bg-white/20 rounded-full transition-all duration-200"
            >
              <ShoppingCart className="h-6 w-6" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-yellow-400 text-red-700 text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center animate-bounce-gentle shadow-lg">
                  {cartItemsCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;