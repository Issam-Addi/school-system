let mainForm = document.getElementById("main-form")
mainForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const userName = event.target.full_name.value;
    const userAge = event.target.date_of_birth.value;
    const userGender = event.target.gender.checked ? event.target.gender.value : "Female";
    const userphone = event.target.phone_number.value;
    const userGrade = event.target.grade.value;
    let mainTableBody = document.getElementById("info");
    let row = document.createElement("tr");

        //////// fill tabel way A
    // row.innerHTML = `<td>${userName}</td><td>${userAge}</td><td>${userGender}</td><td>${userphone}</td><td>${userGrade}</td>`;

        //////// fill table way B
    let cell1 = document.createElement("td");
    cell1.textContent = userName;
    row.appendChild(cell1);
    let cell2 = document.createElement("td");
    cell2.textContent = userAge;
    row.appendChild(cell2);
    let cell3 = document.createElement("td");
    cell3.textContent = userGender;
    row.appendChild(cell3);
    let cell4 = document.createElement("td");
    cell4.textContent = userphone;
    row.appendChild(cell4);
    let cell5 = document.createElement("td");
    cell5.textContent = userGrade;
    row.appendChild(cell5);
    mainTableBody.appendChild(row);
    mainForm.reset();
})