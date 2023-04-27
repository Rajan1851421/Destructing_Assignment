


const handleInput = () => {
    let checkCondi = document.getElementById('arrayInput').value

    if (checkCondi == "") {

        let paragraph = document.getElementById('warning')
        paragraph.innerText = '!! Please Enter Multiple Number sapareted with comma'

        function hideParagraph() {
            paragraph.style.display = "none";
        }
        setTimeout(hideParagraph, 2000);
    }
    else {
        const inputField = document.getElementById("arrayInput");
        const inputString = inputField.value.trim();
        const inputArray = inputString.split(",").map(x => Number(x.trim()));
        console.log(inputArray);


        const extractElements = (arr) => {
            const [first, second, ...rest] = arr;
            const last = rest.pop();
            return [first, second, last];

        }
        const arr = inputArray;
        const result = extractElements(arr);
        console.log(result)
        document.getElementById('returnValue').value = result;
        document.getElementById('returnValue').style.display = 'inline'
        document.getElementsByTagName('h3').style.display = 'inlinee';



    }
}

