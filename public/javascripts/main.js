

let sum = 0;
let sumOfService = document.getElementById("sumOfService")
let listOfidButd = [
    "montash",
    "mastering",
    "compresia",
    "arangirovka",
    "instrumental",
    "minusss",]


let listOfRange = [
    "peopleBut",
    "instrumBut",
    "hoursBut"
]

let priceForPeople = 0;
let priceForInstrum = 0;
let priceForHour = 0;


for (let listOfIdButElement of listOfRange) {
    let idBut = document.getElementById(listOfIdButElement);
    idBut.addEventListener('input', activityWithRange);
    idBut.addEventListener('onchange', activityWithRange);
}

for (let listOfIdButElement of listOfidButd) {
    let idBut = document.getElementById(listOfIdButElement);
    idBut.addEventListener('click', activityWithBut);
}

function activityWithRange(){

    let step = +this.value;
    let elsum;


    let parsis = this.parentElement.previousElementSibling

    let numOfRange =  parsis.getElementsByClassName("numOfRange")[0];
    let priceOfRange =  parsis.getElementsByClassName("priceOfRange")[0];


    if(this.id == "hoursBut"){

        sum-=priceForHour;
        elsum = 20 * step;
        priceOfRange.innerText = elsum +'€';
        priceForHour = elsum;
        sum+=priceForHour;

    }if(this.id == "peopleBut"){

        sum-=priceForPeople;
        elsum = 5 * step;
        priceOfRange.innerText = elsum +'€';
        priceForPeople = elsum;
        sum+=priceForPeople;

    }if(this.id == "instrumBut"){
        sum-=priceForInstrum;
        elsum = 5 * step;
        priceOfRange.innerText = elsum +'€';
        priceForInstrum = elsum;
        sum+=priceForInstrum;
    }

    numOfRange.innerText = step;
    writeSum()
}



function writeSum(){
    sumOfService.innerText = sum +'€'
}

function activityWithBut(){
    if (this.checked === true) {
        sum+=15;
        writeSum()
}
    else{
        sum-=15;
        writeSum()
}
}





