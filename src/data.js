
const IDGenerator = (function () {
  let taskIdCounter = 0;
  const setIdCount = (startingId) => taskIdCounter = startingId ;

  return {
      generateId: () => ++taskIdCounter,setIdCount
  };
})();
function user() {
  let firstName = "";
  let lastName = "";
  let email = "";
  let address = "";
  let phoneNUmber = "";

  const getFirstName = () => firstName;
  const setFirstName = (value) => (firstName = value);

  const getLastName = () => lastName;
  const setLastName = (value) => (lastName = value);

  const getEmail = () => email;
  const setEmail = (value) => (email = value);

  const getAddress = () => address;
  const setAddress = (value) => (address = value);

  const getPhoneNumber = () => phoneNUmber;
  const setPhoneNumber = (value) => (phoneNUmber = value);

  return {
    getFirstName,
    getLastName,
    getEmail,
    getAddress,
    getPhoneNumber,
    setFirstName,
    setLastName,
    setEmail,
    setAddress,
    setPhoneNumber,
  };
}

function experience() {
  let jobTitle = "";
  let company = "";
  let startYear = "";
  let startMonth = "";
  let endYear = "";
  let endMonth = "";
  let description = "";

  const getJobTitle = () => jobTitle;
  const setJobTitle = (value) => (jobTitle = value);

  const getCompany = () => company;
  const setCompany = (value) => (company = value);

  const getStartYear = () => startYear;
  const setStartYear = (value) => (startYear = value);

  const getStartMonth = () => startMonth;
  const setStartMonth = (value) => (startMonth = value);

  const getEndYear = () => endYear;
  const setEndYear = (value) => (endYear = value);

  const getEndMonth = () => endMonth;
  const setEndMonth = (value) => (endMonth = value);

  const getDescription = () => description;
  const setDescription = (value) => (description = value);

  return {
    getJobTitle,
    getCompany,
    getStartYear,
    getStartMonth,
    getEndYear,
    getEndMonth,
    getDescription,
    setJobTitle,
    setCompany,
    setStartMonth,
    setStartYear,
    setEndMonth,
    setEndYear,
    setDescription,
  };
}

function education() {
  let school = "";
  let location = "";
  let year = "";
  let month = "";
  let degree = "";
  let field = "";

  const getSchool = () => school;
  const setSchool = (value) => (school = value);

  const getLocation = () => location;
  const setLocation = (value) => (location = value);

  const getDegree = () => degree;
  const setDegree = (value) => (degree = value);

  const getYear = () => year;
  const setYear = (value) => (year = value);

  const getMonth = () => month;
  const setMonth = (value) => (month = value);

  const getField = () => field;
  const setField = (value) => (field = value);

  return {
    getSchool,
    getLocation,
    getDegree,
    getMonth,
    getYear,
    getField,
    setSchool,
    setDegree,
    setField,
    setMonth,
    setYear,
    setLocation,
  };
}
function language() {
  let language = "test";
  let proficiency = "";

  const getLanguage = () => language;
  const setLanguage = (value) => (language = value);

  const getProficiency = () => proficiency;
  const setProficiency = (value) => (proficiency = value);

  return { getLanguage, getProficiency, setLanguage, setProficiency };
}
function skill() {
  let skill = "";
  const getSkill = () => skill;
  const setSkill = (value) => (skill = value);

  return { getSkill, setSkill };
}

export { user, experience, education, language, skill,IDGenerator };
