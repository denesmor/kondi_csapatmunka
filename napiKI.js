

let napiKi = {
    _0: "asdasd",
    _1: "dasd",
    _2: "jey",
    _3: "dik",
    _4: "more",
    _5: "dikhtv",
    _6: "jokytv",
    _7: "joslas"

}

function gererate(){

    let randomNum = Math.round((Math.random() * 8)); 
    console.log(randomNum);

    return randomNum
    
    
}


let ujra = true
let szamok = []
let telilista = false
let elem;
function timer_passage(){

    let randomNum = gererate()
            

            elem = napiKi[randomNum]
            


            setTimeout(timer_passage, 6000)
         }

    
        document.getElementById("demo").innerHTML = elem;
         


    

        
    

timer_passage();