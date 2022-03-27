var countSheep = function (num){

    let sleep = ""
    if (num === 0){
    return ""
    }
    for (let i = 1; i <= num; i++){
      sleep += i + " " + "sheep..."
    }
    return sleep
}