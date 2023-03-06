import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

export default function Skills() {
  const skills = useSelector((state: RootState) => state.skillData);
  return (
    <div>
      {skills.form.map((data: any) => {
        return <p>{data.skill}</p>;
      })}
    </div>
  );
}
