import bgOne from '@/images/bg-benz.jpg';
import bgTwo from '@/images/bg-benz2.jpg';
import bgThree from '@/images/bg-benz3.jpg';
import bgFive from '@/images/bg-benz4.jpg';
import bmw from '@/images/cars/bentley.png';
import benz from '@/images/cars/benz.png';
import porsche from '@/images/cars/porsche.png';
import audi from '@/images/cars/range.png';
import diamond from '@/images/diamond.png';
import noFee from '@/images/no-fee.png';
import onlineBooking from '@/images/online-booking.png';
import optimization from '@/images/optimization.png';

export const tabs = [
  {
    tabName: 'Distance',
    value: 0,
    border: 'rounded-tl-md',
  },
  {
    tabName: 'Hourly',
    value: 1,
    border: 'rounded-tr-md',
  },
];

export const carsCategory = [
  {
    id: 0,
    name: 'Mercedes - Benz',
    imageUrl:
      'https://images.unsplash.com/photo-1648413653819-7c0fd93e8e6a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=465&q=80',
  },
  {
    id: 1,
    name: 'Audi',
    imageUrl:
      'https://images.unsplash.com/photo-1610880846497-7257b23f6138?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=421&q=80',
  },
  {
    id: 2,
    name: 'BMW',
    imageUrl:
      'https://e0.pxfuel.com/wallpapers/22/927/desktop-wallpaper-bmw-iphone-11.jpg',
  },
  {
    id: 3,
    name: 'Porsche',
    imageUrl:
      'https://images.unsplash.com/photo-1580274455191-1c62238fa333?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cG9yc2NoZSUyMDkxMXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
  },
];

export const trendCars = [
  {
    id: 0,
    name: 'Bentley Continental',
    image: bmw,
    price: 150,
  },
  {
    id: 1,
    name: 'Range Rover Sport',
    image: audi,
    price: 130,
  },
  {
    id: 2,
    name: 'Mercedes - Benz GLC',
    image: benz,
    price: 250,
  },
  {
    id: 3,
    name: 'Lamborghini Aventador',
    image: porsche,
    price: 180,
  },
];

export const serviesData = [
  {
    icon: onlineBooking,
    desc: 'Seamless Booking',
  },
  {
    icon: diamond,
    desc: 'Premium previlages for regular customers',
  },
  {
    icon: optimization,
    desc: 'Change or cancel your booking up to 72 hours before time of pickup',
  },
  {
    icon: noFee,
    desc: 'No recharging fees',
  },
];

export const footerData = [
  {
    title: 'Top Cities',
    data: ['New York', 'London', 'Berlin', 'Abuja', 'Paris'],
  },
  {
    title: 'Explore',
    data: [
      'Intercity rides',
      'Limousine service',
      'Chauffeur service',
      'Private Car service',
      'Airport transfer',
    ],
  },
  {
    title: 'Intercity rides',
    data: [
      'East Hampton - New York',
      'New York - Washington',
      'New York - Philadelphia',
      'Abu Dhabi - Dubai',
      'Paris - Monaco',
    ],
  },
];

export const bgImages = [bgOne, bgThree, bgTwo, bgFive];
