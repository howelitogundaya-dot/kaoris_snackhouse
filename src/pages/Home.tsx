import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-snackhouse-cream">
      {/* Header with logo */}
      <header className="bg-snackhouse-primary/5 px-4 py-8 border-b border-snackhouse-primary/10">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <div className="relative h-24 w-24 mb-8">
            <img
              src="/kaoris/logofinal.png"
              alt="Kaori's Snackhouse Logo"
              className="h-24 w-24 rounded-full object-cover ring-4 ring-snackhouse-primary/50 shadow-xl hover:scale-110 transition-transform duration-500 ease-out"
            >
            </img>
          </div>
          <h1 className="text-4xl font-bold text-center text-snackhouse-primary mb-3">
            Welcome to Kaori's Snackhouse
          </h1>
          <p className="text-xl text-center text-snackhouse-brown/80 max-w-2xl mx-auto">
            Fresh snacks made daily with love
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-16">
        {/* Hero Section - Most characteristic thing: Filipino snack culture */}
        <section className="mb-24 relative overflow-hidden">
          <div className="relative h-[500px] bg-snackhouse-primary/10 flex items-center justify-center overflow-hidden">
            {/* Background pattern or image */}
            <div className="absolute inset-0 bg-[url('/kaoris/menu\\ 1.jpg')] bg-cover bg-center opacity-25"></div>
            {/* Subtle animated overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-snackhouse-primary/5 to-transparent pointer-events-none"></div>
            <div className="relative z-10 text-center space-y-10">
              <h2 className="text-5xl font-bold text-snackhouse-primary mb-4 tracking-tight">
                Merienda Made Joyful
              </h2>
              <p className="text-snackhouse-brown/60 max-w-2xl leading-relaxed">
                Discover the warmth of Filipino snacking tradition, where every bite tells a story of home and heritage.
              </p>
              <div className="mt-8">
                <Link
                  to="/menu"
                  className="inline-block bg-snackhouse-primary hover:bg-snackhouse-primary/90 text-white px-12 py-6 rounded-xl font-medium transition-all duration-300 hover:scale-[1.03] shadow-lg hover:shadow-xl"
                >
                  Explore Our Treats
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Treats Section */}
        <section className="mb-24">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Featured Treats
          </h2>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {/* Treat 1: Chocolate Chip Cookie */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-400 transform hover:-translate-y-3 group">
              <div className="relative h-60">
                <img
                  src="/kaoris/menu\\ 1.jpg"
                  alt="Chocolate Chip Cookie"
                  className="w-full h-full object-cover"
                >
                </img>
                <div className="absolute bottom-0 left-0 right-0 bg-snackhouse-primary/90 p-3 text-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  Classic Cookie
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-medium mb-3 line-clamp-1">
                  Chocolate Chip Cookie
                </h3>
                <p className="text-snackhouse-brown/60 mb-5 line-clamp-3">
                  Warm, chewy cookies baked fresh daily with premium chocolate chips.
                </p>
                <div className="flex justify-between items-center mt-6 pt-6 border-t border-snackhouse-primary/10">
                  <span className="inline-block bg-snackhouse-primary/10 text-snackhouse-primary px-4 py-2 rounded text-sm font-medium">
                    $3.50
                  </span>
                  <button
                    className="inline-block bg-snackhouse-primary hover:bg-snackhouse-primary/90 text-white px-5 py-3 rounded hover:translate-y[--2px] transition-all duration-300"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>

            {/* Treat 2: Filipino Coffee */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-400 transform hover:-translate-y-3 group">
              <div className="relative h-60">
                <img
                  src="/kaoris/drinks\\ 1.jpg"
                  alt="Iced Coffee"
                  className="w-full h-full object-cover"
                >
                </img>
                <div className="absolute bottom-0 left-0 right-0 bg-snackhouse-primary/90 p-3 text-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  Refreshing Brew
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-medium mb-3 line-clamp-1">
                  Iced Coffee
                </h3>
                <p className="text-snackhouse-brown/60 mb-5 line-clamp-3">
                  Refreshing cold brew with a hint of vanilla, perfect for any time of day.
                </p>
                <div className="flex justify-between items-center mt-6 pt-6 border-t border-snackhouse-primary/10">
                  <span className="inline-block bg-snackhouse-primary/10 text-snackhouse-primary px-4 py-2 rounded text-sm font-medium">
                    $4.50
                  </span>
                  <button
                    className="inline-block bg-snackhouse-primary hover:bg-snackhouse-primary/90 text-white px-5 py-3 rounded hover:translate-y[--2px] transition-all duration-300"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>

            {/* Treat 3: Ube Cake Slice */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-400 transform hover:-translate-y-3 group">
              <div className="relative h-60">
                <img
                  src="/kaoris/menu\\ 2.jpg"
                  alt="Ube Muffin"
                  className="w-full h-full object-cover"
                >
                </img>
                <div className="absolute bottom-0 left-0 right-0 bg-snackhouse-primary/90 p-3 text-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  Purple Yam
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-medium mb-3 line-clamp-1">
                  Ube Muffin
                </h3>
                <p className="text-snackhouse-brown/60 mb-5 line-clamp-3">
                  Purple yam muffin with streusel topping, a delightful blend of flavors.
                </p>
                <div className="flex justify-between items-center mt-6 pt-6 border-t border-snackhouse-primary/10">
                  <span className="inline-block bg-snackhouse-primary/10 text-snackhouse-primary px-4 py-2 rounded text-sm font-medium">
                    $4.00
                  </span>
                  <button
                    className="inline-block bg-snackhouse-primary hover:bg-snackhouse-primary/90 text-white px-5 py-3 rounded hover:translate-y[--2px] transition-all duration-300"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="text-center">
          <Link
            to="/menu"
            className="inline-block bg-snackhouse-primary hover:bg-snackhouse-primary/90 text-white px-12 py-6 rounded-xl font-medium transition-all duration-300 hover:scale-[1.03] shadow-lg hover:shadow-xl"
          >
            View Full Menu
          </Link>
        </section>
      </main>

      <footer className="bg-snackhouse-primary/5 px-4 py-12 mt-24">
        <div className="max-w-7xl mx-auto text-center text-snackhouse-brown/60">
          <p>&copy; 2026 Kaori's Snackhouse. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;