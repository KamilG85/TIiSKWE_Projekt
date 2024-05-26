
let txt = 'ruchomy tekst...';
let work = false; 
const delay = 200; 
let t = 0; 

function slider()
{
    clearTimeout(t);  
    
   
    txt = document.getElementById("rTekst").value;

    let space = '';
    let empty = document.getElementById("rTekst").size - txt.length;
    for (let i = 0; i < empty; i++)
    {
        space += "\xa0\xa0\xa0\xa0\xa0";
    } 

   
    txt = txt.substring(1, txt.length) + space + txt.substring(0, 1);
   
    let object = document.getElementById("rTekst");
    
    object.value = txt;
     
    space = ''; 
    
    if (work)
    {
        t = setTimeout(slider, delay);
    }
}