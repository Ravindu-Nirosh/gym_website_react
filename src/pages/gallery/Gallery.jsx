import "./gallery.css"
import Header from "../../components/Header"
import headerImage from "../../images/header_bg_2.jpg"

export default function Gallery(){
    const galleryLength = 15
    const galleryImages =[]

     for(let i=1;i<=galleryLength;i++){
         galleryImages.push(require(`../../images/gallery${i}.jpg`))
     }

    console.log(galleryImages)
    return (
        <>
            <Header image={headerImage} title="Gallery">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quasi soluta minus alias earum, ipsum, pariatur, maxime nemo excepturi vero quaerat illo et eius similique nesciunt qui quidem harum obcaecati?
            </Header>

            <div className="container gallry_container">
                <div className="image_container">
                    {
                        galleryImages.map((item,index)=>{
                            return(
                                <div className="images">
                                <img key={index} src={item} alt="Gallry"/>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}