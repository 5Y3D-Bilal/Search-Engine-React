import { quickLinks, settingMenu } from "../utils/Constants";

const Footer = () => {
  return (
    <div className="bg-[#f2f2f2] mt-5">
      <div className="flex py-[15px] px-[15px] md:px-[30px] border-b border-[#dadce0]">
        <span className="text-[#70767a] text-[15px] leading-none">
          Pakistan
        </span>
      </div>
      <div className="flex flex-col md:flex-row justify-between py-3 md:py-0 md:px-[15px]">
        <div className="flex justify-center">
          {quickLinks.map((menu, index) => {
            return (
              <>
                <span
                  className="text-[#70757a] text-[12px] md:text-[14px] leading-none p-[10px] md:p-[15px]"
                  key={index}
                >
                  {menu}
                </span>
              </>
            );
          })}
        </div>
        <div className="flex justify-center">
          {settingMenu.map((keys, index) => {
            return (
              <>
                <span
                  className="text-[#70757a] text-[12px] md:text-[14px] leading-none p-[10px] md:p-[15px]"
                  key={index}
                >
                  {keys}
                </span>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Footer;
