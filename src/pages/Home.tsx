import { useState } from 'react';
import { Link } from 'react-router-dom';

const productTiles = [
  { label: 'Burgers', image: '/kaoris/menu 1.jpg', section: 'burgers' },
  { label: 'Noodles', image: '/kaoris/menu (2).jpg', section: 'noodles' },
  { label: 'Drinks', image: '/kaoris/menu 2.jpg', section: 'summer-drinks' },
  { label: 'Combos', image: '/kaoris/menu 3.jpg', section: 'combos' },
  { label: 'Waffles', image: '/kaoris/menu 4.jpg', section: 'waffles' },
  { label: 'Yakult Soda', image: '/kaoris/menu 5.jpg', section: 'fizzy-specials' },
  { label: 'Fruity Floats', image: '/kaoris/drinks 1.jpg', section: 'fizzy-specials' },
  { label: 'Coke Float', image: '/kaoris/drinks 2.jpg', section: 'fizzy-specials' },
];

const Home: React.FC = () => {
  const [selectedTile, setSelectedTile] = useState<typeof productTiles[number] | null>(null);

  return (
  <div className="home-page">
    <main>
      <section className="home-hero">
        <div className="home-hero__copy">
          <p className="eyebrow">Freshly made · Ready for pickup</p>
          <h1 className="display-font">Good food for every kind of craving.</h1>
          <p>From loaded burgers and crispy fries to bright drinks, creamy shakes, and warm waffles, Kaori's is your neighborhood merienda stop.</p>
          <div className="home-hero__actions"><Link to="/menu" className="action-button">Browse the menu</Link><span>Made to order in small batches</span></div>
        </div>
        <div className="home-hero__image home-hero__brand-panel"><div className="brand-panel__halo"></div><img src="/kaoris/logo.jpg" alt="Kaori's Snackhouse logo" /><p>SNACKS · DRINKS · MERIENDA</p><div className="home-hero__badge"><strong>Kaori's</strong><span>SNACKHOUSE</span></div></div>
      </section>

      <section className="home-categories">
        <div className="section-intro"><div><p className="eyebrow">Find your favorite</p><h2 className="display-font">Something for every mood.</h2></div><Link to="/menu" className="text-link">See full menu <span>→</span></Link></div>
        <div className="product-tiles">{productTiles.map((tile) => <button type="button" className="product-tile" key={tile.label} onClick={() => setSelectedTile(tile)}><img src={tile.image} alt={`${tile.label} menu`} /><span>{tile.label}</span><i>View menu</i></button>)}</div>
      </section>

      <section className="home-order-note"><div><p className="eyebrow">Simple ordering</p><h2 className="display-font">Pick your favorites. We will handle the rest.</h2><p>Choose your size, flavor, sauce, or add-ons in the menu. Review your order, copy the receipt, and send it to Kaori's Facebook chat.</p></div><Link to="/menu" className="action-button">Start an order</Link></section>
    </main>
    <section className="home-location" aria-label="Kaori's Snackhouse location and social media">
      <div>
        <p className="eyebrow">Come and eat with us!</p>
        <h2 className="display-font">Find Kaori's in Tanza.</h2>
        <address>Phase 1, Sec 5, Blk 4, Lot 21 Belvedere Towne 1, Brgy. Paradahan 1, Tanza, Philippines</address>
      </div>
      <div className="home-location__details">
        <p>Food &amp; Drink · Open 1:30 pm to 8 pm</p>
        <a href="https://www.facebook.com/people/Kaoris-Snack-House/61588641423644/?sk=reels_tab" target="_blank" rel="noreferrer" className="facebook-link">Find us on Facebook <span aria-hidden="true">↗</span></a>
      </div>
    </section>
    <footer className="home-footer"><span>© 2026 Kaori's Snackhouse</span><span>Fresh snacks, bright drinks, good merienda.</span></footer>
      {selectedTile && <div className="photo-modal" role="dialog" aria-modal="true" aria-label={`${selectedTile.label} menu photo`} onClick={() => setSelectedTile(null)}><div className="photo-modal__content" onClick={(event) => event.stopPropagation()}><button type="button" className="photo-modal__close" aria-label="Close photo" onClick={() => setSelectedTile(null)}>×</button><img src={selectedTile.image} alt={`${selectedTile.label} full menu`} /><div className="photo-modal__footer"><div><p className="eyebrow">Kaori's menu</p><h2 className="display-font">{selectedTile.label}</h2></div><Link to={`/menu#${selectedTile.section}`} className="action-button" onClick={() => setSelectedTile(null)}>Order from menu</Link></div></div></div>}
  </div>
  );
};

export default Home;
