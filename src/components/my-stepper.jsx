// components/MyStepper.js
import { CheckCircle } from "lucide-react";
import Link from "next/link";
import React from "react";

const MyStepper = ({ currentStep }) => {
  return (
    <div className="flex items-center justify-center p-2 py-8 space-x-8">
      {/* Cart Step */}
      <Link href='/cart' className="flex items-center space-x-2">
        <CheckCircle className={currentStep >= 1 ? "text-blue-600" : "text-gray-400"} />
        <span className={currentStep >= 1 ? "text-blue-600" : "text-gray-400"}>Cart</span>
      </Link>

      <div className="flex-1 border-t border-gray-200"></div>

      {/* Checkout Step */}
      <Link href='/cart/checkout' className="flex items-center space-x-2">
        <CheckCircle className={currentStep === 2 ? "text-blue-600" : "text-gray-400"} />
        <span className={currentStep === 2 ? "text-blue-600" : "text-gray-400"}>Checkout</span>
      </Link>

      <div className="flex-1 border-t border-gray-200"></div>

      {/* Order Summary Step */}
      <div className="flex items-center space-x-2">
        <CheckCircle className={currentStep === 3 ? "text-blue-600" : "text-gray-400"} />
        <span className={currentStep === 3 ? "text-blue-600" : "text-gray-400"}>Success</span>
      </div>
    </div>
  );
};

export default MyStepper;
