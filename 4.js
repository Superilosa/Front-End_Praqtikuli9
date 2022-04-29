function calculate(){
    a = document.getElementById("a").value
    if(a>=0&&a.length != 0){
        p = document.getElementById("p").value
        if(p>=0&&p.length != 0){
            n = document.getElementById("n").value
            if(n>=0&&Number.isInteger(parseFloat(n))){
                out = document.getElementById("result")
                result = a;
                for(i=0;i<n;i++){
                    result = result*(1+p/100)
                }
                out.innerText = result
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