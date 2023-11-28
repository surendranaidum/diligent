import Card from "@mui/material/Card";
import stats1 from "../Icons/stats1.svg";
import stats2 from "../Icons/stats2.svg";
import stats3 from "../Icons/stats3.svg";
import stats4 from "../Icons/stats4.svg";

function StatsLayout() {
  const statsArray = [
    {
      icon: stats1,
      text1: "100% Coverage",
      text2: "for 100% Confidence ",
      description:
        "Integrated, purpose-built analytics allows your audit team to uncover trends and insights that would normally be missed by sample testing.",
    },
    {
      icon: stats2,
      text1: "No data",
      text2: "for 100% no data",
      description:
        "Increase productivity by automating remediation and control testing. Employ advanced analytics to promptly detect and respond to issues, achieving greater assurance with minimal resources.",
    },
    {
      icon: stats3,
      text1: "Improve security",
      text2: "of confidential data",
      description:
        "Ensure that your organization's data is safe, secure, and protected from external threats, such as a data breach or cybersecurity attack, through our FedRAMP certification.",
    },
    {
      icon: stats4,
      text1: "Delivering Impact",
      text2: "with reports",
      description:
        "Quickly and easily provide a curated picture of risk to the board and audit committee that promotes alignment between audit activities and business objectives.",
    },
  ];
  return (
    <>
      {/* Desktop view */}
      <div className="px-[120px] py-[20px] flex justify-between gap-[20px] xl:flex 2xl:flex lg:hidden sm:hidden md:hidden">
        {statsArray.map((stat, index) => (
          <Card
            key={index}
            className="w-[25%] border-t-[10px] border-[#7223D8] rounded-[10px] p-[30px] shadow-xl"
          >
            <img
              src={stat.icon}
              alt="generalMills"
              className="w-[30px] h-[30px]"
            />
            <div className="text-[20px] text-[#7223D8] font-semibold mt-[20px]">
              {stat.text1}
            </div>
            <div className="text-[20px] font-semibold">{stat.text2}</div>
            <div className="mt-[12px] text-[#4C4D69] text-[14px]">
              {stat.description}
            </div>
          </Card>
        ))}
      </div>

      {/* Mobile view */}
      <div className="xl:hidden 2xl:hidden lg:flex sm:flex md:flex p-[20px] flex-wrap gap-[20px] justify-between">
        {statsArray.map((stat, index) => (
          <Card
            key={index}
            className="border-t-[10px] border-[#7223D8] rounded-[10px] p-[20px] shadow-xl lg:w-[20%] md:w-[45%] sm:w-[100%]"
          >
            <img
              src={stat.icon}
              alt="generalMills"
              className="w-[30px] h-[30px]"
            />
            <div className="text-[20px] text-[#7223D8] font-semibold mt-[20px]">
              {stat.text1}
            </div>
            <div className="text-[20px] font-semibold">{stat.text2}</div>
            <div className="mt-[12px] text-[#4C4D69] text-[14px]">
              {stat.description}
            </div>
          </Card>
        ))}
      </div>
    </>
  );
}

export default StatsLayout;
