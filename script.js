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

const serviceTitles = document.getElementsByClassName("service-title")

const serviceNames = document.getElementsByClassName("service-name")

const servicesNumbers = document.getElementsByClassName("service-number")

const callHIstory = document.getElementById("call-history-container")


for(let i = 0; i<callButtons.length; i++){
    callButtons[i].addEventListener('click',function(){
        if(availableCoin<20){
           return alert('Do not have sufficient coin. Need at least 20 coin to make a call');
        }
       
        availableCoin -= 20;
        document.getElementById('available-coin').innerText = availableCoin;
        const serviceTitle = serviceTitles[i].innerText;
        const serviceName = serviceNames[i].innerText;
        const serviceNumber = servicesNumbers[i].innerText;
        alert('📞 calling ' + serviceName +' '+ serviceNumber);


        //call history functionality 

        const date = new Date().toLocaleTimeString()
        const history = document.createElement('div')
        history.innerHTML = `
        <div class="flex justify-between items-center mt-3 bg-[#fafafa] rounded-lg p-3">
            <div>
                <h2 class="font-semibold"> ${serviceTitle} </h2>
                <p> ${serviceNumber} </p>
            </div>
            <div> ${date} </div>
        </div>
    
    `
    callHIstory.appendChild(history);

    })
}

// Clear history functionality 
document.getElementById("clear-history-btn").addEventListener('click',function(){
    document.getElementById("call-history-container").innerHTML = '';
})

// Copy button functionality 
const copyButtons = document.getElementsByClassName("copy-btton");

let totalCopy = parseInt(document.getElementById("copy-count").innerText);

for(let i = 0; i<copyButtons.length; i++){
    copyButtons[i].addEventListener('click',function(){
        totalCopy++;
        document.getElementById("copy-count").innerText = totalCopy;
        const serviceNumber = servicesNumbers[i].innerText;
        navigator.clipboard.writeText(serviceNumber);
         alert("Copied: " + serviceNumber);
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
