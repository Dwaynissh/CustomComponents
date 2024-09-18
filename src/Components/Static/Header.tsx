import GlobalBtn from "../AllProps/GlobalBtn"
import { Link } from "react-router-dom"


const Header = () => {
  return (
    <section className="h-[70px] w-full headerr fixed top-0 flex justify-center items-center">
        <div className="h-full w-[85%] flex justify-between items-center">
            <Link to="/">
                <div className="text-[30px] h-[65px] flex justify-center items-center">
                    Dwayne<span className="font-bold lawngreencol">Components</span>
                </div>
            </Link>
            <div className="flex justify-start items-center h-[65px] gap-5 text-[18px]">
                <nav>Premium</nav>
                <nav>Components</nav>
                <nav>Discover</nav>
            </div>

            <div className="flex justify-start items-center h-[65px] gap-5 text-[18px] lawngreencol">
                <Link to="/allcomp">
                    <GlobalBtn text="Browse & Explore Components" choice="pry" size="md"/>              
                </Link>
            </div>
        </div>
    </section>
  )
}

export default Header