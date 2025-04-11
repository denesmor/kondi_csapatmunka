

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

    let ugyanaz = false

    let randomNum = gererate()

    elem = napiKi[randomNum]

    console.log("----------------")
    console.log(elem)

    for (let i = 0; i < szamok.length(); i++)
    {
        if (szamok[i] == elem)
        {
            ugyanaz = true
        }
    }

    if (!ugyanaz)
    {
        szamok.push(elem)
    }

    console.log("----------------")

    for (let i = 0; i < szamok.length(); i++)
    {
        console.log(szamok[i])
    }

    setTimeout(timer_passage, 6000)
}

timer_passage();

document.getElementById("demo").innerHTML = elem;