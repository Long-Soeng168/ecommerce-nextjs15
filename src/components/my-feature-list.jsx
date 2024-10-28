import React from 'react';
import { Truck, ShieldCheck, HelpCircle, Smartphone } from 'lucide-react';

const features = [
  {
    icon: <Truck />,
    title: "Free Delivery",
    description: "Free, fast, reliable delivery on orders over $99.00",
  },
  {
    icon: <ShieldCheck />,
    title: "Secure Payment",
    description: "Refer a friend to our site & get surprise gifts",
  },
  {
    icon: <HelpCircle />,
    title: "24/7 Help Center",
    description: "Feel free to call us & get the best support service",
  },
  {
    icon: <Smartphone />,
    title: "Shop with our App",
    description: "A safer, faster, & more secure way to pay online",
  },
];

const MyFeatureList = () => {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-4">
      {features.map((feature, index) => (
        <div
          key={index}
          className="flex flex-col items-center p-6 transition-shadow duration-300 border rounded-lg shadow border-border bg-background hover:shadow-lg "
        >
          <div className="mb-4 text-4xl text-indigo-500 dark:text-indigo-400">
            {feature.icon}
          </div>
          <h3 className="text-lg font-semibold text-center text-gray-800 dark:text-gray-100">
            {feature.title}
          </h3>
          <p className="mt-2 text-sm text-center text-gray-600 dark:text-gray-400">
            {feature.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default MyFeatureList;
