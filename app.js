
let studentArray = [];
if (localStorage.studentArray != null) {
    studentArray = JSON.parse(localStorage.studentArray);
    render();
}

//-------------add data-----------------//
let mainForm = document.getElementById("main-form");
mainForm.addEventListener("submit", function (event) {
    event.preventDefault();
    let userName = event.target.full_name.value;
    let userDate = event.target.date_of_birth.value;
    let userGender = event.target.gender.value;
    let userMajor = event.target.major.value;
    let userImg = event.target.image.value;
    let userNumber = event.target.phone_number.value;
    mainForm.reset();
    let studentInfo = new Person(userName, userDate, userGender, userMajor, userImg, userNumber);
    studentArray.push(studentInfo);
    console.log(studentArray);
    localStorage.setItem('studentArray', JSON.stringify(studentArray));
    mainForm.reset();
});


function Person(userName, userDate, userGender, userMajor, userImg, userNumber) {
    this.userName = userName;
    this.userDate = userDate;
    this.userMajor = userMajor;
    this.userImg = userImg;
    this.userGender = userGender;
    this.userNumber = userNumber;
}

function render(){
    for (let i = 0; i < studentArray.length; i++) {
        let mainIfoimage = document.getElementById("student-card");
        let card = document.createElement("div");
        card.classList.add("crad");
        let stdImage = document.createElement("img");
        stdImage.src= `${studentArray[i].userImg}`;
        stdImage.alt= "student image";
        card.appendChild(stdImage);
        let stdMainInfo = document.createElement("div");
        let stdName = document.createElement("p");
        stdName.textContent = `Name: ${studentArray[i].userName}`;
        stdMainInfo.appendChild(stdName);
        let stdPhone = document.createElement("p");
        stdPhone.textContent = `Phone number: ${studentArray[i].userNumber}`;
        stdMainInfo.appendChild(stdPhone);
        let stdMajor = document.createElement("p");
        stdMajor.textContent = `Major: ${studentArray[i].userMajor}`;
        stdMainInfo.appendChild(stdMajor);
        card.appendChild(stdMainInfo);
        mainIfoimage.appendChild(card);
    }

}
