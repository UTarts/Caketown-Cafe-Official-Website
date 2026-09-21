export type MenuCategory = 'cakes' | 'pastries' | 'desserts' | 'coffee' | 'snacks';

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  category: MenuCategory;
  featured?: boolean;
}

export interface Category {
  id: MenuCategory;
  label: string;
  image: string;
  color: string;
}

export const categories: Category[] = [
  {
    id: 'cakes',
    label: 'Cakes',
    image: 'https://images.pexels.com/photos/28402363/pexels-photo-28402363.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    color: '#F47A1F',
  },
  {
    id: 'pastries',
    label: 'Pastries',
    image: 'https://images.pexels.com/photos/14122678/pexels-photo-14122678.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    color: '#E43838',
  },
  {
    id: 'desserts',
    label: 'Desserts',
    image: 'https://images.pexels.com/photos/37418881/pexels-photo-37418881.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    color: '#4A2418',
  },
  {
    id: 'coffee',
    label: 'Coffee',
    image: 'https://images.pexels.com/photos/15801079/pexels-photo-15801079.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    color: '#F47A1F',
  },
  {
    id: 'snacks',
    label: 'Snacks',
    image: 'https://images.pexels.com/photos/23948793/pexels-photo-23948793.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    color: '#E43838',
  },
];

export const menuItems: MenuItem[] = [
  {
    id: 'choco-fudge',
    name: 'Chocolate Fudge Cake',
    description: 'Rich layered chocolate sponge with silky fudge ganache.',
    price: '₹—',
    image: 'https://images.pexels.com/photos/28402363/pexels-photo-28402363.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'cakes',
    featured: true,
  },
  {
    id: 'strawberry-cream',
    name: 'Strawberry Cream Cake',
    description: 'Vanilla sponge, fresh strawberries and whipped cream.',
    price: '₹—',
    image: 'https://images.pexels.com/photos/18160775/pexels-photo-18160775.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'cakes',
  },
  {
    id: 'celebration-cake',
    name: 'Celebration Cake',
    description: 'Custom-decorated cakes for every special occasion.',
    price: '₹—',
    image: 'https://images.pexels.com/photos/32191355/pexels-photo-32191355.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'cakes',
  },
  {
    id: 'pistachio-cake',
    name: 'Pistachio Chocolate Cake',
    description: 'Decadent chocolate with crunchy pistachio topping.',
    price: '₹—',
    image: 'https://images.pexels.com/photos/30576077/pexels-photo-30576077.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'cakes',
  },
  {
    id: 'butter-croissant',
    name: 'Butter Croissant',
    description: 'Flaky, golden, baked fresh every morning.',
    price: '₹—',
    image: 'https://images.pexels.com/photos/14122678/pexels-photo-14122678.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'pastries',
    featured: true,
  },
  {
    id: 'chocolate-croissant',
    name: 'Chocolate Croissant',
    description: 'Buttery croissant filled with rich chocolate.',
    price: '₹—',
    image: 'https://images.pexels.com/photos/3892468/pexels-photo-3892468.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'pastries',
  },
  {
    id: 'berry-tart',
    name: 'Berry Tart',
    description: 'Crisp pastry shell with fresh berries and cream.',
    price: '₹—',
    image: 'https://images.pexels.com/photos/17650199/pexels-photo-17650199.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'pastries',
  },
  {
    id: 'choco-tart',
    name: 'Chocolate Tart',
    description: 'Dark chocolate ganache in a buttery tart shell.',
    price: '₹—',
    image: 'https://images.pexels.com/photos/31544097/pexels-photo-31544097.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'desserts',
    featured: true,
  },
  {
    id: 'cheesecake',
    name: 'Berry Cheesecake',
    description: 'Creamy cheesecake with raspberry sauce.',
    price: '₹—',
    image: 'https://images.pexels.com/photos/37418881/pexels-photo-37418881.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'desserts',
  },
  {
    id: 'blueberry-cheesecake',
    name: 'Blueberry Cheesecake',
    description: 'Fresh blueberries atop silky cheesecake.',
    price: '₹—',
    image: 'https://images.pexels.com/photos/37857737/pexels-photo-37857737.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'desserts',
  },
  {
    id: 'macaron-assortment',
    name: 'Macaron Selection',
    description: 'Delicate French macarons in seasonal flavours.',
    price: '₹—',
    image: 'https://images.pexels.com/photos/36455119/pexels-photo-36455119.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'desserts',
  },
  {
    id: 'latte',
    name: 'Specialty Latte',
    description: 'Espresso with steamed milk and signature art.',
    price: '₹—',
    image: 'https://images.pexels.com/photos/15801079/pexels-photo-15801079.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'coffee',
    featured: true,
  },
  {
    id: 'pour-over',
    name: 'Pour Over Coffee',
    description: 'Single-origin beans, brewed to order.',
    price: '₹—',
    image: 'https://images.pexels.com/photos/5151354/pexels-photo-5151354.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'coffee',
  },
  {
    id: 'cat-latte',
    name: 'Cat Latte',
    description: 'Our signature latte with a playful twist.',
    price: '₹—',
    image: 'https://images.pexels.com/photos/15801008/pexels-photo-15801008.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'coffee',
  },
  {
    id: 'sprinkle-donut',
    name: 'Sprinkle Donuts',
    description: 'Glazed donuts with rainbow sprinkles.',
    price: '₹—',
    image: 'https://images.pexels.com/photos/35081225/pexels-photo-35081225.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'snacks',
    featured: true,
  },
  {
    id: 'choc-chip-cookies',
    name: 'Chocolate Chip Cookies',
    description: 'Warm, gooey-centred cookies baked fresh.',
    price: '₹—',
    image: 'https://images.pexels.com/photos/23948793/pexels-photo-23948793.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'snacks',
  },
  {
    id: 'assorted-cookies',
    name: 'Assorted Cookies',
    description: 'A mix of our most-loved daily cookies.',
    price: '₹—',
    image: 'https://images.pexels.com/photos/38179907/pexels-photo-38179907.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'snacks',
  },
  {
    id: 'cupcake-raspberry',
    name: 'Berry Cupcakes',
    description: 'Fluffy cupcakes topped with fresh berries.',
    price: '₹—',
    image: 'https://images.pexels.com/photos/20677473/pexels-photo-20677473.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'desserts',
  },
  {
    id: 'cupcake-celebration',
    name: 'Celebration Cupcakes',
    description: 'Boldly iced cupcakes for every celebration.',
    price: '₹—',
    image: 'https://images.pexels.com/photos/8874015/pexels-photo-8874015.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'desserts',
  },
];

export const featuredCarouselItems = menuItems.filter((item) => item.featured);
