import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Cart: React.FC = () => {
  const { cartItems, totalItems, totalPrice, clearCart, removeItem, updateQuantity } = useCart();
  const [copied, setCopied] = useState(false);
  const copyReceipt = async () => {
    const receipt = `KAORI'S SNACKHOUSE\n\n${cartItems.map((item) => `${item.quantity}x ${item.name} - ₱${(item.price * item.quantity).toFixed(2)}`).join('\n')}\n\nTOTAL: ₱${totalPrice.toFixed(2)}`;
    await navigator.clipboard?.writeText(receipt);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2400);
  };

  return (
    <div className="cart-page">
      {/* Cart Header */}
      <header className="page-heading">
        <div className="max-w-7xl mx-auto">
          <p className="eyebrow">Before you message us</p>
          <h1 className="display-font">Your order <span>({totalItems} items)</span></h1>
        </div>
      </header>

      <main className="cart-content">
        {totalItems === 0 ? (
          <div className="empty-cart warm-panel">
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
            <div className="cart-items">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="cart-item warm-panel"
                >
                  <div className="cart-item__number">{item.quantity}</div>
                  <div className="flex-1 space-y-2">
                    <h3 className="text-lg font-medium">{item.name}</h3>
                    <p className="text-snackhouse-brown/60">₱{item.price.toFixed(2)} each</p>
                    <div className="quantity-control">
                      <button
                        onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                        className="quantity-button"
                      >
                        -
                      </button>
                      <span className="w-8 text-center font-medium">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="quantity-button"
                      >
                        +
                      </button>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="remove-button"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                  <strong className="cart-item__total">₱{(item.price * item.quantity).toFixed(2)}</strong>
                </div>
              ))}
            </div>

            <div className="cart-summary warm-panel">
              <div className="flex justify-between items-center mb-6">
                <span className="text-lg font-medium">Subtotal</span>
                <span className="text-lg font-medium text-snackhouse-primary">
                  ₱{totalPrice.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm text-snackhouse-brown/60">Pickup total</span>
                <span className="text-sm text-snackhouse-brown/60">
                  ₱{totalPrice.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between items-center font-bold text-lg">
                <span>Total:</span>
                <span className="text-snackhouse-primary">
                  ₱{totalPrice.toFixed(2)}
                </span>
              </div>
            </div>

            <div className="cart-actions">
              <button onClick={copyReceipt} className="copy-receipt-button" type="button">{copied ? 'Receipt copied' : 'Copy receipt'}</button>
              <button
                onClick={clearCart}
                className="secondary-button"
              >
                Clear Cart
              </button>
              <Link to="/checkout" className="action-button">Continue to checkout</Link>
            </div>
          </>
        )}
      </main>
    </div>
  );
};

export default Cart;