import { AiTwotoneCrown } from "react-icons/ai"
import SectionHeader from "./Section_header"
import {programs} from "../data"
import Card from "../UI/Card"
import { Link } from "react-router-dom"
import {IoIosArrowDroprightCircle} from "react-icons/io"

export default function Programs(){
   return(
    <section className="programs reveal">
        <div className="container program_container">
            <SectionHeader icon={<AiTwotoneCrown/>} title="Our Programs"/>
            <div className="program_card_wrapper">
               {
                programs.map(({id,icon,title,path,info})=>{
                   return(
                    <Card key={id} className="programs_card">
                        <span>{icon}</span>
                        <h4>{title}</h4>
                        <p>{info}</p>
                        <Link to={path} className="btn sm">Learn More <IoIosArrowDroprightCircle/></Link>
                    </Card>
                   )
                })
               }
            </div>
        </div>
    </section>

   )
}