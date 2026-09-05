import React from 'react';

const OrderConfirmation: React.FC = () => {
  return (
    <div className="min-h-screen bg-snackhouse-cream text-snackhouse-brown">
      <header className="bg-snackhouse-brown/10 px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-6">
            Order Confirmed!
          </h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-12">
        <p className="text-center text-snackhouse-brown/60">
          Your order has been placed successfully.
        </p>
        <div className="text-center mt-8">
          <a
            href="/"
            className="inline-block bg-snackhouse-brown hover:bg-snackhouse-brown/90 text-white px-8 py-4 rounded-lg font-medium transition-colors"
          >
            Back to Home
          </a>
        </div>
      </main>
    </div>
  );
};

export default OrderConfirmation;