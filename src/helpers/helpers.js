function getFrequencyCounter(arr, groupedBy, toBeCounted) {
  const frequencyCounter = {};
  for (let item of arr) {
    let key = item[groupedBy];
    if (frequencyCounter[key]) {
      frequencyCounter[key].push(item[toBeCounted]);
    }
    else {
      frequencyCounter[key] = [item[toBeCounted]];
    }
  };
  return frequencyCounter;
}


/* helper function to find the intersection of two array */
const findIntersection = (arr1, arr2) => {
  const set1 = new Set(arr1);
  return arr2.filter(i => set1.has(i));
}


export { getFrequencyCounter, findIntersection }