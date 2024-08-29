let puppyimageEl = document.getElementById("puppyImage");
let likeiconEl = document.getElementById("likeIcon");
let likebuttonEl = document.getElementById("likeButton");
let button1 = false;

function onClickLikeButton() {
    if (button1 === false) {
        puppyimageEl.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/white-puppy-liked-img.png";
        likeiconEl.style.color = "#0967d2";
        likebuttonEl.style.color = "#9aa5b1";
        likebuttonEl.style.backgroundColor = "#0967d2";
        likebuttonEl.innerHTML = "like";
        button1 = true;
    } else {
        puppyimageEl.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/white-puppy-img.png";
        likeiconEl.style.color = "#cbd2d9";
        likebuttonEl.style.color = "#ffffff";
        likebuttonEl.style.backgroundColor = "#cbd2d9";
        likebuttonEl.innerHTML = "unLike";
        button1 = false;
    }


}