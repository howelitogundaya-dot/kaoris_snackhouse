import React from 'react';
import { useCart } from '../context/CartContext';

const Cart: React.FC = () => {
  const { cartItems, totalItems, totalPrice, clearCart, removeItem, updateQuantity } = useCart();

  return (
    <div className="min-h-screen bg-snackhouse-cream">
      {/* Cart Header */}
      <header className="bg-snackhouse-primary/5 px-4 py-8 border-b border-snackhouse-primary/10">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-center text-snackhouse-primary mb-6">
            Your Cart ({totalItems} items)
          </h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-12">
        {totalItems === 0 ? (
          <div className="text-center py-20">
            <div className="mb-8">
              <svg className="mx-auto h-12 w-12 text-snackhouse-primary/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 11l3 3m0 0l3-3m-3 3V8m0 0a2 2 0 104 0v3a2 2 0 01-2 2H9a2 2 0 01-2-2z"></path>
              </svg>
            </div>
            <p className="text-snackhouse-brown/60 mb-6">
              Your cart is empty.
            </p>
            <a
              href="/menu"
              className="inline-block bg-snackhouse-primary hover:bg-snackhouse-primary/90 text-white px-8 py-4 rounded-lg font-medium transition-colors"
            >
              Continue Shopping
            </a>
          </div>
        ) : (
          <>
            <div className="space-y-8">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-xl shadow-lg p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 group"
                >
                  <div className="relative w-24 h-24 sm:w-32 sm:h-32 flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover rounded-lg"
                    >
                    </img>
                    <div className="absolute bottom-0 left-0 right-0 bg-snackhouse-primary/90 p-1 text-center text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity">
                      {item.name.split(' ')[0]}
                    </div>
                  </div>
                  <div className="flex-1 space-y-2">
                    <h3 className="text-lg font-medium">{item.name}</h3>
                    <p className="text-snackhouse-brown/60">${item.price.toFixed(2)} x {item.quantity}</p>
                    <div className="flex items-center space-x-3">
                      <button
                        onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                        className="bg-snackhouse-primary/10 text-snackhouse-primary px-3 py-1 rounded hover:bg-snackhouse-primary/20 transition-colors"
                      >
                        -
                      </button>
                      <span className="w-8 text-center font-medium">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="bg-snackhouse-primary/10 text-snackhouse-primary px-3 py-1 rounded hover:bg-snackhouse-primary/20 transition-colors"
                      >
                        +
                      </button>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-snackhouse-brown/60 hover:text-snackhouse-brown/90 underline"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-snackhouse-primary/10 pt-8">
              <div className="flex justify-between items-center mb-6">
                <span className="text-lg font-medium">Subtotal:</span>
                <span className="text-lg font-medium text-snackhouse-primary">
                  ${totalPrice.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm text-snackhouse-brown/60">Taxes (estimated):</span>
                <span className="text-sm text-snackhouse-brown/60">
                  ${(totalPrice * 0.08).toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between items-center font-bold text-lg">
                <span>Total:</span>
                <span className="text-snackhouse-primary">
                  ${(totalPrice * 1.08).toFixed(2)}
                </span>
              </div>
            </div>

            <div className="mt-8 space-y-4">
              <button
                onClick={clearCart}
                className="w-full bg-snackhouse-primary/10 text-snackhouse-primary px-6 py-3 rounded hover:bg-snackhouse-primary/20 transition-colors"
              >
                Clear Cart
              </button>
              <a
                href="https://www.facebook.com/profile.php?id=61588641423644"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-snackhouse-primary hover:bg-snackhouse-primary/90 text-white px-6 py-3 rounded font-medium transition-colors"
              >
                Send Order via Facebook
              </a>
            </div>
          </>
        )}
      </main>
    </div>
  );
};

export default Cart;