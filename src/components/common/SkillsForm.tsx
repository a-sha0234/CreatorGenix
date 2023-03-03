import { useSelector, useDispatch } from "react-redux";
import { store, RootState } from "../../redux/store";
import { updateSkill, deleteSkill } from "../../redux/skills";

interface Iprops {
  id: string;
  formKey: number;
}

const SkillsForm: React.FC<Iprops> = ({ id, formKey }) => {
  const dispatch = useDispatch();
  const skills = useSelector((state: RootState) => state.skillData);

  function handleSkillChange(e: any) {
    dispatch(updateSkill({ id: id, value: e.currentTarget.value }));
  }
  function handleDeleteSkill() {
    dispatch(deleteSkill(id));
  }

  return (
    <>
      <form>
        <input
          name="skill"
          value={skills.form[formKey].skill}
          onChange={handleSkillChange}
        ></input>
      </form>
      <button onClick={handleDeleteSkill}>Delete</button>
    </>
  );
};

export default SkillsForm;
