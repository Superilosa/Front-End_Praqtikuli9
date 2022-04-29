function checkForm(){
    col = document.getElementById("col").value
    if(col>=1&&col.length!=0&&Number.isInteger(parseFloat(col))){
        row = document.getElementById("row").value
        if(row>=1&&row.length!=0&&Number.isInteger(parseFloat(row))){
            img = document.getElementById("img").value
            if(img>=0&&img.length!=0&&Number.isInteger(parseFloat(img))){
                createTable(col,row,img)
            }else{
                alert("ფოტოების რაოდენობა არაა ვალიდური")
            }
        }else{
            alert("სტრიქონების რაოდენობა არაა ვალიდური")
        }
    }else{
        alert("სვეტების რაოდენობა არაა ვალიდური")
    }
}

function createTable(col,row,img){
    div = document.getElementById("table-output")
    div.innerHTML = ""
    k = 0, kn = 0
    table = document.createElement("table")
    for(i=0;i<row;i++){
        tr = table.insertRow()
        for(j=0;j<col;j++){
            td = tr.insertCell()
            if(kn<img){
                photo = document.createElement("img")
                photo.alt = "IMG"
                photo.src = photos[k]
                td.appendChild(photo)
                k==9 ? k=0 : k++
                kn++
            }
        }
    }
    div.appendChild(table)
}

photos = []
for(i=0;i<10;i++){
    photos.push("images/"+i+".jfif")
}