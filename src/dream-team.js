function createDreamTeam(arr) {
  let dream=[];
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
}

let team = [
  ['David Abram'],
  ['Robin Attfield'],
  'Thomas Berry',
  ['Paul R.Ehrlich'],
  'donna Haraway',
  ' BrIaN_gOodWiN  ',
  {
    0: 'Serenella Iovino'
  },
  'Erazim Kohak',
  '  val_plumwood',
];
                         
let GLRD = ['GLRD'];
console.log(createDreamTeam(team));