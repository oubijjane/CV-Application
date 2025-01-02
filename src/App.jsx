//import { useState } from "react";
/* import "./App.css"; */

function ContactInfo() {
  return (
    <section className="contactInfo">
      <form>
        <label htmlFor="FirstName">First name*</label>
        <input type="text" id="FirstName" required />
        <label htmlFor="LastName">last name*</label>
        <input type="text" id="LastName" />
        <label htmlFor="email">email*</label>
        <input type="email" id="LastName" required />
        <label htmlFor="address">address*</label>
        <input type="text" id="address" required />
        <label htmlFor="address">address</label>
        <input type="text" id="address" />
        <label htmlFor="phoneNumber">phone number</label>
        <input type="tel" id="phoneNumber" />
      </form>
    </section>
  );
}

function Months() {
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
    <select name="months" id="months">
      {dispalyMonths}
    </select>
  );
}
function Years(buffer = 0) {
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
    <select name="years" id="year">
      {displayYears}
    </select>
  );
}
function Experiences() {
  return (
    <section className="experiences">
      <form>
        <label htmlFor="JobTitle">Job title*</label>
        <input type="text" id="JobTitle" required />
        <label htmlFor="Company">Company*</label>
        <input type="text" id="Company" />
        <p>Start date</p>
        <label htmlFor="months">Month</label>
        {Months()}
        <label htmlFor="year">year</label>
        {Years()}
        <p>End date</p>
        <label htmlFor="months">Month</label>
        {Months()}
        <label htmlFor="year">year</label>
        {Years()}
        <br />
        <label htmlFor="currentJob">I am currently work here</label>
        <input type="checkbox" id="currentJob" />
        <label htmlFor="description">description</label>
        <textarea id="description">helloq</textarea>
      </form>
    </section>
  );
}

function Education() {
  return (
    <section className="education">
      <form>
        <label htmlFor="schoolName">Schoole Name</label>
        <input type="text" id="schooleName" />
        <label htmlFor="schoolLOcation">Schoole location</label>
        <input type="text" id="schooleLocation" />
        <label htmlFor="degree">degree</label>
        <input type="text" id="degree" />
        <label htmlFor="schoolName">Schoole Name</label>
        <input type="text" id="schooleName" />
        <label htmlFor="fieldOfStudy">Field of study</label>
        <input type="text" id="fieldOfStudy" />
        <p>Graduation Date (or expected graduation date)</p>
        <label htmlFor="months">Month</label>
        {Months()}
        <label htmlFor="year">year</label>
        {Years(10)}
      </form>
    </section>
  );
}

function Languages() {
  const proficiencyLevels = [
    "Bigginer(A1)",
    "Elementary (A2)",
    "Intermediate (B1)",
    "Upper Intermediate (B2)",
    "Advanced (C1)",
    "Proficient (C2)",
  ];
  const dispalyProficiency = proficiencyLevels.map((level) => (
    <option key={level} value={level}>
      {level}
    </option>
  ));

  return (
    <section className="languages">
      <form>
        <label htmlFor="language">Language</label>
        <input type="text" />
        <label htmlFor="proficiency">Proficiency</label>
        <select name="levels" id="proficiency">
          {dispalyProficiency}
        </select>
      </form>
    </section>
  );
}

function Skills() {
  return <section className="skills">
    <form>
      <label htmlFor="skill">Skills</label>
      <textarea id="skill">add your skills</textarea>
    </form>
  </section>
}

export default Skills;
