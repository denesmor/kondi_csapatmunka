let napiKi = [
    " Csinálj 20 fekvőtámaszt ",
    " Tarts 1 perc planket ",
    " Ugorj 100 terpesz-zár szökkenést (jumping jack) ",
    " Csinálj 30 guggolást ",
    " Tarts 30 másodperc falülést ",
    " Fuss 2 km-t ",
    " Emelj meg 20-szor 10 kg-ot bicepszre ",
    " Csinálj 15 burpee-t ",
    " Emeld meg a lábad 20-szor hasprés közben ",
    " Tarts 1 perc oldalsó planket (mindkét oldalra) ",
    " 3x20 térdhúzás magas térdemeléssel ",
    " Csinálj 25 tricepsz tolást padon ",
    " 50 hegymászó (mountain climber) ",
    " 3x10 kitörés mindkét lábra ",
    " 2 perc kötélen ugrálás ",
    " 5 perc lépcsőzés ",
    " 3x10 felhúzás (ha van súlyod) ",
    " Csinálj 100 hasprést ",
    " 1 perc pihenő nélküli guggolás ",
    " Csinálj 20 lábemelést hasra ",
    " Tarts 2 perc planket megszakítás nélkül ",
    " Végez 3x15 combhajlítást fitballal ",
    " Csinálj 10 húzódzkodást (vagy negatív verziót) ",
    " Csinálj 30 láblendítést hátra (farizomra) ",
    " Tartós 1 perces négykézláb pozíció (core aktiválás) ",
    " 4x15 vállból nyomás kézi súllyal ",
    " 5 perc dinamikus bemelegítés ",
    " Csinálj 30 ollózást hasra ",
    " Csinálj 10 box jumpet (vagy lépcsőre) ",
    " Csinálj 20 szűk fekvőtámaszt tricepszre ",
    " Tarts 1 perces egyensúly gyakorlatot (egy lábon állás) ",
    " 3x20 jumping lunge (ugrálós kitörés) ",
    " 30 perc séta friss levegőn ",
    " 10 perc mobilizáció (csípő, váll, térd) ",
    " 3x15 kettlebell swing (vagy súlyzóval) ",
    " Végezd el a 7 perces edzés app-ot ",
    " 5 perc tabata edzés (20 mp munka – 10 mp pihi) ",
    " 100 lábujjérintés hasprésben ",
    " 20 oldalirányú guggolás (side lunge) ",
    " 1 perces “hollow hold” pozíció hasra ",
    " 3x10 álló vádliemelés ",
    " 50 térdfelhúzás (high knees) ",
    " 15 perces jóga (YouTube-ról) ",
    " 3 kör 10-10-10 fekvőtámasz, guggolás, plank ",
    " 20 medvejárás lépés előre-hátra ",
    " 3x12 csípőemelés (híd) ",
    " 1 perc falnál vállmobilizáció ",
    " 10 húzódzkodás gumiszalaggal ",
    " 3x10 hasprés labdával ",
    " 20 lábujjérintés állásból ",
    " 4x12 hátra kitörés ",
    " 10 perc gyors tempójú séta ",
    " 20 törzsdöntés súllyal (deadlift mozdulat) ",
    " 3 kör has, törzs és váll erősítésre ",
    " 5 perc egyensúlygyakorlatok (pl. BOSU labdán, ha van) ",
    " 2 perc biciklis hasprés ",
    " 30 guggolás miniband-del ",
    " 15 lábujjhegyes guggolás ",
    " 20 db vállkörzés súllyal vagy palackkal ",
    " 3x15 vállmobilizáció gumiszalaggal ",
    " 50 oldalsó lábemelés ",
    " 2 perc statikus guggolás ",
    " 100 lépcsőfok felfelé (vagy lépcsőn) ",
    " 3x10 plank vállérintés ",
    " Csinálj 3 különböző plank variációt ",
    " 10 perces hasizom edzés (YouTube alapján) ",
    " 15 perc HIIT edzés ",
    " 20 box step-up súllyal ",
    " 20 guggolásból felugrás ",
    " 3x15 oldalsó kitörés ",
    " 3x20 hasprés térdfelhúzással ",
    " 1 perc súly nélküli bicepsz curl ",
    " 20 vállból oldalemelés (súlyzó vagy vízpalack) ",
    " 3x12 combemelés oldalfekvésben ",
    " 4 kör 10 fekvő + 10 guggolás + 10 hasprés ",
    " 3x20 medencemobilizáció ",
    " Csinálj 20 plank csípőbillentést ",
    " 30 perc bringázás (kint vagy szobabicikli) ",
    " 15 perces core edzés ",
    " 3x10 ugrás egy lábról másikra ",
    " Csinálj 30 pike push-up-ot (vállra) ",
    " 2 perc álló törzskörzés lassan ",
    " 50 rúgás hátrafelé (farizom) ",
    " 4x15 váll-lapocka zárás (súlyzóval) ",
    " 2 perc sarokérintés plankben ",
    " 10 létra intervall (lépcsőfutás, ha van hozzáférés) ",
    " 20 ugrás padra/lépcsőre ",
    " 15 perc nyújtás ",
    " 3x15 plank váltott lábemeléssel ",
    " 3x10 lebegőülés (V-sit) ",
    " Csinálj 1 perc „sissy squat”-ot támasztással ",
    " 4x15 térdfelhúzás TRX-en (vagy csúszós felületen) ",
    " 5 perc kímélő válltorna ",
    " 30 perc könnyű erdei túra ",
    " 3 kör: 10 burpee, 10 plank vállérintés, 10 guggolás ",
    " Csinálj 20 „slow push-up”-ot (4 másodperc le + 2 fel) ",
    " 15 perc intervall futás ",
    " 20 “toe reach crunch” (lábujjérintés) ",
    " 1 perc plank csípőforgatással "
];

let szamok = []
let telilista = false
let elem;

function gererate(){

    let randomNum = Math.floor(Math.floor(Math.random() * 100)); 
    console.log(randomNum);

    return randomNum
}

function timer_passage(){

    let ujra = false

    do
    {
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
            ujra = false
        }
        else
        {
            ujra = true
        }
    } while (ujra)

    console.log("----------------")

    for (let i = 0; i < szamok.length; i++)
    {
        console.log(szamok[i])
    }
    
    document.getElementById("demo").innerHTML = elem;

    console.log(szamok.length)

    if (szamok.length == 99)
    {
        szamok = []
    }

    setTimeout(timer_passage, 900000)
}

timer_passage();