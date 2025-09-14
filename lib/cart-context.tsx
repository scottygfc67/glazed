'use client';

import { createContext, useContext, useState, useEffect, ReactNode, useCallback, useMemo } from 'react';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  variantId: string;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: Omit<CartItem, 'id'>) => void;
  updateQuantity: (id: string, quantity: number) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
  getTotalQuantity: () => number;
  getSavings: () => number;
  getOriginalPrice: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    // Load cart from localStorage on mount
    const savedCart = localStorage.getItem('glazed-cart');
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    // Save cart to localStorage whenever it changes
    localStorage.setItem('glazed-cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = useCallback((item: Omit<CartItem, 'id'>) => {
    console.log('addToCart called with:', item);
    
    const newItem: CartItem = {
      ...item,
      id: `${item.variantId}-${Date.now()}`, // Simple ID generation
    };

    setCartItems(prev => {
      console.log('Previous cart items:', prev);
      
      // Check if item with same variant already exists
      const existingIndex = prev.findIndex(cartItem => cartItem.variantId === item.variantId);
      
      if (existingIndex >= 0) {
        // Update quantity of existing item
        const updated = [...prev];
        updated[existingIndex].quantity += item.quantity;
        console.log('Updated existing item:', updated);
        return updated;
      } else {
        // Add new item
        const newCart = [...prev, newItem];
        console.log('Added new item:', newCart);
        return newCart;
      }
    });
    
    console.log('Cart updated successfully');
  }, []);

  const removeItem = useCallback((id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  }, []);

  const updateQuantity = useCallback((id: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(id);
      return;
    }
    
    setCartItems(prev => 
      prev.map(item => 
        item.id === id ? { ...item, quantity } : item
      )
    );
  }, [removeItem]);

  const clearCart = useCallback(() => {
    setCartItems([]);
  }, []);

  const getTotalPrice = useCallback(() => {
    return cartItems.reduce((total, item) => {
      // Apply quantity pricing logic: 2 bottles for £29.99
      if (item.quantity >= 2) {
        // For 2 or more bottles, use the special pricing
        const pairs = Math.floor(item.quantity / 2);
        const remaining = item.quantity % 2;
        return total + (pairs * 29.99) + (remaining * item.price);
      } else {
        // For 1 bottle, use regular price
        return total + (item.price * item.quantity);
      }
    }, 0);
  }, [cartItems]);

  const getTotalQuantity = useCallback(() => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  }, [cartItems]);

  const getOriginalPrice = useCallback(() => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  }, [cartItems]);

  const getSavings = useCallback(() => {
    const originalPrice = getOriginalPrice();
    const totalPrice = getTotalPrice();
    return originalPrice - totalPrice;
  }, [getOriginalPrice, getTotalPrice]);

  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      updateQuantity,
      removeItem,
      clearCart,
      getTotalPrice,
      getTotalQuantity,
      getSavings,
      getOriginalPrice,
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
