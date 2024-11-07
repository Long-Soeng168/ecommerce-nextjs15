import React from "react";
import { Separator } from "./ui/separator";
import Image from "next/image";

const MySummary = ({ total, subtotal, shipping, cartItems }) => {
  return (
    <div className="p-8 border rounded-lg shadow-lg bg-background">
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
        {cartItems.map((item) => (
          <div key={item.id} className="flex items-center gap-4">
            <Image
              src={item.image}
              width={60}
              height={60}
              alt={item.name}
              className="object-cover rounded-md aspect-square"
            />
            <div>
              <p className="font-medium line-clamp-2">{item.name}</p>
              <p className="text-gray-500">Quantity: {item.quantity}</p>
            </div>
            <p className="ml-auto font-medium">
              ${(item.price * item.quantity).toFixed(2)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MySummary;
