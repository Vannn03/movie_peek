import OtherDetails from "./OtherDetails";
import MainDetails from "./MainDetails";
import BackgroundDetail from "./BackgroundDetail";

const DetailHeader = () => {
  return (
    <div className="from-bg-red-950/35 relative top-0 flex h-[75dvh] w-full items-center gap-12 md:h-full md:flex-col lg:pl-0">
      <BackgroundDetail />

      <MainDetails />

      <OtherDetails />
    </div>
  );
};

export default DetailHeader;
