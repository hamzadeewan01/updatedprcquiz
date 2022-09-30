window.onload = function () {
    var checkingCount = localStorage.getItem("count")
    if (checkingCount == "1") {
        window.location.href = `./home.html`
    } else if (checkingCount == null) {
        localStorage.setItem("count", "0")
        window.location.reload();
    }
    setTimeout(function () {
        document.getElementsByClassName("loader")[0].style.height = "auto"
        document.getElementsByTagName("body")[0].children[0].children[0].classList.add("hidden");
        document.getElementsByTagName("body")[0].children[1].classList.remove("hidden");
        document.getElementsByTagName("body")[0].children[2].classList.remove("hidden");
    }, 1000)
}
function logOut() {
    localStorage.setItem("count", "0")
    window.location.href = `../index.html`
}
function result_page() {
    window.location.href = "../result/result.html";
}
var name = localStorage.getItem("fname")
document.getElementsByClassName("heading")[0].innerHTML = `Welcome, `

function joinQuiz(link, sub, name) {
    localStorage.setItem("course", link)
    localStorage.setItem("subject", sub)
    localStorage.setItem("coursename", name)
    window.location.href = `${link}/${link}.html`
}


// gadgets

function calculatorBtn() {
    var left = (screen.width - 515) / 2;
    var top = ((screen.height - 679) / 2) - 40;
    window.open("../gadgets/Calculator/calculator.html", "", "width =  380, height = 520" + ", top = " + top + ", left = " + left);
}

function stickynoteBtn() {
    var left = (screen.width - 515) / 2;
    var top = ((screen.height - 679) / 2) - 40;
    window.open("../gadgets/Sticky_Notes/stickynote.html", "", "width =  300, height = 320" + ", top = " + top + ", left = " + left);
}