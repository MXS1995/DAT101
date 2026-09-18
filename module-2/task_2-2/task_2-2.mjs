"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";


printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
const MatExp = "2 + 3 * 2 - 4 * 6";
const MatNew = "2 + 3 * (2 - 4) * 6";
const part1answer = 2 + 3 * (2 - 4) * 6;
printOut(MatExp);
printOut(MatNew);
printOut(part1answer);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
const Millimeters = (25*1000) + (34*10);
const Showmili = "25.4 / (25*1000) + (34*10)";
const Inches = 25.4;
const part2answer = Millimeters / Inches;
part2answer.toFixed(2);
const Tell2 = "25 Meters and 34 Centimeters = " + part2answer.toFixed(2) + " in Inches";
printOut(Showmili);
printOut(Tell2);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
const D = 3;
const H = 12;
const M = 14;
const S = 45;
const part3answer = (D * 24 * 60) + (H * 60) + (M) + (S / 60);
const Tell3 = "3 Days, 12 Hours, 14 Minutes and 45 Seconds = " + part3answer.toFixed(2) + " in Minutes";
printOut(Tell3);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
const MiA = 6322.52;
const D2 = Math.floor(MiA / 24 / 60);
let remaining = MiA / (24 * 60) - D2;
const H2 = Math.floor(remaining * 24);
remaining = remaining * 24 - H2;
const M2 = Math.floor(remaining * 60);
remaining = remaining * 60 - M2;
const S2 = Math.floor(remaining * 60);
const Tell4 = "6322.52 Minutes = " + D2 + " Days, " + H2 + " Hours, " + M2 + " Minutes and " + S2 + " Seconds";
printOut(Tell4);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
const NoR = 76 / 8.6;
const UsR = 8.6 / 76;
const UsA = 54;
const NoA = Math.round(UsA * NoR);  
const Tell5 = (UsA + " USD" + " = " + NoA + " NOK");
const Tell5_2 = (NoA + " NOK" + " = " + UsA + " USD");
printOut(Tell5);
printOut(Tell5_2);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
const Qu6 = "Det er mye mellom himmel og jord som vi ikke forstår.";
const Tell61 = "The text has " + Qu6.length + " characters";
printOut (Qu6);
printOut (Tell61);
const Tell62 = "The character at position 19 is: " + Qu6.charAt(19);
printOut (Tell62);
const Tell63 = "The substring from position 35 to 43 is: " + Qu6.substring(35, 43);
printOut (Tell63);
const Tell64 = "The index of 'jord' is: " + Qu6.indexOf("jord");
printOut (Tell64);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
const Q71 = (5 > 3);
const Q72 = (7 >= 7);
const Q73 = ("a" > "b");
const Q74 = (1 < "a");
const Q75 = ("2500" < "abcd");
const Q76 = ("arne" != "thomas");
const Q77 = ((2 == 5) === true);
const Q78 = (("abcd" > "bcd") === false);   

printOut(" 5 > 3 is: " + Q71);
printOut(" 7 >= 7 is: " + Q72);
printOut(" \"a\" > \"b\" is: " + Q73);
printOut(" \"1\" < \"a\" is: " + Q74);
printOut(" \"2500\" < \"abcd\" is: " + Q75);
printOut(" \"arne\" != \"thomas\" is: " + Q76);
printOut(" (2 equals 5) === true is: " + Q77);
printOut(" \"abcd\" > \"bcd\" === false is: " + Q78);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
const Q81 = Number("254");
const Q82 = parseInt("57.23");
const Q825 = parseFloat("57.23");
const Q83 = parseFloat("25 kroner");
const Q835 = Number("25 kroner");

const Tell81 = ("\"254\" = " + Q81);
const Tell82 = ("\"57.23\" = " + Q82);
const Tell83 = ("\"25 kroner\" = " + Q83);

printOut(Tell81);
printOut(Tell82);
printOut(Tell83);


printOut("--- Part 9 ----------------------------------------------------------------------------------------------");

const r = Math.floor(Math.random() * 360) + 1;
const Tell90 = ("Random number between 1 and 360: " + r);
printOut(Tell90);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
const WiE = Math.floor(131 / 7);
const DiL = 131 % 7; 
const Tell10 = ("131 days is: " + WiE + " weeks and " + DiL + " days");
printOut(Tell10);
