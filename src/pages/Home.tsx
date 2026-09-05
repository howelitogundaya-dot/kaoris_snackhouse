import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-snackhouse-cream text-snackhouse-brown">
      <header className="bg-snackhouse-brown/5 px-4 py-8 border-b border-snackhouse-brown/10">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <img
            src="/kaoris/logo.jpg"
            alt="Kaori's Snackhouse Logo"
            className="h-24 w-auto mb-4"
          />
          <h1 className="text-4xl font-bold text-center mb-2">
            Welcome to Kaori's Snackhouse
          </h1>
          <p className="text-xl text-center text-snackhouse-brown/80 max-w-2xl mx-auto">
            Fresh snacks made daily with love
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-12">
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-center">
            Featured Treats
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Placeholder snack cards */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow transform hover:-translate-y-1">
              <div className="h-48 bg-snackhouse-orange/20 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-snackhouse-orange">🍪</span>
              </div>
              <h3 className="text-lg font-medium mb-2 line-clamp-1">
                Chocolate Chip Cookies
              </h3>
              <p className="text-snackhouse-brown/60 mb-4 line-clamp-3">
                Classic cookies baked fresh every morning
              </p>
              <span className="inline-block bg-snackhouse-brown/10 text-snackhouse-brown px-3 py-1 rounded text-sm font-medium">
                $3.50
              </span>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow transform hover:-translate-y-1">
              <div className="h-48 bg-snackhouse-orange/20 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-snackhouse-orange">☕</span>
              </div>
              <h3 className="text-lg font-medium mb-2 line-clamp-1">
                Filipino Coffee
              </h3>
              <p className="text-snackhouse-brown/60 mb-4 line-clamp-3">
                Rich, locally sourced coffee beans
              </p>
              <span className="inline-block bg-snackhouse-brown/10 text-snackhouse-brown px-3 py-1 rounded text-sm font-medium">
                $4.00
              </span>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow transform hover:-translate-y-1">
              <div className="h-48 bg-snackhouse-orange/20 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-snackhouse-orange">🍰</span>
              </div>
              <h3 className="text-lg font-medium mb-2 line-clamp-1">
                Ube Cake Slice
              </h3>
              <p className="text-snackhouse-brown/60 mb-4 line-clamp-3">
                Purple yam cake with coconut frosting
              </p>
              <span className="inline-block bg-snackhouse-brown/10 text-snackhouse-brown px-3 py-1 rounded text-sm font-medium">
                $5.00
              </span>
            </div>
          </div>
        </section>

        <section className="text-center">
          <Link
            to="/menu"
            className="inline-block bg-snackhouse-brown hover:bg-snackhouse-brown/90 text-white px-8 py-4 rounded-lg font-medium transition-colors"
          >
            View Full Menu
          </Link>
        </section>
      </main>

      <footer className="bg-snackhouse-brown/5 px-4 py-8 mt-12">
        <div className="max-w-7xl mx-auto text-center text-snackhouse-brown/60">
          <p>&copy; 2026 Kaori's Snackhouse. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;