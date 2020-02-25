module.exports = 
function countCats(arr){
  let count=0;
  arr.forEach( line => {
    line.forEach (element => {element == "^^" ? count++ : doNothing() ;
    //console.log(element);
    })
  });
  return count;
}

function doNothing(){

}
/*
let arr = [
  ['##', 'dd', '00'],
  ['^^', '..', 'ss'],
  ['AA', 'dd', 'Oo'],
]

console.log(countCats(arr));*/