import "./contact.css"
import Header from "../../components/Header"
import {FaInstagramSquare,FaFacebookSquare,FaLinkedin,FaGithubSquare} from "react-icons/fa"
import contactImage from "../../images/header_bg_4.jpg"

export default function Contact(){
    return(
        
        <>
        <Header title="Contact Us" image={contactImage}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum veniam vel quae quasi ut esse deserunt ad dolorum libero velit officia dolorem, nam et alias beatae, accusamus placeat, voluptates earum?
        </Header>
        <div className="container contact_container">
            <div className="icons">
                <a href="https://web.facebook.com/ravindunerosh.kumara.10/"><FaFacebookSquare/></a>
            </div>
            <div className="icons">
                <a href="https://www.instagram.com/ravindu_nirosh_/"><FaInstagramSquare/></a>
            </div>
            <div className="icons">
                <a href="https://www.linkedin.com/in/ravindu621/"><FaLinkedin/></a>
            </div>
            <div className="icons">
                <a href="https://github.com/Ravindu-Nirosh"><FaGithubSquare/></a>
            </div>
        </div>
        </>
    )
}