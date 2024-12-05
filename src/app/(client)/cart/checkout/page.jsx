"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import MySummary from "@/components/my-summary";
import MyStepper from "@/components/my-stepper";
import Link from "next/link";
import { useCart } from "@/contexts/CartContext";
import { useState } from "react";

export default function Component() {
  const { cartItems } = useCart();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    note: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const orderData = {
      ...formData,
      items: cartItems.map((item) => ({
        id: item.id,
        title: item.title,
        price: item.price,
        quantity: item.quantity,
      })),
    };
    // console.log(orderData);

    setLoading(true);
    setError(null);

    try {
      const response = await fetch("https://scholar.brolong.pro/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      });

      if (!response.ok) {
        throw new Error("Failed to place the order. Please try again.");
      }

      // Handle success (e.g., navigate to the success page)
      window.location.href = "/cart/success";
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen mb-8 lg:px-4">
      <MyStepper currentStep={2} />
      <main className="flex-1 grid grid-cols-1 lg:grid-cols-[4fr_2fr] gap-8">
        {/* Start Left Section */}
        <div className="p-2 py-4 border rounded-lg shadow-lg lg:p-8 bg-background">
          <h1 className="mb-4 text-2xl font-bold">Checkout</h1>
          <form className="grid grid-cols-2 gap-4" onSubmit={handleSubmit}>
            <div className="col-span-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>
            <div className="col-span-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                type="phone"
                placeholder="ex: 06156154"
                value={formData.phone}
                onChange={handleInputChange}
              />
            </div>
            <div className="col-span-2">
              <Label htmlFor="note">Note</Label>
              <Textarea
                id="note"
                placeholder="Enter your note"
                value={formData.note}
                onChange={handleInputChange}
              />
            </div>

            <div className="flex justify-end col-span-2">
              <Button type="submit" size="lg" disabled={loading}>
                {loading ? "Placing Order..." : "Place Order"}
              </Button>
            </div>
          </form>
          {error && <p className="mt-4 text-center text-red-500">{error}</p>}
        </div>
        {/* End Left Section */}

        {/* Start Right Section */}
        <MySummary />
        {/* End Right Section */}
      </main>
    </div>
  );
}
