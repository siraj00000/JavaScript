// chapter 21-15

// task 01 

var firstName,lastName,fullName;
    firstName = prompt("write your firstname ");
    lastName  = prompt("write your lastname ");
    fullName = firstName + " " + lastName;
    document.write("Heloo!" + fullName);
document.write("<br><br><br>");

// task 02

var mobModel;
    mobModel = prompt("Tell us about your favorite mobile model ")
    document.write("your fav mobile model is " + mobModel + "<br>")
    document.write("Lenght of string : " + mobModel.length + "<br>")
document.write("<br><br><br>");

// task 03

var text = "Pakistan";
document.write("String " + text)
var ask = prompt(text)
var segIndex = text.lastIndexOf(ask);
document.write("index of " + ask + " : " + segIndex)
document.write("<br><br><br>");

// task 04

var text1 = "Hello world!";
var segIndex1 = text1.lastIndexOf("l");
document.write("String : " + text1 + "<br>")
document.write("Last index of 'l' : " + segIndex1)
document.write("<br><br><br>");
// task 05

var text,indexAsk ;
    text = "Pakistan"
    document.write("String : " + text + " <br>")
    indexAsk = prompt(text + " give the index of letter")
    text = text.charAt(indexAsk)
    document.write("Character of index at " + indexAsk + " : " + text)
document.write("<br><br><br>");


// task 06


var firstName,lastName,fullName;
    firstName = prompt("write your firstname ");
    lastName  = prompt("write your lastname ");
    fullName = firstName.concat(" " +  lastName);
    document.write("Heloo! " + fullName);
document.write("<br><br><br>");


// task 07

var cityRep,replacement;
    cityRep = "Hyderabad"
    document.write(cityRep + "<br>")
    replacement = cityRep.replace("Hyder","Islam")
    document.write(replacement)
document.write("<br><br><br>");


// task 08
var message = "Ali and Sami are best friends. They play cricket and football together."
    document.write(message + "<br>")
    message = message.replace(/and/g,"&")

    document.write(message)
document.write("<br><br><br>");


// task 09
var numStr = "720";
    document.write("Value : " + numStr + "<br>")
    document.write("type : " + "string" + "<br>")
var numStr = parseInt(numStr)
    document.write("value : " + numStr  + "<br>")
    document.write("type : " + "Number")
document.write("<br><br><br>");


// task 10
var captilize;
    captilize = prompt("give any number")
    captilize = captilize.toUpperCase()
    document.write(captilize)

document.write("<br><br><br>");


// task 11
var askAlph,aplh1,aplhLast;
    askAlph = prompt("Write any word");
    aplh1 = askAlph.slice(0,1);
    aplhLast = askAlph.slice(1);
    alpha = aplh1.toUpperCase();
    aplhLast = aplhLast.toLowerCase();
var askAlph = aplh1 + aplhLast;
    document.write(askAlph);
document.write("<br><br><br>");


// task 12
var numNum;
    numNum = 35.65;
    numNum = numNum * 100;
    document.write(numNum)
document.write("<br><br><br>");

// chater 16-30

// task 01
var numAsk,numAsk1,numAsk2,numAsk3;
    numAsk = +prompt("give the number in a decimal")
    document.write("Number : " + numAsk + "<br>")
    numAsk1 = Math.round(numAsk)
    document.write("Round : " + numAsk1 + "<br>")
    numAsk2 = Math.floor(numAsk)
    document.write("Floor : " + numAsk2 + "<br>")
    numAsk3 = Math.ceil(numAsk)
    document.write("ceil : " + numAsk3 + "<br>")
document.write("<br><br><br>")

// task 02
var negAsk,negAsk0,negAsk1,negAsk2;
    negAsk = -prompt("write a number")
    document.write("Number : " + negAsk + "<br>")
    negAsk0 = Math.round(negAsk)
    document.write("Round : " + negAsk0 + "<br>")
    negAsk1 = Math.floor(negAsk)
    document.write("Floor : " + negAsk1 + "<br>")
    negAsk2 = Math.ceil(negAsk)
    document.write("Floor : " + negAsk2 + "<br>")
document.write("<br><br><br>")

// task 03
var absolute,abs;
    absolute = prompt("write any number")
    abs = -absolute
    document.write("The absolute value of : " + abs + " is " + absolute)
document.write("<br><br><br>")

// task 04
var random,random1;

    random = Math.random()
    random = Math.ceil(random)
    random1 = random * Math.random()
    random1 = Math.ceil(random1)
    document.write("random dies value : " + random1)
document.write("<br><br><br>")

// task 05
    var head,tail,floor,toss;
    head = prompt("enter head's username")
    tail = prompt("enter tail's username")
    toss = Math.random() *2;
    floor = Math.floor(toss)
    if(floor > 0){
        document.write("headuser win the Toss")
    }else{
        document.write("tailuser win the Toss")
    }
document.write("<br><br><br>")

// task 06

var randomNum;
    askRandom = -prompt("give any random number between 1-10")
    randomNum = Math.random() * 10;
    randomNum = Math.floor(randomNum)
    if(askRandom === randomNum){
        document.write("Congratulation! " + "<br>")
    }else{
        document.write("Try again! " + "<br>")
    }
    document.write(" Right number is : " + randomNum)
document.write("<br><br><br>")

// chapter 31-34
// task 01
var date;
    date = new Date()
    document.write(date + "<br>")

document.write("<br><br><br>")

// task 02
var monthNames = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"
];

var d = new Date();
document.write("The current month is " + monthNames[d.getMonth()])





document.write("<br><br><br>")

// task 03
var days = ['Sun','Mon','Tues','Wed','Thrus','Fri','Sat'] 
var day = days[date.getDay()]
document.write("Today is " + day)
document.write("<br><br><br>")

// task 04
if(day == "sat" || "sun"){
    document.write("Its fun day")
}else("Its a working day")
document.write("<br><br><br>")

// task 05
var monthcheck;
    monthcheck = date.getDay()
    if(monthcheck < 15){
        document.write("First fifteen days of the month")
    }else{
        document.write("Last days of the month")
    }
document.write("<br><br><br>")

// task 06    

document.write(date + "<br>")
var milliSec,min;
    milliSec = date.getTime()
    document.write("Elapsed milliseconds since Jan. 1, 1970 : "  + milliSec + "<br>")

    min = milliSec * 3600;
    document.write("Elapsed minutes since Jan. 1, 1970 : " + min + "<br>")

document.write("<br><br><br>")

// task 07
var dateAm;
    dateAm = date.getHours() 
    
    document.write("The time is : " + dateAm  + "<br>")
    if(dateAm >= 0 && dateAm == 12 ){
        document.write("Its AM")
    }else{
        document.write("Its PM")
    }
document.write("<br><br><br>")

// task 08
var laterDate;
    laterDate = date.setMonth(11)
    laterDate = date.setDate(31)
    document.write(date)
document.write("<br><br><br>")

// task 09
var hourAgo;
    hourAgo = date.setHours(18);
    document.write("1 hour ago it was " +  date)    
document.write("<br><br><br>")

// task 10
var yearBack;
    yearBack = date.setFullYear(1915)
    document.write("100 years ago it was " + date)
document.write("<br><br><br>")

// task 11
var userAge,calYear;
    userAge = prompt("Write your age")
    calYear = date.getFullYear() - userAge; 
    document.write("your age is " + userAge + "<br>")
    document.write("your birth year is " + calYear)
document.write("<br><br><br>")

// task 12
    document.write("<h1> K-Electric bill</h1>")
var KE,customer,billMonth,numUnit,chrgePerUnit,netAmount,latePay,grossAmount;
    customer = "Mohammad Siraj"
    billMonth = "June"
    numUnit = 200
    chrgePerUnit = 16
    netAmount = numUnit * 16;
    latePay = 350
    grossAmount = netAmount + latePay;
    document.write("Customer Name : " + customer + "<br>")
    document.write("Month : " + billMonth + "<br>")
    document.write("Number of units : " + numUnit + "<br>") 
    document.write("charge per units : " + chrgePerUnit + "<br>")
    document.write("Net Amount Payable (within Due Date): " + netAmount + "<br>")
    document.write("Late payment surcharge : " + latePay + "<br>")
    document.write("Gross Amount Payable (after Due Date): " + grossAmount + "<br>")






// chapter 35-38
// task 01
function newdate(){
    var dat = new Date()
    document.write(dat)      
}
newdate();

document.write("<br><br><br>")

// task 02

function greeting(){
    var fir1stName = prompt("enter your first name");
    var lasName = prompt("enter your last name");
    var fulName = fir1stName + " " + lasName;
    document.write(fulName)
}
greeting();
document.write("<br><br><br>")

// task 03
function add(){
    var a1st = +prompt("first number to add ")
    var b2nd = +prompt("second number to  add ")
    var adding = a1st + b2nd;
    document.write("The Answer of two number by addition is : " + adding)
}
add();
document.write("<br><br><br>")

// task 04
function calculator(){
    var num1,num2,operator,result;
    num1 = +prompt("Give first number ")
    num2 = +prompt("Give second number ")
    operator = prompt("Give operator number (+,-,*,/) ")
    if(operator == "+"){
        result = num1 + num2;
       
    }else if(operator == "-"){
        result = num1 - num2;
       
    }else if(operator == "*"){
        result = num1 * num2;
       
    }else if(operator == "/"){
        result = num1 / num2;
       
    }else{
        result = "Error"
    }
    return result;
}
document.write( calculator());
document.write("<br><br><br>")

// task 05
function square(numb){
    numb = prompt("write any number to make its square")
    return numb * numb;
}
document.write(square());
document.write("<br><br><br>")

// task 06
 
function Factorial(n) {
    n = +prompt("Please enter an integer") 
    var ans=1; 
      
    for (var i = 2; i <= n; i++){ 
        ans = ans * i; 
    }
    return ans; 
} 
document.write(Factorial())
document.write("<br><br><br>")

// task 07
function counting(){
    var startNum = +prompt("Give the starting number of series")
    var endNum = +prompt("Give the end number of the series")
for(var star = startNum; star < endNum; star++){
         document.write(star + " , " )
}

    return star
    
}
document.write(counting())
document.write("<br><br><br>")

// task 08
function triangle(){
    var base,perp;
        base = +prompt("Give the value of Base")
        perp = +prompt("Give the value of Perpendicular")
    var hyp;
        hyp = [(base * base) + (perp * perp)] ^ 1/2;
    var hypr = Math.sqrt(hyp)
        return hypr    
}
document.write(triangle())
document.write("<br><br><br>")

// task 09
function areaOfTri(width,height){
    width = prompt("give the width")
    height = prompt("give the height")
    var A = width * height;
    return A
}

document.write("The area of triangle : " + areaOfTri())
document.write("<br><br><br>")

// task 10
function palindrome(){
    var word = prompt("Enter any  word")
var check = "";
for(var chc = word.length -1; chc >= 0;chc--){
    check += word[chc]
}
if(word === check){
    return check + " is a palindromic word"   
}else{
    return check + " isn't a palindromic word" 
}

}
document.write(palindrome())
document.write("<br><br><br>")

// // task 11
function strCon(strConvert){
    strConvert = prompt("Type any sentence ")
    return strConvert.charAt(0).toUpperCase() + strConvert.slice(1)
}
document.write(strCon())
document.write("<br><br><br>")

// // task 12








// // task 13

function char_count(str, letter) 
{
 var letter_Count = 0;
 for (var position = 0; position < str.length; position++) 
 {
    if (str.charAt(position) == letter) 
      {
      letter_Count += 1;
      }
  }
  return letter_Count;
}

document.write(char_count( 'siraj@sdj.com sou hh ', 'o'));
document.write("<br><br><br>")

// // // task 14 
function calcCircumference(Circumference){
    raDius = prompt("Give the radius")
    Circumference = 2 * 3.142 * raDius;
    Circumference = Math.round(Circumference)
    return Circumference
}
document.write("The circumferance of circle is : " + calcCircumference() + "<br>")

function calcArea(Area){
    Area =  3.142 * (raDius * raDius);
    Area = Math.round(Area)
    return Area
}
document.write("The Area of circle is : " + calcArea())