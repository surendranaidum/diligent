import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Card from "@mui/material/Card";

function PricingLayout() {
  return (
    <>
      {/* Desktop view */}
      <div className="px-[120px] py-[60px] bg-[#F6F8FC] h-[400px] mt-[100px] flex gap-[5%] xl:flex 2xl:flex lg:hidden sm:hidden md:hidden">
        <div className="w-[45%]">
          <div className="text-[32px] text-[#0D0C38] font-semibold">
            Pricing
          </div>
          <div className="text-[16px] text-[#4C4D69] pt-[15px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget
            mauris nunc. Sed ac lacus quis purus pretium accumsan sit amet sed
            turpis. Donec ac varius nisi, quis faucibus ipsum. Proin id orci sed
            ex rutrum fringilla a ut nunc. Sed sit amet nulla eget magna gravida
            sollicitudin ullamcorper a massa. Mauris ornare finibus neque, sit
            amet dictum leo lacinia vel. Phasellus pulvinar efficitur quam
            ornare pretium
          </div>
          <div className="text-[18px] text-[#E00D00] pt-[30px] font-semibold">
            Pricing details
            <ArrowForwardIosIcon className="!text-[15px] ml-2" />
          </div>
        </div>

        <div className="w-[50%] flex items-center justify-center gap-[50px]">
          <Card className="rounded-[10px] p-[20px] shadow-2xl w-[280px] h-[100px]">
            <div className="text-[16px] text-[#E00D00] font-semibold">
              Enterprise
            </div>
            <div className="text-[36px] text-[#0D0C38] font-bold">
              $100 <span className="text-[16px] font-normal">/ month</span>
            </div>
          </Card>
          <Card className="rounded-[10px] p-[20px] shadow-2xl w-[280px] h-[100px]">
            <div className="text-[16px] text-[#E00D00] font-semibold">
              Non-profit
            </div>
            <div className="text-[36px] text-[#0D0C38] font-bold">
              $50 <span className="text-[16px] font-normal">/ month</span>
            </div>
          </Card>
        </div>
      </div>

      {/* Mobile view */}
      <div className="p-[20px] bg-[#F6F8FC] mt-[20px] xl:hidden 2xl:hidden lg:block sm:block md:block">
        <div className="text-center">
          <div className="text-[32px] text-[#0D0C38] font-semibold">
            Pricing
          </div>
          <div className="text-[16px] text-[#4C4D69] pt-[15px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget
            mauris nunc. Sed ac lacus quis purus pretium accumsan sit amet sed
            turpis. Donec ac varius nisi, quis faucibus ipsum. Proin id orci sed
            ex rutrum fringilla a ut nunc. Sed sit amet nulla eget magna gravida
            sollicitudin ullamcorper a massa. Mauris ornare finibus neque, sit
            amet dictum leo lacinia vel. Phasellus pulvinar efficitur quam
            ornare pretium
          </div>
          <div className="text-[18px] text-[#E00D00] pt-[30px] font-semibold">
            Pricing details
            <ArrowForwardIosIcon className="!text-[15px] ml-2" />
          </div>
        </div>

        <div className="flex items-center justify-center gap-[50px] mt-[20px] sm:flex-col sm:gap-[20px]">
          <Card className="rounded-[10px] p-[20px] shadow-2xl w-[280px] h-[100px]">
            <div className="text-[16px] text-[#E00D00] font-semibold">
              Enterprise
            </div>
            <div className="text-[36px] text-[#0D0C38] font-bold">
              $100 <span className="text-[16px] font-normal">/ month</span>
            </div>
          </Card>
          <Card className="rounded-[10px] p-[20px] shadow-2xl w-[280px] h-[100px]">
            <div className="text-[16px] text-[#E00D00] font-semibold">
              Non-profit
            </div>
            <div className="text-[36px] text-[#0D0C38] font-bold">
              $50 <span className="text-[16px] font-normal">/ month</span>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}

export default PricingLayout;
