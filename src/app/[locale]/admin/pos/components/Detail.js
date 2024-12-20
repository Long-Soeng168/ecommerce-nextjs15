"use client";
import Image from "next/image";
import { Button as ShadCNButton } from "@/components/ui/button";
import {
  CheckCircle,
  CircleDollarSignIcon,
  ListEnd,
  ListRestart,
} from "lucide-react";
import {
  ScrollArea,
  ScrollBar,
} from "../../../../../components/ui/scroll-area";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import SelectCustomer from "./select-customer";
import { Input } from "@/components/ui/input";
import { usePOSCart } from "@/contexts/POSContext";
import { BASE_API_URL, EXCHANGE_RATE, IMAGE_BOOK_URL } from "@/config/env";
import { useEffect, useState } from "react";
import CartItem from "./cart-item";

export default function Detail() {
  const { clearCart, cartItems, getTotalPrice } = usePOSCart();
  const [isMounted, setIsMounted] = useState(false);
  const [receivedDollar, setReceivedDollar] = useState(0);
  const [receivedRiel, setReceivedRiel] = useState(0);
  const [discountAmount, setDiscountAmount] = useState(0);
  const [discountType, setDiscountType] = useState("percentage");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getTotalRiel = () => {
    return discountType == "percentage"
      ? (
          (getTotalPrice() - (getTotalPrice() * discountAmount) / 100) *
          EXCHANGE_RATE
        )
          .toFixed(0)
          .replace(/\B(?=(\d{3})+(?!\d))/g, " ")
      : ((getTotalPrice() - discountAmount) * EXCHANGE_RATE)
          .toFixed(0)
          .replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };

  const getTotalDollar = () => {
    return discountType == "percentage"
      ? (getTotalPrice() - (getTotalPrice() * discountAmount) / 100).toFixed(2)
      : (getTotalPrice() - discountAmount).toFixed(2);
  };

  const getReturnChangeDollar = () => {
    const rielToDollar = Number(receivedRiel / EXCHANGE_RATE); // Convert riel to dollars
    const totalDollar = Number(receivedDollar); // Convert receivedDollar to a number
    const totalCostDollar = Number(getTotalDollar()); // Get the total cost in dollars

    if (!receivedDollar && !receivedRiel) return 0;

    return (rielToDollar + totalDollar - totalCostDollar).toFixed(2); // Calculate and format to 2 decimal places
  };

  const getReturnChangeRiel = () => {
    return (getReturnChangeDollar() * EXCHANGE_RATE)
      .toFixed(0)
      .replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    const totalReceivedToDollar = Number(receivedRiel / EXCHANGE_RATE); // Convert riel to dollars
    const totalReceivedDollar = Number(receivedDollar);
    if (totalReceivedToDollar + totalReceivedDollar < getTotalDollar()) {
      setError("Total Recieved Less Than Total Cost");
      return null;
    }
    const user = JSON.parse(localStorage.getItem("user"));

    const orderData = {
      customerId: 9999,
      paymentId: 9999,
      total: getTotalDollar(),
      items: cartItems.map((item) => ({
        id: item.id,
        title: item.title,
        image: item.image,
        price: item.price,
        discount: item.discount,
        quantity: item.quantity,
        type: item.type,
      })),
    };
    // console.log(orderData);
    // return null;
    setLoading(true);

    try {
      const response = await fetch(BASE_API_URL + "/invoices", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      });

      if (!response.ok) {
        throw new Error("Failed to place the order. Please contact admin.");
      }

      // Handle success (e.g., navigate to the success page)
      clearCart({ isShowDialog: false });
      // router.push("/cart/success");
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) {
    return null;
  }
  if (!cartItems || cartItems.length === 0) {
    return (
      <section className="sticky z-50 mx-2 my-10 top-4">
        <div className="max-w-sm p-4 mx-auto bg-white rounded-lg shadow-lg">
          <h2 className="mb-4 text-lg font-bold">Order Details</h2>
          <p className="text-center text-gray-600">No items to display</p>
        </div>
      </section>
    );
  }

  return (
    <section className="sticky top-0 flex flex-col h-[95vh] md:h-screen">
      <h2 className="w-full p-2 text-lg font-bold text-center">
        Order Details
      </h2>
      <ScrollArea className="flex-1 pt-1 border-t">
        <table className="w-full">
          <tbody>
            <tr>
              <th></th>
              <th className="text-gray-500">Items</th>
              <th className="text-gray-500">Qrt</th>
              <th className="text-gray-500">Total</th>
              <th className="text-gray-500"></th>
            </tr>
            {cartItems.map((item, index) => (
              <CartItem item={item} key={index} />
            ))}
          </tbody>
        </table>
      </ScrollArea>
      <div className="px-2">
        {/* Subtotal */}
        <div className="pt-4 space-y-3 border-t">
          <div className="flex justify-between text-lg">
            <p className="text-foreground">Customer</p>
            <div>
              <SelectCustomer />
            </div>
          </div>
          <div className="flex justify-between text-lg">
            <p className="text-foreground">Subtotal</p>
            <p className="text-red-600 ">${getTotalPrice().toFixed(2)}</p>
          </div>
          <div className="flex justify-between text-lg">
            <p className="flex items-center text-foreground">Discount</p>
            <div className="flex w-[200px] border-gray-300">
              <span className="z-50 text-destructive translate-x-[0.5px] border-[0.5px] border-primary">
                <Select
                  onValueChange={(value) => setDiscountType(value)}
                  defaultValue={discountType}
                >
                  <SelectTrigger className="justify-center w-12 gap-0 p-1 mx-0 text-lg font-semibold border-none rounded-none shadow-none">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="min-w-auto">
                    <SelectItem value="percentage">%</SelectItem>
                    <SelectItem value="dollar">$</SelectItem>
                  </SelectContent>
                </Select>
              </span>
              <input
                onChange={(e) => setDiscountAmount(e.target.value)}
                type="number"
                className="w-full px-1 border-[0.5px] border-primary h-full text-lg text-primary outline-none text-end no-spinner "
                placeholder="0"
              />
            </div>
          </div>
          <div className="flex justify-between pt-4 mt-4 text-2xl font-bold border-t">
            <p className="text-black">Total</p>
            <p className="text-red-600">$ {getTotalDollar()}</p>
          </div>
        </div>

        <Dialog>
          <div className="flex gap-2 mb-2">
            <ShadCNButton
              onClick={clearCart}
              size="mySize"
              variant="destructive"
              className="w-full p-2 mt-4 mb-2 rounded-lg"
            >
              <ListRestart /> Reset
            </ShadCNButton>
            <ShadCNButton
              size="mySize"
              variant="outline"
              className="w-full p-2 mt-4 mb-2 rounded-lg"
            >
              <ListEnd /> Hold
            </ShadCNButton>

            <DialogTrigger asChild className="w-full">
              <ShadCNButton
                size="mySize"
                variant="myStyle"
                className="w-full p-2 mt-4 mb-2 rounded-lg text-primary-foreground bg-primary hover:bg-primary/90"
              >
                <CircleDollarSignIcon /> Pay Now
              </ShadCNButton>
            </DialogTrigger>
          </div>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>
                Payment{" "}
                <span className="font-normal text-destructive">
                  ($ 1 = ៛ {EXCHANGE_RATE})
                </span>
              </DialogTitle>
              <DialogDescription />
            </DialogHeader>
            <>
              <div className="max-w-full px-4 py-2 text-center bg-gray-200 rounded-lg">
                <div className="flex items-end gap-2 py-2 text-lg rounded-lg text-primary ">
                  <p>Total ($) : </p>{" "}
                  <p className="text-3xl">
                    <span className="text-3xl font-semibold">
                      {getTotalDollar()}
                    </span>
                    <span>{" $"}</span>
                  </p>
                </div>
                <div className="flex items-end gap-2 py-2 text-lg rounded-lg text-primary ">
                  <p>Total (៛) : </p>{" "}
                  <p>
                    <span className="font-semibold tracking-wider">
                      {getTotalRiel()}
                    </span>
                    <span>{" រៀល"}</span>
                  </p>
                </div>
              </div>
              {/* Payment Method */}
              <div className="flex items-center justify-between mt-4 mb-2 text-gray-700 text-start">
                <span>Payment Method</span>{" "}
                <div>
                  (Customer Credit :{" "}
                  <span className="text-destructive">$ 321</span>)
                </div>
              </div>
              <ScrollArea className="w-full pb-3 whitespace-nowrap">
                <div className="flex items-center gap-2">
                  <ShadCNButton variant="outline">
                    <Image
                      src="/images/pos/dollar.png"
                      width={24}
                      height={24}
                      alt="image"
                    ></Image>
                    <p> Cash</p>
                  </ShadCNButton>
                  <ShadCNButton variant="outline">
                    <Image
                      src="/images/pos/credit.png"
                      width={24}
                      height={24}
                      alt="image"
                    ></Image>
                    <p> Card</p>
                  </ShadCNButton>
                  <ShadCNButton variant="outline">
                    <Image
                      src="/images/pos/abaPay.png"
                      width={24}
                      height={24}
                      alt="image"
                    ></Image>
                    <p> ABA</p>
                  </ShadCNButton>
                  <ShadCNButton variant="outline">
                    <Image
                      src="/images/pos/dollar.png"
                      width={24}
                      height={24}
                      alt="image"
                    ></Image>
                    <p>Credit</p>
                  </ShadCNButton>
                </div>
                <ScrollBar orientation="horizontal" />
              </ScrollArea>

              <section className="flex flex-wrap items-center">
                <div className="flex-1">
                  {/* Received Amount */}
                  <div className="mb-4">
                    <label
                      htmlFor="received-dollar"
                      className="block text-black text-[16px] font-medium mb-1 text-start"
                    >
                      Received In Dollar
                    </label>
                    <div className="flex">
                      <span className="flex w-10 items-center text-2xl text-primary justify-center translate-x-[1px] border border-primary">
                        $
                      </span>
                      <Input
                        onChange={(e) => setReceivedDollar(e.target.value)}
                        type="number"
                        placeholder="0.00 $"
                        className="z-10 border rounded-none border-primary"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="received-dollar"
                      className="block text-black text-[16px] font-medium mb-1 text-start"
                    >
                      Received In Riel
                    </label>
                    <div className="flex">
                      <span className="flex w-10 items-center text-2xl text-primary justify-center translate-x-[1px] border border-primary">
                        ៛
                      </span>
                      <Input
                        onChange={(e) => setReceivedRiel(e.target.value)}
                        type="number"
                        placeholder="000 រៀល"
                        className="z-10 border rounded-none border-primary"
                      />
                    </div>
                  </div>
                </div>
                {/* Return Amount */}

                <div className="mt-6 md:mt-0 md:ml-6">
                  <div className="w-full h-auto p-2 bg-gray-200 rounded-lg md:w-44">
                    <label
                      htmlFor="received-dollar"
                      className="block text-black text-[16px] font-medium mb-1 text-start"
                    >
                      Return Change
                    </label>
                    <div className="flex gap-2 text-lg rounded-lg text-primary">
                      <p>USD: </p> <p>{getReturnChangeDollar()} $</p>
                    </div>
                    <div className="flex gap-2 text-lg rounded-lg text-primary">
                      <p>KHR: </p> <p>{getReturnChangeRiel()} ៛</p>
                    </div>
                  </div>
                </div>
              </section>
            </>
            <div className="mt-2">
              <p className="text-destructive">{error}</p>
              <ShadCNButton
                onClick={handleSubmit}
                size="mySize"
                variant="myStyle"
                className="w-full p-2 mt-4 mb-2 text-white rounded-lg bg-primary hover:bg-primary/90"
              >
                <CheckCircle /> {loading ? "Submiting..." : "Submit"}
              </ShadCNButton>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
