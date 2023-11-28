import Box from "@mui/material/Box";
import CloseIcon from "@mui/icons-material/Close";
import Divider from "@mui/material/Divider";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import LanguageIcon from "@mui/icons-material/Language";
import Drawer from "@mui/material/Drawer";
import DiligentLogo from "../Icons/Diligent_logo.png";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Button from "@mui/material/Button";

const style = {
  width: "100%",
  bgcolor: "background.paper",
  boxShadow: 24,
  outline: "none",
  height: "100%",
};

function MenuDrawer({open, setOpen, handleClose}) {
  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={handleClose}
      hideBackdrop={true}
      PaperProps={{
        sx: {
          height: "100%",
          width: "100%",
        },
      }}
      className="xl:hidden 2xl:hidden"
    >
      <Box sx={style}>
        <div className="flex justify-between items-center p-[20px] border-b border-slate-300">
          <img src={DiligentLogo} alt="logo" />
          <CloseIcon className="text-[40px]" onClick={() => setOpen(false)} />
        </div>

        <div className="m-[20px] p-[20px] bg-[#F6F8FC] font-medium text-[18px] text-[#4C4D69]">
          <div className="flex items-center justify-center gap-[10px]">
            <span>Partner</span>
            <Divider orientation="vertical" flexItem />
            <span>Company</span>
            <Divider orientation="vertical" flexItem />
            <span>Support</span>
          </div>

          <div className="flex items-center justify-center mt-[30px]">
            <span>
              <LanguageIcon className="!text-[24px] mr-[5px] mb-[2px]" />
              ENG
            </span>
            <span className="ml-[30px] text-[#E00D00] border-2 py-[5px] block w-[150px] text-center rounded-[5px] border-[#E00D00]">
              <ExitToAppIcon className="!text-[20px] mr-[5px]" />
              Login
              <ArrowForwardIosIcon className="!text-[16px] ml-2 mb-[2px]" />
            </span>
          </div>

          <Button
            variant="contained"
            className="bg-[#E00D00] w-[100%] text-[18px] normal-case font-semibold mt-[20px]"
          >
            Request a demo <ArrowForwardIosIcon className="!text-[15px] ml-2" />
          </Button>
        </div>

        <div className="p-[20px] font-medium text-[18px]">
          <div className="flex items-center justify-between py-[20px] px-[10px]">
            <span>Solutions</span>
            <ArrowForwardIosIcon className="!text-[15px] ml-2" />
          </div>

          <Divider flexItem />

          <div className="flex items-center justify-between py-[20px] px-[10px]">
            <span>Products</span>
            <ArrowForwardIosIcon className="!text-[15px] ml-2" />
          </div>

          <Divider flexItem />

          <div className="flex items-center justify-between py-[20px] px-[10px]">
            <span>Industries</span>
            <ArrowForwardIosIcon className="!text-[15px] ml-2" />
          </div>

          <Divider flexItem />

          <div className="flex items-center justify-between py-[20px] px-[10px]">
            <span>Resources</span>
            <ArrowForwardIosIcon className="!text-[15px] ml-2" />
          </div>
        </div>
      </Box>
    </Drawer>
  );
}

export default MenuDrawer