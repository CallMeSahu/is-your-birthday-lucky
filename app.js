var dateInput = document.querySelector("#input-birthday");
var luckyNumberInput = document.querySelector("#input-luckynumber");
var checkBtn = document.querySelector("#btn-check");
var resetBtn = document.querySelector("#btn-reset")
var luckySection = document.querySelector(".lucky");
var notLuckySection = document.querySelector(".not-lucky");

function checkBtnHandler(){
    if(dateInput.value == "" || luckyNumberInput.value ==""){
        alert("Form incomplete!");
        return
    }

    var dateArray = (dateInput.value).split("-");
    var dateString = "";
    for(var i=0; i<dateArray.length; i++){
        dateString += dateArray[i];
    }

    var noOfDigits = dateString.length;
    var date = parseInt(dateString, 10);
    var sumOfDate = 0;
    while(noOfDigits > 0){
        var digit = Math.floor(date%10);
        sumOfDate += digit;
        date /= 10; 
        noOfDigits--;   
    }

    if(sumOfDate%luckyNumberInput.value == 0){
        notLuckySection.style.display = "none";
        luckySection.style.display = "block";
    }
    else{
        luckySection.style.display = "none";
        notLuckySection.style.display = "block";
    }

}

function resetPage(){
    luckySection.style.display = "none";
    notLuckySection.style.display = "none";
    dateInput.value = "";
    luckyNumberInput.value = "";
}

checkBtn.addEventListener("click", checkBtnHandler);
resetBtn.addEventListener("click", resetPage);
