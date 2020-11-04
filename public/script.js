function convertNamesToCategories(nameCatList) {
    // process your restaurants here!
    const nameList = [];
    const nameObj = {};
    var i;
    for (let i=0; i<nameCatList.length; i++) {
        nameList.push(nameCatList[i].category);
      if (!nameObj[nameList[i]]) {
        nameObj[nameList[i]] = 0;
      }
      nameObj[nameList[i]] += 1;
      // console.log(restaurantList[i].category);
    }
    //   console.log(catObj);
    const list = Object.keys(nameObj).map((m) => ({
      y: nameObj[m],
      label: m
    }));
  
    return list;
  }