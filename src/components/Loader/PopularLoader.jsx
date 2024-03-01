import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const PopularLoader = () => {
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <Skeleton height={250} width={500} />
      <div className="mt-2 flex flex-col gap-1">
        <Skeleton height={20} width={150} />
        <Skeleton height={15} width={100} />
      </div>
    </SkeletonTheme>
  );
};

export default PopularLoader;
