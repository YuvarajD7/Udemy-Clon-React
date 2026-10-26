import img1 from "../assests/img/sale-img.png"
import img2 from "../assests/img/arrow.png"
import img3 from "../assests/img/arrow left.png"
function SalesImage(){
    return(
         <div class="sale__img">
        <img class="img_1" src={img1} alt="sale"></img>
        <img class="img_2" src={img2} alt="arrow"></img>
        <img class="img_3" src={img3} alt="arrow"></img>
    </div>
    )
}
export default SalesImage