let arrData = [];
if (localStorage.arrData != null) {
    arrData = JSON.parse(localStorage.arrData);
    render();
}

let userName;
let userDOB;
let userGender;
let userNumber;
let userMajor;
let userImg;


let DataCollected = document.getElementById("main-form");

DataCollected.addEventListener("submit", function (event) {
    userName = event.target.full_name.value;
    userDOB = event.target.date_of_birth.value;
    userNumber = event.target.phone_number.value;
    userGender = event.target.gender.value;
    userMajor = event.target.major.value;
    userImg = event.target.image.value;

    console.log(userName, userDOB, userGender, userNumber, userMajor, userImg)
    DataCollected.reset();


    let student = new Person(userName, userDOB, userGender, userNumber, userMajor, userImg);

    arrData.push(student);
    localStorage.setItem('arrData', JSON.stringify(arrData));
    render();
});


function Person(userName, userDOB, userGender, userNumber, userMajor , userImg) {
    this.userName = userName;
    this.userDOB = userDOB;
    this.userGender = userGender;
    this.userNumber = userNumber;
    this.userMajor = userMajor;
    this.userImg = userImg;
}



//-------------show data-----------------//
function render() {
    for (let i = 0; i < arrData.length; i++) {


        
        let sdcard = document.getElementById("student-card");
        let divContainer = document.createElement('div');
        divContainer.classList.add("card");
        let stdImage = document.createElement('img');
        stdImage.src = arrData[i].userImg;
        divContainer.appendChild(stdImage);
        let ul = document.createElement("ul");
        let li1 = document.createElement("li");
        li1.textContent = `Name: ${arrData[i].userName}`;
        let li2 = document.createElement("li");
        li2.textContent = `Number: ${arrData[i].userNumber}`;
        let li3 = document.createElement("li");
        li3.textContent = `Major: ${arrData[i].userMajor}`;

        ul.appendChild(li1);
        ul.appendChild(li2);
        ul.appendChild(li3);

        divContainer.appendChild(ul);
        sdcard.appendChild(divContainer);

    }
}


