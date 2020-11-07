

const file = "https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json";

const cat = [];

//const prom= fetch(file);
//console.log(prom)

//fetch(file).then(Bdata =>console.log(Bdata)); raw data no info

//fetch(file)
 //.then(Bdata => Bdata.json())
 //.then(data => console.log(data))

fetch(file)
 .then(Bdata => Bdata.json())
 .then(data => cat.push(...data))

 function findMatches(searchmatch,cat){
  return cat.filter(x => {
    
    const regex = new RegExp(searchmatch,'gi');
    return x.city.name(regex) 
  } );
  
   
 }


/*
 function displaymatches(){
   const matcharr = findmatch(this.value, cities);
   const html = matcharr.map(x=>{
    return `
    <li>
       <span class="rest">${category.city},${category.state},${restau.name}</span>
       <span class="loc">${$category.address_line_1}</span>
    </li>
    `;
   })
 }

 const searchInp = document.querySelector('.Userinput');

 
 searchInp.addEventListener('change',displaymatches);
 searchInp.addEventListener('keyup',displaymatches)
 */