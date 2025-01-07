/* eslint-disable react/prop-types */
import { useState } from "react";
import { jsPDF } from "jspdf";

function DisplayCV({ result }) {
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
      <button onClick={() => setOpen(true)}>cv</button>
    </>
  );
}

function toPdf() {
  const cv = document.querySelector(".cv");

  const doc = new jsPDF("p", "mm", [210,290]);;
      doc.html(cv, {
        callback: function (doc) {
          doc.save("cv");
        },
        html2canvas: { scale: 0.2633 },
      });
}
function ContactInfo({ data }) {
  return (
    <section className="cv-contact-info">
      <p>
        {data.getFirstName()} {data.getLastName()}
      </p>
      <p>
        {data.getEmail()} {data.getPhoneNumber()}
        {data.getAddress()}
      </p>
    </section>
  );
}

function Experience({ data }) {
  return (
    <section className="cv-experience">
      <p className="heading">Experiences</p>
      <p>
        <b>{data.getCompany()}</b>({data.getJobTitle()}): {data.getStartMonth()}{" "}
        {data.getStartYear()} -{data.getEndMonth()} {data.getEndYear()}
      </p>
      <p>{data.getDescription()}</p>
    </section>
  );
}
function Education({ data }) {
  return (
    <section className="cv-education">
      <p className="heading">Education</p>
      <p>
        {data.getSchool()} {data.getMonth()} {data.getLocation()}{" "}
        {data.getYear()}
      </p>
      <p>
        {data.getDegree()} {data.getField()}
      </p>
    </section>
  );
}

function Language({ data }) {
  return (
    <section className="cv-Languge">
      <p className="heading">Languages</p>
      <p>
        {data.getLanguage()}: {data.getProficiency()}
      </p>
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
