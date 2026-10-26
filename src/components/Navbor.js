
function Navbor() {
    return (
        <div class="nav">
            <div class="nav__1">
                <h1>Udemy</h1>
            </div>

        <div class="nav__2">
            <i class="fa-solid fa-magnifying-glass"></i>
            <input type="search" id="search__bar" placeholder="search for anything here. Tech,Buisnes,Art ...."></input>
        </div>
        <div class="nav__3">
            <h3>Treanding cources</h3>
            <div class="my_learn">
                <h3>My Learning</h3>
                <p class="my_learn_pop">You didn't purchase anything yet!</p>
            </div>
            <i class="fa-solid fa-cart-arrow-down" style={{ "color": "rgb(30, 48, 80)" }}></i>
            <i class="fa-solid fa-bell" style={{ "color": "rgb(30, 48, 80)" }}></i>
            <i class="fa-solid fa-user" style={{ "color": "rgb(30, 48, 80)" }}></i>
        </div>
        </div>
    )
}

export default Navbor