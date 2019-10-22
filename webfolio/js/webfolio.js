function showWorks() {
    var parentWorks = document.querySelector(".gallery");
    var works = parentWorks.querySelectorAll('a');
    var buttonLoadMore = document.querySelector(".load-more");
    buttonLoadMore.addEventListener("click", function() {
        for (let elem of works) {
            elem.classList.remove("noactive-load-more-mw674");
            elem.classList.remove("noactive-load-more");
        }
        this.style.display = "none";

    })

    function hideWorks(num, className) {
        for (var i = num; i < works.length; i++) {
            works[i].classList.add(className);
        }
    }
    hideWorks(6, "noactive-load-more-mw674");
    hideWorks(4, "noactive-load-more");
}
showWorks();