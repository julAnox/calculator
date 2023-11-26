document.addEventListener('DOMContentLoaded', function () {
    const inputBox = document.getElementById('inputbox');
    const buttons = document.querySelectorAll('button');

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            handleButtonClick(button.innerText);
        });
    });

    function handleButtonClick(value) {
        switch (value) {
            case 'AC':
                inputBox.value = '';
                break;
            case 'DE':
                inputBox.value = inputBox.value.slice(0, -1);
                break;
            case '=':
                try {
                    inputBox.value = eval(inputBox.value);
                } catch (error) {
                    inputBox.value = 'Error';
                }
                break;
            default:
                inputBox.value += value;
                break;
        }
    }
});
