let stdArray = [];


let stdName;
let stdDate;
let stdGender;
let stdMajor;
let stdImage;
let stdNumber;

let studentInfo = document.getElementById("main-form");
studentInfo.addEventListener("submit", function (event) {
    event.preventDefault();
    stdName = event.target.full_name.value;
    stdDate = event.target.date_of_birth.value;
    stdGender = event.target.gender.value;
    stdMajor = event.target.major.value;
    stdImage = event.target.image.value;
    stdNumber = event.target.phone_number.value;
    studentInfo.reset();
    let student = new Person(stdName, stdDate, stdGender, stdNumber, stdMajor, stdImage);
    stdArray.push(student);
    localStorage.setItem('stdArray', JSON.stringify(stdArray));
    render();
});


function Person(stdName, stdDate, stdGender, stdNumber, stdMajor, stdImage) {
    this.stdName = stdName;
    this.stdDate = stdDate;
    this.stdGender = stdGender;
    this.stdMajor = stdMajor;
    this.stdImage = stdImage;
    this.stdNumber = stdNumber;
}



//-------------show data-----------------//
function render() {
    for (let i = 0; i < stdArray.length; i++) {
        let stdcard = document.getElementById("student-card");
        let imageContent = document.createElement("div");
        let image = document.createElement("img");
        image.src = `${stdArray[i].stdImage}`;
        imageContent.appendChild(image);

        let stdInfoContent = document.createElement("div");
        let stdName = document.createElement("p");
        stdName.textContent = `${stdArray[i].stdName}`;
        



        let stdNumber = document.createElement("p");
        stdNumber.textContent = `${stdArray[i].stdNumber}`;
        




        let stdMajor = document.createElement("p");
        stdMajor.textContent = `${stdArray[i].stdMajor}`;
        stdInfoContent.appendChild(stdName);
        stdInfoContent.appendChild(stdNumber);
        stdInfoContent.appendChild(stdMajor);
        stdcard.appendChild(imageContent);
        stdcard.appendChild(stdInfoContent);
    }
}


