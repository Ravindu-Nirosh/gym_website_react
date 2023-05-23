import  ReactDOM  from "react-dom/client";
import App from "./App";
import "./index.css"

const root = ReactDOM.createRoot(document.querySelector("#root"))

function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  console.log(reveals.length)
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 100;
      
    if (elementTop < windowHeight -elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
  console.log(windowHeight)
  console.log(elementTop)

}
window.addEventListener("scroll", reveal);

root.render(
    <App/>
)



