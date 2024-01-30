/*
created an account on https://currencyfreaks.com/
user name is my gmail
pass: 123456789
then got an api key to use 
https://api.currencyfreaks.com/v2.0/rates/latest?apikey=3e6de7ac6a2b43d681659069c0fc9da3
*/
fetch("https://api.currencyfreaks.com/v2.0/rates/latest?apikey=3e6de7ac6a2b43d681659069c0fc9da3")
.then((response) =>{
  let allCurrencies = response.json();
  return allCurrencies;
})
.then((currencies) => {
  let amount = document.querySelector('.amount');
  let egpPrice = document.querySelector('.egp span');
  let sarPrice = document.querySelector('.sar span');
  amount.onblur = function () { 
    egpPrice.innerHTML = Math.round(amount.value * currencies.rates["EGP"]);
    sarPrice.innerHTML = Math.round(amount.value * currencies.rates["SAR"]);
  };
  amount.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
      amount.blur();
    }
  });
});