import blackRectangle from "../Icons/Rectangle122.svg";
import custQuote from "../Icons/customer-quote.png";
import Rectangle23 from "../Icons/Rectangle23.svg";
import Epiroc from "../Icons/Epiroc.svg";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function ClientStories() {
  return (
    <>
      {/* Desktop view */}
      <div className="px-[120px] py-[80px] xl:flex 2xl:flex lg:hidden sm:hidden md:hidden">
        <div
          style={{ backgroundImage: `url(${blackRectangle})` }}
          className="h-[400px] flex w-[100%]"
        >
          <div className="w-[35%] relative left-[65px] top-[-20px]">
            <img
              src={custQuote}
              alt="custQuote"
              className="rounded-3xl w-[350px]"
            />
          </div>
          <div className="w-[60%]">
            <div className="flex pt-[60px] items-center">
              <img src={Rectangle23} alt="custQuote" />
              <img src={Epiroc} alt="custQuote" className="pl-[15px]" />
              <div className="pl-[15px] text-[24px] text-[#FEFEFE] font-bold leading-none">
                Epiroc
                <br />
                <span className="text-[14px] text-[#E7E7F0] font-normal">
                  infrastructure
                </span>
              </div>
            </div>

            <div className="pt-[40px] pl-[50px] text-[24px] text-[#FEFEFE] font-semibold">
              {`“Generating an internal audit report used to take up to four weeks after we finalized fieldwork. With HighBond, the report is done while we’re on-site.”`}
            </div>

            <div className="text-[18px] text-[#FF5D52] pt-[30px] font-semibold text-right">
              Read more about our clients stories
              <ArrowForwardIosIcon className="!text-[15px] ml-2" />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile view */}
      <div className="p-[20px] xl:hidden 2xl:hidden lg:block sm:block md:block">
        <div
          style={{ backgroundImage: `url(${blackRectangle})` }}
          className="w-[100%]"
        >
          <div className="relative left-[50%] top-[-20px] lg:w-[50%] md:w-[60%] sm:w-[100%]" style={{transform: "translateX(-50%)"}}>
            <img
              src={custQuote}
              alt="custQuote"
              className="rounded-3xl w-[100%] h-[600px]"
            />
          </div>
          <div className="w-[100%]">
            <div className="flex pt-[10px] items-center justify-center">
              <img src={Epiroc} alt="custQuote" className="pl-[15px]" />
              <div className="pl-[15px] text-[24px] text-[#FEFEFE] font-bold leading-none">
                Epiroc
                <br />
                <span className="text-[14px] text-[#E7E7F0] font-normal">
                  infrastructure
                </span>
              </div>
            </div>

            <div className="p-[20px] text-[24px] text-[#FEFEFE] font-semibold text-center">
              {`“Generating an internal audit report used to take up to four weeks after we finalized fieldwork. With HighBond, the report is done while we’re on-site.”`}
            </div>

            <div className="text-[18px] text-[#FF5D52] pt-[10px] pb-[20px] font-semibold text-center">
              Read more about our clients stories
              <ArrowForwardIosIcon className="!text-[15px] ml-2" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ClientStories;
