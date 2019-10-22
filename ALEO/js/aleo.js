function tabSwitching() {
    var trending = document.querySelector(".trending");
    var editor = document.querySelector(".editor");
    var trendingList = document.querySelector(".trending-list");
    var editorList = document.querySelector(".editor-list")

    trending.addEventListener("click", function() {
        if (trending.classList.contains("active-tab") == false) {
            showHideList(trending, editor);
            trendingList.classList.add("active-list");
            editorList.classList.remove("active-list");
        }
    })


    editor.addEventListener("click", function() {
        if (editor.classList.contains("active-tab") == false) {
            showHideList(trending, editor);
            editorList.classList.add("active-list");
            trendingList.classList.remove("active-list");
        }
    })

    function showHideList(elem, elem2) {
        elem.classList.toggle("active-tab");
        elem2.classList.toggle("active-tab");
    }
}

tabSwitching()