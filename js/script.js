const numbers = document.querySelector(".card__front-numbers"),
      myName = document.querySelector(".card__front-name"),
      cvv = document.querySelector('.card__back-cvv'),
      year = document.querySelector('.year'),
      month = document.querySelector('.month');
      



function InputListener(ElementName, ElementToChange ) {
    const myInput = document.querySelector(`input[name="${ElementName}"]`);

    myInput.addEventListener("change", (e) => {
        const backup = ElementToChange.innerHTML;
        ElementToChange.innerHTML = myInput.value;
        if (myInput.value == ''){
            ElementToChange.innerHTML = backup;
        }
});

}



InputListener('name', myName);
InputListener('number', numbers);
InputListener('cvc',cvv);
InputListener('month', month);
InputListener('year', year);