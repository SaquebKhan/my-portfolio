import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function NavBar() {
    return (
        <header className="bg-blue-600">
            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                  <NavLink 
                  to="/" 
                  exact
                  activeClassName="text-white"
                  className="inline-flex items-center py-6 px-3 mr-4 text-blue-100 hover:text-red-800 text-4xl font-bold cursive tracking-widest"
                  >
                        Home
                  </NavLink>
                  <NavLink to="/post" 
                  className="inline-flex items-center py-3 px-3 my-6 rounded text-blue-200 hover:text-red-800"
                  >
                        Blog Posts
                  </NavLink>
                  <NavLink to="/project" 
                  className="inline-flex items-center py-3 px-3 my-6 rounded text-blue-200 hover:text-red-800"
                  >
                        Projects
                  </NavLink>
                  <NavLink to="/about" 
                  className="inline-flex items-center py-3 px-3 my-6 rounded text-blue-200 hover:text-red-800"
                  >
                        About Saqueb
                  </NavLink>
                </nav>
                <div className="inline-flex py-3 px-3 my-6">
                    <SocialIcon 
                    url="https://www.linkedin.com/in/saquebkhan/" 
                    className="mr-4" 
                    target="_blank" 
                    fgColor="#fff" 
                    style={{ height: 35, width: 35}}
                    />
                    <SocialIcon 
                    url="https://github.com/SaquebKhan" 
                    className="mr-4" 
                    target="_blank" 
                    fgColor="#fff" 
                    style={{ height: 35, width: 35}}
                    />
                    <SocialIcon 
                    url="https://www.youtube.com/channel/UCa8rvDV4-PQBI62yLSNwJUg" 
                    className="mr-4" 
                    target="_blank"
                    fgColor="#fff" 
                    style={{ height: 35, width: 35}}
                    />
                    <SocialIcon
                    url="mailto:khansaqueb@gmail.com"
                    className="mr-4"
                    target="_blank"
                    fgColor="#fff"
                    style={{ height: 35, width: 35 }} />
                    <SocialIcon
                    url="https://docs.google.com/document/d/1kFzuxh4sJ4Z3GZ2_mizVoDgK6AMX5BGl/edit?usp=sharing"
                    className="mr-4"
                    target="_blank"
                    fgColor="#fff"
                    style={{ height: 35, width: 35 }} />
                </div>
            </div>
        </header>
    )
}