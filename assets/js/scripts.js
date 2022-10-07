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
  
}


function validateYear(year) {
  if (!year || year.value > 2022) {
    document.getElementById('year_errors').innerHTML = "Year must be less than or equal to this year";
    return false;
  }
  return true;
}