 import { Link } from "react-router-dom"
 import HaderImage from "../images/main_header.png"
 
 export default function MainHeader(){
    return(
       
        <header className="main_header reveal" id="mainHeadr">
            <div className="container main_header_container">
                <div className="main_header_left">
                    <h4>#100DayofWorkout</h4>
                    <h1>Join The Legends of the Fitness World</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae quo tempora autem repudiandae quae quos.</p>
                    <Link to="/plans" className="btn lg">
                        Get Started
                    </Link>
                </div>
                <div className="main_header_rigth">
                    <div className="main_header_circle"></div>
                    <div className="main_header_image">
                        <img src={HaderImage} alt="Main Header" />
                    </div>
                </div>
            </div>
        </header>
    )
 }