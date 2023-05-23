import Logo from "../images/logo.png"
import { Link } from "react-router-dom"
import {TiSocialFacebook,TiSocialLinkedin,TiSocialTumbler,TiSocialGithub} from "react-icons/ti"
import "./footer.css"

export default function Footer(){
    return(
        <footer className="footer">
            <div className="footer_container">
                <div className="footer_top">
                    <div className="footer_social">
                        <div className="image">
                            <img src={Logo} alt="" />
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero delectus cumque laborum soluta officia, repudiandae natus aut sapiente nostrum ex?</p>
                        <ul className="social_icons">
                            <li><a href="https://facebook.com" target="_blank" rel="noreferrer"><TiSocialFacebook/></a></li>
                            <li><a href="https://facebook.com" target="_blank" rel="noreferrer"><TiSocialLinkedin/></a></li>
                            <li><a href="https://facebook.com" target="_blank" rel="noreferrer"><TiSocialTumbler/></a></li>
                            <li><a href="https://facebook.com" target="_blank" rel="noreferrer"><TiSocialGithub/></a></li>
                        </ul>
                    </div>
                    <div className="permalinks">
                        <h4>Permalinks</h4>
                        <ul>
                            <li> <Link to="about">About</Link></li>
                            <li> <Link to="plans">Plans</Link></li>
                            <li> <Link to="trainers">Trainers</Link></li>
                            <li> <Link to="gallery">Gallery</Link></li>
                            <li> <Link to="contact">Contact</Link></li>
                        </ul>
                    </div>
                    <div className="insights">
                        <h4>Insights</h4>
                            <ul>
                            <li> <Link to="about">Blog</Link></li>
                            <li> <Link to="plans">Case Study</Link></li>
                            <li> <Link to="trainers">Events</Link></li>
                            <li> <Link to="gallery">Communities</Link></li>
                            <li> <Link to="contact">FAQs</Link></li>
                            </ul>
                    </div>
                    <div className="get_in_touch">
                        <h4>Get In TOuch</h4>
                            <ul>
                                <li> <Link to="about">Contact Us</Link></li>
                                <li> <Link to="plans">Support</Link></li>
                            </ul>
                    </div>
                </div>
                
            </div>
            <div className="footer_bottom">
                <div className="copyright">Code by Ravindu Nirosh</div>
            </div>
        </footer>
    )
}