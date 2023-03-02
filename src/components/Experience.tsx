import ExperienceForm from "./common/ExperienceForm";
import { useDispatch, useSelector } from "react-redux";
import { addForm } from "../redux/experience";
import { store, RootState } from "../redux/store";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { uuid } from "uuidv4";

export default function Experience() {
  const dispatch = useDispatch();
  const experiences = useSelector((state: RootState) => state.experienceData);

  function addForms() {
    dispatch(addForm(uuidv4()));
  }

  console.log(experiences.form);

  return (
    <div>
      <h1>Experience</h1>
      <div>
        {experiences.form.map((data, index) => {
          return <ExperienceForm key={index} formkey={index} data={data} />;
        })}
      </div>
      <button onClick={addForms}>+ New</button>
    </div>
  );
}
