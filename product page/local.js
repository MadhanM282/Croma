document.querySelector("#buy").addEventListener("click",cart)

function cart(){
    window.location.href = "cart.html"
}
document.querySelector("#cart").addEventListener("click",cart)

function cart(){
    window.location.href = "cart.html"
}
document.querySelector("#buy").addEventListener("click",data)

var arr = JSON.parse(localStorage.getItem("cartvalues"));
data(arr);

function data(){
    var name = document.querySelector("h1").textContent;
    var imag = document.querySelector("#image");
    var image = imag.querySelector("img");
    var ide = document.querySelector("#ID");
     var id = ide.textContent;
    var price = document.querySelector(".pric").textContent;
    var strpric = document.querySelector(".str").textContent;

    var obj = {
        nam : name,
        image:image,
        id:id,
        price:price,
        strpric:strpric,
    }
    arr.push(obj);

    localStorage.setItem("cartvalues",JSON.stringify(arr));
}
