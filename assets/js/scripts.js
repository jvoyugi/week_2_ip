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
  if (isValidYear && isValidMonth && isValidDay) {
    const akanName = getAkanName(parseInt(day.value), parseInt(month.value), year.value, gender);
    document.getElementById('akan_name').innerHTML = `Your Akan name is ${akanName}`
  }
}


function validateYear(year) {
  if (!year){
    alert('Year cannot be empty.');
    return false;
  }
  if (year.value > 2022) {
    alert("Year must be less than or equal to this year");
    return false;
  }
  return true;
}

function validateMonth(month) {
  if (!month){
    alert('Month cannot be empty.');
    return false;
  }
  if (month.value > 12 || month.value < 1) {
    alert("Month must be between 1 and 12");
    return false;
  }
  return true;
}

function validateDay(day) {
  if (!day.value){
    alert('Day cannot be empty.');
    return false;
  }
  if (!day || day.value < 1 || day.value > 31) {
    alert("Day must be between 1 and 31");
    return false;
  }
  return true;
}

function getAkanName(day, month, year, gender) {
  let century = parseInt(year.substring(0, 2));
  let last_year_digits = parseInt(year.substring(2, 4));
  let dayOfTheWeek = parseInt(((century / 4) - 2 * century - 1) + (5 * last_year_digits / 4) + (26 * (month + 1) / 10) + day) % 7
  return gender == "male" ? MALE_AKAN_NAMES[dayOfTheWeek] : FEMALE_AKAN_NAMES[dayOfTheWeek];
}