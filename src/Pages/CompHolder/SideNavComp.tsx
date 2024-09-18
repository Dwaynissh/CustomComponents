import SideNav from "../../Components/AllProps/AllSideBarComp/SideNav";

const SideNavComp = () => {
  return (
    <section className="w-full mt-[70px] flex justify-center items-center">
      <div className="h-[80%] w-[85%] flex justify-center items-center flex-col">
        <div className="w-full ">
          <SideNav header="₯Components" header2="Your Teams" />
          <SideNav
            header="₯Components"
            header2="Your Teams"
            className="bg-black"
          />
          <SideNav
            header="₯Components"
            header2="Your Teams"
            className="bg-white"
          />
        </div>
      </div>
    </section>
  );
};

export default SideNavComp;
