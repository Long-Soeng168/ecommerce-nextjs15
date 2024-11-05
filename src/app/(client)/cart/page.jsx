"use client";

import { Button } from "@/components/ui/button";
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

  return (
    <div className="p-6 ">
      <h1 className="mb-8 text-3xl font-bold">Shopping Cart</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-4 font-semibold text-left text-gray-700">
                Item
              </th>
              <th className="p-4 font-semibold text-left text-gray-700">
                Price
              </th>
              <th className="p-4 font-semibold text-left text-gray-700">
                Quantity
              </th>
              <th className="p-4 font-semibold text-left text-gray-700">
                Subtotal
              </th>
              <th className="p-4 font-semibold text-left text-gray-700">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id} className="border-b border-gray-200">
                <td className="flex items-center p-4 space-x-4">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={80}
                    height={80}
                    className="rounded"
                  />
                  <div>
                    <h2 >{item.name}</h2>
                  </div>
                </td>
                <td className="p-4 text-gray-700">${item.price.toFixed(2)}</td>
                <td className="p-4">
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => handleQuantityChange(item.id, -1)}
                      className="px-2 py-1 text-sm font-semibold bg-gray-200 rounded-lg"
                      disabled={item.quantity <= 1}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => handleQuantityChange(item.id, 1)}
                      className="px-2 py-1 text-sm font-semibold bg-gray-200 rounded-lg"
                    >
                      +
                    </button>
                  </div>
                </td>
                <td className="p-4 font-bold text-gray-700">
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
            <tr>
              <td colspan="5">
                <h2 className="p-4 text-2xl font-bold text-end">
                  Total: ${getTotalPrice()}
                </h2>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {cartItems.length > 0 ? (
        <div className="flex justify-between mt-4">
          <Button onClick={() => setCartItems([])} variant="destructive">
            Clear Shopping Cart
          </Button>
          <Button>
            <Link href="/checkout">Proceed to Checkout</Link>
          </Button>
        </div>
      ) : (
        <p className="mt-8 text-center text-gray-500">Your cart is empty.</p>
      )}
    </div>
  );
};

export default CartPage;
