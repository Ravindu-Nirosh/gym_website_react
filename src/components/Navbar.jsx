import { Link ,NavLink } from "react-router-dom"
import "./navbar.css"
import Logo from "../images/logo.png"
import {links} from "../data"
import {GoThreeBars} from "react-icons/go"
import {AiOutlineClose} from "react-icons/ai"
import { useState } from "react"

export default function Navbar(){

    const [isNavShow,setIsNavShow]= useState(false)


    return (
        <nav>
            <div className="container nav_container">
                <Link className="logo" to="/">
                    <img onClick={()=>setIsNavShow(prevst=>!prevst)} src={Logo} alt="Nav Logo" />
                </Link>
                <ul className={`nav_links ${isNavShow ?'show_nav':'hide_nav'}`}>
                    {
                        links.map(({name,path},index)=>{
                            return (
                                <li key={index}>
                                    <NavLink to={path} className={({isActive})=> isActive ? "active_nav":""} onClick={()=>setIsNavShow(false)}>{name}</NavLink>
                                </li>
                            )
                        })
                    }
                </ul>
                <button className="nav_toggle_btn" onClick={()=>setIsNavShow(prevst=>!prevst)}>{isNavShow?<AiOutlineClose/>  : <GoThreeBars/>}</button>
            </div>
        </nav>
    )
}