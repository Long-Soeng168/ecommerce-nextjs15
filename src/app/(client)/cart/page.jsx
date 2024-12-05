"use client";

import { useEffect, useState } from "react";
import MyStepper from "@/components/my-stepper";
import MySummary from "@/components/my-summary";
import { Button } from "@/components/ui/button";
import { IMAGE_BOOK_URL } from "@/config/env";
import { useCart } from "@/contexts/CartContext";
import Image from "next/image";
import Link from "next/link";

const CartPage = () => {
  const { cartItems, removeFromCart, clearCart, handleQuantityChange } = useCart();
  const [isClient, setIsClient] = useState(false); // Track if it's client-side

  useEffect(() => {
    setIsClient(true); // Set to true once the component is mounted on the client
  }, []);

  if (!isClient) {
    return null; // Don't render anything until it's client-side
  }

  const getTotalPrice = () => {
    return cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const shipping = 5.0;
  const total = subtotal + shipping;

  return (
    <div className="flex flex-col min-h-screen mb-8 lg:px-4">
      <MyStepper currentStep={1} />
      <main className="flex-1 grid grid-cols-1 lg:grid-cols-[4fr_2fr] gap-8 ">
        <div className="p-2 py-4 border rounded-lg shadow-lg lg:p-8 bg-background">
          <div>
            <h1 className="mb-4 text-2xl font-bold">Shopping Cart</h1>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-border bg-background">
                <thead>
                  <tr className="bg-primary/10 dark:bg-border">
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
                          src={IMAGE_BOOK_URL + item.image}
                          alt={item.title}
                          width={80}
                          height={80}
                          className="rounded"
                        />
                      </td>
                      <td className="p-4 min-w-40">
                        <h2 className="line-clamp-3">{item.title}</h2>
                      </td>
                      <td className="p-4">${item.price.toFixed(2)}</td>
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
                          onClick={() => removeFromCart(item)}
                          className="text-red-500 hover:text-red-700"
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <h2 className="p-4 text-2xl font-bold border-b border-l border-r text-end">
                Total: ${getTotalPrice()}
              </h2>
            </div>

            {cartItems.length > 0 ? (
              <div className="flex justify-between mt-4">
                <Button onClick={clearCart} variant="destructive">
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
        <MySummary 
        />
      </main>
    </div>
  );
};

export default CartPage;
