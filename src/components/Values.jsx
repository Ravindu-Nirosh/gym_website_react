import ValuesImage from "../images/values.jpg"
import SectionHeader from "./Section_header"
import {AiTwotoneHeart} from "react-icons/ai"
import Card from "../UI/Card"
import { values } from "../data"

export default function Values(){
    return(
       <section className="values reveal">
        <div className="container values_container">
            <div className="values_left">
                <div className="image">
                    <img src={ValuesImage} alt="Value" />
                </div>
            </div>
            <div className="values_right">
                <SectionHeader icon={<AiTwotoneHeart />} title="Our Values" />
                <p className="value_dec">Lorem ipsum dolor sit amet, consectetur elit. Obcaecati voluptate porro natus dolorum repellendus. Repellendus?</p>
                <div className="value_card_wrapper">
                    {
                        values.map(({id,icon,title,desc})=>{
                            return(
                                <Card key={id} className="values_value">
                                    <span>{icon}</span>
                                    <h4>{title}</h4>
                                    <p>{desc}</p>
                                </Card>
                            )
                        })
                    }
                </div>
            </div>
        </div>
       </section>
    )
}