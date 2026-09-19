function showGreeting() {
    let currentTime = new Date();
    let hour = currentTime.getHours();
    let greeting;

    if (hour<12){
        greeting = "Good Morining! Welcome to my portfolio.";
    }
    else if (hour<18){
        greeting = "Good afternoon! Welcome to my portfolio.";
    }
    else{
       greeting = "Good evening! Welcome to my portfolio."; 
    }

    document.getElementById("greeting").textContent=greeting;
}

showGreeting();

