import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-snackhouse-cream text-snackhouse-brown flex flex-col items-center justify-center py-12">
      <h1 className="text-4xl font-bold mb-6">404</h1>
      <p className="text-2xl mb-8 text-snackhouse-brown/70">Page not found</p>
      <Link
        to="/"
        className="inline-block bg-snackhouse-brown hover:bg-snackhouse-brown/90 text-white px-8 py-4 rounded-lg font-medium transition-colors"
      >
        Go to Homepage
      </Link>
    </div>
  );
};

export default NotFound;