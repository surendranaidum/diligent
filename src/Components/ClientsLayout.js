import generalMills from "../Icons/General Mills svg.svg";
import cocoCola from "../Icons/Coca-Cola svg.svg";
import interTek from "../Icons/Intertek svg.svg";
import afterPay from "../Icons/Group.svg";
import campari from "../Icons/Campari svg.svg";

function ClientsLayout() {
  return (
    <>
      {/* Desktop view */}
      <div className="mx-[120px] my-[20px] flex justify-between bg-[#F6F8FC] py-[40px] px-[180px] xl:flex 2xl:flex lg:hidden sm:hidden md:hidden">
        <img
          src={generalMills}
          alt="generalMills"
          className="w-[94px] h-[54px]"
        />
        <img src={cocoCola} alt="cocoCola" className="w-[94px] h-[54px]" />
        <img src={interTek} alt="interTek" className="w-[94px] h-[54px]" />
        <img src={afterPay} alt="afterPay" className="w-[94px] h-[54px]" />
        <img src={campari} alt="campari" className="w-[94px] h-[54px]" />
      </div>

      {/* Mobile view */}
      <div className="xl:hidden 2xl:hidden lg:flex sm:flex md:flex p-[20px] justify-between bg-[#F6F8FC]">
        <img
          src={generalMills}
          alt="generalMills"
          className="sm:w-[50px] sm:h-[50px] md:w-[100px] md:h-[100px]"
        />
        <img src={cocoCola} alt="cocoCola" className="sm:w-[50px] sm:h-[50px] md:w-[100px] md:h-[100px]" />
        <img src={interTek} alt="interTek" className="sm:w-[50px] sm:h-[50px] md:w-[100px] md:h-[100px]" />
        <img src={afterPay} alt="afterPay" className="sm:w-[50px] sm:h-[50px] md:w-[100px] md:h-[100px]" />
        <img src={campari} alt="campari" className="sm:w-[50px] sm:h-[50px] md:w-[100px] md:h-[100px]" />
      </div>
    </>
  );
}

export default ClientsLayout;
