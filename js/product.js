// product page
let heartIconProduct = document.querySelector(".add-to-card .icon");
let productSizeButton = document.querySelectorAll(".details .details-size .size");


function galleryImg() {
    let bigImg = document.querySelector(".details-img");
    let smallImg = document.querySelectorAll(".details-small-img img");

    smallImg.forEach(img => {
        img.onclick = function(e) {
            bigImg.src = e.target.src;
        }
    })
}
galleryImg()

productSizeButton.forEach(btn => {
    btn.onclick = function (e) {
        deleteActiveSize();
        e.target.classList.add("active")
    }
})
function deleteActiveSize() { 
    productSizeButton.forEach(btn => {
        btn.classList.remove('active');
    })
}

window.onload = function() {
    if (heartIconProduct) { // تأكد أن العنصر موجود قبل تعيين الـ onclick
        heartIconProduct.onclick = function() {
            if (heartIconProduct.firstChild.className.startsWith("fa-regular")) {
                heartIconProduct.firstChild.className = "fa-solid fa-heart";
                heartIconProduct.firstChild.style.color = "var(--frist-color)";
            } else {
                heartIconProduct.firstChild.className = "fa-regular fa-heart";
            }
        };
    } else {
        console.error("العنصر heartIconProduct غير موجود.");
    }
};


