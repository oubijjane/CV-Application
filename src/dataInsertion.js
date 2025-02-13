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

  return userData;
}
function saveExperienceData(experienceData) {
  const jobTitle = document.querySelector("#jobTitle");
  const company = document.querySelector("#company");
  const startMonth = document.querySelector("#monthsStart");
  const startYear = document.querySelector("#yearStart");
  const endMonth = document.querySelector("#monthsEnd");
  const endYear = document.querySelector("#yearEnd");
  const currenctJob = document.querySelector("#currentJob");
  const description = document.querySelector("#description");

  experienceData.setJobTitle(jobTitle.value);
  experienceData.setCompany(company.value);
  experienceData.setStartYear(startYear.value);
  experienceData.setStartMonth(startMonth.value);
  if (currenctJob.checked) {
    experienceData.setEndMonth("present");
  } else {
    experienceData.setEndYear(endYear.value);
    experienceData.setEndMonth(endMonth.value);
  }
  experienceData.setDescription(description.value);
  return experienceData;
}

function saveEducationData(educationData) {
  const school = document.querySelector("#schoolName");
  const schoolLocation = document.querySelector("#schoolLocation");
  const field = document.querySelector("#fieldOfStudy");
  const degree = document.querySelector("#degree");
  const endMonth = document.querySelector("#months");
  const endYear = document.querySelector("#year");

  educationData.setSchool(school.value);
  educationData.setDegree(degree.value);
  educationData.setYear(endYear.value);
  educationData.setMonth(endMonth.value);
  educationData.setLocation(schoolLocation.value);
  educationData.setField(field.value);

  return educationData;
}

function saveLanguageData(languageData) {
  const language = document.querySelector("#language");
  const proficiency = document.querySelector("#proficiency");

  languageData.setLanguage(language.value);
  languageData.setProficiency(proficiency.value);

  return languageData;
}

function saveSkillData(skillData) {
  const skill = document.querySelector("#skill");
  skillData.setSkill(skill.value);

  return skillData;
}

export {
  saveUserData,
  saveExperienceData,
  saveEducationData,
  saveLanguageData,
  saveSkillData,
};
