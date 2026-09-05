import React from 'react';

const OrderConfirmation: React.FC = () => {
  return (
    <div className="confirmation-page">
      <header className="page-heading">
        <div className="max-w-7xl mx-auto">
          <p className="eyebrow">Message window opened</p>
          <h1 className="display-font">Finish your order in Messenger</h1>
        </div>
      </header>

      <main className="confirmation-content warm-panel">
        <p className="text-center text-snackhouse-brown/60">
          Your order summary was copied to your clipboard. In Messenger, tap the message box and paste it so Kaori's team can confirm your order and pickup time.
        </p>
        <div className="text-center mt-8">
          <a
            href="/"
            className="action-button"
          >
            Back to Home
          </a>
        </div>
      </main>
    </div>
  );
};

export default OrderConfirmation;