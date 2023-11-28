import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Divider from '@mui/material/Divider';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import LanguageIcon from '@mui/icons-material/Language';

function TopNav() {
  return (
    <div className="px-[120px] py-[10px] flex justify-between bg-[#F6F8FC] text-[#282E37] font-semibold xl:flex 2xl:flex lg:hidden sm:hidden md:hidden">
      <div className="bg-[#F4DDDD] text-[14px] py-[5px] px-[10px] rounded-full font-semibold">
        <span>Modern Governance Summit - September 13-15 . <span className="text-[#E00D00]">Reginster Now <ArrowForwardIosIcon className="!text-[12px] pb-[2px]"/></span></span>
      </div>
      <div className="flex gap-[10px]">
        <span>Partner</span>
        <Divider orientation="vertical" flexItem />
        <span>Company</span>
        <Divider orientation="vertical" flexItem />
        <span>Support</span>
        <span className="ml-[30px] text-[#E00D00]"><ExitToAppIcon className="!text-[18px] mr-[5px]"/>Login</span>
        <span><LanguageIcon className="!text-[18px] mr-[5px]"/>ENG</span>
      </div>
    </div>
  );
}

export default TopNav;
