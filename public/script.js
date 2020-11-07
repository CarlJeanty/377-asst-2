// function convertCat(nameList) {
    // process your restaurants here!
    // const catList = [];
    // const catObj = {};
    // var i;
    // for (let i=0; i<nameList.length; i++) {
    //   catList.push(nameList[i].category);
    //   if (!catObj[catList[i]]) {
    //     catObj[catList[i]] = 0;
    //   }
    //   catObj[catList[i]] += 1;
    //   // console.log(restaurantList[i].category);
    // }
    // //   console.log(catObj);
    // const list = Object.keys(catObj).map((m) => ({
    //   y: catObj[m],
    //   label: m
    // }));
  
    // return list;


//   }

const endpoint = 'https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json';
const names = [];
fetch (endpoint)
    .then(blob => blob.json())
    .then(data => names.push(...data))

function findMatches(wordToMatch, names) { 
      return names.filter(place => {
          const regex = new RegExp(wordToMatch, 'gi');
          return place.name.match(regex) || place.category.match(regex)
    });
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function displayMatches() {
    const macthArray = findMatches(this.value, names);
    const html = matchArray.map(place => { 
        const regex = new RegExp(this.value, 'gi');
        const nameName = place.name.replace(regex, `<span class="h1">${this.value}</span>`);
        const categoryName = place.category.replace(regex, `<span class="h1">${this.value}</span>`);

        return `
            <li> 
                <span class="name">${nameName}, ${categoryName}</span>
            </li>
    `;
    }).join('');

    // console.log(macthArray);
    suggestions.innerHTML = html;

}
const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);




function getRestaurantArr(jsonFromServer){
    console.log('jsonFromServer',jsonFromServer);
    
    const name = [];
    fetch(jsonFromServer).then(arr)
}