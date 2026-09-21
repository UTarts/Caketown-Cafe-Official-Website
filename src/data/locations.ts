export interface Location {
  id: string;
  name: string;
  area: string;
  address: string;
  phone: string;
  hours: string;
  image: string;
  directionsUrl: string;
}

export const locations: Location[] = [
  {
    id: 'chowk-bajaja',
    name: 'Chowk Bajaja',
    area: 'Flagship Outlet',
    address: '[Add street address], Chowk Bajaja',
    phone: '+91 [phone number]',
    hours: 'Open daily — hours to be confirmed',
    image: 'https://images.pexels.com/photos/33313218/pexels-photo-33313218.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    directionsUrl: 'https://maps.google.com/?q=Chowk+Bajaja',
  },
  {
    id: 'bhangwa-chungi',
    name: 'Bhangwa Chungi',
    area: 'Bakery & Cafe',
    address: '[Add street address], Bhangwa Chungi',
    phone: '+91 [phone number]',
    hours: 'Open daily — hours to be confirmed',
    image: 'https://images.pexels.com/photos/32459865/pexels-photo-32459865.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    directionsUrl: 'https://maps.google.com/?q=Bhangwa+Chungi',
  },
  {
    id: 'ambedkar-chauraha',
    name: 'Ambedkar Chauraha',
    area: 'Express Counter',
    address: '[Add street address], Ambedkar Chauraha',
    phone: '+91 [phone number]',
    hours: 'Open daily — hours to be confirmed',
    image: 'https://images.pexels.com/photos/18617712/pexels-photo-18617712.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    directionsUrl: 'https://maps.google.com/?q=Ambedkar+Chauraha',
  },
];
