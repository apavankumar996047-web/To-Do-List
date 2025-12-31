const InputBox = document.getElementById('InputBox');
const buttons =document.querySelectorAll('button');

let result = '';

buttons.forEach(button =>{
    button.addEventListener('click', () =>{
        const value = button.textContent;
        if(value === 'AC'){
            result = '';
            InputBox.value = '';
        }else if(value === 'DEL'){
            result = result.slice(0,-1);
            InputBox.value = result;
        }else if(value === '='){
            try{
            result = eval(result).toString();
            InputBox.value = result;
        }catch{
            InputBox.value = 'Error';
            result= '';
        }
    }else {
        result += value;
        InputBox.value = result;
    }
    })
})

