/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

function DisplayCV({ result }) {
  return (
    <div>
      <p>
        {result[0].getFirstName()} {result[0].getLastName()}
      </p>
      <p>
        {result[0].getEmail()} {result[0].getPhoneNumber()}
        {result[0].getAddress()}
      </p>
    </div>
  );
}

export default DisplayCV;
