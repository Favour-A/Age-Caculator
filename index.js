const day = document.getElementById('day');
const month = document.getElementById('month');
const year = document.getElementById('year');

const errorMessage = document.getElementById('error');

const goButton = document.getElementById('go_button');

const yearDisplay = document.getElementById("year_display");
const monthDisplay = document.getElementById("month_display");
const dayDisplay = document.getElementById("day_display"); 

const calculateAge = () => {

    if (day.value > 31 || day.value < 1) {
        errorMessage.innerHTML = "Please enter a valid date";
        return;
    } else if (month.value > 12 || month.value < 1) {
        errorMessage.innerHTML ="Please enter a valid month";
        return;
    } else if (year.value > 2022 || year.value < 1900) {
        errorMessage.innerHTML = "Please enter a valid year";
        return;
    } else if (month.value == 2 && day.value > 28) {
        errorMessage.innerHTML = "Please enter a valid date";
    } else if (month.value == 4 && day.value > 30) {
        errorMessage.innerHTML = "Please enter a valid date";
    } else if (month.value == 6 && day.value > 30) {
        errorMessage.innerHTML = "Please enter a valid date";
    } else if (month.value == 9 && day.value > 30) {
        errorMessage.innerHTML = "Please enter a valid date";
    } else if (month.value == 11 && day.value > 30) {
        errorMessage.innerHTML = "Please enter a valid date";
    } else {
        errorMessage.innerHTML = "";
    }

    const birthDate = year.value + '-' + month.value + '-' + day.value;
    const bornDay = new Date(birthDate);

    const currentDate = new Date();

    const ageInMilliseconds = currentDate - bornDay;

    const ageDate = new Date(ageInMilliseconds);

    const years = ageDate.getUTCFullYear() - 1970;

    const months = ageDate.getUTCMonth();

    const days = ageDate.getUTCDate() - 1;

    yearDisplay.innerHTML = years;
    monthDisplay.innerHTML = months;
    dayDisplay.innerHTML = days;

   

    console.log(ageInMilliseconds);
    console.log(years);
    console.log(months);
    console.log(days);

    
}

//an if statement to check if the user has entered a valid date
 
 




goButton.addEventListener('click', () => {
    calculateAge();
});