import { useState } from "react";
import "./App.css";
import { user, experience, education, language, skill } from "./data.js";
import { saveUserData } from "./dataInsertion.js";

function ContactInfo(userData) {
  const [firstName, setFirstName] = useState(userData.getFirstName());
  function changeFirstName(e) {
    setFirstName(e.target.value);
  }
  const [lastName, setLastName] = useState(userData.getLastName());
  function changeLastName(e) {
    setLastName(e.target.value);
  }
  const [address, setAdress] = useState(userData.getAddress());
  function changeAdress(e) {
    setAdress(e.target.value);
  }
  const [email, setEmail] = useState(userData.getEmail());
  function changeEmail(e) {
    setEmail(e.target.value);
  }
  const [phoneNumber, setPhoneNumber] = useState(userData.getPhoneNumber());
  function changePhoneNUmber(e) {
    setPhoneNumber(e.target.value);
  }

  return (
    <section className="contactInfo">
      <p className="title">Contact info</p>
      <form>
        <div className="container">
          <label htmlFor="FirstName" required>
            First name*
          </label>
          <input
            type="text"
            id="FirstName"
            value={firstName}
            onChange={changeFirstName}
            required
          />
        </div>
        <div className="container">
          <label htmlFor="LastName">last name*</label>
          <input
            type="text"
            id="LastName"
            value={lastName}
            onChange={changeLastName}
            required
          />
        </div>
        <div className="container">
          <label htmlFor="email">email*</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={changeEmail}
            required
          />
        </div>
        <div className="container">
          <label htmlFor="address">address*</label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={changeAdress}
            required
          />
        </div>
        <div className="container">
          <label htmlFor="phoneNumber">phone number</label>
          <input
            type="tel"
            id="phoneNumber"
            value={phoneNumber}
            onChange={changePhoneNUmber}
          />
        </div>
      </form>
    </section>
  );
}

function Months(id, value, action) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const dispalyMonths = months.map((month) => (
    <option key={month} value={month}>
      {month}
    </option>
  ));
  return (
    <select name="months" id={id} value={value} onChange={action}>
      {dispalyMonths}
    </select>
  );
}
function Years(buffer = 0, id, value, action) {
  const currentYear = new Date().getFullYear() + buffer;
  const years = [];
  for (let i = 0; i < 90; i++) {
    const year = currentYear - i;
    years.push(year);
  }
  const displayYears = years.map((year) => (
    <option key={year} value={year}>
      {year}
    </option>
  ));
  return (
    <select name="years" id={id} value={value} onChange={action}>
      {displayYears}
    </select>
  );
}
function Experiences(experienceData) {
  const [JobTitle, setJobTitle] = useState(experienceData.getJobTitle());
  const [company, setCompany] = useState(experienceData.getCompany());
  const [startYear, setStartYear] = useState(experienceData.getStartYear());
  const [startMonth, setStartMonth] = useState(experienceData.getStartMonth());
  const [endYear, setEndYear] = useState(experienceData.getEndYear());
  const [endMonth, setEndMonth] = useState(experienceData.getEndMonth());
  const [currentJob, setCurrentJob] = useState("");
  const [description, setDescription] = useState(experienceData.getDescription());

  function changeJobTitle(e) {
    setJobTitle(e.target.value);
  }
  function changeCompany(e) {
    setCompany(e.target.value);
  }
  function changeStartYear(e) {
    setStartYear(e.target.value);
  }
  function changeStartMonth(e) {
    setStartMonth(e.target.value);
  }
  function changeEndYear(e) {
    setEndYear(e.target.value);
  }
  function changeEndMonth(e) {
    setEndMonth(e.target.value);
  }
  function changeDescription(e) {
    setDescription(e.target.value);
  }
  function changeCurrentJob(e) {
    setCurrentJob(e.target.value);
  }
  return (
    <section className="experiences">
      <form>
        <div className="container">
          <label htmlFor="jobTitle">Job title*</label>
          <input
            type="text"
            id="jobTitle"
            value={JobTitle}
            onChange={changeJobTitle}
            required
          />
        </div>
        <div className="container">
          <label htmlFor="company">Company*</label>
          <input
            type="text"
            id="company"
            value={company}
            onChange={changeCompany}
          />
        </div>
        <div className="container">
          <p>Start date</p>
          <label
            htmlFor="monthsStart"
            value={startMonth}
            onChange={changeStartMonth}
          >
            Month
          </label>
          {Months("monthsStart", startMonth, changeStartMonth)}
          <label
            htmlFor="yearStart"
          >
            year
          </label>
          {Years(0, "yearStart", startYear, changeStartYear)}
        </div>
        <div className="container">
          <p>End date</p>
          <label htmlFor="monthsEnd">Month</label>
          {Months("monthsEnd", endMonth, changeEndMonth)}
          <label htmlFor="yearEnd">year</label>
          {Years(0, "yearEnd", endYear, changeEndYear)}
          <div className="subContainer">
            <label htmlFor="currentJob">I am currently work here</label>
            <input
              type="checkbox"
              id="currentJob"
              checked={currentJob}
              onChange={changeCurrentJob}
            />
          </div>
        </div>
        <div className="container">
          <label htmlFor="description">description</label>
          <textarea
            id="description"
            value={description}
            onChange={changeDescription}
          ></textarea>
        </div>
      </form>
    </section>
  );
}

function Education(educationData) {
  const [schoolName, setSchoolName] = useState(educationData.getSchool());
  const [schoolLocation, setSchoolLocation] = useState(educationData.getLocation());
  const [degree, setDegree] = useState(educationData.getDegree());
  const [field, setField] = useState(educationData.getField());
  const [endYear, setEndYear] = useState(educationData.getYear());
  const [endMonth, setEndMonth] = useState(educationData.getMonth());

  function changeSchoolName(e) {
    setSchoolName(e.target.value);
  }
  function changeSchoolLocation(e) {
    setSchoolLocation(e.target.value);
  }
  function changeField(e) {
    setField(e.target.value);
  }
  function changeDegree(e) {
    setDegree(e.target.value);
  }
  function changeEndYear(e) {
    setEndYear(e.target.value);
  }
  function changeEndMonth(e) {
    setEndMonth(e.target.value);
  }

  return (
    <section className="education">
      <form>
        <div className="container">
          <label htmlFor="schoolName">School Name</label>
          <input
            type="text"
            id="schoolName"
            value={schoolName}
            onChange={changeSchoolName}
          />
        </div>
        <div className="container">
          <label htmlFor="schoolLocation">School location</label>
          <input
            type="text"
            id="schoolLocation"
            value={schoolLocation}
            onChange={changeSchoolLocation}
          />
        </div>
        <div className="container">
          <label htmlFor="degree">degree</label>
          <input
            type="text"
            id="degree"
            value={degree}
            onChange={changeDegree}
          />
        </div>
        <div className="container">
          <label htmlFor="fieldOfStudy">Field of study</label>
          <input
            type="text"
            id="fieldOfStudy"
            value={field}
            onChange={changeField}
          />
        </div>
        <div className="container">
          <p>Graduation Date (or expected graduation date)</p>
          <label htmlFor="months" defaultValue={educationData.getMonth()}>
            Month
          </label>
          {Months("months", endMonth, changeEndMonth)}
          <label htmlFor="year" defaultValue={educationData.getYear()}>
            year
          </label>
          {Years(10, "year", endYear, changeEndYear)}
        </div>
      </form>
    </section>
  );
}

function Languages(languageData) {
  const proficiencyLevels = [
    "Bigginer(A1)",
    "Elementary (A2)",
    "Intermediate (B1)",
    "Upper Intermediate (B2)",
    "Advanced (C1)",
    "Proficient (C2)",
  ];
  const [language, setLanguage] = useState(languageData.getLanguage());
  const [proficiency, setProficiency] = useState(languageData.getProficiency());
  function changeLanguage(e) {
    setLanguage(e.target.value);
  }
  function changeProficiency(e) {
    setProficiency(e.target.value);
  }
  const dispalyProficiency = proficiencyLevels.map((level) => (
    <option key={level} value={level}>
      {level}
    </option>
  ));

  return (
    <section className="languages">
      <form>
        <div className="container">
          <label htmlFor="language">Language</label>
          <input
            type="text"
            id="language"
            value={language}
            onChange={changeLanguage}
          />
        </div>
        <div className="container">
          <label htmlFor="proficiency">Proficiency</label>
          <select name="levels" id="proficiency" value={proficiency} onChange={changeProficiency}>
            {dispalyProficiency}
          </select>
        </div>
      </form>
    </section>
  );
}

function Skills(skillData) {
  const [skill, setSkill] = useState(skillData.getSkill());
  function changeSkill(e) {
    setSkill(e.target.value)
  }
  return (
    <section className="skills">
      <form>
        <div className="container">
          <label htmlFor="skill">Skills</label>
          <textarea id="skill" value={skill} onChange={changeSkill}></textarea>
        </div>
      </form>
    </section>
  );
}
function SwitchingSections() {
  const userData = user();
  const experienceData = experience();
  const educationData = education();
  const languageData = language();
  const skillData = skill();
  const [index, setIndex] = useState(0);
  const sections = [
    ContactInfo(userData),
    Experiences(experienceData),
    Education(educationData),
    Languages(languageData),
    Skills(skillData),
  ];
  const previousPage = index > 0;
  const nextPage = index + 1 < sections.length;

  function next() {
    //saveUserData(userData);
    return nextPage ? setIndex(index + 1) : null;
  }
  function prev() {
    return previousPage ? setIndex(index - 1) : false;
  }

  return (
    <>
      {sections[index]}
      <button onClick={next} disabled={!nextPage}>
        next
      </button>
      <button onClick={prev} disabled={!previousPage}>
        previous
      </button>
    </>
  );
}
export default SwitchingSections;
