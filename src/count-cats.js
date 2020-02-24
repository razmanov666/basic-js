function countCats(arr){
  let count=0;
  arr.forEach( line => {
    typeof(element) != 'string' ? doNothing() : 
    line.forEach (element => {element == "^^" ? count++ : count;
    //console.log(element);
  })
  });
  return count;
}

function doNothing(){

}

let arr=['aa', '##', false, NaN, 2, 3, '^ ^', undefined, 54, ' ^^'];
console.log(countCats(arr))