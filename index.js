// Write your solution here!
const cats = ["Milo", "Otis","Garfield"];

function destructivelyAppendCat(name){
   cats.push(name)
}
function destructivelyPrependCat(name){
    cats.unshift(name) 
};
function destructivelyRemoveLastCat(){
    cats.pop()
};
function destructivelyRemoveFirstCat(){
   cats.shift()
};
function appendCat(name){
    return [...cats,name]
};
function prependCat(name){
    let allcats = cats.slice()
   allcats.unshift(name)
   return allcats
 };
 function removeLastCat(){
    let allcats = cats.slice()
    allcats.pop()
    return allcats
  };
  function removeFirstCat(){
    let allcats = cats.slice()
    console.log(allcats)
    allcats.shift()
    return allcats
  };
