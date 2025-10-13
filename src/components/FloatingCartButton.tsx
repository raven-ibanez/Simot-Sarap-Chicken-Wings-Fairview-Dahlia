import React from 'react';
import { ShoppingCart } from 'lucide-react';

interface FloatingCartButtonProps {
  itemCount: number;
  onCartClick: () => void;
}

const FloatingCartButton: React.FC<FloatingCartButtonProps> = ({ itemCount, onCartClick }) => {
  if (itemCount === 0) return null;

  return (
    <button
      onClick={onCartClick}
      className="fixed bottom-6 right-6 bg-gradient-to-r from-orange-500 to-red-600 text-white p-4 rounded-full shadow-2xl hover:from-orange-600 hover:to-red-700 transition-all duration-200 transform hover:scale-110 z-40 md:hidden border-4 border-yellow-300 animate-bounce-gentle"
    >
      <div className="relative">
        <ShoppingCart className="h-6 w-6" />
        <span className="absolute -top-2 -right-2 bg-yellow-400 text-red-700 text-xs rounded-full h-6 w-6 flex items-center justify-center font-bold shadow-lg">
          {itemCount}
        </span>
      </div>
    </button>
  );
};

export default FloatingCartButton;