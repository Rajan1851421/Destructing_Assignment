


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
        let inputArray = inputString.split(",").map(x => Number(x.trim()));
        console.log(inputArray);


        function findMaxMin(arr) {
            const max = Math.max(...arr);
            const min = Math.min(...arr);
            return { max, min };
        }
        const arr = inputArray;
        const result = findMaxMin(arr);
        console.log(result); 

        document.getElementById('MaxMinVal').style.display='inline'
        document.getElementById('MaxMinVal').value=JSON.stringify(result);


    }



}

