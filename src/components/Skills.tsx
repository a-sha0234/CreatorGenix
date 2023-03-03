import { useDispatch, useSelector } from "react-redux";
import { store, RootState } from "../redux/store";
import { addSkill, updateSkill, deleteSkill } from "../redux/skills";
import SkillsForm from "./common/SkillsForm";
import { v4 as uuidv4 } from "uuid";

export default function Skills() {
  const dispatch = useDispatch();
  const skills = useSelector((state: RootState) => state.skillData);
  function createSkill() {
    dispatch(addSkill(uuidv4()));
  }

  return (
    <div>
      <h1>Skills</h1>
      {skills.form.map((data, index) => {
        return <SkillsForm id={data.uuid} formKey={index} />;
      })}
      <button onClick={createSkill}>+New</button>
    </div>
  );
}
