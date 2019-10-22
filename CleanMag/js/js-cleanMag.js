function slideSwitch() {
    let imgSlider = document.querySelectorAll(".img-slider");
    let itemIndSlider = document.querySelectorAll(".item-indicator-slider");
    for (let i = 0; i < itemIndSlider.length; i++) {
        itemIndSlider[i].addEventListener("click", function() {
            for (let k = 0; k < itemIndSlider.length; k++) {
                itemIndSlider[k].classList.remove("active-indicator-slider");
            }
            this.classList.add("active-indicator-slider");
            activeImgSlider(this.dataset.number);
        })
    }

    function activeImgSlider(num) {
        for (let i = 0; i < imgSlider.length; i++) {
            imgSlider[i].classList.add("inactive");
        }
        imgSlider[num].classList.remove("inactive");

    }
}
slideSwitch();