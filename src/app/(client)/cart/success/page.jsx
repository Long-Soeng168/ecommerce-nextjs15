// components/PageSuccess.js
import React from 'react';
import { CheckCircle } from "lucide-react";
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const PageSuccess = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-50">
      <CheckCircle className="w-20 h-20 text-green-500" />

      <h1 className="mt-4 text-3xl font-semibold text-gray-800">Thank you for your order!</h1>
      <p className="mt-2 text-gray-600">Your order has been successfully placed.</p>
      <p className="mt-2 text-gray-600">We will get back to you as soon as possible.</p>
      
      <Link href="/" passHref>
        <Button className="mt-6">
          Return to Homepage
        </Button>
      </Link>
    </div>
  );
};

export default PageSuccess;