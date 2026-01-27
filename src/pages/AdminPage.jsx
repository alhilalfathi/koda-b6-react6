import { Outlet } from "react-router-dom"
import { Header } from "../components/Header"
import { Link } from "react-router-dom"


export const AdminPage = () => {
  return (

    <div>
        <Header />
        <div className="flex">
            <div className="w-[20%] min-h-screen border border-r px-5 py-10 flex flex-col gap-5">
                <Link to="/admin">
                    <p className="p-3 text-white bg-black rounded">Dashboard</p>
                </Link>
                <Link to="/admin/Create">
                    <p className="p-3 text-white bg-black rounded">Create</p>
                </Link>
                <p className="p-3 text-white bg-black rounded">Settings</p>
            </div>
            <div className="px-5 py-10 bg-gray-300 w-full">
                <Outlet />
            </div>
        </div>
    </div>
  )
}
