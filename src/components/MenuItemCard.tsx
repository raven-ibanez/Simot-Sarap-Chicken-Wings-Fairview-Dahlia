import React, { useState } from 'react';
import { Plus, Minus, X, ShoppingCart } from 'lucide-react';
import { MenuItem, Variation, AddOn } from '../types';

interface MenuItemCardProps {
  item: MenuItem;
  onAddToCart: (item: MenuItem, quantity?: number, variation?: Variation, addOns?: AddOn[]) => void;
  quantity: number;
  onUpdateQuantity: (id: string, quantity: number) => void;
}

const MenuItemCard: React.FC<MenuItemCardProps> = ({ 
  item, 
  onAddToCart, 
  quantity, 
  onUpdateQuantity 
}) => {
  const [showCustomization, setShowCustomization] = useState(false);
  const [selectedVariation, setSelectedVariation] = useState<Variation | undefined>(
    item.variations?.[0]
  );
  const [selectedAddOns, setSelectedAddOns] = useState<(AddOn & { quantity: number })[]>([]);

  const calculatePrice = () => {
    // Use effective price (discounted or regular) as base
    let price = item.effectivePrice || item.basePrice;
    if (selectedVariation) {
      price = (item.effectivePrice || item.basePrice) + selectedVariation.price;
    }
    selectedAddOns.forEach(addOn => {
      price += addOn.price * addOn.quantity;
    });
    return price;
  };

  const [showQuantityModal, setShowQuantityModal] = useState(false);
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  const handleAddToCart = () => {
    if (item.variations?.length || item.addOns?.length) {
      setShowCustomization(true);
    } else {
      setShowQuantityModal(true);
    }
  };

  const handleConfirmQuantity = () => {
    // Check if we have customization (variations or add-ons)
    if (selectedVariation || (selectedAddOns && selectedAddOns.length > 0)) {
      handleConfirmQuantityWithCustomization();
    } else {
      onAddToCart(item, selectedQuantity);
      setShowQuantityModal(false);
      setSelectedQuantity(1);
    }
  };

  const handleCustomizedAddToCart = () => {
    // Close customization modal and show quantity selection
    setShowCustomization(false);
    setShowQuantityModal(true);
  };

  const handleConfirmQuantityWithCustomization = () => {
    // Convert selectedAddOns back to regular AddOn array for cart
    const addOnsForCart: AddOn[] = selectedAddOns.flatMap(addOn => 
      Array(addOn.quantity).fill({ ...addOn, quantity: undefined })
    );
    onAddToCart(item, selectedQuantity, selectedVariation, addOnsForCart);
    setShowQuantityModal(false);
    setSelectedQuantity(1);
    setSelectedAddOns([]);
  };

  const handleIncrement = () => {
    onUpdateQuantity(item.id, quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      onUpdateQuantity(item.id, quantity - 1);
    }
  };

  const updateAddOnQuantity = (addOn: AddOn, quantity: number) => {
    setSelectedAddOns(prev => {
      const existingIndex = prev.findIndex(a => a.id === addOn.id);
      
      if (quantity === 0) {
        // Remove add-on if quantity is 0
        return prev.filter(a => a.id !== addOn.id);
      }
      
      if (existingIndex >= 0) {
        // Update existing add-on quantity
        const updated = [...prev];
        updated[existingIndex] = { ...updated[existingIndex], quantity };
        return updated;
      } else {
        // Add new add-on with quantity
        return [...prev, { ...addOn, quantity }];
      }
    });
  };

  const groupedAddOns = item.addOns?.reduce((groups, addOn) => {
    const category = addOn.category;
    if (!groups[category]) {
      groups[category] = [];
    }
    groups[category].push(addOn);
    return groups;
  }, {} as Record<string, AddOn[]>);

  return (
    <>
      {/* Quantity Selection Modal */}
      {showQuantityModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl max-w-md w-full shadow-2xl border-4 border-orange-300">
            <div className="p-8">
              <div className="text-center mb-6">
                <h3 className="text-3xl font-black text-gray-900 mb-2">Select Quantity</h3>
                <p className="text-lg font-bold text-orange-600">{item.name}</p>
                {selectedVariation && (
                  <p className="text-base text-gray-600 mt-1">Size: {selectedVariation.name}</p>
                )}
                <p className="text-2xl font-black text-red-600 mt-2">
                  ₱{calculatePrice().toFixed(2)} each
                </p>
              </div>

              {/* Quantity Selector */}
              <div className="flex items-center justify-center gap-6 mb-8">
                <button
                  onClick={() => selectedQuantity > 1 && setSelectedQuantity(selectedQuantity - 1)}
                  className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-full hover:from-orange-600 hover:to-red-700 transition-all duration-200 transform hover:scale-110 font-black text-3xl shadow-xl border-4 border-white"
                >
                  −
                </button>
                
                <div className="bg-gradient-to-r from-orange-100 to-red-100 rounded-2xl px-8 py-4 border-4 border-orange-300">
                  <div className="text-6xl font-black text-red-700">{selectedQuantity}</div>
                </div>
                
                <button
                  onClick={() => setSelectedQuantity(selectedQuantity + 1)}
                  className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-full hover:from-orange-600 hover:to-red-700 transition-all duration-200 transform hover:scale-110 font-black text-3xl shadow-xl border-4 border-white"
                >
                  +
                </button>
              </div>

              {/* Total Price */}
              <div className="bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl p-6 mb-6 border-4 border-yellow-300">
                <div className="flex items-center justify-between">
                  <span className="text-white text-xl font-bold">Total:</span>
                  <span className="text-yellow-300 text-4xl font-black">
                    ₱{(calculatePrice() * selectedQuantity).toFixed(2)}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <button
                  onClick={() => {
                    setShowQuantityModal(false);
                    setSelectedQuantity(1);
                    setSelectedAddOns([]);
                  }}
                  className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-4 rounded-xl font-black text-lg transition-all duration-200"
                >
                  Cancel
                </button>
                <button
                  onClick={handleConfirmQuantity}
                  className="flex-1 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-6 py-4 rounded-xl font-black text-lg shadow-xl border-4 border-yellow-300 transition-all duration-200 transform hover:scale-105"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className={`bg-white rounded-2xl md:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group animate-scale-in border-2 md:border-4 border-red-200 hover:border-red-400 ${!item.available ? 'opacity-60' : ''}`}>
        {/* Image Container with Badges */}
        <div className="relative h-48 md:h-56 bg-gradient-to-br from-red-100 to-red-200">
          {item.image ? (
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
              decoding="async"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling?.classList.remove('hidden');
              }}
            />
          ) : null}
          <div className={`absolute inset-0 flex items-center justify-center ${item.image ? 'hidden' : ''}`}>
            <div className="text-6xl opacity-20 text-gray-400">☕</div>
          </div>
          
          {/* Badges */}
          <div className="absolute top-2 left-2 md:top-3 md:left-3 flex flex-col gap-1 md:gap-2">
            {item.isOnDiscount && item.discountPrice && (
              <div className="bg-gradient-to-r from-red-600 to-red-700 text-white text-xs md:text-sm font-black px-2 md:px-4 py-1 md:py-2 rounded-full shadow-2xl animate-pulse border-2 md:border-4 border-yellow-300">
                🔥 SALE
              </div>
            )}
            {item.popular && (
              <div className="bg-gradient-to-r from-red-600 to-red-700 text-white text-xs md:text-sm font-black px-2 md:px-4 py-1 md:py-2 rounded-full shadow-2xl border-2 md:border-4 border-yellow-300">
                ⭐ BESTSELLER
              </div>
            )}
          </div>
          
          {!item.available && (
            <div className="absolute top-2 right-2 md:top-3 md:right-3 bg-red-700 text-white text-xs md:text-sm font-black px-2 md:px-4 py-1 md:py-2 rounded-full shadow-2xl border-2 md:border-4 border-yellow-300">
              SOLD OUT
            </div>
          )}
          
          {/* Discount Percentage Badge */}
          {item.isOnDiscount && item.discountPrice && (
            <div className="absolute bottom-2 right-2 md:bottom-3 md:right-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-red-900 text-xs md:text-sm font-black px-2 md:px-4 py-1 md:py-2 rounded-full shadow-2xl border-2 md:border-4 border-white">
              {Math.round(((item.basePrice - item.discountPrice) / item.basePrice) * 100)}% OFF
            </div>
          )}
        </div>
        
        {/* Content */}
        <div className="p-6">
          <div className="flex items-start justify-between mb-4">
            <h4 className="text-xl font-black text-gray-900 leading-tight flex-1 pr-2">{item.name}</h4>
            {item.variations && item.variations.length > 0 && (
              <div className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full whitespace-nowrap">
                {item.variations.length} sizes
              </div>
            )}
          </div>
          
          <p className={`text-sm md:text-base mb-4 md:mb-5 leading-relaxed font-medium ${!item.available ? 'text-gray-400' : 'text-gray-700'}`}>
            {!item.available ? 'Currently Unavailable' : item.description}
          </p>
          
          {/* Pricing Section */}
          <div className="flex items-center justify-between mb-4 md:mb-5">
            <div className="flex-1">
              {item.isOnDiscount && item.discountPrice ? (
                <div className="space-y-1 md:space-y-2">
                  <div className="flex items-center space-x-2 md:space-x-3">
                    <span className="text-2xl md:text-3xl font-black text-red-600">
                      ₱{item.discountPrice.toFixed(2)}
                    </span>
                    <span className="text-sm md:text-base text-gray-500 line-through font-bold">
                      ₱{item.basePrice.toFixed(2)}
                    </span>
                  </div>
                  <div className="text-xs md:text-sm text-red-600 font-bold">
                    💰 Save ₱{(item.basePrice - item.discountPrice).toFixed(2)}
                  </div>
                </div>
              ) : (
                <div className="text-2xl md:text-3xl font-black text-gray-900">
                  ₱{item.basePrice.toFixed(2)}
                </div>
              )}
              
              {item.variations && item.variations.length > 0 && (
                <div className="text-xs text-gray-500 mt-1">
                  Starting price
                </div>
              )}
            </div>
            
            {/* Action Buttons */}
            <div className="flex-shrink-0">
              {!item.available ? (
                <button
                  disabled
                  className="bg-gray-200 text-gray-500 px-4 py-2.5 rounded-xl cursor-not-allowed font-medium text-sm"
                >
                  Unavailable
                </button>
              ) : quantity === 0 ? (
                <button
                  onClick={handleAddToCart}
                  className="bg-gradient-to-r from-red-600 to-red-700 text-white px-4 md:px-8 py-2 md:py-3 rounded-xl md:rounded-2xl hover:from-red-700 hover:to-red-800 transition-all duration-200 transform hover:scale-110 font-black text-sm md:text-base shadow-2xl hover:shadow-3xl border-2 md:border-4 border-yellow-300"
                >
                  {item.variations?.length || item.addOns?.length ? '✨ CUSTOMIZE' : '➕ ADD TO CART'}
                </button>
              ) : (
                <div className="flex items-center space-x-1 md:space-x-2 bg-gradient-to-r from-red-100 to-red-200 rounded-xl md:rounded-2xl p-1.5 md:p-2 border-2 md:border-4 border-red-300 shadow-lg">
                  <button
                    onClick={handleDecrement}
                    className="p-2 hover:bg-red-200 rounded-lg transition-colors duration-200 hover:scale-110"
                  >
                    <Minus className="h-4 w-4 text-red-700" />
                  </button>
                  <span className="font-bold text-red-700 min-w-[28px] text-center text-sm">{quantity}</span>
                  <button
                    onClick={handleIncrement}
                    className="p-2 hover:bg-red-200 rounded-lg transition-colors duration-200 hover:scale-110"
                  >
                    <Plus className="h-4 w-4 text-red-700" />
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Add-ons indicator */}
          {item.addOns && item.addOns.length > 0 && (
            <div className="flex items-center space-x-1 text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded-lg">
              <span>+</span>
              <span>{item.addOns.length} add-on{item.addOns.length > 1 ? 's' : ''} available</span>
            </div>
          )}
        </div>
      </div>

      {/* Customization Modal */}
      {showCustomization && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between rounded-t-2xl">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Customize {item.name}</h3>
                <p className="text-sm text-gray-500 mt-1">Choose your preferences</p>
              </div>
              <button
                onClick={() => setShowCustomization(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
              >
                <X className="h-5 w-5 text-gray-500" />
              </button>
            </div>

            <div className="p-6">
              {/* Size Variations */}
              {item.variations && item.variations.length > 0 && (
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-4">Choose Size</h4>
                  <div className="space-y-3">
                    {item.variations.map((variation) => (
                      <label
                        key={variation.id}
                        className={`flex items-center justify-between p-4 border-2 rounded-xl cursor-pointer transition-all duration-200 ${
                          selectedVariation?.id === variation.id
                            ? 'border-red-600 bg-red-50 shadow-md'
                            : 'border-gray-200 hover:border-red-300 hover:bg-red-50'
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          <input
                            type="radio"
                            name="variation"
                            checked={selectedVariation?.id === variation.id}
                            onChange={() => setSelectedVariation(variation)}
                            className="text-red-600 focus:ring-red-500"
                          />
                          <span className="font-medium text-gray-900">{variation.name}</span>
                        </div>
                        <span className="text-gray-900 font-semibold">
                          ₱{((item.effectivePrice || item.basePrice) + variation.price).toFixed(2)}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {/* Add-ons */}
              {groupedAddOns && Object.keys(groupedAddOns).length > 0 && (
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-4">Add-ons</h4>
                  {Object.entries(groupedAddOns).map(([category, addOns]) => (
                    <div key={category} className="mb-4">
                      <h5 className="text-sm font-medium text-gray-700 mb-3 capitalize">
                        {category.replace('-', ' ')}
                      </h5>
                      <div className="space-y-3">
                        {addOns.map((addOn) => (
                          <div
                            key={addOn.id}
                            className="flex items-center justify-between p-4 border border-gray-200 rounded-xl hover:border-gray-300 hover:bg-gray-50 transition-all duration-200"
                          >
                            <div className="flex-1">
                              <span className="font-medium text-gray-900">{addOn.name}</span>
                              <div className="text-sm text-gray-600">
                                {addOn.price > 0 ? `₱${addOn.price.toFixed(2)} each` : 'Free'}
                              </div>
                            </div>
                            
                            <div className="flex items-center space-x-2">
                              {selectedAddOns.find(a => a.id === addOn.id) ? (
                                <div className="flex items-center space-x-2 bg-red-100 rounded-xl p-1 border-2 border-red-300">
                                  <button
                                    type="button"
                                    onClick={() => {
                                      const current = selectedAddOns.find(a => a.id === addOn.id);
                                      updateAddOnQuantity(addOn, (current?.quantity || 1) - 1);
                                    }}
                                    className="p-1.5 hover:bg-red-200 rounded-lg transition-colors duration-200"
                                  >
                                    <Minus className="h-3 w-3 text-red-600" />
                                  </button>
                                  <span className="font-semibold text-gray-900 min-w-[24px] text-center text-sm">
                                    {selectedAddOns.find(a => a.id === addOn.id)?.quantity || 0}
                                  </span>
                                  <button
                                    type="button"
                                    onClick={() => {
                                      const current = selectedAddOns.find(a => a.id === addOn.id);
                                      updateAddOnQuantity(addOn, (current?.quantity || 0) + 1);
                                    }}
                                    className="p-1.5 hover:bg-red-200 rounded-lg transition-colors duration-200"
                                  >
                                    <Plus className="h-3 w-3 text-red-600" />
                                  </button>
                                </div>
                              ) : (
                                <button
                                  type="button"
                                  onClick={() => updateAddOnQuantity(addOn, 1)}
                                  className="flex items-center space-x-1 px-4 py-2 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-xl hover:from-red-700 hover:to-red-800 transition-all duration-200 text-sm font-bold shadow-lg"
                                >
                                  <Plus className="h-3 w-3" />
                                  <span>Add</span>
                                </button>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Price Summary */}
              <div className="border-t-2 border-red-200 pt-4 mb-6">
                <div className="flex items-center justify-between text-2xl font-bold text-gray-900">
                  <span>Total:</span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-700">₱{calculatePrice().toFixed(2)}</span>
                </div>
              </div>

              <button
                onClick={handleCustomizedAddToCart}
                className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white py-4 rounded-xl hover:from-red-700 hover:to-red-800 transition-all duration-200 font-bold flex items-center justify-center space-x-2 shadow-xl hover:shadow-2xl transform hover:scale-105 border-2 border-yellow-300"
              >
                <ShoppingCart className="h-5 w-5" />
                <span>Add to Cart - ₱{calculatePrice().toFixed(2)}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MenuItemCard;