import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { menuSections, MenuSection, MenuItem } from '../data/menu';

const sectionLabels: Record<string, string> = { burgers: 'Burgers', fries: 'Fries', milkshakes: 'Shakes', 'summer-drinks': 'Drinks', waffles: 'Waffles', combos: 'Combos', sodas: 'Sodas', 'fizzy-specials': 'Floats', 'ice-cream': 'Ice cream', hotdogs: 'Hotdogs', noodles: 'Noodles' };

const MenuCard = ({ section }: { section: MenuSection }) => {
  const { addItem } = useCart();

  return (
    <section className="menu-section" id={section.id}>
      <div className="menu-section__heading">
        <div>
          <p className="eyebrow">Kaori's picks</p>
          <h2 className="display-font">{section.name}</h2>
        </div>
        <span className="menu-section__count">{section.items.length} items</span>
      </div>
      <div className="menu-grid">
        {section.items.map((item) => <ConfigurableMenuItem key={item.id} item={item} addItem={addItem} />)}
      </div>
      {section.notes && <div className="menu-notes">{section.notes.map((note) => <p key={note}>{note}</p>)}</div>}
    </section>
  );
};

const ConfigurableMenuItem = ({ item, addItem }: { item: MenuItem; addItem: ReturnType<typeof useCart>['addItem'] }) => {
  const [selections, setSelections] = useState<Record<string, string[]>>(() => Object.fromEntries((item.optionGroups || []).map((group) => [group.id, group.multiple ? [] : [group.choices[0].label]])));
  const selectedChoices = (item.optionGroups || []).flatMap((group) => (selections[group.id] || []).map((label) => group.choices.find((choice) => choice.label === label) || group.choices[0]));
  const selectedPrice = item.price === undefined ? undefined : (item.optionGroups || []).reduce((total, group) => {
    const choices = (selections[group.id] || []).map((label) => group.choices.find((choice) => choice.label === label)).filter(Boolean);
    if (group.id === 'size' || group.id === 'portion') return choices[0]?.price ?? total;
    return total + choices.reduce((sum, choice) => sum + (choice?.price ?? 0), 0);
  }, item.price);
  const selectedName = selectedChoices.length ? `${item.name} (${selectedChoices.map((choice) => choice.label).join(', ')})` : item.name;
  const updateSingle = (groupId: string, value: string) => setSelections((current) => ({ ...current, [groupId]: [value] }));
  const toggleMultiple = (groupId: string, value: string, checked: boolean) => setSelections((current) => ({ ...current, [groupId]: checked ? [...(current[groupId] || []), value] : (current[groupId] || []).filter((choice) => choice !== value) }));

  return (
    <article className="menu-item menu-item--configurable">
      <div className="menu-item__copy"><h3>{item.name}</h3>{item.detail && <p>{item.detail}</p>}
        {item.optionGroups && <div className="option-fields">{item.optionGroups.map((group) => group.multiple ? <fieldset className="checkbox-options" key={group.id}><legend>{group.label}</legend>{group.choices.map((choice) => <label key={choice.label}><input type="checkbox" checked={(selections[group.id] || []).includes(choice.label)} onChange={(event) => toggleMultiple(group.id, choice.label, event.target.checked)} />{choice.label}</label>)}</fieldset> : <label key={group.id}>{group.label}<select value={selections[group.id]?.[0]} onChange={(event) => updateSingle(group.id, event.target.value)}>{group.choices.map((choice) => <option key={choice.label} value={choice.label}>{choice.label}{choice.price && group.id !== 'flavor' && group.id !== 'syrup' && group.id !== 'topping' ? ` - ₱${choice.price}` : ''}</option>)}</select></label>)}</div>}
      </div>
      <div className="menu-item__action">{selectedPrice !== undefined ? <strong>₱{selectedPrice}</strong> : <strong className="price-unavailable">Chat for price</strong>}<button type="button" disabled={selectedPrice === undefined} onClick={() => selectedPrice !== undefined && addItem({ id: `${item.id}-${selectedChoices.map((choice) => choice.label).join('-')}`, name: selectedName, price: selectedPrice, image: '/kaoris/logo.jpg' })} className="add-button">{selectedPrice !== undefined ? 'Add' : 'Ask'}</button></div>
    </article>
  );
};

const Menu: React.FC = () => {
  const [activeSection, setActiveSection] = useState('all');
  const { totalItems } = useCart();
  const visibleSections = activeSection === 'all' ? menuSections : menuSections.filter((section) => section.id === activeSection);

  return (
    <div className="menu-page">
      <header className="menu-hero">
        <div>
          <p className="eyebrow">Order for pickup through Facebook</p>
          <h1 className="display-font">The menu, made for merienda.</h1>
          <p>Fresh comfort food, bright drinks, and little treats for every kind of craving.</p>
        </div>
        <Link to="/cart" className="action-button">Your order <span className="hero-cart-count">{totalItems}</span></Link>
      </header>
      <div className="menu-toolbar">
        <div className="menu-tabs" role="tablist" aria-label="Menu sections">
          <button type="button" className={activeSection === 'all' ? 'is-selected' : ''} onClick={() => setActiveSection('all')}>All</button>
          {menuSections.map((section) => <button type="button" key={section.id} className={activeSection === section.id ? 'is-selected' : ''} onClick={() => setActiveSection(section.id)}>{sectionLabels[section.id]}</button>)}
        </div>
      </div>
      <main className="menu-content">{visibleSections.map((section) => <MenuCard key={section.id} section={section} />)}</main>
    </div>
  );
};

export default Menu;
