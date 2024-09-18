import { FC } from "react";

interface iSideProps2 {
  avatar: string;
  navName: string;
  onClick?: () => void;
}
const IISideNav: FC<iSideProps2> = ({ avatar, navName, onClick }) => {
  return (
    <div>
      <div className="px-2 py-1 mb-2 flex justify-start items-center gap-4 text-gray-200 hover:text-white hover:cursor-pointer hover:bg-[#1e8a20] hover:rounded-md">
        <div className="py-1 px-2 border rounded-full text-[12px]">
          {avatar}
        </div>
        <div className="">{navName}</div>
      </div>
    </div>
  );
};

export default IISideNav;
