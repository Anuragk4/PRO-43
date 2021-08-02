class System{
constructor(){}
    authenciate(actualCode,enteredCode){
        textSize(20)
        fill("black")
        text(code,300,300)

        if(actualCode===enteredCode.toUpperCase()){

            return true
        }else{
            return false
        }
    }
}




