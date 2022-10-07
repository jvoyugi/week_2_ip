const MALE_AKAN_NAMES = [
  "Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"
]

const FEMALE_AKAN_NAMES = [
  "Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"
]

function getName() {
  let year = document.getElementById('year');
  let month = document.getElementById('month');
  let day = document.getElementById('day');
  let gender = document.querySelector('input[name="gender"]:checked').value;
  const isValidYear = validateYear(year);
  const isValidMonth = validateMonth(month);
  const isValidDay = validateDay(day);
}


function validateYear(year) {
  if (!year || year.value > 2022) {
    document.getElementById('year_errors').innerHTML = "Year must be less than or equal to this year";
    return false;
  }
  return true;
}

function validateMonth(month) {
  if (!month || month.value > 12 || month.value < 1) {
    document.getElementById('month_errors').innerHTML = "Month must be between 1 and 12";
    return false;
  }
  return true;
}

function validateDay(day) {
  if (!day || day.value < 1 || day.value > 31) {
    document.getElementById('day_errors').innerHTML = "Day must be between 1 and 31";
    return false;
  }
  return true;
}