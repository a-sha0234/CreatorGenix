import React from "react";
import { useState } from "react";

const PersonalData = () => {
  const [personalData, setPersonalData] = useState({
    name: "",
    lastName: "",
    location: "",
    website: "",
    email: "",
    phoneNumber: "",
    profileDescription: "",
  });

  return (
    <>
      <h2>Personal Data</h2>
      <form>
        <input type="text"></input>
        <input type="text"></input>
        <input></input>
        <input></input>
        <input></input>
        <input></input>
        <textarea></textarea>
        <button>Submit</button>
      </form>
    </>
  );
};

export default PersonalData;
