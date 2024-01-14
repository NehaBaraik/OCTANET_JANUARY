var back=document.getElementById('bg');
var lg=document.getElementById('player');
var rg=document.getElementById('regist');

function f(){
    back.style.display="block";
    lg.style.display="flex";
    document.getElementsByTagName('body')[0].style.overflowY='hidden';
}
function ff(){
    back.style.display="block";
    rg.style.display="flex";
    document.getElementsByTagName('body')[0].style.overflowY='hidden';
}

document.getElementsByClassName('cross')[0].addEventListener('click',function(){
    // console.log("run");
    back.style.display="none";
    lg.style.display="none";
    // rg.style.display="none";
    document.getElementsByTagName('body')[0].style.overflowY='visible';
})
document.getElementsByClassName('cross')[1].addEventListener('click',function(){
    // console.log("run");
    back.style.display="none";
    // lg.style.display="none";
    rg.style.display="none";
    document.getElementsByTagName('body')[0].style.overflowY='visible';
})

document.getElementsByClassName('register')[0].addEventListener('click',function(){
    // console.log("run");
    lg.style.display="none";
    rg.style.display="flex";
})
document.getElementsByClassName('lgn')[1].addEventListener('click',function(){
    // console.log("run");
    lg.style.display="flex";
    rg.style.display="none";
})

function lshow(){
    var lp=document.getElementById('pas');
    if(lp.type=="password"){
        lp.type="text";
        document.getElementsByClassName('eye')[0].classList.remove("fa-eye");
        document.getElementsByClassName('eye')[0].classList.add("fa-eye-slash");
    }
    else{
        lp.type="password";
        document.getElementsByClassName('eye')[0].classList.remove("fa-eye-slash");
        document.getElementsByClassName('eye')[0].classList.add("fa-eye");
    }
}
function rshow(){
    var rp=document.getElementById('pass');
    if(rp.type=="password"){
        rp.type="text";
        document.getElementsByClassName('eye')[1].classList.remove("fa-eye");
        document.getElementsByClassName('eye')[1].classList.add("fa-eye-slash");
    }
    else{
        rp.type="password";
        document.getElementsByClassName('eye')[1].classList.remove("fa-eye-slash");
        document.getElementsByClassName('eye')[1].classList.add("fa-eye");
    }
}