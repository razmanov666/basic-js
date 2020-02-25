module.exports = 
function createDreamTeam(arr) {
  let dream=[];
  //console.log(typeof(arr));
  //console.log(arr[0]);
  if (typeof(arr) != 'object' || arr === null || arr.length==0 || arr[0] == undefined) return false;
  arr.forEach(element => {typeof(element) != 'string' ? arr.indexOf(element, [0]) : doPush(dream, element)});  
  return dream.sort().join('');
};

function doNothing(){
}

function doPush(dream,element){
  let i=0;
  element = element.split('');
  let firstSymbol;
  for (let n=0; n<=element.length; n++){
    if (element[n] == " ")
    { i++;}
    else 
    break;}
    firstSymbol = element[i].toUpperCase()
      return isNaN(parseInt(firstSymbol)) ? dream.push(firstSymbol) : doNothing() ; 
}/*
let g={'foo': 'bar'};
let arr=[
  '   William Alston ',
  ' Paul Benacerraf',
  '  Ross Cameron',
  '       Gilles Deleuze',
  '  Arda Denkel ',
  '  Michael Devitt',
  '  Kit Fine',
  ' Nelson Goodman',
  'David Kolb',
  '   Saul Kripke',
  '  Trenton Merricks',
  '  Jay Rosenberg',
];

console.log(createDreamTeam(g));
*/