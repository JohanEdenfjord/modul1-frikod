//where we do some free programming!

let letters = location.hash.slice(1)
letterArray = letters.split("");

console.log(letterArray)
const mapped = letterArray.map((letter) => {
    return "a" + letter + "h"
}); //adds stuff to the strings in the Array

const newMapping = letterArray.filter((letter) => {
    if(letter === 'h') return true;
}); //filters out letters

let newNewMapping = letterArray.reduce((acc, current) => acc+ current) 
// gör en sträng i detta fallet. om det är tal så adderas de! beroende på vad man använder för operator!

console.log(mapped) //log

//testar time

console.time(); //time
for (let i = 0; i < 1000000; i++) {
      
}
console.timeEnd();//time End

//här visar vi en tabell. 

take = [{'name': 'Johan', 'Ranking':2},{'name': 'Joan', 'Ranking':1}]
console.table(take); //table!


const butt = document.getElementById('btn');

butt.addEventListener('click', function(e){
    console.log('asdf')

    const theDiv = document.querySelector('.theList');
    const ul = document.createElement('ul');

    mapped.forEach(element => {
        const li = document.createElement('li');
        li.innerHTML = element;
        ul.appendChild(li)
    });

    theDiv.appendChild(ul)
});

// vad är det som inte funkar?
// När jag trycker på knappen så vill jag att den ska visa upp arrayen mapped som en lista men det händer inget

