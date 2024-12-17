import Image from "next/image";
import Button from "./Button";
import { Sheet } from "@/components/ui/sheet";
import { Button as ShadCNButton } from "@/components/ui/button";
import {
  CircleDollarSignIcon,
  Hand,
  ListEnd,
  ListRestart,
  LucideImageOff,
  Minus,
  Pencil,
  Plus,
  Trash2,
  Trash2Icon,
  X,
} from "lucide-react";
import { ScrollArea } from "./ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
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

const details = [
  {
    image: "/images/pos/product2.jpg",
    title: "Hario V60 Ceramic Coffee Dripper",
    quantity: "2",
    price: "25.00",
    discount: 5,
  },
  {
    image: "/images/pos/product4.png",
    title: "Breville Barista Express Espresso Machine",
    quantity: "1",
    price: "699.00",
    discount: 15,
  },
  {
    image: "/images/pos/product5.png",
    title: "Chemex Classic Series Coffeemaker",
    quantity: "2",
    price: "45.00",
    discount: 10,
  },
  {
    image: "/images/pos/product3.webp",
    title: "Baratza Encore Coffee Grinder",
    quantity: "1",
    price: "149.00",
    discount: 5,
  },
  {
    image: "/images/pos/book3.jpg",
    title: "Fellow Stagg Pour-Over Kettle",
    quantity: "1",
    price: "79.00",
    discount: 10,
  },
  {
    image: "/images/pos/book1.jpg",
    title: "AeroPress Coffee and Espresso Maker",
    quantity: "2",
    price: "35.00",
    discount: 5,
  },
  {
    image: "/images/pos/book6.jpg",
    title: "OXO Brew Adjustable Temperature Kettle",
    quantity: "1",
    price: "99.00",
    discount: 10,
  },
  {
    image: "/images/pos/product4.png",
    title: "Breville Smart Grinder Pro",
    quantity: "1",
    price: "199.00",
    discount: 10,
  },
  {
    image: "/images/pos/product5.png",
    title: "Kalita Wave 185 Dripper",
    quantity: "2",
    price: "30.00",
    discount: 5,
  },
  {
    image: "/images/pos/product3.webp",
    title: "Fellow Atmos Coffee Canister",
    quantity: "1",
    price: "30.00",
    discount: 10,
  },
  {
    image: "/images/pos/book3.jpg",
    title: "Hario Skerton Pro Ceramic Coffee Mill",
    quantity: "1",
    price: "50.00",
    discount: 5,
  },
  {
    image: "/images/pos/book1.jpg",
    title: "Varia Multi Brewer",
    quantity: "2",
    price: "199.00",
    discount: 10,
  },
  {
    image: "/images/pos/book6.jpg",
    title: "Timemore Nano Scale Black Mirror",
    quantity: "1",
    price: "90.00",
    discount: 10,
  },
];

export default function Detail() {
  if (!details || details.length === 0) {
    return (
      <section className="sticky z-50 top-4">
        <div className="max-w-sm p-4 mx-auto bg-white rounded-lg shadow-lg">
          <h2 className="mb-4 text-lg font-bold">Order Details</h2>
          <p className="text-center text-gray-600">No items to display</p>
        </div>
      </section>
    );
  }

  return (
    <section className="sticky top-0 flex flex-col h-[95vh] md:h-screen">
      <Sheet>
        <h2 className="w-full p-2 text-lg font-bold text-center">
          Order Details
        </h2>
        <ScrollArea className="flex-1 pr-2 space-y-2 border-t">
          <table>
            <tbody>
              <tr>
                <th></th>
                <th className="text-gray-500">Items</th>
                <th className="text-gray-500">Qrt</th>
                <th className="text-gray-500">Total</th>
                <th className="text-gray-500"></th>
              </tr>
              {details.map((item, index) => (
                <tr key={index} className="relative group">
                  <td>
                    <Avatar className="border-[0.5px] rounded-sm w-16 h-16 m-1">
                      <AvatarImage src={item.image} />
                      <AvatarFallback className="border-[0.5px] rounded-sm w-14 h-14 ">
                        <LucideImageOff className="text-gray-400" />
                      </AvatarFallback>
                    </Avatar>
                  </td>
                  <td>
                    <div className="flex-1 shrink-0">
                      <p className="text-sm line-clamp-2 shrink-0">
                        {item.title}
                      </p>
                      <p className="text-sm text-gray-600 line-clamp-1 shrink-0 whitespace-nowrap ">
                        $ <span className="line-through">{item.price}</span>  <span className="text-destructive">{item.price - (item.price * (item.discount / 100))}</span>
                      </p>
                    </div>
                  </td>
                  <td className="p-2">
                    <div className="flex items-center">
                      <ShadCNButton variant="outline" size="xs">
                        <Minus />
                      </ShadCNButton>
                      <p className="mx-2 text-base text-black">
                        {item.quantity}
                      </p>
                      <ShadCNButton variant="outline" size="xs">
                        <Plus />
                      </ShadCNButton>
                    </div>
                  </td>
                  <td className="p-2">
                    <p className="ml-2 text-base text-primary whitespace-nowrap">
                      $ {(item.price - (item.price * (item.discount / 100))) * item.quantity}
                    </p>
                  </td>
                  <td className="p-2">
                    <ShadCNButton variant="ghost" size="xs">
                      <Trash2 className="text-destructive" />
                    </ShadCNButton>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </ScrollArea>
        <div className="px-2">
          {/* Subtotal */}
          <div className="pt-4 mt-4 space-y-3 border-t">
            <div className="flex justify-between text-lg">
              <p className="text-black">Subtotal</p>
              <p className="text-red-600 ">$742.00</p>
            </div>
            <div className="flex justify-between text-lg">
              <p className="flex items-center text-black">Discount</p>
              <div className="flex border-gray-300">
                <span className="z-50 text-destructive">
                  <Select defaultValue="percentage">
                    <SelectTrigger className="w-auto mx-0 border rounded-none">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="min-w-auto">
                      <SelectItem value="percentage">%</SelectItem>
                      <SelectItem value="dollar">$</SelectItem>
                    </SelectContent>
                  </Select>
                </span>
                <input
                  type="number"
                  id="received-dollar"
                  className="w-32 h-full text-lg text-red-600 border outline-none text-end no-spinner "
                  placeholder="0.00"
                />
              </div>
            </div>
            <div className="flex justify-between pt-4 mt-4 text-2xl font-bold border-t">
              <p className="text-black">Total</p>
              <p className="text-red-600">$740.00</p>
            </div>
          </div>

          <Dialog>
            <div className="flex gap-2 mb-2">
              <ShadCNButton
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
                  className="w-full p-2 mt-4 mb-2 text-white rounded-lg bg-primary hover:bg-primary/90"
                >
                  <CircleDollarSignIcon /> Pay Now
                </ShadCNButton>
              </DialogTrigger>
            </div>
            <DialogContent>
              <DialogHeader>
                <DialogTitle />
                <DialogDescription />
                <div>
                  <p className="mb-4 text-2xl font-bold text-center text-black">
                    Payment
                  </p>
                  <hr className="my-4 border-black" />
                  <div>
                    {/* Total Amount */}
                    <div className="max-w-full p-4 text-center rounded-lg ">
                      <div className="py-2 text-3xl text-white rounded-lg bg-primary">
                        $50
                      </div>
                      <div className="mt-3 text-lg text-black">
                        20000.00 <span>រៀល</span>
                      </div>
                    </div>

                    {/* Customer */}
                  </div>

                  {/* Payment Method */}
                  <div className="grid items-center justify-between grid-cols-7 gap-6 my-3 space-x-2">
                    <div className="col-span-4 sm:col-span-4">
                      <p className="text-gray-700 text-start">Payment Method</p>
                      <div className="grid grid-cols-3 space-x-2 sm:flex">
                        <ShadCNButton variant="base">
                          <Image
                            src="/images/pos/dollar.png"
                            width={15}
                            height={15}
                            alt="image"
                          ></Image>
                          <p> Cash</p>
                        </ShadCNButton>
                        <ShadCNButton variant="base">
                          <Image
                            src="/images/pos/credit.png"
                            width={15}
                            height={15}
                            alt="image"
                          ></Image>
                          <p> Card</p>
                        </ShadCNButton>
                        <ShadCNButton variant="base">
                          <Image
                            src="/images/pos/abaPay.png"
                            width={15}
                            height={15}
                            alt="image"
                          ></Image>
                          <p> ABA</p>
                        </ShadCNButton>
                      </div>
                    </div>

                    <div className="col-span-3 sm:col-span-3">
                      <label
                        htmlFor="customer"
                        className="block mb-1 font-medium text-gray-700 text-start"
                      >
                        Customer:
                      </label>

                      <select
                        id="customer"
                        className="w-full p-1 border border-gray-300 "
                      >
                        <option value="">N/A</option>
                        <option value="customer1">Customer 1</option>
                        <option value="customer2">Customer 2</option>
                      </select>
                    </div>
                  </div>

                  <hr className="my-4 border border-[#4d489d] max-w-72 mx-auto border-dashed " />
                  <section className="grid grid-cols-7 gap-2 sm:gap-6">
                    <div className="col-span-7 sm:col-span-4 ">
                      {/* Received Amount */}
                      <div className="mb-4">
                        <label
                          htmlFor="received-dollar"
                          className="block text-black text-[16px] font-medium mb-1 text-start"
                        >
                          Received In Dollar
                        </label>
                        <input
                          type="number"
                          id="received-dollar"
                          className="w-full text-[16px] border-2 text-red-600 border-black p-2 rounded-lg shadow-sm "
                          placeholder=""
                        />
                      </div>
                      <div className="mb-4">
                        <label
                          htmlFor="received-khmer"
                          className="block text-black text-[16px] font-medium mb-1 text-start"
                        >
                          Received In Khmer
                        </label>
                        <input
                          type="number"
                          id="received-khmer"
                          className="w-full text-[16px] border-2 text-red-600 border-black p-2 rounded-lg shadow-sm "
                          placeholder="៛"
                        />
                      </div>
                    </div>
                    {/* Return Amount */}
                    <div className="col-span-7 sm:col-span-3">
                      <p className="text-black text-[16px] mb-1">Return:</p>
                      <div className="p-4 text-black rounded-lg subBgpayMent ">
                        <div className="flex justify-between text-[16px] items-center py-4">
                          <p>Dollar: </p>
                          <p> 2.00 </p>
                          <p> Dollar </p>
                        </div>
                        <div className="flex justify-between text-[16px] items-center py-4">
                          <p>រៀល: </p>
                          <p> 8,000 </p>
                          <p> រៀល </p>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
                <div className="flex gap-2">
                  <ShadCNButton
                    size="mySize"
                    variant="outline"
                    className="w-full p-2 mt-4 mb-2 rounded-lg"
                  >
                    <X /> Cancel
                  </ShadCNButton>

                  <ShadCNButton
                    size="mySize"
                    variant="myStyle"
                    className="w-full p-2 mt-4 mb-2 text-white rounded-lg bg-primary hover:bg-primary/90"
                  >
                    <CircleDollarSignIcon /> Pay
                  </ShadCNButton>
                </div>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      </Sheet>
    </section>
  );
}
