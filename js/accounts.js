let accountSections = document.querySelectorAll(".accounts-container .display-links-content")
let accountBtn = document.querySelectorAll(".accounts-link ul li button");

accountBtn.forEach(btn => {
    btn.onclick = function (e) {
        deleteActiveAccount();
        e.target.className = 'active';
        removeContent();
        document.querySelector(`.${e.target.dataset.target}`).classList.remove("d-none");
    }
})

function deleteActiveAccount() {
    accountBtn.forEach(btn => {
        btn.classList.remove("active");
    })
}
function removeContent() {
    accountSections.forEach(el => {
        el.classList.add("d-none")
    })
}