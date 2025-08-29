//heart functionality by event handler
const availableHeart = document.getElementById("available-heart")
console.log(availableHeart);
const cardHearts = document.getElementsByClassName("card-heart")
console.log(cardHearts);


let count = 0;
for(let heart of cardHearts) {
    heart.addEventListener('click',function(){
        count++
        availableHeart.innerText = count;
    });
}
// event handler for call button && call button functionality

let availableCoin = parseInt(document.getElementById("available-coin").innerText);
// console.log(availableCoin);

const callButtons = document.getElementsByClassName("call-button")

const serviceNames = document.getElementsByClassName("service-name")

const servicesNumbers = document.getElementsByClassName("service-number")

const callHIstory = document.getElementById("call-history-card") 

for(let i = 0; i<callButtons.length; i++){
    callButtons[i].addEventListener('click',function(){
        if(availableCoin<20){
           return alert('Do not have sufficient coin. Need at least 20 coin to make a call');
        }
       
        availableCoin -= 20;
        document.getElementById('available-coin').innerText = availableCoin;
        const serviceName = serviceNames[i].innerText;
        const serviceNumber = servicesNumbers[i].innerText;
        alert('📞 calling ' + serviceName +' '+ serviceNumber);
    })
}
    






























// removed


// document.getElementById("emergency-call-btn").addEventListener('click',function(){
//     const serviceNumber = document.querySelectorAll(".number")
//     const totalAvailableCoin = availableCoin - 20;
//     console.log(totalAvailableCoin);
//     availableCoin = totalAvailableCoin;
//     if(availableCoin <20 ){
//         alert('Sorry🙁 you do not have sufficient coin to call')
//     }
//     const newAvailableCoin = document.getElementById("available-coin").innerText = totalAvailableCoin
//     alert('☎ calling to emergency service')
//     return newAvailableCoin;
    
// })
// const serviceNumber = document.getElementsByClassName("service-name")
// const serviceName = document.getElementsByClassName("service-number")
// console.log(serviceName,serviceNumber);
