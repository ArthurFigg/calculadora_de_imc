function calculate(){

  var heigth=(document.getElementById("height").value)/100
  var weight=document.getElementById("weight").value
  console.log(heigth)
  console.log(weight)


  var text=''
    var imc=weight/(heigth)**2
    console.log(imc)
    if(imc<18.5){
    text='você esta magro'
    }else if(imc<24.9){
    text='você esta normal'
    }else if (imc>29.9){
    text='você esta com sobrepeso'
    }

    document.getElementById("text_area").innerText=text

} 