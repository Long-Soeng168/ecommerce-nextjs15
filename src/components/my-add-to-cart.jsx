"use client";
import React from "react";
import { ShoppingCart } from "lucide-react";
import { Button } from "./ui/button";
import { useCart } from "@/contexts/CartContext";

const MyAddToCart = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div>
      <Button onClick={() => addToCart(product)}>
        <ShoppingCart /> ADD TO CART
      </Button>
    </div>
  );
};

export default MyAddToCart;
