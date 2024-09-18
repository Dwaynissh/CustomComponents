import { FC, HTMLAttributes } from "react";
import { navOne, navThree, navTwo, navTwoII } from "../../Data/Data";
import ISideNav from "./ISideNav";
import IISideNav from "./IISideNav";
import { twMerge } from "tailwind-merge";
import { Link } from "react-router-dom";

interface iSideNavProps extends HTMLAttributes<HTMLElement> {
  header?: string;
  header2?: string;
  avatar?: string;
  color?: string;
}

const SideNav: FC<iSideNavProps> = ({
  header,
  header2,
  color,
  className,
  ...props
}) => {
  return (
    <section>
      <div className="w-full flex flex-col ">
        <div className="mb-4 mt-10 flex justify-between items-center ">
          <div className="flex justify-center items-center gap-2">
            <div className="text-[20px] font-semibold">Brand</div>
            <div className="text-[15px] font-[400] py-1 px-2 bg-gray-200 rounded-md">
              Preview
            </div>
          </div>
          <Link to="/sidenavcode">
            <div className="text-[18px] font-[600] lawngreencol cursor-pointer hover:text-[#b9f258]">
              Get the code →
            </div>
          </Link>
        </div>
        <div className="border-[2px] w-full h-[75vh] rounded-[8px] flex">
          <div
            className={twMerge(
              `w-[250px] ${
                color ? color : "lawngreenbg"
              }  flex justify-center items-start rounded-tl-[8px] rounded-bl-[8px]`,
              className
            )}
          >
            <div className="w-[80%]">
              <div className="text-[16px] text-white h-[65px] flex justify-start items-center">
                {/* ₯Components */}
                {header}
              </div>
              {navOne.map((props: any) => (
                <ISideNav navName={props.navName} icon={props.icon} />
              ))}

              {navTwo.map((props: any) => (
                <ISideNav nav={props.nav} icon={props.icon2} />
              ))}

              <div className="px-2 py-1 mb-2 flex justify-start items-center gap-4 text-gray-200 font-semibold">
                <div>{header2}</div>
              </div>
              {navThree.map((props: any) => (
                <IISideNav navName={props.navName} avatar={props.avatar} />
              ))}

              {navTwoII.map((props: any) => (
                <ISideNav nav={props.nav} icon={props.icon2} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SideNav;
