import React from 'react';

const Checkout: React.FC = () => {
  return (
    <div className="min-h-screen bg-snackhouse-cream text-snackhouse-brown">
      <header className="bg-snackhouse-brown/10 px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-6">
            Checkout
          </h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-12">
        <p className="text-center text-snackhouse-brown/60">
          Checkout form will be implemented here.
        </p>
      </main>
    </div>
  );
};

export default Checkout;