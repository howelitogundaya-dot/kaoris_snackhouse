import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-snackhouse-cream flex flex-col items-center justify-center py-20">
      <div className="text-center mb-8">
        <div className="h-20 w-20 mx-auto bg-snackhouse-primary/10 rounded-full flex items-center justify-center mb-4">
          <svg className="h-6 w-6 text-snackhouse-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
          </svg>
        </div>
        <h1 className="text-4xl font-bold text-snackhouse-primary mb-4">404</h1>
        <p className="text-2xl mb-6 text-snackhouse-brown/70">Page not found</p>
        <p className="text-snackhouse-brown/60 max-w-xl">
          It seems the page you're looking for has moved or doesn't exist.
        </p>
      </div>
      <Link
        to="/"
        className="inline-block bg-snackhouse-primary hover:bg-snackhouse-primary/90 text-white px-8 py-4 rounded-lg font-medium transition-colors"
      >
        Return to Homepage
      </Link>
    </div>
  );
};

export default NotFound;