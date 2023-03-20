
document.getElementById("n").addEventListener('input',inputFib);
function getFibonacci(n)
{
    if(n>=1&&n<=10&&typeof n==="number")
       
        {
            var vector=[];
            F0=0;
            F1=1;
            vector.push(1);
            var i=2;
            //console.log("N="+n);
            while(i<=n)
            {
                F2=F0+F1;
                
                vector.push(F2);
                F0=F1;
                F1=F2;
                i++;
            }
            return "["+vector+"]";
        }
        else
        return "not allowed"
        
}
function inputFib(){
    var inputNumber = parseInt(document.getElementById("n").value);
    document.getElementById("ecran").innerHTML=getFibonacci(inputNumber);
}