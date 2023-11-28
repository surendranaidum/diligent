import DiligentLogo from "../Icons/Diligent_logo.png";
import SearchIcon from "../Icons/search.png";
import Button from "@mui/material/Button";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import MenuDrawer from "./MenuDrawer";

function MainMenu() {
  const [open, setOpen] = useState(false);
  const handleClose = (event, reason) => {
    if (reason && reason === "backdropClick") return;
    setOpen(false);
  };

  return (
    <>
      {/* Desktop view */}
      <div className="px-[120px] py-[20px] flex justify-between xl:flex 2xl:flex lg:hidden sm:hidden md:hidden">
        <div className="flex items-center gap-[40px] text-[20px] font-semibold">
          <img src={DiligentLogo} alt="logo" />
          <span>Solutions</span>
          <span>Products</span>
          <span>Industries</span>
          <span>Resources</span>
        </div>
        <div className="flex gap-[10px]">
          <img src={SearchIcon} alt="search" />
          <Button
            variant="contained"
            className="bg-[#7223D8] w-[220px] text-[18px] normal-case font-semibold"
          >
            Request a demo <ArrowForwardIosIcon className="!text-[15px] ml-2" />
          </Button>
        </div>
      </div>

      {/* Mobile view */}
      <div className="p-[20px] xl:hidden 2xl:hidden lg:block sm:block md:block">
        <div className="flex items-center text-[20px] font-semibold justify-between">
          <img src={DiligentLogo} alt="logo" />
          <MenuIcon className="text-[40px]" onClick={() => setOpen(true)} />
        </div>

        <MenuDrawer open={open} setOpen={setOpen} handleClose={handleClose}/>
      </div>
    </>
  );
}

export default MainMenu;
