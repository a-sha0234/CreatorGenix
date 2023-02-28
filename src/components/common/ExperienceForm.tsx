import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateForm, deleteForm } from "../../redux/experience";
import { store, RootState } from "../../redux/store";
import { useState, useEffect } from "react";
interface Iprops {
  formkey: number;
  data: any;
  key: number;
}

const ExperienceForm: React.FC<Iprops> = ({ formkey, data, key }) => {
  const dispatch = useDispatch();
  const experiences = useSelector((state: RootState) => state.experienceData);

  function handleChange(e: any) {
    dispatch(
      updateForm({
        id: data.uuid,
        value: e.currentTarget.value,
        field: e.currentTarget.name,
      })
    );
  }

  function handleDelete(e: any) {
    console.log(data.uuid);

    dispatch(deleteForm(data.uuid));
  }

  return (
    <div>
      <form>
        <input onChange={handleChange} name="companyName"></input>
        <input onChange={handleChange} name="position"></input>
        <textarea onChange={handleChange} name="responsibilities"></textarea>
        <input onChange={handleChange} name="startDate"></input>
        <input onChange={handleChange} name="endDate"></input>
      </form>

      <button onClick={handleDelete} id={`${data.uuid}`}>
        Delete
      </button>
    </div>
  );
};

export default ExperienceForm;
