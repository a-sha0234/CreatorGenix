import ExperienceForm from "./common/ExperienceForm";
import { useDispatch, useSelector } from "react-redux";
import { addForm } from "../redux/experience";
import { store, RootState } from "../redux/store";
import { useEffect, useState } from "react";

export default function Experience() {
  const dispatch = useDispatch();
  const experiences = useSelector((state: RootState) => state.experienceData);

  function addForms() {
    dispatch(addForm());
    console.log(experiences.form);
  }

  return (
    <div>
      <h1>Experience</h1>
      <div>
        {experiences.form.map((data, index) => {
          return <ExperienceForm formkey={index} />;
        })}
      </div>
      <button onClick={addForms}>+ New</button>
    </div>
  );
}
