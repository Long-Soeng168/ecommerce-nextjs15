"use client";

import MyStepper from "@/components/my-stepper";
import MySummary from "@/components/my-summary";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "MSI MEG Trident X 10SD-1012AU Intel i7 10700K,",
      price: 4349.0,
      quantity: 1,
      image: "/images/products/product1.png",
    },
    {
      id: 2,
      name: "MSI MEG Trident X 10-1012AU Intel i7 10700K, 2070 SUPER, 32GB RAM, 1TB SSD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty",
      price: 4349.0,
      quantity: 1,
      image: "/images/products/product2.png",
    },
  ]);

  const handleQuantityChange = (id, delta) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(item.quantity + delta, 1) }
          : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const getTotalPrice = () => {
    return cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  // Calculate totals
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const shipping = 5.0; // Example flat shipping rate
  const total = subtotal + shipping;

  return (
    <div className="flex flex-col min-h-screen p-4">
      <MyStepper currentStep={1} />
      <main className="flex-1 grid grid-cols-1 lg:grid-cols-[4fr_2fr] gap-8 ">
        {/* Start Left Section */}
        <div className="p-8 border rounded-lg shadow-lg bg-background">
          <div>
          <h1 className="mb-4 text-2xl font-bold">Shopping Cart</h1>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-border bg-background">
                <thead>
                  <tr className="bg-border">
                    <th className="p-4 font-semibold text-left ">Image</th>
                    <th className="p-4 font-semibold text-left ">Item</th>
                    <th className="p-4 font-semibold text-left ">Price</th>
                    <th className="p-4 font-semibold text-left ">Quantity</th>
                    <th className="p-4 font-semibold text-left ">Subtotal</th>
                    <th className="p-4 font-semibold text-left ">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => (
                    <tr key={item.id} className="border-b border-border">
                      <td className="p-4">
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={80}
                          height={80}
                          className="rounded"
                        />
                      </td>
                      <td className="p-4 min-w-40">
                        <h2 className="line-clamp-3">{item.name}</h2>
                      </td>
                      <td className="p-4 ">${item.price.toFixed(2)}</td>
                      <td className="p-4">
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => handleQuantityChange(item.id, -1)}
                            className="px-2 py-1 text-sm font-semibold rounded-lg bg-border"
                            disabled={item.quantity <= 1}
                          >
                            -
                          </button>
                          <span>{item.quantity}</span>
                          <button
                            onClick={() => handleQuantityChange(item.id, 1)}
                            className="px-2 py-1 text-sm font-semibold rounded-lg bg-border"
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td className="p-4 font-bold ">
                        ${(item.price * item.quantity).toFixed(2)}
                      </td>
                      <td className="p-4">
                        <button
                          onClick={() => handleRemoveItem(item.id)}
                          className="text-red-500 hover:text-red-700"
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <h2 className="p-4 text-2xl font-bold border-b text-end">
                Total: ${getTotalPrice()}
              </h2>
            </div>

            {cartItems.length > 0 ? (
              <div className="flex justify-between mt-4">
                <Button onClick={() => setCartItems([])} variant="destructive">
                  Clear Shopping Cart
                </Button>
                <Button>
                  <Link href="/cart/checkout">Proceed to Checkout</Link>
                </Button>
              </div>
            ) : (
              <p className="mt-8 text-center text-gray-500">
                Your cart is empty.
              </p>
            )}
          </div>
        </div>
        {/* End Left Section */}

        {/* Start Right Section */}
        <MySummary cartItems={cartItems} total={total} subtotal={subtotal} shipping={shipping} />
        {/* End Right Section */}
      </main>
    </div>
  );
};

export default CartPage;
