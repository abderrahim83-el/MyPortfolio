// let count = 0 

let homeScNum = document.getElementById("home-sc-num")
let guestScNum = document.getElementById("guest-sc-num")

let homeCount = 0 
let guestCount = 0

function increment1() {
    homeCount += 1
    homeScNum.textContent = homeCount
    
}

function increment2() {
    homeCount += 2
    homeScNum.textContent = homeCount
}

function increment3() {
    homeCount += 3
    homeScNum.textContent = homeCount
}


function increment4() {
    guestCount += 1
    // console.log(count);
    guestScNum.textContent = guestCount
}

function increment5() {
    guestCount += 2
    guestScNum.textContent = guestCount
}

function increment6() {
    guestCount += 3
    guestScNum.textContent = guestCount
}