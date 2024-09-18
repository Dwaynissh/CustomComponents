import { Link } from "react-router-dom";
import CompLists from "../Components/AllProps/CompLists";
import pic from "../assets/SideBarComp.png";

const AllComp = () => {
  return (
    <section className="w-full mt-[70px] flex justify-center items-center flex-col">
      <div className="h-[80%] w-[85%] flex justify-center items-center flex-col ">
        <div className="w-full">
          <Link to="/sidenavcomp">
            <CompLists
              className="bxs mt-5 text-[50px]"
              text="Sidebar Navigation Components"
              style={{
                backgroundImage: `url(${pic})`,
                backgroundRepeat: "no-repeat",
              }}
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AllComp;
