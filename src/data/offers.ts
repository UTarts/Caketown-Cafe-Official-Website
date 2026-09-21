export interface Offer {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  badge: string;
}

export const offers: Offer[] = [
  {
    id: 'grand-opening',
    title: 'Grand Opening',
    subtitle: 'New Outlet Launch',
    description: 'Celebrate the opening of our newest Caketown location with special festivities.',
    image: 'https://images.pexels.com/photos/32191355/pexels-photo-32191355.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    badge: 'New',
  },
  {
    id: 'festive-special',
    title: 'Festive Special',
    subtitle: 'Seasonal Collection',
    description: 'Limited-edition cakes and treats crafted for the festive season.',
    image: 'https://images.pexels.com/photos/8874015/pexels-photo-8874015.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    badge: 'Seasonal',
  },
  {
    id: 'seasonal-menu',
    title: 'Seasonal Menu',
    subtitle: 'Fresh This Month',
    description: 'New flavours rotating in — ask our team what is fresh today.',
    image: 'https://images.pexels.com/photos/36455119/pexels-photo-36455119.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    badge: 'Limited',
  },
  {
    id: 'celebration-offer',
    title: 'Celebration Offer',
    subtitle: 'Custom Cakes',
    description: 'Planning a birthday or special moment? Talk to us about a custom celebration cake.',
    image: 'https://images.pexels.com/photos/32191357/pexels-photo-32191357.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    badge: 'Custom',
  },
];
