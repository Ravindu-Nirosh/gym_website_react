import Header from "../../components/Header"
import Image from "../../images/header_bg_1.jpg"
import "./about.css"
import StoryImg from "../../images/about1.jpg"
import StoryImg2 from "../../images/about2.jpg"
import StoryImg3 from "../../images/about3.jpg"
import About_content from "../../components/About_contents"

export default function About(){
   
    return(
        <>
        <Header title="About Us" image={Image}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias saepe animi doloribus repellendus magnam ab illo placeat a, repudiandae, dolorum voluptatibus accusantium harum? Alias eligendi perferendis nobis deserunt quaerat reiciendis?
        </Header>
        <div className="container">
        <About_content title="Our Story" des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias saepe animi doloribus repellendus magnam ab illo placeat a, repudiandae, dolorum voluptatibus accusantium harum? Alias eligendi perferendis nobis deserunt quaerat reiciendis?" image={StoryImg}/>
        <About_content title="Our Story" des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias saepe animi doloribus repellendus magnam ab illo placeat a, repudiandae, dolorum voluptatibus accusantium harum? Alias eligendi perferendis nobis deserunt quaerat reiciendis?" image={StoryImg2} classname="middle_about"/>
        <About_content title="Our Story" des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias saepe animi doloribus repellendus magnam ab illo placeat a, repudiandae, dolorum voluptatibus accusantium harum? Alias eligendi perferendis nobis deserunt quaerat reiciendis?" image={StoryImg3}/>
  
        </div>
        </>
    )
}