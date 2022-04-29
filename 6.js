function randomNumbers(){
    min = document.getElementById("min").value
    max = document.getElementById("max").value
    if(min.length == 0 || max.length == 0){
        alert("შეიყვანეთ ქვედა და ზედა ზღვარი")
    }else{
        min = parseFloat(min)
        max = parseFloat(max)
        if(min<=max){   
            out = document.getElementById("output")
            result = ""
            for(i=0;i<30;i++){
                result += (Math.random()*(max-min)+min)+"&ensp; "
            }
            out.innerHTML = result
        }else{
            alert("ქვედა ზღვარი მეტია ზედა ზღვარზე")
        }
    }
}