"use client";

import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
} from "@/components/ui/alert-dialog";

import Lottie from "lottie-react";
import animationData from "/public/images/animations/success-animation.json";
import { Button } from "@/components/ui/button";
import { ReceiptTextIcon, X } from "lucide-react";

export default function SuccessDialog({
  isOpen = false,
  setIsOpen,
  title = "Success",
  message = "",
}) {
  return (
    <AlertDialog open={isOpen} onOpenChange={(state) => setIsOpen(state)}>
      <AlertDialogContent className="w-auto overflow-hidden">
        <AlertDialogHeader>
          <AlertDialogHeader className="flex items-center justify-center">
            <Lottie
              animationData={animationData}
              className="flex items-center justify-center w-60"
              loop={false}
            />
          </AlertDialogHeader>
          <AlertDialogTitle className="text-center">{title}</AlertDialogTitle>
          <AlertDialogDescription>{message}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className={`mt-4 gap-2`}>
          <Button
            onClick={() => setIsOpen(false)}
            type="button"
            variant="outline"
          >
            <X />
            Close
          </Button>
          <Button type="button">
            <ReceiptTextIcon />
            Print Invoice
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
