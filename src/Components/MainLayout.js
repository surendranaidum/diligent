import mainBackground from "../Icons/mainBackground.png";
import circle from "../Icons/Vector (3).png";
import Button from "@mui/material/Button";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import heroImage from "../Icons/hero-image.png";

function MainLayout() {
  return (
    <>
      {/* Desktop view */}
      <div
        style={{ backgroundImage: `url(${mainBackground})` }}
        className="bg-repeat-round bg-cover h-[800px] flex items-center justify-around ml-[200px] xl:flex 2xl:flex lg:hidden sm:hidden md:hidden"
      >
        <div className="w-[540px] relative left-[-70px]">
          <div className="flex items-center">
            <img src={circle} alt="circle" className="w-[20px] h-[20px]" />
            <span className="ml-[10px] text-[14px] text-[#526580] font-semibold">
              INTERNAL AUDIT MANAGEMENT
            </span>
          </div>
          <div className="text-[48px] text-[#222] font-semibold">
            Data-Driven
          </div>
          <div className="text-[48px] text-[#222] font-semibold">
            with <span className="text-[#E00D00]">ACL Analytics</span>
          </div>
          <p className="text-[18px] text-[#282E37]">
            Deliver a strategic advantage that helps your organization stay
            ahead of emerging risks, providing the Board and the C-Suite with
            visibility for informed, risk-based decision making.
          </p>
          <div className="mt-[45px]">
            <Button
              variant="contained"
              className="bg-[#E00D00] w-[180px] text-[18px] normal-case font-semibold"
            >
              Talk to sales{" "}
              <ArrowForwardIosIcon className="!text-[15px] ml-2" />
            </Button>
            <span className="text-[#E00D00] ml-[30px]">
              Learn more <ArrowForwardIosIcon className="!text-[15px] ml-2" />
            </span>
          </div>
        </div>

        <div>
          <img
            src={heroImage}
            alt="heroImage"
            className="w-[800px] h-[650px]"
          />
        </div>
      </div>

      {/* Mobile/ view */}
      <div className="xl:hidden 2xl:hidden lg:block sm:block md:block p-[20px] bg-[#F6F8FC]">
        <div className="text-center px-[50px]">
          <div className="flex items-center justify-center">
            <img src={circle} alt="circle" className="w-[20px] h-[20px] sm:hidden" />
            <span className="ml-[10px] text-[14px] text-[#526580] font-semibold">
              INTERNAL AUDIT MANAGEMENT
            </span>
          </div>
          <div className="text-[48px] text-[#222] font-semibold md:text-[38px] sm:text-[30px]">
            Data-Driven
          </div>
          <div className="text-[48px] text-[#222] font-semibold md:text-[38px] sm:text-[30px]">
            with <span className="text-[#E00D00]">ACL Analytics</span>
          </div>
          <p className="text-[18px] text-[#282E37]">
            Deliver a strategic advantage that helps your organization stay
            ahead of emerging risks, providing the Board and the C-Suite with
            visibility for informed, risk-based decision making.
          </p>
          <div className="mt-[45px]">
            <Button
              variant="contained"
              className="bg-[#E00D00] w-[180px] text-[18px] normal-case font-semibold"
            >
              Talk to sales{" "}
              <ArrowForwardIosIcon className="!text-[15px] ml-2" />
            </Button>
            <span className="text-[#E00D00] ml-[30px] sm:block sm:pt-[10px]">
              Learn more <ArrowForwardIosIcon className="!text-[15px] ml-2" />
            </span>
          </div>
        </div>

        <div>
          <img
            src={heroImage}
            alt="heroImage"
          />
        </div>
      </div>
    </>
  );
}

export default MainLayout;
