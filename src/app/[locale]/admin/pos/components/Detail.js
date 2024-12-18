import Image from "next/image";
import { Sheet } from "@/components/ui/sheet";
import { Button as ShadCNButton } from "@/components/ui/button";
import {
  CheckCircle,
  CircleDollarSignIcon,
  DollarSign,
  ListEnd,
  ListRestart,
  Minus,
  Plus,
  Trash2,
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
        <ScrollArea className="flex-1 pt-1 border-t">
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
                    <span className="relative flex shrink-0 overflow-hidden border-[0.5px] rounded-sm w-16 h-16 m-1">
                      <Image
                        className="w-full h-full aspect-square"
                        height={300}
                        width={300}
                        alt=""
                        src={item.image}
                      />
                    </span>
                  </td>
                  <td>
                    <div className="flex-1 shrink-0">
                      <p className="text-sm line-clamp-2 shrink-0">
                        {item.title}
                      </p>
                      <p className="text-sm text-gray-600 line-clamp-1 shrink-0 whitespace-nowrap ">
                        $ <span className="line-through">{item.price}</span>{" "}
                        <span className="text-destructive">
                          {item.price - item.price * (item.discount / 100)}
                        </span>
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
                      ${" "}
                      {(item.price - item.price * (item.discount / 100)) *
                        item.quantity}
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
          <div className="pt-4 space-y-3 border-t">
            <div className="flex justify-between text-lg">
              <p className="text-black">Customer</p>
              <div>
                <SelectCustomer />
              </div>
            </div>
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
                <DialogTitle>Payment <span className="font-normal text-destructive">($1 = ៛4100)</span></DialogTitle>
                <DialogDescription />
              </DialogHeader>
              <>
                <div className="max-w-full px-4 py-2 text-center bg-gray-200 rounded-lg">
                  <div className="flex items-end gap-2 py-2 text-lg rounded-lg text-primary ">
                    <p>Total ($) : </p>{" "}
                    <p className="text-3xl font-semibold">$50</p>
                  </div>
                  <div className="flex items-end gap-2 py-2 text-lg rounded-lg text-primary ">
                    <p>Total (៛) : </p> <p>200 000 រៀល</p>
                  </div>
                </div>
                {/* Payment Method */}
                <div className="flex items-center justify-between mt-4 mb-2 text-gray-700 text-start">
                  <span> Payment Method</span>{" "}
                  <div>
                    (Customer Credit :{" "}
                    <span className="text-destructive">$321</span>)
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
                          type="number"
                          placeholder="000 រៀល"
                          className="z-10 border rounded-none border-primary"
                        />
                      </div>
                    </div>
                  </div>
                  {/* Return Amount */}
                  <div className="w-full h-auto p-2 mt-6 bg-gray-200 rounded-lg md:mt-0 md:ml-6 md:w-44">
                    <label
                      htmlFor="received-dollar"
                      className="block text-black text-[16px] font-medium mb-1 text-start"
                    >
                      Return Change
                    </label>
                    <div className="flex gap-2 text-lg rounded-lg text-primary">
                      <p>USD: </p> <p>4 $</p>
                    </div>
                    <div className="flex gap-2 text-lg rounded-lg text-primary">
                      <p>KHR: </p> <p>20 000 ៛</p>
                    </div>
                  </div>
                </section>
              </>
              <div className="flex gap-2 mt-2">
                <ShadCNButton
                  size="mySize"
                  variant="myStyle"
                  className="w-full p-2 mt-4 mb-2 text-white rounded-lg bg-primary hover:bg-primary/90"
                >
                  <CheckCircle /> Submit
                </ShadCNButton>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </Sheet>
    </section>
  );
}
