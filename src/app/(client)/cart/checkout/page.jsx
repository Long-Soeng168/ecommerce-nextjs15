"use client";

import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import MySummary from "@/components/my-summary";
import MyStepper from "@/components/my-stepper";
import Link from "next/link";

const cartItems = [
  {
    id: 1,
    name: "MSI MEG Trident X 10SD-1012AU Intel i7 10700K",
    price: 4349.0,
    quantity: 2,
    image: "/images/products/product1.png",
  },
  {
    id: 2,
    name: "MSI MEG Trident X 10-1012AU Intel i7 10700K, 2070 SUPER, 32GB RAM, 1TB SSD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty",
    price: 4349.0,
    quantity: 1,
    image: "/images/products/product2.png",
  },
];

export default function Component() {
  const [paymentMethod, setPaymentMethod] = useState("");

  // Calculate totals
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const shipping = 5.0; // Example flat shipping rate
  const total = subtotal + shipping;

  return (
    <div className="flex flex-col min-h-screen lg:px-4">
      <MyStepper currentStep={2} />
      <main className="flex-1 grid grid-cols-1 lg:grid-cols-[4fr_2fr] gap-8">
        {/* Start Left Section */}
        <div className="p-2 py-4 border rounded-lg shadow-lg lg:p-8 bg-background">
          <h1 className="mb-4 text-2xl font-bold">Checkout</h1>
          <form className="grid grid-cols-2 gap-4">
            <div className="col-span-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Enter your name" />
            </div>
            <div className="col-span-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                type="phone"
                placeholder="Phone number. ex: 06156154"
              />
            </div>
            <div className="col-span-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter email. ex: longsoeng@gmail.com"
              />
            </div>
            <div className="col-span-2">
              <Label htmlFor="address">Address</Label>
              <Textarea id="address" placeholder="Enter your address" />
            </div>
            <div className="col-span-2">
              <Label htmlFor="note">Note</Label>
              <Textarea id="note" placeholder="Enter your note" />
            </div>
            <div className="col-span-2">
              <Label htmlFor="payment-method">Payment Method</Label>
              <Select
                id="payment-method"
                value={paymentMethod}
                onValueChange={(value) => setPaymentMethod(value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select payment method" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pay_on_delivery">
                    Pay On Delivery
                  </SelectItem>
                  <SelectItem value="aba">ABA</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {paymentMethod === "aba" && (
              <div className="col-span-2">
                <Label htmlFor="transaction-upload">
                  Upload Transaction Image
                </Label>
                <Input id="transaction-upload" type="file" accept="image/*" />
              </div>
            )}

            <Link href='/cart/success' className="flex justify-end col-span-2">
              <Button type="submit" size="lg">
                Place Order
              </Button>
            </Link>
          </form>
        </div>
        {/* End Left Section */}

        {/* Start Right Section */}
        <MySummary
          cartItems={cartItems}
          total={total}
          subtotal={subtotal}
          shipping={shipping}
        />
        {/* End Right Section */}
      </main>
    </div>
  );
}
