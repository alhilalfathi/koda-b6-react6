import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { TfiWrite } from "react-icons/tfi";
import { BsBell } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";

export const Header = () => {
  return (
    <div>
        <div>
            <nav className="flex justify-between h-20 w-screen border border-b-2">
                <div className="flex items-center gap-5 px-10">
                    <GiHamburgerMenu className="w-8 h-8" />
                    <Link to="/">
                        <h1 className="text-3xl font-bold">Medium</h1>
                    </Link>
                    <input type="text" placeholder="Search" className="border border-gray-200 rounded-2xl p-2 "/>
                </div>
                <div className="flex items-center gap-5 px-10">
                    <div className="flex items-center gap-3">
                        <TfiWrite className="w-6 h-6" />
                        <Link to="/admin">
                            <span className="text-xl">Write</span>
                        </Link>
                    </div>
                    <BsBell className="w-6 h-6" />
                    <CgProfile className="w-8 h-8" />
                </div>
            </nav>
        </div>
    </div>
  )
}
