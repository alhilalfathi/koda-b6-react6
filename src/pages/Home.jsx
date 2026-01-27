import { Header } from "../components/Header"
import { FaHome } from "react-icons/fa";
import { MdOutlineBookmarks } from "react-icons/md";
import { GoPerson } from "react-icons/go";
import { MdOutlineArticle } from "react-icons/md";
import { IoStatsChart } from "react-icons/io5";
import { BsPeople } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import jsonData from "../../public/article.json"
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";


export const Home = () => {

    
  return (
    <div>
        <Header />
        <main className="flex">

            {/* side bar  */}
            <aside className="w-20%  border border-white border-r-black ">
                <div>
                    <div className="flex items-center gap-3 pt-15 pl-5 pr-20">
                        <FaHome className="w-8 h-8" />
                        <p >Home</p>
                    </div>
                    <div className="flex items-center gap-3 pt-5 pl-5 pr-20">
                        <MdOutlineBookmarks className="w-8 h-8" />
                        <p >Library</p>
                    </div>
                    <div className="flex items-center gap-3 pt-5 pl-5 pr-20">
                        <GoPerson className="w-8 h-8" />
                        <p >Profile</p>
                    </div>
                    <div className="flex items-center gap-3 pt-5 pl-5 pr-20">
                        <MdOutlineArticle className="w-8 h-8" />
                        <p >Stories</p>
                    </div>
                    <div className="flex items-center gap-3 pt-5 pl-5 pr-20">
                        <IoStatsChart className="w-8 h-8" />
                        <p >Stats</p>
                    </div>
                </div>
                
                <br  />

                <div>
                    <div className="flex items-center gap-3 pt-5 pl-5 pr-20">
                        <BsPeople className="w-8 h-8" />
                        <p >Following</p>
                    </div>
                    <div className="flex items-center gap-3 pt-5 pl-5 pr-20">
                        <AiOutlinePlus className="w-8 h-8" />
                        <p className="text-sm w-25">Find writers and publications to follow</p>
                    </div>
                </div>
            </aside>

            {/* article  */}
            <article className="flex-1 p-10 space-y-8">
                {jsonData.map((article) => (

                    <div key={article.id} className="border-b pb-6 grid-cols-4">
                        
                        <div >
                            <div className="mb-2 text-sm text-gray-600 flex gap-2 items-center">
                                <CgProfile className="w-8 h-8" />
                                <span className="font-medium">{article.name}</span>
                                <span className="text-gray-400">{article.username}</span>
                            </div>
                            <Link to={`/${article.username}/${article.slug}`}>
                                <h2 className="text-2xl font-bold mb-3 hover:underline cursor-pointer">
                                {article.title}
                                </h2>
                            </Link>
                            <div className="flex gap-3">
                                <p className="text-gray-700 line-clamp-3">
                                    {article.body}
                                </p>
                                <img className="w-72 h-36" src={article.image} alt={article.title} />
                            </div>
                        </div>

                    </div>
                ))}
            </article>
        </main>
    </div>
  )
}
