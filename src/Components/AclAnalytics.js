import rectangle from "../Icons/Rectangle95.png";
import product1 from "../Icons/product-1.png";
import product2 from "../Icons/product-2.png";
import product3 from "../Icons/product-3.png";

function AclAnalytics() {
  return (
    <>
      {/* Desktop view  */}
      <div
        style={{ backgroundImage: `url(${rectangle})` }}
        className="bg-repeat-round bg-cover mt-[30px] xl:block 2xl:block lg:hidden sm:hidden md:hidden"
      >
        <div className="text-[#FF5D52] text-[48px] pt-[150px] text-center">
          Unleash The Power{" "}
          <span className="text-[#FDFDFD]">of ACL Analytics</span>
        </div>

        <div className="flex items-center justify-around px-[120px] pt-[80px] gap-[20px]">
          <img src={product1} alt="search" className="w-[50%]" />
          <div className="pb-[100px] w-[50%]">
            <div className="text-[#FF5D52] text-[18px] font-bold">
              Secondary title
            </div>
            <div className="text-[#FEFEFE] text-[32px] font-semibold leading-none mt-[20px]">
              Centralize your
            </div>
            <div className="text-[#FEFEFE] text-[32px] font-semibold leading-none mb-[20px]">
              assurance programs
            </div>
            <div className="text-[#E7E7F0] text-[18px]">
              Consolidate key assurance functions, maintain an audit history and
              gain real-time visibility across all audits to make better
              decisions and communicate more effectively.
            </div>
          </div>
        </div>

        <div className="flex items-center justify-around px-[120px] gap-[20px]">
          <div className="pb-[100px] pl-[50px] w-[50%]">
            <div className="text-[#FF5D52] text-[18px] font-bold">
              Secondary title
            </div>
            <div className="text-[#FEFEFE] text-[32px] font-semibold leading-none mt-[20px]">
              Centralize your
            </div>
            <div className="text-[#FEFEFE] text-[32px] font-semibold leading-none mb-[20px]">
              assurance programs
            </div>
            <div className="text-[#E7E7F0] text-[18px]">
              Consolidate key assurance functions, maintain an audit history and
              gain real-time visibility across all audits to make better
              decisions and communicate more effectively.
            </div>
          </div>
          <img src={product2} alt="search" className="w-[50%]" />
        </div>

        <div className="flex items-center justify-around px-[120px] pb-[80px] gap-[20px]">
          <img src={product3} alt="search" className="w-[50%]" />
          <div className="pb-[100px] w-[50%]">
            <div className="text-[#FF5D52] text-[18px] font-bold">
              Secondary title
            </div>
            <div className="text-[#FEFEFE] text-[32px] font-semibold leading-none mt-[20px]">
              Centralize your
            </div>
            <div className="text-[#FEFEFE] text-[32px] font-semibold leading-none mb-[20px]">
              assurance programs
            </div>
            <div className="text-[#E7E7F0] text-[18px]">
              Consolidate key assurance functions, maintain an audit history and
              gain real-time visibility across all audits to make better
              decisions and communicate more effectively.
            </div>
          </div>
        </div>
      </div>

      {/* Mobile view */}
      <div className="mt-[20px] p-[20px] xl:hidden 2xl:hidden lg:block sm:block md:block bg-[#282E37]">
        <div className="text-[#FF5D52] text-[48px] pt-[20px] text-center sm:text-[28px] md:text-[38px]">
          Unleash The Power{" "}
          <span className="text-[#FDFDFD]">of ACL Analytics</span>
        </div>

        <div className="p-[20px]">
          <img src={product1} alt="search"/>
          <div className="text-center">
            <div className="text-[#FF5D52] text-[18px] font-bold">
              Secondary title
            </div>
            <div className="text-[#FEFEFE] text-[32px] font-semibold leading-none mt-[20px] sm:text-[28px]">
              Centralize your
            </div>
            <div className="text-[#FEFEFE] text-[32px] font-semibold leading-none mb-[20px] sm:text-[28px]">
              assurance programs
            </div>
            <div className="text-[#E7E7F0] text-[18px]">
              Consolidate key assurance functions, maintain an audit history and
              gain real-time visibility across all audits to make better
              decisions and communicate more effectively.
            </div>
          </div>
        </div>

        <div className="p-[20px]">
          <img src={product2} alt="search" />
          <div className="text-center">
            <div className="text-[#FF5D52] text-[18px] font-bold">
              Secondary title
            </div>
            <div className="text-[#FEFEFE] text-[32px] font-semibold leading-none mt-[20px] sm:text-[28px]">
              Centralize your
            </div>
            <div className="text-[#FEFEFE] text-[32px] font-semibold leading-none mb-[20px] sm:text-[28px]">
              assurance programs
            </div>
            <div className="text-[#E7E7F0] text-[18px]">
              Consolidate key assurance functions, maintain an audit history and
              gain real-time visibility across all audits to make better
              decisions and communicate more effectively.
            </div>
          </div>
        </div>

        <div className="p-[20px]">
          <img src={product3} alt="search"/>
          <div className="text-center">
            <div className="text-[#FF5D52] text-[18px] font-bold">
              Secondary title
            </div>
            <div className="text-[#FEFEFE] text-[32px] font-semibold leading-none mt-[20px] sm:text-[28px]">
              Centralize your
            </div>
            <div className="text-[#FEFEFE] text-[32px] font-semibold leading-none mb-[20px] sm:text-[28px]">
              assurance programs
            </div>
            <div className="text-[#E7E7F0] text-[18px]">
              Consolidate key assurance functions, maintain an audit history and
              gain real-time visibility across all audits to make better
              decisions and communicate more effectively.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AclAnalytics;
