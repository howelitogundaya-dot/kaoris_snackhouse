import useMenu from '../hooks/useMenu';

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

interface MenuCategory {
  id: string;
  name: string;
  items: MenuItem[];
}

const Menu: React.FC = () => {
  const { menuData, loading, error } = useMenu();

  if (loading) {
    return (
      <div className="min-h-screen bg-snackhouse-cream flex items-center justify-center">
        <div className="animate-spin rounded-full border-4 border-snackhouse-primary/20 border-t-snackhouse-primary h-12 w-12"></div>
        <p className="ml-4 text-snackhouse-primary/60">Loading menu...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-snackhouse-cream flex flex-col items-center justify-center py-12">
        <h2 className="text-2xl font-bold text-snackhouse-primary mb-6">Oops!</h2>
        <p className="text-snackhouse-brown/60 mb-8 max-w-xl text-center">
          {error}
        </p>
        <a
          href="/"
          className="inline-block bg-snackhouse-primary hover:bg-snackhouse-primary/90 text-white px-8 py-4 rounded-lg font-medium transition-colors"
        >
          Back to Home
        </a>
      </div>
    );
  }

  if (!menuData || menuData.categories.length === 0) {
    return (
      <div className="min-h-screen bg-snackhouse-cream flex flex-col items-center justify-center py-12">
        <h2 className="text-2xl font-bold text-snackhouse-primary mb-6">No Menu Items</h2>
        <p className="text-snackhouse-brown/60 mb-8 max-w-xl text-center">
          It looks like there are no menu items available right now.
        </p>
        <a
          href="/"
          className="inline-block bg-snackhouse-primary hover:bg-snackhouse-primary/90 text-white px-8 py-4 rounded-lg font-medium transition-colors"
        >
          Back to Home
        </a>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-snackhouse-cream">
      <header className="bg-snackhouse-primary/5 px-4 py-8 border-b border-snackhouse-primary/10">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-center text-snackhouse-primary mb-6">
            Our Menu
          </h1>
          <p className="text-center text-snackhouse-brown/60 max-w-2xl mx-auto">
            Freshly prepared snacks and beverages made with love
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="space-y-12">
          {menuData.categories.map((category: MenuCategory) => (
            <section key={category.id}>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-semibold text-snackhouse-primary">{category.name}</h2>
                <span className="inline-block bg-snackhouse-primary/10 text-snackhouse-primary px-3 py-1 rounded text-sm">
                  {category.items.length} items
                </span>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {category.items.map((item: MenuItem) => (
                  <div
                    key={item.id}
                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow transform hover:-translate-y-1 group"
                  >
                    <div className="relative h-48">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      >
                      </img>
                      <div className="absolute bottom-0 left-0 right-0 bg-snackhouse-primary/90 p-2 text-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                        {item.name.split(' ')[0]}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-medium mb-2 line-clamp-1">
                        {item.name}
                      </h3>
                      <p className="text-snackhouse-brown/60 mb-4 line-clamp-3">
                        {item.description}
                      </p>
                      <div className="flex justify-between items-center mt-4 pt-4 border-t border-snackhouse-primary/10">
                        <span className="inline-block bg-snackhouse-primary/10 text-snackhouse-primary px-3 py-1 rounded text-sm font-medium">
                          ${item.price.toFixed(2)}
                        </span>
                        <button
                          className="inline-block bg-snackhouse-primary hover:bg-snackhouse-primary/90 text-white px-4 py-2 rounded hover:translate-y-[-1px] transition-all"
                        >
                          Add
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Menu;