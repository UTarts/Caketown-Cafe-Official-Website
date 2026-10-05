export type MenuCategory = 'cakes' | 'pastries' | 'desserts' | 'coffee' | 'shakes' | 'donuts';

export interface MenuItem {
  id: string;
  name: string;
  category: MenuCategory;
  description: string;
  image: string;
  price?: string; // Made optional to prevent TypeScript errors in other components
}

// ==========================================
// 🚨 THIS WAS MISSING AND CAUSED THE CRASH
// ==========================================
export const categories: { id: MenuCategory; label: string }[] = [
  { id: 'cakes', label: 'Cakes' },
  { id: 'pastries', label: 'Pastries' },
  { id: 'desserts', label: 'Desserts' },
  { id: 'coffee', label: 'Coffee' },
  { id: 'shakes', label: 'Shakes' },
  { id: 'donuts', label: 'Donuts' },
];

export const menuItems: MenuItem[] = [
  // --- CAKES (16) ---
  { id: 'c1', category: 'cakes', name: 'Black Forest', description: 'Classic chocolate sponge with fresh cream and cherries.', image: '/1.webp' },
  { id: 'c2', category: 'cakes', name: 'Red Velvet', description: 'Rich red velvet sponge with premium cream cheese frosting.', image: '/2.webp' },
  { id: 'c3', category: 'cakes', name: 'Pineapple Delight', description: 'Vanilla sponge layered with fresh cream and pineapple chunks.', image: '/3.webp' },
  { id: 'c4', category: 'cakes', name: 'Butterscotch Crunch', description: 'Caramelised nuts and butterscotch cream on a vanilla base.', image: '/4.webp' },
  { id: 'c5', category: 'cakes', name: 'Chocolate Truffle', description: 'Dense chocolate cake loaded with dark chocolate ganache.', image: '/5.webp' },
  { id: 'c6', category: 'cakes', name: 'White Forest', description: 'Vanilla sponge, white chocolate flakes, and sweet cherries.', image: '/6.webp' },
  { id: 'c7', category: 'cakes', name: 'Fresh Strawberry', description: 'Seasonal fresh strawberries folded into light whipped cream.', image: '/7.webp' },
  { id: 'c8', category: 'cakes', name: 'Blueberry Bliss', description: 'Wild blueberry compote layered in a soft vanilla sponge.', image: '/8.webp' },
  { id: 'c9', category: 'cakes', name: 'Mango Alphonso', description: 'Seasonal mango cream cake made with real Alphonso puree.', image: '/9.webp' },
  { id: 'c10', category: 'cakes', name: 'Choco Vanilla', description: 'The perfect marbled blend of dark chocolate and vanilla bean.', image: '/10.webp' },
  { id: 'c11', category: 'cakes', name: 'Coffee Walnut', description: 'Espresso-infused sponge with roasted walnuts and coffee cream.', image: '/11.webp' },
  { id: 'c12', category: 'cakes', name: 'Salted Caramel', description: 'Vanilla sponge layered with house-made salted caramel sauce.', image: '/12.webp' },
  { id: 'c13', category: 'cakes', name: 'Mixed Fresh Fruit', description: 'A light vanilla cake topped with a bounty of fresh seasonal fruits.', image: '/13.webp' },
  { id: 'c14', category: 'cakes', name: 'Hazelnut Praline', description: 'Rich chocolate sponge with crunchy hazelnut praline paste.', image: '/14.webp' },
  { id: 'c15', category: 'cakes', name: 'Classic Vanilla', description: 'Simple, elegant, and timeless Madagascar vanilla bean cake.', image: '/15.webp' },
  { id: 'c16', category: 'cakes', name: 'Rainbow Celebration', description: 'Six vibrant layers of vanilla sponge with buttercream.', image: '/16.webp' },

  // --- PASTRIES (8) ---
  { id: 'p1', category: 'pastries', name: 'Black Forest Pastry', description: 'A slice of our classic black forest cake.', image: '/Black Forest Pastry (1).webp' },
  { id: 'p2', category: 'pastries', name: 'Red Velvet Pastry', description: 'A slice of rich red velvet with cream cheese.', image: '/Honey Almond Pastry.webp' },
  { id: 'p3', category: 'pastries', name: 'Pineapple Pastry', description: 'Light, fruity, and refreshing pineapple slice.', image: '/Fresh Fruit Pastry.webp' },
  { id: 'p4', category: 'pastries', name: 'Chocolate Truffle Pastry', description: 'Decadent dark chocolate truffle in a personal slice.', image: '/Belgium Chocochip Pastry.webp' },
  { id: 'p5', category: 'pastries', name: 'Butterscotch Pastry', description: 'Crunchy butterscotch praline slice.', image: '/Biscoff Cheescake Pastry.webp' },
  { id: 'p6', category: 'pastries', name: 'Blueberry Pastry', description: 'Sweet Blueberry cream layered pastry.', image: '/Blue Berry Pastry.webp' },
  { id: 'p7', category: 'pastries', name: 'Mango Pastry', description: 'Seasonal mango cream slice.', image: '/Fresh Fruit Pastry.webp' },
  { id: 'p8', category: 'pastries', name: 'Choco Mocha Pastry', description: 'Chocolate and coffee layered perfection.', image: '/Belgium Chocochip Pastry.webp' },

  // --- DESSERTS (4) ---
  { id: 'd1', category: 'desserts', name: 'Chocolate Mousse', description: 'Airy, rich Belgian chocolate mousse cup.', image: '/Choco Chip Pudding.webp' },
  { id: 'd2', category: 'desserts', name: 'Caramel Pudding', description: 'Silky smooth custard with a dark caramel glaze.', image: '/pudding.webp' },
  { id: 'd3', category: 'desserts', name: 'Sizzling Brownie', description: 'Warm walnut brownie served with vanilla ice cream.', image: '/Choco Chip Pudding.webp' },
  { id: 'd4', category: 'desserts', name: 'Tiramisu Cup', description: 'Coffee-soaked ladyfingers with mascarpone cheese.', image: '/pudding.webp' },

  // --- COFFEE (4) ---
  { id: 'cf1', category: 'coffee', name: 'Cappuccino', description: 'Perfectly extracted espresso with steamed milk and thick foam.', image: '/Cappuccino (1).webp' },
  { id: 'cf2', category: 'coffee', name: 'Cafe Latte', description: 'Smooth espresso topped with silky steamed milk.', image: '/Americano (1).webp' },
  { id: 'cf3', category: 'coffee', name: 'Espresso', description: 'A rich, bold, and concentrated shot of pure coffee.', image: '/Espresso.webp' },
  { id: 'cf4', category: 'coffee', name: 'Cafe Mocha', description: 'Espresso blended with rich chocolate and steamed milk.', image: '/Cappuccino (1).webp' },

  // --- SHAKES (8) ---
  { id: 's1', category: 'shakes', name: 'Oreo Crunch Shake', description: 'Thick vanilla shake blended with crushed Oreo cookies.', image: '/Oreo Shake.webp' },
  { id: 's2', category: 'shakes', name: 'Classic Chocolate', description: 'Rich chocolate ice cream blended with cold milk.', image: '/Chocolate Milkshake.webp' },
  { id: 's3', category: 'shakes', name: 'Strawberry Dream', description: 'Sweet strawberries blended into a thick, creamy shake.', image: '/StrawberryShake.webp' },
  { id: 's4', category: 'shakes', name: 'Vanilla Bean', description: 'Classic, smooth Madagascar vanilla shake.', image: '/Classic Vanilla Shake.webp' },
  { id: 's5', category: 'shakes', name: 'Mango Smoothie', description: 'Fresh mangoes blended into a refreshing thick shake.', image: '/Mango Shake.webp' },
  { id: 's6', category: 'shakes', name: 'KitKat Break', description: 'Chocolate shake loaded with crunchy KitKat pieces.', image: '/Kit Kat Shake.webp' },
  { id: 's7', category: 'shakes', name: 'Cold Coffee Frappe', description: 'Our signature blended ice coffee.', image: '/Cold Coffee (1).webp' },
  { id: 's8', category: 'shakes', name: 'Butterscotch Shake', description: 'Caramel and butterscotch blended into a sweet treat.', image: '/Caramel Toffee and Nut Praline Shake.webp' },

  // --- DONUTS (4) ---
  { id: 'dn1', category: 'donuts', name: 'Chocolate Glaze', description: 'Soft fluffy donut dipped in rich chocolate ganache.', image: '/Donut Chocolate.webp' },
  { id: 'dn2', category: 'donuts', name: 'Strawberry Sprinkle', description: 'Pink strawberry icing topped with rainbow sprinkles.', image: '/Donut Chocolate (2) (1).webp' },
  { id: 'dn3', category: 'donuts', name: 'Cinnamon Sugar', description: 'Classic warm donut tossed in cinnamon and sugar.', image: '/Donut Butter Scotch.webp' },
  { id: 'dn4', category: 'donuts', name: 'Vanilla Custard', description: 'Filled with smooth vanilla custard and dusted with icing sugar.', image: '/Donut Chocolate.webp' },
];