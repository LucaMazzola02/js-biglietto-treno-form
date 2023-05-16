const ticketButton = document.querySelector('button');


ticketButton.addEventListener('click', function(){
    const distance = parseInt(document.getElementById('userKilometers').value);
    const age = parseInt(document.getElementById('userAge').value);

    if(parseInt(distance.value) >= 0){

    let price = distance * 0.233;

    if (age < 18) {

        price = price - ( price * 0.194);
        
    } else if (age > 65) {
    
        price = price - ( price * 0.377);
    }

    document.getElementById('output').innerHTML = 'the price of your ticket is' + price.toFixed(2) + '€';

    }else{

    document.getElementById('output').innerHTML = 'it is not possible generate the ticket with negative distance'
        
    };

});





