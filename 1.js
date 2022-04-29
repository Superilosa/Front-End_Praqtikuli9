function day(){
    d = event.target.innerText
    days = ["ორშაბათი","სამშაბათი","ოთხშაბათი","ხუთშაბათი","პარასკევი","შაბათი","კვირა"]
    output = document.getElementById("day")
    output.value = days[d-1]
}