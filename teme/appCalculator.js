var counter = 0;//ce apare pe ecran
var sign="+";//operatia care se va executa(in caz ca nu sunt 2 termeni si totusi se apasa pe egal ca sa nu dea eroare operatia default va fi adunare )
var positive=true;//Daca numarul introdus este pozitiv sau negativ (influenteaza in functiile de adaugare cifra prin butoane)
var M0=0;//Retine prima variabila, cand se apasa pe un semn de operatie

function printValue(divId, value) {
    $("#"+divId).html(value);
}
printValue("counter",0);

//Pentru fiecare buton_cifra
$("#nr1").on('click',nr1);
function nr1() {
        if(positive==true)
        {
                counter=counter*10+1;
        }
        else
        {
                counter=counter*10-1;
        }
        printValue("counter", counter);
    
}

$("#nr2").on('click',nr2);
function nr2() {

        if(positive==true)
        {
                counter=counter*10+2;
        }
        else
        {
                counter=counter*10-2;
        }
        printValue("counter", counter);
    
}
$("#nr3").on('click',nr3);
function nr3() {

        if(positive==true)
        {
                counter=counter*10+3;
        }
        else
        {
                counter=counter*10-3;
        }
        printValue("counter", counter);
    
}
$("#nr4").on('click',nr4);
function nr4() {

        if(positive==true)
        {
                counter=counter*10+4;
        }
        else
        {
                counter=counter*10-4;
        }
        printValue("counter", counter);
    
}
$("#nr5").on('click',nr5);
function nr5() {

        if(positive==true)
        {
                counter=counter*10+5;
        }
        else
        {
                counter=counter*10-5;
        }
        printValue("counter", counter);
    
}
$("#nr6").on('click',nr6);
function nr6() {

        if(positive==true)
        {
                counter=counter*10+6;
        }
        else
        {
                counter=counter*10-6;
        }
        printValue("counter", counter);
    
}
$("#nr7").on('click',nr7);
function nr7() {

        if(positive==true)
        {
                counter=counter*10+7;
        }
        else
        {
                counter=counter*10-7;
        }
        printValue("counter", counter);
    
}
$("#nr8").on('click',nr8);
function nr8() {

        if(positive==true)
        {
                counter=counter*10+8;
        }
        else
        {
                counter=counter*10-8;
        }
        printValue("counter", counter);
    
}
$("#nr9").on('click',nr9);
function nr9() {

        if(positive==true)
        {
                counter=counter*10+9;
        }
        else
        {
                counter=counter*10-9;
        }
        printValue("counter", counter);
    
}
$("#nr0").on('click',nr0);
function nr0() {

        if(positive==true)
        {
                counter=counter*10+0;
        }
        else
        {
                counter=counter*10-0;
        }
        printValue("counter", counter);
    
}
//Pt fiecare operatie
$("#ss").on('click',minus);
function minus() {

        M0=counter;
        sign="-";
        counter=0;
        positive=true;
        printValue("counter", counter);
}
$("#sp").on('click',plus);
function plus() {

        M0=counter;
        sign="+";
        counter=0;
        positive=true;
        printValue("counter", counter);
}
$("#sm").on('click',mult);
function mult() {

        M0=counter;
        sign="*";
        counter=0;
        positive=true;
        printValue("counter", counter);
}
$("#sd").on('click',divis);
function divis() {

        M0=counter;
        sign="/";
        counter=0;
        positive=true;
        printValue("counter", counter);
}
$("#se").on('click',egal);
function egal() {

        switch(sign){
        case "+":
            counter=M0+counter;
            printValue("counter",counter);
            break;
        case "-":
            counter=M0-counter;
            printValue("counter",counter);
            break;
        case "*":
            counter=M0*counter;
            printValue("counter",counter);
            break;
        case "/":
            if(counter==0)
                counter="Impossible";
            else
                counter=M0/counter;
            
            printValue("counter",counter);
            break;
        default:
            printValue("counter","Wow, how you reached this?");
        }
        counter=0;
        M0=0;
}
$("#inv").on('click',inv);
function inv() {

        counter=counter*(-1);
        positive=false;
        printValue("counter", counter);
    
}