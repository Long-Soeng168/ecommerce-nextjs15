// components/MyStepper.js
import { CheckCircle, PackageCheck, ShoppingCart } from "lucide-react";
import Link from "next/link";
import React from "react";

const MyStepper = ({ currentStep }) => {
  return (
    <div className="flex items-center justify-center p-2 py-8 space-x-8">
      {/* Cart Step */}
      <Link href='/cart' className="flex items-center space-x-2">
        <ShoppingCart className={currentStep >= 1 ? "text-primary" : "text-gray-400"} />
        <span className={currentStep >= 1 ? "text-primary" : "text-gray-400"}>Cart</span>
      </Link>

      <div className={currentStep === 2 ? "flex-1 border-t border-primary border-2" : "flex-1 border-t border-2 border-gray-400"}></div>

      {/* Checkout Step */}
      <Link href='/cart/checkout' className="flex items-center space-x-2">
        <PackageCheck className={currentStep === 2 ? "text-primary" : "text-gray-400"} />
        <span className={currentStep === 2 ? "text-primary" : "text-gray-400"}>Checkout</span>
      </Link>

      <div className="flex-1 border-2 border-t border-gray-400"></div>

      {/* Order Summary Step */}
      <div className="flex items-center space-x-2">
        <CheckCircle className={currentStep === 3 ? "text-primary" : "text-gray-400"} />
        <span className={currentStep === 3 ? "text-primary" : "text-gray-400"}>Success</span>
      </div>
    </div>
  );
};

export default MyStepper;
