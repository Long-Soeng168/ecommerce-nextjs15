// components/Loading.js
import MyLoadingAnimation from "@/components/ui/my-loading-animation";
import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <div className="my-20">
      <MyLoadingAnimation />

      {/* Skeleton for some text paragraphs */}
      <div className="flex h-[50vh] gap-4">
        <div className="hidden w-64 space-y-2 lg:inline-block">
          <Skeleton className="w-full h-full mx-auto mb-8" />
        </div>
        <div className="flex flex-1 gap-2 space-y-2">
          <div className="w-40 space-y-2">
            <Skeleton className="w-full aspect-[6/9] mx-auto mb-8" />
          </div>
          <div className="flex-1 space-y-2">
            <Skeleton className="h-4 mx-auto" />
            <Skeleton className="h-4 mx-auto" />
            <Skeleton className="h-4 mx-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
