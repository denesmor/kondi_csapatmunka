

let napiKi = {
    _0: "asdasd",
    _1: "dasd",
    _2: "jey",
    _3: "dik"

}
function timer_passage(){
    var now = new Date()
  
        
        let randomNum = Math.round((Math.random() * 4)); // 0 to 3
        console.log(randomNum);
        let elem = napiKi[randomNum]
        
  
        document.getElementById("demo").innerHTML = elem;
         
        //do something you want

    
    //setTimeout(timer_passage, 600)//exec myself after 60000 ms
}

timer_passage();


