"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");

let CountUp = "";
let CountDown = "";

for (let i = 1; i <= 10; i++) {CountUp += i + " ";}

for (let i = 10; i >= 1; i--) {CountDown += i + " ";}   


printOut(CountUp);
printOut(CountDown);

printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");

const SecretNb = 45;
let GuessNb = 0;

while (GuessNb !== SecretNb) {GuessNb = Math.floor(Math.random() * 60) + 1;}

const Tell2 = "Tallet er" + " " + SecretNb;

printOut(Tell2);   

printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");

const TargetNb = 456789;
let RandomNb = 0;
let CountNb = 0;

const StrTime = Date.now().toString();

while (RandomNb !== TargetNb) {RandomNb = Math.floor(Math.random() * 1000000); CountNb++;}

const EndTime = Date.now().toString();
const TimeDiff = (EndTime - StrTime) / 1000;

const Tell31 = "Tallet er" + " " + TargetNb;
const Tell32 = "Det tok" + " " + CountNb + " " + "forsøk å finne tallet";
const Tell33 = "Det tok" + " " + TimeDiff.toFixed(2) + " " + "sekunder å finne tallet";

printOut(Tell31);
printOut(Tell32);
printOut(Tell33);

printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");

let Tell4 = "";

for (let NB = 2; NB < 200; NB++) {
    let IsPrime = true;
    let Divisor = 2;

    while (Divisor < NB) 
        {if (NB % Divisor === 0) {IsPrime = false;break;}Divisor++;}

    if (IsPrime) {Tell4 += NB + " ";}}

printOut(Tell4);

printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");

for (let RW = 1; RW <= 7; RW++) {
    let Tell5 = "";

    for (let KW = 1; KW <= 9; KW++) {
        Tell5 += "K" + KW + "R" + RW + " ";}

    printOut(Tell5);}

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");

for (let Student = 1; Student <= 5; Student++) {
    const Poeng = Math.floor(Math.random() * 236) + 1;
    const Prosent = Math.round((Poeng / 236) * 100);

    let Grade = "";

    if (Prosent >= 89) {Grade = "A";}
    else if (Prosent >= 77) {Grade = "B";}
    else if (Prosent >= 65) {Grade = "C";}
    else if (Prosent >= 53) {Grade = "D";}
    else if (Prosent >= 41) {Grade = "E";} 
    else {Grade = "F";}

    const Tell6 = "Kandidaten " + Student + " fikk " + Poeng + " poeng. Som er " + Prosent + "% og gir karakteren " + Grade;
    
    printOut(Tell6);}

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");

function  Dice(TX, NB) {
    let Count = 0;

    for (let i = 0; i < TX.length; i++) {
        if (TX[i] == NB) {Count++;}}

    return Count;}

let fST = false;
let fTP = false;
let fTW = false;
let fYA = false;

let TR = 0;

do {
    TR++;
    let D1 = Math.floor(Math.random() * 6) + 1;
    let D2 = Math.floor(Math.random() * 6) + 1;
    let D3 = Math.floor(Math.random() * 6) + 1;
    let D4 = Math.floor(Math.random() * 6) + 1;
    let D5 = Math.floor(Math.random() * 6) + 1;
    let D6 = Math.floor(Math.random() * 6) + 1;

    let aDice = "" + D1 + " " + D2 + " " + D3 + " " + D4 + " " + D5 + " " + D6;

    let C1 = Dice(aDice, 1);
    let C2 = Dice(aDice, 2);
    let C3 = Dice(aDice, 3);
    let C4 = Dice(aDice, 4);
    let C5 = Dice(aDice, 5);
    let C6 = Dice(aDice, 6);

    let cDice = "" + C1 + " " + C2 + " " + C3 + " " + C4 + " " + C5 + " " + C6;

    if (!fST && Dice(cDice, 1) === 6) {fST = true;
    printOut(aDice); printOut ("Full Straight"); printOut ("På " + TR + " kast! "); printOut("");}

    if (!fTP && Dice(cDice, 2) === 3) {fTP = true;
    printOut(aDice); printOut ("3 Par"); printOut ("På " + TR + " kast! "); printOut("");}

    if (!fTW && Dice(cDice, 4) === 1 && Dice(cDice, 2) === 1) {fTW = true;
        printOut(aDice); printOut ("Tårn"); printOut ("På " + TR + " kast! "); printOut("");}

    if (!fYA && Dice(cDice, 6) === 1) {fYA = true;
    printOut(aDice); printOut ("Yahtzee"); printOut ("På " + TR + " kast! "); printOut("");}
    }

while (!fST || !fTP || !fTW || !fYA);


printOut(newLine);
