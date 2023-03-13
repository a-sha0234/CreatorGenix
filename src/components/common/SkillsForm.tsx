import { useSelector, useDispatch } from "react-redux";
import { store, RootState } from "../../redux/store";
import { updateSkill, deleteSkill } from "../../redux/skills";
import { Input, SkillDelete } from "../../style/styles";
import styled from "styled-components";

interface Iprops {
  id: string;
  formKey: number;
}

const Container = styled.div``;

const SkillsForm: React.FC<Iprops> = ({ id, formKey }) => {
  const dispatch = useDispatch();
  const skills = useSelector((state: RootState) => state.skillData);

  function handleSkillChange(e: any) {
    dispatch(updateSkill({ id: id, value: e.currentTarget.value }));
  }
  function handleDeleteSkill(e: any) {
    e.preventDefault();
    dispatch(deleteSkill(id));
  }

  return (
    <>
      <form>
        <div
          style={{
            maxWidth: "90%",
            margin: "auto",
            position: "relative",
            bottom: "10px",
          }}
        >
          <Container>
            <Input
              name="skill"
              value={skills.form[formKey].skill}
              onChange={handleSkillChange}
              placeholder="skill"
              gridArea=""
            ></Input>
            <SkillDelete onClick={handleDeleteSkill}>Delete</SkillDelete>
          </Container>
        </div>
      </form>
    </>
  );
};

export default SkillsForm;
