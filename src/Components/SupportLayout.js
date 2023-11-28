import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Security from "../Icons/security.svg";
import Support from "../Icons/support.svg";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";

function SupportLayout() {
  return (
    <>
      {/* Desktop view */}
      <div className="h-[500px] bg-[#282E37] flex items-center px-[120px] py-[20px] gap-[50px] xl:flex 2xl:flex lg:hidden sm:hidden md:hidden">
        <div className="w-[100%] pr-[150px]">
          <div className="text-[48px] text-[#FDFDFD] font-bold leading-none">
            Ready to get started or want a demo?
          </div>
          <div className="text-[18px] text-[#F6F8FC] font-semibold pt-[25px]">
            Reach out to our sales team, and we’ll work with you to schedule a
            demo or conversation.
          </div>
          <Button
            variant="contained"
            className="bg-[#E00D00] text-[#FDFDFD] text-[18px] normal-case font-semibold mt-[30px]"
          >
            Contact Sales <ArrowForwardIosIcon className="!text-[15px] ml-2" />
          </Button>
        </div>

        <div>
          <div className="flex items-center gap-[10px]">
            <img src={Security} alt="heroImage" className="w-[24px] h-[24px]" />
            <div className="text-[24px] text-[#FFF] font-semibold">
              Security
            </div>
          </div>
          <div className="text-[18px] text-[#F6F8FC] pt-[25px] font-semibold">
            Ensuring your data is protected is critical to Diligent learn how we
            protect your data
          </div>
          <div className="text-[18px] text-[#E00D00] pt-[40px] font-semibold">
            Visit Trust center
            <ArrowForwardIosIcon className="!text-[15px] ml-2" />
          </div>
        </div>

        <Divider
          orientation="vertical"
          flexItem
          className="bg-[#D0D5E7] h-[200px] mt-[120px]"
        />

        <div>
          <div className="flex items-center gap-[10px]">
            <img src={Support} alt="heroImage" className="w-[24px] h-[24px]" />
            <div className="text-[24px] text-[#FFF] font-semibold">Support</div>
          </div>
          <div className="text-[18px] text-[#F6F8FC] pt-[25px] font-semibold">
            Our customer service team is here for you works 24/7/365
          </div>
          <div className="text-[18px] text-[#E00D00] pt-[40px] font-semibold">
            Learn more
            <ArrowForwardIosIcon className="!text-[15px] ml-2" />
          </div>
        </div>
      </div>

      {/* Mobile view */}
      <div className="bg-[#282E37] p-[20px] pt-[50px] xl:hidden 2xl:hidden lg:block sm:block md:block text-center">
        <div className="w-[100%]">
          <div className="text-[48px] text-[#FDFDFD] font-bold leading-none md:text-[38px] sm:text-[28px]">
            Ready to get started or want a demo?
          </div>
          <div className="text-[18px] text-[#F6F8FC] font-semibold pt-[25px]">
            Reach out to our sales team, and we’ll work with you to schedule a
            demo or conversation.
          </div>
          <Button
            variant="contained"
            className="bg-[#E00D00] text-[#FDFDFD] text-[18px] normal-case font-semibold mt-[30px]"
          >
            Contact Sales <ArrowForwardIosIcon className="!text-[15px] ml-2" />
          </Button>
        </div>

        <div>
          <div className="flex items-center gap-[10px] justify-center mt-[20px]">
            <img src={Security} alt="heroImage" className="w-[24px] h-[24px]" />
            <div className="text-[24px] text-[#FFF] font-semibold">
              Security
            </div>
          </div>
          <div className="text-[18px] text-[#F6F8FC] pt-[5px] font-semibold">
            Ensuring your data is protected is critical to Diligent learn how we
            protect your data
          </div>
          <div className="text-[18px] text-[#E00D00] pt-[5px] font-semibold">
            Visit Trust center
            <ArrowForwardIosIcon className="!text-[15px] ml-2" />
          </div>
        </div>

        <div>
          <div className="flex items-center gap-[10px] justify-center mt-[30px]">
            <img src={Support} alt="heroImage" className="w-[24px] h-[24px]" />
            <div className="text-[24px] text-[#FFF] font-semibold">Support</div>
          </div>
          <div className="text-[18px] text-[#F6F8FC] pt-[5px] font-semibold">
            Our customer service team is here for you works 24/7/365
          </div>
          <div className="text-[18px] text-[#E00D00] pt-[5px] font-semibold">
            Learn more
            <ArrowForwardIosIcon className="!text-[15px] ml-2" />
          </div>
        </div>
      </div>
    </>
  );
}

export default SupportLayout;
