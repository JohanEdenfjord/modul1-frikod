//where we do some free programming!

let letters = ['j', 'o', 'h', 'a', 'n'];

const mapped = letters.map((letter) => {
    return "a" + letter + "h"
}); //adds stuff to the strings in the Array

const newMapping = letters.filter((letter) => {
    if(letter === 'h') return true;
}); //filters out letters

let newNewMapping = letters.reduce((acc, current) => acc+ current)

console.log(mapped) //log

console.time(); //time
for (let i = 0; i < 1000000; i++) {
      
}
console.timeEnd();//time End

take = [{'name': 'Johan', 'Ranking':2},{'name': 'Joan', 'Ranking':1}]
console.table(take) //table!

const ul = document.createElement('ul'); //create a unordered list!
const theDiv = document.querySelector('.theList');

mapped.forEach(element => {
    const li = document.createElement('li');
    const button = document.createElement('button');
    button.innerText = element;
    button.classList.add("button"); //well..
    
    li.appendChild(button);//adding the button to the list element
    ul.appendChild(li);
});

theDiv.appendChild(ul);


const butt = document.getElementById('btn');

butt.addEventListener('click', function (e){
    alert("hello");
});


