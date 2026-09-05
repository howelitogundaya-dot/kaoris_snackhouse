export interface MenuItem {
  id: string;
  name: string;
  price?: number;
  detail?: string;
  optionGroups?: OptionGroup[];
}

export interface OptionChoice {
  label: string;
  price?: number;
}

export interface OptionGroup {
  id: string;
  label: string;
  choices: OptionChoice[];
  multiple?: boolean;
}

export interface MenuSection {
  id: string;
  name: string;
  description?: string;
  items: MenuItem[];
  notes?: string[];
}

export const menuSections: MenuSection[] = [
  {
    id: 'burgers',
    name: 'Burger Sandwich',
    items: [
      { id: 'cheese-burger', name: 'Cheese Burger', price: 35, optionGroups: [{ id: 'addons', label: 'Add-on', choices: [{ label: 'None' }, { label: 'Cheese', price: 10 }, { label: 'Egg', price: 15 }, { label: 'Ham', price: 10 }] }] },
      { id: 'cheese-burger-egg', name: 'Cheese Burger with Egg', price: 50, optionGroups: [{ id: 'addons', label: 'Add-on', choices: [{ label: 'None' }, { label: 'Cheese', price: 10 }, { label: 'Ham', price: 10 }] }] },
      { id: 'cheese-burger-ham', name: 'Cheese Burger with Ham', price: 45, optionGroups: [{ id: 'addons', label: 'Add-on', choices: [{ label: 'None' }, { label: 'Cheese', price: 10 }, { label: 'Egg', price: 15 }] }] },
      { id: 'cheese-burger-b1t1', name: 'Cheese Burger Buy 1 Take 1', price: 65, optionGroups: [{ id: 'addons', label: 'Add-on', choices: [{ label: 'None' }, { label: 'Egg', price: 15 }, { label: 'Ham', price: 10 }] }] },
      { id: 'cheese-burger-fries', name: 'Cheese Burger with Fries', price: 50, optionGroups: [{ id: 'addons', label: 'Add-on', choices: [{ label: 'None' }, { label: 'Egg', price: 15 }, { label: 'Ham', price: 10 }] }] },
      { id: 'overload-burger', name: 'Overload Burger', price: 45, optionGroups: [{ id: 'addons', label: 'Add-on', choices: [{ label: 'None' }, { label: 'Cheese', price: 10 }, { label: 'Egg', price: 15 }, { label: 'Ham', price: 10 }] }] },
      { id: 'overload-burger-fries', name: 'Overload Burger with Fries', price: 60, optionGroups: [{ id: 'addons', label: 'Add-on', choices: [{ label: 'None' }, { label: 'Cheese', price: 10 }, { label: 'Egg', price: 15 }, { label: 'Ham', price: 10 }] }] },
    ],
    notes: ['Add-ons: Cheese +₱10, Egg +₱15, Ham +₱10'],
  },
  {
    id: 'fries',
    name: 'French Fries',
    items: [
      {
        id: 'fries', name: 'French Fries', price: 20,
        optionGroups: [
          { id: 'size', label: 'Size', choices: [{ label: 'Small', price: 20 }, { label: 'Medium', price: 30 }, { label: 'Large', price: 40 }, { label: 'Extra Large', price: 100 }] },
          { id: 'flavor', label: 'Flavor', choices: [{ label: 'Cheese' }, { label: 'BBQ' }, { label: 'Sour Cream' }] },
        ],
      },
      { id: 'cheesy-fries', name: 'Cheesy Fries', price: 50, optionGroups: [{ id: 'flavor', label: 'Flavor', choices: [{ label: 'Cheese' }, { label: 'BBQ' }, { label: 'Sour Cream' }] }] },
    ],
    notes: ['Choose a size and flavor before adding to your order.'],
  },
  {
    id: 'milkshakes',
    name: 'Milkshakes',
    items: [
      { id: 'cookies-cream', name: 'Cookies and Cream', price: 20, optionGroups: [{ id: 'size', label: 'Size', choices: [{ label: 'Small', price: 20 }, { label: 'Medium', price: 30 }, { label: 'Large', price: 40 }] }, { id: 'addons', label: 'Add-on', choices: [{ label: 'None' }, { label: 'Nata', price: 5 }, { label: 'Pearl', price: 5 }] }] },
      { id: 'choco-kisses', name: 'Choco Kisses', price: 20, optionGroups: [{ id: 'size', label: 'Size', choices: [{ label: 'Small', price: 20 }, { label: 'Medium', price: 30 }, { label: 'Large', price: 40 }] }, { id: 'addons', label: 'Add-on', choices: [{ label: 'None' }, { label: 'Nata', price: 5 }, { label: 'Pearl', price: 5 }] }] },
      { id: 'choco-hot-fudge', name: 'Choco Hot Fudge', price: 20, optionGroups: [{ id: 'size', label: 'Size', choices: [{ label: 'Small', price: 20 }, { label: 'Medium', price: 30 }, { label: 'Large', price: 40 }] }, { id: 'addons', label: 'Add-on', choices: [{ label: 'None' }, { label: 'Nata', price: 5 }, { label: 'Pearl', price: 5 }] }] },
      { id: 'bubble-gum', name: 'Bubble Gum', price: 20, optionGroups: [{ id: 'size', label: 'Size', choices: [{ label: 'Small', price: 20 }, { label: 'Medium', price: 30 }, { label: 'Large', price: 40 }] }, { id: 'addons', label: 'Add-on', choices: [{ label: 'None' }, { label: 'Nata', price: 5 }, { label: 'Pearl', price: 5 }] }] },
      { id: 'leche-flan', name: 'Leche Flan', price: 20, optionGroups: [{ id: 'size', label: 'Size', choices: [{ label: 'Small', price: 20 }, { label: 'Medium', price: 30 }, { label: 'Large', price: 40 }] }, { id: 'addons', label: 'Add-on', choices: [{ label: 'None' }, { label: 'Nata', price: 5 }, { label: 'Pearl', price: 5 }] }] },
      { id: 'buco-pandan', name: 'Buco Pandan', price: 20, optionGroups: [{ id: 'size', label: 'Size', choices: [{ label: 'Small', price: 20 }, { label: 'Medium', price: 30 }, { label: 'Large', price: 40 }] }, { id: 'addons', label: 'Add-on', choices: [{ label: 'None' }, { label: 'Nata', price: 5 }, { label: 'Pearl', price: 5 }] }] },
      { id: 'mango-shake', name: 'Mango', price: 20, optionGroups: [{ id: 'size', label: 'Size', choices: [{ label: 'Small', price: 20 }, { label: 'Medium', price: 30 }, { label: 'Large', price: 40 }] }, { id: 'addons', label: 'Add-on', choices: [{ label: 'None' }, { label: 'Nata', price: 5 }, { label: 'Pearl', price: 5 }] }] },
      { id: 'avocado-shake', name: 'Avocado', price: 20, optionGroups: [{ id: 'size', label: 'Size', choices: [{ label: 'Small', price: 20 }, { label: 'Medium', price: 30 }, { label: 'Large', price: 40 }] }, { id: 'addons', label: 'Add-on', choices: [{ label: 'None' }, { label: 'Nata', price: 5 }, { label: 'Pearl', price: 5 }] }] },
      { id: 'strawberry-shake', name: 'Strawberry', price: 20, optionGroups: [{ id: 'size', label: 'Size', choices: [{ label: 'Small', price: 20 }, { label: 'Medium', price: 30 }, { label: 'Large', price: 40 }] }, { id: 'addons', label: 'Add-on', choices: [{ label: 'None' }, { label: 'Nata', price: 5 }, { label: 'Pearl', price: 5 }] }] },
      { id: 'caramel-macchiato', name: 'Caramel Macchiato', price: 20, optionGroups: [{ id: 'size', label: 'Size', choices: [{ label: 'Small', price: 20 }, { label: 'Medium', price: 30 }, { label: 'Large', price: 40 }] }, { id: 'addons', label: 'Add-on', choices: [{ label: 'None' }, { label: 'Nata', price: 5 }, { label: 'Pearl', price: 5 }] }] },
    ],
    notes: ['Add-ons: Nata +₱5, Pearl +₱5'],
  },
  {
    id: 'summer-drinks',
    name: "Kaori's Summer Drink Menu",
    items: [
      { id: 'classic-mango', name: 'Classic Mango', detail: 'Choose your size', price: 40, optionGroups: [{ id: 'size', label: 'Size', choices: [{ label: '8 oz', price: 40 }, { label: '12 oz', price: 50 }, { label: '16 oz', price: 60 }] }, { id: 'addons', label: 'Add-on', choices: [{ label: 'None' }, { label: 'Nata', price: 10 }, { label: 'Oreo', price: 10 }, { label: 'Black pearl', price: 10 }] }] },
      { id: 'mango-graham', name: 'Mango Graham', detail: 'Choose your size', price: 50, optionGroups: [{ id: 'size', label: 'Size', choices: [{ label: '8 oz', price: 50 }, { label: '12 oz', price: 60 }, { label: '16 oz', price: 70 }] }, { id: 'addons', label: 'Add-on', choices: [{ label: 'None' }, { label: 'Nata', price: 10 }, { label: 'Oreo', price: 10 }, { label: 'Black pearl', price: 10 }] }] },
      { id: 'mango-oreo', name: 'Mango Oreo', detail: 'Choose your size', price: 50, optionGroups: [{ id: 'size', label: 'Size', choices: [{ label: '8 oz', price: 50 }, { label: '12 oz', price: 60 }, { label: '16 oz', price: 70 }] }, { id: 'addons', label: 'Add-on', choices: [{ label: 'None' }, { label: 'Nata', price: 10 }, { label: 'Oreo', price: 10 }, { label: 'Black pearl', price: 10 }] }] },
    ],
    notes: ['Add-ons: Nata +₱10, Oreo +₱10, Black pearl +₱10'],
  },
  {
    id: 'waffles',
    name: 'Waffle Special Menu',
    items: [
      { id: 'butter-maple', name: 'Butter + Maple', detail: 'Choose your portion', price: 15, optionGroups: [{ id: 'portion', label: 'Portion', choices: [{ label: '1 PC', price: 15 }, { label: '2 PCs', price: 28 }] }] },
      { id: 'strawberry-waffle', name: 'Strawberry', detail: 'Choose your portion', price: 15, optionGroups: [{ id: 'portion', label: 'Portion', choices: [{ label: '1 PC', price: 15 }, { label: '2 PCs', price: 28 }] }] },
      { id: 'chocolate-fudge-waffle', name: 'Chocolate Fudge', detail: 'Choose your portion', price: 20, optionGroups: [{ id: 'portion', label: 'Portion', choices: [{ label: '1 PC', price: 20 }, { label: '2 PCs', price: 38 }] }] },
      { id: 'caramel-fudge-waffle', name: 'Caramel Fudge', detail: 'Choose your portion', price: 20, optionGroups: [{ id: 'portion', label: 'Portion', choices: [{ label: '1 PC', price: 20 }, { label: '2 PCs', price: 38 }] }] },
      { id: 'overload-classic-waffle', name: 'Overload Classic', detail: 'Choose your portion', price: 25, optionGroups: [{ id: 'portion', label: 'Portion', choices: [{ label: '1 PC', price: 25 }, { label: '2 PCs', price: 48 }] }] },
      { id: 'nutella-waffle', name: 'Nutella', price: 35 },
      { id: 'nutella-almond-waffle', name: 'Nutella Almond', price: 40 },
      { id: 'oreo-chocolate-waffle', name: 'Oreo Chocolate', price: 40 },
      { id: 'caramel-banana-waffle', name: 'Caramel Banana', price: 45 },
      { id: 'chocolate-banana-waffle', name: 'Chocolate Banana', price: 45 },
      { id: 'overload-premium-waffle', name: 'Overload Premium', price: 60 },
    ],
    notes: [],
  },
  {
    id: 'combos',
    name: 'Combo Snacks',
    items: [
      { id: 'combo-1', name: 'Combo #1', detail: 'Butter + Maple / Strawberry Waffle + 12oz Sparkling Soda', price: 38 },
      { id: 'combo-2', name: 'Combo #2', detail: 'Chocolate / Caramel Fudge Waffle + 12oz Sparkling Soda', price: 43 },
      { id: 'combo-3', name: 'Combo #3', detail: 'Overload Classic Waffle + 12oz Sparkling Soda', price: 48 },
      { id: 'combo-4', name: 'Combo #4', detail: 'Cheese Waffle + Butter + Maple / Strawberry Waffle + 12oz Soda', price: 53 },
      { id: 'combo-5', name: 'Combo #5', detail: 'Hotdog / Ham and Cheese Waffle + Fudge Waffle + 12oz Soda', price: 68 },
      { id: 'combo-6', name: 'Combo #6', detail: 'Hotdog / Ham and Cheese Waffle + Overload Classic + 12oz Soda', price: 73 },
    ],
  },
  {
    id: 'sodas',
    name: 'Sparkling Sodas',
    items: [
      { id: 'strawberry-soda', name: 'Strawberry', detail: 'Choose your size', price: 15, optionGroups: [{ id: 'size', label: 'Size', choices: [{ label: '8 oz', price: 15 }, { label: '12 oz', price: 25 }, { label: '16 oz', price: 35 }] }] },
      { id: 'blue-lemonade', name: 'Blue Lemonade', detail: 'Choose your size', price: 15, optionGroups: [{ id: 'size', label: 'Size', choices: [{ label: '8 oz', price: 15 }, { label: '12 oz', price: 25 }, { label: '16 oz', price: 35 }] }] },
      { id: 'green-apple-soda', name: 'Green Apple', detail: 'Choose your size', price: 15, optionGroups: [{ id: 'size', label: 'Size', choices: [{ label: '8 oz', price: 15 }, { label: '12 oz', price: 25 }, { label: '16 oz', price: 35 }] }] },
      { id: 'blue-berry-soda', name: 'Blue Berry', detail: 'Choose your size', price: 15, optionGroups: [{ id: 'size', label: 'Size', choices: [{ label: '8 oz', price: 15 }, { label: '12 oz', price: 25 }, { label: '16 oz', price: 35 }] }] },
    ],
  },
  {
    id: 'fizzy-specials',
    name: 'Fizzy Specials',
    items: [
      { id: 'yakult-soda', name: 'Sparkling Yakult Soda', detail: 'Choose your size', price: 40, optionGroups: [{ id: 'size', label: 'Size', choices: [{ label: '12 oz', price: 40 }, { label: '16 oz', price: 50 }] }] },
      { id: 'fruity-soda-float', name: 'Fruity Soda Float', detail: 'Choose your size', price: 35, optionGroups: [{ id: 'size', label: 'Size', choices: [{ label: '12 oz', price: 35 }, { label: '16 oz', price: 45 }] }] },
      { id: 'coke-float', name: 'Coke Float', detail: 'Choose your size', price: 30, optionGroups: [{ id: 'size', label: 'Size', choices: [{ label: '12 oz', price: 30 }, { label: '16 oz', price: 40 }] }] },
    ],
  },
  {
    id: 'ice-cream',
    name: 'Homemade Ice Cream',
    items: [
      { id: 'ice-cream-1', name: '1 Scoop', detail: '1 free topping + 1 syrup', price: 10, optionGroups: [{ id: 'syrup', label: 'Syrup', choices: [{ label: 'Caramel' }, { label: 'Chocolate' }, { label: 'Strawberry' }] }, { id: 'topping', label: 'Topping', choices: [{ label: 'Almonds' }, { label: 'Crushed Oreo' }, { label: 'Chocolate Chips' }, { label: 'Sprinkles' }, { label: 'Marshmallow' }] }] },
      { id: 'ice-cream-2', name: '2 Scoops', detail: '2 free toppings + 1 syrup', price: 18, optionGroups: [{ id: 'syrup', label: 'Syrup', choices: [{ label: 'Caramel' }, { label: 'Chocolate' }, { label: 'Strawberry' }] }, { id: 'topping', label: 'Topping', choices: [{ label: 'Almonds' }, { label: 'Crushed Oreo' }, { label: 'Chocolate Chips' }, { label: 'Sprinkles' }, { label: 'Marshmallow' }] }] },
      { id: 'ice-cream-3', name: '3 Scoops', detail: '3 free toppings + 1 syrup', price: 25, optionGroups: [{ id: 'syrup', label: 'Syrup', choices: [{ label: 'Caramel' }, { label: 'Chocolate' }, { label: 'Strawberry' }] }, { id: 'topping', label: 'Topping', choices: [{ label: 'Almonds' }, { label: 'Crushed Oreo' }, { label: 'Chocolate Chips' }, { label: 'Sprinkles' }, { label: 'Marshmallow' }] }] },
    ],
    notes: ['Syrups: Caramel, Chocolate, Strawberry', 'Toppings: Almonds, Crushed Oreo, Chocolate Chips, White Chocolate Chips, Sprinkles, Marshmallow'],
  },
  {
    id: 'hotdogs',
    name: 'Hotdog Sandwiches and Combos',
    items: [
      { id: 'regular-hotdog', name: 'Regular Hotdog', price: 25 },
      { id: 'b1t1-hotdog', name: 'B1T1 Regular Hotdog', price: 45 },
      { id: 'hotdog-fruity-soda', name: 'Regular Hotdog w/ Fruity Soda', price: 45 },
      { id: 'hotdog-coke-float', name: 'Regular Hotdog w/ Coke Float', price: 50 },
      { id: 'overload-hotdog-fries', name: 'Overload Hotdog with Fries', price: 50 },
      { id: 'overload-hotdog-fruity-soda', name: 'Overload Hotdog with Fries and Fruity Soda', price: 70 },
      { id: 'overload-hotdog-coke', name: 'Overload Hotdog with Fries and Small Coke Float', price: 75 },
      { id: 'hungarian-hotdog', name: 'Hungarian Overload', price: 60 },
      { id: 'hungarian-fruity-soda', name: 'Overload Hungarian with Fries and Fruity Soda', price: 90 },
    ],
    notes: [],
  },
  {
    id: 'noodles',
    name: 'Fried Noodles - Noodle Dishes',
    items: [
      { id: 'plain-noodles', name: 'Plain Fried Noodles', price: 30, optionGroups: [{ id: 'sauces', label: 'Sauces (choose any)', multiple: true, choices: [{ label: 'Teriyaki' }, { label: 'Peanut' }, { label: 'BBQ' }, { label: 'Beef Oyster' }, { label: 'Toyomansi' }, { label: 'Sweet Chili' }] }] },
      { id: 'noodles-siomai-2', name: 'Fried Noodles with Siomai 2pcs', detail: 'Japanese or pork siomai', price: 40, optionGroups: [{ id: 'sauces', label: 'Sauces (choose any)', multiple: true, choices: [{ label: 'Teriyaki' }, { label: 'Peanut' }, { label: 'BBQ' }, { label: 'Beef Oyster' }, { label: 'Toyomansi' }, { label: 'Sweet Chili' }] }] },
      { id: 'noodles-egg', name: 'Fried Noodles with Egg', price: 40, optionGroups: [{ id: 'sauces', label: 'Sauces (choose any)', multiple: true, choices: [{ label: 'Teriyaki' }, { label: 'Peanut' }, { label: 'BBQ' }, { label: 'Beef Oyster' }, { label: 'Toyomansi' }, { label: 'Sweet Chili' }] }] },
      { id: 'noodles-siomai-4', name: 'Fried Noodles with Siomai 4pcs', detail: 'Japanese or pork siomai', price: 50, optionGroups: [{ id: 'sauces', label: 'Sauces (choose any)', multiple: true, choices: [{ label: 'Teriyaki' }, { label: 'Peanut' }, { label: 'BBQ' }, { label: 'Beef Oyster' }, { label: 'Toyomansi' }, { label: 'Sweet Chili' }] }] },
      { id: 'noodles-shanghai', name: 'Fried Noodles with Shanghai 2pcs', price: 50, optionGroups: [{ id: 'sauces', label: 'Sauces (choose any)', multiple: true, choices: [{ label: 'Teriyaki' }, { label: 'Peanut' }, { label: 'BBQ' }, { label: 'Beef Oyster' }, { label: 'Toyomansi' }, { label: 'Sweet Chili' }] }] },
      { id: 'overload-noodles', name: 'Overload Fried Noodles', detail: '4 pcs siomai, 2 pcs shanghai & egg', price: 80, optionGroups: [{ id: 'sauces', label: 'Sauces (choose any)', multiple: true, choices: [{ label: 'Teriyaki' }, { label: 'Peanut' }, { label: 'BBQ' }, { label: 'Beef Oyster' }, { label: 'Toyomansi' }, { label: 'Sweet Chili' }] }] },
    ],
    notes: ['Sauces: Teriyaki, Peanut, BBQ, Beef Oyster, Toyomansi, Sweet Chili'],
  },
];
