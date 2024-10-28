import React from 'react';
import { Truck, ShieldCheck, HelpCircle, Smartphone } from 'lucide-react';
import MyFeatureCard from './ui/my-feature-card';

const features = [
  {
    id: 1,
    icon: <Truck />,
    title: "Free Delivery",
    description: "Free, fast, reliable delivery on orders over $99.00",
  },
  {
    id: 2,
    icon: <ShieldCheck />,
    title: "Secure Payment",
    description: "Refer a friend to our site & get surprise gifts",
  },
  {
    id: 3,
    icon: <HelpCircle />,
    title: "24/7 Help Center",
    description: "Feel free to call us & get the best support service",
  },
  {
    id: 4,
    icon: <Smartphone />,
    title: "Shop with our App",
    description: "A safer, faster, & more secure way to pay online",
  },
];

const MyFeatureList = () => {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-4">
      {features.map((feature) => (
        <MyFeatureCard feature={feature} key={feature.id}/>
      ))}
    </div>
  );
};

export default MyFeatureList;
