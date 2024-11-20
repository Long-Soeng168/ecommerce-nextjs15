// components/Loading.js
import MyLoadingAnimation from "@/components/ui/my-loading-animation";
import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <div className="my-20">
      <MyLoadingAnimation />

      <Skeleton className="h-6 max-w-screen-lg mx-auto mb-8" />
      {/* Skeleton for some text paragraphs */}
      <div className="flex gap-4 space-y-2">
        <div className="flex flex-col flex-1 space-y-3">
          <Skeleton className="h-[250px]  rounded-xl" />
          <div className="space-y-2">
            <Skeleton className="h-4 " />
            <Skeleton className="h-4 " />
          </div>
        </div>
        <div className="flex flex-col flex-1 space-y-3">
          <Skeleton className="h-[250px]  rounded-xl" />
          <div className="space-y-2">
            <Skeleton className="h-4 " />
            <Skeleton className="h-4 " />
          </div>
        </div>
        <div className="flex flex-col flex-1 space-y-3">
          <Skeleton className="h-[250px]  rounded-xl" />
          <div className="space-y-2">
            <Skeleton className="h-4 " />
            <Skeleton className="h-4 " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
