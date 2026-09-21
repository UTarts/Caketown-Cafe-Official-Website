export interface GalleryImage {
  id: string;
  url: string;
  alt: string;
  span?: 'tall' | 'wide' | 'normal';
}

export const galleryImages: GalleryImage[] = [
  {
    id: 'g1',
    url: 'https://images.pexels.com/photos/28402363/pexels-photo-28402363.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Decadent chocolate cake slice with icing on a white plate',
    span: 'tall',
  },
  {
    id: 'g2',
    url: 'https://images.pexels.com/photos/15801079/pexels-photo-15801079.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Barista creating intricate latte art in a café',
    span: 'normal',
  },
  {
    id: 'g3',
    url: 'https://images.pexels.com/photos/35081225/pexels-photo-35081225.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Vibrant donuts with colorful sprinkles',
    span: 'normal',
  },
  {
    id: 'g4',
    url: 'https://images.pexels.com/photos/33313218/pexels-photo-33313218.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Charming cafe interior with pastries on display',
    span: 'wide',
  },
  {
    id: 'g5',
    url: 'https://images.pexels.com/photos/20677473/pexels-photo-20677473.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Brightly colored cupcakes topped with berries',
    span: 'normal',
  },
  {
    id: 'g6',
    url: 'https://images.pexels.com/photos/37418881/pexels-photo-37418881.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Cheesecake slice with raspberry sauce and pistachios',
    span: 'tall',
  },
  {
    id: 'g7',
    url: 'https://images.pexels.com/photos/18160775/pexels-photo-18160775.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Pink strawberry cake slice with fresh fruit',
    span: 'normal',
  },
  {
    id: 'g8',
    url: 'https://images.pexels.com/photos/5709521/pexels-photo-5709521.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Friends enjoying coffee together in a cafe',
    span: 'wide',
  },
  {
    id: 'g9',
    url: 'https://images.pexels.com/photos/14122678/pexels-photo-14122678.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Croissant with fresh blueberries on a plate',
    span: 'normal',
  },
  {
    id: 'g10',
    url: 'https://images.pexels.com/photos/36455119/pexels-photo-36455119.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Vibrant assortment of macarons',
    span: 'normal',
  },
  {
    id: 'g11',
    url: 'https://images.pexels.com/photos/30576077/pexels-photo-30576077.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Chocolate cake slice topped with pistachios',
    span: 'tall',
  },
  {
    id: 'g12',
    url: 'https://images.pexels.com/photos/23948793/pexels-photo-23948793.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Freshly baked chocolate cookies on a wooden board',
    span: 'normal',
  },
];
