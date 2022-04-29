function randomNumbers(){
    out = document.getElementById("output")
    result = ""
    for(i=0;i<30;i++){
        result += Math.random()*30+"&ensp; "
    }
    out.innerHTML = result
}