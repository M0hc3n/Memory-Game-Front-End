function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
}


const findAllPlacesOf = (icons, icon) => {
  let result = new Array()

  for(let i = 0; i < icons.length ; i++){

    if(icons[i] == icon){
      result.push(i)
      if(result.length === 2) break;
    }
  }

  return result;
}

const findDuplicatesPlaces = (icons) =>{
  const visited = new Set()
  let iconsPlaces = new Array()

  for(const icon of icons){
    if( ! visited.has(icon) ){
      visited.add(icon)
      iconsPlaces.push(findAllPlacesOf(icons, icon))
    }  
  }

  return iconsPlaces;
}

export {findDuplicatesPlaces , findAllPlacesOf, shuffle};