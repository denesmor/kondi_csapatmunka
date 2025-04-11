let napiKi = [
    "asdasd",
    "dasd",
    "jey",
    "dik",
    "more",
    "dikhtv",
    "jokytv",
    "joslas"
];

let ujra = true
let szamok = []
let telilista = false
let elem;

function gererate(){

    let randomNum = Math.round(Math.floor(Math.random() * 8)); 
    console.log(randomNum);

    return randomNum
}

function timer_passage(){

    let ugyanaz = false

    let randomNum = gererate()

    elem = napiKi[randomNum]

    console.log("----------------")
    console.log(elem)

    for (let i = 0; i < szamok.length; i++)
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

    for (let i = 0; i < szamok.length; i++)
    {
        console.log(szamok[i])
    }
    
    document.getElementById("demo").innerHTML = elem;

    if (szamok.length == 8)
    {
        szamok = []
    }

    setTimeout(timer_passage, 6000)
}

timer_passage();