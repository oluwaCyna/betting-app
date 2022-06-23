let input = document.getElementById("input");
let random = document.getElementById("random");
let result = document.getElementById("result");
let hide = document.getElementById("hide");
let form = document.getElementById("form")
let search = document.getElementById("search");

let gameTypeNumber;

function actions(event) {
    event.preventDefault();

    bet();
}
function gameType1() {
    document.getElementById("submit-2").style.display = "none";
    gameTypeNumber = "2"
}

function gameType2() {
    document.getElementById("submit-1").style.display = "none";
    gameTypeNumber = "3"
}


function bet () {
    
    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min) ) + min;
    }

    if (search.value.includes(',')) {
    let inputArray = search.value.split(",")
    // let randomArray = [1,2,3,4,5];
    let randomArray = [];

    for (let i = 0; i < 5; i++) {
        randomArray.push(getRndInteger(1,100));  
    }

    let newinputArray = [];
    
    if (gameTypeNumber === "2") {
        newinputArray.push(Number(inputArray[0]))
        newinputArray.push(Number(inputArray[1]))
    }else if (gameTypeNumber === "3"){
        newinputArray.push(Number(inputArray[0]))
        newinputArray.push(Number(inputArray[1]))
        newinputArray.push(Number(inputArray[2]))
    }else {
        alert("Please select a game type")
    }

    switch (newinputArray.length) {
        case 2:
            if ((Number.isInteger(newinputArray[0])) && (Number.isInteger(newinputArray[1]))) {
                if (newinputArray[0].length > 2 && newinputArray[1].length > 2) {
                    alert("Please enter number between 1 - 99")
                }else {
                    if (randomArray.includes(newinputArray[0]) && randomArray.includes(newinputArray[1])) {
                        result.innerHTML = "<img src ='https://guestoria.com/wp-content/uploads/2019/04/winner-gif-1.gif' width='150' height='150'>"
                        input.innerHTML = "Your Picks: " + newinputArray.toString().replaceAll(',',', ')
                        random.innerHTML = "Our Picks: " + randomArray.toString().replaceAll(',',', ')
                    }else {
                        result.innerHTML = "<img src ='https://thumbs.gfycat.com/TartAffectionateHochstettersfrog-max-1mb.gif' width='150' height='150'>"
                        input.innerHTML = "Your Picks: " + newinputArray.toString().replaceAll(',',', ')
                        random.innerHTML = "Our Picks: " + randomArray.toString().replaceAll(',',', ')
                    }
                }
                
            }else{
                alert("Numbers only please")
            }
            break;
        case 3:
            if ((Number.isInteger(newinputArray[0])) && (Number.isInteger(newinputArray[1])) && (Number.isInteger(newinputArray[2]))) {
                if (newinputArray[0].length > 2 && newinputArray[1].length > 2 && newinputArray[2].length > 2) {
                    alert("Please enter number between 1 - 99")
                }else {
                    if (randomArray.includes(newinputArray[0]) && randomArray.includes(newinputArray[1]) && randomArray.includes(newinputArray[2])) {
                        result.innerHTML = "<img src ='https://guestoria.com/wp-content/uploads/2019/04/winner-gif-1.gif' width='150' height='150'>"
                        input.innerHTML = "Your Picks: " + newinputArray.toString().replaceAll(',',', ')
                        random.innerHTML = "Our Picks: " + randomArray.toString().replaceAll(',',', ')
                    }else {
                        result.innerHTML = "<img src ='https://thumbs.gfycat.com/TartAffectionateHochstettersfrog-max-1mb.gif' width='150' height='150'>"
                        input.innerHTML = "Your Picks: " + newinputArray.toString().replaceAll(',',', ')
                        random.innerHTML = "Our Picks: " + randomArray.toString().replaceAll(',',', ')
                    }
                }
                
            }else{
                alert("Numbers only please")
            }
            break;

        default:
            alert("Enter the numbers corresponding to the game type selected")
            break;
    }
    }else {
        alert ("Please enter your digits seperated with coma")
    }
}

form.addEventListener('submit', actions)