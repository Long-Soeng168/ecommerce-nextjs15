import Detail from "@/components/Detail";

// import { Sheet } from "@/components/ui/sheet";

import POSHeader from "./components/pos-header";
import POSFilter from "./components/pos-filter";
import DataList from "./components/data-list";

export default function Home() {
  return (
    <>
      <div className="flex mx-auto max-w-screen-2xl ">
        <div className="flex-1 h-screen overflow-x-auto overflow-y-auto custom-scrollbar">
          <div className="sticky top-0 z-50 bg-primary/80">
            <POSHeader />
          </div>
          <POSFilter />
          <DataList />
        </div>
        <div className="hidden lg:px-2 lg:border-x-2 border-primary w-[450px] lg:block">
          <Detail />
        </div>
      </div>
      {/* 
      <main className="mx-auto md:grid md:grid-cols-12 max-w-screen-2xl">
        <section className="col-span-12 md:col-span-9 "></section>
        <section className="hidden ml-2 md:grid md:col-span-3">
        </section>
      </main> */}
    </>
  );
}
