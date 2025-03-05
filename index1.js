const display = document.querySelector('#display');
const buttons = document.querySelectorAll('button');

buttons.forEach((item) => {
    item.onclick = () => {
        if (item.id === 'clear') {
            display.innerText = '';
        } 
        else if (item.id === 'backspace') {
            let string = display.innerText;
            display.innerText = string.substr(0, string.length - 1);
        } 
        else if (display.innerText !== '' && item.id === 'equals')
             {
            try {
                display.innerText = eval(display.innerText); 
            } catch {
                display.innerText = "Error";
                setTimeout(() => (display.innerText = ""), 2000);
            }
        } 
        else if (display.innerText === '' && item.id === 'equals')
             { 
            display.innerText = 'Please Enter Something to Calculate';
            setTimeout(() => (display.innerText = ''), 2000);
        } 
        else {
            display.innerText += item.innerText;
        }
    };
});
