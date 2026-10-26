import img1 from "../assests/img/c1.jpg"
import img2 from "../assests/img/c2.jpg"
import img3 from "../assests/img/c3.jpg"
import img4 from "../assests/img/c4.jpg"

function recommended_card() {
    return(
         <div class="recommended_card">
        <h1 class="card_title">Recommended for you</h1>
        <p class="card_title">Pick the best fit</p>

        <div class="course_card">

            <div class="rec__card">
                <img src={img1} alt="info_img"></img>
                <h3>2023 python Data Visualization</h3>
                <p>Col Steele</p>
                <p>4.9 ★★★★⯪</p>
                <p>$ 449 <del>899</del></p>
            </div>

            <div class="rec__card">
                <img src={img2} alt="info_img"></img>
                <h3>2024 PHP</h3>
                <p>Andrew Ng</p>
                <p>3.9★★★⯪☆</p>
                <p>$ 229 <del>599</del></p>
            </div>

            <div class="rec__card">
                <img src={img3} alt="info_img"></img>
                <h3>2024Web Development</h3>
                <p>David J. Malan</p>
                <p>4.5 ★★★⯪☆</p>
                <p>$ 349 <del>559</del></p>
            </div>

            <div class="rec__card">
                <img src={img4} alt="info_img"></img>
                <h3>2025 JavaScript + React</h3>
                <p>Mosh Hamedani</p>
                <p>4.8 ★★★★☆</p>
                <p>$ 549 <del>899</del></p>
            </div>
        </div>
    </div>
    )
}
export default recommended_card