import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const CastLoader = () => {
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <div className="pb-2">
        <Skeleton height={187} width={130} />
        <div className="mt-2">
          <Skeleton height={15} width={100} />
          <Skeleton height={10} width={75} />
        </div>
      </div>
    </SkeletonTheme>
  );
};

export default CastLoader;
