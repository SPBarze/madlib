// 1. Use the id-selector to get your inputs' and the output element from the DOM
// For each input, I'll need to repeat the following
const inputOne = document.querySelector(`#one`); // this creates a var of the element

const inputTwo = document.querySelector(`#two`);

const inputThree = document.querySelector(`#three`);

const inputFour = document.querySelector(`#four`);

const inputFive = document.querySelector(`#five`);

const inputSix = document.querySelector(`#six`);

const inputSeven = document.querySelector(`#seven`);

const inputEight = document.querySelector(`#eight`);

const inputNine = document.querySelector(`#nine`);

const inputTen = document.querySelector(`#ten`);

const output = document.querySelector(`.output`); //this is the div for the output
// 2. For each of the inputs, get the value (word) from them

// 3. Generate your template using the values from above and set the output element's value equal to it!
//HINT: You'll need a ton of code before doing anything in this function that's called in your index.html 😜
function generateTemplate() {
let madlib = `${inputOne.value} is the lead detective at madlibs secret society inc. They are ${inputTwo.value} and ${inputThree.value}. One day, the detective was ${inputFour.value} by a ${inputFive.value}. The attacker was ${inputSix.value} and then proceeded to ${inputSeven.value}. But luckily, ${inputEight.value} came to the rescue. This was a hard mission. The other detective who came to save our main detective was ${inputNine.value} and ${inputTen.value} the attacker!!! yayy!!! the end!` // instead of logging we need to add HTML to the output object
console.log(madlib);

output.innerHTML = madlib;
}
