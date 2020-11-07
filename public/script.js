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

 function findmatch(searchmatch,cat){
  return cat.filter(x => {

    const regex = new RegExp(searchmatch,'gi'); 
    return x.city.match(regex)
  } );
  
   
 }
 findmatch("col",cat)