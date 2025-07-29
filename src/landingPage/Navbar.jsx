import { Container } from "lucide-react";
import React,{useState} from "react";
// import { FaShoppingCart } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";
import { MdMenu } from "react-icons/md";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [open, setOpen] =  useState(false);
  return (
    <div className="Container p-0 m-0 rounded-sm shadow-lg fixed w-full h-fit  z-22 ">
      <div className="">
        <div className=" flex flex-row justify-evenly items-center ">
          <div className="w-2/6">
            <Link to="/">
              <img
                src="https://poojadesiner.wordpress.com/wp-content/uploads/2025/03/images-2.jpg"
                alt="logo"
                className="w-18 h-14 rounded-full"
              />
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="rounded-lg w-3/6">
              <ul className="flex flex-row justify-evenly gap-x-4 text-[19px] items-center list-none"> 
                <Link to="/">
                  <li id="1"title="Home" className="cursor-pointer hover:text-slate-400 font-semibold">
                    Home
                  </li>
                </Link>
                <Link to="/about">
                  <li id="2"title="About" className="cursor-pointer hover:text-slate-400 font-semibold">
                    About
                  </li>
                </Link>
                <Link to="/blog">
                  <li id="3" title="Blog" className="cursor-pointer hover:text-slate-400 font-semibold">
                    Blog
                  </li>
                </Link>
                <Link to="/fashion">
                  <li id="4"title="Fashion" className="cursor-pointer hover:text-slate-400 font-semibold">
                    Fashions
                  </li>
                </Link>
                <Link to="/collection">
                  <li id="5"title="Collection" className="cursor-pointer hover:text-slate-400 font-semibold">
                    Collection
                  </li>
                </Link>
                <Link to="/contacts">
                  <li id="6" title="Contacts" className="cursor-pointer hover:text-slate-400 font-semibold">
                    Contacts
                  </li>
                </Link>
                <Link to="/support">
                  <li id="7"title="Support" className="cursor-pointer hover:text-slate-400 font-semibold ">
                    Support
                  </li>
                </Link>
                <Link to="https://github.com/AayushSahani01/Pooja_project">
                  <li id="8" title="Github-repo" className="text-3xl cursor-pointer hover:animate-bounce hover:text-slate-700">
                    {/* <FaShoppingCart /> */}
<FaGithubSquare />
                  </li>
                </Link>
                <Link to={"/login"}>
                  <li id="lo9gin" title="Login"
                    className="text-3xl cursor-pointer hover:text-slate-600 flex float-end hover:animate-pulse"
                  >
                    <FiLogIn />
                  </li>
                </Link>
              </ul>
             
            </div>
          </div>
            <div className="md:hidden">
              <MdMenu className="text-4xl cursor-pointer" onClick={() => setOpen(!open)}/>
             {
               open && (
                 <div className="absolute top-0 left-0 w-full h-screen bg-slate-400">
                <div className="MobileMenu">
                <ul className="flex flex-col justify-center items-center ">
                  {Navbar.map((item) =>{
                    return (item.link)
                  })}
                </ul>
            </div>
              </div>
              )
              }
            </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
