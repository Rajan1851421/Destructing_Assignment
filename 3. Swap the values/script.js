const swapNumber = () => {
    let a = document.getElementById('num1').value
    let b = document.getElementById('num2').value

    
    a = Number(a) + Number(b);
    b = Number(a) - Number(b);
    a = Number(a )- Number(b);
    
   
    
    document.getElementById('aValue').value=a
    document.getElementById('bValues').value=b

}



