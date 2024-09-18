import { FC } from "react";

interface iSideProps {
  navName?: string;
  nav?: string;
  icon?: React.ReactNode;
  icon2?: React.ReactNode;
  onClick?: () => void;
}

const SideNav2: FC<iSideProps> = ({ navName, icon, icon2, nav, onClick }) => {
  return (
    <div>
      <div className="px-2 py-1 mb-2 flex justify-start items-center gap-4 text-white cursor-pointer bg-[#1e8a20] rounded-md">
        <div>{icon}</div>
        <div className="">{navName}</div>
      </div>

      <div className="px-2 py-1 mb-2 flex justify-start items-center gap-4 text-gray-200 hover:text-white hover:cursor-pointer hover:bg-[#1e8a20] hover:rounded-md">
        <div>{icon2}</div>
        <div className="">{nav}</div>
      </div>
    </div>
  );
};

export default SideNav2;
