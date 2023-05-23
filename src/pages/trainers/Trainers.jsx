import "./trainers.css"
import {trainers} from "../../data"
import Header from "../../components/Header"
import imageHeader from "../../images/header_bg_5.jpg"
import Card from "../../UI/Card"
import {FaInstagramSquare,FaFacebookSquare,FaLinkedin,FaTwitterSquare} from "react-icons/fa"

export default function Trainers(){
    return(
       <>
        <Header title="Trainers" image={imageHeader}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus quod dolores dolorem. Nemo vitae omnis modi velit! Ex natus et deserunt dolorum earum, sit similique quam, quidem animi ipsum aperiam!
        </Header>

        <div className="container trainer_container">
            {
                trainers.map(({image,name,job,socials})=>{
                    return(
                        <Card className="tariners_card">
                            <div className="image">
                                <img src={image} alt="aaa" />
                            </div>
                            <h5>{name}</h5>
                            <small>{job}</small>
                            <div className="scical_container">
                                <a href={socials[0]}><FaInstagramSquare/></a>
                                <a href={socials[1]}><FaTwitterSquare/></a>
                                <a href={socials[2]}><FaFacebookSquare/></a>
                                <a href={socials[3]}><FaLinkedin/></a>
                            </div>
                        </Card>
                    )
                })
            }
        </div>
       </>
    )
}