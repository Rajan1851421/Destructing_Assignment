

function removeDuplicates(arr) {
    return [...new Set(arr)];
}

const numbers1 = [];

function addNumber(arr) {
    const numberInput = document.getElementById("numberInput");
    const number = Number(numberInput.value);
    numbers1.push(number);
    numberInput.value = "";
    const uniqueNumbers = removeDuplicates(numbers1);
    console.log(uniqueNumbers);
    let a = document.getElementById('text')
    a.innerText = uniqueNumbers;
    document.getElementById('text').style.display = 'inline'
    document.getElementById('text').style.color = 'red'
    return [...new Set(arr)];

}


