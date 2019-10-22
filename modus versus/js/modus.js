function switchingMenuHeader() {
    var body = document.querySelector("body");
    var menuHeader = document.querySelector(".menu-header");
    var menuHeaderLi = menuHeader.querySelectorAll('li');
    var getLi = menuHeader.querySelectorAll(".get-submenu");
    var searchInput = document.querySelector(".input-search");
    for (var i = 0; i < menuHeaderLi.length; i++) {
        menuHeaderLi[i].addEventListener("mouseout", function() {
            this.classList.remove("menu-header-hover");
        })
        menuHeaderLi[i].addEventListener("mouseover", function() {
            this.classList.add("menu-header-hover");

        })
        menuHeaderLi[i].addEventListener("click", function() {
            showHideSubmenu(this, menuHeader);
            for (var i = 0; i < menuHeaderLi.length; i++) {
                if (menuHeaderLi[i].classList.contains("active-menu-header") == true) {
                    menuHeaderLi[i].classList.remove("active-menu-header");
                }
            }
            this.classList.add("active-menu-header");
        })
    }
    body.addEventListener("click", function(event) {
        delActiveSubmenu(menuHeader);
        searchOnSite(event.target);
        for (var i = 0; i < getLi.length; i++) {
            if (getLi[i].classList.contains("active-menu-header") == true) {
                getLi[i].classList.remove("active-menu-header");
            }
        }
        if (event.target.classList.contains("target-submenu") == true) {
            showHideSubmenu(event.target.closest("li"), menuHeader);
            event.target.closest("li").classList.add("active-menu-header");
        }
    })

    function searchOnSite(elem) {
        if (elem.classList.contains("input-search") == false) {
            searchInput.classList.remove("active-input");
        }
        if (elem.classList.contains("search-site") == true) {
            searchInput.classList.add("active-input");
        }
    }

    function delActiveSubmenu(list) {
        var elems = list.querySelectorAll(".active-submenu");
        for (var i = 0; i < elems.length; i++) {
            elems[i].classList.remove("active-submenu");
        }
    }

    function showHideSubmenu(elem, list) {
        var item = elem.lastElementChild;
        delActiveSubmenu(list);
        item.classList.add("active-submenu");
    }

}

function showSlides() {
    var elemsSlider = document.querySelector(".slider-main");
    /*  var previousSlider = document.querySelector(".previous-slider");
     var nextSlider = document.querySelector(".next-slider"); */
    var indicatorsSlider = document.querySelectorAll(".indicators-slider");
    /* nextSlider.addEventListener("click", showNextSlider);
    previousSlider.addEventListener("click", showPreviouSlider); */
    var numberSliderMain = 0;
    var numberIndication = 0;

    function startSlider() {
        window.setInterval(function() {
            sliderIndication();
            showNextSlider();
        }, 6000);
    }

    function sliderIndication() {
        numberIndication = numberIndication + 1;
        if (numberIndication == 3) {
            numberIndication = 0;
        }
        for (var i = 0; i < indicatorsSlider.length; i++) {
            indicatorsSlider[i].classList.remove("active-indicator-slider");
        }
        indicatorsSlider[numberIndication].classList.add("active-indicator-slider");

    }


    function showNextSlider() {
        numberSliderMain = numberSliderMain - 1500;
        var translateX = "translateX(" + numberSliderMain + "px)";
        elemsSlider.style.transform = translateX;
        elemsSlider.style.transition = "transform 1s ease";

        if (numberSliderMain == -3000) {
            setTimeout(function() {
                addNextNewLi();
                numberSliderMain = -1500;
                elemsSlider.style.transform = "translateX(-1500px)";
                elemsSlider.style.transition = "transform 0s ease";
            }, 1000)
        }
    }

    /*   function showPreviouSlider() {
          num = num + 1500;
          var translateX = "translateX(" + num + "px)";
          elemsSlider.style.transform = translateX;
          elemsSlider.style.transition = "transform 2s ease";
      } */

    function addNextNewLi() {
        var clone = elemsSlider.firstElementChild.cloneNode(true);
        elemsSlider.appendChild(clone);
        elemsSlider.removeChild(elemsSlider.firstElementChild);

    }
    startSlider();

}

function hoveringReadMore() {
    var imgServices = document.querySelectorAll(".img-services");
    var readMore = document.querySelectorAll(".read-more-services");
    for (let i = 0; i < readMore.length; i++) {
        readMore[i].addEventListener("mouseover", function() {
            console.log(readMore[i].dataset.url)
            imgServices[i].style.background = "url(" + imgServices[i].dataset.url + ") no-repeat 0 0";
        })
    }

    function mouseoutReadMore() {
        for (let i = 0; i < readMore.length; i++) {
            readMore[i].addEventListener("mouseout", function() {
                console.log(readMore[i].dataset.mouseout)
                imgServices[i].style.background = "url(" + imgServices[i].dataset.mouseout + ") no-repeat 0 0";
            })
        }
    }
    mouseoutReadMore();
}

function listingHappyClients() {
    var arrows = document.querySelectorAll(".left-right-arrow");
    var scrollEmbl = document.querySelector(".scroll-emblems");
    var listEmblemsClients = document.querySelector(".list-emblems-clients");
    var arrLi = listEmblemsClients.querySelectorAll("li");
    arrows[1].addEventListener("click", nextHappyClients);
    arrows[0].addEventListener("click", previousHappyClients);
    var numberList = 0;
    var numberScrollEmbl = 0;
    var widthList = Number(arrLi.length * 200 - 30);
    listEmblemsClients.style.width = widthList + "px";

    function nextHappyClients() {
        if (-widthList - numberList > -2400) {
            scroll(-widthList + 1170, -widthList + 1170, 293.333333, arrows[0], arrows[1], previousHappyClients, nextHappyClients);
            numberList = numberList - 1200;
        } else {
            numberList = numberList - 1200;
            scroll(numberList, -widthList, 293.333333, arrows[0], arrows[1], previousHappyClients, nextHappyClients);

        }
    }

    function previousHappyClients() {
        numberList = numberList + 1200;
        scroll(numberList, 0, -293.333333, arrows[1], arrows[0], nextHappyClients, previousHappyClients);
    }

    function scroll(num1, num3, num4, elem, elem2, nameFunc1, nameFunc2) {
        numberScrollEmbl = numberScrollEmbl + num4;
        elem.addEventListener("click", nameFunc1);
        listEmblemsClients.style.transform = "translateX(" + num1 + "px)";
        scrollEmbl.style.transform = "translateX(" + numberScrollEmbl + "px)";
        if (num1 == num3) {
            elem2.removeEventListener("click", nameFunc2);
        }
    }
}
listingHappyClients();
hoveringReadMore();
switchingMenuHeader();
showSlides();