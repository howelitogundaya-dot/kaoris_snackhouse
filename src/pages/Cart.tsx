import React from 'react';

const Cart: React.FC = () => {
  return (
    <div className="min-h-screen bg-snackhouse-cream text-snackhouse-brown">
      <header className="bg-snackhouse-brown/10 px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-6">
            Your Cart
          </h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-12">
        <p className="text-center text-snackhouse-brown/60">
          Your cart is empty.
        </p>
        <div className="text-center mt-8">
          <a
            href="/menu"
            className="inline-block bg-snackhouse-brown hover:bg-snackhouse-brown/90 text-white px-8 py-4 rounded-lg font-medium transition-colors"
          >
            Continue Shopping
          </a>
        </div>
      </main>
    </div>
  );
};

export default Cart;