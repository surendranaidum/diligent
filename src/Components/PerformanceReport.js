import Divider from "@mui/material/Divider";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Card from "@mui/material/Card";
import captera from "../Icons/Capterra svg.svg";

function PerformanceReport() {
  return (
    <>
      {/* Desktop view */}
      <div className="px-[120px] py-[10px] xl:block 2xl:block lg:hidden sm:hidden md:hidden">
        <div className="text-[#E00D00] text-[48px] font-semibold">
          Report title <span className="text-[#0D0C38]">- 2023 Q2</span>
        </div>
        <div className="text-[48px] font-semibold">
          Diligent effect in action
        </div>
        <div className="flex gap-[5%] pt-[40px]">
          <div className="w-[35%] pt-[10px]">
            <div className="text-[18px] text-[#4C4D69]">
              Fusce vel mattis augue. Sed sed felis nisl. Sed dictum in risus
              vitae eleifend. Nunc finibus massa a eleifend imperdiet. Etiam non
              vehicula diam, vitae facilisis orci. Morbi consectetur fringilla
              felis ut iaculis. Phasellus bibendum gravid
            </div>
            <div className="flex gap-[40px] pt-[40px]">
              <div>
                <div className="text-[36px] font-semibold leading-none">
                  6700
                </div>
                <div className="text-[20px] text-[#4C4D69] text-center">
                  user
                </div>
              </div>
              <Divider orientation="vertical" flexItem />
              <div>
                <div className="text-[36px] text-[#E00D00] font-semibold leading-none">
                  +32%
                </div>
                <div className="text-[20px] text-[#4C4D69] text-center">
                  income
                </div>
              </div>
            </div>
            <div className="text-[18px] text-[#E00D00] pt-[40px] font-semibold">
              Read the report
              <ArrowForwardIosIcon className="!text-[15px] ml-2" />
            </div>
          </div>

          <div className="w-[60%]">
            <Card className="rounded-[10px] p-[30px] shadow-2xl flex gap-[30px]">
              <div>
                <div className="flex items-center gap-[10px]">
                  <div className="w-[65px] h-[65px] border border-[#E5E4E4] rounded-full flex items-center justify-center">
                    <img
                      src={captera}
                      alt="captera"
                      className="w-[45px] h-[45px] relative left-[-5px]"
                    />
                  </div>
                  <div className="text-[18px] text-[#0D0C38] font-bold">
                    Capterra
                    <br />
                    <span className="text-[14px] text-[#526580] font-medium">
                      Retail
                    </span>
                  </div>
                </div>
                <div className="text-[14px] text-[#4C4D69] pt-[20px] font-semibold">
                  Capterra, Inc. is a free online marketplace vendor serving as
                  an intermediary between buyers and technology vendors within
                  the software industry.
                </div>
              </div>

              <Divider orientation="vertical" flexItem />

              <div className="text-[#4C4D69] font-semibold pt-[5px]">
                <div className="text-[16px]">
                  "The best part of Highbond is that it is an intuitive platform
                  that is easy to implement, learn, and use.
                </div>
                <div className="pt-[12px] text-[#E00D00]">
                  Our user group of 40+ auditors worldwide were able to use the
                  platform with minimal training just because it was so
                  intuitive.
                  <span className="text-[#4C4D69]">
                    We are now working on various reports and other summaries to
                    speed up our monthly reporting”
                  </span>
                </div>
                <div className="pt-[24px]">
                  <span className="font-bold text-[#0D0C38]">Andrew</span>
                  <br />
                  Director, Internal Audit
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Mobile view */}
      <div className="px-[20px] py-[10px] xl:hidden 2xl:hidden lg:block sm:block md:block">
        <div className="text-[#E00D00] text-[48px] font-semibold text-center sm:text-[28px]">
          Report title <span className="text-[#0D0C38]">- 2023 Q2</span>
        </div>
        <div className="text-[48px] font-semibold text-center sm:text-[28px]">
          Diligent effect in action
        </div>
        <div>
          <div className="pt-[10px]">
            <div className="text-[18px] text-[#4C4D69] text-center">
              Fusce vel mattis augue. Sed sed felis nisl. Sed dictum in risus
              vitae eleifend. Nunc finibus massa a eleifend imperdiet. Etiam non
              vehicula diam, vitae facilisis orci. Morbi consectetur fringilla
              felis ut iaculis. Phasellus bibendum gravid
            </div>
            <div className="flex gap-[40px] pt-[20px] justify-center">
              <div>
                <div className="text-[36px] font-semibold leading-none">
                  6700
                </div>
                <div className="text-[20px] text-[#4C4D69] text-center">
                  user
                </div>
              </div>
              <Divider orientation="vertical" flexItem />
              <div>
                <div className="text-[36px] text-[#E00D00] font-semibold leading-none">
                  +32%
                </div>
                <div className="text-[20px] text-[#4C4D69] text-center">
                  income
                </div>
              </div>
            </div>
            <div className="text-[18px] text-[#E00D00] pt-[20px] font-semibold text-center">
              Read the report
              <ArrowForwardIosIcon className="!text-[15px] ml-2" />
            </div>
          </div>

          <div>
            <Card className="rounded-[10px] p-[20px] shadow-2xl">
              <div>
                <div className="flex items-center gap-[10px]">
                  <div className="w-[65px] h-[65px] border border-[#E5E4E4] rounded-full flex items-center justify-center">
                    <img
                      src={captera}
                      alt="captera"
                      className="w-[45px] h-[45px] relative left-[-5px]"
                    />
                  </div>
                  <div className="text-[18px] text-[#0D0C38] font-bold">
                    Capterra
                    <br />
                    <span className="text-[14px] text-[#526580] font-medium">
                      Retail
                    </span>
                  </div>
                </div>
                <div className="text-[14px] text-[#4C4D69] pt-[20px] font-semibold">
                  Capterra, Inc. is a free online marketplace vendor serving as
                  an intermediary between buyers and technology vendors within
                  the software industry.
                </div>
              </div>

              <Divider orientation="vertical" flexItem />

              <div className="text-[#4C4D69] font-semibold pt-[5px]">
                <div className="text-[16px]">
                  "The best part of Highbond is that it is an intuitive platform
                  that is easy to implement, learn, and use.
                </div>
                <div className="pt-[12px] text-[#E00D00]">
                  Our user group of 40+ auditors worldwide were able to use the
                  platform with minimal training just because it was so
                  intuitive.
                  <span className="text-[#4C4D69]">
                    We are now working on various reports and other summaries to
                    speed up our monthly reporting”
                  </span>
                </div>
                <div className="pt-[24px]">
                  <span className="font-bold text-[#0D0C38]">Andrew</span>
                  <br />
                  Director, Internal Audit
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}

export default PerformanceReport;
