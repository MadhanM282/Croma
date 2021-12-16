document.querySelector("#buy").addEventListener("click",cart)

function cart(){
    window.location.href = "cart.html"
}
document.querySelector("#cart").addEventListener("click",cart)

function cart(){
    window.location.href = "cart.html"
}
var data = [
    {
        name :"Apple iPhone 11 (64GB ROM, 4GB RAM, MHDF3HN/A, Purple)",
        img:"https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1605262065/Croma%20Assets/Communication/Mobiles/Images/9001728409630.png/mxw_1440,f_auto",
        id:"PRODUCT ID: 230110",
        price:"₹49,900.00 "
    },
    {
        name :"Apple iPhone 12 (64GB ROM, 4GB RAM, MGJ63HN/A, White)",
        img:"https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1605272155/Croma%20Assets/Communication/Mobiles/Images/8999513391134.png/mxw_1440,f_auto",
        id:"PRODUCT ID: 229920",
        price:"₹63,900.00 "
    },
    {
        name :"Apple iPhone 12 (128GB ROM, 4GB RAM, MGJE3HN/A, Blue)",
        img:"https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1605269941/Croma%20Assets/Communication/Mobiles/Images/8999510638622.png/mxw_1440,f_auto",
        id:"PRODUCT ID: 229927",
        price:"₹68,900.00"
    },
    {
        name :"pTron Avento Classic In-Ear Passive Noise Cancellation Wireless Earphone with Mic (Bluetooth 5.0, Magnetic Locking, 140317895, Black/Blue)",
        img:"https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1632479986/Croma%20Assets/Entertainment/Headphones%20and%20Earphones/Images/243179_svykpx.png/mxw_1440,f_auto",
        id:"PRODUCT ID: 243179",
        price:"₹599.00"
    }
];
// document.querySelector("#buy").addEventListener("click",data)

// var arr = JSON.parse(localStorage.getItem("cartvalues"));
// data(arr);

// function data(){
//     var name = document.querySelector("h1").textContent;
//     var imag = document.querySelector("#image");
//     var image = imag.querySelector("img");
//     var ide = document.querySelector("#ID");
//      var id = ide.textContent;
//     var price = document.querySelector(".pric").textContent;
//     var strpric = document.querySelector(".str").textContent;

//     var obj = {
//         nam : name,
//         image:image,
//         id:id,
//         price:price,
//         strpric:strpric,
//     }
//     arr.push(obj);

//     localStorage.setItem("cartvalues",JSON.stringify(arr));
// }
