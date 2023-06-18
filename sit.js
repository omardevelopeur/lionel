plo=document.querySelector("input.sec")
pl=document.querySelector("input.fi")
lki=document.querySelector("button.wah")
lk=document.querySelector("button.dis")
lki.onclick=function(){
az=pl.value
pl.style.display="none";
plo.style.display="block";
lki.style.display="none";
lk.style.display="block"
}
lk.onclick=function(){
    if(plo.value===az){
        console.log("true")
    }else{
        console.log("false")
    }
}
likt=[1,12,34,5,67,45,34,23,17]
adse=likt.map(function(e){
    return e + e
})
console.log(likt)
console.log(adse)
koy=likt.reduce(function(e,a){
  console.log(`{first}=>${e} and {second}=>${a}`)
  return e + a
})
console.log(koy)
likt=[1,12,34,5,67,45,34,23,17]
sof=likt.filter(function(e){
    return e>17
})
console.log(sof)
texto=document.querySelector("textarea")
document.forms[1].onsubmit=function(e){
valu=false
nexr=texto.value.length
    if (nexr>100){
        valu=true
    }else{
        e.preventDefault()
    }
}
nabil="kamal"
console.log(nabil.length)
console.log(document.forms[1])



































