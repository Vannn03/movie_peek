import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const NowAndUpcomingLoader = () => {
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <div className="flex items-center gap-4 p-4">
        <Skeleton height={125} width={75} />
        <div className="flex flex-col gap-2">
          <Skeleton height={20} width={200} />
          <Skeleton height={20} width={100} />
        </div>
      </div>
    </SkeletonTheme>
  );
};

export default NowAndUpcomingLoader;
