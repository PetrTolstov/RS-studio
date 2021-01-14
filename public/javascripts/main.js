






for(let el of document.getElementsByTagName("a")){
    if(el.target == "_blanc"){
        el.style.display = "none"
        break;
    }
}

let wants =document.getElementById("wants");
let sk = 0;
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



wants.addEventListener('click', watskidka);


function activityWithRange(){

    let step = +this.value;
    let elsum;


    let butsum = document.getElementById("conttobuy")

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

    if(sum == 0){
        butsum.disabled = true;
    }else {
        butsum.disabled = false;
    }

    numOfRange.innerText = step;
    writeSum()
}



function writeSum(){
    sumOfService.innerText = sum +'€'
}

function watskidka(){
    if (this.checked === true) {

        sk = sum*0.1
        sum-=sk;

    }
    else{
        sum+=sk;

    }

    writeSum()
}

function activityWithBut(){
    if (this.checked === true) {
        sum+=15;

}
    else{
        sum-=15;

}
    let butsum = document.getElementById("conttobuy");

    if(sum == 0){
        butsum.disabled = true;
    }else {
        butsum.disabled = false;
    }

    writeSum()
}





