
/* Check Out Button -> checkOut_Icon */
let checkOut_button = document.querySelector('#checkOut_Icon');
/* Buy Button -> buyIcon */
let buy_button = document.querySelector('#buyIcon');




let count = 0;

function toBuy(event){
    count++;
    var button = event.target;
    var bookProducts = button.parentElement;
    const newPrice = parseInt(bookProducts.getElementsByClassName('price')[0].innerText);
    const oldPrice = parseInt(document.getElementById('Price').innerText);
    /*console.log('newPrice = ' + newPrice, 'oldPrice = ' + oldPrice);*/
    update(newPrice,oldPrice);
}

function afterBuy()
{
    count = 0;
    const newPrice = 0;
    const oldPrice = 0;
    update(newPrice,oldPrice);
}

function update(newPrice,oldPrice){
    const price = newPrice + oldPrice;
    document.getElementById('Product-Count').innerText = count;
    document.getElementById('Price').innerText = price;

    const delivery_charge = updateDelivery(price);
    const shipping_charge = delivery_charge;

    /*console.log('Delivery = ' + delivery_charge);*/

    updateTotal_Tax(price,delivery_charge,shipping_charge);
    
}

function updateDelivery(price)
{
    let delivery_charge = 0;

    if(price <= 500) delivery_charge = 0;
    else if(price <= 800) delivery_charge  = 100;
    else if(price <= 1000) delivery_charge = 150;
    else delivery_charge = 200;

    document.getElementById('Delivery').innerText = delivery_charge;
    document.getElementById('shipping').innerText = delivery_charge;
    
    return delivery_charge;
}

function updateTotal_Tax(price, delivery_charge, shipping_charge)
{
    const total = price + delivery_charge + shipping_charge;
    const tax = Math.round(total*15.00/100);

    /*console.log(total,tax);*/

    document.getElementById('totalPrice').innerText = total;
    document.getElementById('tax').innerText = tax;

    updatePayableTotal(total + tax);
}

function updatePayableTotal(total)
{
    document.getElementById('payableTotal').innerText = total;
}


function orderProducts(){
    const taka = parseInt(document.getElementById('payableTotal').innerText);
    alert('Dear Sir,\nYou Have To Pay : ' + taka + 'TK\nHappy Reading.\n');
    afterBuy();
}