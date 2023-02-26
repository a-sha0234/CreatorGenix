import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateForm, deleteForm } from "../../redux/experience";
interface Iprops {
  formkey: number;
}

const ExperienceForm: React.FC<Iprops> = ({ formkey }) => {
  const dispatch = useDispatch();

  function handleChange(e: any) {
    dispatch(
      updateForm({
        index: formkey,
        value: e.currentTarget.value,
        field: e.currentTarget.name,
      })
    );
  }

  function handleDelete(e: any) {
    console.log(e.currentTarget.id);
    dispatch(deleteForm(Number(e.currentTarget.id)));
  }

  // console.log(formkey);

  return (
    <div>
      <form>
        <input onChange={handleChange} name="companyName"></input>
        <input onChange={handleChange} name="position"></input>
        <textarea onChange={handleChange} name="responsibilities"></textarea>
        <input onChange={handleChange} name="startDate"></input>
        <input onChange={handleChange} name="endDate"></input>
      </form>

      <button onClick={handleDelete} id={`${formkey}`}>
        Delete
      </button>
    </div>
  );
};

export default ExperienceForm;
