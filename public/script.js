function convertCat(nameList) {
    // process your restaurants here!
    const catList = [];
    const catObj = {};
    var i;
    for (let i=0; i<nameList.length; i++) {
      catList.push(nameList[i].category);
      if (!catObj[catList[i]]) {
        catObj[catList[i]] = 0;
      }
      catObj[catList[i]] += 1;
      // console.log(restaurantList[i].category);
    }
    //   console.log(catObj);
    const list = Object.keys(catObj).map((m) => ({
      y: catObj[m],
      label: m
    }));
  
    return list;
  }


function getRestaurantArr(jsonFromServer){
    console.log('jsonFromServer',jsonFromServer);
    
    const name = [];
    fetch(jsonFromServer).then(arr)
}