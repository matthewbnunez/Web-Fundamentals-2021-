var like1 = document.querySelector("#post1");
var like2 = document.querySelector("#post2");
var like3 = document.querySelector("#post3");


// function likes1() {
//     like1.innerHTML = "10 like(s)";
// }
// function likes2() {
//     like2.innerHTML = "13 like(s)";
// }
// function likes3() {
//     like3.innerHTML = "10 like(s)";
// }

function likes(element) {
    if (element == 1) {
        like1.innerHTML = "10 like(s)";
    }
    else if (element == 2) {
        like2.innerHTML = "13 like(s)";
    }
    else {
        like3.innerHTML = "10 like(s)";
    }
}