 document.querySelector("#search").addEventListener("click",press);
      function press(){
        var val = document.querySelector("#inp").value;
        if(val === "laptop"){
          
          window.location.href = "laptop.html"
        }
        else if(val === "mobile"){
            window.location.href = "mobile.html"
        }
        else if(val === "telivision"){
          window.location.href = "tv.html"
        }
        else if(val === "audio"){
          window.location.href = "audio.html"
        }
        else{
          alert("Oops! Match is not found")
        }
        console.log(val);

      }