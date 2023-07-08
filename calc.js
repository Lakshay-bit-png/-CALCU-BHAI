window.onload = function() {setTimeout(function(){document.getElementById("video-vanish").classList.add('slide-animation');
document.getElementById("video-vanish").style.top='-1000px';
},3000);




   
   
  };



var a=''
var c=''
var d=''
var b=0
function givetoscreen(x){
    if(c.length<=20){
       c+=x
       a+=x
       d+=x
       document.getElementById("output").innerHTML=d

    }
    else{x="error";
    document.getElementById("output").innerHTML=x
    }
    
    console.log(a)
}
function assignoperator(y){
    
    a+=y
    d+=y
    document.getElementById('output').innerHTML=d;
    d=''
    c=''
}
function equal(){
    if (a[0]!='=' && a[0]!='/' && a[0]!='*'){
    b+=eval(a)
    document.getElementById('output').innerHTML=b;
    a=''+b
    d=''
    b=0 }
    else{a[0]='';
    document.getElementById('output').innerHTML=eval(a);
    
}c=''}

function hatao(){
    a=''
    d=''
    c=''
    document.getElementById('output').innerHTML='0'
}
