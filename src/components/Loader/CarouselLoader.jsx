import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const CarouselLoader = () => {
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <Skeleton className="h-[75dvh]" />
    </SkeletonTheme>
  );
};

export default CarouselLoader;
