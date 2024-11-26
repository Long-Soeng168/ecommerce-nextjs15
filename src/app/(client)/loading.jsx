// components/Loading.js
import MyLoadingAnimation from "@/components/ui/my-loading-animation";
import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <div className="my-20">
      <MyLoadingAnimation />
    </div>
  );
};

export default Loading;
