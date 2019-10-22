(function() {
    let myLibrary = {};
    myLibrary.first = function(array) {
        return array[0];
    }
    myLibrary.initial = function(array, num) {
        if (num == null) {
            return array.slice(0, array.length - 1);
        } else {
            return array.slice(0, array.length - num);
        }
    }
    myLibrary.last = function(array, num) {
        if (num == null) {
            return array.splice(-1, 1);

        } else {
            return array.splice(-num, num);
        }
    }
    myLibrary.rest = function(array, num) {
        let newArr = [];
        if (num == null) {
            for (var i = 1; i < array.length; i++) {
                newArr.push(array[i]);
            }
        } else {
            for (var i = num; i < array.length; i++) {
                newArr.push(array[i]);
            }
        }
        return newArr;
    }
    myLibrary.compact = function(array) {
        let newArr = [];
        for (let i = 0; i < array.length; i++) {
            if (array[i] == false || array[i] == null || array[i] == "" || array[i] == undefined || array[i] !== array[i]) {} else {
                newArr.push(array[i]);
            }
        }
        return newArr;
    }
    myLibrary.flatten = function(array, num) {
        let newArr = [];

        function addArr(item) {
            newArr.push(item);
        }
        if (num == true) {
            for (var i = 0; i < array.length; i++) {
                addArr(array[i]);
            }
        } else {
            for (var i = 0; i < array.length; i++) {
                checkArr(array[i]);
            }

            function checkArr(item) {
                if (Array.isArray(item) == true) {
                    for (var i = 0; i < item.length; i++) {
                        checkArr(item[i]);
                    }
                } else {
                    addArr(item);
                }
            }
        }
        return newArr;
    }
    myLibrary.without = function(array) {
        let args = arguments;
        for (let i = 0; i < args.length; i++) {
            array = array.filter(function(elem) {
                if (elem === args[i]) {
                    return false
                } else {
                    return true
                }
            })
        }
        return array;
    }
    window._ = myLibrary;
}());