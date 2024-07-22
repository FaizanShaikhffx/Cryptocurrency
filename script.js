var btc = document.querySelector("#bitcoin"); 
var doge = document.querySelector("#dogecoin"); 
var eth = document.querySelector("#ethereum"); 

var settings = {
    'async': true, 
    'scrossDomain': true, 
    'url': "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=inr",
    'methods': "GET",
    "headers": {}
}
$.ajax(settings).done(function(response){
    console.log(response);
    btc.innerHTML = response.bitcoin.inr;
    doge.innerHTML = response.dogecoin.inr;
    eth.innerHTML = response.ethereum.inr;
}) 