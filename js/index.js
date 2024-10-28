let productItems = document.querySelectorAll(".product-item");


// Swiper categories
if (window.location.pathname.includes("index.html")) {
    var swiperCategories = new Swiper(".category-container", {
        loop: true,
        spaceBetween: 10,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            350: {
                slidesPerView: 2,
                spaceBetween: 24,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 24,
            },
            992: {
                slidesPerView: 4,
                spaceBetween: 24,
            },
            1200: {
                slidesPerView: 5,
                spaceBetween: 24,
            },
            1400: {
                slidesPerView: 6,
                spaceBetween: 24,
            },
        }    
    });
    var swiperNewArrivals = new Swiper(".new-container", {
        loop: true,
        spaceBetween: 10,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
                spaceBetween: 24,
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 40,
            },
            1400: {
                slidesPerView: 4,
                spaceBetween: 24,
            },
        }    
    });
}

// Proudct Tab
if (window.location.pathname.includes("index.html")) {
    let btnTabs = document.querySelectorAll(".tabs-btn span");

    btnTabs.forEach(btn => {
    btn.onclick = function (e) {
        deleteActiveTabs();
        e.target.className = 'active-tab';
        let selectSection = document.querySelectorAll(`.${this.dataset.target}`);
        selectSection.forEach(item => {
            item.style.display = "block";
        })
        console.log(selectSection)
    }
    })

        
    function deleteActiveTabs() {
        btnTabs.forEach(btn => {
            btn.classList.remove("active-tab");
            removeProduct()
        })
    }
    function removeProduct() {
        productItems.forEach( product => {
            product.style.display = "none";
        } )
    }
}




//  Change product page data on click

let productItem = document.querySelectorAll(".product-item");
let imgBigProduct =  document.querySelector(".details-img");
let imgSmallProduct =  document.querySelector(".details-small-img");

productItem.forEach(item => {
    item.onclick = function (e) {
        let bigImagesrc = item.firstElementChild.firstElementChild.children[0].getAttribute("src");
        let smallImagesrc = item.firstElementChild.firstElementChild.children[1].getAttribute("src");
        
        // set local sorage
        localStorage.clear();      
        setLocal(bigImagesrc, smallImagesrc)
        window.open("product.html", "_blank");

    }
})
function setLocal(bigImagesrc, smallImagesrc) {
    let dataSrc = { onesrc: bigImagesrc, twosrc: smallImagesrc}
    localStorage.setItem("links" ,JSON.stringify(dataSrc))
}

if (window.location.pathname.includes("product.html")) {
    window.onload = function() {
        dataJs = JSON.parse(localStorage.getItem("links"))
        imgBigProduct.src = dataJs.onesrc;
        imgSmallProduct.children[0].src = dataJs.onesrc;
        imgSmallProduct.children[1].src = dataJs.twosrc;
        imgSmallProduct.children[2].src = dataJs.onesrc;

    }
}
