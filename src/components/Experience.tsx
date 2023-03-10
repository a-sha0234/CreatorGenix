import ExperienceForm from "./common/ExperienceForm";
import { useDispatch, useSelector } from "react-redux";
import { addForm } from "../redux/experience";
import { store, RootState } from "../redux/store";
import { v4 as uuidv4 } from "uuid";
import { Heading, Button } from "../style/styles";

export default function Experience() {
  const dispatch = useDispatch();
  const experiences = useSelector((state: RootState) => state.experienceData);

  function addForms() {
    dispatch(addForm(uuidv4()));
  }

  console.log(experiences.form);

  return (
    <div>
      <Heading>Experience</Heading>
      <div>
        {experiences.form.map((data, index) => {
          return <ExperienceForm key={index} formkey={index} data={data} />;
        })}
      </div>
      <Button onClick={addForms}>+ New</Button>
    </div>
  );
}
