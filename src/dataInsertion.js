function saveUserData(userData) {
  const firstName = document.querySelector("#FirstName");
  const lastName = document.querySelector("#LastName");
  const email = document.querySelector("#email");
  const address = document.querySelector("#address");
  const phoneNumber = document.querySelector("#phoneNumber");
  userData.setFirstName(firstName.value);
  userData.setLastName(lastName.value);
  userData.setEmail(email.value);
  userData.setAddress(address.value);
  userData.setPhoneNumber(phoneNumber.value);
  console.log(userData.getAddress());
}
function saveExperienceData(experienceData) {
  const jobTitle = document.querySelector("#jobTitle");
  const company = document.querySelector("#company");
  const startMonth = document.querySelector("#startMonth");
  const startYear = document.querySelector("#startYear");
  const endMonth = document.querySelector("#endMonth");
  const endYear = document.querySelector("#endYear");
  const currenctJob = document.querySelector("#currentJob");
  const description = document.querySelector("#description");

  experienceData.setJobTitle(jobTitle.value);
  experienceData.setCompany(company.value);
  experienceData.getStartYear(startYear.value);
  experienceData.setStartMonth(startMonth.value);
  if (currenctJob.checked) {
    experienceData.setEndYear(new Date().getFullYear());
    experienceData.setEndMonth(new Date().getMonth());
  } else {
    experienceData.setEndYear(endYear.value);
    experienceData.setEndMonth(endMonth.value);
  }
  experienceData.setDescription(description.value);
}

function saveEducationData(educationData) {
  const school = document.querySelector("#schoolName");
  const schoolLocation = document.querySelector("#schoolLocation");
  const field = document.querySelector("#fieldOfStudy");
  const degree = document.querySelector("#degree");
  const endMonth = document.querySelector("#month");
  const endYear = document.querySelector("#year");

  educationData.setSchool(school.value);
  educationData.setDegree(degree.value);
  educationData.setYear(endYear.value);
  educationData.setMonth(endMonth.value)
  educationData.setLocation(schoolLocation.value);
  educationData.setField(field.value);
}

export { saveUserData, saveExperienceData,saveEducationData };
