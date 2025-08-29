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


























// removed
// let availableCoin = parseInt(document.getElementById("available-coin").innerText)
// console.log(availableCoin);

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
