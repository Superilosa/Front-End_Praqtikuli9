firstInput = true
output = false

function input(){
    t = event.target.innerText
    if(output){
        in1 = document.getElementById("input1")
        in2 = document.getElementById("input2")
        inO = document.getElementById("inputOperator")
        inE = document.getElementById("inputEquals")
        out = document.getElementById("output")
        if(isNaN(t)){
            if(t == '⌫'){
                in1.value = ''
                in2.value = ''
                inO.innerText = ''
                inE.innerText = ''
                out.value = ''
                output = false
                firstInput = true
            }else if(t == '.'){
                in1.value = t
                in2.value = ''
                inO.innerText = ''
                inE.innerText = ''
                out.value = ''
                output = false
                firstInput = true
            }else if(t != '='){
                in1.value = out.value
                in2.value = ''
                inO.innerText = t
                inE.innerText = ''
                out.value = ''
                output = false
            }
        }else{           
            in1.value = t
            in2.value = ''
            inO.innerText = ''
            inE.innerText = ''
            out.value = ''
            output = false
            firstInput = true
        }
    }else{
        if(firstInput){
            if(isNaN(t)){
                if(t == '⌫'){
                    in1 = document.getElementById("input1")
                    text = in1.value
                    if(text.length > 0){
                        text = text.substring(0,text.length-1)
                        in1.value = text
                    }
                }else if(t == '.'){
                    in1 = document.getElementById("input1")
                    text = in1.value
                    if(!text.includes('.')){
                        in1.value = text+t
                    }
                }else if(t != '='){
                    text = document.getElementById("input1").value
                    if(text.length>0 && text.charAt(text.length-1) != '.'){
                        inO = document.getElementById("inputOperator")
                        inO.innerText = t
                        firstInput = false
                    }
                }
            }else{
                in1 = document.getElementById("input1")
                text = in1.value
                in1.value = text+t
            }
        }else{
            if(isNaN(t)){
                if(t == '⌫'){
                    in2 = document.getElementById("input2")
                    text = in2.value
                    if(text.length > 0){
                        text = text.substring(0,text.length-1)
                        in2.value = text
                    }else{
                        inO = document.getElementById("inputOperator")
                        inO.innerText = ''
                        firstInput = true
                    }
                }else if(t == '.'){
                    in2 = document.getElementById("input2")
                    text = in2.value
                    if(!text.includes('.')){
                        in2.value = text+t
                    }
                }else if(t == '='){
                    text = document.getElementById("input2").value
                    if(text.length > 0){
                        inE = document.getElementById("inputEquals")
                        inE.innerText = t
                        out = document.getElementById("output")
                        out.value = calculate(parseFloat(document.getElementById("input1").value),parseFloat(text),document.getElementById("inputOperator").innerText)
                    }
                }
            }else{
                in2 = document.getElementById("input2")
                text = in2.value
                in2.value = text+t
            }
        }
    }
}

function calculate(a,b,o){
    output = true
    if(o == '+'){
        return a+b
    }else if(o == '-'){
        return a-b
    }else if(o == 'x'){
        return a*b
    }else if(o == '%'){
        return a/b
    }else if(o == '^'){
        return a**b
    }else if(o == '√'){
        return Math.pow(a, 1/b)
    }
}