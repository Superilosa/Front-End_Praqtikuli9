function calculate(){
    a = document.getElementById("a").value
    if(a>=0&&a.length != 0){
        p = document.getElementById("p").value
        if(p>=0&&p.length != 0){
            n = document.getElementById("n").value
            if(n>=0&&Number.isInteger(parseFloat(n))){
                out = document.getElementById("result")
                out.innerText = a*(1+p*n/100)
            }else{
                alert("დარიცხვის რაოდენობა არ არის ვალიდური")
            }
        }else{
            alert("პროცენტი არ არის ვალიდური")
        }
    }else{
        alert("საწყისი თანხა არ არის ვალიდური")
    }
}