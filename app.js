window.alert("javascript Alert!")
alert(" Error! please enter a valid password")
alert(" Welcome! to js land...\n Happy coding ")
alert(" Welcome to js land...")
alert(" hello! i can run js through my web browser's concole")

// //-------------------------------------------  2nd chapter-------------------

var username;
var myName;
    myName = "m.siraj";
    alert(myName);    
 var message;
    message = "HELLO WORLD!";
    alert (message);
var Age, Qualification;

    Age = 17;
    Qualification = "intermidiate";
    alert(myName);
    alert(Age);
    alert(Qualification);
var pizza;
    pizza = "pizza\npizz\npiz\npi\np";
    alert(pizza);    
var Email;
    Email = "my email address is " + "example@gmail.com";
    alert(Email);    
var book;
    book =  "A smarter way to learn JavaScript";
    alert(book);    
var a;
    a = "Yah! i can write HTML content through Javascript";
    document.write(a + "<br><br><br>");    
var design;
    design = "--------------▬ஜ۩۞۩ஜ--------------";
    alert(design);


// -------------------------------------------3rd chapter-------------------------------------------

var age;
    age = "i am 17 year old";
    alert(age);
var visit;
    visit = " you have visited this site 14 times";
    alert(visit)
var birthYear;
    birthYear = "My birth year is 2003 <br> my decleared variable is number"
    document.write(birthYear + "<br><br><br>")        
var Visitor  , product , Quainity;

    Visitor  = "John Deo"
    product  = "T-shirt(s)"
    Quainity = "5"
    document.write(Visitor + " ordered " + Quainity + product + " on XYZ Clothing store " + "<br><br><br>")

//------------------------------------------- chapter 4-------------------------------------------

 var first,ligall,illigal;
    first = "RULES FOR NAMING JS VARIABLE";
    ligall = "myName , Age , Quailification , Quailtity , job";
    illigal = "alert , var , let , const , let"; 
    document.write("5 ligal variable : " + ligall + "<br>" );
    document.write("5 illigal variable : " + illigal + "<br><br><br>");
    document.write(first + "<br><br><br>");    
var v,x,y,z;
    x = "letters, numbers, dollar signs, and underscores"
    y = "letter, $ , _";
    z = "sensitive";
    v = "keyword"
    document.write("Variable names can only contain " + x + "For example $my_1stVariable" + "<br>");
    document.write("Variables must begin with a " + y + " For example $name, _name or name " + "<br>");
    document.write("Variable names are case " + z + "<br>");
    document.write("Variable names should not be JS " + v + "<br><br><br>");

//------------------------------------------- chapter 5-------------------------------------------

var sum,c,d;
    c = 3;
    d = 5;
    sum = c + d;
    sub = c - d;
    multiply = c * d;
    division = c/d;
    modulas = c % d;
    document.write("sum of " + c + " and " + d + " is " + sum + "<br>"); 
    document.write("sub of " + c + " and " + d + " is " + sub + "<br>"); 
    document.write("multiply of " + c + " and " + d + " is " + multiply + "<br>"); 
    document.write("division of " + c + " and " + d + " is " + division + "<br>"); 
    document.write("modulas of " + c + " and " + d + " is " + modulas + "<br><br><br>"); 

var e;
    document.write("Value after variable declaration is : " + e + "<br>");
    e = 10;
    document.write("Initial value : " + e + "<br>");
    e = e++ ;
    document.write("Value after increment is: " + e + "<br>");
    e = e + 7;
    document.write("Value after addition 7 is : " + e + "<br>" );
    e = --e;
    document.write("Value after decrement is: " + e + "<br>" );
    e = e/3;
    document.write("The remainder is : "  + e + "<br><br><br>" );

var price;
    price = 600;
    cost = price * 5;
    document.write("Total cost to buy 5 tickets to a movie is " + cost +"PKR" + "<br>" );

    document.write( "Table of 4"  + "<br><br><br>");
var table;  
    for( table = 1; table <= 10; table++){
        tablex = 4 * table;
        document.write("4 x " + table + " = " + tablex + "<br><br>" );
    } 
var celcius,Fahrenheit;
    celcius = 20 ;
    Fahrenheit = ( celcius * 9 / 5 ) + 32;    
    document.write(celcius +"oC" + " is " + Fahrenheit + "F" + "<br>");
    celcius = (Fahrenheit - 32) *5/9;
    document.write(Fahrenheit + "F" + " is " + celcius + "oC" + "<br><br><br>");

var item1,item2,item3,item4,item5;
    item1 = 650;
    document.write(" Price of item 1 : " + item1 + "<br>");
    item2 = 3;
    document.write( "Price of item 2 : " + item2 + "<br>");
    item3 = 100;
    document.write( "Price of item 3 : " + item3 + "<br>");
    item4 = 7;
    document.write( "Price of item 4 : " + item4 + "<br>");
    item5 = 100;
    document.write( "Price of item 5 : " + item5 + "<br><br><br>");
    total = item1 + item2 + item3 + item4 + item5;
    document.write("Total cost of your order is " + total + "<br><br><br>");

var marks; 
    marks = 850;
    o_marks = 666;
    percentage = (666 / 850) * 100;
    document.write( "the percentage is : " + percentage + "%" + "<br><br><br>");

var dollar,riyal,PKR;

    dollar = 163.50 * 10;
    riyal  = 43.57 * 25;
    PKR    = dollar + riyal ;
    document.write("Total currency in PKR : " + PKR + "<br><br><br>");

var variable ,arithmetic;
    variable = 10;
    arithmetic = [( variable + 5) * 10 ]/2;
    document.write("Initialized value is 10 : " + arithmetic + "<br><br><br>");

var c_year,birth_year,Y_age;
    c_year = 2020;
    document.write("Current year : " + c_year + "<br>");
    birth_year = 2002;    
    document.write("birth year : " + birth_year + "<br>");

    Y_age = c_year - birth_year;
    document.write("They are either " + Y_age + " or " + (Y_age +1) + " years old" + "<br><br>")

var radius,circumference,Area;
    radius = 5;
    document.write("Radius of circle : " + radius + "<br>")
    circumference = 2 * 3.142 * radius;
    document.write("circumference of circle : " + circumference + "<br>")

    Area =   3.142 * ( radius * radius) ;
    document.write("The area is " + Area + "<br><br>")


var snacks,max_age,age,per_day,cal,t_cal;
    snacks = " Photato sticks";
    age =17;
    max_age = 55;
    per_day = 2;
    cal = max_age - age;
    t_cal = cal * 2;
    document.write("favorite snack is " + snacks + "<br>")
    document.write("current age is " + age + "<br>")
    document.write("maximum age is " + max_age + "<br>")
    document.write("Amount of snacks per day " + per_day + "<br>")
    document.write("You will need " + t_cal + snacks + " to last you until the ripe old age of " + max_age + "<br><br><br>")


//------------------------------------------- chapter 6-9-------------------------------------------

var val;
    document.write("RESULTS" + "<br>")
    val = prompt("GIve the value of a : " , " Give here!")
    document.write("The value of is : " + val + "<br><br>")

    val = ++val;
    document.write("The value of ++a : " + val + "<br>")
    document.write("Now the value of a : " + val + "<br><br>")

    document.write("The value of --a : " + val + "<br>")
    val = val+1 ;
    document.write("Now the value of a : " + val + "<br><br>")

    val = --val ;
    document.write("The value of --a : " + val + "<br>")
    document.write("Now the value of a : " + val + "<br><br>")


    document.write("The value of a-- : " + val + "<br>")
    val = val-1 ;
    document.write("Now the value of a: " + val + "<br><br><br>")

var val1,val2,value_t,A;
    val1 = 2;     
    val2 = 1;


    document.write("The value of --a : " + 1 + "<br>")   
    document.write("The value of --a - --b : " + 1 + "<br>")  
    document.write("The value of --a - --b + ++b : " + 2 + "<br>")

    value_t =  --val1 - --val2 + ++val2  + val2--;
    document.write("The value of --a - --b + ++b  + b-- : " + value_t + "<br><br><br>")
var user;
    user = prompt("give any num" , "give here")
    document.write("Your given value is : " + user);

var num,multipyer,g,w;

    num = prompt("Give the value for make the table" , "if you donot give any num default value will appear")
    if(num > 0 ){
        for( g = 1; g <= 10; g++){
                    multipyer = num * g;
                    document.write(num + " x " + g + " = " + multipyer + "<br><br><br>" );
         } 
    }else{
        for( g = 1; g <= 10; g++){
                    multipyer = 5 * g;
                    document.write("5 x " + g + " = " + multipyer + "<br><br><br>" );
                } 
    }    

var math,english,urdu,p_s,t_m,per,o_m,per_m,per_e,per_u;
    math = +prompt('give obtain marks in MATH : ')
    urdu = +prompt('give obtain marks in URDU : ')
    english = +prompt('give obtain marks in ENGLISH : ')
p_s = 100;
t_m = 300;
o_m = (math + english + urdu) ;
per_m = (math / p_s) * 100;
per_e = (english / p_s) * 100;
per_u = (urdu / p_s) * 100;
per = (per_e + per_m + per_u) / 3;
var s_table, english;
    
    s_table =" <table><thead><tr><th>Subject</th><th>Total marks</th><th>Obtain marks</th><th>Percentage</th></tr></thead><tbody> "; 
    s_table += "<tr><td>" + "ENGLISH" + "</td><td>" + p_s + "</td><td>" + english + "</td><td>" + per_e + "%" + "</td></tr>"
    s_table += "<tr><td>" + "MATH" + "</td><td>" + p_s + "</td><td>" + math + "</td><td>" + per_m + "%" + "</td></tr>"
    s_table += "<tr><td>" + "URDU" + "</td><td>" + p_s + "</td><td>" + urdu + "</td><td>" + per_u + "%" + "</td></tr>"
    s_table += "<tr><td>" + "  " + "</td><td>" + t_m + "</td><td>" + o_m + "</td><td>" + per + "%" + "</td></tr>"

    s_table += "</tbody></table>"
    document.write(s_table) 
  
//------------------------------------------- chapter 7-11-------------------------------------------
var city;
    city = prompt("Enter your city");
    if(city = "karachi"){
        document.write("Welcome! to the city of light")
    }else{
        document.write("welcome!" + " to " + city + "<br><br><br>")
    }


var gender ;
    gender = prompt("ENTER YOUR GENDER")
    if(gender == "male"){
        document.write("Good Morning Sir!"  + "<br><br><br>")
    }else if(gender == "female"){
        document.write("Good Morning Madam!" + "<br><br><br>")
    }
var signal_light;
    signal_light = prompt("Tell the trafic light signal color!")
    signal_light = signal_light.toLowerCase();
    if(signal_light == "red"){
        document.write("Must Stop")
    }else if(signal_light == "yellow"){
        document.write("Ready to move")
    }else if(signal_light == "green"){
        document.write("Move now")
    }else("plz give only red,yellow,green colors")

var fuel;
    fuel = +prompt("how much fuel in the car?")
    if(fuel < 0.25){
        document.write( "Please refill the fuel in your car")
    }else{
        document.write("OKEY!")
    }

var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}
 var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}
 var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
 if (true){
alert("True");
}
if (false){
alert("False");
}
if("car" < "cat"){
    alert("car is smaller than cat");
    }
document.write("<br><br><br>")
var t_marks,o_marks,grade,stu_per;
    t_marks = 300;
    o_marks = +prompt("Type your marks")
    stu_per = (o_marks / t_marks) * 100;
    document.write("Total marks : " + t_marks + "<br>")
    document.write("Obtain marks : " + o_marks + "<br>")
    document.write("Your percentage : " + stu_per + "%" + "<br>")
    
    if(stu_per >= 80){
        document.write("Grade : A-one" + "<br>")
        document.write("EXCELLENT")
    }else if(stu_per >= 79 && stu_per <= 70)
    {
        document.write("Grade : A" + "<br>")
        document.write("GOOD")
    }else if(stu_per >=69 && stu_per <= 60)
    {   
        document.write("Grade : B" + "<br>")
        document.write("You need to improve")
    }else
    {
        document.write("Fail")
    }

var game,gNum;
    gNum = 6;
    game = +prompt("GUESS THE NUMBER FORM 1-10 digits")

    if(game == gNum){
        document.write("Bingo! Correct answer")
    }else if(game == 1 + gNum){
        document.write("Close enough to the correct answer")
    }else{
        document.write("no Wrong")
    }

var d3;
    d3 = +prompt("WRITE NUMBER")
    
    if(d3 % 3 == 0){
        document.write("divisible by 3")
    }else{
        document.write("Not divisible by 3")
    }
 var E_O;
    E_O = +prompt("Give the number")
    if(E_O % 2 == 0){
        document.write("EVEN")
    }else if(E_O % 2 != 0){
        document.write("ODD")
    }

var temperature;
    temperature = +prompt("Give the temperature")
    if(temperature >= 40){
        document.write("It is too hot outside.")
    }else if(temperature >= 30){
        document.write("The Weather today is Normal.")
    }else if(temperature  >= 20){
        document.write("Today’s Weather is cool.")
    }else if (temperature > 10){
        document.write("OMG! Today’s weather is so Cool.")
    }
 var cal0,cal1,opera,result;
    cal0 = +prompt("Give the first num")
    cal1 = +prompt("Give the second num")
    opera = prompt("Give the operator num (+,-,*,/,%)")
    if(opera == "+")
    {
        result = cal0 + cal1;
        document.write(result)
    }
    else if(opera == "-")
    {
        result = cal0 - cal1;
        document.write("ANSWER IS : " + result)
    }
    else if(opera == "*")
    {
        result = cal0 * cal1;
        document.write("ANSWER IS : " + result)
    }else if(opera == "/" )
    {
        result = cal0 / cal1;
        document.write("ANSWER IS : " + result)
    }else if (opera == "%")
    {
        result = cal0 % cal1;
        document.write("ANSWER IS : " + result)
    }
document.write("<br><br><br>")
//--------------------------------------------- chap 12-13---------------
var f1st,s2nd;
f1st = prompt("give any number")
s2nd = prompt("give another number")
if(f1st > s2nd){
    document.write(f1st + " is greater than " + s2nd)
}else{
    document.write(s2nd + " is greater than " + f1st)
}
document.write("<br><br><br>")
var word ,vovel;
    word = prompt("give the alphabet")
    if(word == "a"){
        document.write("TRUE")
    }else if(word == "e"){
        document.write("TRUE")
    }else if(word == "e"){
        document.write("TRUE")
    }else if(word == "i"){
        document.write("TRUE")
    }else if(word == "o"){
        document.write("TRUE")
    }else if(word == "u"){
        document.write("TRUE")
    }else{
        document.write("FALSE")
    }
 document.write("<br><br><br>")
 var password,ask;
    document.write("Correct password is : pakistan" + "<br>")
    password = "pakistan";
    ask = prompt("Write your password")
    if(ask == password){
        document.write("Correct! The password you entered matches the original password")
    }else{
        document.write("Incorrect password")
    }
document.write("<br><br><br>")

var hour = 13;
if (hour < 18){
var greeting = "Good day";
document.write(greeting)

}
else{
greeting = "Good evening";
document.write(greeting)
}
document.write("<br><br><br>")
var time;
    time =prompt("Write the time")
    if(time >= 00 && time < 12){
        document.write("GOOD morning!")
    }else if (time >= 12 && time < 17){
        document.write("GOOD afternoon!")
    }else if(time >= 17 && time < 21){
        document.write("GOOD evening!")
    }else if (time >= 21 && time < 24){
        document.write("GOOD night!")
    }

//------------------------------------------- chapter 17-20-------------------------------------------

var city0 = "Karach";
var city1 = "Islamabad";
var city2 = "Hyderabad";
var city3 = "chitral";
var city4 = "lahore";
var city5 = "peshawar";
document.write(city0 + "<br>")
document.write(city1 + "<br>")
document.write(city2 + "<br>")
document.write(city3 + "<br>")
document.write(city4 + "<br>")

var citti;
    citti = ["Karachi","Islamabad","Hyderabad","Chitral","peshawar"]
    document.write(" JS object notation : " + "<br>" + citti)
document.write("<br><br><br>")

var l_notation,s_arr,n_arr;
    l_notation = ["Student name : " , "Mohammad Siraj"]
    document.write(l_notation + "<br>")
    s_arr = ["apple ", "mango " , "orange"]
    document.write("The string array is :" + s_arr + "<br><br>")
    n_arr = [100 , 125 ,215]
    document.write("The number array is : " + n_arr + "<br><br><br>")
var bo_a,bo_b;
    bo_a = true;
    bo_b = false;
document.write("a = " + bo_a + "<br>" + "b = " + bo_b)
document.write("<br><br><br>")
var m_arr ;
    m_arr = ["one \n" , "two \n" , 3 + "\n", 4 + "th" + "\n", true + "\n" ,false + "\n"]
    document.write("the mixed array are : " + m_arr + "<br>")
       document.write("Qualifications : " + "<br><br><br>") 
var qualif,io;
    qualif = [ "SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil."," PhD"]
    for(i = 1; i < qualif.length; i++){
       // de = i + qualif;    
       document.write(i + ") \n"+ qualif[i])
       document.write("<br>")
    }
var per_arr,name_arr,score,i_score;
       name_arr = ["Ahmed" , "Aqib" , "Akber"]
       score = [400 , 350 ,300]

       for(i_score = 0; i_score < score.length; i_score++){
              per_arr = [(score[i_score]) / 500 ]* 100;
              document.write("Score of " + name_arr[i_score] + " is " + score[i_score] + "." + "percentage : " + per_arr + "%" + "<br>")
       }
var colr,ask,askEnd,askAdd,askSub,askr;
       colr = ["Red" , "blue" , "green" , "Black"]
       document.write("The colors are : " + colr + "<br>")
       ask = prompt("Give the color which you want to place at the begining!" , "Purple")
       colr.unshift(ask)
       document.write("your color is added : " + " " + colr + "<br>")
       askEnd = prompt("Give the color which you want to place at the end!" , "Purple")
       colr.push(askEnd)
       document.write("your color is added : " + " " + colr + "<br>")
       askAdd = prompt("Give the two color which you want to add at the begining!" , "plz place(,) between both colors")
       colr.splice(0,-1, askAdd)
       document.write("your color is added : " + " " + colr + "<br>")
       colr.splice(0,2)
       document.write("Two color are deleted from start : " + colr + "<br>")
       colr = ["Red" , "blue" , "green" , "Black"]
       document.write("The colors are : " + colr + "<br>")
       colr.splice(2,2)
       document.write("Two color are deleted from end : " + colr + "<br>")
       askSub = +prompt("which index he/she wants to add a color " , "plz write in numeric")
       askCol = prompt("give the color you desire to add")
       colr.splice(askSub,-1 ,askCol)
       document.write("your color is added : " + " " + colr + "<br>")

document.write("<br><br><br>")
var sort,sorted;
       sort = [320,230,480,120]
       document.write("score of students" + sort + "<br>")
       sorted = sort.sort()
       document.write("order of score of students" + sorted + "<br>")
var  cities,askCity,askrCity;      
       cities = ["Karachi" , "Lahore" , "Islamabad" , "peshawar" , "hyderabad"]
       alert(cities)
       document.write(cities + "<br>")
       askCity = +prompt("give the number of city which you want to select " , "the number starts with 0")
       askrCity = cities.slice(0,askCity)
       document.write("your selected cities are : " + askrCity + "<br>") 
document.write("<br><br><br>")

var cat;
       document.write("ARRAY" + "<br>")
       cat = ["this","is","my","cat"]
       document.write(cat + "<br>")
       document.write("STRING" + "<br>")
       document.write(cat.join(" "))

document.write("<br><br><br>")
var dev,devOrder,devOrder1;
       dev = ["keyboard" , "mouse" , "printer" ,"monitor"]
       document.write("Device " + "<br>" + dev + "<br>")
       for(devOrder=0; devOrder < dev.length ; devOrder++){
              document.write("Out" + "<br>" + dev[devOrder] + "<br>")
              document.write("<br>")
       }

document.write("<br><br><br>")       
       for(devOrder1 = 3 ; devOrder1 >= 0 ; --devOrder1){
              document.write("Out" + "<br>" + dev[devOrder1] + "<br>")
              document.write("<br>")
       }







//-------------------------------------------- chapter 17-20-------------------
var n,v;
       for(n = 1; n <= 10; n++){
              
              document.write(n)
              document.write("<br>")
       }
     document.write("<br><br><br>")
 var t_ble,t_blex,t_len;
    t_ble = prompt("Enter a number to its multiplication")
    t_len = prompt("Enter lenght multiplication table")

    for(l=1; l <= t_len; l++){
              t_blex = t_ble * l;
              document.write(t_ble + "x" + l + "=" + t_blex)
              document.write("<br>")
     }
var fruit,fri;
    fruit = ["apple" , "banana" , "mango" , "oranges" , "strawberry"]
    for(fri = 0; fri < fruit.length ; fri++){
              document.write(fruit[fri])
              document.write("<br>")
              
    }
document.write("<br><br>")

    for(fri = 0; fri < fruit.length ; fri++){
              document.write("Element at index " + fri + " is " + fruit[fri])
              document.write("<br>")

    }
var ro,e_v,o_d,series,or,t_2,t_3;
document.write("COUNTING")
       
for(ro = 1; ro <= 15; ro++){
              document.write( "," + ro )
       }
document.write("<br><br>")
document.write("REVERSE-COUNTING")
       for(or = 10; or >= 1; or--){
              document.write("," + or)
       }
document.write("<br><br>")
document.write("EVEN")
       for(e_v = 0 ; e_v <= 10; e_v++){
              t_2 = 2 * e_v;
              document.write("," + t_2)
       }

document.write("<br><br>")
document.write("ODD")
       for(t_3 = 0 ; t_3 <= 9; t_3++){
              o_d = 2 * t_3 + 1;
              document.write("," +  o_d)
       }
document.write("<br><br>")
document.write("SERIES")
       for(e_v = 0 ; e_v <= 10; e_v++){
                     t_2 = 2 * e_v;
                     document.write("," + t_2 + "k")
        }




document.write("<br><br>")

var LARGEST;
LARGEST =  [24, 53, 78, 91, 12]
document.write("ARRAY item : " + LARGEST + "<br>")
document.write("the largest number is : " + Math.max(...LARGEST) + "<br>")
document.write("ARRAY item : " + LARGEST + "<br>")
document.write("the smallest number is : " + Math.min(...LARGEST) + "<br>")

var t_5,e_5;
for(e_5 = 1 ; e_5 <= 20; e_5++){
                     t_5 = 5 * e_5;
                     document.write("\n" + t_5 )
              }