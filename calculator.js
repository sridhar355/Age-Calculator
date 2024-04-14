const calculateAgeElement = document.getElementById("calculateAge");calculateAgeElement
const dobElemet = document.getElementById("birthday");
const finalAgeElement = document.getElementById("result");

function calculateAge() {
  const dobVal = dobElemet.value;
  if (dobVal === "") {
    alert("Please enter your birthday");
  } else {
    const age = getAge(dobVal);
    finalAgeElement.innerText = `Your age is ${age} year old`;
  }
}

function getAge(dobVal) {
    const currentDate = new Date();
    const birthdayDate = new Date(dobVal);
    let age = currentDate.getFullYear() - birthdayDate.getFullYear();
    const month = currentDate.getMonth() - birthdayDate.getMonth();
    if ( month < 0 || (month === 0 && currentDate.getDate() < birthdayDate.getDate())) {
        age--;
   }
  return age;
}
calculateAgeElement.addEventListener("click", calculateAge);
