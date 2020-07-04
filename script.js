
//api url
const api="https://api.exchangeratesapi.io/latest";

//gerekli elementler
const ilkPara=document.getElementById("ilkPara");
const ikinciPara=document.getElementById("ikinciPara");
const miktar=document.getElementById("miktar");
const btnCevir=document.getElementById("btnCevir");
const sonuc=document.getElementById("sonuc");

//comboboxların doldurulmasi
fetch('./currencies.json').then(res=>res.json()).then(data => {
    
    const keys=Object.keys(data);
    const values=Object.values(data);

    let secenekler;
    for (let i = 0; i < keys.length; i++) {
        secenekler+=`<option value=${keys[i]}>${values[i]}</option>`;
        
    }

    ilkPara.innerHTML+=secenekler;
    ikinciPara.innerHTML+=secenekler;
});

btnCevir.addEventListener('click',function(){
    cevirilecekParaBirimi=ilkPara.value;
    hangiParaBirimi=ikinciPara.value;
    para=miktar.value;

    fetch(`${api}?base=${cevirilecekParaBirimi}`).then(res=>res.json()).then(data=>{
        const deger=data.rates[hangiParaBirimi];
        sonuc.innerHTML=`${para} ${cevirilecekParaBirimi} = ${para*deger} ${hangiParaBirimi}`;
    })

});
