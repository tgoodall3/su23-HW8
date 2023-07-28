function checkDivisibility(){
    let x = document.getElementById("inputValue").value;

    if (x%7==0){
        document.getElementById("result").innerHTML="The number is divisble by 7";
        return true;
    }
    else{
        document.getElementById("result").innerHTML="The number is not divisble by 7";
        return false;
    }
}
