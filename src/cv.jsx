/* eslint-disable react/prop-types */
import { useId, useState } from "react";
import { jsPDF } from "jspdf";
import { IDGenerator } from "./data.js";

function DisplayCV({ result,name = "hideCV" }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <dialog open={open}>
        <div className="cv">
          <ContactInfo data={result[0]} />
          <Experience data={result[1]} />
          <Education data={result[2]} />
          <Language data={result[3]} />

          <Skill data={result[4]} />
        </div>
        <button onClick={() => setOpen(false)}>close</button>
        <button onClick={toPdf}>download</button>
      </dialog>
      <button onClick={() => setOpen(true)} className={name}>cv</button>
    </>
  );
}

async function toPdf() {
  const cv = document.querySelector(".cv");
  cv.style.zoom = 1
  const doc = new jsPDF("p", "mm", [210, 290]);
  await doc.html(cv, {
    callback: function (doc) {
      doc.save("cv");
    },
    html2canvas: { scale: 0.2633 },
  });
  cv.style.zoom = "40%";
}
function ContactInfo({ data }) {
  return (
    <section className="cv-contact-info">
      <p>
       <b>{data.getFirstName()}&nbsp;{data.getLastName()}</b>
      </p>
      <p>
        {data.getEmail()}&nbsp;{data.getPhoneNumber()}&nbsp;
         {data.getAddress()}
      </p>
    </section>
  );
}

function Experience({ data }) {
  const jobs = Array.from(data).map((job) => (
    <div key={IDGenerator.generateId()}>
      <p>
        <b>{job.getCompany()}</b>({job.getJobTitle()}): {job.getStartMonth()}{" "}
        {job.getStartYear()} -{job.getEndMonth()} {job.getEndYear()}
      </p>
      <p>{job.getDescription()}</p>
    </div>
  ));
  return (
    <section className="cv-experience">
      <p className="heading">Experiences</p>
      {jobs}
    </section>
  );
}
function Education({ data }) {
  
  const educations = Array.from(data).map(edu =>
    <div key={IDGenerator.generateId()}>
       <p>
        <b>{edu.getSchool()}</b>{edu.getLocation()}: {edu.getMonth()} 
        {edu.getYear()}
      </p>
      <p>
        {edu.getDegree()} {edu.getField()}
      </p>
     
    </div>
  )
  return (
    <section className="cv-education">
      <p className="heading">Education</p>
     {educations}
    </section>
  );
}

function Language({ data }) {
 
  const Languages = Array.from(data).map((lan) => (
    <div key={IDGenerator.generateId()}>
      <p key={IDGenerator.generateId()}>
        <b>{lan.getLanguage()}</b>: {lan.getProficiency()}
      </p>
    </div>
  ));
  return (
    <section className="cv-Languge">
      <p className="heading">Languages</p>
      {Languages}
    </section>
  );
}
function Skill({ data }) {
  return (
    <section className="cv-Languge print">
      <p className="heading">Skills</p>
      <p>{data.getSkill()}</p>
    </section>
  );
}
export default DisplayCV;
