const textCount = () => {
    let inputElement = document.getElementById("text");
    let inputString = inputElement.value;
    let stringArray = inputString.split(",");
    console.log(stringArray);
    let characterArray = [];
    console.log(characterArray)


    for (let i = 0; i < stringArray.length; i++) {
        let characters = stringArray[i].split(" ");
        characterArray.push(characters.length);
    }

    console.log(characterArray.length);
    document.getElementById('words').innerText=`Words: ${characterArray}`;
    document.getElementById('words').style.backgroundColor='#f0bebb'
    document.getElementById('words').style.padding='10px 20px'
    document.getElementById('words').style.borderRadius='10px'


    // character count code

    
let characterCount = 0;

for (let i = 0; i < stringArray.length; i++) {
  let currentString = stringArray[i];
  for (let j = 0; j < currentString.length; j++) {
    characterCount++;
  }
}

console.log(characterCount); 
document.getElementById('character').innerText=`Character: ${characterCount}`;
document.getElementById('character').style.backgroundColor='#bbf0c6'
document.getElementById('character').style.padding='10px 20px'
document.getElementById('character').style.borderRadius='10px'
document.getElementById('character').style.marginTop='10px'




}