

let napiKi = {
    _0: "asdasd",
    _1: "dasd",
    _2: "jey",
    _3: "dik"

}

function gererate(){
    let randomNum = Math.round((Math.random() * 4)); // 0 to 3
    console.log(randomNum);
   // let elem = napiKi[randomNum]
    return randomNum
}

let ujra = true
let szamok = []
let telilista = false
function timer_passage(){

    while (telilista)
    {
        while (ujra)
        {
            let randomNum = gererate()
        
            let ugyanaz = false
            for (let i = 0; i < szamok.length; i++)
            {
                if (randomNum == szamok[i])
                {
                    ugyanaz = true
                }
            }

            if (ugyanaz == true)
            {
                ujra = false
            }
            console.log('------------');

            for (let i = 0; i < szamok.length; i++)
            {
                console.log(szamok[i]);
            }
            console.log('------------');

            if (szamok.length = 4)
            {
                telilista = true
            }
        }
    }
    
        document.getElementById("demo").innerHTML = elem;
         
        //do something you want

    
    setTimeout(gererate, 6000)//exec myself after 60000 ms

    
}

timer_passage();