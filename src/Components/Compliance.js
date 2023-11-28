import compliance1 from "../Icons/compliance1.svg";
import compliance2 from "../Icons/compliance2.svg";
import compliance3 from "../Icons/compliance3.svg";
import compliance4 from "../Icons/compliance4.svg";
import compliance5 from "../Icons/compliance5.svg";
import compliance6 from "../Icons/compliance6.svg";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function Compliance() {
  return (
    <>
      {/* Desktop view */}
      <div className="bg-[#F6F8FC] h-[540px] flex flex-col items-center justify-center px-[250px] py-[20px] xl:flex 2xl:flex lg:hidden sm:hidden md:hidden">
        <div className="text-[32px] text-[#0D0C38] font-semibold text-center">
          We are committed to providing a robust and secure service that
          protects our customers’ data.
        </div>
        <div className="text-[16px] text-[#4C4D69] px-[65px] py-[20px]">
          Diligent’s Security Program is governed based on NIST Cybersecurity
          Framework and Diligent follows ISO/IEC 27001 standards to keep
          information assets secureby implementing an Information Security
          Management System (ISMS).
        </div>
        <div className="flex pt-[20px] justify-between w-[1000px]">
          <img
            src={compliance1}
            alt="heroImage"
            className="w-[90px] h-[90px]"
          />
          <img
            src={compliance2}
            alt="heroImage"
            className="w-[90px] h-[90px]"
          />
          <img
            src={compliance3}
            alt="heroImage"
            className="w-[90px] h-[90px]"
          />
          <img
            src={compliance4}
            alt="heroImage"
            className="w-[90px] h-[90px]"
          />
          <img
            src={compliance5}
            alt="heroImage"
            className="w-[90px] h-[90px]"
          />
          <img
            src={compliance6}
            alt="heroImage"
            className="w-[90px] h-[90px]"
          />
        </div>

        <div className="text-[18px] text-[#E00D00] pt-[40px] font-semibold text-right">
          Read more about compliance and certifications
          <ArrowForwardIosIcon className="!text-[15px] ml-2" />
        </div>
      </div>

      {/* Mobile view */}
      <div className="bg-[#F6F8FC] flex flex-col items-center justify-center p-[20px] xl:hidden 2xl:hidden lg:flex sm:flex md:flex">
        <div className="text-[32px] text-[#0D0C38] font-semibold text-center sm:text-[25px]">
          We are committed to providing a robust and secure service that
          protects our customers’ data.
        </div>
        <div className="text-[16px] text-[#4C4D69] px-[65px] py-[20px] text-center">
          Diligent’s Security Program is governed based on NIST Cybersecurity
          Framework and Diligent follows ISO/IEC 27001 standards to keep
          information assets secureby implementing an Information Security
          Management System (ISMS).
        </div>
        <div className="flex pt-[20px] justify-between gap-[30px] sm:gap-[10px]">
          <img
            src={compliance1}
            alt="heroImage"
            className="w-[90px] h-[90px] md:w-[60px] md:h-[60px] sm:w-[40px] sm:h-[40px]"
          />
          <img
            src={compliance2}
            alt="heroImage"
            className="w-[90px] h-[90px] md:w-[60px] md:h-[60px] sm:w-[40px] sm:h-[40px]"
          />
          <img
            src={compliance3}
            alt="heroImage"
            className="w-[90px] h-[90px] md:w-[60px] md:h-[60px] sm:w-[40px] sm:h-[40px]"
          />
          <img
            src={compliance4}
            alt="heroImage"
            className="w-[90px] h-[90px] md:w-[60px] md:h-[60px] sm:w-[40px] sm:h-[40px]"
          />
          <img
            src={compliance5}
            alt="heroImage"
            className="w-[90px] h-[90px] md:w-[60px] md:h-[60px] sm:w-[40px] sm:h-[40px]"
          />
          <img
            src={compliance6}
            alt="heroImage"
            className="w-[90px] h-[90px] md:w-[60px] md:h-[60px] sm:w-[40px] sm:h-[40px]"
          />
        </div>

        <div className="text-[18px] text-[#E00D00] pt-[40px] font-semibold text-center">
          Read more about compliance and certifications
          <ArrowForwardIosIcon className="!text-[15px] ml-2" />
        </div>
      </div>
    </>
  );
}

export default Compliance;
