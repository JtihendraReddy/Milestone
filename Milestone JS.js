let plus = document.getElementById("plus-sig");
let minus = document.getElementById("minus-sign");
let exp = document.getElementById("Experience");
let btn = document.getElementById("btn");
let btn1 = document.getElementById("btn1");
let grp = document.getElementById("group");
let search = document.getElementById("search");

plus.onclick = function() {
    document.getElementById("para").classList.add("para1");
    document.getElementById("minus-sign").style.display = "block";
    document.getElementById("plus-sig").style.display = "none";
};

minus.onclick = function() {
    plus.style.display = "block";
    minus.style.display = "none";
    document.getElementById("para").classList.add("para2");
};

exp.onclick = function() {
    document.getElementById("det").style.display = "block";
};

btn.onclick = function() {
    document.getElementById("det").style.display = "none";
};

grp.onclick = function() {
    document.getElementById("deta").style.display = "block";
    document.getElementById("det").style.display = "none";
};

btn1.onclick = function() {
    document.getElementById("deta").style.display = "none";
};

search.onclick = function() {
    document.getElementById("input").style.display = "block";
    document.getElementById("cancel").style.display = "block";
    search.style.display = "none";
}

document.getElementById("cancel").onclick = function() {
    document.getElementById("input").style.display = "none";
    document.getElementById("cancel").style.display = "none";
    search.style.display = "block";
}