import React, { useEffect, useState } from "react";
import { Separator } from "./ui/separator";
import Image from "next/image";
import { IMAGE_BOOK_URL } from "@/config/env";
import { useCart } from "@/contexts/CartContext";

const MySummary = () => {
  const { cartItems } = useCart();
  const [isClient, setIsClient] = useState(false); // Track if it's client-side

  useEffect(() => {
    setIsClient(true); // Set to true once the component is mounted on the client
  }, []);

  if (!isClient) {
    return null; // Don't render anything until it's client-side
  }

  const subtotal = cartItems.reduce(
    (acc, item) =>
      acc + (item.price - (item.discount / 100) * item.price) * item.quantity,
    0
  );
  const shipping = 0.0;
  const total = subtotal + shipping;

  return (
    <div className="p-2 py-4 border rounded-lg shadow-lg lg:p-8 bg-background">
      <h2 className="mb-4 text-xl font-bold">Order Summary</h2>
      <div className="space-y-4">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Shipping</span>
          <span>${shipping.toFixed(2)}</span>
        </div>
        <div className="flex justify-between font-bold">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>
      <Separator className="my-4" />
      <div className="space-y-2">
        {cartItems.map((item, index) => (
          <div key={item.id} className="flex items-center gap-4">
            <div className="flex items-center justify-center gap-2">
              <p className="ml-auto font-medium">{index + 1}</p>
              <Image
                src={IMAGE_BOOK_URL + item.image}
                width={50}
                height={50}
                alt={item.title}
                className="object-contain rounded-md aspect-square"
              />
            </div>
            <div>
              <p className="font-medium line-clamp-2">{item.title}</p>
              <p className="text-gray-500">Quantity: {item.quantity}</p>
            </div>
            <p className="ml-auto font-medium">
              $
              {(
                (item.price - (item.discount / 100) * item.price) *
                item.quantity
              ).toFixed(2)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MySummary;
